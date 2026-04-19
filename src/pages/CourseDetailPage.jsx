import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ── COURSE DATABASE ──
const COURSES_DB = {
  "btech-cse": {
    id: "btech-cse",
    name: "B.Tech Computer Science & Engineering",
    shortName: "B.Tech CSE",
    stream: "Engineering",
    level: "UG",
    duration: "4 Years",
    fees: "2-16 L",
    avgSalary: "8-12 LPA",
    highestSalary: "45 LPA",
    exam: "JEE Main / CUET",
    seats: "2000+",
    mode: "Full Time",
    color: "#1a73e8",
    emoji: "💻",

    about: "B.Tech in Computer Science & Engineering (CSE) is one of the most sought-after undergraduate engineering programs in India. The 4-year program covers computer programming, data structures, algorithms, operating systems, databases, networking, and emerging technologies like AI, ML, and Cloud Computing. Graduates are in high demand across IT, finance, consulting, and product companies.",

    highlights: [
      ["Duration", "4 Years (8 Semesters)"],
      ["Level", "Undergraduate (UG)"],
      ["Mode", "Full Time"],
      ["Eligibility", "10+2 with PCM, min 60%"],
      ["Entrance Exam", "JEE Main / CUET / SAT"],
      ["Average Fees", "Rs.2-16 Lakhs (total)"],
      ["Average Salary", "Rs.8-12 LPA"],
      ["Highest Salary", "Rs.45 LPA"],
      ["Top Recruiters", "Google, Microsoft, Amazon, TCS, Infosys"],
      ["Job Roles", "Software Engineer, Data Scientist, DevOps, Full Stack"],
    ],

    eligibility: {
      basic: "Candidates must have passed 10+2 or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects.",
      marks: "Minimum 60% aggregate marks in PCM (55% for reserved categories).",
      age: "No age limit for most private colleges. Government colleges may have age restrictions.",
      exams: [
        { name: "JEE Main", desc: "National level exam conducted by NTA. Most widely accepted for B.Tech admissions across India.", website: "jeemain.nta.nic.in" },
        { name: "JEE Advanced", desc: "For IIT admissions. Only JEE Main qualified students can appear.", website: "jeeadv.ac.in" },
        { name: "CUET UG", desc: "Common University Entrance Test for central and many private universities.", website: "cuet.samarth.ac.in" },
        { name: "SAT", desc: "Accepted by many private universities like Bennett University.", website: "sat.collegeboard.org" },
        { name: "State CETs", desc: "MHT-CET, KCET, WBJEE, etc. for state-level admissions.", website: "-" },
      ],
      process: [
        "Appear in JEE Main / CUET / relevant entrance exam",
        "Qualify cutoff marks as per college requirements",
        "Participate in centralized counselling (JoSAA for IITs/NITs) or direct college counselling",
        "Document verification and fee payment",
        "Seat confirmation and admission",
      ],
    },

    syllabus: {
      semester1: ["Engineering Mathematics I", "Physics", "Chemistry", "Basic Electrical Engineering", "Programming in C", "Engineering Drawing"],
      semester2: ["Engineering Mathematics II", "Data Structures", "Digital Electronics", "Object Oriented Programming (Java)", "Discrete Mathematics", "Communication Skills"],
      semester3: ["Engineering Mathematics III", "Database Management Systems", "Computer Organization & Architecture", "Operating Systems", "Design & Analysis of Algorithms", "Web Technologies"],
      semester4: ["Theory of Computation", "Computer Networks", "Software Engineering", "Microprocessors", "Elective I", "Mini Project"],
      semester5: ["Compiler Design", "Artificial Intelligence", "Machine Learning", "Cloud Computing", "Elective II", "Industrial Training"],
      semester6: ["Information Security", "Big Data Analytics", "Elective III", "Elective IV", "Project I"],
      semester7: ["Distributed Systems", "Elective V", "Elective VI", "Project II", "Seminar"],
      semester8: ["Major Project", "Industrial Training / Internship", "Elective VII", "Seminar"],
    },

    topColleges: [
      { name: "IIT Delhi", fees: "Rs.8.5 L", avgPackage: "Rs.28 LPA", exam: "JEE Advanced", nirf: "#2" },
      { name: "IIT Bombay", fees: "Rs.9 L", avgPackage: "Rs.30 LPA", exam: "JEE Advanced", nirf: "#3" },
      { name: "NIT Trichy", fees: "Rs.5 L", avgPackage: "Rs.15 LPA", exam: "JEE Main", nirf: "#8" },
      { name: "Bennett University", fees: "Rs.16.15 L", avgPackage: "Rs.12.5 LPA", exam: "JEE Main / SAT", nirf: "#65" },
      { name: "GL Bajaj GITM", fees: "Rs.4.22 L", avgPackage: "Rs.7.5 LPA", exam: "JEE Main / CUET", nirf: "#151-200" },
      { name: "Galgotias University", fees: "Rs.5.96 L", avgPackage: "Rs.8.5 LPA", exam: "JEE Main / CUET", nirf: "#101-150" },
    ],

    jobs: [
      { role: "Software Engineer", salary: "Rs.4-18 LPA", companies: ["TCS", "Infosys", "Wipro", "HCL"], skills: ["Java", "Python", "DSA"] },
      { role: "Full Stack Developer", salary: "Rs.6-20 LPA", companies: ["Startup", "Accenture", "Capgemini"], skills: ["React", "Node.js", "MongoDB"] },
      { role: "Data Scientist", salary: "Rs.8-25 LPA", companies: ["Amazon", "Flipkart", "Analytics firms"], skills: ["Python", "ML", "Statistics"] },
      { role: "DevOps Engineer", salary: "Rs.7-22 LPA", companies: ["AWS", "Google", "Microsoft"], skills: ["Docker", "Kubernetes", "CI/CD"] },
      { role: "AI/ML Engineer", salary: "Rs.10-35 LPA", companies: ["Google", "Microsoft", "OpenAI"], skills: ["TensorFlow", "PyTorch", "Python"] },
      { role: "Cybersecurity Analyst", salary: "Rs.6-20 LPA", companies: ["Palo Alto", "Cisco", "IBM"], skills: ["Networking", "Ethical Hacking", "SIEM"] },
    ],

    faqs: [
      { q: "What is the scope of B.Tech CSE in 2026?", a: "B.Tech CSE has excellent scope in 2026 with massive demand in AI/ML, cloud computing, cybersecurity, and software development. India's IT sector is expected to grow to $350 billion by 2026, creating lakhs of new jobs every year." },
      { q: "What is the minimum JEE Main score for B.Tech CSE?", a: "For top IITs, you need 99+ percentile. For NITs, 90-95 percentile is needed. For private colleges like Bennett, GL Bajaj, and Galgotias, 70-85 percentile is sufficient. Many private universities also accept CUET scores." },
      { q: "What is the average salary after B.Tech CSE?", a: "The average salary ranges from Rs.4-8 LPA for freshers at service companies like TCS, Infosys. Product-based companies like Google, Microsoft offer Rs.25-45 LPA. The overall average package is Rs.8-12 LPA." },
      { q: "Is B.Tech CSE better than BCA or MCA?", a: "B.Tech CSE is better for those wanting core engineering + computer science knowledge. BCA is shorter (3 years) and cheaper. MCA is a PG course for those who did non-engineering graduation. B.Tech CSE has the highest salary potential." },
      { q: "Can I do B.Tech CSE without Maths in 12th?", a: "No. Mathematics is compulsory in 10+2 for B.Tech CSE admission. JEE Main also requires Physics, Chemistry, and Mathematics." },
    ],
  },

  "mbbs": {
    id: "mbbs",
    name: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
    shortName: "MBBS",
    stream: "Medical",
    level: "UG",
    duration: "5.5 Years",
    fees: "5-80 L",
    avgSalary: "8-20 LPA",
    highestSalary: "50 LPA",
    exam: "NEET UG",
    seats: "1000+",
    mode: "Full Time",
    color: "#dc2626",
    emoji: "🏥",

    about: "MBBS is the most prestigious undergraduate medical degree in India. The 5.5-year program (including 1 year internship) trains students to become doctors. It covers pre-clinical, para-clinical, and clinical subjects. After completing MBBS, graduates can practice medicine, pursue PG studies (MD/MS), or work in hospitals, clinics, and research.",

    highlights: [
      ["Duration", "5.5 Years (including 1 yr internship)"],
      ["Level", "Undergraduate (UG)"],
      ["Mode", "Full Time"],
      ["Eligibility", "10+2 with PCB, min 50%"],
      ["Entrance Exam", "NEET UG (mandatory)"],
      ["Average Fees", "Rs.5-80 Lakhs (total)"],
      ["Average Salary", "Rs.8-20 LPA"],
      ["Highest Salary", "Rs.50 LPA+"],
      ["Top Recruiters", "AIIMS, Apollo, Fortis, Max Hospital"],
      ["Job Roles", "Doctor, Surgeon, Medical Officer, Researcher"],
    ],

    eligibility: {
      basic: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology as compulsory subjects.",
      marks: "Minimum 50% aggregate in PCB (40% for SC/ST/OBC). NEET UG qualification is mandatory.",
      age: "Minimum 17 years at time of admission.",
      exams: [
        { name: "NEET UG", desc: "Only entrance exam accepted for MBBS admissions across India. Conducted by NTA.", website: "neet.nta.nic.in" },
      ],
      process: [
        "Appear in NEET UG and qualify",
        "Register for MCC counselling (for government colleges)",
        "Choose college and course preference",
        "Document verification",
        "Seat allotment and fee payment",
      ],
    },

    syllabus: {
      "Phase I (1st Year)": ["Anatomy", "Physiology", "Biochemistry"],
      "Phase II (2nd-3rd Year)": ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine", "Community Medicine"],
      "Phase III Part I": ["Ophthalmology", "ENT", "Community Medicine"],
      "Phase III Part II": ["Medicine", "Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Psychiatry", "Dermatology", "Anaesthesia", "Radiology"],
      "Internship (1 Year)": ["Rotatory clinical postings in all departments"],
    },

    topColleges: [
      { name: "AIIMS Delhi", fees: "Rs.6,820 (Govt)", avgPackage: "Rs.12 LPA", exam: "NEET UG", nirf: "#1" },
      { name: "JIPMER Puducherry", fees: "Rs.Nominal", avgPackage: "Rs.10 LPA", exam: "NEET UG", nirf: "#2" },
      { name: "CMC Vellore", fees: "Rs.3.5 L", avgPackage: "Rs.10 LPA", exam: "NEET UG", nirf: "#3" },
      { name: "Maulana Azad Medical", fees: "Rs.50,000", avgPackage: "Rs.9 LPA", exam: "NEET UG", nirf: "#10" },
      { name: "Kasturba Medical College", fees: "Rs.62 L", avgPackage: "Rs.12 LPA", exam: "NEET UG", nirf: "#15" },
    ],

    jobs: [
      { role: "General Physician / Doctor", salary: "Rs.6-15 LPA", companies: ["Apollo", "Fortis", "Max", "Govt Hospitals"], skills: ["Clinical skills", "Diagnosis", "Patient care"] },
      { role: "Surgeon (after MS)", salary: "Rs.15-50 LPA", companies: ["AIIMS", "Private hospitals", "Own practice"], skills: ["Surgery", "Anaesthesia", "OT skills"] },
      { role: "Medical Officer", salary: "Rs.8-15 LPA", companies: ["Govt hospitals", "Railways", "Defence", "PSUs"], skills: ["Clinical skills", "Administration"] },
      { role: "Researcher / Scientist", salary: "Rs.8-20 LPA", companies: ["ICMR", "WHO", "Pharma companies"], skills: ["Research", "Clinical trials", "Data analysis"] },
    ],

    faqs: [
      { q: "What NEET score is needed for MBBS in government college?", a: "For AIIMS Delhi, you need 99.9+ percentile. For other government medical colleges, 600+ marks (out of 720) is generally needed for general category. For private colleges, 400-500 marks may be sufficient." },
      { q: "How many years is MBBS in India?", a: "MBBS is 5.5 years — 4.5 years of academic study divided into phases, plus 1 year of compulsory rotating internship." },
      { q: "What is the salary of an MBBS doctor in India?", a: "Fresh MBBS graduates earn Rs.50,000-1 lakh/month in government jobs. Private hospital doctors earn Rs.60,000-2 lakhs/month. After specialization (MD/MS), salaries can go up to Rs.3-5 lakhs/month." },
      { q: "Is MBBS without NEET possible?", a: "No. NEET UG is mandatory for all MBBS admissions in India including private and deemed universities. The Supreme Court made it compulsory for all medical admissions." },
    ],
  },

  "mba": {
    id: "mba",
    name: "MBA (Master of Business Administration)",
    shortName: "MBA",
    stream: "MBA",
    level: "PG",
    duration: "2 Years",
    fees: "2-25 L",
    avgSalary: "8-25 LPA",
    highestSalary: "50 LPA",
    exam: "CAT / MAT / CMAT",
    seats: "2000+",
    mode: "Full Time",
    color: "#d97706",
    emoji: "💼",

    about: "MBA is India's most popular postgraduate management program. The 2-year program covers Finance, Marketing, HR, Operations, Strategy, and Entrepreneurship. IIM graduates are among the highest paid in India. MBA opens doors to leadership roles in top MNCs, consulting firms, banks, and startups.",

    highlights: [
      ["Duration", "2 Years (4 Semesters)"],
      ["Level", "Postgraduate (PG)"],
      ["Mode", "Full Time"],
      ["Eligibility", "Any Bachelor's degree with 50%"],
      ["Entrance Exam", "CAT / MAT / CMAT / XAT / GMAT"],
      ["Average Fees", "Rs.2-25 Lakhs (total)"],
      ["Average Salary", "Rs.8-25 LPA"],
      ["Highest Salary", "Rs.50 LPA+"],
      ["Top Recruiters", "McKinsey, BCG, Goldman Sachs, Amazon, Google"],
      ["Job Roles", "Manager, Consultant, Analyst, VP, Director"],
    ],

    eligibility: {
      basic: "Bachelor's degree in any discipline from a recognized university.",
      marks: "Minimum 50% aggregate in graduation (45% for SC/ST).",
      age: "No age limit for MBA admissions.",
      exams: [
        { name: "CAT", desc: "Common Admission Test by IIMs. Most prestigious MBA entrance exam in India.", website: "iimcat.ac.in" },
        { name: "XAT", desc: "Xavier Aptitude Test by XLRI. Second most prestigious after CAT.", website: "xatonline.in" },
        { name: "MAT", desc: "Management Aptitude Test by AIMA. Accepted by 600+ B-schools.", website: "mat.aima.in" },
        { name: "CMAT", desc: "Common Management Admission Test by NTA.", website: "cmat.nta.nic.in" },
        { name: "GMAT", desc: "For top international B-schools and some Indian colleges.", website: "mba.com" },
      ],
      process: [
        "Appear in CAT/XAT/MAT/CMAT",
        "Shortlisting based on exam score",
        "Written Ability Test (WAT)",
        "Group Discussion (GD)",
        "Personal Interview (PI)",
        "Final merit list and admission",
      ],
    },

    syllabus: {
      "Semester 1": ["Managerial Economics", "Financial Accounting", "Organizational Behaviour", "Business Statistics", "Marketing Management", "Business Communication"],
      "Semester 2": ["Corporate Finance", "Operations Management", "Human Resource Management", "Business Law", "Strategic Management", "Research Methodology"],
      "Semester 3": ["Elective Specialization I", "Elective Specialization II", "International Business", "Entrepreneurship", "Summer Internship Project"],
      "Semester 4": ["Elective Specialization III", "Elective Specialization IV", "Business Ethics", "Final Dissertation / Project", "Leadership & Change"],
    },

    topColleges: [
      { name: "IIM Ahmedabad", fees: "Rs.23 L", avgPackage: "Rs.35 LPA", exam: "CAT", nirf: "#1" },
      { name: "IIM Bangalore", fees: "Rs.23 L", avgPackage: "Rs.33 LPA", exam: "CAT", nirf: "#2" },
      { name: "FMS Delhi", fees: "Rs.2 L", avgPackage: "Rs.28 LPA", exam: "CAT", nirf: "#5" },
      { name: "Bennett University", fees: "Rs.9.5 L", avgPackage: "Rs.7.12 LPA", exam: "CAT/MAT/BU-MAT", nirf: "#65" },
      { name: "Galgotias University", fees: "Rs.4.75 L", avgPackage: "Rs.7.5 LPA", exam: "CAT/MAT/CMAT", nirf: "#91" },
    ],

    jobs: [
      { role: "Management Consultant", salary: "Rs.15-50 LPA", companies: ["McKinsey", "BCG", "Bain", "Deloitte"], skills: ["Strategy", "Analytics", "Communication"] },
      { role: "Investment Banker", salary: "Rs.20-60 LPA", companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley"], skills: ["Finance", "Valuation", "Excel"] },
      { role: "Marketing Manager", salary: "Rs.8-20 LPA", companies: ["P&G", "HUL", "Amazon", "Flipkart"], skills: ["Marketing", "Brand management", "Digital"] },
      { role: "Product Manager", salary: "Rs.15-40 LPA", companies: ["Google", "Microsoft", "Swiggy", "Zomato"], skills: ["Product thinking", "Analytics", "Tech"] },
      { role: "HR Manager", salary: "Rs.6-15 LPA", companies: ["All MNCs", "Startups", "PSUs"], skills: ["People management", "Recruitment", "L&D"] },
    ],

    faqs: [
      { q: "What CAT percentile is needed for IIM?", a: "For IIM Ahmedabad, Bangalore, Calcutta — 99+ percentile is needed. For new IIMs, 95-98 percentile is sufficient. For other top B-schools like FMS, MDI, IIFT — 95-97 percentile is needed." },
      { q: "Is MBA worth it in 2026?", a: "Yes, MBA is definitely worth it if done from a good college. IIM graduates get average packages of Rs.30-35 LPA. Even tier-2 B-schools offer 8-15 LPA packages. ROI depends on the college quality." },
      { q: "Can I do MBA without work experience?", a: "Yes, freshers can do MBA in India. Most Indian MBA programs (including IIMs) accept fresh graduates. However, work experience of 1-2 years improves your profile and helps in placements." },
      { q: "What is the difference between MBA and PGDM?", a: "MBA is a degree awarded by universities. PGDM (Post Graduate Diploma in Management) is awarded by autonomous institutes like IIMs. Both are equivalent and accepted by employers. IIM PGDM is more prestigious than most MBA degrees." },
    ],
  },
};

const TABS = ["Overview", "Eligibility", "Syllabus", "Top Colleges", "Jobs & Salary", "FAQs"];
const G = "#6b7280";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [openFaq, setOpenFaq] = useState(0);

  const course = COURSES_DB[courseId];

  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: 80, fontFamily: "Segoe UI, sans-serif" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
        <h2 style={{ color: "#111827" }}>Course not found</h2>
        <p style={{ color: G }}>No course found with ID: <strong>{courseId}</strong></p>
        <button onClick={() => navigate("/courses")} style={{ marginTop: 16, background: "#1a73e8", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer" }}>
          ← Back to Courses
        </button>
      </div>
    );
  }

  const P = course.color || "#1a73e8";

  const Card = ({ children, style = {} }) => (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", marginBottom: 18, ...style }}>
      {children}
    </div>
  );

  const SecTitle = ({ children }) => (
    <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 800, color: P }}>{children}</h3>
  );

  const renderContent = () => {
    switch (activeTab) {

      case "Overview":
        return (
          <>
            <Card>
              <SecTitle>About {course.shortName}</SecTitle>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: "#374151", margin: 0 }}>{course.about}</p>
            </Card>
            <Card>
              <SecTitle>{course.shortName} Highlights</SecTitle>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <tbody>
                  {course.highlights.map(([k, v], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "9px 14px", fontWeight: 600, color: "#111827", width: "42%", borderBottom: "1px solid #f3f4f6" }}>{k}</td>
                      <td style={{ padding: "9px 14px", color: "#374151", borderBottom: "1px solid #f3f4f6" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Card>
              <SecTitle>Quick Stats</SecTitle>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12 }}>
                {[
                  { label: "Duration", value: course.duration, icon: "⏱" },
                  { label: "Total Fees", value: course.fees, icon: "💰" },
                  { label: "Avg Salary", value: course.avgSalary, icon: "📈" },
                  { label: "Highest Salary", value: course.highestSalary, icon: "🏆" },
                  { label: "Entrance Exam", value: course.exam, icon: "📝" },
                  { label: "Seats", value: course.seats, icon: "🎓" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "#f9fafb", borderRadius: 10, padding: 14, border: "1px solid #e5e7eb", textAlign: "center" }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: P }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: G, marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        );

      case "Eligibility":
        return (
          <>
            <Card>
              <SecTitle>Eligibility Criteria</SecTitle>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 6 }}>Basic Eligibility</div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.8, margin: 0 }}>{course.eligibility.basic}</p>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 6 }}>Minimum Marks</div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.8, margin: 0 }}>{course.eligibility.marks}</p>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 6 }}>Age Requirement</div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.8, margin: 0 }}>{course.eligibility.age}</p>
              </div>
            </Card>

            <Card>
              <SecTitle>Accepted Entrance Exams</SecTitle>
              {course.eligibility.exams.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < course.eligibility.exams.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${P}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 18 }}>📝</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: P }}>{e.name}</div>
                    <div style={{ fontSize: 12, color: "#374151", marginTop: 3, lineHeight: 1.6 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </Card>

            <Card>
              <SecTitle>Admission Process</SecTitle>
              {course.eligibility.process.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: P, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, paddingTop: 4 }}>{step}</div>
                </div>
              ))}
            </Card>
          </>
        );

      case "Syllabus":
        return (
          <Card>
            <SecTitle>{course.shortName} Syllabus</SecTitle>
            {Object.entries(course.syllabus).map(([sem, subjects], i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", background: `${P}10`, padding: "8px 14px", borderRadius: 8, marginBottom: 10, borderLeft: `3px solid ${P}` }}>
                  {sem}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 8 }}>
                  {subjects.map((sub, j) => (
                    <span key={j} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "#374151", fontWeight: 500 }}>{sub}</span>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        );

      case "Top Colleges":
        return (
          <Card>
            <SecTitle>Top Colleges for {course.shortName}</SecTitle>
            {course.topColleges.map((col, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: i < course.topColleges.length - 1 ? "1px solid #f3f4f6" : "none", flexWrap: "wrap" }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${P}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: P, flexShrink: 0 }}>
                  #{i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{col.name}</div>
                  <div style={{ fontSize: 11, color: G, marginTop: 3 }}>NIRF {col.nirf} &nbsp;·&nbsp; Exam: {col.exam}</div>
                </div>
                <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: P }}>{col.fees}</div>
                    <div style={{ fontSize: 10, color: G }}>Total Fees</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: "#16a34a" }}>{col.avgPackage}</div>
                    <div style={{ fontSize: 10, color: G }}>Avg Package</div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        );

      case "Jobs & Salary":
        return (
          <>
            <Card>
              <SecTitle>Salary Overview</SecTitle>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12, marginBottom: 0 }}>
                {[
                  { label: "Average Salary", value: course.avgSalary, color: "#1a73e8" },
                  { label: "Highest Salary", value: course.highestSalary, color: "#16a34a" },
                  { label: "Entry Level", value: "Rs.3-6 LPA", color: "#d97706" },
                  { label: "Senior Level", value: "Rs.20-50 LPA", color: "#7c3aed" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "#f9fafb", borderRadius: 10, padding: 14, border: "1px solid #e5e7eb", textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: G, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SecTitle>Top Job Roles</SecTitle>
              {course.jobs.map((job, i) => (
                <div key={i} style={{ border: "1px solid #f3f4f6", borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{job.role}</div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: "#16a34a" }}>{job.salary}</div>
                  </div>
                  <div style={{ fontSize: 11, color: G, marginBottom: 8 }}>
                    Top Companies: {job.companies.join(", ")}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {job.skills.map((skill, j) => (
                      <span key={j} style={{ background: `${P}10`, color: P, fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </>
        );

      case "FAQs":
        return (
          <Card>
            <SecTitle>Frequently Asked Questions</SecTitle>
            {course.faqs.map((f, i) => (
              <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", padding: "13px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer", gap: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.5 }}>Q: {f.q}</span>
                  <span style={{ color: G, fontSize: 16, flexShrink: 0, marginTop: 2 }}>{openFaq === i ? "∧" : "∨"}</span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 12, paddingLeft: 16, fontSize: 13, color: "#374151", lineHeight: 1.8 }}>
                    <strong>A: </strong>{f.a}
                  </div>
                )}
              </div>
            ))}
          </Card>
        );

      default: return null;
    }
  };

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "'Segoe UI',-apple-system,sans-serif", color: "#111827" }}>
      <style>{`
        .cd-body { max-width: 1120px; margin: 0 auto; padding: 20px; display: flex; gap: 20px; align-items: flex-start; }
        .cd-sidebar { width: 280px; flex-shrink: 0; display: flex; flex-direction: column; gap: 16px; position: sticky; top: 80px; }
        .cd-main { flex: 1; min-width: 0; }
        @media (max-width: 768px) {
          .cd-sidebar { display: none; }
          .cd-body { padding: 12px; }
        }
      `}</style>

      {/* Header Banner */}
      <div style={{ background: `linear-gradient(135deg, ${P}dd, ${P})`, padding: "24px 20px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <button onClick={() => navigate("/courses")}
            style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer", marginBottom: 14, fontWeight: 600 }}>
            ← Back to Courses
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
              {course.emoji}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 4, fontWeight: 600 }}>{course.stream} · {course.level}</div>
              <h1 style={{ color: "#fff", fontSize: "clamp(16px,3vw,24px)", fontWeight: 800, margin: "0 0 6px", lineHeight: 1.3 }}>{course.name}</h1>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[`⏱ ${course.duration}`, `💰 ${course.fees}`, `📝 ${course.exam}`, `📈 ${course.avgSalary}`].map((tag, i) => (
                  <span key={i} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#fff", borderBottom: "2px solid #e5e7eb", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 12px" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              background: "none", border: "none", padding: "12px 14px", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap",
              fontWeight: t === activeTab ? 700 : 400,
              color: t === activeTab ? P : G,
              borderBottom: t === activeTab ? `2.5px solid ${P}` : "2.5px solid transparent",
              marginBottom: -2,
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="cd-body">
        {/* Main content */}
        <div className="cd-main">
          {renderContent()}
        </div>

        {/* Sidebar */}
        <div className="cd-sidebar">
          {/* Enquire card */}
          <div style={{ background: `linear-gradient(135deg, #1a1a2e, #0f3460)`, color: "#fff", borderRadius: 12, padding: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Interested in {course.shortName}?</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Get free counselling & college list</div>
            {["Your Name", "Mobile Number", "Email Address"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display: "block", width: "100%", boxSizing: "border-box", marginBottom: 8, padding: "9px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 12 }} />
            ))}
            <button style={{ width: "100%", background: P, color: "#fff", border: "none", borderRadius: 8, padding: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Get Free Counselling</button>
          </div>

          {/* Quick info */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 12 }}>Quick Info</div>
            {[
              ["Duration", course.duration],
              ["Level", course.level],
              ["Fees Range", course.fees],
              ["Avg Salary", course.avgSalary],
              ["Entrance", course.exam],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 4 ? "1px solid #f3f4f6" : "none", fontSize: 13 }}>
                <span style={{ color: G }}>{k}</span>
                <span style={{ fontWeight: 600, color: "#111827" }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Top colleges quick */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 12 }}>Top Colleges</div>
            {course.topColleges.slice(0, 4).map((col, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${P}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: P, flexShrink: 0 }}>#{i + 1}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>{col.name}</div>
                  <div style={{ fontSize: 10, color: G }}>{col.avgPackage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
