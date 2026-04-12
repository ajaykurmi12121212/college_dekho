import { useState, useEffect } from "react";

/* ── COLORS ── */
const P = "#004aad"; // G.L. Bajaj Blue
const O = "#f37021"; // G.L. Bajaj Orange
const G = "#6b7280"; // Grey

/* ── DATA ── */
const TABS = ["Overview", "Courses", "Fees", "Cut-offs", "Admissions", "Placements", "Reviews", "Facilities", "Student Clubs"];

const NEWS = [
  "G.L. Bajaj strengthens its standing as a leading Innovation and Entrepreneurship Hub with 140 Startups valued at Rs. 500 Crore.",
  "Admissions for 2026 are open for B.Tech, MBA, and MCA programs based on national-level entrance exams.",
  "JEE Main 2026 session 2 exam will be held from April 2 to 9, 2026.",
  "G.L. Bajaj organized an International Conference on Next-Generation Communication and Computing.",
  "The institute hosted the Smart India Hackathon (SIH)-Hardware Edition 2025, promoting innovation among students.",
];

const STORIES = [
  { title: "GLBCRI becomes a hub for 140+ startups with a valuation of over Rs. 500 crore", emoji: "🚀" },
  { title: "Consistent top performer in AKTU results for the last eight years", emoji: "🏆" },
  { title: "NAAC 'A+' accreditation highlights excellence in institutional performance", emoji: "⭐" },
  { title: "QS I-Gauge Diamond Rating received for overall excellence in higher education", emoji: "💎" },
];

const SIDEBAR_COLLEGES = [
  { name: "Galgotias University...", desc: "Top-ranked private university in UP. Highest CTC: 1.5 CR | 850+ Recruiters", color: "#d90429" },
  { name: "Sharda University...", desc: "Globally recognized university with 200+ programs. NAAC A+ Accredited. Avg CTC 6.5 LPA", color: "#2563eb" },
  { name: "NIET Noida", desc: "Ranked among top engineering colleges. Highest CTC: 58 LPA | Accepts JEE Mains Score", color: "#7c3aed" },
];

const HIGHLIGHTS = [
  ["Established", "2007"],
  ["Exam Accepted", "JEE Main, CAT, MAT, CUET"],
  ["Total Courses", "15+ Courses across 3 streams"],
  ["Institute Type", "Private"],
  ["Affiliation", "Dr. A.P.J. Abdul Kalam Technical University (AKTU)"],
  ["Approval", "AICTE, Ministry of HRD"],
  ["Accreditation", "NAAC 'A+', NBA (Most Depts.)"],
  ["Ownership", "Private / Society"],
  ["Campus Size", "15 Acres"],
  ["NIRF Ranking (Engg)", "151-200 Band (2025)"],
  ["Highest Package (2025)", "₹58 LPA"],
  ["Average Package (2025)", "₹7.12 LPA"],
  ["Location", "Plot No. 2, Knowledge Park III, Greater Noida, UP"],
];

const NIRF_SCORES = [
  { cat:"Engineering", rank:"#151-200", score:"-", tlr:"-", rpc:"-", go:"-", oi:"-", perception:"-" },
  { cat:"Management (India Today)", rank:"#172", score:"-", tlr:"-", rpc:"-", go:"-", oi:"-", perception:"-" },
  { cat:"Overall (Engg - India Today)", rank:"#59", score:"-", tlr:"-", rpc:"-", go:"-", oi:"-", perception:"-" },
];

const BTECH_PLACEMENT = [
    { course:"Computer Science & Engineering", avg:"~₹7.5 LPA", median:"~₹5.0 LPA" },
    { course:"Information Technology", avg:"~₹7.0 LPA", median:"~₹4.8 LPA" },
    { course:"CSE (AI & ML)", avg:"~₹8.0 LPA", median:"~₹5.5 LPA" },
    { course:"Electronics & Communication", avg:"~₹6.0 LPA", median:"~₹4.2 LPA" },
    { course:"Mechanical Engineering", avg:"~₹5.5 LPA", median:"~₹4.0 LPA" },
];

const PG_PLACEMENT = [
  { course:"MBA", avg:"₹7.12 LPA", highest:"₹58 LPA" },
  { course:"MCA", avg:"~₹4.5 LPA", highest:"~₹12 LPA" },
];

const PLACEMENT_STATS = [
  ["Highest Package","₹58 LPA"],
  ["Average Package","₹7.12 LPA"],
  ["Median Package (UG)","₹4.50 LPA"],
  ["Placement Percentage","~90%"],
  ["Total Companies Visited","600+"],
  ["Total Offers Made (2023-24)","3000+"],
  ["Top Recruiter Packages","Palo Alto, Servicenow, Autodesk"],
  ["UG Students Placed (2024)", "853"],
];

const CUTOFFS = [
  { course:"Computer Science & Engineering", gen:"123916" },
  { course:"CSE (Artificial Intelligence & ML)", gen:"215335" },
  { course:"Information Technology", gen:"185210" },
  { course:"CSE (Data Science)", gen:"192044" },
  { course:"Electronics & Communication Engg", gen:"628449" },
  { course:"Electrical & Electronics Engg", gen:"2121452" },
  { course:"Mechanical Engineering", gen:"485227" },
];

const COURSES = [
  { name:"B.Tech Computer Science & Engineering", mode:"Full Time", seats:1260, fees:"₹4.22 L", exam:"JEE Main / CUET", duration:"4 Years" },
  { name:"B.Tech Artificial Intelligence & ML", mode:"Full Time", seats:"-", fees:"₹4.22 L", exam:"JEE Main / CUET", duration:"4 Years" },
  { name:"B.Tech Information Technology", mode:"Full Time", seats:"-", fees:"₹4.22 L", exam:"JEE Main / CUET", duration:"4 Years" },
  { name:"B.Tech Mechanical Engineering", mode:"Full Time", seats:"-", fees:"₹4.22 L", exam:"JEE Main / CUET", duration:"4 Years" },
  { name:"MBA (Master of Business Admin)", mode:"Full Time", seats:540, fees:"₹2.11 L", exam:"CAT / MAT / CUET-PG", duration:"2 Years" },
  { name:"MCA (Master of Computer App)", mode:"Full Time", seats:180, fees:"₹2.11 L", exam:"CUET-PG", duration:"2 Years" },
  { name:"M.Tech Computer Science & Engineering", mode:"Full Time", seats:18, fees:"₹2.11 L", exam:"GATE", duration:"2 Years" },
];

const FEES_DATA = [
  { prog:"B.Tech", tuition:"~₹1.5 Lakh/yr", hostel:"~₹90,000/yr", total:"₹4.22 L (4 yrs)", exam:"JEE Main, CUET" },
  { prog:"MBA", tuition:"~₹1.05 Lakh/yr", hostel:"~₹90,000/yr", total:"₹2.11 L (2 yrs)", exam:"CAT, MAT, CUET-PG" },
  { prog:"MCA", tuition:"~₹1.05 Lakh/yr", hostel:"~₹90,000/yr", total:"₹2.11 L (2 yrs)", exam:"CUET-PG" },
  { prog:"M.Tech", tuition:"-", hostel:"-", total:"₹2.11 L (2 yrs)", exam:"GATE" },
];

const SCHOLARSHIPS = [
    { name:"Merit Scholarship (12th Marks)", eligibility:"PCM > 90%", amount:"₹25,000" },
    { name:"Merit Scholarship (JEE Rank)", eligibility:"Rank < 50,000", amount:"₹50,000" },
    { name:"UPSEE Rank based Scholarship", eligibility:"Gen Rank < 1000", amount:"₹25,000" },
    { name:"University Toppers Scholarship", eligibility:"Top 3 in University", amount:"Full Tuition Fee Waiver" },
    { name:"Sibling Scholarship", eligibility:"Sibling studying in GLB", amount:"₹10,000" },
];

const ADMISSIONS = [
  { prog:"B.Tech", eligibility:"10+2 with 45% in PCM", exam:"JEE Main / CUET-UG", counselling:"UPTAC", seats:2280 },
  { prog:"B.Tech (Lateral)", eligibility:"3-yr Engg. Diploma / B.Sc", exam:"-", counselling:"UPTAC", seats:"-" },
  { prog:"MBA", eligibility:"Bachelor's degree with 50%", exam:"CAT / MAT / CUET-PG", counselling:"UPTAC / Direct", seats:540 },
  { prog:"MCA", eligibility:"Bachelor's degree (Maths)", exam:"CUET-PG", counselling:"UPTAC", seats:180 },
  { prog:"M.Tech", eligibility:"B.Tech/BE with 60%", exam:"GATE", counselling:"Direct", seats:18 },
];

const ADMISSION_DATES = [
  ["JEE Main 2026 Session 2 Exam", "April 2 - 9, 2026"],
  ["JEE Main 2026 Session 2 Result", "April 20, 2026"],
  ["CUET UG 2026 Exam", "May 11 - 31, 2026"],
  ["MAT 2026 (May PBT) Registration End", "May 25, 2026"],
  ["UPTAC Counselling (Tentative)", "Aug - Sep 2026"],
];

const REVIEWS = [
  { name:"Aman Singh", batch:"2025", course:"B.Tech CSE", rating:4, infra:4, acad:4, place:5, life:3,
    text:"Placements are the strongest point of this college. The highest package reached 58 LPA, and the average is around 7 LPA for CSE. The faculty is experienced, with many from IITs. However, college life is very strict with a 75% attendance rule, and it feels more like a school." },
  { name:"Priya Sharma", batch:"2024", course:"MBA", rating:4, infra:5, acad:4, place:4, life:4,
    text:"Good college for an MBA in the NCR region. The placement cell is very active and brings in many companies. The infrastructure is modern with well-maintained classrooms and a large library. The faculty is supportive and focuses on industry-relevant curriculum." },
  { name:"Rahul Verma", batch:"2023", course:"B.Tech IT", rating:3, infra:3, acad:4, place:4, life:2,
    text:"Academics and placements are quite good. Most students in IT and CSE get placed. The main drawback is the strict environment and lack of cultural fests. Timings are from 9 AM to 5 PM, which leaves little time for extracurriculars." },
];

const FAQS = [
  { q:"When was G.L. Bajaj established and what is its affiliation?",
    a:'G.L. Bajaj Institute of Technology and Management was established in 2007. It is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, and approved by AICTE.' },
  { q:"What is the NIRF ranking of G.L. Bajaj?",
    a:"G.L. Bajaj has been ranked in the 151-200 band among engineering institutions by the NIRF Rankings 2025." },
  { q:"What is the admission process for B.Tech at G.L. Bajaj?",
    a:"Admission to the B.Tech program is based on JEE Main or CUET-UG scores, followed by seat allotment through UPTAC counselling. Direct admissions under the management quota are also available based on merit." },
  { q:"What are the placement statistics for G.L. Bajaj?",
    a:"For 2025 placements, the highest package recorded was ₹58 LPA, with an average package of ₹7.12 LPA. Over 600 companies visited the campus, and top recruiters include Palo Alto, Amazon, and Accenture." },
];

const FACILITIES = [
  { name:"Central Library", desc:"Fully AC, Wi-Fi enabled with over 3 lakh books, open 18 hours a day" },
  { name:"Hostel", desc:"Separate well-furnished hostels for boys and girls with mess facilities" },
  { name:"IT Infrastructure", desc:"50+ computer labs, high-speed Wi-Fi across campus" },
  { name:"Cafeteria / Canteen", desc:"Multiple canteens offering a variety of food options" },
  { name:"Sports Complex", desc:"Grounds for cricket, football, volleyball, and badminton" },
  { name:"Auditorium", desc:"Large auditorium with a seating capacity of 900+ for events" },
  { name:"Medical / Hospital", desc:"On-campus medical facilities available for students" },
  { name:"Transport Facility", desc:"Bus service available for students from various parts of Delhi-NCR" },
];

const CLUBS = [
  { name:"Shrinik Club", role:"Technical Club", img:"🔧" },
  { name:"Navchetna Club", role:"Social Service Club", img:"🤝" },
  { name:"Google Developers Club", role:"Coding & Development", img:"💻" },
  { name:"Innovo Infinity Club", role:"Innovation & Entrepreneurship", img:"💡" },
  { name:"Literati Club", role:"Literary & Debating Society", img:"📚" },
  { name:"Codes Space Club", role:"Competitive Programming", img:"🏆" },
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


/* ── SECTION COMPONENTS ── */
function OverviewSection({ openFaq, setOpenFaq }) {
  return (
    <>
      {/* News */}
      <Card>
        <SecTitle>G.L. Bajaj (GLBITM) News and Notifications</SecTitle>
        {NEWS.map((n,i) => (
          <div key={i} style={{ display:"flex", gap:8, padding:"7px 0", borderBottom:i<NEWS.length-1?"1px solid #f3f4f6":"none", fontSize:13, color:"#374151", lineHeight:1.65 }}>
            <span style={{ color:P, flexShrink:0, marginTop:2 }}>▸</span><span>{n}</span>
          </div>
        ))}
      </Card>

      {/* Stories */}
      <Card>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <h3 style={{ margin:0, fontSize:16, fontWeight:800, color:"#111827" }}>College Success Stories</h3>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
          {STORIES.map((s,i) => (
            <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:8, overflow:"hidden", cursor:"pointer" }}>
              <div style={{ background:"linear-gradient(135deg,#004aad,#0f3460)", height:70, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>{s.emoji}</div>
              <div style={{ padding:"10px", fontSize:12, color:"#111827", lineHeight:1.5, fontWeight:500 }}>{s.title} <span style={{ color:P }}>›</span></div>
            </div>
          ))}
        </div>
      </Card>

      {/* About */}
      <Card>
        <SecTitle>About G.L. Bajaj (GLBITM)</SecTitle>
        <p style={{ fontSize:13, lineHeight:1.85, color:"#374151", margin:"0 0 10px" }}>
          G.L. Bajaj Institute of Technology and Management (GLBITM) is a leading private institution in Greater Noida, established in <strong>2007</strong>. It is affiliated with <strong>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</strong> and has received <strong>NAAC 'A+'</strong> accreditation. The institute is known for its strong academic performance and excellent placement records.
        </p>
        <ul style={{ margin:0, padding:"0 0 0 18px", fontSize:13, lineHeight:1.95, color:"#374151" }}>
          <li><strong>NIRF 2025:</strong> Ranked in 151-200 band for Engineering.</li>
          <li><strong>Accreditation:</strong> NAAC 'A+' & NBA for CSE, IT, ECE, ME, and EE.</li>
          <li><strong>Placements 2025:</strong> Highest Package ₹58 LPA · Average Package ₹7.12 LPA.</li>
          <li><strong>Top Recruiters:</strong> Palo Alto, Amazon, Accenture, Capgemini, Bosch.</li>
          <li><strong>Admissions:</strong> JEE Main / CUET (B.Tech), CAT / MAT / CUET-PG (MBA).</li>
        </ul>
      </Card>

      {/* FAQs */}
      <Card>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
          <span style={{ fontSize:28 }}>💬</span>
          <div>
            <div style={{ fontWeight:800, fontSize:16, color:"#111827" }}>Commonly Asked Questions</div>
            <div style={{ fontSize:12, color:G }}>On G.L. Bajaj (GLBITM)</div>
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
        <SecTitle>G.L. Bajaj (GLBITM) Highlights</SecTitle>
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
        <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>NIRF & Other Rankings 2025</div>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:20 }}>
          {NIRF_SCORES.map((r,i) => (
            <div key={i} style={{ border:`2px solid ${P}`, borderRadius:10, padding:"14px 18px", textAlign:"center", flex:"1 1 130px" }}>
              <div style={{ fontSize:26, fontWeight:900, color:P }}>{r.rank}</div>
              <div style={{ fontSize:13, fontWeight:700, color:"#111827", marginTop:4 }}>{r.cat}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function CoursesSection() {
    const [filter, setFilter] = useState("All");
    const types = ["All","B.Tech","M.Tech","MBA","MCA"];
    const filtered = filter==="All" ? COURSES : COURSES.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <Card>
            <SecTitle>Courses offered by G.L. Bajaj (GLBITM)</SecTitle>
            <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
                G.L. Bajaj offers UG and PG courses in Engineering and Management, including B.Tech, M.Tech, MBA, and MCA.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
                {types.map(t => (
                  <span key={t} onClick={() => setFilter(t)} style={{ background:filter===t?P:"#e0eafb", color:filter===t?"#fff":P, fontSize:12, fontWeight:600, padding:"5px 14px", borderRadius:20, border:`1px solid ${P}40`, cursor:"pointer" }}>{t}</span>
                ))}
            </div>
            {filtered.map((c,i) => (
                <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:8, padding:"13px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8, marginBottom:8 }}>
                    <div>
                        <div style={{ fontWeight:700, fontSize:13, color:P }}>{c.name}</div>
                        <div style={{ fontSize:11, color:G, marginTop:3 }}>{c.mode} &nbsp;|&nbsp; Duration: {c.duration} &nbsp;|&nbsp; Exam: {c.exam}</div>
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
      <SecTitle>G.L. Bajaj Fees Structure 2026</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
        G.L. Bajaj B.Tech fees are approximately <strong>₹4.22 Lakhs</strong> for 4 years. MBA and MCA fees are around <strong>₹2.11 Lakhs</strong> for 2 years. Hostel fees are additional. Scholarships are available for meritorious students.
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
      
      {/* Scholarships */}
      <div style={{ marginTop:20 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:10 }}>G.L. Bajaj Scholarships 2026</div>
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
            <SecTitle>G.L. Bajaj JEE Main Cutoff 2025</SecTitle>
            <p style={{ fontSize:13, color:"#374151", lineHeight:1.7, marginBottom:14 }}>
                The table shows closing ranks for G.L. Bajaj from UPTAC counselling based on JEE Main scores. The cutoff for B.Tech CSE for the General category was around <strong>123916</strong>.
            </p>
            <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                    <thead>
                        <tr style={{ background:"#1a1a2e", color:"#fff" }}>
                            <th style={{ padding:"9px 12px", textAlign:"left", fontWeight:700 }}>Course</th>
                            <th style={{ padding:"9px 12px", textAlign:"left", fontWeight:700 }}>JEE Main Closing Rank (General)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CUTOFFS.map((c,i) => (
                            <tr key={i} style={{ background:i%2===0?"#fff":"#f9fafb" }}>
                                <td style={{ padding:"9px 12px", fontWeight:600, color:"#111827", minWidth:240 }}>{c.course}</td>
                                <td style={{ padding:"9px 12px", fontWeight:700, color:"#dc2626" }}>{c.gen}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

function AdmissionsSection() {
  return (
    <Card>
      <SecTitle>G.L. Bajaj Admissions 2026</SecTitle>
      <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
        G.L. Bajaj admissions are primarily based on national-level entrance exams. JEE Main is required for B.Tech, and CAT/MAT for MBA. Counselling is done through UPTAC.
      </p>
      
      {/* Eligibility table */}
      <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>Eligibility & Selection Criteria</div>
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
    </Card>
  );
}

function PlacementsSection() {
    return (
        <Card>
            <SecTitle>G.L. Bajaj Placements 2025</SecTitle>
            <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
                G.L. Bajaj has an excellent placement record, with <strong>600+ companies</strong> visiting the campus. The highest package in 2025 was <strong>₹58 LPA</strong>, with an average of <strong>₹7.12 LPA</strong>.
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
            <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>B.Tech Placements 2025 (Branch-wise)</div>
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
            {/* Top Recruiters */}
            <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:10 }}>Top Recruiters 2025</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["Palo Alto", "Amazon", "Accenture", "Capgemini", "Wipro", "TCS", "Infosys", "Bosch", "Cognizant", "HCL", "Mindtree", "Tech Mahindra"].map(r => (
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
                <SecTitle noGap>Student Reviews for G.L. Bajaj (GLBITM)</SecTitle>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:32, fontWeight:900, color:"#111827" }}>4.1</span>
                    <div><Stars n={4.1} /><div style={{ fontSize:11, color:G }}>100+ Reviews</div></div>
                </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 20px", marginBottom:18 }}>
                {[["College Infrastructure",4.2],["Academics",4.3],["Placements",4.5],["Value for Money",3.9],["Campus Life",3.5]].map(([l,v]) => (
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
                </div>
            ))}
        </Card>
    );
}

function FacilitiesSection() {
    return (
        <Card>
            <SecTitle>G.L. Bajaj Campus Facilities</SecTitle>
            <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
                The G.L. Bajaj campus is spread over 15 acres and provides modern facilities for a conducive learning environment, including a large library, hostels, and sports complexes.
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

function ClubsSection() {
    return (
        <Card>
            <SecTitle>Student Clubs at G.L. Bajaj</SecTitle>
            <p style={{ fontSize:13, color:"#374151", lineHeight:1.75, marginBottom:14 }}>
                G.L. Bajaj encourages extracurricular activities through various technical and cultural student-run clubs.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
                {CLUBS.map((a,i) => (
                    <div key={i} style={{ border:"1px solid #e5e7eb", borderRadius:10, padding:"14px 16px", display:"flex", gap:12, alignItems:"center" }}>
                        <div style={{ width:44, height:44, borderRadius:"50%", background:`hsl(${i*60},70%,90%)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{a.img}</div>
                        <div>
                            <div style={{ fontWeight:700, fontSize:13, color:"#111827" }}>{a.name}</div>
                            <div style={{ fontSize:12, color:P, marginTop:2, fontWeight:600 }}>{a.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}


/* ── MAIN ── */
export default function GLBajajPage() {
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
      case "Overview":   return <OverviewSection openFaq={openFaq} setOpenFaq={setOpenFaq} />;
      case "Courses":    return <CoursesSection />;
      case "Fees":       return <FeesSection />;
      case "Cut-offs":   return <CutoffSection />;
      case "Admissions": return <AdmissionsSection />;
      case "Placements": return <PlacementsSection />;
      case "Reviews":    return <ReviewsSection />;
      case "Facilities": return <FacilitiesSection />;
      case "Student Clubs": return <ClubsSection />;
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
          <div style={{ width:42, height:42, borderRadius:"50%", background:P, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, border: "2px solid #fff", boxShadow: "0 0 5px rgba(0,0,0,0.2)"}}>
            <span style={{ fontSize:12, fontWeight:900, color:"#fff" }}>GLB</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:14, fontWeight:800, color:"#111827" }}>G.L. Bajaj - Admission 2026, Cutoff, Courses, Fees, Placements</div>
            <div style={{ fontSize:11, color:G, marginTop:1 }}>
              📍 Greater Noida, UP &nbsp;·&nbsp;
              <span style={{ color:"#f59e0b" }}>★★★★☆</span>&nbsp;
              <strong>4.1</strong>/5 (100+ Reviews) &nbsp;·&nbsp;
              <span style={{ color:P, cursor:"pointer" }}>200+ Q&A</span> &nbsp;·&nbsp;
              Private &nbsp;·&nbsp; NIRF #151-200
            </div>
          </div>
          <div style={{ display:"flex", gap:8, flexShrink:0 }}>
            <button onClick={() => setShowModal(true)} style={{ background:O, color:"#fff", border:"none", borderRadius:6, padding:"8px 16px", fontWeight:700, fontSize:12, cursor:"pointer" }}>Apply Now</button>
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

      <div style={{ height:104 }} />

      {/* BODY */}
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"18px 20px 50px", display:"flex", gap:20, alignItems:"flex-start" }}>
        {/* MAIN */}
        <div style={{ flex:1, minWidth:0, display:"flex", flexDirection:"column", gap:18 }}>
          <div style={{ fontSize:12, color:G, display:"flex", alignItems:"center", gap:5 }}>
            🕐 Updated on <strong>Apr 10 2026, 09:30 AM IST</strong>
          </div>
          {renderContent()}
        </div>

        {/* SIDEBAR */}
        <div style={{ width:292, flexShrink:0, display:"flex", flexDirection:"column", gap:16, position:"sticky", top:120 }}>
          {/* Applications open */}
          <div style={{ background:"#fff", borderRadius:10, border:"1px solid #e5e7eb", padding:16, boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontWeight:700, fontSize:14, color:"#111827", marginBottom:14, textAlign:"center" }}>Admissions Open (Nearby Colleges)</div>
            {SIDEBAR_COLLEGES.map((c,i) => (
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"10px 0", borderBottom:i<2?"1px solid #f3f4f6":"none" }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ color:"#fff", fontSize:12, fontWeight:800 }}>{c.name[0]}</span>
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:12, color:"#111827" }}>{c.name}</div>
                  <div style={{ fontSize:11, color:G, marginTop:2, lineHeight:1.4 }}>{c.desc}</div>
                </div>
                <button style={{ background:O, color:"#fff", border:"none", borderRadius:5, padding:"5px 9px", fontSize:11, fontWeight:700, cursor:"pointer", flexShrink:0 }}>✓ Apply</button>
              </div>
            ))}
          </div>
          {/* Enquire */}
          <div style={{ background:"linear-gradient(135deg,#1a1a2e,#0f3460)", color:"#fff", borderRadius:10, padding:16 }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>Interested in G.L. Bajaj?</div>
            <div style={{ fontSize:11, color:"#94a3b8", marginBottom:14 }}>Get updates on Eligibility, Admission & Fees</div>
            {["Your Name","Mobile Number","Email Address"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display:"block", width:"100%", boxSizing:"border-box", marginBottom:8, padding:"8px 10px", borderRadius:6, border:"1px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.08)", color:"#fff", fontSize:12 }} />
            ))}
            <button onClick={() => setShowModal(true)} style={{ width:"100%", background:O, color:"#fff", border:"none", borderRadius:7, padding:"9px", fontWeight:700, fontSize:13, cursor:"pointer" }}>Enquire Now</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:"#1a1a2e", color:"#94a3b8", textAlign:"center", padding:"14px", fontSize:12 }}>
        © 2026 G.L. Bajaj College Profile · Updated Apr 10, 2026 · Data source: Official Website & NIRF 2025
      </div>

      {/* MODAL */}
      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background:"#fff", borderRadius:14, padding:28, width:380, maxWidth:"100%" }}>
            <h3 style={{ margin:"0 0 6px", fontSize:17, fontWeight:800 }}>Enquire About G.L. Bajaj</h3>
            <p style={{ fontSize:12, color:G, margin:"0 0 18px" }}>Get admission details, brochure & expert guidance — free</p>
            {["Full Name","Mobile Number","Email Address","Preferred Course (e.g. B.Tech CSE)"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display:"block", width:"100%", boxSizing:"border-box", marginBottom:10, padding:"10px 12px", borderRadius:8, border:"1px solid #d1d5db", fontSize:13 }} />
            ))}
            <button style={{ width:"100%", background:O, color:"#fff", border:"none", borderRadius:8, padding:11, fontWeight:700, fontSize:14, cursor:"pointer" }}>Submit Enquiry</button>
            <button onClick={() => setShowModal(false)} style={{ width:"100%", background:"none", border:"none", color:G, marginTop:8, cursor:"pointer", fontSize:12 }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
