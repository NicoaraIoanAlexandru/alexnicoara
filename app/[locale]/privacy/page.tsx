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
      title: "Politica de confidențialitate | Alex Nicoară",
      description:
        "Informații despre modul în care alexnicoara.com colectează și utilizează datele.",
    };
  }

  return {
    title: "Privacy Policy | Alex Nicoară",
    description:
      "Information about how alexnicoara.com collects and uses personal data.",
  };
}

export default async function PrivacyPage({params}: PageProps) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "ro") {
    notFound();
  }

  if (locale === "ro") {
    return (
      <LegalPage
        eyebrow="Confidențialitate"
        title="Politica de confidențialitate"
        lastUpdated="Ultima actualizare: 23 septembrie 2026"
        intro="Această politică explică modul în care sunt colectate, utilizate și protejate informațiile atunci când vizitezi alexnicoara.com sau trimiți o solicitare prin formularul de contact."
        sections={[
          {
            title: "1. Cine administrează acest site",
            paragraphs: [
              "Site-ul alexnicoara.com este administrat de Alex Nicoară.",
              "Pentru întrebări referitoare la confidențialitate sau date personale, mă poți contacta la nicoara.ioan.alexandru@gmail.com.",
            ],
          },
          {
            title: "2. Ce date pot fi colectate",
            paragraphs: [
              "Datele colectate depind de modul în care interacționezi cu site-ul.",
            ],
            items: [
              "Date furnizate prin formularul de contact, precum numele, adresa de email, compania, tipul proiectului, bugetul, termenul estimat și descrierea proiectului.",
              "Date tehnice și statistice despre utilizarea site-ului atunci când accepți Analytics.",
              "Informații tehnice necesare pentru funcționarea și securitatea site-ului.",
            ],
          },
          {
            title: "3. Formularul de contact",
            paragraphs: [
              "Informațiile trimise prin formular sunt utilizate exclusiv pentru a analiza solicitarea și pentru a răspunde mesajului tău.",
              "Mesajele sunt transmise prin servicii de infrastructură și email utilizate pentru operarea site-ului.",
            ],
          },
          {
            title: "4. Google Analytics",
            paragraphs: [
              "Google Analytics este utilizat numai dacă îți exprimi acordul prin bannerul de preferințe.",
              "Înainte de acord, scripturile Google Analytics nu sunt încărcate și nu sunt transmise date către Google Analytics prin această integrare.",
              "Analytics este folosit pentru a înțelege, la nivel agregat, modul în care este utilizat site-ul și pentru a îmbunătăți experiența vizitatorilor.",
            ],
          },
          {
            title: "5. Vercel Web Analytics",
            paragraphs: [
              "Site-ul utilizează și Vercel Web Analytics pentru informații generale despre trafic și performanță.",
              "Conform documentației Vercel, Web Analytics nu utilizează cookie-uri pentru identificarea vizitatorilor și folosește identificatori temporari first-party pentru măsurarea traficului.",
            ],
          },
          {
            title: "6. Furnizori de servicii",
            paragraphs: [
              "Pentru operarea site-ului pot fi utilizate servicii furnizate de terți.",
            ],
            items: [
              "Vercel — hosting, deployment și Web Analytics.",
              "Google — Google Analytics, doar după acordul pentru Analytics.",
              "Resend — transmiterea mesajelor generate prin formularul de contact.",
            ],
          },
          {
            title: "7. Scopul utilizării datelor",
            items: [
              "pentru a răspunde solicitărilor și mesajelor primite;",
              "pentru a opera și securiza site-ul;",
              "pentru a analiza performanța și utilizarea site-ului;",
              "pentru a îmbunătăți experiența și conținutul site-ului.",
            ],
          },
          {
            title: "8. Păstrarea datelor",
            paragraphs: [
              "Datele sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au fost colectate sau pentru îndeplinirea obligațiilor legale aplicabile.",
              "Mesajele trimise prin formular pot fi păstrate în sistemele de email atât timp cât este necesar pentru gestionarea comunicării și eventualei colaborări.",
            ],
          },
          {
            title: "9. Drepturile tale",
            paragraphs: [
              "În funcție de legislația aplicabilă, poți avea dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate și opoziție.",
              "Poți retrage oricând acordul pentru Analytics utilizând butonul „Setări cookies” disponibil pe site.",
            ],
          },
          {
            title: "10. Securitatea datelor",
            paragraphs: [
              "Sunt utilizate măsuri tehnice și organizaționale rezonabile pentru protejarea datelor și pentru reducerea riscului de acces neautorizat, pierdere sau utilizare necorespunzătoare.",
            ],
          },
          {
            title: "11. Modificări",
            paragraphs: [
              "Această politică poate fi actualizată periodic pentru a reflecta modificări ale site-ului, serviciilor utilizate sau cerințelor legale.",
            ],
          },
          {
            title: "12. Contact",
            paragraphs: [
              "Pentru întrebări privind această politică sau datele tale personale, poți scrie la nicoara.ioan.alexandru@gmail.com.",
            ],
          },
        ]}
      />
    );
  }

  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      lastUpdated="Last updated: September 23, 2026"
      intro="This policy explains how information is collected, used and protected when you visit alexnicoara.com or submit an inquiry through the contact form."
      sections={[
        {
          title: "1. Who operates this website",
          paragraphs: [
            "alexnicoara.com is operated by Alex Nicoară.",
            "For questions regarding privacy or personal data, you can contact me at nicoara.ioan.alexandru@gmail.com.",
          ],
        },
        {
          title: "2. Information that may be collected",
          paragraphs: [
            "The information collected depends on how you interact with the website.",
          ],
          items: [
            "Information submitted through the contact form, such as your name, email address, company, project type, budget, timeline and project description.",
            "Technical and statistical information about website usage when you consent to Analytics.",
            "Technical information necessary for the operation and security of the website.",
          ],
        },
        {
          title: "3. Contact form",
          paragraphs: [
            "Information submitted through the contact form is used solely to review your inquiry and respond to your message.",
            "Messages are transmitted through infrastructure and email services used to operate the website.",
          ],
        },
        {
          title: "4. Google Analytics",
          paragraphs: [
            "Google Analytics is used only after you provide consent through the website's privacy preferences.",
            "Before consent is provided, Google Analytics scripts are not loaded and no data is transmitted to Google Analytics through this integration.",
            "Analytics is used to understand, in aggregate, how the website is used and to improve the visitor experience.",
          ],
        },
        {
          title: "5. Vercel Web Analytics",
          paragraphs: [
            "The website also uses Vercel Web Analytics to obtain general information about traffic and performance.",
            "According to Vercel's documentation, Web Analytics does not use cookies to identify visitors and uses temporary first-party identifiers for traffic measurement.",
          ],
        },
        {
          title: "6. Service providers",
          paragraphs: [
            "Third-party services may be used to operate the website.",
          ],
          items: [
            "Vercel — hosting, deployment and Web Analytics.",
            "Google — Google Analytics, only after Analytics consent.",
            "Resend — delivery of messages generated through the contact form.",
          ],
        },
        {
          title: "7. How information is used",
          items: [
            "to respond to inquiries and messages;",
            "to operate and secure the website;",
            "to analyze website performance and usage;",
            "to improve the website experience and content.",
          ],
        },
        {
          title: "8. Data retention",
          paragraphs: [
            "Information is retained only for as long as necessary for the purposes for which it was collected or to comply with applicable legal obligations.",
            "Messages submitted through the contact form may remain in email systems for as long as necessary to manage the communication and any resulting collaboration.",
          ],
        },
        {
          title: "9. Your rights",
          paragraphs: [
            "Depending on applicable law, you may have rights including access, correction, deletion, restriction, portability and objection.",
            "You can withdraw Analytics consent at any time using the “Cookie settings” control available on the website.",
          ],
        },
        {
          title: "10. Data security",
          paragraphs: [
            "Reasonable technical and organizational measures are used to protect information and reduce the risk of unauthorized access, loss or misuse.",
          ],
        },
        {
          title: "11. Changes to this policy",
          paragraphs: [
            "This policy may be updated periodically to reflect changes to the website, services used or applicable legal requirements.",
          ],
        },
        {
          title: "12. Contact",
          paragraphs: [
            "For questions about this policy or your personal data, contact nicoara.ioan.alexandru@gmail.com.",
          ],
        },
      ]}
    />
  );
}