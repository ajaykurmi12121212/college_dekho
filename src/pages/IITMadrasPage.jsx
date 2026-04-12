import { useState, useEffect } from "react";

/* ── COLORS ── */
const P = "#4f46e5";
const O = "#f97316";
const G = "#6b7280";

/* ── DATA ── */
const TABS = ["Overview","Courses","Fees","Cut-offs","Admissions","Placements","Reviews","Facilities","Ques. & Ans","Notable Alumni","Colleges & Departments"];

const NEWS = [
  "Spectrum Inspired Low-light Image Translation for Saliency Detection event will be held on April 18, 2026.",
  "IIT Madras launches Postgraduate Diploma in Manufacturing Analytics for Industry Professionals.",
  "IIT Madras honours six educators with First Principles Teachers Award 2026.",
  "IIT Madras Summer Fellowship Programme starts on May 18, 2026.",
  "IIT Madras Research Park partners with 10 new startups for 2026 cohort.",
  "IIT Madras introduces new MTech programme in Electric Vehicles from 2026.",
];

const STORIES = [
  { title: "IIT Madras launches new centre for AI, cryptography and quantum computing research", emoji: "🏛️" },
  { title: "IIT Madras Pravartak launches over 15 professional certification courses for 2026", emoji: "📚" },
  { title: "IIT Madras BS Data Science graduates can now pursue higher studies at top universities", emoji: "💻" },
  { title: "IIT Madras Research Park becomes India's largest university-based research ecosystem", emoji: "🔬" },
];

const SIDEBAR_COLLEGES = [
  { name: "Amity University...", desc: "Among top 100 Universities Globally in THE Interdisciplinary Science Rankings 2026. Highest CTC: 42 LPA | 200+ Recruiters", color: "#e63946" },
  { name: "RV University, Mysuru", desc: "World-class and highly qualified engineering faculty. High-quality global education at an affordable cost. Avg CTC 11.35 LPA", color: "#2563eb" },
  { name: "Somaiya Vidvavihar...", desc: "Mark presence in Modern Architecture | Highest CTC: 70 LPA | Accepts NATA Score | 150+ Recruiters", color: "#7c3aed" },
];

const HIGHLIGHTS = [
  ["Established","1959"],
  ["Exam Accepted","GATE, CAT, JEE Advanced, JAM"],
  ["Total Courses","15 Degrees and 137 Courses"],
  ["Institute Type","Institute of National Importance"],
  ["Special Status","Institute of Eminence"],
  ["Ownership","Public / Government"],
  ["Gender","Co-ed"],
  ["Student Count","7,397"],
  ["Faculty Count","593"],
  ["Campus Size","650 Acres"],
  ["Gender Percentage","Male 80% and Female 20%"],
  ["Students from Outside State","81%"],
  ["Departments","16 Departments"],
  ["Laboratories","~100 Laboratories"],
  ["Research Centres","Several Advanced Research Centres"],
  ["Location","IIT P.O., Chennai – 600036, Tamil Nadu"],
];

const NIRF_SCORES = [
  { cat:"Engineering", rank:"#1", score:88.72, tlr:95.7, rpc:90.74, go:82.29, oi:63.25, perception:100 },
  { cat:"Management",  rank:"#13", score:66.5,  tlr:78.97, rpc:52.5, go:76.52, oi:65.48, perception:52.14 },
  { cat:"Overall",     rank:"#1", score:87.31, tlr:90.58, rpc:88.02, go:87.01, oi:63.34, perception:100 },
];

const QS_SUBJECTS = [
  { stream:"Engineering & Technology", rank2026:62, rank2025:53, score:78.2 },
  { stream:"Computer Science",         rank2026:79, rank2025:107, score:69.3 },
  { stream:"Natural Sciences",         rank2026:156, rank2025:173, score:73.5 },
  { stream:"Business & Management",    rank2026:"151–200", rank2025:146, score:"—" },
  { stream:"Economics & Econometrics", rank2026:"201–250", rank2025:"301–350", score:"—" },
  { stream:"Accounting & Finance",     rank2026:"301–375", rank2025:"201–250", score:"—" },
  { stream:"Arts & Humanities",        rank2026:"501–550", rank2025:394, score:"—" },
];

const BTECH_PLACEMENT = [
  { course:"Computer Science & Engineering", avg:"₹53.2 LPA", median:"₹46.0 LPA" },
  { course:"Electrical Engineering",          avg:"₹28.8 LPA", median:"₹22.5 LPA" },
  { course:"Engineering Physics",             avg:"₹34.1 LPA", median:"₹18.0 LPA" },
  { course:"Mechanical Engineering",          avg:"₹16.9 LPA", median:"₹15.0 LPA" },
  { course:"Chemical Engineering",            avg:"₹18.8 LPA", median:"₹17.4 LPA" },
  { course:"Civil Engineering",               avg:"₹17.5 LPA", median:"₹17.2 LPA" },
  { course:"Metallurgical & Materials Engg",  avg:"₹18.4 LPA", median:"₹16.0 LPA" },
  { course:"Naval Architecture & Ocean Engg", avg:"₹16.5 LPA", median:"₹16.0 LPA" },
  { course:"Aerospace Engineering",           avg:"₹17.1 LPA", median:"₹16.2 LPA" },
];

const PG_PLACEMENT = [
  { course:"M.Tech CSE",                avg:"₹29.0 LPA", median:"—" },
  { course:"MSc Physics",               avg:"₹12.5 LPA", median:"—" },
  { course:"MBA (DoMS)",                avg:"₹17.9 LPA", highest:"₹35.5 LPA" },
  { course:"PhD Aerospace Engineering", avg:"₹31.4 LPA", median:"—" },
];

const PLACEMENT_STATS = [
  ["Total Companies Visited","256"],
  ["Total Students Placed (UG)","764"],
  ["Total Students Placed (PG)","652"],
  ["Placement Percentage (2023-24)","97.86%"],
  ["Median Salary (2023-24)","₹17.50 LPA"],
  ["Highest Package (MBA 2025)","₹35.5 LPA"],
  ["MBA Average Package 2025","₹17.9 LPA"],
  ["BTech CSE Average 2025","₹53.2 LPA"],
  ["BTech CSE Median 2025","₹46.0 LPA"],
];

const CUTOFFS = [
  { course:"Computer Science & Engineering",   gen:"171",       ews:"29",  obc:"87",  sc:"43",  st:"28"  },
  { course:"Artificial Intelligence & Data Analytics", gen:"292–306", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Computational Engineering & Mech", gen:"1226–1309", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Engineering Physics",              gen:"1428–1441", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Electrical Engineering",           gen:"741–849",   ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Mechanical Engineering",           gen:"2354–2468", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Aerospace Engineering",            gen:"2749–3211", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Engineering Design (Dual)",        gen:"3076–3380", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Chemical Engineering",             gen:"3804–4116", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Instrumentation & Biomedical Engg",gen:"4103–4366", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Biological Engineering",           gen:"4645–5261", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Metallurgical & Materials Engg",   gen:"5029–5499", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Civil Engineering",                gen:"5629–6112", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Naval Architecture & Ocean Engg",  gen:"6926–7433", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Physics (BS)",                     gen:"2556–3804", ews:"—",   obc:"—",   sc:"—",   st:"—"   },
  { course:"Biological Science (BS)",          gen:"9555–10290",ews:"—",   obc:"—",   sc:"—",   st:"—"   },
];

const COURSES = [
  { name:"B.Tech Computer Science & Engineering", mode:"Full Time", seats:87,  fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Electrical Engineering",          mode:"Full Time", seats:154, fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Mechanical Engineering",          mode:"Full Time", seats:144, fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Civil Engineering",               mode:"Full Time", seats:117, fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Chemical Engineering",            mode:"Full Time", seats:111, fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Aerospace Engineering",           mode:"Full Time", seats:60,  fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech Naval Architecture & Ocean Engg", mode:"Full Time", seats:78,  fees:"₹8.74 L", exam:"JEE Advanced", duration:"4 Years" },
  { name:"B.Tech + M.Tech Engineering Design",     mode:"Full Time", seats:50,  fees:"₹8.74 L", exam:"JEE Advanced", duration:"5 Years" },
  { name:"M.Tech Computer Science & Engineering",  mode:"Full Time", seats:50,  fees:"₹22,400", exam:"GATE",         duration:"2 Years" },
  { name:"M.Tech Electric Vehicles",               mode:"Full Time", seats:20,  fees:"₹22,400", exam:"GATE",         duration:"2 Years" },
  { name:"MBA (Department of Management Studies)", mode:"Full Time", seats:60,  fees:"₹12.22 L",exam:"CAT",          duration:"2 Years" },
  { name:"M.Sc Mathematics",                       mode:"Full Time", seats:30,  fees:"₹1.52 L", exam:"JAM",          duration:"2 Years" },
  { name:"M.Sc Physics",                           mode:"Full Time", seats:30,  fees:"₹1.52 L", exam:"JAM",          duration:"2 Years" },
  { name:"M.Sc Chemistry",                         mode:"Full Time", seats:25,  fees:"₹1.52 L", exam:"JAM",          duration:"2 Years" },
  { name:"Online BSc Programming & Data Science",  mode:"Online",    seats:null,fees:"₹2.21 L", exam:"Qualifier",    duration:"36 Months" },
  { name:"PhD (All Departments)",                  mode:"Full Time", seats:null,fees:"₹22,400", exam:"GATE / Written Test", duration:"5 Years" },
];

const FEES_DATA = [
  { prog:"B.Tech",       tuition:"₹1,12,600/yr", hostel:"₹24,100/yr", total:"₹8.74 L (4 yrs)", exam:"JEE Advanced" },
  { prog:"M.Tech / MA",  tuition:"₹22,400/yr",   hostel:"₹24,100/yr", total:"₹1.52 L (2 yrs)", exam:"GATE" },
  { prog:"M.Sc",         tuition:"₹22,400/yr",   hostel:"₹24,100/yr", total:"₹1.52 L (2 yrs)", exam:"JAM" },
  { prog:"MBA",          tuition:"₹5,00,000/yr", hostel:"₹24,100/yr", total:"₹12.22 L (2 yrs)", exam:"CAT" },
  { prog:"MS (Research)",tuition:"₹22,400/yr",   hostel:"₹24,100/yr", total:"₹1.52 L",           exam:"Written Test" },
  { prog:"PhD",          tuition:"₹22,400/yr",   hostel:"₹24,100/yr", total:"₹1.52 L",           exam:"GATE / Test" },
  { prog:"Online BSc",   tuition:"₹5,500/course",hostel:"—",           total:"₹2.21 L",           exam:"Qualifier Exam" },
];

const ADMISSIONS = [
  { prog:"B.Tech",         eligibility:"10+2 with 75% in PCM", exam:"JEE Advanced", counselling:"JoSAA", seats:951 },
  { prog:"B.Tech + M.Tech",eligibility:"10+2 with 75% in PCM", exam:"JEE Advanced", counselling:"JoSAA", seats:211 },
  { prog:"BS + MS",        eligibility:"10+2 Science stream",   exam:"JEE Advanced", counselling:"JoSAA", seats:51 },
  { prog:"M.Tech / MA",    eligibility:"B.Tech/BE with 60%",   exam:"GATE",          counselling:"COAP",  seats:482 },
  { prog:"M.Sc",           eligibility:"Bachelor's in relevant", exam:"JAM",          counselling:"CCMN",  seats:"~85" },
  { prog:"MBA",            eligibility:"Any Bachelor's degree", exam:"CAT + PI",      counselling:"Direct",seats:60 },
  { prog:"MS / PhD",       eligibility:"Master's degree",      exam:"Written + Interview", counselling:"Direct", seats:"NA" },
  { prog:"Online BSc",     eligibility:"Class 12 passed",      exam:"Qualifier Exam",counselling:"Direct",seats:"Open" },
];

const ADMISSION_DATES = [
  ["JEE Advanced 2026 Registration Opens","April 23, 2026"],
  ["JEE Advanced 2026 Last Date","May 2, 2026"],
  ["JEE Advanced 2026 Exam Date","May 17, 2026"],
  ["JEE Advanced 2026 Result","June 01, 2026"],
  ["JoSAA Counselling (Tentative)","June 2026"],
  ["GATE 2026 Score Card Download","March 27 – May 31, 2026"],
  ["COAP Round 1 Seat Allotment","May 11, 2026"],
  ["MTech / MA Application Last Date","April 27, 2026"],
  ["BS in Management & Data Science Last Date","May 30, 2026"],
  ["IIT JAM First Admission List","May 25, 2026"],
];

const REVIEWS = [
  { name:"Utkarsh Mishra", batch:"2025", course:"BS Electronic Systems", rating:5, infra:5, acad:4, place:5, life:5,
    text:"IIT Madras has one of the most impressive campuses in India. Spread over 600+ acres inside a protected forest area carved from Guindy National Park — deer and monkeys are your everyday companions! Academic buildings are modern with advanced labs, especially for engineering and interdisciplinary research. High-speed internet is available across campus, including in hostels. The faculty are world-class and deeply involved in cutting-edge research." },
  { name:"Priyanshu Raj", batch:"2024", course:"Online BS Data Science", rating:4, infra:4, acad:4.5, place:4, life:4,
    text:"Great course to build a better career. The online programme has lecture videos, weekly assignments, and live sessions. Excellent faculty engagement even in the online mode. Multiple placement opportunities through IITM's strong alumni network. Food and living space are clean and hygienic if you visit campus for exams." },
  { name:"Arjun Sharma", batch:"2023", course:"B.Tech CSE", rating:5, infra:5, acad:5, place:5, life:5,
    text:"Placements are simply phenomenal — Google, Microsoft, Uber, Flipkart, DE Shaw, Goldman Sachs. CSE average was ₹53 LPA. The peer group is incredible and pushes you to grow every single day. Research culture, startup ecosystem through Nirmaan, and the sheer number of technical fests make this the ultimate engineering college. Best decision of my life." },
  { name:"Meera Iyer", batch:"2023", course:"M.Tech Electrical Engineering", rating:4, infra:4, acad:5, place:4, life:4,
    text:"The MTech programme is research-heavy and extremely rigorous. Professors are brilliant and globally recognized. Lab infrastructure is top-notch. Placements for MTech are decent — mostly core companies and research labs. Stipend through TA/RA positions makes it financially comfortable. Beautiful campus makes the two years very enjoyable." },
  { name:"Rahul Bose", batch:"2022", course:"MBA — DoMS", rating:4, infra:4, acad:4, place:4.5, life:4.5,
    text:"DoMS IIT Madras is seriously underrated for MBA. The highest package this year was ₹35.5 LPA. Finance, consulting, and analytics companies recruit heavily. The IIT tag + strong alumni network opens doors other MBA colleges can't. Brand value in South India is unmatched. Recommend it over many IIMs for tech-management roles." },
];

const FAQS = [
  { q:"When was IIT Madras established and what prestigious title has it been awarded?",
    a:'IIT Madras was established in 1959. It has been awarded the prestigious title of "Institute of Eminence" in recognition of its academic excellence, research contributions, and innovation ecosystem.' },
  { q:"How many departments and laboratories does IIT Madras have?",
    a:"IIT Madras has 16 academic departments, several advanced research centres, and around 100 laboratories. The institute also has IIT Madras Research Park — India's first university-based research park spread across 11.42 acres." },
  { q:"What is the student and faculty population at IIT Madras?",
    a:"IIT Madras is a residential institute with around 593 faculty, 7,397 students, and 1,250 administrative & supporting staff. Around 81% of students come from outside Tamil Nadu." },
  { q:"What is IIT Madras' ranking in NIRF 2025?",
    a:"IIT Madras has been ranked #1 in Overall, Engineering, Innovation, and SDG categories. It ranked #2 in Research and #13 in Management as per NIRF 2025." },
  { q:"Can I join IIT Madras without JEE Advanced?",
    a:"Yes! IIT Madras offers an online BS in Data Science & Applications and BS in Electronic Systems that do not require JEE. Admission is through a 4-week qualifier process. Also, MTech, MBA, and MSc admissions use GATE, CAT, and JAM respectively." },
  { q:"What is the BTech CSE cutoff at IIT Madras?",
    a:"For General category, the JEE Advanced closing rank for BTech CSE at IIT Madras is 171 in Round 1. EWS cutoff is 29, OBC is 87, SC is 43, and ST is 28." },
  { q:"What are the placement statistics for IIT Madras BTech CSE?",
    a:"BTech CSE average package is ₹53.2 LPA and median CTC is ₹46.0 LPA as per IIT Madras Placements 2025. Top recruiters include Google, Microsoft, Uber, Goldman Sachs, and DE Shaw." },
  { q:"What scholarships does IIT Madras offer?",
    a:"IIT Madras offers Merit-cum-Means Scholarship (67% fee waiver), Institute SC/ST Scholarship, Aditya Birla Scholarship (₹60,000/year), OPJEMS (₹65,000/year), ST Engineering Scholarship (₹80,000/year), Inspire Scholarship (₹80,000/year for BS+MS), and many others from government and corporate donors." },
];

const FACILITIES = [
  { name:"Boys Hostel",           desc:"18 hostels with modern amenities, Wi-Fi, gym" },
  { name:"Girls Hostel",          desc:"Separate secured hostel blocks with all facilities" },
  { name:"Medical / Hospital",    desc:"On-campus hospital with 24x7 emergency care" },
  { name:"Central Library",       desc:"3 lakh+ books, e-journals, digital resources" },
  { name:"Sports Complex",        desc:"Olympic pool, cricket ground, tennis, basketball, athletics" },
  { name:"IT Infrastructure",     desc:"High-speed internet, 24x7 computing labs" },
  { name:"Cafeteria / Mess",      desc:"Multiple messes and canteens with varied cuisine" },
  { name:"Auditorium (CLT)",      desc:"Central Lecture Theatre complex for events and lectures" },
  { name:"Wi-Fi Campus",          desc:"Entire 650-acre campus with high-speed Wi-Fi coverage" },
  { name:"Research Laboratories", desc:"100+ state-of-the-art labs across all departments" },
  { name:"Banks & ATMs",          desc:"SBI, Canara Bank branches and ATMs on campus" },
  { name:"Guest House",           desc:"Accommodation for visiting faculty and parents" },
  { name:"Convenience Store",     desc:"Multiple shops, stationery, and grocery outlets" },
  { name:"Transport Facility",    desc:"Bus service to Chennai city; shuttle within campus" },
  { name:"Research Park (IITMRP)","desc":"India's 1st university research park — 1.2 mn sq ft workspace" },
  { name:"Nirmaan — Incubator",   desc:"Startup incubation centre with 250+ startups supported" },
];

const ALUMNI = [
  { name:"Sundar Pichai",     batch:"B.Tech Metallurgical Engg, 1993", role:"CEO, Alphabet (Google)", img:"🌐" },
  { name:"Manohar Parrikar",  batch:"B.Tech Metallurgical Engg, 1978", role:"Former CM of Goa & Defence Minister", img:"🏛️" },
  { name:"Kris Gopalakrishnan",batch:"M.Tech CS, 1983",                role:"Co-Founder, Infosys", img:"💻" },
  { name:"Raghunath Mashelkar",batch:"PhD Chemical Engg",              role:"Former Director General, CSIR", img:"🔬" },
  { name:"Venkataraman Ramakrishnan",batch:"PhD Physics",              role:"Nobel Prize in Chemistry 2009", img:"🏆" },
  { name:"N. R. Narayana Murthy",batch:"—",                            role:"Founder, Infosys (Guest Faculty)", img:"🏢" },
];

const SCHOLARSHIPS = [
  { name:"Institute Merit-cum-Means Scholarship", eligibility:"Family income ≤ ₹4.5 L/yr", amount:"67% Tuition fee exemption" },
  { name:"Institute SC/ST Scholarship",           eligibility:"SC/ST, income ≤ ₹4.5 L/yr",  amount:"Free messing + ₹250/month pocket" },
  { name:"Aditya Birla Scholarship",              eligibility:"Top 20 in JEE Advanced",       amount:"₹60,000/year (renewable)" },
  { name:"OPJEMS",                                eligibility:"Top 20 in JEE Advanced",       amount:"₹65,000/year (BTech)" },
  { name:"ST Engineering Scholarship",            eligibility:"Top 10% in AE, CS, ME",       amount:"₹80,000/year" },
  { name:"Inspire Scholarship (DST GoI)",         eligibility:"All BS+MS Dual Degree",        amount:"₹80,000/year" },
  { name:"MHRD Scholarship (Single Girl Child)",  eligibility:"As per GoI norms",             amount:"₹40,000/year" },
  { name:"Girish Reddy Scholarship",              eligibility:"Merit cum Means, income ≤ ₹5L",amount:"₹25,000/year, CGPA ≥ 8.0" },
  { name:"Kanchi Kamakoti Endowment Award",       eligibility:"Merit cum Means, income ≤ ₹5.5L",amount:"₹2,500 one-time" },
  { name:"TODAI Scholarship (Japan)",             eligibility:"Top AE, EE, ME students",      amount:"2 Lakh Japanese Yen/year" },
];

/* ── COMPONENTS ── */
function Card({ children, style = {} }) {
  return <div style={{ background:"#fff", borderRadius:10, border:"1px solid #e5e7eb", padding:20, boxShadow:"0 1px 4px rgba(0,0,0,0.05)", ...style }}>{children}</div>;
}
function SecTitle({ children, noGap }) {
  return <h3 style={{ margin: noGap ? "0" : "0 0 14px", fontSize:17, fontWeight:800, color:P }}>{children}</h3>;
}
function Stars({ n }) {
  return <span style={{ color:"#f59e0b", fontSize:13 }}>{"★".repeat(Math.round(n))}{"☆".repeat(5-Math.round(n))}</span>;
}
function Bar({ val }) {
  return (
    <div style={{ flex:1, background:"#e5e7eb", borderRadius:4, height:6, overflow:"hidden" }}>
      <div style={{ background:"#f59e0b", height:"100%", width:`${(val/5)*100}%`, borderRadius:4 }} />
    </div>
  );
}
function Tag({ children, color="#ede9fe", textColor }) {
  return <span style={{ background:color, color: textColor || P, fontSize:12, fontWeight:600, padding:"4px 12px", borderRadius:20, border:`1px solid ${textColor || P}30`, cursor:"pointer" }}>{children}</span>;
}

/* ── SECTION COMPONENTS ── */
function OverviewSection({ openFaq, setOpenFaq }) {
  return (
    <>
      {/* News */}
      <Card>
        <SecTitle>IIT Madras (IITM) News and Notifications</SecTitle>
        {NEWS.map((n,i) => (
          <div key={i} style={{ display:"flex", gap:8, padding:"7px 0", borderBottom:i<NEWS.length-1?"1px solid #f3f4f6":"none", fontSize:13, color:"#374151", lineHeight:1.65 }}>
            <span style={{ color:P, flexShrink:0, marginTop:2 }}>▸</span><span>{n}</span>
          </div>
        ))}
      </Card>

      {/* Stories */}
      <Card>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <h3 style={{ margin:0, fontSize:16, fontWeight:800, color:"#111827" }}>Other College Stories</h3>
          <div style={{ display:"flex", gap:6 }}>
            {["‹","›"].map((a,i) => <button key={i} style={{ width:30, height:30, background:i===0?"#e5e7eb":P, color:i===0?G:"#fff", border:"none", borderRadius:4, cursor:"pointer", fontSize:15 }}>{a}</button>)}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
          {STORIES.slice(0,3).map((s,i) => (
            <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:8, overflow:"hidden", cursor:"pointer" }}>
              <div style={{ background:"linear-gradient(135deg,#1a1a2e,#374151)", height:70, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>{s.emoji}</div>
              <div style={{ padding:"10px", fontSize:12, color:"#111827", lineHeight:1.5, fontWeight:500 }}>{s.title} <span style={{ color:P }}>›</span></div>
            </div>
          ))}
        </div>
      </Card>

      {/* About */}
      <Card>
        <SecTitle>About IIT Madras (IITM)</SecTitle>
        <p style={{ fontSize:13, lineHeight:1.85, color:"#374151", margin:"0 0 10px" }}>
          Indian Institute of Technology Madras (IIT Madras or IITM) has been given the title of <strong>"Institute of Eminence"</strong>. IIT Madras is a prestigious institution of national importance and a public technical university established in <strong>1959</strong>. It is a residential institute with around <strong>593 faculty</strong>, <strong>7,397 students</strong>, and 1,250 administrative &amp; supporting staff.
        </p>
        <ul style={{ margin:0, padding:"0 0 0 18px", fontSize:13, lineHeight:1.95, color:"#374151" }}>
          <li><strong>IIT Madras QS Subject Ranking 2026:</strong> #62 in Engineering &amp; Technology; #156 in Natural Sciences; #79 in Computer Science.</li>
          <li><strong>NIRF 2025:</strong> #1 Overall, #1 Engineering, #1 SDG, #2 Research, #1 Innovation, #13 Management.</li>
          <li><strong>QS World University Ranking 2026:</strong> #180 globally with overall score of 58.4.</li>
          <li><strong>IIT Madras Research Park (IITMRP):</strong> India's first university-based research park — 11.42 acres, 1.2 million sq ft workspace.</li>
          <li><strong>16 departments</strong>, several advanced research centres, and ~100 laboratories.</li>
          <li><strong>Total BTech fees:</strong> ₹8.74 Lakhs | MTech: ₹1.52 Lakhs | MBA: ₹12.22 Lakhs.</li>
          <li><strong>Placements 2025:</strong> BTech CSE avg ₹53.2 LPA · MBA avg ₹17.9 LPA · PhD Aerospace avg ₹31.4 LPA.</li>
          <li><strong>Admissions:</strong> JEE Advanced (BTech), GATE (MTech/MA), JAM (MSc), CAT (MBA).</li>
          <li><strong>Online Programmes:</strong> BSc in Programming &amp; Data Science (no JEE required) via qualifier exam.</li>
        </ul>
      </Card>

      {/* FAQs */}
      <Card>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
          <span style={{ fontSize:28 }}>💬</span>
          <div>
            <div style={{ fontWeight:800, fontSize:16, color:"#111827" }}>Commonly Asked Questions</div>
            <div style={{ fontSize:12, color:G }}>On IIT Madras (IITM) About</div>
          </div>
        </div>
        <div style={{ marginTop:14 }}>
          {FAQS.map((f,i) => (
            <div key={i} style={{ borderTop:i===0?"none":"1px solid #f3f4f6" }}>
              <button onClick={() => setOpenFaq(openFaq===i?null:i)} style={{ width:"100%", background:"none", border:"none", padding:"13px 0", textAlign:"left", display:"flex", justifyContent:"space-between", alignItems:"flex-start", cursor:"pointer", gap:12 }}>
                <span style={{ fontSize:13, fontWeight:700, color:"#111827", lineHeight:1.5 }}>Q: &nbsp;{f.q}</span>
                <span style={{ color:G, fontSize:16, flexShrink:0, marginTop:2 }}>{openFaq===i?"∧":"∨"}</span>
              </button>
              {openFaq===i && (
                <div style={{ paddingBottom:12, paddingLeft:22, fontSize:13, color:"#374151", lineHeight:1.8 }}>
                  <strong>A: </strong>{f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Highlights */}
      <Card>
        <SecTitle>IIT Madras (IITM) Highlights</SecTitle>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <tbody>
            {HIGHLIGHTS.map(([k,v],i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 14px", fontWeight:600, color:"#111827", width:"42%", borderBottom:"1px solid #f3f4f6" }}>{k}</td>
                <td style={{ padding:"9px 14px", color:"#374151", borderBottom:"1px solid #f3f4f6" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Rankings */}
      <Card>
        <SecTitle>Rankings / Accreditations</SecTitle>
        {/* NIRF */}
        <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>NIRF Rankings 2025</div>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:20 }}>
          {NIRF_SCORES.map((r,i) => (
            <div key={i} style={{ border:`2px solid ${P}`, borderRadius:10, padding:"14px 18px", textAlign:"center", flex:"1 1 130px" }}>
              <div style={{ fontSize:26, fontWeight:900, color:P }}>{r.rank}</div>
              <div style={{ fontSize:13, fontWeight:700, color:"#111827", marginTop:4 }}>{r.cat}</div>
              <div style={{ fontSize:11, color:G, marginTop:2 }}>Score: {r.score}/100</div>
            </div>
          ))}
        </div>
        {/* NIRF Score table */}
        <div style={{ overflowX:"auto", marginBottom:20 }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ background:"#f3f4f6" }}>
                {["Category","Score","TLR","RPC","GO","OI","Perception"].map(h => (
                  <th key={h} style={{ padding:"8px 12px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NIRF_SCORES.map((r,i) => (
                <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                  <td style={{ padding:"8px 12px", fontWeight:600, color:"#111827" }}>{r.cat}</td>
                  <td style={{ padding:"8px 12px", fontWeight:700, color:P }}>{r.score}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.tlr}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.rpc}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.go}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.oi}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.perception}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* QS Rankings */}
        <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>QS Subject Rankings 2026 vs 2025</div>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ background:"#f3f4f6" }}>
                {["Stream","2026 Rank","2025 Rank","Score 2026"].map(h => (
                  <th key={h} style={{ padding:"8px 12px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb", whiteSpace:"nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QS_SUBJECTS.map((r,i) => (
                <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                  <td style={{ padding:"8px 12px", color:"#111827", fontWeight:500 }}>{r.stream}</td>
                  <td style={{ padding:"8px 12px", fontWeight:700, color:P }}>{r.rank2026}</td>
                  <td style={{ padding:"8px 12px", color:G }}>{r.rank2025}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

function CoursesSection() {
  const [filter, setFilter] = useState("All");
  const types = ["All","B.Tech","M.Tech","MBA","M.Sc","PhD","Online"];
  const filtered = filter==="All" ? COURSES : COURSES.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || (filter==="Online" && c.mode==="Online") || (filter==="B.Tech" && c.name.startsWith("B.Tech")) || (filter==="M.Tech" && c.name.startsWith("M.Tech")) || (filter==="MBA" && c.name.includes("MBA")) || (filter==="M.Sc" && c.name.startsWith("M.Sc")) || (filter==="PhD" && c.name.includes("PhD")));
  return (
    <Card>
      <SecTitle>Courses offered by IIT Madras (IITM)</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
        IIT Madras offers <strong>137 courses across 15 degrees</strong> at UG, PG, and doctoral levels in Engineering, Science, Management, Humanities, and Online modes. Courses span B.Tech, BS, M.Tech, MBA, MSc, MA, MS, and PhD programmes.
      </p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
        {types.map(t => (
          <span key={t} onClick={() => setFilter(t)} style={{ background:filter===t?P:"#ede9fe", color:filter===t?"#fff":P, fontSize:12, fontWeight:600, padding:"5px 14px", borderRadius:20, border:`1px solid ${P}40`, cursor:"pointer" }}>{t}</span>
        ))}
      </div>
      {filtered.map((c,i) => (
        <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:8, padding:"13px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8, marginBottom:8, cursor:"pointer" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow="0 2px 12px rgba(79,70,229,0.1)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow="none"}>
          <div>
            <div style={{ fontWeight:700, fontSize:13, color:P }}>{c.name}</div>
            <div style={{ fontSize:11, color:G, marginTop:3 }}>{c.mode} &nbsp;|&nbsp; Duration: {c.duration} &nbsp;|&nbsp; {c.seats ? `Seats: ${c.seats}` : ""} &nbsp;|&nbsp; Exam: {c.exam}</div>
          </div>
          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontWeight:800, fontSize:15, color:"#111827" }}>{c.fees}</div>
              <div style={{ fontSize:10, color:G }}>Total Fees</div>
            </div>
            <button style={{ background:O, color:"#fff", border:"none", borderRadius:6, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>Get Info</button>
          </div>
        </div>
      ))}
    </Card>
  );
}

function FeesSection() {
  return (
    <Card>
      <SecTitle>IIT Madras Fees Structure 2026</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
        IIT Madras fees depend on the programme. BTech total fees is <strong>₹8.74 Lakhs</strong> for 4 years. MTech fees is <strong>₹22,400/year</strong>. MBA total fees is <strong>₹12.22 Lakhs</strong>. SC/ST/PwD and economically weaker students get significant fee waivers and scholarships.
      </p>
      <div style={{ overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ background:"#1a1a2e", color:"#fff" }}>
              {["Programme","Tuition Fee","Hostel Fee","Total Fees","Exam"].map(h => (
                <th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:700, whiteSpace:"nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEES_DATA.map((f,i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 14px", fontWeight:600, color:"#111827" }}>{f.prog}</td>
                <td style={{ padding:"9px 14px", color:"#374151" }}>{f.tuition}</td>
                <td style={{ padding:"9px 14px", color:"#374151" }}>{f.hostel}</td>
                <td style={{ padding:"9px 14px", fontWeight:700, color:P }}>{f.total}</td>
                <td style={{ padding:"9px 14px", color:G }}>{f.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop:16, background:"#fef3c7", borderRadius:8, padding:"12px 14px", fontSize:13, color:"#92400e" }}>
        <strong>Note:</strong> SC/ST students get full tuition fee waiver + ₹250/month pocket allowance. EWS and family income &lt; ₹5L students get 67% fee waiver under Merit-cum-Means Scholarship. Additional hostel, mess, and one-time caution deposits apply.
      </div>
      {/* Scholarships */}
      <div style={{ marginTop:20 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:10 }}>IIT Madras Scholarships 2026</div>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ background:"#f3f4f6" }}>
                {["Scholarship","Eligibility","Amount"].map(h => (
                  <th key={h} style={{ padding:"9px 12px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHOLARSHIPS.map((s,i) => (
                <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                  <td style={{ padding:"8px 12px", fontWeight:600, color:P }}>{s.name}</td>
                  <td style={{ padding:"8px 12px", color:"#374151" }}>{s.eligibility}</td>
                  <td style={{ padding:"8px 12px", fontWeight:700, color:"#16a34a" }}>{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

function CutoffSection() {
  return (
    <Card>
      <SecTitle>IIT Madras JEE Advanced Cutoff 2025</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
        The table below shows <strong>closing ranks</strong> for IIT Madras JEE Advanced cutoff 2025 in Round 1 (and last round where available). CSE General category closing rank is <strong>171</strong>. Cutoffs vary by category and branch.
      </p>
      <div style={{ overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
          <thead>
            <tr style={{ background:"#1a1a2e", color:"#fff" }}>
              {["Course","General","EWS","OBC-NCL","SC","ST"].map(h => (
                <th key={h} style={{ padding:"9px 12px", textAlign:"left", fontWeight:700, whiteSpace:"nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUTOFFS.map((c,i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 12px", fontWeight:600, color:"#111827", minWidth:240 }}>{c.course}</td>
                <td style={{ padding:"9px 12px", fontWeight:700, color:"#dc2626" }}>{c.gen}</td>
                <td style={{ padding:"9px 12px", color:G }}>{c.ews}</td>
                <td style={{ padding:"9px 12px", color:G }}>{c.obc}</td>
                <td style={{ padding:"9px 12px", color:G }}>{c.sc}</td>
                <td style={{ padding:"9px 12px", color:G }}>{c.st}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop:14, background:"#ede9fe", borderRadius:8, padding:"12px 14px", fontSize:13, color:"#4c1d95" }}>
        <strong>Tip:</strong> These are closing ranks (last seat allotted) in Round 1 JoSAA 2025. General category students with ranks above these figures can confidently apply for the respective branches.
      </div>
    </Card>
  );
}

function AdmissionsSection() {
  return (
    <Card>
      <SecTitle>IIT Madras Admissions 2026</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
        IIT Madras offers admissions to B.Tech, BS, M.Tech, MBA, MSc, MA, MS, and PhD programmes. Admissions are based on entrance exam scores. <strong>MTech &amp; MA applications are open till April 27, 2026.</strong> JEE Advanced 2026 registrations begin April 23, 2026.
      </p>
      {/* Eligibility table */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>Eligibility &amp; Selection Criteria</div>
      <div style={{ overflowX:"auto", marginBottom:20 }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ background:"#f3f4f6" }}>
              {["Programme","Eligibility","Exam","Counselling","Seats"].map(h => (
                <th key={h} style={{ padding:"9px 12px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb", whiteSpace:"nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ADMISSIONS.map((a,i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 12px", fontWeight:600, color:P }}>{a.prog}</td>
                <td style={{ padding:"9px 12px", color:"#374151" }}>{a.eligibility}</td>
                <td style={{ padding:"9px 12px", fontWeight:600, color:"#111827" }}>{a.exam}</td>
                <td style={{ padding:"9px 12px", color:G }}>{a.counselling}</td>
                <td style={{ padding:"9px 12px", fontWeight:600, color:"#374151" }}>{a.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Dates */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>Important Admission Dates 2026</div>
      <div style={{ overflowX:"auto" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <tbody>
            {ADMISSION_DATES.map(([event, date],i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 14px", color:"#374151", borderBottom:"1px solid #f3f4f6" }}>{event}</td>
                <td style={{ padding:"9px 14px", fontWeight:700, color:P, borderBottom:"1px solid #f3f4f6", whiteSpace:"nowrap" }}>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop:16, background:"#f0fdf4", borderRadius:8, padding:"12px 14px", fontSize:13, color:"#166534" }}>
        <strong>How to Apply for BTech:</strong> Qualify JEE Main → Qualify JEE Advanced → Register on JoSAA → Select IIT Madras → Submit documents &amp; pay fees. For MTech: Qualify GATE → Register on COAP → Fill IIT Madras application form → Attend interview → Pay fees.
      </div>
    </Card>
  );
}

function PlacementsSection() {
  return (
    <Card>
      <SecTitle>IIT Madras Placements 2025</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
        IIT Madras placement 2025 saw <strong>256 companies</strong> visit campus placing <strong>764 UG students</strong> and <strong>652 PG students</strong>. BTech CSE average package stood at <strong>₹53.2 LPA</strong> with a median of <strong>₹46 LPA</strong>. MBA highest package was <strong>₹35.5 LPA</strong>.
      </p>
      {/* Key stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:10, marginBottom:20 }}>
        {PLACEMENT_STATS.map(([k,v],i) => (
          <div key={i} style={{ background:"#f9fafb", borderRadius:8, padding:"12px", border:"1px solid #e5e7eb" }}>
            <div style={{ fontSize:16, fontWeight:900, color:P }}>{v}</div>
            <div style={{ fontSize:11, color:G, marginTop:3 }}>{k}</div>
          </div>
        ))}
      </div>
      {/* BTech */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>BTech Placements 2025</div>
      <div style={{ overflowX:"auto", marginBottom:20 }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ background:"#f3f4f6" }}>
              {["Course","Avg Package","Median CTC"].map(h => (
                <th key={h} style={{ padding:"9px 14px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BTECH_PLACEMENT.map((p,i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 14px", color:"#111827", fontWeight:500 }}>{p.course}</td>
                <td style={{ padding:"9px 14px", color:"#16a34a", fontWeight:700 }}>{p.avg}</td>
                <td style={{ padding:"9px 14px", color:P, fontWeight:600 }}>{p.median}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* PG */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>PG / PhD Placements 2025</div>
      <div style={{ overflowX:"auto", marginBottom:20 }}>
        <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
          <thead>
            <tr style={{ background:"#f3f4f6" }}>
              {["Programme","Avg Package","Highest / Median"].map(h => (
                <th key={h} style={{ padding:"9px 14px", textAlign:"left", fontWeight:700, color:"#111827", borderBottom:"2px solid #e5e7eb" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PG_PLACEMENT.map((p,i) => (
              <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                <td style={{ padding:"9px 14px", color:"#111827", fontWeight:500 }}>{p.course}</td>
                <td style={{ padding:"9px 14px", color:"#16a34a", fontWeight:700 }}>{p.avg}</td>
                <td style={{ padding:"9px 14px", color:P, fontWeight:600 }}>{p.highest || p.median}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Top Recruiters */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>Top Recruiters 2025</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
        {["Google","Microsoft","Goldman Sachs","DE Shaw","Uber","Flipkart","Amazon","Apple","Samsung R&D","Qualcomm","Texas Instruments","McKinsey","Bain & Co","ISRO","DRDO","ITC","Tata Steel","L&T","Schlumberger","JP Morgan","Morgan Stanley","Wells Fargo"].map(r => (
          <span key={r} style={{ background:"#f3f4f6", color:"#374151", fontSize:12, padding:"5px 12px", borderRadius:20, border:"1px solid #e5e7eb", fontWeight:500 }}>{r}</span>
        ))}
      </div>
    </Card>
  );
}

function ReviewsSection() {
  return (
    <Card>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14, flexWrap:"wrap", gap:8 }}>
        <SecTitle noGap>Student Reviews for IIT Madras (IITM)</SecTitle>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:32, fontWeight:900, color:"#111827" }}>4.7</span>
          <div><Stars n={5} /><div style={{ fontSize:11, color:G }}>129 Reviews</div></div>
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 20px", marginBottom:18 }}>
        {[["College Infrastructure",4.6],["Academics",4.3],["Placements",4.5],["Value for Money",3.6],["Campus Life",4.7]].map(([l,v]) => (
          <div key={l} style={{ display:"flex", alignItems:"center", gap:8, fontSize:12 }}>
            <span style={{ width:160, flexShrink:0 }}>{l}: <strong>{v}/5</strong></span>
            <Bar val={v} />
          </div>
        ))}
      </div>
      {REVIEWS.map((r,i) => (
        <div key={i} style={{ border:"1px solid #f3f4f6", borderRadius:8, padding:14, marginBottom:10 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, flexWrap:"wrap", gap:4 }}>
            <div>
              <strong style={{ fontSize:13, color:"#111827" }}>{r.name}</strong>
              <span style={{ fontSize:11, color:G, marginLeft:8 }}>Batch {r.batch} · {r.course}</span>
            </div>
            <Stars n={r.rating} />
          </div>
          <p style={{ fontSize:13, color:"#374151", margin:"0 0 8px", lineHeight:1.75 }}>{r.text}</p>
          <div style={{ display:"flex", gap:16, fontSize:11, color:G }}>
            <span>Infrastructure: <strong style={{ color:"#111827" }}>{r.infra}/5</strong></span>
            <span>Academics: <strong style={{ color:"#111827" }}>{r.acad}/5</strong></span>
            <span>Placements: <strong style={{ color:"#111827" }}>{r.place}/5</strong></span>
            <span>Campus Life: <strong style={{ color:"#111827" }}>{r.life}/5</strong></span>
          </div>
        </div>
      ))}
      <button style={{ width:"100%", background:"none", border:`1px solid ${P}`, color:P, borderRadius:8, padding:"9px", fontSize:13, fontWeight:600, cursor:"pointer" }}>View All 129 Reviews →</button>
    </Card>
  );
}

function FacilitiesSection() {
  return (
    <Card>
      <SecTitle>IIT Madras Campus Facilities</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
        IIT Madras is located in a <strong>protected forest area</strong> carved from Guindy National Park, housing <strong>300+ species of trees and plants</strong>, and unique species of birds and animals. The 650-acre residential campus has world-class facilities for academic, research, sports, and student life.
      </p>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {FACILITIES.map((f,i) => (
          <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"10px 14px", background:i%2===0?"#f9fafb":"#fff", borderRadius:8, border:"1px solid #f3f4f6" }}>
            <span style={{ color:"#16a34a", fontWeight:800, fontSize:15, marginTop:1 }}>✓</span>
            <div>
              <div style={{ fontWeight:700, fontSize:13, color:"#111827" }}>{f.name}</div>
              <div style={{ fontSize:12, color:G, marginTop:2 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function AlumniSection() {
  return (
    <Card>
      <SecTitle>IIT Madras Notable Alumni</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
        IIT Madras has produced world-class leaders across technology, business, science, and public policy. Its alumni include Nobel laureates, Fortune 500 CEOs, and top government officials.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
        {ALUMNI.map((a,i) => (
          <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:10, padding:"14px 16px", display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ width:44, height:44, borderRadius:"50%", background:`hsl(${i*60},60%,50%)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{a.img}</div>
            <div>
              <div style={{ fontWeight:700, fontSize:13, color:"#111827" }}>{a.name}</div>
              <div style={{ fontSize:12, color:P, marginTop:2, fontWeight:600 }}>{a.role}</div>
              <div style={{ fontSize:11, color:G, marginTop:2 }}>{a.batch}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── MAIN ── */
export default function IITMadrasPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openFaq,   setOpenFaq]   = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case "Overview":    return <OverviewSection openFaq={openFaq} setOpenFaq={setOpenFaq} />;
      case "Courses":     return <CoursesSection />;
      case "Fees":        return <FeesSection />;
      case "Cut-offs":    return <CutoffSection />;
      case "Admissions":  return <AdmissionsSection />;
      case "Placements":  return <PlacementsSection />;
      case "Reviews":     return <ReviewsSection />;
      case "Facilities":  return <FacilitiesSection />;
      case "Notable Alumni": return <AlumniSection />;
      default: return (
        <Card>
          <div style={{ textAlign:"center", padding:40, color:G }}>
            <div style={{ fontSize:40, marginBottom:12 }}>🏗️</div>
            <div style={{ fontWeight:700, color:"#111827", fontSize:16, marginBottom:6 }}>{activeTab}</div>
            <div style={{ fontSize:13 }}>Content for {activeTab} section coming soon.</div>
          </div>
        </Card>
      );
    }
  };

  return (
    <div style={{ background:"#f3f4f6", minHeight:"100vh", fontFamily:"'Segoe UI',-apple-system,sans-serif", color:"#111827" }}>

      {/* STICKY HEADER */}
      <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:"#fff", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.06)" }}>

        {/* College banner */}
        <div style={{ padding:"10px 28px", display:"flex", alignItems:"center", gap:12, borderBottom:"1px solid #e5e7eb" }}>
          <div style={{ width:42, height:42, borderRadius:"50%", background:"#1a1a2e", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:8, fontWeight:900, color:"#fff", lineHeight:1.2, textAlign:"center" }}>IIT<br/>MDR</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:14, fontWeight:800, color:"#111827" }}>IIT Madras — Admission 2026, Cutoff, Courses, Fees, Placements, Ranking</div>
            <div style={{ fontSize:11, color:G, marginTop:1 }}>
              📍 Chennai, Tamil Nadu &nbsp;·&nbsp;
              <span style={{ color:"#f59e0b" }}>★★★★★</span>&nbsp;
              <strong>4.7</strong>/5 (129 Reviews) &nbsp;·&nbsp;
              <span style={{ color:P, cursor:"pointer" }}>551 Q&A</span> &nbsp;·&nbsp;
              Government &nbsp;·&nbsp; NIRF #1 Overall
            </div>
          </div>
          <div style={{ display:"flex", gap:8, flexShrink:0 }}>
            <button onClick={() => setShowModal(true)} style={{ background:O, color:"#fff", border:"none", borderRadius:6, padding:"8px 16px", fontWeight:700, fontSize:12, cursor:"pointer" }}>Enquire Brochure</button>
            <button style={{ background:"none", color:P, border:`1.5px solid ${P}`, borderRadius:6, padding:"7px 14px", fontWeight:600, fontSize:12, cursor:"pointer" }}>Compare</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", overflowX:"auto", background:"#fff", borderBottom:"2px solid #e5e7eb", padding:"0 24px" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              background:"none", border:"none", padding:"10px 15px", fontSize:13, cursor:"pointer", whiteSpace:"nowrap",
              fontWeight: t===activeTab ? 700 : 400,
              color: t===activeTab ? P : G,
              borderBottom: t===activeTab ? `2.5px solid ${P}` : "2.5px solid transparent",
              marginBottom:-2
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* spacer: banner~62px + tabs~42px = 104px */}
      <div style={{ height:104 }} />

      {/* BODY */}
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"18px 20px 50px", display:"flex", gap:20, alignItems:"flex-start" }}>

        {/* MAIN */}
        <div style={{ flex:1, minWidth:0, display:"flex", flexDirection:"column", gap:18 }}>
          <div style={{ fontSize:12, color:G, display:"flex", alignItems:"center", gap:5 }}>
            🕐 Updated on <strong>Mar 30 2026, 11:48 AM IST</strong> by&nbsp;<span style={{ color:P, cursor:"pointer" }}>Nakkal Varsha</span>
          </div>
          {renderContent()}
        </div>

        {/* SIDEBAR */}
        <div style={{ width:292, flexShrink:0, display:"flex", flexDirection:"column", gap:16 }}>

          {/* Applications open */}
          <div style={{ background:"#fff", borderRadius:10, border:"1px solid #e5e7eb", padding:16, boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:14, textAlign:"center" }}>Applications for Admissions are open.</div>
            {SIDEBAR_COLLEGES.map((c,i) => (
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"10px 0", borderBottom:i<2?"1px solid #f3f4f6":"none" }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:"#fff", fontSize:12, fontWeight:800 }}>{c.name[0]}</span>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:12, color:"#111827" }}>{c.name}</div>
                  <div style={{ fontSize:11, color:G, marginTop:2, lineHeight:1.4 }}>{c.desc}</div>
                </div>
                <button style={{ background:O, color:"#fff", border:"none", borderRadius:5, padding:"5px 9px", fontSize:11, fontWeight:700, cursor:"pointer", flexShrink:0 }}>✓ Apply</button>
              </div>
            ))}
            <button style={{ width:"100%", marginTop:10, background:"none", border:`1px solid ${O}`, color:O, borderRadius:6, padding:"7px", fontSize:12, fontWeight:600, cursor:"pointer" }}>View All Application Forms</button>
          </div>

          {/* Image Gallery */}
          <div style={{ background:"#fff", borderRadius:10, border:"1px solid #e5e7eb", padding:16, boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight:700, fontSize:14, color:P, marginBottom:10 }}>Image and Video Gallery</div>
            <div style={{ background:"linear-gradient(135deg,#1a1a2e,#0f3460)", borderRadius:8, height:88, display:"flex", alignItems:"center", justifyContent:"center", color:"#94a3b8", fontSize:12, cursor:"pointer" }}>🎥 IIT Madras Campus Tour</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:8 }}>
              {["🏛️ Main Gate","🌳 Forest Campus","🔬 Research Lab","🏊 Sports Complex"].map((img,i) => (
                <div key={i} style={{ background:"#f3f4f6", borderRadius:6, height:52, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:G, cursor:"pointer" }}>{img}</div>
              ))}
            </div>
          </div>

          {/* Quick Highlights */}
          <div style={{ background:"#fff", borderRadius:10, border:"1px solid #e5e7eb", padding:16, boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight:700, fontSize:14, color:P, marginBottom:10 }}>IIT Madras Highlights</div>
            {HIGHLIGHTS.slice(0,9).map(([k,v],i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:i<8?"1px solid #f3f4f6":"none", fontSize:12 }}>
                <span style={{ color:G, flexShrink:0, marginRight:8 }}>{k}</span>
                <span style={{ fontWeight:600, color:"#111827", textAlign:"right" }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Enquire */}
          <div style={{ background:"linear-gradient(135deg,#1a1a2e,#0f3460)", color:"#fff", borderRadius:10, padding:16 }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>Interested in IIT Madras?</div>
            <div style={{ fontSize:11, color:"#94a3b8", marginBottom:14 }}>Get updates on Eligibility, Admission, Placements &amp; Fees</div>
            {["Your Name","Mobile Number","Email Address"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display:"block", width:"100%", marginBottom:8, padding:"8px 10px", borderRadius:6, border:"1px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.08)", color:"#fff", fontSize:12, outline:"none", boxSizing:"border-box" }} />
            ))}
            <button onClick={() => setShowModal(true)} style={{ width:"100%", background:O, color:"#fff", border:"none", borderRadius:7, padding:"9px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Enquire Now</button>
          </div>

          {/* Compare */}
          <div style={{ background:"#fef3c7", borderRadius:10, border:"1px solid #fde68a", padding:14 }}>
            <div style={{ fontWeight:700, fontSize:13, color:"#92400e", marginBottom:6 }}>🔍 Compare with other IITs</div>
            <div style={{ fontSize:12, color:"#78350f", marginBottom:10 }}>IIT Madras vs IIT Bombay vs IIT Delhi — see the difference</div>
            <button style={{ width:"100%", background:"#f59e0b", color:"#fff", border:"none", borderRadius:7, padding:"8px", fontWeight:700, fontSize:12, cursor:"pointer" }}>Compare Now →</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:"#1a1a2e", color:"#94a3b8", textAlign:"center", padding:"14px", fontSize:12 }}>
        © 2026 IIT Madras College Profile · Updated Mar 30, 2026 · Data source: NIRF 2025, IIT Madras Official Website
      </div>

      {/* MODAL */}
      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background:"#fff", borderRadius:14, padding:28, width:380, maxWidth:"100%" }}>
            <h3 style={{ margin:"0 0 6px", fontSize:17, fontWeight:800 }}>Enquire About IIT Madras</h3>
            <p style={{ fontSize:12, color:G, margin:"0 0 18px" }}>Get admission details, brochure &amp; expert guidance — free</p>
            {["Full Name","Mobile Number","Email Address","Preferred Course (e.g. B.Tech CSE)"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display:"block", width:"100%", marginBottom:10, padding:"10px 12px", borderRadius:8, border:"1px solid #d1d5db", fontSize:13, outline:"none", boxSizing:"border-box" }} />
            ))}
            <button style={{ width:"100%", background:O, color:"#fff", border:"none", borderRadius:8, padding:11, fontWeight:700, fontSize:14, cursor:"pointer" }}>Submit Enquiry</button>
            <button onClick={() => setShowModal(false)} style={{ width:"100%", background:"none", border:"none", color:G, marginTop:8, cursor:"pointer", fontSize:12 }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}