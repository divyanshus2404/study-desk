const medicalData = {
  sections: [
    {
      id: "sec1",
      title: "Human Anatomy",
      subsections: [
        {
          title: "General Anatomy",
          topics: ["Anatomical Positions", "Planes & Axes", "Body Cavities", "Tissues", "Cell Structure", "Bones", "Cartilage", "Joints", "Muscles", "Blood Supply", "Nerves"]
        },
        {
          title: "Gross Anatomy",
          topics: ["Upper Limb", "Lower Limb", "Thorax", "Abdomen", "Pelvis", "Head & Neck", "Brain", "Spinal Cord"]
        },
        {
          title: "Histology",
          topics: ["Epithelium", "Connective Tissue", "Bone", "Cartilage", "Muscle", "Blood", "Nervous Tissue", "Histology Slides"]
        },
        {
          title: "Embryology",
          topics: ["Fertilization", "Implantation", "Gastrulation", "Organogenesis", "Congenital Anomalies"]
        }
      ]
    },
    {
      id: "sec2",
      title: "Physiology",
      subsections: [
        {
          title: "Cell Physiology",
          topics: ["Cell Membrane", "Action Potential"]
        },
        {
          title: "Blood",
          topics: ["RBC", "WBC", "Hemoglobin", "Anemia", "Blood Groups", "Coagulation"]
        },
        {
          title: "Cardiovascular System",
          topics: ["Cardiac Cycle", "ECG", "Blood Pressure", "Cardiac Output", "Heart Sounds"]
        },
        {
          title: "Respiratory System",
          topics: ["Lung Volumes", "Gas Exchange", "Oxygen Transport", "Acid Base Balance"]
        },
        {
          title: "Gastrointestinal System",
          topics: []
        },
        {
          title: "Renal Physiology",
          topics: []
        },
        {
          title: "Endocrinology",
          topics: []
        },
        {
          title: "Reproductive Physiology",
          topics: []
        },
        {
          title: "Neurophysiology",
          topics: []
        },
        {
          title: "Special Senses",
          topics: []
        }
      ]
    },
    { id: "sec3", title: "Biochemistry", subsections: [] },
    { id: "sec4", title: "Pathology", subsections: [] },
    { id: "sec5", title: "Pharmacology", subsections: [] },
    { id: "sec6", title: "Microbiology", subsections: [] },
    { id: "sec7", title: "Forensic Medicine", subsections: [] },
    { id: "sec8", title: "Community Medicine (PSM)", subsections: [] },
    { id: "sec9", title: "Medicine", subsections: [
      {
        title: "Cardiovascular",
        topics: ["Hypertension", "Heart Failure", "MI"]
      },
      {
        title: "Respiratory",
        topics: ["Asthma", "COPD", "Tuberculosis", "Pneumonia"]
      },
      {
        title: "Endocrine",
        topics: ["Diabetes", "Thyroid Disorders"]
      },
      {
        title: "Infectious",
        topics: ["Sepsis", "Dengue", "Malaria", "HIV", "Hepatitis", "COVID"]
      },
      {
        title: "Neurology",
        topics: ["Stroke"]
      },
      {
        title: "Nephrology",
        topics: ["CKD"]
      },
      {
        title: "Gastroenterology",
        topics: ["Liver Cirrhosis"]
      },
      {
        title: "Rheumatology",
        topics: ["Rheumatoid Arthritis", "Lupus"]
      }
    ] },
    { id: "sec10", title: "Surgery", subsections: [] },
    { id: "sec11", title: "Obstetrics", subsections: [] },
    { id: "sec12", title: "Gynecology", subsections: [] },
    { id: "sec13", title: "Pediatrics", subsections: [] },
    { id: "sec14", title: "Dermatology", subsections: [] },
    { id: "sec15", title: "Psychiatry", subsections: [] },
    { id: "sec16", title: "Radiology", subsections: [] },
    { id: "sec17", title: "Emergency Medicine", subsections: [] },
    { id: "sec18", title: "Clinical Examination", subsections: [] },
    { id: "sec19", title: "Laboratory Values", subsections: [] },
    { id: "sec20", title: "Medical Procedures", subsections: [] },
    { id: "sec21", title: "Differential Diagnosis", subsections: [] },
    { id: "sec22", title: "Drug Handbook", subsections: [
      {
        title: "Analgesics",
        topics: ["Paracetamol"]
      }
    ] },
    { id: "sec23", title: "Medical Calculators", subsections: [] },
    { id: "sec24", title: "Medical Mnemonics", subsections: [] },
    { id: "sec25", title: "High-Yield NEET & MBBS Revision", subsections: [] },
    { id: "sec26", title: "Clinical Cases", subsections: [] },
    { id: "sec27", title: "Image Atlas", subsections: [] },
    { id: "sec28", title: "Medical Dictionary", subsections: [] },
    { id: "sec29", title: "Medical AI Assistant", subsections: [] },
    { id: "sec30", title: "Exam Preparation", subsections: [] }
  ],
  content: {
    "Asthma": {
      type: "disease",
      overview: "Asthma is a chronic inflammatory disorder of the airways characterized by reversible airflow obstruction and bronchospasm.",
      anatomy: "Involves the tracheobronchial tree. Smooth muscle hypertrophy, mucosal edema, and mucus plugging occur in the small airways (bronchioles).",
      etiology: "Multifactorial. Triggers include allergens (pollen, dust mites, pet dander), respiratory infections (viral), cold air, exercise, smoke, and stress. Genetic predisposition (atopy) plays a major role.",
      pathophysiology: "Type I hypersensitivity reaction involving IgE antibodies. Mast cell degranulation releases histamine, leukotrienes, and prostaglandins leading to bronchoconstriction, airway edema, and mucus hypersecretion.",
      classification: "Intermittent, Mild Persistent, Moderate Persistent, and Severe Persistent (based on symptom frequency, nighttime awakenings, and lung function).",
      clinical_features: "Classic triad: Wheezing, Cough (often nocturnal or early morning), and Shortness of breath (dyspnea). Chest tightness.",
      differential_diagnosis: "COPD, Congestive Heart Failure (cardiac asthma), GERD, vocal cord dysfunction, pulmonary embolism.",
      investigations: "Spirometry (FEV1/FVC < 70%, with reversibility >12% and 200mL after bronchodilator), Peak Expiratory Flow Rate (PEFR), Allergy testing (IgE levels, skin prick test).",
      diagnostic_criteria: "History of episodic symptoms + demonstrated reversible airflow obstruction on spirometry.",
      management: "Relievers: SABA (Albuterol) PRN. Controllers: ICS (Inhaled Corticosteroids like Fluticasone), LABA (Formoterol - never as monotherapy in asthma), LTRAs (Montelukast). Severe cases: Omalizumab (anti-IgE) or oral corticosteroids.",
      complications: "Status asthmaticus (life-threatening acute exacerbation), airway remodeling (permanent structural changes leading to fixed obstruction), respiratory failure.",
      prognosis: "Generally good with proper adherence to inhaler therapy. Poorly controlled asthma can lead to irreversible lung damage.",
      prevention: "Avoidance of known triggers, annual influenza and pneumococcal vaccination, medication adherence.",
      clinical_pearls: "A 'silent chest' in an acute asthma attack is an ominous sign indicating severe bronchospasm and impending respiratory failure.",
      mnemonics: "ASTHMA triggers: Allergens, Sport/Smoke, Temperature changes, Hazards (occupational), Microbes (viral infections), Anxiety.",
      high_yield: "Samter's Triad (Aspirin-exacerbated respiratory disease): Asthma, Nasal polyps, Aspirin sensitivity. Avoid NSAIDs in these patients.",
      viva: "Q: Why are beta-blockers contraindicated in asthma? A: Non-selective beta-blockers block Beta-2 receptors in the lungs, causing severe bronchoconstriction.",
      mcqs: [
        { q: "Which of the following is the most effective long-term control medication for asthma?", a: "Inhaled corticosteroids" },
        { q: "A 25-year-old presents with wheezing after taking aspirin. What other condition is likely present?", a: "Nasal polyps" }
      ]
    },
    "Diabetes": {
      type: "disease",
      overview: "Diabetes Mellitus is a metabolic disorder characterized by chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both.",
      anatomy: "Involves the Endocrine pancreas (Islets of Langerhans). Beta cells secrete insulin. Alpha cells secrete glucagon.",
      etiology: "Type 1: Autoimmune destruction of beta cells (absolute insulin deficiency). Type 2: Peripheral insulin resistance and relative insulin deficiency (associated with obesity, genetics).",
      pathophysiology: "Lack of insulin leads to decreased glucose uptake by muscle and adipose tissue, increased hepatic gluconeogenesis, and increased lipolysis (ketogenesis in T1DM).",
      classification: "Type 1 DM, Type 2 DM, Gestational DM, MODY (Maturity Onset Diabetes of the Young).",
      clinical_features: "Polyuria, Polydipsia, Polyphagia. Weight loss (especially Type 1). Fatigue, blurred vision, poor wound healing.",
      diagnostic_criteria: "Fasting Plasma Glucose ≥ 126 mg/dL OR 2-hr OGTT ≥ 200 mg/dL OR HbA1c ≥ 6.5% OR Random Glucose ≥ 200 mg/dL with symptoms.",
      management: "Type 1: Lifelong insulin therapy. Type 2: Lifestyle changes (diet, exercise) + Metformin. Add sulfonylureas, DPP-4 inhibitors, SGLT2 inhibitors, or insulin if HbA1c not at target.",
      complications: "Microvascular: Retinopathy, Nephropathy, Neuropathy. Macrovascular: CAD, Stroke, Peripheral Artery Disease. Acute: DKA (Type 1), HHS (Type 2).",
      high_yield: "Metformin causes lactic acidosis and B12 deficiency. SGLT2 inhibitors (-gliflozins) increase risk of UTI/yeast infections but offer cardiovascular and renal protection."
    },
    "Hypertension": {
      type: "disease",
      overview: "Hypertension (HTN), commonly known as high blood pressure, is a long-term medical condition in which the blood pressure in the arteries is persistently elevated.",
      anatomy: "Involves the cardiovascular system, primarily the heart (which pumps against increased resistance) and the arterial blood vessels (which may undergo remodeling). Key regulatory systems include the Renin-Angiotensin-Aldosterone System (RAAS) and the sympathetic nervous system.",
      etiology: "Primary (Essential) HTN (90-95%): No specific identifiable medical cause; multifactorial (genetics, diet, lifestyle). Secondary HTN (5-10%): Caused by an underlying condition like renal artery stenosis, primary aldosteronism, pheochromocytoma, or OSA.",
      pathophysiology: "Increased systemic vascular resistance (SVR) and/or increased cardiac output (CO). Factors include endothelial dysfunction, vascular remodeling, increased sympathetic activity, and abnormal renal sodium retention.",
      classification: "AHA/ACC 2017 Guidelines: Normal (<120 / <80), Elevated (120-129 / <80), Stage 1 (130-139 / 80-89), Stage 2 (≥140 / ≥90). Hypertensive Crisis (≥180 / ≥120).",
      clinical_features: "Often asymptomatic ('silent killer'). May present with headaches, shortness of breath, epistaxis, or dizziness in severe cases.",
      differential_diagnosis: "White coat hypertension, masked hypertension, secondary causes (e.g., hyperthyroidism, coarctation of the aorta).",
      investigations: "ECG (to check for LVH), Urinalysis (proteinuria), Fasting blood glucose, Lipid profile, Serum creatinine/eGFR, Serum potassium.",
      diagnostic_criteria: "Based on an average of ≥2 careful readings obtained on ≥2 occasions.",
      management: "Lifestyle: DASH diet, weight loss, aerobic exercise, reduced sodium intake. Medical: ACE inhibitors (Lisinopril), ARBs (Losartan), Calcium Channel Blockers (Amlodipine), Thiazide diuretics (Hydrochlorothiazide).",
      complications: "Left ventricular hypertrophy (LVH), heart failure, ischemic stroke, intracerebral hemorrhage, chronic kidney disease (CKD), hypertensive retinopathy.",
      prognosis: "Excellent with strict blood pressure control, but high morbidity/mortality if left untreated due to cardiovascular events.",
      prevention: "Maintaining a healthy BMI, smoking cessation, regular physical activity, managing stress.",
      clinical_pearls: "Never diagnose hypertension based on a single reading unless presenting in hypertensive crisis.",
      mnemonics: "Causes of secondary HTN: 'CHAPS' (Cushing's, Hyperaldosteronism, Aortic coarctation, Pheochromocytoma, Stenosis of renal arteries).",
      flowcharts: "Diagnosis -> Lifestyle modifications -> Initiate monotherapy (Stage 1) or dual therapy (Stage 2) -> Titrate every month.",
      high_yield: "Thiazides can cause hypercalcemia, hyperuricemia. ACE inhibitors are renoprotective but can cause a dry cough and hyperkalemia.",
      viva: "Q: What is the mechanism of action of ACE inhibitors? A: They inhibit the conversion of Angiotensin I to Angiotensin II, causing vasodilation and decreased aldosterone secretion.",
      mcqs: [
        { q: "Which of the following antihypertensives is absolutely contraindicated in pregnancy?", a: "ACE inhibitors" },
        { q: "The most common cause of secondary hypertension is?", a: "Renal parenchymal disease" }
      ],
      references: "Harrison's Principles of Internal Medicine, 21st Edition."
    },
    "Paracetamol": {
      type: "drug",
      generic_name: "Paracetamol (Acetaminophen)",
      brand_names: "Tylenol, Panadol, Calpol, Crocin",
      mechanism: "Reversibly inhibits cyclooxygenase (COX) enzymes in the CNS (primarily COX-3). Thought to inhibit prostaglandin synthesis primarily in the central nervous system, leading to antipyretic and analgesic effects, with minimal anti-inflammatory peripheral effects.",
      dose: "Adults: 500-1000 mg every 4-6 hours (Max 4g/day). Pediatric: 10-15 mg/kg every 4-6 hours.",
      contraindications: "Severe hepatic impairment, known hypersensitivity.",
      pregnancy: "Category B (Generally considered safe).",
      renal_dose: "Increase dosing interval in severe renal impairment (CrCl < 10 mL/min).",
      hepatic_dose: "Use with caution; reduce maximum daily dose in chronic liver disease.",
      side_effects: "Generally well tolerated. Rare: hepatotoxicity (in overdose), rash, blood dyscrasias.",
      monitoring: "Liver function tests if long-term use or suspected overdose.",
      interactions: "Warfarin (may increase INR with prolonged use), alcohol (increases risk of hepatotoxicity), enzyme inducers like phenytoin/carbamazepine (increase risk of toxic metabolites).",
      clinical_pearls: "The toxic metabolite is NAPQI. Antidote for overdose is N-acetylcysteine (NAC).",
      high_yield: "NAPQI depletes hepatic glutathione leading to cell necrosis."
    }
  }
};
