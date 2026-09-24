"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import {useLocale, useTranslations} from "next-intl";
import {trackEvent} from "@/lib/analytics/ga";

import {FormField} from "@/components/ui/FormField";
import {Modal} from "@/components/ui/Modal";
import {Select} from "@/components/ui/Select";
import {Textarea} from "@/components/ui/Textarea";
import {
  submitContactInquiry,
  type ContactActionResult,
  type FieldName,
} from "@/lib/actions/contact";

const initialState: ContactActionResult = {
  status: "error",
  code: "unknown",
};

const PROJECT_TYPE_VALUES = ["ai", "security", "delivery", "other"] as const;
const BUDGET_VALUES = ["under5k", "5kTo20k", "over20k", "notSure"] as const;
const TIMELINE_VALUES = [
  "asap",
  "oneToThreeMonths",
  "threePlusMonths",
  "notSure",
] as const;

// Visual/DOM order of the real (non-honeypot) fields, used to find the
// "first" invalid field for focus management after a validation failure.
const FIELD_ORDER: FieldName[] = [
  "name",
  "email",
  "projectType",
  "company",
  "budget",
  "timeline",
  "description",
];

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  company: string;
  budget: string;
  timeline: string;
  description: string;
};

const initialFormValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  company: "",
  budget: "",
  timeline: "",
  description: "",
};

const FIELD_ERROR_KEYS: Record<FieldName, Record<string, string>> = {
  name: {invalid_length: "fieldErrors.name.invalidLength"},
  email: {
    required: "fieldErrors.email.required",
    invalid_format: "fieldErrors.email.invalidFormat",
  },
  projectType: {invalid_option: "fieldErrors.projectType.invalidOption"},
  description: {invalid_length: "fieldErrors.description.invalidLength"},
  company: {invalid_length: "fieldErrors.company.invalidLength"},
  budget: {invalid_option: "fieldErrors.budget.invalidOption"},
  timeline: {invalid_option: "fieldErrors.timeline.invalidOption"},
};

const inputClassName = `
  w-full
  rounded-2xl
  border
  border-white/10
  bg-white/[0.03]
  px-4
  py-3
  text-sm
  text-white
  placeholder:text-white/40
  transition
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--brand-cyan)]
  focus-visible:ring-offset-2
  focus-visible:ring-offset-black
`;

const submitButtonClassName = `
  inline-flex
  w-full
  items-center
  justify-center
  rounded-full
  border
  border-white/10
  bg-white
  px-6
  py-3
  text-sm
  font-medium
  text-black
  transition
  hover:bg-[var(--brand-cyan)]
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--brand-cyan)]
  focus-visible:ring-offset-2
  focus-visible:ring-offset-black
  disabled:cursor-not-allowed
  disabled:opacity-60
  disabled:hover:bg-white
  sm:w-auto
`;

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const tSuccess = useTranslations("Contact.successModal");
  const locale = useLocale();

  const [state, formAction, pending] = useActionState(
    submitContactInquiry,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);
  const previousPendingRef = useRef(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const leadTrackedRef = useRef(false);

  // Real (non-honeypot) field values are lifted into component state so
  // they survive React 19's automatic uncontrolled-field reset that runs
  // whenever `<form action>` returns a value (success or error alike).
  // See node_modules/next/dist/docs/01-app/02-guides/forms.md — the
  // controlled-field pattern is the documented way to keep values across
  // an action result.
  const [values, setValues] = useState<FormValues>(initialFormValues);

  // React 19 restores controlled <input>/<textarea> DOM values after the
  // action-triggered native form reset, but empirically (verified live)
  // does *not* reliably do the same for controlled <select> elements: the
  // browser's native reset clears the selected option and React does not
  // always re-assert it on the following commit, since the "value" prop
  // itself hasn't changed. Bumping this key after every completed
  // submission forces the three <Select> instances below to remount, which
  // makes React set their DOM value from `values` again on mount — a
  // React-supported way to resync, not a manual DOM write.
  const [formInstanceKey, setFormInstanceKey] = useState(0);

  // One ref per real field (assigned directly, not via a mutating callback,
  // so the React Compiler's ref-during-render check stays satisfied) used
  // only for the focus-management fix below.
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const projectTypeFieldRef = useRef<HTMLSelectElement>(null);
  const companyFieldRef = useRef<HTMLInputElement>(null);
  const budgetFieldRef = useRef<HTMLSelectElement>(null);
  const timelineFieldRef = useRef<HTMLSelectElement>(null);
  const descriptionFieldRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<
    FieldName,
    React.RefObject<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
    >
  > = {
    name: nameFieldRef,
    email: emailFieldRef,
    projectType: projectTypeFieldRef,
    company: companyFieldRef,
    budget: budgetFieldRef,
    timeline: timelineFieldRef,
    description: descriptionFieldRef,
  };

  function handleFieldChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const {name, value} = event.target;

    setValues((previous) => ({...previous, [name]: value}));
  }

  useEffect(() => {
    if (previousPendingRef.current && !pending) {
      setHasSubmitted(true);
      setDismissed(false);
      setFormInstanceKey((key) => key + 1);
    }

    previousPendingRef.current = pending;
  }, [pending]);

  // Secondary fix: move focus to the first invalid field (in visual/DOM
  // order) after a validation failure. `state.fieldErrors` already gives
  // us enough information to do this purely client-side.
  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) {
      return;
    }

    const firstInvalidField = FIELD_ORDER.find(
      (field) => state.status === "error" && state.fieldErrors?.[field]
    );

    if (firstInvalidField) {
      fieldRefs[firstInvalidField].current?.focus();
    }
    // `formInstanceKey` is included so this re-runs (and re-applies focus)
    // after the Select remount above replaces the DOM node that may have
    // just been focused.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, formInstanceKey]);

  const status: "idle" | "submitting" | "success" | "error" = pending
    ? "submitting"
    : hasSubmitted
      ? state.status === "success"
        ? "success"
        : "error"
      : "idle";

  useEffect(() => {
    if (
      status === "success" &&
      !leadTrackedRef.current
    ) {
      trackEvent("generate_lead", {
        source: "contact_form",
        locale,
        project_type: values.projectType,
      });

      leadTrackedRef.current = true;
    }
  }, [status, locale, values.projectType]);

  const modalOpen = status === "success" && !dismissed;

  const fieldErrors =
    state.status === "error" ? state.fieldErrors : undefined;

  function getFieldError(field: FieldName): string | undefined {
    const code = fieldErrors?.[field];

    if (!code) {
      return undefined;
    }

    const key = FIELD_ERROR_KEYS[field][code];
    return key ? t(key) : undefined;
  }

  function handleModalClose() {
    setDismissed(true);
    setHasSubmitted(false);
    setValues(initialFormValues);
    leadTrackedRef.current = false;
    formRef.current?.reset();
  }

  const topLevelErrorMessage =
    status === "error" && state.status === "error"
      ? state.code === "rate_limited"
        ? t("errors.rateLimited")
        : state.code === "delivery_failed"
          ? t("errors.deliveryFailed")
          : state.code === "validation"
            ? t("errors.validation")
            : t("errors.unknown")
      : undefined;

  return (
    <div>
      <form
        ref={formRef}
        action={formAction}
        noValidate
        className="grid gap-5 text-left sm:grid-cols-2"
      >
        {/* Honeypot field — hidden from real visitors, never revealed as an error. */}
        <div
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        >
          <label htmlFor="website">
            Website
          </label>

          <input
            id="website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <FormField label={t("nameLabel")} error={getFieldError("name")}>
          <input
            ref={nameFieldRef}
            type="text"
            name="name"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            maxLength={100}
            required
            value={values.name}
            onChange={handleFieldChange}
            className={inputClassName}
          />
        </FormField>

        <FormField label={t("emailLabel")} error={getFieldError("email")}>
          <input
            ref={emailFieldRef}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            maxLength={254}
            required
            value={values.email}
            onChange={handleFieldChange}
            className={inputClassName}
          />
        </FormField>

        <FormField
          label={t("projectTypeLabel")}
          error={getFieldError("projectType")}
        >
          <Select
            key={`projectType-${formInstanceKey}`}
            ref={projectTypeFieldRef}
            name="projectType"
            required
            value={values.projectType}
            onChange={handleFieldChange}
          >
            <option value="" disabled>
              {t("projectTypePlaceholder")}
            </option>

            {PROJECT_TYPE_VALUES.map((value) => (
              <option key={value} value={value}>
                {t(`projectTypeOptions.${value}`)}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          label={t("companyLabel")}
          optional
          optionalLabel={t("optionalLabel")}
        >
          <input
            ref={companyFieldRef}
            type="text"
            name="company"
            autoComplete="organization"
            placeholder={t("companyPlaceholder")}
            maxLength={200}
            value={values.company}
            onChange={handleFieldChange}
            className={inputClassName}
          />
        </FormField>

        <FormField
          label={t("budgetLabel")}
          optional
          optionalLabel={t("optionalLabel")}
        >
          <Select
            key={`budget-${formInstanceKey}`}
            ref={budgetFieldRef}
            name="budget"
            value={values.budget}
            onChange={handleFieldChange}
          >
            <option value="">
              {t("budgetPlaceholder")}
            </option>

            {BUDGET_VALUES.map((value) => (
              <option key={value} value={value}>
                {t(`budgetOptions.${value}`)}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          label={t("timelineLabel")}
          optional
          optionalLabel={t("optionalLabel")}
        >
          <Select
            key={`timeline-${formInstanceKey}`}
            ref={timelineFieldRef}
            name="timeline"
            value={values.timeline}
            onChange={handleFieldChange}
          >
            <option value="">
              {t("timelinePlaceholder")}
            </option>

            {TIMELINE_VALUES.map((value) => (
              <option key={value} value={value}>
                {t(`timelineOptions.${value}`)}
              </option>
            ))}
          </Select>
        </FormField>

        <div className="sm:col-span-2">
          <FormField
            label={t("descriptionLabel")}
            error={getFieldError("description")}
          >
            <Textarea
              ref={descriptionFieldRef}
              name="description"
              rows={5}
              minLength={20}
              maxLength={5000}
              placeholder={t("descriptionPlaceholder")}
              required
              value={values.description}
              onChange={handleFieldChange}
            />
          </FormField>
        </div>

        <div className="sm:col-span-2">
          {topLevelErrorMessage && (
            <p
              role="alert"
              className="mb-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {topLevelErrorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className={submitButtonClassName}
          >
            {pending ? t("submitting") : t("submit")}
          </button>

          <p className="mt-4 text-xs text-white/50">
            {t("privacyNotice")}
          </p>

          {status === "error" && (
            <p className="mt-3 text-xs text-white/60">
              {t("fallbackHint")}
            </p>
          )}
        </div>
      </form>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        title={tSuccess("title")}
      >
        <p>{tSuccess("body")}</p>

        <button
          type="button"
          onClick={handleModalClose}
          className={`${submitButtonClassName} mt-6`}
        >
          {tSuccess("ok")}
        </button>
      </Modal>
    </div>
  );
}
