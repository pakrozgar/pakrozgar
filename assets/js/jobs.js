/* ============================================================
   PakRozgar - Job listings data
   HOW TO ADD A NEW JOB (daily 1-3 posts):
   1. Copy one of the blocks below
   2. Paste it at the TOP of the JOBS array (right after the [ )
   3. Change id to the next number, update all fields
   4. Save this file and re-upload to your hosting. Done!
   Tip: use admin.html - fill the form and it writes this block for you.
   ============================================================ */

const JOBS = [
  {
    id: 11,
    title: "Suthra Punjab Jobs 2026 - 524 Sanitary Worker Vacancies Faisalabad",
    department: "Suthra Punjab Agency",
    category: "Government",
    subcategory: "Sanitary",
    city: "Faisalabad",
    province: "Punjab",
    qualification: "Able to read and write",
    experience: "Relevant work experience preferred",
    ageLimit: "Maximum 45 years",
    vacancies: "524",
    salary: "Daily wages (as per policy)",
    lastDate: "2026-10-28",
    postedDate: "2026-10-16",
    source: "Daily Pakistan",
    featured: false,
    shortDesc: "Suthra Punjab Agency Faisalabad needs 524 sanitary workers on daily wages. Walk-in interview on Oct 28, 2026. Must be physically fit, max age 45.",
    description: `<p>The <strong>Suthra Punjab Agency, Faisalabad</strong> has announced <strong>524 vacancies for sanitary workers</strong> under the Punjab government's cleanliness initiative. These are daily-wage positions.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Education:</strong> Must be able to read and write (no formal degree required)</li>
      <li><strong>Age:</strong> Maximum 45 years on the application date</li>
      <li><strong>Fitness:</strong> Physically fit for sanitary work</li>
      <li><strong>Experience:</strong> Relevant work experience preferred</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Attend the <strong>walk-in interview on 28 October 2026</strong></li>
      <li>Bring your CNIC and any experience certificates</li>
      <li>Check the official advertisement for the exact interview venue and time</li>
    </ol>`,
    howToApply: [
      "Walk-in interview on 28 October 2026",
      "Bring CNIC and experience documents",
      "No online application - appear in person"
    ]
  },
  {
    id: 10,
    title: "PPSC Intelligence Officer Jobs 2026 - 30 Posts in Special Branch (BS-14)",
    department: "Punjab Public Service Commission",
    category: "Government",
    subcategory: "Police",
    city: "Lahore",
    province: "Punjab",
    qualification: "As per PPSC Adv 11/2026 (Case 10-RH/2026)",
    experience: "As per advertisement",
    ageLimit: "As per PPSC rules (+5 years relaxation)",
    vacancies: "30",
    salary: "BS-14 (2-year contract)",
    lastDate: "2026-10-26",
    postedDate: "2026-10-16",
    source: "PPSC Advertisement No. 11/2026",
    officialLink: "https://www.ppsc.gop.pk",
    officialLinkLabel: "Apply Online at PPSC",
    featured: true,
    shortDesc: "PPSC announces 30 Intelligence Officer (BS-14) posts in Special Branch, Punjab Police. Punjab domicile holders apply online at ppsc.gop.pk by Oct 26.",
    description: `<p>The <strong>Punjab Public Service Commission (PPSC)</strong> has announced <strong>30 Intelligence Officer (BS-14)</strong> vacancies in the <strong>Special Branch, Punjab Police Department</strong> under Advertisement No. 11/2026 (Case No. 10-RH/2026).</p>
    <h3>Key Details</h3>
    <ul>
      <li><strong>Posts:</strong> 30 (Intelligence Officer, BS-14)</li>
      <li><strong>Department:</strong> Special Branch, Punjab Police</li>
      <li><strong>Contract:</strong> 2 years (extendable)</li>
      <li><strong>Domicile:</strong> Punjab required</li>
      <li><strong>Test:</strong> One MCQ paper (100 marks) - 80% general ability, 20% basic computer studies</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Read the full advertisement and instructions at ppsc.gop.pk</li>
      <li>Register/sign in and select Case No. 10-RH/2026</li>
      <li>Fill details exactly as per your documents</li>
      <li>Pay the fee online (JazzCash, Easypaisa, bank, ATM)</li>
      <li>Apply well before <strong>26 October 2026</strong></li>
    </ol>
    <p><strong>Warning:</strong> PPSC says only its own website is authentic - beware of anyone asking for money or documents.</p>`,
    howToApply: [
      "Apply online at ppsc.gop.pk (Case No. 10-RH/2026)",
      "Pay fee online via JazzCash/Easypaisa/bank",
      "Last date: 26 October 2026"
    ]
  },
  {
    id: 9,
    title: "PERA Jobs October 2026 - 110 Professional Vacancies (Apply Online)",
    department: "Punjab Enforcement and Regulatory Authority",
    category: "Government",
    subcategory: "Authority",
    city: "Lahore",
    province: "Punjab",
    qualification: "Master's / Bachelor's (post-wise)",
    experience: "Relevant professional experience required",
    ageLimit: "As per advertisement",
    vacancies: "110",
    salary: "Special PERA Pay Package (SPPP-2 to SPPP-5)",
    lastDate: "2026-10-29",
    postedDate: "2026-10-16",
    source: "ProPakistani / Official Advertisement",
    officialLink: "https://jobs.punjab.gov.pk",
    officialLinkLabel: "Apply Online at Punjab Job Portal",
    featured: true,
    shortDesc: "PERA hiring 110 professionals - AI/ML, full stack, HR, audit, data analysis - in Lahore and districts on 3-year contract. Apply via Punjab Job Portal by Oct 29.",
    description: `<p>The <strong>Punjab Enforcement and Regulatory Authority (PERA)</strong>, established under the Punjab Enforcement and Regulation Act 2024, is hiring <strong>110 professionals</strong> - 10 at its Directorate General in Lahore and 100 at District Enforcement & Regulatory Board secretariats across Punjab.</p>
    <h3>Positions Include</h3>
    <ul>
      <li>Head / Manager / Deputy Manager (Internal Affairs)</li>
      <li>Team Lead (AI & ML), Team Lead (Full Stack)</li>
      <li>Deputy Manager (HR), System Analyst, Data Analyst</li>
      <li>Assistant Manager (Audit), System Support Officer</li>
    </ul>
    <h3>Key Details</h3>
    <ul>
      <li><strong>Contract:</strong> Initial 3 years (extendable on performance)</li>
      <li><strong>Pay:</strong> Negotiable Special PERA Pay Package (SPPP-2 to SPPP-5)</li>
      <li><strong>Last date:</strong> 29 October 2026</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Apply online through the Punjab Job Portal</li>
      <li>Select your post and upload required documents</li>
      <li>Submit before the deadline - no manual applications</li>
    </ol>`,
    howToApply: [
      "Apply online via Punjab Job Portal",
      "Upload documents and select your post",
      "Last date: 29 October 2026"
    ]
  },
  {
    id: 8,
    title: "Punjab Police Constable Jobs 2026 - 1,170 Vacancies (Rahim Yar Khan & Rajanpur)",
    department: "Punjab Police Department",
    category: "Government",
    subcategory: "Police",
    city: "Rahim Yar Khan",
    province: "Punjab",
    qualification: "Matric (50% marks settled areas)",
    experience: "Fresh candidates can apply",
    ageLimit: "18 - 22 years (settled areas)",
    vacancies: "1,170",
    salary: "BS-07",
    lastDate: "2026-10-31",
    postedDate: "2026-10-16",
    source: "Punjab Police Official (punjabpolice.gov.pk)",
    officialLink: "https://www.punjabpolice.gov.pk",
    officialLinkLabel: "Punjab Police Official Website",
    featured: true,
    shortDesc: "Punjab Police hiring 1,170 constables, lady constables & driver constables in Rahim Yar Khan and Rajanpur. Submit form at District Police Lines by Oct 31 (Rs 300 fee).",
    description: `<p>The <strong>Punjab Police Department</strong> is recruiting <strong>1,170 Constables, Lady Constables and Driver Constables (BS-07)</strong> in <strong>Rahim Yar Khan and Rajanpur</strong> districts. Only domicile holders of these districts can apply.</p>
    <h3>Vacancy Breakdown</h3>
    <ul>
      <li><strong>Rahim Yar Khan:</strong> 718 Constables + 1 Driver Constable</li>
      <li><strong>Rajanpur (incl. tribal areas):</strong> 300 Constables + 1 Driver Constable</li>
      <li><strong>Tehsil Rojhan:</strong> 150 Constables</li>
      <li><strong>Quotas:</strong> 15% women, 10% ex-servicemen, 5% minorities</li>
    </ul>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Qualification:</strong> Matric (min 50% marks in settled areas)</li>
      <li><strong>Age:</strong> 18-22 years (settled); up to 25-30 in tribal/Rojhan areas - no relaxation</li>
      <li><strong>Height:</strong> 5'-7" (male), 5'-2" (female)</li>
      <li><strong>Chest:</strong> 33" x 34.5" (male only)</li>
      <li><strong>Running:</strong> 1.6 km in 7 min (male) / 10 min (female)</li>
      <li><strong>Driver Constable:</strong> Matric + valid LTV licence + 2 years driving experience, age 21-30</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Download the form from <strong>punjabpolice.gov.pk</strong></li>
      <li>Attach CNIC, domicile (RYK/Rajanpur), Matric result, 4 photos</li>
      <li>Pay Rs 300 form fee</li>
      <li>Submit at your <strong>District Police Lines between 12 and 31 October 2026</strong></li>
    </ol>
    <p><strong>Note:</strong> Candidates from other districts (Lahore, Multan etc.) are NOT eligible for this round.</p>`,
    howToApply: [
      "Download form from punjabpolice.gov.pk",
      "Submit at District Police Lines (RYK/Rajanpur) with Rs 300 fee",
      "Submission window: 12 - 31 October 2026",
      "Only RYK/Rajanpur domicile holders eligible"
    ]
  },
  {
    id: 7,
    title: "Bank Alfalah Cashier Jobs 2026 - Apply Online",
    department: "Bank Alfalah Limited",
    category: "Bank",
    subcategory: "Cashier",
    city: "Karachi",
    province: "Sindh",
    qualification: "Bachelor's Degree",
    experience: "Fresh graduates encouraged",
    ageLimit: "Maximum 26 years",
    vacancies: "120",
    salary: "PKR 60,000+ / month",
    lastDate: "2026-11-10",
    postedDate: "2026-10-16",
    source: "Bank Alfalah Careers",
    officialLink: "https://www.bankalfalah.com",
    officialLinkLabel: "Bank Alfalah Official Website",
    featured: true,
    shortDesc: "Bank Alfalah is hiring 120 cashiers/TBOs across Pakistan. Bachelor's degree holders apply online through the careers portal.",
    description: `<p><strong>Bank Alfalah Limited</strong>, one of Pakistan's leading commercial banks, is looking for energetic <strong>Cashiers / Teller Banking Officers (TBOs)</strong> for its branch network across Pakistan.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Qualification:</strong> Minimum Bachelor's degree from an HEC-recognized university</li>
      <li><strong>Age:</strong> Not more than 26 years</li>
      <li><strong>Skills:</strong> Cash handling, customer service orientation, basic computer literacy</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Go to the Bank Alfalah careers page</li>
      <li>Search for "Cashier / TBO 2026"</li>
      <li>Create your profile and submit the online application</li>
      <li>Shortlisted candidates will be called for test and panel interview</li>
    </ol>`,
    howToApply: [
      "Apply online at Bank Alfalah careers portal",
      "Search 'Cashier / TBO 2026' and submit your profile",
      "Last date to apply: 10 November 2026"
    ]
  },
  {
    id: 6,
    title: "FPSC Lecturer Jobs 2026 - 300+ Vacancies",
    department: "Federal Public Service Commission",
    category: "Government",
    subcategory: "Teaching",
    city: "Islamabad",
    province: "Federal",
    qualification: "Master's Degree",
    experience: "As per FPSC rules",
    ageLimit: "22 - 30 years (+5 relaxation)",
    vacancies: "300+",
    salary: "BPS-17",
    lastDate: "2026-11-20",
    postedDate: "2026-10-15",
    source: "FPSC Advertisement",
    officialLink: "https://www.fpsc.gop.pk",
    officialLinkLabel: "Apply Online at FPSC",
    featured: false,
    shortDesc: "FPSC announces 300+ Lecturer (BPS-17) posts in federal colleges. Master's degree holders apply online via fpsc.gov.pk.",
    description: `<p>The <strong>Federal Public Service Commission (FPSC)</strong> has advertised <strong>300+ Lecturer (BPS-17)</strong> vacancies in various subjects for federal government colleges.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Qualification:</strong> Master's degree (at least 2nd division) in the relevant subject</li>
      <li><strong>Age:</strong> 22-30 years plus 5 years general relaxation</li>
      <li>Both male and female candidates are eligible</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Apply online only at fpsc.gov.pk</li>
      <li>Deposit the test fee in the designated bank</li>
      <li>Appear in the MCQ screening test, then descriptive test and interview</li>
    </ol>`,
    howToApply: [
      "Apply online at fpsc.gov.pk before 20 November 2026",
      "Deposit test fee and keep the receipt",
      "Prepare for MCQ screening test"
    ]
  },
  {
    id: 5,
    title: "Pakistan Army Soldier Recruitment 2026",
    department: "Pakistan Army",
    category: "Government",
    subcategory: "Army",
    city: "Rawalpindi",
    province: "All Pakistan",
    qualification: "Matric / Middle",
    experience: "Fresh candidates",
    ageLimit: "17 - 23 years",
    vacancies: "Multiple",
    salary: "As per Army pay scales",
    lastDate: "2026-12-01",
    postedDate: "2026-10-15",
    source: "Express Newspaper",
    officialLink: "https://www.joinpakarmy.gov.pk",
    officialLinkLabel: "Join Pakistan Army - Apply Online",
    featured: false,
    shortDesc: "Join Pakistan Army as Soldier. Online registration open for Matric/Middle pass young men across Pakistan.",
    description: `<p><strong>Pakistan Army</strong> invites young, energetic men to join as <strong>Soldiers</strong>. Registration is open online and at Army Selection and Recruitment Centres (AS&RCs) nationwide.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Qualification:</strong> Middle / Matric</li>
      <li><strong>Age:</strong> 17 years 6 months to 23 years</li>
      <li><strong>Height:</strong> Minimum 5'-6"</li>
      <li>Unmarried candidates preferred</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Register online at joinpakarmy.gov.pk</li>
      <li>Or visit the nearest AS&RC with original documents</li>
      <li>Initial medical, physical and written tests at the centre</li>
    </ol>`,
    howToApply: [
      "Register online at joinpakarmy.gov.pk",
      "Or visit nearest Army Selection & Recruitment Centre",
      "Bring original CNIC/B-Form and educational certificates"
    ]
  },
  {
    id: 4,
    title: "Health Department Nurse Jobs 2026 Punjab",
    department: "Primary & Secondary Healthcare Department Punjab",
    category: "Government",
    subcategory: "Health",
    city: "Multan",
    province: "Punjab",
    qualification: "Nursing Diploma / BSc Nursing",
    experience: "Registered with PNC",
    ageLimit: "21 - 35 years",
    vacancies: "800",
    salary: "BPS-16",
    lastDate: "2026-11-25",
    postedDate: "2026-10-14",
    source: "Nawa-i-Waqt",
    featured: false,
    shortDesc: "800 Charge Nurse (BPS-16) vacancies in Punjab hospitals. PNC-registered nurses apply through NTS.",
    description: `<p>The <strong>Primary & Secondary Healthcare Department, Government of Punjab</strong> is recruiting <strong>800 Charge Nurses (BPS-16)</strong> for DHQ/THQ hospitals across the province.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li>BSc Nursing / 3-year Nursing Diploma + 1-year midwifery</li>
      <li>Valid registration with Pakistan Nursing Council</li>
      <li>Punjab domicile</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Apply through NTS (nts.org.pk)</li>
      <li>Download the application form and deposit the test fee</li>
      <li>Send the form to NTS headquarters before the closing date</li>
    </ol>`,
    howToApply: [
      "Apply via NTS website before 25 November 2026",
      "Attach PNC card, domicile and academic documents"
    ]
  },
  {
    id: 3,
    title: "WAPDA Lineman & Meter Reader Jobs 2026",
    department: "Water and Power Development Authority",
    category: "Government",
    subcategory: "WAPDA",
    city: "Faisalabad",
    province: "Punjab",
    qualification: "Matric + DAE (Electrical)",
    experience: "Relevant field preferred",
    ageLimit: "18 - 30 years",
    vacancies: "250",
    salary: "BPS-09 / BPS-11",
    lastDate: "2026-11-18",
    postedDate: "2026-10-14",
    source: "Dawn Newspaper",
    officialLink: "https://www.wapda.gov.pk",
    officialLinkLabel: "WAPDA Official Website",
    featured: false,
    shortDesc: "WAPDA announces Lineman and Meter Reader vacancies. Matric + DAE Electrical candidates apply.",
    description: `<p><strong>WAPDA</strong> requires <strong>Linemen (BPS-09)</strong> and <strong>Meter Readers (BPS-11)</strong> for distribution companies in Punjab.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li>Matric with DAE (Electrical) for Lineman</li>
      <li>Intermediate for Meter Reader</li>
      <li>Age 18-30 years with relaxation as per rules</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Download the form from the WAPDA website</li>
      <li>Send it with attested documents to the given address</li>
    </ol>`,
    howToApply: [
      "Send application to WAPDA HR before 18 November 2026",
      "Mention the post name on the envelope"
    ]
  },
  {
    id: 2,
    title: "Software House Hiring Web Developers - Lahore",
    department: "Private Software House",
    category: "Private",
    subcategory: "IT",
    city: "Lahore",
    province: "Punjab",
    qualification: "BS Computer Science or equivalent skills",
    experience: "1-3 years",
    ageLimit: "No limit",
    vacancies: "15",
    salary: "PKR 120,000 - 200,000 / month",
    lastDate: "2026-11-05",
    postedDate: "2026-10-13",
    source: "Rozee.pk",
    featured: false,
    shortDesc: "Lahore software house hiring React/Node.js developers. Remote-friendly, market-competitive salary.",
    description: `<p>A fast-growing <strong>software house in Gulberg, Lahore</strong> is hiring <strong>Web Developers (React.js / Node.js)</strong>.</p>
    <h3>Requirements</h3>
    <ul>
      <li>1-3 years experience with React.js and Node.js</li>
      <li>Strong grip on REST APIs, Git and databases</li>
      <li>BS CS or equivalent practical skills</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Email your CV and portfolio/GitHub link</li>
      <li>Shortlisted candidates get a technical task + interview</li>
    </ol>`,
    howToApply: [
      "Email CV + portfolio before 5 November 2026",
      "Mention 'Web Developer' in the subject line"
    ]
  },
  {
    id: 1,
    title: "Primary School Teacher Jobs 2026 - Educators Recruitment",
    department: "School Education Department Punjab",
    category: "Government",
    subcategory: "Teaching",
    city: "Sialkot",
    province: "Punjab",
    qualification: "BA/BSc + B.Ed",
    experience: "Fresh candidates can apply",
    ageLimit: "20 - 35 years",
    vacancies: "1,200",
    salary: "BPS-14",
    lastDate: "2026-11-30",
    postedDate: "2026-10-13",
    source: "Jang Newspaper",
    featured: false,
    shortDesc: "1,200 Educator (BPS-14) posts in Punjab schools. BA/BSc + B.Ed holders apply district-wise.",
    description: `<p>The <strong>School Education Department, Punjab</strong> is recruiting <strong>1,200 Educators (BPS-14)</strong> for primary schools across the province.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li>BA/BSc (2nd division) + B.Ed</li>
      <li>Age 20-35 years</li>
      <li>District domicile required</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Apply on the School Education Department portal</li>
      <li>Merit lists will be displayed district-wise</li>
    </ol>`,
    howToApply: [
      "Apply online before 30 November 2026",
      "Keep domicile and B.Ed documents ready"
    ]
  }
];
