export interface Condition {
  slug: string
  title: string
  shortTitle: string
  icon: string
  tagline: string
  summary: string
  fullDescription: string
  researchHighlights: string[]
  mechanismOfAction: string
  clinicalNotes: string
  diseaseBurden: string
  nagalaseRole: string
  potentialIndications: string[]
  conditionCards?: { name: string; image?: string }[]
  videoSrc?: string
  heroImage?: string
  potentialEffects: { title: string; description: string }[]
  evidence: { preclinical: string[]; clinical: string[]; caseReports: string[] }
  limitations: string[]
  faqs: { question: string; answer: string }[]
}

export const conditions: Condition[] = [
  {
    slug: 'cancer',
    shortTitle: 'Cancer Care',
    title: 'GcMAF in Oncology Support',
    icon: 'Shield',
    tagline: 'Activating macrophage-mediated immune surveillance in preclinical models',
    summary:
      'Research suggests GcMAF may activate macrophages to identify and interact with abnormal cells, potentially offering complementary support being investigated in various clinical settings.',
    fullDescription:
      'GcMAF has been extensively investigated regarding immune response modulation. When properly activated, macrophages may exhibit enhanced surveillance capacity, recognising abnormal structures while sparing healthy tissue. Published literature has explored GcMAF\'s potential as an adjunctive focus, particularly within models observing malignant cells and broader immunotherapeutic protocols.',
    researchHighlights: [
      'Studies observe GcMAF may stimulate macrophage phagocytic activity in vitro',
      'Research explores potential immune modulation alongside existing protocols',
      'Preclinical animal models have investigated biological responses to GcMAF',
    ],
    mechanismOfAction:
      'The proposed mechanism of action involves overriding tumour-related immune suppression. Specifically, elevated nagalase—an enzyme derived from abnormal cell activity—deglycosylates GcProtein, suppressing endogenous conversion to GcMAF. Exogenous administration is proposed to bypass this enzymatic blockade, supporting the re-establishment of macrophage activation pathways.',
    clinicalNotes:
      'GcMAF is investigated as an experimental adjunct, not a standalone standard of care. Administration should be strictly supervised by an actively licensed oncology professional monitoring immune parameters.',
    diseaseBurden:
      'Conventional therapies continue to advance, yet sustained disease management remains a profound global challenge. The capacity of the host immune system to detect and eliminate abnormal growths is frequently compromised by tumour-related immune suppression, a biological evasion tactic central to the pathogenesis of many malignancies. Restoring this surveillance is a primary target of contemporary immuno-oncology.',
    nagalaseRole:
      'Oncogenic activity is frequently correlated with the secretion of nagalase into the systemic circulation, where it is observed to degrade endogenous GcProtein. This process inhibits natural macrophage activation, establishing an immunologically permissive microenvironment for malignant cells to evade clearance mechanisms.',
    potentialIndications: [
      'Investigational Oncology Support',
      'Complementary Immunotherapy',
    ],
    videoSrc: 'https://cdn.gcmaf.net/integrated-immune-response.mov',
    heroImage: 'https://images.unsplash.com/photo-1579154204601-51588f4ffa44?w=1600&q=80',
    potentialEffects: [
      { title: 'Macrophage Priming', description: 'May support the activation state of key phagocytic cells in the innate immune system.' },
      { title: 'Immune Surveillance', description: 'Proposed to assist in the biological recognition of abnormal cellular structures.' },
      { title: 'Adjunctive Potential', description: 'Investigated in multiple clinical settings as a complementary approach alongside standard care.' },
      { title: 'Biomarker Modulation', description: 'May influence objective metrics of immune suppression, such as serum nagalase levels.' },
    ],
    evidence: {
      preclinical: ['In vitro observations of stimulated phagocytosis against abnormal cell lines.', 'Animal models tracking immune parameter shifts post-administration.'],
      clinical: ['Phase I/II preliminary data observing tolerability alongside standard regimens.'],
      caseReports: ['Published isolated reports documenting quality of life metric observations over multi-month protocols.'],
    },
    limitations: [
      'GcMAF therapy remains an investigational protocol and is not an FDA-approved treatment for cancer.',
      'Individual patient response correlates heavily with overall immune system vitality and staging.',
      'Must not replace established oncological standard-of-care interventions.',
    ],
    faqs: [
      { question: 'Is GcMAF intended as a primary oncology therapy?', answer: 'No. GcMAF is strictly investigated as an immunomodulatory adjunct, and should only be integrated by practitioners as part of a comprehensive, medically supervised protocol.' },
      { question: 'How is nagalase utilised clinically here?', answer: 'Serum nagalase levels are frequently monitored by practitioners as an objective physiological marker of tumour-related immune suppression and therapeutic response.' },
    ],
  },
  {
    slug: 'neurological',
    shortTitle: 'Neurological Disorders',
    title: 'Immune Modulation in Neurological Health',
    icon: 'Brain',
    tagline: 'Investigating microglial support and neuroinflammatory balance',
    summary:
      'Emerging evidence investigates GcMAF\'s potential role in supporting central nervous system immune cells, particularly the resident macrophages known as microglia.',
    fullDescription:
      'Microglia are the resident macrophages of the central nervous system. Current scientific inquiry is evaluating whether GcMAF may interact with microglial receptors. This interaction is proposed to support protective homeostatic functions, which is highly relevant when investigating neuroinflammatory environments that often precipitate cognitive decline.',
    researchHighlights: [
      'GcMAF receptors have been identified on human microglia in peer-reviewed contexts',
      'Preclinical exploration of neuroinflammation modulation pathways',
      'Preliminary observations in cohorts presenting with diverse neurological challenges',
    ],
    mechanismOfAction:
      'GcMAF is proposed to bind selectively to microglial receptors within the CNS, potentially activating a regulatory phenotype. This activation may assist in modulating local cytokine environments and supporting the clearance of accumulated physiological debris associated with brain fog and broader neurodegenerative states.',
    clinicalNotes:
      'Applications within neurology are considered highly experimental. Complete neuro-immunological profiling should precede any investigational use by a qualified specialist.',
    diseaseBurden:
      'Progressive neurological disorders impose a massive systemic burden. The persistent state of microglial dysfunction frequently seen in these conditions limits the innate capacity of the brain to resolve inflammation, often manifesting clinically as severe cognitive decline, memory impairment, and treatment-resistant brain fog. Effective disease modification continues to elude many established paradigms.',
    nagalaseRole:
      'Elevated systemic nagalase has been tracked in specific neurological patient cohorts, indicating a potential correlation between peripheral immune suppression and central nervous system pathology. Impaired endogenous GcMAF synthesis may exacerbate microglial dysfunction, severely reducing the brain\'s capacity to maintain regulatory homeostasis.',
    potentialIndications: [
      'Neuro-inflammatory Support',
      'Cognitive Function Investigations',
      'Microglial Modulation',
    ],
    videoSrc: 'https://cdn.gcmaf.net/neurological-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=80',
    potentialEffects: [
      { title: 'Microglial Activation', description: 'Investigated for its potential to stimulate regulatory and phagocytic activity in CNS macrophages.' },
      { title: 'Inflammation Modulation', description: 'May support the balancing of neuroinflammatory cytokine cascades.' },
      { title: 'Cellular Debris Clearance', description: 'Proposed to assist microglial cells in the management of metabolic and protein waste.' },
      { title: 'Cognitive Support Pathways', description: 'Investigated in cohorts experiencing brain fog and progressive neurological challenges.' },
    ],
    evidence: {
      preclinical: ['In vitro demonstration of GcMAF receptor binding on isolated human microglial cells.', 'Observational data of altered cytokine profiles in experimental models.'],
      clinical: ['Small-scale observational cohort studies documenting neuro-immune markers.'],
      caseReports: ['Documented cases exploring quality of life and symptomatic tracking over extended clinical protocols.'],
    },
    limitations: [
      'Mechanism of transport across the blood-brain barrier requires further peer-reviewed clarification.',
      'Vast heterogeneity in patient presentation makes uniform outcome prediction impossible.',
      'Considered strictly investigational for all neurological applications.',
    ],
    faqs: [
      { question: 'What is the relevance of microglia to GcMAF?', answer: 'Microglia are the primary immune cells of the brain; they operate similarly to peripheral macrophages and are proposed to possess corresponding GcMAF receptors.' },
      { question: 'Can this replace standard neurological medications?', answer: 'No. Investigational immunomodulation must be carefully managed alongside an overriding standard-of-care plan defined by a supervising neurologist.' },
    ],
  },
  {
    slug: 'autoimmune',
    shortTitle: 'Autoimmune',
    title: 'GcMAF in Autoimmune Investigation',
    icon: 'Activity',
    tagline: 'Exploring the recalibration of immune tolerance mechanisms',
    summary:
      'In environments of systemic inflammation, investigational protocols explore whether GcMAF may help support immune regulatory balance rather than enforcing overt immunosuppression.',
    fullDescription:
      'Autoimmune pathogenesis is structurally linked to a failure of immune tolerance. Rather than broadly suppressing the entirety of the immune response, emerging research investigates whether proper macrophage activation might support the moderation of these cascades. By targeting regulatory pathways, GcMAF is being evaluated for its potential to mitigate the impact of specific autoimmune triggers.',
    researchHighlights: [
      'Observations regarding Th1/Th2 cytokine expression profiles',
      'Exploration of macrophage-mediated regulatory T-cell interactions',
      'Published reports documenting cohort tracking in varied autoimmune presentations',
    ],
    mechanismOfAction:
      'GcMAF is investigated for its capacity to activate macrophages into a regulatory phenotype. These cells may subsequently interact with the adaptive immune system (including T-reg cells) to support the dampening of aberrant responses to autoimmune triggers, potentially re-establishing a more stable threshold for immune tolerance.',
    clinicalNotes:
      'Given the volatile nature of autoimmune conditions, introduction of immunomodulators must be conducted with extreme clinical caution, beginning at fractional dosages under close laboratory monitoring.',
    diseaseBurden:
      'The persistence of systemic inflammation rapidly degrades patient vitality and accelerates tissue pathology in autoimmune populations. Current management relies heavily on targeted and broad immunosuppressive biologics, which carry their own significant risk profiles. Re-establishing baseline immune tolerance remains a primary, yet highly complex, objective across rheumatology and related disciplines.',
    nagalaseRole:
      'Aberrant nagalase activity may impair the GcMAF-macrophage signaling axis, which subsequently compromises the regulatory negative feedback loops of the innate immune system. This allows systemic inflammation to persist unchecked upon exposure to subtle environmental or biological elements.',
    potentialIndications: [
      'Rheumatological Investigations',
      'Immune Tolerance Protocols',
      'Systemic Inflammation Management',
    ],
    conditionCards: [
      { name: 'Rheumatology Cohorts' },
      { name: 'Dermatological Autoimmunity' },
      { name: 'Gastrointestinal Immunology' },
    ],
    videoSrc: 'https://cdn.gcmaf.net/autoimmune-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80',
    potentialEffects: [
      { title: 'Cytokine Calibration', description: 'Investigated for potential modulation of Th1, Th2, and Th17 inflammatory pathways.' },
      { title: 'Regulatory T-Cell Support', description: 'May facilitate the innate-adaptive immune dialogue essential for tolerance.' },
      { title: 'Tissue Sparing', description: 'By potentially reducing systemic inflammation, secondary tissue degradation may be mitigated.' },
      { title: 'Biomarker Stability', description: 'Protocols often monitor inflammatory hallmarks (e.g., CRP, ESR) for stabilisation.' },
    ],
    evidence: {
      preclinical: ['Laboratory analyses of altered cytokine secretion from stimulated peripheral blood mononuclear cells (PBMCs).'],
      clinical: ['Observational tracking of chronic inflammatory cohorts utilizing GcMAF as an adjunct.'],
      caseReports: ['Published summaries of multi-year clinical management of treatment-resistant cases.'],
    },
    limitations: [
      'Initial administration may provoke transient inflammatory flares; protocols require meticulous titration.',
      'Long-term outcome data in isolated autoimmune conditions remains limited in scope.',
      'Must be administered in conjunction with specialized immunological oversight.',
    ],
    faqs: [
      { question: 'Does GcMAF suppress the immune system like a biologic?', answer: 'No. GcMAF is fundamentally an immunomodulator, currently investigated for its capacity to support the restorative balance of immune regulation rather than suppressing it entirely.' },
      { question: 'How is dosage managed in autoimmune cases?', answer: 'Investigational protocols strictly mandate ultra-low fractional initiations (often referred to as micro-dosing) to prevent paradoxical inflammatory exacerbation.' },
    ],
  },
  {
    slug: 'chronic-infections',
    shortTitle: 'Chronic Infections',
    title: 'Supporting Innate Responses to Chronic Infections',
    icon: 'Zap',
    tagline: 'Investigating macrophage capacity in persistent infectious environments',
    summary:
      'Persistent infections exploit suppressed immune environments. GcMAF is investigated for its potential to support the innate immune system\'s capacity to maintain macrophage functionality against chronic viral and bacterial challenges.',
    fullDescription:
      'Many ubiquitous pathogens are exceptionally adept at immune evasion. Viruses and complex bacteria have developed biological mechanisms to mute innate immune responses. Clinical literature explores the administration of exogenous GcMAF to support phagocytic clearing capacity in populations dealing with resilient pathogens, spanning from lingering COVID-19 and long-standing Hepatitis, to complex vector-borne challenges.',
    researchHighlights: [
      'Documentation of elevated nagalase across multiple chronic infectious disease models',
      'In vitro demonstration of restored phagocytosis following GcMAF exposure',
      'Clinical reports detailing adjunctive use in immunocompromised populations',
    ],
    mechanismOfAction:
      'Pathogens frequently synthesise and secrete nagalase to deliberately disable endogenous GcProtein conversion, stripping the host of primary surveillance. Supplying exogenous GcMAF is proposed to bypass this pathogenic blockade, potentially reinvigorating dormant macrophages to execute phagocytosis and orchestrate broader adaptive immune responses against the infectious reservoir.',
    clinicalNotes:
      'Investigational use within chronic infectious disease must incorporate comprehensive pathogen load monitoring and baseline evaluation of patient immunological reserves.',
    diseaseBurden:
      'The systemic impact of unresolved infection extends far beyond acute symptomatology. Pathogens capable of evading acute clearance—including HIV, Hepatitis, persistent strains of Lyme Disease, and post-acute sequelae of COVID-19—establish deep systemic reservoirs. These entrenched infections generate severe chronic fatigue, systemic degradation, and require highly intensive, often lifelong, clinical management.',
    nagalaseRole:
      'Nagalase serves as a primary immunological weapon for entrenched pathogens. By chronically elevating nagalase, bacteria and viruses continuously suppress the GcMAF axis, ensuring macrophages remain in a pacified state. Clinical monitoring of nagalase offers practitioners a window into the success of this pathogenic strategy and the potential efficacy of immune augmentation.',
    potentialIndications: [
      'Investigational Virology',
      'Complex Vector-Borne Support',
      'Immunocompromised Adjuncts',
    ],
    videoSrc: 'https://cdn.gcmaf.net/chronic-infection-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1600&q=80',
    potentialEffects: [
      { title: 'Phagocytic Restoration', description: 'Investigated for overriding pathogen-induced suppression of macrophage engulfment mechanisms.' },
      { title: 'Viral Reservoir Targeting', description: 'May support the immune system in identifying cells harboring latent viral loads.' },
      { title: 'Adaptive Immune Priming', description: 'Proper macrophage activation is critical for presenting antigens to T and B cells.' },
      { title: 'Nagalase Counteraction', description: 'Directly investigated as a biological bypass for pathogen-secreted nagalase.' },
    ],
    evidence: {
      preclinical: ['In vitro assays demonstrating enhanced engulfment of specified pathogens by GcMAF-treated macrophages.'],
      clinical: ['Early observational data regarding viral load trajectory and immune competence metrics in long-term cohorts.'],
      caseReports: ['Documented resolutions of opportunistic infections in severely immune-suppressed individual cases.'],
    },
    limitations: [
      'Does not exert direct anti-microbial or anti-viral effects; it acts strictly by supporting host immunity.',
      'Efficacy is highly dependent on the residual functional capacity of the patient\'s cellular immune components.',
      'Cannot substitute for acute, life-saving antimicrobial pharmacotherapy.',
    ],
    faqs: [
      { question: 'Is GcMAF an antiviral medication?', answer: 'No. GcMAF has no direct mechanism of action against a virus itself. It is proposed to support the host\'s innate immune system, which is responsible for pathogen clearance.' },
      { question: 'Can this replace antibiotic therapy for tick-borne diseases?', answer: 'No. In investigational settings, it is positioned as a complementary immunomodulatory adjunct, entirely distinct from necessary primary antimicrobial regimens.' },
    ],
  },
  {
    slug: 'immune-enhancement',
    shortTitle: 'Immune Enhancement',
    title: 'Investigational Immune Enhancement protocols',
    icon: 'TrendingUp',
    tagline: 'Supporting physiological readiness and resilience markers',
    summary:
      'GcMAF is currently being explored within longevity and performance medicine for its potential to support baseline macrophage activity and optimal wellness parameters in non-disease states.',
    fullDescription:
      'Beyond acute pathology management, clinical interest has expanded into preventive and performance medicine. As a bioidentical protein already vital to human physiology, GcMAF is investigated for its capacity to support the prevention of immune senescence. Protocols focus on assisting patients in preventing common infections, accelerating post-exertional recovery, and maintaining optimal wellness through continuous immune system surveillance.',
    researchHighlights: [
      'Observations of macrophage activity variations corresponding to biological ageing',
      'Exploratory protocols in elite athletic recovery and physiological stress models',
      'Research contextualising GcMAF as a fundamental human homeostatic protein',
    ],
    mechanismOfAction:
      'Maintaining an active baseline of GcMAF is proposed to ensure that macrophages remain in a primed, highly responsive state. This readiness facilitates rapid intervention against minor cellular aberrations or environmental pathogens before they establish a substantial clinical foothold, thereby supporting continuous systemic homeostasis.',
    clinicalNotes:
      'Even within non-disease optimization protocols, administration must be formally managed by a licensed healthcare professional utilizing an evidence-based framework.',
    diseaseBurden:
      'While not a formal disease state, subclinical immune suppression driven by chronic stress, overtraining, environmental toxins, and natural senescence severely degrades overall quality of life. The resulting vulnerability impedes the attainment of optimal wellness, increasing the frequency of opportunistic illness and drastically extending recovery timelines.',
    nagalaseRole:
      'Nagalase levels can act as a barometer for subclinical cellular stress. Accumulating environmental insults or latent sub-acute infections may elevate nagalase incrementally, contributing to a "slowed" immune response often mistaken solely for natural ageing. Monitoring these subtle shifts aids practitioners in determining candidates for preventative immune support.',
    potentialIndications: [
      'Longevity & Optimal Wellness',
      'Elite Performance Recovery',
      'Post-Acute Reconstitution',
    ],
    videoSrc: 'https://cdn.gcmaf.net/immune-cell-destroying-germ.mov',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    potentialEffects: [
      { title: 'Baseline Vigilance', description: 'May maintain a higher threshold of active immune surveillance against daily environmental insults.' },
      { title: 'Recovery Kinetics', description: 'Investigated in high-output athletic populations to support cellular debris clearance and recovery.' },
      { title: 'Senescence Delay', description: 'Proposed to assist in mitigating age-related decline in innate immune responsiveness.' },
      { title: 'Homeostatic Protection', description: 'Support for preventing common infections through proactive macrophage priming.' },
    ],
    evidence: {
      preclinical: ['Analyses of baseline macrophage activity in varied stress-induced in vitro environments.'],
      clinical: ['Exploratory tracking of immunological resilience markers in high-stress occupational and athletic cohorts.'],
      caseReports: ['Anecdotal documentation of reduced illness frequency and improved subjective vitality scores under protocol.'],
    },
    limitations: [
      'Enhancement outcomes are subjective and highly variable between individuals.',
      'Cannot overcome poor fundamental lifestyle factors (e.g., severe sleep deprivation, malnutrition).',
      'Preventive protocols are strictly "off-label" investigational pursuits.',
    ],
    faqs: [
      { question: 'Is GcMAF used as a standard dietary supplement?', answer: 'No. Regardless of the intended application—including general wellness—it remains an investigational biological product requiring clinical oversight and prescription access.' },
      { question: 'How is efficacy measured in a healthy patient?', answer: 'Practitioners often rely on tracking the frequency of minor illnesses, subjective reporting of recovery and vitality, and objective tracking of baseline inflammatory markers or nagalase indices.' },
    ],
  },
]
