import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {LegalPage} from "@/components/legal/LegalPage";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {locale} = await params;

  if (locale === "ro") {
    return {
      title: "Politica privind cookies | Alex Nicoară",
      description:
        "Informații despre utilizarea cookies și a serviciilor de analiză pe alexnicoara.com.",
    };
  }

  return {
    title: "Cookie Policy | Alex Nicoară",
    description:
      "Information about cookies and analytics technologies used on alexnicoara.com.",
  };
}

export default async function CookiesPage({params}: PageProps) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "ro") {
    notFound();
  }

  if (locale === "ro") {
    return (
      <LegalPage
        eyebrow="Cookies"
        title="Politica privind cookies"
        lastUpdated="Ultima actualizare: 23 septembrie 2026"
        intro="Această pagină explică ce tehnologii de stocare și analiză sunt utilizate pe alexnicoara.com și cum îți poți controla preferințele."
        sections={[
          {
            title: "1. Ce sunt cookie-urile",
            paragraphs: [
              "Cookie-urile sunt fișiere sau identificatori de mici dimensiuni care pot fi stocați de browser și utilizați de site-uri sau servicii terțe pentru funcționalitate, preferințe sau măsurarea utilizării.",
            ],
          },
          {
            title: "2. Cookie-uri esențiale",
            paragraphs: [
              "Funcționalitățile de bază ale site-ului nu depind de Google Analytics.",
              "Preferința privind Analytics este salvată local în browser pentru ca site-ul să îți poată respecta alegerea la vizitele următoare.",
            ],
          },
          {
            title: "3. Google Analytics",
            paragraphs: [
              "Google Analytics este o categorie opțională și este activată numai după ce alegi explicit să accepți Analytics.",
              "Dacă refuzi Analytics, scriptul Google Analytics nu este încărcat prin implementarea acestui site.",
              "Google Analytics poate utiliza cookies sau tehnologii similare pentru măsurarea interacțiunilor și a duratei vizitelor.",
            ],
          },
          {
            title: "4. Vercel Web Analytics",
            paragraphs: [
              "Site-ul utilizează Vercel Web Analytics separat de Google Analytics.",
              "Conform documentației Vercel, Web Analytics este conceput să funcționeze fără cookies pentru identificarea vizitatorilor.",
            ],
          },
          {
            title: "5. Preferințele tale",
            paragraphs: [
              "La prima vizită poți accepta Analytics, refuza opționalele sau deschide preferințele.",
              "Poți modifica ulterior alegerea utilizând butonul „Setări cookies” disponibil în partea de jos a site-ului.",
            ],
          },
          {
            title: "6. Retragerea consimțământului",
            paragraphs: [
              "Poți retrage oricând acordul pentru Analytics. După salvarea noilor preferințe și reîncărcarea paginii, Google Analytics nu va mai fi încărcat.",
            ],
          },
          {
            title: "7. Actualizări",
            paragraphs: [
              "Această politică poate fi actualizată dacă sunt adăugate sau modificate servicii, tehnologii de analiză sau cerințe legale.",
            ],
          },
          {
            title: "8. Contact",
            paragraphs: [
              "Pentru întrebări privind cookies sau confidențialitatea, poți scrie la nicoara.ioan.alexandru@gmail.com.",
            ],
          },
        ]}
      />
    );
  }

  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      lastUpdated="Last updated: September 23, 2026"
      intro="This page explains the storage and analytics technologies used on alexnicoara.com and how you can control your preferences."
      sections={[
        {
          title: "1. What cookies are",
          paragraphs: [
            "Cookies are small files or identifiers that may be stored by your browser and used by websites or third-party services for functionality, preferences or usage measurement.",
          ],
        },
        {
          title: "2. Essential functionality",
          paragraphs: [
            "The website's core functionality does not depend on Google Analytics.",
            "Your Analytics preference is stored locally in your browser so the website can respect your choice on future visits.",
          ],
        },
        {
          title: "3. Google Analytics",
          paragraphs: [
            "Google Analytics is optional and is enabled only after you explicitly choose to accept Analytics.",
            "If you reject Analytics, the Google Analytics script is not loaded through this website's implementation.",
            "Google Analytics may use cookies or similar technologies to measure interactions and visit duration.",
          ],
        },
        {
          title: "4. Vercel Web Analytics",
          paragraphs: [
            "The website uses Vercel Web Analytics separately from Google Analytics.",
            "According to Vercel's documentation, Web Analytics is designed to identify traffic without using cookies for visitor identification.",
          ],
        },
        {
          title: "5. Your preferences",
          paragraphs: [
            "On your first visit you can accept Analytics, reject optional analytics or open the preferences panel.",
            "You can change your choice later using the “Cookie settings” control available at the bottom of the website.",
          ],
        },
        {
          title: "6. Withdrawing consent",
          paragraphs: [
            "You may withdraw Analytics consent at any time. After saving your new preference and reloading the page, Google Analytics will no longer be loaded.",
          ],
        },
        {
          title: "7. Updates",
          paragraphs: [
            "This policy may be updated if services, analytics technologies or applicable legal requirements change.",
          ],
        },
        {
          title: "8. Contact",
          paragraphs: [
            "For questions about cookies or privacy, contact nicoara.ioan.alexandru@gmail.com.",
          ],
        },
      ]}
    />
  );
}