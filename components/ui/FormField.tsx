import {cloneElement, isValidElement, useId} from "react";

type FieldElementProps = {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

/**
 * Composes a `<label htmlFor>`, the field itself, and an error `<p id>`,
 * wiring `aria-invalid`/`aria-describedby` centrally so this doesn't get
 * hand-repeated across every form field.
 */
export function FormField({
  label,
  error,
  optional,
  optionalLabel,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  optionalLabel?: string;
  children: React.ReactElement<FieldElementProps>;
}) {
  const fieldId = useId();
  const errorId = `${fieldId}-error`;

  const field = isValidElement(children)
    ? cloneElement(children, {
        id: fieldId,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
      })
    : children;

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block text-sm font-medium text-white/80"
      >
        {label}

        {optional && (
          <span className="ml-1 font-normal text-white/40">
            {optionalLabel}
          </span>
        )}
      </label>

      <div className="mt-2">
        {field}
      </div>

      {error && (
        <p
          id={errorId}
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
