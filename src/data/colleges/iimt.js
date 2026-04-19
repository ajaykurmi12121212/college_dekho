const iimt = {
  id: "iimt-university",
  name: "IIMT University",
  shortName: "IIMT University (IIMT)",
  code: "IIMT",
  location: "Meerut, UP",
  type: "Private",
  established: 2016,
  campusSize: "40 Acres",
  rating: 3.8,
  totalReviews: 220,
  nirf: "Not Ranked",
  naac: "A",
  affiliation: "University Grants Commission (UGC)",
  approval: "UGC, AICTE, BCI, PCI, NCTE, INC",
  colors: { primary: "#880e4f", accent: "#ffb300" },

  news: [
    "IIMT University admissions 2026 open for B.Tech, MBBS, MBA, BCA, BBA, Nursing and 80+ programs.",
    "IIMT University receives NAAC A accreditation in 2025.",
    "IIMT University 2025 placements — 82%+ placement rate with 250+ recruiting companies.",
    "IIMT University has own 300-bed teaching hospital for medical and nursing students.",
    "Highest package of Rs.18 LPA recorded in IIMT University 2025 placement drive.",
  ],

  stories: [
    { title: "Own 300-bed hospital — practical clinical training for medical students", emoji: "🏥" },
    { title: "NAAC A accredited | Programs in Medical, Engineering, Law, Pharmacy", emoji: "⭐" },
    { title: "82%+ placement rate with 250+ companies visiting campus in 2025", emoji: "🏆" },
    { title: "One of the most affordable multi-discipline universities near NCR", emoji: "💰" },
  ],

  about: "IIMT University, Meerut, established in 2016, is a UGC-recognized private university offering programs in Engineering, Medical Sciences, Management, Law, Pharmacy, Nursing and Education. Accredited with NAAC A, IIMT is known for its own 300-bed teaching hospital, affordable fees and comprehensive academic programs. Located in Meerut near Delhi NCR, it serves students from Western UP and NCR.",

  aboutPoints: [
    "NAAC A accreditation | UGC, AICTE, BCI, PCI, NCTE, INC approved.",
    "Own 300-bed IIMT Hospital for clinical training of medical and nursing students.",
    "82%+ placement rate | 250+ recruiting companies | Highest package Rs.18 LPA (2025).",
    "40-acre campus in Meerut — well connected to Delhi, Noida, Ghaziabad via NH-58.",
    "One of most affordable multi-discipline private universities near Delhi NCR.",
  ],

  highlights: [
    ["Established", "2016"],
    ["Exam Accepted", "JEE Main, CUET, NEET, CAT, MAT, CLAT"],
    ["Total Courses", "80+ UG/PG/PhD programs across 10+ schools"],
    ["Institute Type", "Private University"],
    ["Affiliation", "University Grants Commission (UGC)"],
    ["Approval", "UGC, AICTE, BCI, PCI, NCTE, INC"],
    ["Accreditation", "NAAC A"],
    ["Campus Size", "40 Acres"],
    ["Teaching Hospital", "300-bed IIMT Hospital on campus"],
    ["Highest Package (2025)", "Rs.18 LPA"],
    ["Placement Rate", "82%+"],
    ["Location", "O Pocket, Ganganagar, Meerut, Uttar Pradesh 250001"],
  ],

  rankings: [
    { cat: "NAAC Accreditation", rank: "A" },
    { cat: "Top Meerut Universities", rank: "#1 Private" },
    { cat: "India Today Rankings", rank: "Listed" },
  ],

  faqs: [
    {
      q: "Does IIMT University have a medical college?",
      a: "Yes, IIMT University has its own medical college — IIMT Medical College, Hospital & Research Centre — with a 300-bed teaching hospital. MBBS admissions are through NEET UG score. It also offers BDS, BAMS, B.Sc Nursing and allied health programs.",
    },
    {
      q: "What is the admission process for B.Tech at IIMT University?",
      a: "B.Tech admissions are based on JEE Main or CUET score. Direct merit-based admission is also available. Candidates need 45% in 10+2 with PCM. The university also accepts Lateral Entry for diploma holders in 2nd year.",
    },
    {
      q: "How is IIMT University for placements?",
      a: "IIMT University achieves 82%+ placement rate with 250+ companies. The average package is Rs.3.5 LPA for engineering students. Top recruiters include TCS, Wipro, Infosys, HCL and NCR-based companies. Medical students are placed in hospitals across UP and NCR.",
    },
    {
      q: "What is the fee for MBBS at IIMT University?",
      a: "MBBS fees at IIMT Medical College are approximately Rs.12-14 Lakh per year. Total MBBS cost is around Rs.65-75 Lakh for 5.5 years including hostel. Admission is through NEET UG and UP state counselling.",
    },
  ],

  courses: [
    { name: "B.Tech Computer Science & Engineering", mode: "Full Time", seats: "-", fees: "Rs.3.0 L", exam: "JEE Main / CUET / Merit", duration: "4 Years" },
    { name: "B.Tech CSE (AI & ML)", mode: "Full Time", seats: "-", fees: "Rs.3.0 L", exam: "JEE Main / CUET / Merit", duration: "4 Years" },
    { name: "B.Tech Electronics & Communication", mode: "Full Time", seats: "-", fees: "Rs.2.8 L", exam: "JEE Main / CUET / Merit", duration: "4 Years" },
    { name: "MBBS", mode: "Full Time", seats: "100", fees: "Rs.70 L", exam: "NEET UG", duration: "5.5 Years" },
    { name: "B.Sc Nursing", mode: "Full Time", seats: "60", fees: "Rs.4.0 L", exam: "NEET / Merit", duration: "4 Years" },
    { name: "MBA (Master of Business Admin)", mode: "Full Time", seats: "-", fees: "Rs.2.0 L", exam: "CAT / MAT / CMAT / Merit", duration: "2 Years" },
    { name: "BCA (Bachelor of Computer App)", mode: "Full Time", seats: "-", fees: "Rs.1.8 L", exam: "CUET / Merit", duration: "3 Years" },
    { name: "BBA (Bachelor of Business Admin)", mode: "Full Time", seats: "-", fees: "Rs.1.8 L", exam: "CUET / Merit", duration: "3 Years" },
    { name: "BA LLB (Hons.)", mode: "Full Time", seats: "-", fees: "Rs.2.5 L", exam: "CLAT / Merit", duration: "5 Years" },
    { name: "B.Pharm (Bachelor of Pharmacy)", mode: "Full Time", seats: "-", fees: "Rs.2.5 L", exam: "CUET / Merit", duration: "4 Years" },
  ],

  fees: [
    { prog: "B.Tech (CSE/AI)", tuition: "~Rs.75,000/yr", hostel: "~Rs.65,000/yr", total: "Rs.3.0 L (4 yrs)", exam: "JEE Main, CUET" },
    { prog: "B.Tech (ECE/Mech)", tuition: "~Rs.70,000/yr", hostel: "~Rs.65,000/yr", total: "Rs.2.8 L (4 yrs)", exam: "JEE Main, CUET" },
    { prog: "MBBS", tuition: "~Rs.12 Lakh/yr", hostel: "~Rs.80,000/yr", total: "Rs.70 L (5.5 yrs)", exam: "NEET UG" },
    { prog: "B.Sc Nursing", tuition: "~Rs.1.0 Lakh/yr", hostel: "~Rs.65,000/yr", total: "Rs.4.0 L (4 yrs)", exam: "NEET / Merit" },
    { prog: "MBA", tuition: "~Rs.1.0 Lakh/yr", hostel: "~Rs.65,000/yr", total: "Rs.2.0 L (2 yrs)", exam: "CAT, MAT, CMAT" },
  ],

  scholarships: [
    { name: "Merit Scholarship", eligibility: "85%+ in Class 12", amount: "Up to 25% tuition waiver" },
    { name: "NEET / JEE Scholarship", eligibility: "NEET/JEE qualified students", amount: "Up to 50% waiver" },
    { name: "EWS Scholarship", eligibility: "Family income < Rs.3 LPA", amount: "Special waiver" },
    { name: "Sports Scholarship", eligibility: "State/National level athletes", amount: "Up to 100% waiver" },
    { name: "Single Parent Scholarship", eligibility: "Single parent family", amount: "Special concession" },
  ],

  cutoffs: [
    { course: "B.Tech Computer Science & Engineering", gen: "No strict cutoff — Merit / Direct" },
    { course: "MBBS", gen: "500+ marks in NEET UG (tentative)" },
    { course: "B.Sc Nursing", gen: "NEET qualified / Merit" },
    { course: "MBA", gen: "No strict cutoff — Merit / Direct" },
  ],

  admissions: [
    { prog: "B.Tech", eligibility: "10+2 with 45% in PCM", exam: "JEE Main / CUET / Merit", counselling: "Direct / IIMT Portal", seats: "-" },
    { prog: "MBBS", eligibility: "10+2 with 50% PCB + NEET qualified", exam: "NEET UG", counselling: "UP State Counselling / IIMT", seats: "100" },
    { prog: "MBA", eligibility: "Graduation with 45%", exam: "CAT / MAT / CMAT / Merit", counselling: "Direct", seats: "-" },
    { prog: "BCA / BBA", eligibility: "10+2 with 45%", exam: "CUET / Merit", counselling: "Direct", seats: "-" },
    { prog: "BA LLB", eligibility: "10+2 with 45%", exam: "CLAT / Merit", counselling: "Direct", seats: "-" },
  ],

  admissionDates: [
    ["B.Tech Application (2026)", "Open Now — iimtuniversity.ac.in"],
    ["NEET UG 2026 Exam", "May 4, 2026"],
    ["JEE Main 2026 Session 2 Result", "April 20, 2026"],
    ["CUET UG 2026 Exam", "May 11 - 31, 2026"],
    ["MBA Admissions", "Rolling basis — Apply anytime"],
  ],

  placements: {
    highest: "Rs.18 LPA",
    average: "Rs.3.5 LPA",
    medianUG: "Rs.3.0 LPA",
    percentage: "82%+",
    companies: "250+",
    totalOffers: "600+",
    ugPlaced: "600+",
    topRecruiters: ["TCS", "Wipro", "Infosys", "HCL", "Cognizant", "Tech Mahindra", "Capgemini", "Concentrix", "Genpact", "EXL Service", "WNS", "Hexaware", "HDFC Bank", "ICICI Bank"],
    btechWise: [
      { course: "Computer Science & Engineering", avg: "Rs.4 LPA", median: "Rs.3.2 LPA" },
      { course: "CSE (AI & ML)", avg: "Rs.4.5 LPA", median: "Rs.3.5 LPA" },
      { course: "Electronics & Communication", avg: "Rs.3.2 LPA", median: "Rs.2.8 LPA" },
      { course: "Mechanical Engineering", avg: "Rs.3.0 LPA", median: "Rs.2.5 LPA" },
    ],
  },

  reviews: {
    overall: 3.8,
    total: 220,
    breakdown: [
      { label: "College Infrastructure", val: 3.7 },
      { label: "Academics", val: 3.8 },
      { label: "Placements", val: 3.8 },
      { label: "Value for Money", val: 4.4 },
      { label: "Campus Life", val: 3.6 },
    ],
    list: [
      { name: "Pankaj Sharma", batch: "2025", course: "B.Tech CSE", rating: 4, text: "IIMT is an excellent choice if you want quality education at very low fees near NCR. Got placed in HCL at 3.6 LPA. The UGC recognition and NAAC A grade ensure degree credibility. Best value-for-money engineering college near Delhi." },
      { name: "Anjali Singh", batch: "2024", course: "B.Sc Nursing", rating: 4, text: "IIMT Nursing is great because of the attached 300-bed hospital. Real patient interaction from 1st year itself. Faculty is experienced nurses and doctors. Placements are in UP and Delhi NCR hospitals. Very affordable fees." },
      { name: "Sanjay Kumar", batch: "2023", course: "MBBS", rating: 3, text: "IIMT Medical College is decent for MBBS. Hospital has 300 beds with good clinical exposure. Faculty is qualified but could be more research-oriented. For private MBBS near Delhi at these fees, it is a reasonable option." },
    ],
  },

  facilities: [
    { name: "Academic Blocks", desc: "Labs and classrooms for Engineering, Medical, Management and other departments" },
    { name: "IIMT Hospital", desc: "300-bed multi-speciality teaching hospital for medical and nursing clinical training" },
    { name: "Hostel", desc: "Separate hostels for boys and girls with mess facility" },
    { name: "Placement Cell", desc: "T&P Cell with 250+ corporate tie-ups for campus recruitment" },
    { name: "Sports Facilities", desc: "Cricket, football, volleyball, basketball and indoor games" },
    { name: "Library", desc: "Central library with medical, engineering and management books and journals" },
    { name: "Cafeteria", desc: "Affordable canteen with hygienic food on campus" },
    { name: "Medical Centre", desc: "On-campus hospital itself provides medical support to students" },
    { name: "Transport", desc: "Bus service from Meerut city and nearby areas" },
    { name: "Wi-Fi Campus", desc: "Internet connectivity across the campus" },
  ],

  clubs: [
    { name: "IIMT Tech Club", role: "Coding & Technology", emoji: "💻" },
    { name: "Medical Society", role: "Healthcare & Medical Events", emoji: "🏥" },
    { name: "E-Cell IIMT", role: "Entrepreneurship", emoji: "🚀" },
    { name: "Cultural Club", role: "Cultural Events & Festivals", emoji: "🎭" },
    { name: "Sports Council", role: "Sports & Athletics", emoji: "⚽" },
    { name: "NSS IIMT", role: "Social Service & Health Camps", emoji: "🤝" },
  ],
};

export default iimt;
