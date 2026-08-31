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
          "GcMAF stands for Gc protein-derived macrophage activating factor. It is related to vitamin D-binding protein, also called Gc protein, and has been studied in the context of macrophage biology and immune signaling.",
          "Macrophages are innate immune cells involved in recognizing microorganisms, clearing damaged cells and debris, coordinating inflammatory responses, and interacting with other immune cells. GcMAF research therefore sits within the broader field of immune biology and macrophage regulation.",
        ],
      },
      {
        heading: "How should GcMAF research be interpreted?",
        paragraphs: [
          "GcMAF literature includes laboratory experiments, observational reports, case studies, clinical studies, reviews, and historical publications. Study design, sample size, endpoints, formulation, replication, and publication status help place each finding in context.",
          "Biological mechanisms, macrophage activity, signaling findings, biomarkers, and clinical outcomes provide different kinds of information. Reviewing these layers together gives a clearer picture of the evidence.",
        ],
      },
      {
        heading: "Are all GcMAF products identical?",
        paragraphs: [
          "Products may differ in formulation, concentration, manufacturing controls, packaging, storage requirements, intended use, and regulatory status. Professional evaluation should focus on the specific product and its documentation.",
          "When comparing products, review the manufacturer, formulation, batch information, expiry or retest information, shipping requirements, and available quality documentation.",
        ],
      },
      {
        heading: "What should I know about storage and handling?",
        paragraphs: [
          "Storage requirements are formulation-specific. Liquid and lyophilized products may have different temperature, transport, reconstitution, and post-preparation requirements. Manufacturer instructions should guide handling for the specific product.",
          "Professional handling normally includes documented receipt, inventory control, review of temperature excursions, and a clear process for evaluating product condition.",
        ],
      },
      {
        heading: "Where can I learn more?",
        paragraphs: [
          "Use the topic navigation on this page to read dedicated information about supplements, purchasing considerations, treatment-related research, therapy terminology, injections, storage, and professional product inquiries. The research section provides additional scientific context.",
        ],
      },
    ],
  },

  "what-is-gcmaf": {
    navLabel: "What is GcMAF?",
    title: "What Is GcMAF?",
    description:
      "An educational overview of GcMAF, macrophage biology, vitamin D-binding protein, and research involving macrophage activation.",
    sections: [
      {
        heading: "Gc protein-derived macrophage activating factor",
        paragraphs: [
          "GcMAF is a term used for Gc protein-derived macrophage activating factor. Gc protein is also known as vitamin D-binding protein, a circulating protein best known for transporting vitamin D metabolites. Research has explored additional biological and immune-related functions of vitamin D-binding protein and related preparations.",
          "GcMAF has been studied in laboratory and clinical research involving macrophage activity, immune signaling, biomarkers, and selected health conditions.",
        ],
      },
      {
        heading: "Why macrophages are important",
        paragraphs: [
          "Macrophages are cells of the innate immune system involved in recognizing and clearing microorganisms, damaged cells, cellular debris, and other biological material. They also produce signaling molecules and interact with many other immune and tissue cells.",
          "Macrophage behavior changes according to tissue environment, metabolic state, inflammatory signals, infection, injury, and many other biological factors.",
        ],
      },
      {
        heading: "Vitamin D-binding protein and GcMAF terminology",
        paragraphs: [
          "Vitamin D-binding protein is a well-characterized plasma protein with established roles in transporting vitamin D metabolites. Scientific literature has also examined actin scavenging, fatty-acid binding, chemotactic interactions, and immune-related effects.",
          "The exact GcMAF preparation and experimental context matter when comparing studies because manufacturing methods, formulations, concentrations, and protocols can differ.",
        ],
      },
      {
        heading: "Research context and evidence quality",
        paragraphs: [
          "Published work has examined macrophage activation, immune signaling, angiogenesis, endocannabinoid pathways, biomarkers, and clinical observations. The clinical relevance of a result is best understood by considering study design, formulation, sample size, controls, endpoints, replication, and publication status.",
          "Laboratory research provides biological and mechanistic information, while clinical studies evaluate outcomes in people. Together these research layers contribute to the wider scientific picture.",
        ],
      },
    ],
  },

  "gcmaf-supplement": {
    navLabel: "GcMAF Supplement",
    title: "GcMAF Supplement Information",
    description:
      "Understand the term GcMAF supplement and the importance of formulation, intended use, handling, documentation, and professional oversight.",
    sections: [
      {
        heading: "What does GcMAF supplement mean?",
        paragraphs: [
          "The phrase GcMAF supplement is commonly used in online searches. Products associated with GcMAF can differ in legal classification, formulation, concentration, administration method, manufacturing standards, storage conditions, packaging, and intended professional use.",
          "A product is best evaluated by its actual specifications, documentation, and intended use rather than by a broad product label alone.",
        ],
      },
      {
        heading: "What to review before comparing products",
        paragraphs: [
          "Before evaluating a product, confirm what it contains, how it is intended to be handled, and what documentation is available. Product identity and traceability help create a clear professional procurement record.",
        ],
        bullets: [
          "Manufacturer and product source",
          "Formulation and listed active components",
          "Batch or lot documentation",
          "Expiry or retest information",
          "Storage and shipping requirements",
          "Packaging and presentation",
          "Intended administration or use",
          "Applicable regulatory requirements",
        ],
      },
      {
        heading: "Product quality and clinical evidence",
        paragraphs: [
          "Manufacturing documentation, controlled shipping, sterility where applicable, and traceability are important product-quality considerations. Clinical evidence is evaluated through the scientific literature for the specific formulation, study population, and proposed application.",
          "When reading research, consider laboratory findings, clinical observations, study design, sample size, replication, formulation, and the current regulatory context.",
        ],
      },
      {
        heading: "Questions for a professional supplier",
        paragraphs: [
          "Useful questions include the exact formulation, storage conditions, available documentation, batch identification, shipping process, destination requirements, and the process used if a shipment arrives outside the expected condition.",
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
    title: "GcMAF Treatment Research",
    description:
      "An educational summary of GcMAF treatment-related research, macrophage biology, study design, clinical observations, and professional assessment.",
    sections: [
      {
        heading: "GcMAF treatment research",
        paragraphs: [
          "Research involving GcMAF has examined macrophage activation and related biological mechanisms. The literature includes different preparations, laboratory work, observational reports, case studies, small clinical studies, and other forms of evidence.",
          "These sources contribute different types of information and are best interpreted according to their design, formulation, endpoints, replication, publication status, and clinical context.",
        ],
      },
      {
        heading: "How to read treatment-related studies",
        paragraphs: [
          "When a paper reports a clinical outcome, look at the number of participants, inclusion criteria, comparison group, outcome definition, follow-up period, statistical analysis, and whether the findings have been independently replicated. It is also important to identify the preparation used because products and protocols can differ.",
          "Case reports and uncontrolled studies can generate hypotheses and document clinical observations. Controlled studies are designed to compare outcomes more systematically and help separate an intervention effect from other factors.",
        ],
      },
      {
        heading: "Professional assessment matters",
        paragraphs: [
          "Clinical consideration should take account of the individual medical situation, concurrent therapies, potential risks, product characteristics, local regulations, and appropriate professional supervision. A qualified clinician can place published research in the context of an individual patient.",
          "Laboratory markers and biological mechanisms can be useful research tools when interpreted with validated methods and the wider clinical picture.",
        ],
      },
      {
        heading: "Product information and clinical evidence",
        paragraphs: [
          "A supplier may provide formulation details, storage requirements, batch documentation, and shipping information. These practical product facts complement the separate clinical literature evaluating outcomes and biological effects.",
          "A complete review considers both product quality and evidence quality because they answer different but related questions.",
        ],
      },
    ],
  },

  "gcmaf-therapy": {
    navLabel: "Therapy",
    title: "GcMAF Therapy",
    description:
      "Learn how the term GcMAF therapy is used in clinical and research discussions, including formulation, administration, evidence, and professional oversight.",
    sections: [
      {
        heading: "What does GcMAF therapy refer to?",
        paragraphs: [
          "GcMAF therapy is a broad term used in clinical and research discussions involving Gc protein-derived macrophage activating factor. The term can refer to a framework involving assessment, formulation selection, administration planning, monitoring, and follow-up.",
          "An injection describes one possible administration method, while therapy is a broader concept that includes the purpose, context, oversight, and evaluation of an intervention.",
        ],
      },
      {
        heading: "Comparing different formulations",
        paragraphs: [
          "Products described as GcMAF may differ in concentration, preparation, storage conditions, packaging, and intended use. Results are most accurately compared when the exact formulation and protocol are identified.",
          "When reviewing information, match research findings to the preparation, dose, route, population, and protocol used in the study.",
        ],
      },
      {
        heading: "Evidence and oversight",
        paragraphs: [
          "Laboratory studies can describe biological effects under controlled conditions, while clinical evidence examines outcomes, safety, comparison groups, and real-world relevance.",
          "Clinical decisions should be made by appropriately qualified healthcare professionals within applicable laws and professional standards, using the available research and patient-specific context.",
        ],
      },
      {
        heading: "Mechanisms and clinical outcomes",
        paragraphs: [
          "Macrophage activation, cytokine changes, receptor interactions, and other mechanisms help researchers understand GcMAF biology. Clinical studies add another layer by measuring outcomes in people.",
          "Reading mechanistic and clinical research together helps connect biological effects with questions about formulation, dosing, safety, and clinical response.",
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
          "Storage requirements are product-specific. Some liquid formulations may require refrigerated storage and temperature-controlled transportation, while lyophilized products may have different pre-reconstitution requirements.",
          "Follow manufacturer-specific instructions for storage temperature, transport, expiry, reconstitution, and handling after preparation.",
        ],
      },
      {
        heading: "Receiving and documenting a shipment",
        paragraphs: [
          "Professional handling begins when the shipment is received. Check package condition, product identity, quantity, batch or lot information, expiry information, and any temperature-monitoring data supplied with the shipment.",
          "Document receipt promptly and move the product to the required storage environment. If a shipment arrives outside the expected condition, separate it from usable inventory while product-specific guidance is obtained.",
        ],
      },
      {
        heading: "Temperature excursions and product integrity",
        paragraphs: [
          "The significance of a temperature excursion depends on formulation, duration, temperature range, packaging, and stability data. Record the available details and consult the manufacturer or authorized supplier for product-specific guidance.",
        ],
      },
      {
        heading: "Reconstitution and inventory control",
        paragraphs: [
          "Lyophilized products may require reconstitution before use. Follow product-specific instructions for diluent, technique, mixing, storage after reconstitution, and allowable time before use.",
          "A professional inventory process should track product name, formulation, batch, quantity, expiry, storage location, and receipt date. Good storage and documentation support product integrity and traceability.",
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
          "Healthcare professionals and appropriate institutions can request information about available formulations, product specifications, storage and shipping requirements, documentation, and professional procurement procedures.",
          "A clear first message helps the inquiry reach the right person and reduces delays caused by missing logistics or product details.",
        ],
        bullets: [
          "Product and formulation information",
          "Storage and shipping requirements",
          "Professional procurement information",
          "Batch, specification, or documentation questions",
          "Destination and logistics questions",
          "Research-related information requests",
        ],
      },
      {
        heading: "What details should an inquiry include?",
        paragraphs: [
          "Include your name, organization or professional context, destination country, the formulation you are asking about, expected quantity if relevant, and the specific information you need.",
          "For documentation requests, identify whether you are seeking product specifications, batch information, storage instructions, shipping guidance, or other available records.",
        ],
      },
      {
        heading: "Procurement and destination requirements",
        paragraphs: [
          "International procurement may involve local import rules, institutional procedures, courier limitations, or documentation requirements. These can vary by destination and may change over time.",
          "Before arranging a shipment, confirm what information is needed by the receiving institution and whether local approvals, permits, or customs documents apply.",
        ],
      },
      {
        heading: "Product questions and research evidence",
        paragraphs: [
          "A product inquiry can clarify formulation, packaging, handling, documentation, and availability. Scientific questions can then be matched to relevant research involving the specific preparation, study design, population, and outcomes.",
          "Keeping product facts and research evidence clearly organized supports more precise professional communication.",
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
            <Link href="/gcmaf-for-sale" className="transition hover:text-white">
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
                Use the contact page for professional product availability,
                documentation, shipping, and procurement inquiries.
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
