import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

type TopicSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type Topic = {
  navLabel: string;
  title: string;
  description: string;
  sections: TopicSection[];
  showContact?: boolean;
};

const topics: Record<string, Topic> = {
  "questions-and-answers": {
    navLabel: "Q/A",
    title: "GcMAF Questions and Answers",
    description:
      "Clear educational answers to common questions about GcMAF, research, formulations, professional use, purchasing, injections, and storage.",
    sections: [
      {
        heading: "What is GcMAF?",
        paragraphs: [
          "GcMAF stands for Gc protein-derived macrophage activating factor. It is related to vitamin D-binding protein and has been studied for its potential influence on macrophage activity and immune-related biological pathways.",
        ],
      },
      {
        heading: "Is every product called GcMAF the same?",
        paragraphs: [
          "No. Products may differ in formulation, concentration, manufacturing controls, storage requirements, intended use, and regulatory status. Professional evaluation should focus on the specific product rather than the name alone.",
        ],
      },
      {
        heading: "Where can I learn more?",
        paragraphs: [
          "Use the topic links on this page to read dedicated information about supplements, purchasing considerations, treatment-related research, therapy, injections, storage, and product inquiries.",
        ],
      },
    ],
  },
  "what-is-gcmaf": {
    navLabel: "What is GcMAF?",
    title: "What Is GcMAF?",
    description:
      "An educational overview of GcMAF, macrophage biology, vitamin D-binding protein, and the research context around macrophage activation.",
    sections: [
      {
        heading: "Gc protein-derived macrophage activating factor",
        paragraphs: [
          "GcMAF is a term used for Gc protein-derived macrophage activating factor. Gc protein is also known as vitamin D-binding protein. Research has explored how related biological preparations may influence macrophage activity.",
          "Macrophages are cells of the innate immune system involved in recognizing and clearing microorganisms, damaged cells, cellular debris, and other biological material.",
        ],
      },
      {
        heading: "Research context",
        paragraphs: [
          "Published work has examined macrophage activation, immune signaling, angiogenesis, and other biological mechanisms. The strength and clinical relevance of evidence vary by study design, formulation, and proposed application.",
        ],
      },
    ],
  },
  "gcmaf-supplement": {
    navLabel: "GcMAF Supplement",
    title: "GcMAF Supplement Information",
    description:
      "Understand what people mean by the term GcMAF supplement and why formulation, intended use, handling, and professional oversight matter.",
    sections: [
      {
        heading: "What does “GcMAF supplement” mean?",
        paragraphs: [
          "The phrase GcMAF supplement is commonly used in online searches, but products associated with GcMAF should not automatically be treated as ordinary dietary supplements.",
          "Formulations can differ in concentration, administration method, manufacturing standards, storage conditions, and intended professional use.",
        ],
      },
      {
        heading: "What to review",
        paragraphs: [
          "Before evaluating a product, confirm what it contains, how it is intended to be handled, and what documentation is available.",
        ],
        bullets: [
          "Manufacturer and product source",
          "Formulation and active components",
          "Batch and quality documentation",
          "Expiry or retest information",
          "Storage and shipping requirements",
          "Intended administration method",
          "Applicable regulatory requirements",
        ],
      },
    ],
  },
  "gcmaf-buy": {
    navLabel: "Buy GcMAF",
    title: "Buying GcMAF: Professional Considerations",
    description:
      "A practical guide to evaluating GcMAF product sourcing, professional procurement, documentation, shipping, and product quality.",
    sections: [
      {
        heading: "Start with the intended use",
        paragraphs: [
          "Before purchasing, determine whether a product is intended for professional clinical, research, or another permitted use in your jurisdiction.",
          "Clinical-grade or injectable products require particular attention to origin, formulation, quality documentation, storage, transportation, sterility, and administration requirements.",
        ],
      },
      {
        heading: "Questions to ask a supplier",
        paragraphs: [
          "A professional procurement review should establish traceability and handling expectations before an order is placed.",
        ],
        bullets: [
          "Is lot-level documentation available?",
          "What are the required shipping and storage conditions?",
          "How is product integrity handled during transit?",
          "What professional credentials or institutional details are required?",
          "What are the applicable import or local regulatory requirements?",
        ],
      },
    ],
  },
  "gcmaf-treatment": {
    navLabel: "Treatment",
    title: "GcMAF Treatment: What the Research Context Means",
    description:
      "An educational summary of how the term GcMAF treatment is used and why research findings should be interpreted carefully.",
    sections: [
      {
        heading: "Research, not a universal treatment claim",
        paragraphs: [
          "Research involving GcMAF has examined macrophage activation and related biological mechanisms. The literature includes different preparations, laboratory work, small studies, and case reports.",
          "Those sources should be interpreted according to their design and limitations. They do not establish GcMAF as a universally proven treatment for specific diseases.",
        ],
      },
      {
        heading: "Professional assessment matters",
        paragraphs: [
          "Any clinical consideration should take account of the individual medical situation, concurrent therapies, local regulations, product characteristics, and appropriate professional supervision.",
        ],
      },
    ],
  },
  "gcmaf-therapy": {
    navLabel: "Therapy",
    title: "GcMAF Therapy",
    description:
      "Learn how the term GcMAF therapy is used in clinical and investigational discussions and how it differs from a specific administration method.",
    sections: [
      {
        heading: "What does GcMAF therapy refer to?",
        paragraphs: [
          "GcMAF therapy generally refers to a broader clinical or investigational approach involving Gc protein-derived macrophage activating factor with the objective of influencing macrophage or immune activity.",
          "A therapy framework can include assessment, formulation selection, administration planning, monitoring, and follow-up. It should not be confused with a single administration method such as an injection.",
        ],
      },
      {
        heading: "Evidence and oversight",
        paragraphs: [
          "The evidence base varies across proposed applications. Clinical decisions should be made by appropriately qualified healthcare professionals within applicable laws and professional standards.",
        ],
      },
    ],
  },
  "gcmaf-injections": {
    navLabel: "Injections",
    title: "GcMAF Injections",
    description:
      "Information about injectable GcMAF formulations, professional handling, storage, preparation, and administration considerations.",
    sections: [
      {
        heading: "Injectable formulations",
        paragraphs: [
          "GcMAF injections refer to injectable formulations containing Gc protein-derived macrophage activating factor or related preparations intended for professional administration.",
          "Depending on the product, a formulation may be supplied as a refrigerated liquid or as a lyophilized preparation that requires reconstitution according to the manufacturer's instructions.",
        ],
      },
      {
        heading: "Handling considerations",
        paragraphs: [
          "Injectable products require appropriate preparation, sterility controls, storage, dosing decisions, administration procedures, and professional oversight.",
        ],
      },
    ],
  },
  "gcmaf-storage": {
    navLabel: "Storage",
    title: "GcMAF Storage and Handling",
    description:
      "Review storage, shipping, temperature control, reconstitution, and product-handling considerations for different GcMAF formulations.",
    sections: [
      {
        heading: "Storage depends on formulation",
        paragraphs: [
          "Storage requirements are product-specific. Some liquid formulations may require refrigerated storage and temperature-controlled transportation, while some lyophilized products may offer different pre-reconstitution storage requirements.",
          "Always follow the manufacturer-specific instructions for storage temperature, transport, expiry, reconstitution, and handling after preparation.",
        ],
      },
      {
        heading: "Protect product integrity",
        paragraphs: [
          "Professional handling should include documented receipt, appropriate inventory control, monitoring of required conditions, and a clear process for reviewing products that may have been exposed to conditions outside specification.",
        ],
      },
    ],
  },
  "product-inquiry": {
    navLabel: "Product Inquiry",
    title: "Professional GcMAF Product Inquiry",
    description:
      "Contact gcmaf.net for professional product information, formulation details, storage and shipping requirements, and procurement inquiries.",
    sections: [
      {
        heading: "Information for professional inquiries",
        paragraphs: [
          "Healthcare professionals and appropriate institutions can request information about available formulations, product specifications, storage and shipping requirements, and professional procurement procedures.",
        ],
        bullets: [
          "Product and formulation information",
          "Storage and shipping requirements",
          "Professional procurement information",
          "Documentation and handling questions",
        ],
      },
    ],
    showContact: true,
  },
};

const topicLinks = Object.entries(topics).map(([slug, topic]) => ({
  label: topic.navLabel,
  href: `/gcmaf-for-sale/${slug}`,
}));

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics[slug];
  if (!topic) return {};

  const canonical = `https://gcmaf.net/gcmaf-for-sale/${slug}`;

  return {
    title: `${topic.title} | GcMAF`,
    description: topic.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: topic.title,
      description: topic.description,
      url: canonical,
      siteName: "GcMAF",
      type: "article",
    },
  };
}

export default async function GcmafTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = topics[slug];
  if (!topic) notFound();

  return (
    <main className="min-h-screen bg-bg">
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <nav
            className="mb-8 flex flex-wrap items-center gap-2 font-body text-sm text-white/70"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/gcmaf-for-sale"
              className="transition hover:text-white"
            >
              GcMAF for Sale
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{topic.navLabel}</span>
          </nav>

          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            GcMAF Information
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
            {topic.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-white/85">
            {topic.description}
          </p>
        </div>
      </section>

      <nav
        className="sticky top-16 z-30 border-y border-border bg-surface/95 backdrop-blur-lg"
        aria-label="GcMAF topics"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-6 overflow-x-auto py-4 [scrollbar-width:none]">
          {topicLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-sm font-medium transition-colors whitespace-nowrap ${
                item.href.endsWith(`/${slug}`)
                  ? "text-brand"
                  : "text-ink-muted hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 lg:px-8">
        <Link
          href="/gcmaf-for-sale"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-body text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
        >
          <ArrowLeft size={16} />
          Back to GcMAF for Sale
        </Link>

        <div className="blog-article rounded-2xl border border-border bg-surface p-7 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(37,49,94,0.08)]">
          {topic.sections.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {topic.showContact && (
            <div className="mt-10 rounded-2xl border border-border bg-bg p-6 md:p-8">
              <h2 className="mb-3">Contact gcmaf.net</h2>
              <p>
                Use the contact page for professional product availability and
                procurement inquiries.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-white no-underline transition hover:bg-brand"
              >
                Product Inquiry
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
