export interface ResearchStat {
  value: string;
  label: string;
  description: string;
}

export interface Publication {
  authors?: string;
  title?: string;
  journal?: string;
  citation?: string;
  url?: string;
  year: number;
  category: string;
}

export const researchStats: ResearchStat[] = [
  {
    value: "1993",
    label: "Year of Discovery",
    description: "Pioneered at the University of Pennsylvania",
  },
  {
    value: "30+",
    label: "Years of Research",
    description: "Peer-reviewed since the early 1990s",
  },
  {
    value: "160+",
    label: "Clinical Studies",
    description: "Indexed in major medical databases",
  },
  {
    value: "0",
    label: "Reported Adverse Events",
    description: "In 30+ years of clinical literature",
  },
];

export const researchHighlights = [
  "Backed by 30+ years of peer-reviewed research",
  "Robust and well-documented safety profile",
  "Powerful, targeted macrophage activator",
  "Independently verified potency and sterility",
  "Studied across oncology, neurology, immunology, and infectious disease",
  "Bioidentical protein naturally produced in healthy human serum",
];

export const researchConditions: string[] = [
  "ALS",
  "Alzheimer's",
  "Autism",
  "Brain Cancer",
  "Breast Cancer",
  "Bladder Cancer",
  "Chronic Fatigue",
  "Colorectal Cancer",
  "COVID-19",
  "COPD",
  "Endometriosis",
  "Head/Neck Cancer",
  "HIV/AIDS",
  "IBD",
  "Kidney Cancer",
  "Larynx Cancer",
  "Liver Cancer",
  "Lung Cancer",
  "Lupus",
  "Lyme Disease",
  "Lymphoma",
  "Multiple Sclerosis",
  "Osteoporosis",
  "Ovarian Cancer",
  "Pancreatic Cancer",
  "Parkinson's",
  "Prostate Cancer",
  "Thymic Cancer",
  "Thyroid Cancer",
  "+ more",
];

export const physiologicalEffects: string[] = [
  "Activates macrophages to kill cancer cells",
  "Inhibits angiogenesis and tumour blood supply",
  "Suppresses cancer cell proliferation and metastasis",
  "Induces cancer cell apoptosis",
  "Repairs neurons and promotes neurogenesis",
  "Increases mitochondrial energy production",
  "Counteracts chemotherapy-induced neuropathy",
];

function categorizePublication(citation: string): string {
  const text = citation.toLowerCase();

  if (
    text.includes("cancer") ||
    text.includes("tumour") ||
    text.includes("tumor") ||
    text.includes("oncolog") ||
    text.includes("adenocarcinoma")
  ) {
    return "Cancer";
  }

  if (
    text.includes("autism") ||
    text.includes("alzheimer") ||
    text.includes("multiple sclerosis") ||
    text.includes("neurolog") ||
    text.includes("neuron") ||
    text.includes("microglia") ||
    text.includes("amyotrophic") ||
    text.includes("parkinson")
  ) {
    return "Neurological";
  }

  if (
    text.includes("hiv") ||
    text.includes("tuberculosis") ||
    text.includes("influenza") ||
    text.includes("covid") ||
    text.includes("infection") ||
    text.includes("viral")
  ) {
    return "Infectious Disease";
  }

  if (
    text.includes("autoimmune") ||
    text.includes("lupus") ||
    text.includes("rheumatoid") ||
    text.includes("inflammatory bowel") ||
    text.includes("endometriosis")
  ) {
    return "Autoimmune";
  }

  if (
    text.includes("nagalase") ||
    text.includes("vitamin d binding protein") ||
    text.includes("vdbp") ||
    text.includes("gcmaf-rf")
  ) {
    return "Biomarker";
  }

  return "Immunology";
}

const rawPublicationLines = `
Saburi, E., Tavakol-Afshari, J., Biglari, S., & Mortazavi, Y. (2017). Is α-N-acetylgalactosaminidase the key to curing cancer? A mini-review and hypothesis. J BUON, 22(6), 1372-1377. https://pubmed.ncbi.nlm.nih.gov/29332325/
Thyer, L., Ward, E., Smith, R., Branca, J. J., Morucci, G., Gulisano, M., … & Pacini, S. (2013). GC protein-derived macrophage-activating factor decreases α-N-acetylgalactosaminidase levels in advanced cancer patients. Oncoimmunology, 2(8), e25769. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3812199/
Saburi, E., Saburi, A., & Ghanei, M. (2017). Promising role for Gc-MAF in cancer immunotherapy: from bench to bedside. Caspian Journal of Internal Medicine, 8(4), 228. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5686300/
Albracht, S. P. (2022). Immunotherapy with GcMAF revisited-A critical overview of the research of Nobuto Yamamoto. Cancer Treatment and Research Communications, 100537. https://www.sciencedirect.com/science/article/pii/S2468294222000284/
Morucci, G., Branca, J. J., Gulisano, M., Ruggiero, M., Paternostro, F., Pacini, A., … & Pacini, S. (2015). Gc-protein-derived macrophage activating factor counteracts the neuronal damage induced by oxaliplatin. Anti-Cancer Drugs, 26(2), 197-209. https://pubmed.ncbi.nlm.nih.gov/25304987/
Gregory, K. J., Zhao, B., Bielenberg, D. R., Dridi, S., Wu, J., Jiang, W., Huang, B., Pirie-Shepherd, S., & Fannon, M. (2010). Vitamin D binding protein-macrophage activating factor directly inhibits proliferation, migration, and uPAR expression of prostate cancer cells. PloS one, 5(10), e13428. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2956649/
Mohammed, A. A., Al-Zahrani, A. S., Sherisher, M. A., Alnagar, A. A., El-Shentenawy, A., & El-Kashif, A. T. (2014). The pattern of infection and antibiotics use in terminal cancer patients. Journal of the Egyptian National Cancer Institute, 26(3), 147–152. https://pubmed.ncbi.nlm.nih.gov/25150130/
Kanda, S., Mochizuki, Y., Miyata, Y., Kanetake, H., & Yamamoto, N. (2002). Effects of vitamin D3-binding protein-derived macrophage activating factor (GcMAF) on angiogenesis. Journal of the National Cancer Institute, 94(17), 1311-1319. https://academic.oup.com/jnci/article/94/17/1311/2519874
Pacini, S., Morucci, G., Punzi, T., Gulisano, M., & Ruggiero, M. (2011). Gc protein-derived macrophage-activating factor (GcMAF) stimulates cAMP formation in human mononuclear cells and inhibits angiogenesis in chick embryo chorionallantoic membrane assay. Cancer immunology, immunotherapy : CII, 60(4), 479–485. https://pubmed.ncbi.nlm.nih.gov/21170647/
Yamamoto, N., Suyama, H., & Yamamoto, N. (2008). Immunotherapy for prostate cancer with Gc protein-derived macrophage-activating factor, GcMAF. Translational oncology, 1(2), 65-72. https://www.sciencedirect.com/science/article/pii/S1936523308800083
Smith, R., Thyer, L., Ward, E., Meacci, E., Branca, J. J. V., Morucci, G., … & Pacini, S. (2013). Effects of GC-Macrophage activating factor in human neurons: implications for treatment of chronic fatigue syndrome. American Journal of Immunology, 9, 120-129. https://arpi.unipi.it/handle/11568/1053382
Siniscalco, D., Bradstreet, J. J., Cirillo, A., & Antonucci, N. (2014). The in vitro GcMAF effects on endocannabinoid system transcriptionomics, receptor formation, and cell activity of autism-derived macrophages. Journal of neuroinflammation, 11, 78. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3996516/
Eric Matamoros, M. (2017). GcMAF: a polemic or a highly promising molecule?. World Scientific News, 65, 20-36. https://bibliotekanauki.pl/articles/1182805
Bradstreet, J. J., Vogelaar, E., & Thyer, L. (2012). Initial Observations of Elevated Alpha-N-Acetylgalactosaminidase Activity Associated with Autism and Observed Reductions from GC Protein–Macrophage Activating Factor Injections. Autism Insights, (4). https://vacciniinforma.it/wp-content/uploads/2015/07/initial-observations-of-elevated.pdf
Inui, T., Katsuura, G., Kubo, K., Kuchiike, D., Chenery, L., Uto, Y., Nishikata, T., & Mette, M. (2016). Case Report: GcMAF Treatment in a Patient with Multiple Sclerosis. Anticancer research, 36(7), 3771–3774. https://pubmed.ncbi.nlm.nih.gov/27354653/
Thyer, L., Ward, E., Smith, R. J., Branca, J. J. V., Morucci, G., Gulisano, M., … & Pacini, S. (2013). Therapeutic effects of highly purified de-glycosylated gcmaf in the immunotherapy of patients with chronic diseases. American Journal of Immunology, 9, 78-84. https://arpi.unipi.it/handle/11568/1053372
Neniskyte, U., Vilalta, A., & Brown, G. C. (2014). Tumour necrosis factor alpha-induced neuronal loss is mediated by microglial phagocytosis. FEBS letters, 588(17), 2952–2956. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4158418/
Tobinick, E., Gross, H., Weinberger, A., & Cohen, H. (2006). TNF-alpha modulation for treatment of Alzheimer’s disease: a 6-month pilot study. MedGenMed : Medscape general medicine, 8(2), 25. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1785182/
Branca, J. J., Morucci, G., Malentacchi, F., Gelmini, S., Ruggiero, M., & Pacini, S. (2015). Effects of oxaliplatin and oleic acid Gc-protein-derived macrophage-activating factor on murine and human microglia. Journal of neuroscience research, 93(9), 1364–1377. https://pubmed.ncbi.nlm.nih.gov/25782915/
Greilberger, J., Greilberger, M., & Herwig, R. (2017). Measurement of oxidative stress parameters, vitamin D and vitamin D binding protein during vitamin D treatment in a patient with amyotrophic lateral sclerosis. Integr Mol Med, 4, 1-5. https://www.oatext.com/measurement-of-oxidative-stress-parameters-vitamin-d-and-vitamin-d-binding-protein-during-vitamin-d-treatment-in-a-patient-with-amyotrophic-lateral-sclerosis.php
Morucci, G., Fiore, M. G., Magherini, S., Branca, J. J., Gulisano, M., Thyer, L., … & Pacini, S. (2013). Vitamin D binding protein-derived macrophage activating factor stimulates proliferation and signalling in a human neuronal cell line. In Italian Journal of Anatomy and Embriology (Vol. 118, pp. 143-143). FUP-Firenze University Press. https://arpi.unipi.it/handle/11568/1053207
Bjorklund, G., Saad, K., Chirumbolo, S., Kern, J., Geier, D., Geier, M., & Urbina, M. (2016). Immune dysfunction and neuroinflammation in autism spectrum disorder. Acta neurobiologiae experimentalis, 76(4), 257-268. https://ojs.nencki.edu.pl/index.php/ane/article/view/2076
Theoharides, T. C., Tsilioni, I., Patel, A. B., & Doyle, R. (2016). Atopic diseases and inflammation of the brain in the pathogenesis of autism spectrum disorders. Translational psychiatry, 6(6), e844-e844. https://www.nature.com/articles/tp201677
Brigida, A. L., Schultz, S., Cascone, M., Antonucci, N., & Siniscalco, D. (2017). Endocannabinoid signal dysregulation in autism spectrum disorders: a correlation link between inflammatory state and neuro-immune alterations. International Journal of Molecular Sciences, 18(7), 1425. https://www.mdpi.com/1422-0067/18/7/1425
Yamamoto, N., Naraparaju, V. R., Moore, M., & Brent, L. H. (1997). Deglycosylation of serum vitamin D3-binding protein by α-N-acetylgalactosaminidase detected in the plasma of patients with systemic lupus erythematosus. Clinical immunology and immunopathology, 82(3), 290-298. https://www.sciencedirect.com/science/article/abs/pii/S0090122996943202
Yadav, B., Shashidhar, K. N., Reddy, H., & Deepika, R.(2021). Vitamin D Binding Protein: A Fidelity Molecule in Spectra of Diseases. Journal of Clinical & Diagnostic Research, 15(6). https://www.jcdr.net/articles/PDF/15053/47069_CE[Ra1]_F[SK] GC[AnK]_PF1(SC_RK)_PFA(NC_SC_KM)_PN(KM).pdf
Rozmus, D., Ciesielska, A., Płomiński, J., Grzybowski, R., Fiedorowicz, E., Kordulewska, N., … & Cieślińska, A. (2020). Vitamin D binding protein (VDBP) and its gene polymorphisms—the risk of malignant tumors and other diseases. International Journal of Molecular Sciences, 21(21), 7822.https://www.mdpi.com/1422-0067/21/21/7822
Del Pinto, R., Ferri, C., & Cominelli, F. (2017). Vitamin D Axis in Inflammatory Bowel Diseases: Role, Current Uses and Future Perspectives. International journal of molecular sciences, 18(11), 2360. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5713329/
Inui, T., Kubo, K., Kuchiike, D., Uto, Y., Nishikata, T., Sakamoto, N., & Mette, M. (2015). Oral Colostrum Macrophage-activating Factor for Serious Infection and Chronic Fatigue Syndrome: Three Case Reports. Anticancer research, 35(8), 4545–4549. https://ar.iiarjournals.org/content/35/8/4545.long
Spadera, L., & Spadera, M. (2020). Potential role of GcMAF in suppressing the severity of COVID-19-induced immune responses: Lesson learned from HIV. Medical hypotheses, 144, 110293. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7513798/
Yamamoto N. (2006). Pathogenic significance of alpha-N-acetylgalactosaminidase activity found in the envelope glycoprotein gp160 of human immunodeficiency virus Type 1. AIDS research and human retroviruses, 22(3), 262–271. https://pubmed.ncbi.nlm.nih.gov/16545013/
Yamamoto, N., Naraparaju, V. R., & Srinivasula, S. M. (1995). Structural modification of serum vitamin D3-binding protein and immunosuppression in AIDS patients. AIDS research and human retroviruses, 11(11), 1373–1378. https://pubmed.ncbi.nlm.nih.gov/8573395/
Kearns, M. D., & Tangpricha, V. (2014). The role of vitamin D in tuberculosis. Journal of clinical & translational endocrinology, 1(4), 167–169. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5684962/
Pop, T. L., Sîrbe, C., Benţa, G., Mititelu, A., & Grama, A. (2022). The role of vitamin D and vitamin D binding protein in chronic liver Diseases. International journal of molecular sciences, 23(18), 10705. https://www.mdpi.com/1422-0067/23/18/10705
Ruggiero, M., Pacini, S., Morucci, G., Branca, J. J. V., Ward, E., Smith, R., … & Gulisano, M. (2013). Multifaceted immunotherapeutic effects of vitamin D-binding protein-derived macrophage activating factor (GcMAF) on human breast cancer and neuroblastoma cells. FRONTIERS IN IMMUNOLOGY, 0-0. https://flore.unifi.it/handle/2158/820904
Pacini, S., Morucci, G., Punzi, T., Gulisano, M., Ruggiero, M., Amato, M., & Aterini, S. (2012). Effect of paricalcitol and GcMAF on angiogenesis and human peripheral blood mononuclear cell proliferation and signaling. Journal of nephrology, 25(4), 577. https://pubmed.ncbi.nlm.nih.gov/21956771/
Ruggiero, M., Branca, J. J., Noakes, D., Gulisano, M., Morucci, G., Thyer, L., & Pacini, S. (2008). Glycosylated oleic acid/vitamin D-binding protein suppresses HER2 oncogene expression in human breast cancer. Oncol, 10(1), 30-34. https://flore.unifi.it/retrieve/handle/2158/918539/29931/
Ruggiero, M., Gulisano, M., Branca, J. J., Morucci, G., Noakes, D., & Pacini, S. (2014). Intra-tumoural nitric oxide release by macrophages activated by Gc-protein-derived Macrophage Activating Factor (GcMAF). Italian Journal of Anatomy and Embryology, 119(1), https://www.proquest.com/openview/17e0767c291aa3cf53b63a8ae97e7185/
Swamy, N., Ghosh, S., Schneider, G. B., & Ray, R. (2001). Baculovirus‐expressed vitamin D‐binding protein‐macrophage activating factor (DBP‐maf) activates osteoclasts and binding of 25‐hydroxyvitamin D3 does not influence this activity. Journal of Cellular Biochemistry, 81(3), 535-546. https://pubmed.ncbi.nlm.nih.gov/11255236/
Emma Ward, R., Branca, J. V., Noakes, D., Morucci, G., & Thyer, L. (2014). Clinical experience of cancer immunotherapy integrated with oleic acid complexed with de-glycosylated vitamin d binding protein. Am. J. Immunol, 10, 23-32. https://flore.unifi.it/handle/2158/1180639
Inui, T., Makita, K., Miura, H., Matsuda, A., Kuchiike, D., Kubo, K., … & Sakamoto, N. (2014). Case report: a breast cancer patient treated with GcMAF, sonodynamic therapy and hormone therapy. Anticancer research, 34(8), 4589-4593. https://pubmed.ncbi.nlm.nih.gov/25075104/
Pacini, S., Ruggiero, M., Morucci, G., & Punzi, T. (2011). Macrophages of the mucosa-associated lymphoid tissue (MALT) as key elements of the immune response to vitamin D binding protein-macrophage activating factor. 136-136. https://www.torrossa.com/it/resources/an/2490419
Inui, T., Kuchiike, D., Kubo, K., Mette, M., Uto, Y., Hori, H., & Sakamoto, N. (2013). Clinical experience of integrative cancer immunotherapy with GcMAF. Anticancer Research, 33(7), 2917-2919. https://ar.iiarjournals.org/content/33/7/2917
Inui, T., Amitani, H., Kubo, K., Kuchiike, D., Uto, Y., Nishikata, T., & Mette, M. (2016). Case report: a non-small cell lung cancer patient treated with GcMAF, sonodynamic therapy and tumor treating fields. Anticancer Research, 36(7), 3767-3770. https://ar.iiarjournals.org/content/36/7/3767.long
Lynda, T., Branca, J. J. V., & Margit, T. (2014). Clinical experience of immunotherapy based on oleic acid bound to glycosylated vitamin d-binding protein in localised and metastatic adenocarcinoma of the pancreas. ANTICANCER RESEARCH, 34, 5847-5849. https://flore.unifi.it/handle/2158/918546
Chaiyasit, K., Toshio, I., & Wiwanitkit, V. (2015). The use of Gc protein-derived macrophage activating factor for management of thyroid cancer. Journal of Cancer Research and Therapeutics, 11(4). https://www.proquest.com/openview/f93211f988372b44ace1ab50f4b3a0cd/
Ma, W. T., Gao, F., Gu, K., & Chen, D. K. (2019). The role of monocytes and macrophages in autoimmune diseases: a comprehensive review. Frontiers in immunology, 10, 1140. https://www.frontiersin.org/articles/10.3389/fimmu.2019.01140/full
Pradhan, P., Pandey, A. K., Mishra, A., Gupta, P., Tripathi, P. K., Menon, M. B., … & Kundu, B. (2020). Uncanny similarity of unique inserts in the 2019-nCoV spike protein to HIV-1 gp120 and Gag. BioRxiv. https://www.biorxiv.org/content/10.1101/2020.01.30.927871V1.full
Yamamoto, N., Ushijima, N., & Koga, Y. (2009). Immunotherapy of HIV-infected patients with Gc protein-derived macrophage activating factor (GcMAF). Journal of medical virology, 81(1), 16–26. https://pubmed.ncbi.nlm.nih.gov/19031451/
Yamamoto, N., Naraparaju, V. R., & Orchard, P. J. (1996). Defective lymphocyte glycosidases in the macrophage activation cascade of juvenile osteopetrosis. Blood, 88(4), 1473–1478. https://pubmed.ncbi.nlm.nih.gov/8695868/
Wang, Y. L., Kong, H., Xie, W. P., & Wang, H. (2015). Association of vitamin D-binding protein variants with chronic obstructive pulmonary disease: a meta-analysis. Genetics and Molecular Research, 14(3), 10774-10785. https://www.geneticsmr.com/year2015/vol14-3/pdf/gmr6264.pdf
Sayegh, L., Fuleihan, G. E. H., & Nassar, A. H. (2014). Vitamin D in endometriosis: a causative or confounding factor?. Metabolism, 63(1), 32-41. https://www.sciencedirect.com/science/article/abs/pii/S0026049513002965
Adebanjo, O. A., Moonga, B. S., Haddad, J. G., Huang, C. L. H., & Zaidi, M. (1998). A possible new role for vitamin D-binding protein in osteoclast control: inhibition of extracellular Ca2+ sensing at low physiological concentrations. Biochemical and Biophysical Research Communications, 249(3), 668-671. https://www.sciencedirect.com/science/article/pii/S0006291X98990374
Celikbilek, A. (2020). Possible associations of vitamin D, vitamin D-binding protein, and vitamin D receptor with diabetic neuropathic pain and balance. Journal of Pain Research, 465-466. https://www.tandfonline.com/doi/full/10.2147/JPR.S249871
Speeckaert, M. M., Speeckaert, R., & Delanghe, J. R. (2021). Vitamin D and vitamin D binding protein: The inseparable duo in covid-19. Journal of Endocrinological Investigation, 44, 2323-2324. https://link.springer.com/article/10.1007/s40618-021-01573-w
Yamamoto, N., Ueda, M., & Hashinaka, K. (2010). Immunotherapy of Chronic Lymphocytic Leukemia Patients with Gc Protein-derived Macrophage Activating Factor, GcMAF or its Cloned Derivative, GcMAFc. Clinical Immunology, (135), S13. https://www.sciencedirect.com/science/article/abs/pii/S1521661610001452
Borumandnia, N., Majd, H. A., Doosti, H., & Olazadeh, K. (2022). The trend analysis of neurological disorders as major causes of death and disability according to human development, 1990-2019. Environmental Science and Pollution Research, 1-7. https://link.springer.com/article/10.1007/s11356-021-16604-5
Bachiller, S., Jiménez-Ferrer, I., Paulus, A., Yang, Y., Swanberg, M., Deierborg, T., & Boza-Serrano, A. (2018). Microglia in neurological diseases: a road map to brain-disease dependent-inflammatory response. Frontiers in cellular neuroscience, 12, 488. https://www.frontiersin.org/articles/10.3389/fncel.2018.00488/full
Thyer, L., Ward, E., Smith, R., Fiore, M. G., Magherini, S., Branca, J. J., Morucci, G., Gulisano, M., Ruggiero, M., & Pacini, S. (2013). A novel role for a major component of the vitamin D axis: vitamin D binding protein-derived macrophage activating factor induces human breast cancer cell apoptosis through stimulation of macrophages. Nutrients, 5(7), 2577–2589. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3738989/
Kirikovich, S. S., Levites, E. V., Proskurina, A. S., Ritter, G. S., Peltek, S. E., Vasilieva, A. R., Ruzanova, V. S., Dolgova, E. V., Oshihmina, S. G., Sysoev, A. V., Koleno, D. I., Danilenko, E. D., Taranov, O. S., Ostanin, A. A., Chernykh, E. R., Kolchanov, N. A., & Bogachev, S. S. (2023). The Molecular Aspects of Functional Activity of Macrophage-Activating Factor GcMAF. International journal of molecular sciences, 24(24), 17396. https://pubmed.ncbi.nlm.nih.gov/38139225/
Dolgova, E. V., Kirikovich, S. S., Levites, E. V., Ruzanova, V. S., Proskurina, A. S., Ritter, G. S., Taranov, O. S., Varaksin, N. A., Ryabicheva, T. G., Leplina, O. Y., Ostanin, A. A., Chernykh, E. R., & Bogachev, S. S. (2022). Analysis of the Biological Properties of Blood Plasma Protein with GcMAF Functional Activity. International journal of molecular sciences, 23(15), 8075. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9330714/
Ruzanova, V. S., Kirikovich, S. S., Levites, E. V., Proskurina, A. S., Dolgova, E. V., Ritter, G. S., Efremov, Y. R., Dubatolova, T. D., Sysoev, A. V., Koleno, D. I., Ostanin, A. A., Chernykh, E. R., & Bogachev, S. S. (2024). The Macrophage Activator GcMAF-RF Enhances the Antitumor Effect of Karanahan Technology through Induction of M2-M1 Macrophage Reprogramming. Journal of immunology research, 2024, 7484490. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10919980/
Harrison, S. R., Li, D., Jeffery, L. E., Raza, K., & Hewison, M. (2020). Vitamin D, Autoimmune Disease and Rheumatoid Arthritis. Calcified tissue international, 106(1), 58–75. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6960236/
`
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

export const publications: Publication[] = rawPublicationLines.map((line) => {
  const urlMatch = line.match(/https?:\/\/\S+$/);
  const url = urlMatch?.[0];
  const citation = url ? line.slice(0, line.lastIndexOf(url)).trim() : line;
  const yearMatch = citation.match(/\((19|20)\d{2}\)/);
  const year = yearMatch
    ? Number.parseInt(yearMatch[0].replace(/[()]/g, ""), 10)
    : 0;

  return {
    citation,
    url,
    year,
    category: categorizePublication(citation),
  };
});
