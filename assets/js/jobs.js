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
    id: 8,
    title: "Punjab Police Constable Recruitment 2026",
    department: "Punjab Police Department",
    category: "Government",
    subcategory: "Police",
    city: "Lahore",
    province: "Punjab",
    qualification: "Matric",
    experience: "Fresh candidates can apply",
    ageLimit: "18 - 22 years",
    vacancies: "4,500+",
    salary: "PKR 45,000 - 55,000 / month",
    lastDate: "2026-11-15",
    postedDate: "2026-10-16",
    source: "Jang Newspaper",
    featured: true,
    shortDesc: "Punjab Police has announced 4,500+ constable vacancies for males and females across Punjab. Matric pass candidates apply online before the last date.",
    description: `<p>The <strong>Punjab Police Department</strong> has officially announced a massive recruitment drive for <strong>Constables (BPS-07)</strong> in 2026. Both male and female candidates from all districts of Punjab are eligible to apply.</p>
    <h3>Eligibility Criteria</h3>
    <ul>
      <li><strong>Qualification:</strong> Minimum Matric (2nd division) from a recognized board</li>
      <li><strong>Age:</strong> 18 to 22 years on the closing date</li>
      <li><strong>Height:</strong> 5'-7" (male), 5'-2" (female)</li>
      <li><strong>Chest:</strong> 33" x 34.5" (male only)</li>
      <li><strong>Running:</strong> 1.6 km in 7 minutes (male), 10 minutes (female)</li>
      <li><strong>Domicile:</strong> Punjab province</li>
    </ul>
    <h3>How to Apply</h3>
    <ol>
      <li>Visit the official Punjab Police recruitment portal</li>
      <li>Fill the online application form with correct personal and academic details</li>
      <li>Upload CNIC, domicile, and educational certificates</li>
      <li>Download the roll number slip for the physical test</li>
      <li>Appear in running test, measurements, written test and interview</li>
    </ol>
    <p><strong>Note:</strong> No TA/DA will be given for tests. Applications received after the last date will not be entertained.</p>`,
    howToApply: [
      "Apply online through the Punjab Police recruitment portal",
      "Fill the form and upload CNIC, domicile and Matric certificate",
      "Download roll number slip for physical/written test",
      "Last date to apply: 15 November 2026"
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
