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
    tagline: 'Investigating macrophage-mediated immune surveillance in oncology research',
    summary:
      'GcMAF research in oncology examines macrophage activation, immune surveillance, nagalase-related biology, angiogenesis, and complementary clinical applications.',
    fullDescription:
      'GcMAF has been investigated in relation to immune response modulation and macrophage biology. Published laboratory and clinical literature has explored macrophage activation, tumour-related immune signaling, angiogenesis, biomarkers, and the use of GcMAF within broader integrative oncology settings.',
    researchHighlights: [
      'Laboratory studies have examined GcMAF-related macrophage phagocytic activity',
      'Research has explored immune modulation and tumour-related signaling pathways',
      'Clinical and observational literature includes complementary oncology applications',
    ],
    mechanismOfAction:
      'Research has examined the relationship between Gc protein, macrophage activation, tumour-associated immune suppression, and alpha-N-acetylgalactosaminidase activity. Exogenous GcMAF has been studied as one way of directly supplying a macrophage-activating factor while these pathways are investigated.',
    clinicalNotes:
      'Oncology use requires qualified medical supervision so that GcMAF-related research, formulation, dosing, monitoring, and the patient’s established cancer-care plan can be considered together.',
    diseaseBurden:
      'Cancer remains a major global health challenge. Immuno-oncology research continues to investigate how macrophages and other immune cells recognize abnormal cells, interact with the tumour microenvironment, and influence treatment response.',
    nagalaseRole:
      'Alpha-N-acetylgalactosaminidase activity has been discussed in parts of the GcMAF literature as a biomarker and possible immune-related pathway in cancer. Interpretation depends on the assay, disease setting, study design, and publication history.',
    potentialIndications: [
      'Oncology Immune Research',
      'Complementary Immunotherapy Research',
    ],
    videoSrc: 'https://cdn.gcmaf.net/integrated-immune-response.mov',
    heroImage: 'https://images.unsplash.com/photo-1579154204601-51588f4ffa44?w=1600&q=80',
    potentialEffects: [
      { title: 'Macrophage Priming', description: 'Studied for effects on activation states and phagocytic behavior in macrophages.' },
      { title: 'Immune Surveillance', description: 'Research examines how macrophage signaling may influence recognition of abnormal cellular structures.' },
      { title: 'Complementary Research', description: 'GcMAF has been discussed in clinical and integrative settings alongside established oncology care.' },
      { title: 'Biomarker Research', description: 'Studies have examined immune-related biomarkers including serum alpha-N-acetylgalactosaminidase activity.' },
    ],
    evidence: {
      preclinical: ['In vitro studies of macrophage activity, angiogenesis, and tumour-related cellular pathways.', 'Preclinical models examining immune and cellular responses to GcMAF-related preparations.'],
      clinical: ['Clinical and observational literature describing GcMAF use, biomarkers, tolerability, and selected patient outcomes.'],
      caseReports: ['Published case-based observations involving clinical response, biomarkers, and quality-of-life measures.'],
    },
    limitations: [
      'Clinical findings are best interpreted according to study design, sample size, formulation, endpoints, and publication status.',
      'Individual response can vary with cancer type, stage, immune status, concurrent therapies, and product formulation.',
      'Clinical integration should be coordinated by qualified oncology professionals within a comprehensive treatment plan.',
    ],
    faqs: [
      { question: 'How is GcMAF studied in oncology?', answer: 'Research includes laboratory studies of macrophages and angiogenesis, biomarker work, case observations, and clinical studies examining GcMAF within broader oncology and immunotherapy settings.' },
      { question: 'How is nagalase used in this research?', answer: 'Some publications have measured serum alpha-N-acetylgalactosaminidase activity as an immune-related biomarker. Its interpretation depends on the clinical setting, assay, and supporting evidence.' },
    ],
  },
  {
    slug: 'neurological',
    shortTitle: 'Neurological Disorders',
    title: 'Immune Modulation in Neurological Health',
    icon: 'Brain',
    tagline: 'Investigating microglia, neuroinflammation, and immune signaling',
    summary:
      'GcMAF-related neurological research examines microglia, macrophage-like immune cells of the central nervous system, together with inflammatory and neuroimmune signaling pathways.',
    fullDescription:
      'Microglia are resident immune cells of the central nervous system. Scientific research involving GcMAF and related vitamin D-binding protein pathways has examined microglial activity, inflammatory signaling, neuronal cell models, endocannabinoid pathways, and selected neurological clinical observations.',
    researchHighlights: [
      'Laboratory research has examined GcMAF-related effects in microglial and neuronal models',
      'Studies explore neuroinflammatory and immune-regulatory pathways',
      'Clinical and case-based literature includes several neurological conditions',
    ],
    mechanismOfAction:
      'Proposed mechanisms include macrophage and microglial signaling, cytokine regulation, vitamin D-related pathways, endocannabinoid signaling, and cellular responses relevant to nervous-system immune biology.',
    clinicalNotes:
      'Neurological applications should be evaluated by qualified specialists who can integrate the research with diagnosis, established care, product characteristics, and patient-specific monitoring.',
    diseaseBurden:
      'Neurological disorders can involve neuroinflammation, altered microglial activity, neuronal injury, cognitive decline, and functional impairment. Neuroimmunology studies how immune pathways interact with these processes.',
    nagalaseRole:
      'Nagalase-related measurements have appeared in parts of the neurological and chronic-disease literature. Their clinical meaning should be interpreted in the context of the specific condition, assay, and supporting research.',
    potentialIndications: [
      'Neuro-inflammatory Research',
      'Cognitive Function Research',
      'Microglial Modulation',
    ],
    videoSrc: 'https://cdn.gcmaf.net/neurological-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=80',
    potentialEffects: [
      { title: 'Microglial Activity', description: 'Research examines regulatory and phagocytic responses in CNS immune cells.' },
      { title: 'Inflammatory Signaling', description: 'Studies investigate cytokine pathways and neuroimmune signaling.' },
      { title: 'Cellular Debris Clearance', description: 'Microglial phagocytosis is an important process in nervous-system homeostasis.' },
      { title: 'Clinical Observations', description: 'Case and observational literature has reported neurological symptoms and functional outcomes in selected settings.' },
    ],
    evidence: {
      preclinical: ['Laboratory studies involving microglial, neuronal, and inflammatory pathways.', 'Cell-based work examining GcMAF-related signaling and biological responses.'],
      clinical: ['Small clinical and observational studies documenting neuroimmune markers and patient outcomes.'],
      caseReports: ['Published case reports and clinical observations involving neurological conditions.'],
    },
    limitations: [
      'Neurological conditions are heterogeneous, and findings should be matched to the specific diagnosis and study population.',
      'Formulation, route, dose, endpoints, and follow-up vary across publications.',
      'Specialist neurological oversight helps place GcMAF-related research within an individual clinical plan.',
    ],
    faqs: [
      { question: 'What is the relevance of microglia to GcMAF research?', answer: 'Microglia are the resident immune cells of the central nervous system. GcMAF-related studies examine macrophage and microglial signaling, inflammatory pathways, and cellular responses relevant to neuroimmune biology.' },
      { question: 'How can GcMAF research fit with neurological care?', answer: 'A supervising neurologist can review the available research together with diagnosis, medications, rehabilitation, monitoring, and other elements of the patient’s care plan.' },
    ],
  },
  {
    slug: 'autoimmune',
    shortTitle: 'Autoimmune',
    title: 'GcMAF in Autoimmune Research',
    icon: 'Activity',
    tagline: 'Exploring macrophage regulation and immune tolerance pathways',
    summary:
      'Autoimmune research involving GcMAF focuses on macrophage activity, vitamin D-related pathways, inflammatory signaling, and immune-regulatory mechanisms.',
    fullDescription:
      'Autoimmune conditions involve dysregulated immune responses. GcMAF-related research examines whether macrophage activation and vitamin D-binding protein pathways may influence inflammatory signaling, immune tolerance, cytokine patterns, and selected clinical outcomes.',
    researchHighlights: [
      'Research into macrophage and cytokine signaling in autoimmune biology',
      'Studies of vitamin D, vitamin D-binding protein, and immune-regulatory pathways',
      'Clinical and observational reports across varied autoimmune presentations',
    ],
    mechanismOfAction:
      'Research questions include how GcMAF may influence macrophage phenotype, inflammatory cytokines, innate-adaptive immune communication, and pathways associated with immune tolerance.',
    clinicalNotes:
      'Autoimmune applications require specialist evaluation because disease activity, concurrent immunomodulatory therapy, inflammatory status, and patient response can vary substantially.',
    diseaseBurden:
      'Autoimmune diseases can cause persistent inflammation and tissue injury. Research aims to understand how innate and adaptive immune pathways can be regulated while preserving effective host defense.',
    nagalaseRole:
      'Nagalase activity has been investigated in selected autoimmune research. Its significance should be interpreted alongside disease activity, immune markers, assay methods, and the wider evidence base.',
    potentialIndications: [
      'Rheumatological Research',
      'Immune Tolerance Research',
      'Systemic Inflammation Research',
    ],
    conditionCards: [
      { name: 'Rheumatology Cohorts' },
      { name: 'Dermatological Autoimmunity' },
      { name: 'Gastrointestinal Immunology' },
    ],
    videoSrc: 'https://cdn.gcmaf.net/autoimmune-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80',
    potentialEffects: [
      { title: 'Cytokine Regulation', description: 'Research examines Th1, Th2, Th17, and other inflammatory pathways.' },
      { title: 'Immune Tolerance', description: 'Studies investigate communication between innate immune cells and adaptive regulatory pathways.' },
      { title: 'Inflammation', description: 'Clinical and laboratory research can measure inflammatory markers and symptom changes.' },
      { title: 'Biomarker Tracking', description: 'Research may include CRP, ESR, cytokines, vitamin D-related markers, and other disease-specific measurements.' },
    ],
    evidence: {
      preclinical: ['Laboratory studies of macrophage activity and inflammatory signaling in immune-cell models.'],
      clinical: ['Observational and pilot clinical literature involving chronic inflammatory and autoimmune conditions.'],
      caseReports: ['Published clinical observations describing symptoms, biomarkers, and treatment courses.'],
    },
    limitations: [
      'Autoimmune conditions differ substantially in mechanism, severity, and treatment context.',
      'Clinical findings should be matched to the exact diagnosis, formulation, dose, and study design.',
      'Specialist immunological or rheumatological oversight supports safe interpretation and monitoring.',
    ],
    faqs: [
      { question: 'How is GcMAF relevant to autoimmune research?', answer: 'GcMAF is studied as a macrophage-related immune factor. Research examines macrophage regulation, inflammatory signaling, vitamin D-related pathways, and immune tolerance in selected autoimmune settings.' },
      { question: 'How is dosing evaluated in autoimmune settings?', answer: 'Dosing and monitoring are determined by the treating specialist according to formulation, patient status, concurrent therapy, clinical response, and available research.' },
    ],
  },
  {
    slug: 'chronic-infections',
    shortTitle: 'Chronic Infections',
    title: 'Supporting Innate Responses to Chronic Infections',
    icon: 'Zap',
    tagline: 'Investigating macrophage capacity in persistent infectious environments',
    summary:
      'GcMAF research in chronic infections examines macrophage activity, host immune response, immune signaling, and selected clinical observations across viral and bacterial conditions.',
    fullDescription:
      'Persistent infections interact with innate and adaptive immune responses in complex ways. GcMAF-related literature examines macrophage activation, phagocytic activity, immune signaling, biomarkers, and clinical observations in several infectious-disease contexts.',
    researchHighlights: [
      'Laboratory studies of GcMAF-exposed macrophages and phagocytic responses',
      'Research into immune signaling and chronic-infection biology',
      'Clinical and case-based reports in immunocompromised and chronic-disease populations',
    ],
    mechanismOfAction:
      'GcMAF-related research focuses on host immunity rather than direct antimicrobial chemistry. Proposed mechanisms involve macrophage activation, phagocytosis, antigen presentation, inflammatory signaling, and broader coordination of innate and adaptive immune responses.',
    clinicalNotes:
      'Clinical evaluation should consider the identified pathogen, established antimicrobial or antiviral care, immune status, formulation, and patient-specific monitoring together.',
    diseaseBurden:
      'Chronic infections can produce persistent symptoms, immune activation, tissue effects, and long-term functional impairment. Effective management often involves pathogen-specific treatment together with evaluation of the host immune response.',
    nagalaseRole:
      'Nagalase-related hypotheses and measurements appear in parts of the infectious-disease GcMAF literature. Their clinical significance depends on the pathogen, assay, study design, and supporting research.',
    potentialIndications: [
      'Infectious-Disease Immune Research',
      'Chronic Infection Support Research',
      'Immunocompromised Patient Research',
    ],
    videoSrc: 'https://cdn.gcmaf.net/chronic-infection-mechanism.mp4',
    heroImage: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1600&q=80',
    potentialEffects: [
      { title: 'Phagocytic Activity', description: 'Research examines macrophage engulfment and processing of biological material.' },
      { title: 'Host Immune Response', description: 'Studies investigate macrophage activation and immune signaling in infectious settings.' },
      { title: 'Adaptive Immune Priming', description: 'Macrophages and other antigen-presenting cells help connect innate and adaptive immunity.' },
      { title: 'Biomarker Research', description: 'Clinical studies may track pathogen load, inflammatory markers, immune-cell measures, or other condition-specific endpoints.' },
    ],
    evidence: {
      preclinical: ['In vitro studies examining macrophage responses after GcMAF exposure.'],
      clinical: ['Observational and clinical literature involving immune markers, symptoms, and selected infectious-disease outcomes.'],
      caseReports: ['Published case reports describing clinical courses and immune-related observations.'],
    },
    limitations: [
      'GcMAF-related research focuses on immune modulation and should be interpreted separately from pathogen-specific antimicrobial mechanisms.',
      'Clinical response may depend on pathogen, immune status, concurrent therapy, formulation, and overall health.',
      'Qualified infectious-disease or medical oversight helps integrate immune research with pathogen-specific treatment and monitoring.',
    ],
    faqs: [
      { question: 'What does GcMAF research examine in viral or bacterial disease?', answer: 'The research primarily examines macrophage activation, host immune signaling, phagocytic function, biomarkers, and clinical observations rather than a direct chemical effect on the pathogen.' },
      { question: 'How can GcMAF research fit with antimicrobial care?', answer: 'Clinicians can evaluate GcMAF-related immune research alongside pathogen-specific antibiotics, antivirals, diagnostics, and monitoring when appropriate for the individual patient.' },
    ],
  },
  {
    slug: 'immune-enhancement',
    shortTitle: 'Immune Enhancement',
    title: 'GcMAF and Immune Enhancement Research',
    icon: 'TrendingUp',
    tagline: 'Supporting physiological readiness and resilience research',
    summary:
      'GcMAF is explored in immune-enhancement research for its potential relationship with baseline macrophage activity, immune readiness, recovery, and wellness-related biomarkers.',
    fullDescription:
      'Interest in GcMAF also extends to immune physiology outside acute disease. Research questions include macrophage activity during ageing, recovery after physiological stress, immune resilience, and the maintenance of healthy innate immune responses.',
    researchHighlights: [
      'Research into age-related changes in macrophage activity and immune function',
      'Exploratory work involving recovery and physiological stress',
      'Studies of vitamin D-binding protein and macrophage-related homeostatic pathways',
    ],
    mechanismOfAction:
      'Immune-enhancement research examines how macrophage activation, phagocytic activity, inflammatory signaling, and immune-cell communication contribute to physiological readiness and recovery.',
    clinicalNotes:
      'Professional oversight is appropriate for clinically administered GcMAF products, including evaluation of formulation, dose, health status, goals, and monitoring.',
    diseaseBurden:
      'Ageing, chronic stress, sleep disruption, illness recovery, and high physiological demand can influence immune function. Research into immune resilience examines how these factors affect macrophages and broader host defense.',
    nagalaseRole:
      'Nagalase measurements have been discussed in parts of the GcMAF literature. Their interpretation in wellness or non-disease settings requires appropriate assay context and supporting clinical evidence.',
    potentialIndications: [
      'Longevity & Immune Research',
      'Performance Recovery Research',
      'Post-Illness Immune Research',
    ],
    videoSrc: 'https://cdn.gcmaf.net/immune-cell-destroying-germ.mov',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    potentialEffects: [
      { title: 'Immune Readiness', description: 'Research examines baseline macrophage activity and immune responsiveness.' },
      { title: 'Recovery Biology', description: 'Studies may examine inflammatory resolution, cellular debris clearance, and post-stress recovery.' },
      { title: 'Ageing and Immunity', description: 'Age-related changes in innate immune function are an active research area.' },
      { title: 'Homeostatic Support', description: 'Macrophages contribute to surveillance, tissue maintenance, and immune homeostasis.' },
    ],
    evidence: {
      preclinical: ['Laboratory analyses of macrophage activity in varied biological and stress-related environments.'],
      clinical: ['Exploratory clinical and observational work involving immune-resilience and recovery markers.'],
      caseReports: ['Clinical observations involving subjective vitality, recovery, and illness-frequency measures.'],
    },
    limitations: [
      'Wellness and enhancement outcomes can be subjective and vary between individuals.',
      'Lifestyle, sleep, nutrition, stress, age, and underlying health strongly influence immune function.',
      'Clinically administered products should be used within applicable professional and regulatory requirements.',
    ],
    faqs: [
      { question: 'How is GcMAF discussed in immune-enhancement research?', answer: 'Research examines macrophage activity, immune signaling, recovery, ageing, and host-defense biology. Clinical use should be evaluated by a qualified healthcare professional.' },
      { question: 'How are outcomes measured in healthy or wellness-focused settings?', answer: 'Studies and clinicians may track symptoms, recovery, illness frequency, inflammatory markers, immune-cell measures, and other objective or patient-reported outcomes.' },
    ],
  },
]
