import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { WhatIsGcMAF } from "@/components/sections/WhatIsGcMAF";
import { ClinicalGrid } from "@/components/sections/ClinicalGrid";
import { VariantCards } from "@/components/sections/VariantCards";
import { BenefitsList } from "@/components/sections/BenefitsList";
// import { HowItWorks } from '@/components/sections/HowItWorks';
import { ResearchStats } from "@/components/sections/ResearchStats";
import { ContactBanner } from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "GcMAF | Activating Your Body's First Line of Defense",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatIsGcMAF />

      {/* Explainer video */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Explainer
              <span className="w-6 h-px bg-brand" />
            </span>
            <h2 className="font-display text-section font-semibold text-ink leading-tight">
              See GcMAF in Action
            </h2>
          </div>
          <video
            controls
            muted
            playsInline
            className="w-full rounded-2xl max-w-4xl mx-auto block"
          >
            <source
              src="https://cdn.gcmaf.net/immunax-explainer.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* How Does GcMAF Work? — text section */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Mechanism
              <span className="w-6 h-px bg-brand" />
            </span>
            <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
              How Does GcMAF Work?
            </h2>
            <p className="font-body text-ink-muted leading-relaxed text-lg">
              GcMAF supports your body&apos;s innate defense and healing
              mechanisms by activating immune cells called macrophages &ndash;
              large white blood cells, which lay dormant until called upon.
              Activated macrophages are like the commanding officers of your
              immune system. They can recruit backup in the form of an army of
              other immune cells that fight disease and infection.
            </p>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl max-w-4xl mx-auto block mt-10"
          >
            <source
              src="https://cdn.gcmaf.net/home-how-does-it-work.mov"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <ClinicalGrid />
      <VariantCards />
      <BenefitsList />
      {/* <HowItWorks /> */}
      <ResearchStats />

      <ContactBanner />
    </>
  );
}
