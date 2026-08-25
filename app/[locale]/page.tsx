import {setRequestLocale} from "next-intl/server";

import {Hero} from "@/components/sections/Hero";
import {WhatIBuild} from "@/components/sections/WhatIBuild";
import {FeaturedProjects} from "@/components/sections/FeaturedProjects";
import {About} from "@/components/sections/About";
import {Experience} from "@/components/sections/Experience";
import {Services} from "@/components/sections/Services";
import {Contact} from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />

      <WhatIBuild />

      <FeaturedProjects />

      <About />

      <Experience />

      <Services />

      <Contact />
    </main>
  );
}