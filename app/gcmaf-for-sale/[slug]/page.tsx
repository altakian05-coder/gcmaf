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
          "Macrophages are innate immune cells involved in recognizing microorganisms, clearing damaged cells and debris, coordinating inflammatory responses, and interacting with other immune cells. Research questions about GcMAF therefore sit within a much broader area of immune biology rather than a single simple pathway.",
        ],
      },
      {
        heading: "Is every product called GcMAF the same?",
        paragraphs: [
          "No. Products may differ in formulation, concentration, manufacturing controls, packaging, storage requirements, intended use, and regulatory status. Professional evaluation should focus on the specific product rather than the name alone.",
          "When comparing products, review the manufacturer, formulation, batch information, expiry or retest information, shipping requirements, and any documentation that accompanies the product. Similar marketing language does not establish that two products are compositionally or functionally equivalent.",
        ],
      },
      {
        heading: "How should GcMAF research be interpreted?",
        paragraphs: [
          "Research quality varies. Laboratory experiments, observational reports, small clinical studies, larger controlled trials, reviews, and retracted papers do not provide the same level of evidence. Study design, sample size, endpoints, formulation, replication, and potential bias all matter when interpreting a result.",
          "A biological mechanism can be scientifically interesting without proving a clinical benefit. It is useful to separate evidence about macrophage activity or signaling from claims about outcomes in specific diseases.",
        ],
      },
      {
        heading: "What should I know about storage and handling?",
        paragraphs: [
          "Storage requirements are formulation-specific. Liquid and lyophilized products may have different temperature, transport, reconstitution, and post-preparation requirements. Manufacturer instructions should take priority over general advice found online.",
          "Professional handling normally includes documented receipt, appropriate inventory control, review of any temperature excursion, and a clear process for products that may have been exposed to conditions outside specification.",
        ],
      },
      {
        heading: "Where can I learn more?",
        paragraphs: [
          "Use the topic navigation on this page to read dedicated information about supplements, purchasing considerations, treatment-related research, therapy terminology, injections, storage, and product inquiries. The research section of the site provides additional context for evaluating scientific literature and evidence quality.",
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
          "GcMAF is a term used for Gc protein-derived macrophage activating factor. Gc protein is also known as vitamin D-binding protein, a circulating protein best known for transporting vitamin D metabolites. Research has explored additional biological functions of vitamin D-binding protein and related preparations.",
          "The term GcMAF is used in research and product discussions, but it should not be assumed that every preparation carrying the name is identical. Formulation, manufacturing process, concentration, intended use, and quality controls can differ between products and studies.",
        ],
      },
      {
        heading: "Why macrophages are important",
        paragraphs: [
          "Macrophages are cells of the innate immune system involved in recognizing and clearing microorganisms, damaged cells, cellular debris, and other biological material. They also produce signaling molecules and interact with many other immune and tissue cells.",
          "Macrophage behavior is highly context-dependent. Their activity changes according to tissue environment, metabolic state, inflammatory signals, infection, injury, and many other factors. For this reason, macrophage activation should not be reduced to a single on-or-off switch.",
        ],
      },
      {
        heading: "Vitamin D-binding protein and GcMAF terminology",
        paragraphs: [
          "Vitamin D-binding protein is a well-characterized plasma protein with established roles in transporting vitamin D metabolites. Scientific literature has also examined functions such as actin scavenging, fatty-acid binding, chemotactic interactions, and immune-related effects.",
          "GcMAF discussions arise from proposed or investigated modifications of Gc protein associated with macrophage-activating activity. The exact preparation and experimental context matter when comparing studies because different methods and materials may not be interchangeable.",
        ],
      },
      {
        heading: "Research context and evidence quality",
        paragraphs: [
          "Published work has examined macrophage activation, immune signaling, angiogenesis, and other biological mechanisms. The strength and clinical relevance of evidence vary by study design, formulation, proposed application, and whether findings have been independently replicated.",
          "Mechanistic or laboratory findings do not automatically demonstrate clinical effectiveness. When reviewing a study, consider the type of evidence, number of participants or samples, controls, endpoints, statistical methods, replication, and whether later publications have supported, challenged, or retracted earlier conclusions.",
        ],
      },
      {
        heading: "How to use this information",
        paragraphs: [
          "A useful starting point is to separate three questions: what GcMAF means biologically, what a particular product contains, and what clinical evidence exists for a proposed use. Keeping those questions separate helps prevent product descriptions or mechanistic claims from being mistaken for established medical outcomes.",
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
        heading: "What does GcMAF supplement mean?",
        paragraphs: [
          "The phrase GcMAF supplement is commonly used in online searches, but products associated with GcMAF should not automatically be treated as ordinary dietary supplements. The word supplement can be used loosely online and may not describe the legal classification, formulation, or intended use of a particular product.",
          "Formulations can differ in concentration, administration method, manufacturing standards, storage conditions, packaging, and intended professional use. A product should therefore be evaluated by its actual specifications rather than by a broad search term.",
        ],
      },
      {
        heading: "What to review before comparing products",
        paragraphs: [
          "Before evaluating a product, confirm what it contains, how it is intended to be handled, and what documentation is available. Product identity and traceability are more useful than relying on general claims or visual similarities between packages.",
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
        heading: "Formulation and handling are separate questions",
        paragraphs: [
          "Liquid, lyophilized, oral, topical, or other preparations should not be assumed to have the same handling requirements or biological properties. Instructions for one formulation may not apply to another, even if both are marketed with similar terminology.",
          "Storage conditions can influence product integrity. Review temperature requirements, shipping method, reconstitution instructions where relevant, and the manufacturer's guidance for use after opening or preparation.",
        ],
      },
      {
        heading: "Product quality does not prove a treatment claim",
        paragraphs: [
          "Manufacturing documentation, controlled shipping, and traceability are important product-quality considerations, but they do not by themselves demonstrate that a product is effective for a particular disease. Clinical claims require separate evaluation of the scientific evidence.",
          "When reading research, distinguish laboratory findings from clinical outcomes and consider study design, sample size, replication, formulation, and the current regulatory context.",
        ],
      },
      {
        heading: "Questions for a professional supplier",
        paragraphs: [
          "Useful questions include the exact formulation, storage conditions, available documentation, batch identification, shipping process, destination requirements, and what procedure applies if a shipment arrives outside the expected condition. Clear answers to these practical questions help establish whether the product can be handled appropriately.",
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
          "Research involving GcMAF has examined macrophage activation and related biological mechanisms. The literature includes different preparations, laboratory work, observational reports, small studies, and other forms of evidence.",
          "Those sources should be interpreted according to their design and limitations. A mechanistic finding or a small uncontrolled study does not establish GcMAF as a universally proven treatment for a specific disease.",
        ],
      },
      {
        heading: "How to read treatment-related studies",
        paragraphs: [
          "When a paper reports a clinical outcome, look at the number of participants, inclusion criteria, comparison group, outcome definition, follow-up period, statistical analysis, and whether the findings have been independently replicated. It is also important to confirm which preparation was used because different products or protocols may not be equivalent.",
          "Case reports and uncontrolled studies can generate hypotheses, but they cannot reliably separate the effect of an intervention from natural variation, concurrent treatments, selection effects, or other factors.",
        ],
      },
      {
        heading: "Professional assessment matters",
        paragraphs: [
          "Any clinical consideration should take account of the individual medical situation, concurrent therapies, potential risks, product characteristics, local regulations, and appropriate professional supervision. General online information cannot replace an assessment of a particular patient or circumstance.",
          "The same principle applies to monitoring. A laboratory marker or biological mechanism may be useful for research, but its interpretation should be based on validated methods and the wider clinical context rather than a single number in isolation.",
        ],
      },
      {
        heading: "Separate product information from clinical evidence",
        paragraphs: [
          "A supplier may provide formulation details, storage requirements, batch documentation, or shipping information. These are practical product facts. They should not be treated as proof that the product produces a particular clinical benefit.",
          "A balanced review considers both product quality and evidence quality, while recognizing that they answer different questions.",
        ],
      },
      {
        heading: "Questions worth asking",
        paragraphs: [
          "Useful questions include: What exact formulation was studied? What type of evidence supports the proposed use? Has the result been replicated? What are the known limitations? What professional or regulatory requirements apply? Asking these questions produces a more reliable understanding than relying on a treatment label alone.",
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
          "GcMAF therapy is a broad term used in clinical or investigational discussions involving Gc protein-derived macrophage activating factor. The term can refer to a proposed framework involving assessment, formulation selection, administration planning, monitoring, and follow-up.",
          "It should not be confused with a single administration method. An injection, for example, describes how a product may be delivered, while therapy is a broader concept that includes the purpose, context, oversight, and evaluation of an intervention.",
        ],
      },
      {
        heading: "Different formulations are not automatically equivalent",
        paragraphs: [
          "Products described as GcMAF may differ in concentration, preparation, storage conditions, packaging, and intended use. A study using one formulation cannot automatically be generalized to every product carrying the same broad name.",
          "When comparing information, identify the actual formulation and protocol before drawing conclusions about similarities between products or studies.",
        ],
      },
      {
        heading: "Evidence and oversight",
        paragraphs: [
          "The evidence base varies across proposed applications. Laboratory studies can describe biological effects under controlled conditions, while clinical evidence asks different questions about outcomes, safety, comparison groups, and real-world relevance.",
          "Clinical decisions should be made by appropriately qualified healthcare professionals within applicable laws and professional standards. Research findings should be interpreted according to study design, limitations, replication, and the current regulatory context.",
        ],
      },
      {
        heading: "Mechanism is not the same as outcome",
        paragraphs: [
          "Macrophage activation, cytokine changes, receptor interactions, or other proposed mechanisms may help researchers understand biology. However, demonstrating a mechanism does not automatically prove that a therapy improves a specific clinical condition.",
          "A stronger clinical claim requires evidence designed to measure relevant outcomes and to distinguish the intervention's effect from other explanations.",
        ],
      },
      {
        heading: "Practical questions before evaluating a therapy claim",
        paragraphs: [
          "Ask which product was used, how it was manufactured and handled, what population was studied, what outcomes were measured, whether there was a comparison group, how long participants were followed, and whether independent research has reproduced the finding. These questions help place therapy-related claims in a more accurate context.",
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
          "Storage requirements are product-specific. Some liquid formulations may require refrigerated storage and temperature-controlled transportation, while some lyophilized products may have different pre-reconstitution requirements.",
          "Always follow the manufacturer-specific instructions for storage temperature, transport, expiry, reconstitution, and handling after preparation. General advice should not override the label or product documentation for a specific formulation.",
        ],
      },
      {
        heading: "Receiving and documenting a shipment",
        paragraphs: [
          "Professional handling begins when the shipment is received. Check the package condition, product identity, quantity, batch or lot information, expiry information, and any temperature-monitoring data supplied with the shipment.",
          "Document receipt promptly and move the product to the required storage environment without unnecessary delay. If a shipment arrives damaged, warm, frozen when it should not be, or otherwise outside the expected condition, separate it from usable inventory until the situation has been reviewed.",
        ],
      },
      {
        heading: "Temperature excursions and product integrity",
        paragraphs: [
          "A temperature excursion does not always have the same significance for every product. The effect depends on the formulation, duration, temperature range, packaging, and stability data. Do not assume that a product is acceptable or unusable based only on a general rule.",
          "Record the available details and consult the manufacturer or authorized supplier for product-specific guidance. This creates a documented decision rather than relying on guesswork.",
        ],
      },
      {
        heading: "Reconstitution and handling after preparation",
        paragraphs: [
          "Lyophilized products may require reconstitution before use. Follow the product-specific instructions for diluent, technique, mixing, storage after reconstitution, and allowable time before use. Instructions for one product should not be transferred to another formulation without documentation.",
          "For liquid products, review whether the container has special requirements after first use or opening. Maintaining a clear preparation and storage record helps reduce avoidable handling errors.",
        ],
      },
      {
        heading: "Inventory control",
        paragraphs: [
          "A simple inventory process should track product name, formulation, batch, quantity, expiry, storage location, and receipt date. First-expiry-first-out practices can help reduce waste where appropriate, while periodic checks can identify damaged packaging, approaching expiry, or incomplete records.",
          "Good storage practice protects product integrity; it does not establish a clinical benefit. Scientific and clinical claims should be evaluated separately from handling quality.",
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
          "Include your name, organization or professional context, destination country, the formulation you are asking about, expected quantity if relevant, and the specific information you need. If your question concerns shipping, mention any known delivery or temperature-control requirements.",
          "For documentation requests, identify whether you are seeking product specifications, batch information, storage instructions, shipping guidance, or other available records. Being specific makes it easier to provide a useful response.",
        ],
      },
      {
        heading: "Procurement and destination requirements",
        paragraphs: [
          "International procurement may involve local import rules, institutional procedures, courier limitations, or documentation requirements. These can vary by destination and may change over time.",
          "Before arranging a shipment, confirm what information is needed by the receiving institution and whether any local approvals, permits, or customs documents apply. Logistics should be planned around the actual product and destination rather than a general assumption.",
        ],
      },
      {
        heading: "Separate product questions from clinical claims",
        paragraphs: [
          "A product inquiry can clarify formulation, packaging, handling, documentation, and availability. Those practical details do not by themselves establish that a product is effective for a particular disease or outcome.",
          "Scientific questions should be evaluated against the relevant research, including study design, limitations, replication, and the specific preparation used. Keeping product facts and clinical evidence separate leads to clearer communication.",
        ],
      },
      {
        heading: "What happens after you submit an inquiry?",
        paragraphs: [
          "The team can review the information provided and respond to the product, documentation, or logistics questions that are relevant to the request. If additional information is needed, a focused follow-up can clarify the destination, formulation, quantity, or documentation required.",
          "For the fastest response, avoid sending only a one-line availability request when the destination or product type is important. A short but complete inquiry is usually more efficient for both sides.",
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
