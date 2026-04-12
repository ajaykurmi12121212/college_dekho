import { useState, useRef } from "react";

import Navbar from "../component/Navbar";

// ─── DATA ────────────────────────────────────────────────────────────────────

const latestNews = [
  { id: 1, title: "JEE Main 2026 April 2 Shift 1 Analysis: Paper 'easy to moderate'", time: "April 2, 2026, 01:16 PM IST", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&q=70" },
  { id: 2, title: "JKCET 2026 registration deadline extended to April 3 for BE, BTech…", time: "April 2, 2026, 11:28 AM IST", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=120&q=70" },
  { id: 3, title: "NID declares DAT prelims 2026 result at admissions.nid.edu;…", time: "April 2, 2026, 11:17 AM IST", img: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=120&q=70" },
  { id: 4, title: "NEET UG 2026 registration begins: Steps to apply at neet.nta.nic.in", time: "April 2, 2026, 10:05 AM IST", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&q=70" },
  { id: 5, title: "CAT 2026 notification expected in August, registration to open soon", time: "April 2, 2026, 09:30 AM IST", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=120&q=70" },
  { id: 6, title: "CUET UG 2026: Application form correction window opens today", time: "April 2, 2026, 08:55 AM IST", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&q=70" },
];

const courses = [
  { icon: "⚙️", name: "B.Tech / BE", count: "3,200+ Colleges" },
  { icon: "💼", name: "MBA / PGDM", count: "2,100+ Colleges" },
  { icon: "🏥", name: "MBBS / Medical", count: "560+ Colleges" },
  { icon: "⚖️", name: "LLB / Law", count: "840+ Colleges" },
  { icon: "💻", name: "BCA / MCA", count: "1,800+ Colleges" },
  { icon: "🎨", name: "Design / Fashion", count: "420+ Colleges" },
  { icon: "📊", name: "B.Com / Finance", count: "2,600+ Colleges" },
  { icon: "🎓", name: "B.Ed / Teaching", count: "1,100+ Colleges" },
];

const topColleges = [
  { name: "IIT Delhi", location: "New Delhi", rating: 4.8, type: "Engineering", rank: "#1 NIRF", fees: "₹2.2L/yr", badge: "Top Ranked" },
  { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", rating: 4.9, type: "Management", rank: "#1 MBA", fees: "₹25L/yr", badge: "Premier" },
  { name: "AIIMS Delhi", location: "New Delhi", rating: 4.9, type: "Medical", rank: "#1 Medical", fees: "₹1.6L/yr", badge: "Govt." },
  { name: "NLSIU Bangalore", location: "Bengaluru, Karnataka", rating: 4.7, type: "Law", rank: "#1 Law", fees: "₹3.2L/yr", badge: "Top Law" },
  { name: "NIT Trichy", location: "Tiruchirappalli, TN", rating: 4.6, type: "Engineering", rank: "#8 NIRF", fees: "₹1.8L/yr", badge: "NIT" },
  { name: "SRCC Delhi", location: "New Delhi", rating: 4.5, type: "Commerce", rank: "#1 Commerce", fees: "₹22K/yr", badge: "Top DU" },
];

const upcomingExams = [
  { name: "JEE Main 2026", date: "Apr 2–8, 2026", stream: "Engineering", color: "#1a73e8" },
  { name: "NEET UG 2026", date: "May 4, 2026", stream: "Medical", color: "#e53935" },
  { name: "CAT 2026", date: "Nov 2026", stream: "MBA", color: "#6d4c41" },
  { name: "CLAT 2026", date: "Dec 1, 2026", stream: "Law", color: "#2e7d32" },
  { name: "GATE 2027", date: "Feb 2027", stream: "M.Tech", color: "#6a1b9a" },
  { name: "CUET UG 2026", date: "May 2026", stream: "UG Courses", color: "#f57f17" },
];

const predictors = [
  { icon: "🏫", title: "College Predictor", desc: "JEE / NEET rank daalo aur probable colleges ka list dekho", color: "#1a73e8", bg: "#eff6ff", border: "#bfdbfe", cta: "Predict My College" },
  { icon: "📈", title: "Rank Predictor", desc: "Mock test score se actual exam rank estimate karo", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe", cta: "Predict My Rank" },
  { icon: "🎯", title: "Cut-off Predictor", desc: "Previous year data se expected cut-off pata karo", color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc", cta: "Check Cut-offs" },
  { icon: "💰", title: "Scholarship Finder", desc: "Eligibility ke hisaab se scholarship dhundho", color: "#059669", bg: "#f0fdf4", border: "#a7f3d0", cta: "Find Scholarships" },
];

const trendingCourses = [
  { icon: "🤖", name: "Artificial Intelligence & ML", enrolled: "1.2L+ Students", level: "UG / PG", hot: true },
  { icon: "💻", name: "Full Stack Web Development", enrolled: "98K+ Students", level: "Certificate", hot: true },
  { icon: "📊", name: "Data Science & Analytics", enrolled: "85K+ Students", level: "PG Diploma", hot: false },
  { icon: "☁️", name: "Cloud Computing (AWS/Azure)", enrolled: "72K+ Students", level: "Certificate", hot: true },
  { icon: "🔒", name: "Cyber Security", enrolled: "61K+ Students", level: "UG / PG", hot: false },
  { icon: "📱", name: "Mobile App Development", enrolled: "55K+ Students", level: "Certificate", hot: false },
];

const trendingCertificates = [
  { name: "Google Data Analytics", provider: "Google", duration: "6 Months", rating: 4.8, color: "#4285f4" },
  { name: "AWS Solutions Architect", provider: "Amazon", duration: "3 Months", rating: 4.7, color: "#ff9900" },
  { name: "PMP Certification", provider: "PMI", duration: "4 Months", rating: 4.6, color: "#0d47a1" },
  { name: "Digital Marketing", provider: "Meta", duration: "5 Months", rating: 4.5, color: "#0866ff" },
  { name: "UX Design Certificate", provider: "Google", duration: "6 Months", rating: 4.7, color: "#34a853" },
  { name: "Chartered Financial Analyst", provider: "CFA Institute", duration: "18 Months", rating: 4.9, color: "#1a73e8" },
];

const trendingSpecializations = [
  { icon: "🧬", name: "Biomedical Engineering", tag: "Emerging" },
  { icon: "⚡", name: "EV & Renewable Energy", tag: "Hot" },
  { icon: "🏗️", name: "Urban Planning & Smart Cities", tag: "Trending" },
  { icon: "🎮", name: "Game Design & Development", tag: "Popular" },
  { icon: "🌐", name: "International Business", tag: "Trending" },
  { icon: "🧠", name: "Neuro-Psychology", tag: "Emerging" },
  { icon: "📡", name: "Space Technology", tag: "Hot" },
  { icon: "🌱", name: "Environmental Law", tag: "Trending" },
];

const ourProducts = [
  { icon: "⚖️", title: "College Compare", desc: "2 ya zyada colleges ko fees, placement aur rating ke basis pe compare karo", color: "#1a73e8", bg: "#eff6ff", cta: "Compare Now" },
  { icon: "⭐", title: "College Reviews", desc: "4 Lakh+ verified student reviews padho aur sahi college chuno", color: "#f59e0b", bg: "#fffbeb", cta: "Read Reviews" },
  { icon: "🌍", title: "Study Abroad", desc: "USA, UK, Canada mein admission ke liye free counselling lo", color: "#0891b2", bg: "#ecfeff", cta: "Explore Abroad" },
  { icon: "🤝", title: "Career Counselling", desc: "Expert se 1-on-1 free career guidance session book karo", color: "#7c3aed", bg: "#f5f3ff", cta: "Book Session" },
];

const stats = [
  { value: "25,000+", label: "Colleges Listed" },
  { value: "1.8 Lakh+", label: "Courses Available" },
  { value: "550+", label: "Entrance Exams" },
  { value: "40 Lakh+", label: "Students Helped" },
];

const testimonials = [
  { name: "Rahul Sharma", college: "IIT Delhi, B.Tech CSE", text: "Admission Chalo ki wajah se mujhe sahi guidance mili. College Predictor ne exact colleges suggest kiye jo mujhe mil bhi gaye!", avatar: "RS", color: "#1a73e8" },
  { name: "Priya Singh", college: "AIIMS Delhi, MBBS", text: "NEET ke baad mujhe samajh nahi aa raha tha ki kaunsa college choose karun. Yahan ke experts ne bahut help ki!", avatar: "PS", color: "#e53935" },
  { name: "Arjun Patel", college: "IIM Ahmedabad, MBA", text: "CAT preparation se leke final admission tak, Admission Chalo mere saath tha. Best platform for MBA aspirants!", avatar: "AP", color: "#6d4c41" },
];

const popularCities = [
  { name: "Delhi NCR", colleges: "1,200+", icon: "🏛️" },
  { name: "Mumbai", colleges: "980+", icon: "🌆" },
  { name: "Bengaluru", colleges: "850+", icon: "💻" },
  { name: "Chennai", colleges: "720+", icon: "🏖️" },
  { name: "Hyderabad", colleges: "680+", icon: "🔬" },
  { name: "Pune", colleges: "640+", icon: "📚" },
  { name: "Kolkata", colleges: "590+", icon: "🎭" },
  { name: "Ahmedabad", colleges: "430+", icon: "💼" },
];

const streamBadgeColors = {
  Engineering: { bg: "#e3f2fd", text: "#0d47a1" },
  Medical: { bg: "#fce4ec", text: "#880e4f" },
  MBA: { bg: "#ede7f6", text: "#4527a0" },
  Law: { bg: "#e8f5e9", text: "#1b5e20" },
  "M.Tech": { bg: "#f3e5f5", text: "#4a148c" },
  "UG Courses": { bg: "#fff8e1", text: "#e65100" },
  Management: { bg: "#ede7f6", text: "#4527a0" },
  Commerce: { bg: "#e0f7fa", text: "#006064" },
};

const tagColors = {
  Hot: { bg: "#fef2f2", text: "#dc2626" },
  Emerging: { bg: "#f0fdf4", text: "#166534" },
  Trending: { bg: "#eff6ff", text: "#1d4ed8" },
  Popular: { bg: "#fdf4ff", text: "#7e22ce" },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function StarRating({ rating }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 13 }}>
      {"★".repeat(Math.floor(rating))}
      <span style={{ color: "#94a3b8", marginLeft: 4, fontSize: 12 }}>{rating}</span>
    </span>
  );
}

function SectionHeader({ title, subtitle, link }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a3a5c", margin: 0 }}>{title}</h2>
        {subtitle && <p style={{ color: "#64748b", fontSize: 14, margin: "4px 0 0" }}>{subtitle}</p>}
      </div>
      {link && <a href="#" style={{ color: "#1a73e8", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{link} →</a>}
    </div>
  );
}

// ─── NEWS COMPONENT ───────────────────────────────────────────────────────────

function NewsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #e2e8f0", marginBottom: 44, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px 14px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1a3a5c", margin: 0 }}>Latest News and Notifications</h2>
        <a href="#" style={{ color: "#1a73e8", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>View All</a>
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <button onClick={() => scroll(-1)}
          style={{ position: "absolute", left: 10, zIndex: 10, width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #e2e8f0", background: "#fff", cursor: "pointer", fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.10)", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>‹</button>
        <div ref={scrollRef}
          style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", padding: "0 46px", scrollSnapType: "x mandatory" }}>
          {latestNews.map((news, i) => (
            <div key={news.id}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", minWidth: 330, borderRight: i < latestNews.length - 1 ? "1px solid #f1f5f9" : "none", scrollSnapAlign: "start", cursor: "pointer", transition: "background 0.15s", flexShrink: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <img src={news.img} alt="" style={{ width: 72, height: 56, objectFit: "cover", borderRadius: 8, flexShrink: 0, background: "#e2e8f0" }} onError={e => e.target.style.display = "none"} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#1e293b", lineHeight: 1.45 }}>{news.title}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 5 }}>{news.time}</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(1)}
          style={{ position: "absolute", right: 10, zIndex: 10, width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #e2e8f0", background: "#fff", cursor: "pointer", fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.10)", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>›</button>
      </div>
    </div>
  );
}

// ─── COLLEGE PREDICTOR MODAL ──────────────────────────────────────────────────

function CollegePredictorModal({ onClose }) {
  const [exam, setExam] = useState("JEE Main");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("General");
  const [results, setResults] = useState(null);

  const jeeColleges = {
    General: [
      { name: "IIT Bombay", branch: "Computer Science", cutoff: "Under 100", chance: 95 },
      { name: "IIT Delhi", branch: "Computer Science", cutoff: "Under 200", chance: 88 },
      { name: "IIT Madras", branch: "Computer Science", cutoff: "Under 300", chance: 82 },
      { name: "NIT Trichy", branch: "Computer Science", cutoff: "Under 5,000", chance: 75 },
      { name: "BITS Pilani", branch: "Computer Science", cutoff: "Under 8,000", chance: 68 },
      { name: "NIT Warangal", branch: "Computer Science", cutoff: "Under 10,000", chance: 60 },
    ],
    OBC: [
      { name: "IIT Bombay", branch: "Mechanical Engineering", cutoff: "Under 500", chance: 90 },
      { name: "IIT Delhi", branch: "Civil Engineering", cutoff: "Under 800", chance: 85 },
      { name: "IIT Roorkee", branch: "Computer Science", cutoff: "Under 1,500", chance: 78 },
      { name: "NIT Calicut", branch: "Computer Science", cutoff: "Under 7,000", chance: 70 },
    ],
    SC: [
      { name: "IIT Bombay", branch: "Any Branch", cutoff: "Under 2,000", chance: 92 },
      { name: "IIT Delhi", branch: "Any Branch", cutoff: "Under 3,000", chance: 88 },
      { name: "IIT Madras", branch: "Any Branch", cutoff: "Under 4,000", chance: 84 },
    ],
  };

  const predict = () => {
    const r = parseInt(rank);
    if (!r || r <= 0) return;
    const list = jeeColleges[category] || jeeColleges.General;
    const filtered = list.filter((_, i) => {
      if (r < 500) return true;
      if (r < 5000) return i >= 1;
      if (r < 15000) return i >= 3;
      return i >= 4;
    });
    setResults(filtered);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px 16px", borderBottom: "1px solid #f1f5f9" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: 800, fontSize: 18, color: "#1a3a5c" }}>🏫 College Predictor</h3>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>Apna rank daalo, colleges pata karo</p>
          </div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid #e2e8f0", background: "#f8fafc", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>EXAM</label>
              <select value={exam} onChange={e => setExam(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", cursor: "pointer" }}>
                <option>JEE Main</option>
                <option>JEE Advanced</option>
                <option>NEET UG</option>
                <option>CAT</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>CATEGORY</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", cursor: "pointer" }}>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>EWS</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>YOUR RANK / SCORE</label>
            <input type="number" placeholder="e.g. 5000" value={rank} onChange={e => setRank(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
          </div>
          <button onClick={predict}
            style={{ width: "100%", padding: "12px", background: "#1a73e8", color: "#fff", border: "none", borderRadius: 10, fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
            🔮 Predict My Colleges
          </button>

          {results && (
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 12 }}>PROBABLE COLLEGES FOR RANK {rank}</div>
              {results.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", borderRadius: 10, padding: "14px 16px", marginBottom: 10, border: "1px solid #e2e8f0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{c.branch} • Cutoff: {c.cutoff}</div>
                    </div>
                    <div style={{ background: c.chance > 80 ? "#f0fdf4" : c.chance > 60 ? "#fffbeb" : "#fef2f2", color: c.chance > 80 ? "#166534" : c.chance > 60 ? "#92400e" : "#dc2626", fontSize: 12, fontWeight: 800, padding: "3px 10px", borderRadius: 20 }}>
                      {c.chance}% chance
                    </div>
                  </div>
                  <div style={{ marginTop: 10, background: "#e2e8f0", borderRadius: 4, height: 6, overflow: "hidden" }}>
                    <div style={{ width: `${c.chance}%`, height: "100%", background: c.chance > 80 ? "#22c55e" : c.chance > 60 ? "#f59e0b" : "#ef4444", borderRadius: 4, transition: "width 0.5s" }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 8, textAlign: "center" }}>* Predictions based on previous year data. Actual results may vary.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── COMPARE MODAL ────────────────────────────────────────────────────────────

function CompareModal({ onClose }) {
  const [selected, setSelected] = useState(["IIT Delhi", "NIT Trichy"]);

  const compareData = {
    "IIT Delhi": { fees: "₹2.2L/yr", rating: 4.8, placement: "₹25 LPA avg", nirf: 2, intake: 1000, hostel: "Yes", research: "Excellent", acceptRate: "0.1%" },
    "IIM Ahmedabad": { fees: "₹25L/yr", rating: 4.9, placement: "₹35 LPA avg", nirf: 1, intake: 400, hostel: "Yes", research: "Excellent", acceptRate: "0.08%" },
    "AIIMS Delhi": { fees: "₹1.6L/yr", rating: 4.9, placement: "₹18 LPA avg", nirf: 1, intake: 107, hostel: "Yes", research: "Outstanding", acceptRate: "0.05%" },
    "NIT Trichy": { fees: "₹1.8L/yr", rating: 4.6, placement: "₹18 LPA avg", nirf: 8, intake: 1200, hostel: "Yes", research: "Good", acceptRate: "1%" },
    "NLSIU Bangalore": { fees: "₹3.2L/yr", rating: 4.7, placement: "₹22 LPA avg", nirf: 1, intake: 120, hostel: "Yes", research: "Very Good", acceptRate: "0.5%" },
    "SRCC Delhi": { fees: "₹22K/yr", rating: 4.5, placement: "₹12 LPA avg", nirf: 1, intake: 500, hostel: "No", research: "Good", acceptRate: "5%" },
  };

  const allColleges = Object.keys(compareData);
  const rows = [
    { label: "Fees", key: "fees" },
    { label: "Rating", key: "rating" },
    { label: "Avg Placement", key: "placement" },
    { label: "NIRF Rank", key: "nirf" },
    { label: "Intake", key: "intake" },
    { label: "Hostel", key: "hostel" },
    { label: "Research", key: "research" },
    { label: "Accept Rate", key: "acceptRate" },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 700, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px 16px", borderBottom: "1px solid #f1f5f9" }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: 800, fontSize: 18, color: "#1a3a5c" }}>⚖️ College Compare</h3>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>2 colleges choose karo aur compare karo</p>
          </div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid #e2e8f0", background: "#f8fafc", cursor: "pointer", fontSize: 16 }}>×</button>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[0, 1].map(idx => (
              <div key={idx}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>COLLEGE {idx + 1}</label>
                <select value={selected[idx]} onChange={e => { const n = [...selected]; n[idx] = e.target.value; setSelected(n); }}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #1a73e8", fontSize: 14, outline: "none", cursor: "pointer", fontWeight: 600 }}>
                  {allColleges.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            ))}
          </div>

          <div style={{ border: "1.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
              <div style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: "#64748b" }}>PARAMETER</div>
              {selected.map((col, i) => (
                <div key={i} style={{ padding: "12px 16px", fontSize: 13, fontWeight: 800, color: "#1a3a5c", borderLeft: "1px solid #e2e8f0" }}>{col}</div>
              ))}
            </div>
            {rows.map((row, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", borderBottom: ri < rows.length - 1 ? "1px solid #f1f5f9" : "none", background: ri % 2 === 0 ? "#fff" : "#fafafa" }}>
                <div style={{ padding: "11px 16px", fontSize: 13, color: "#64748b", fontWeight: 600 }}>{row.label}</div>
                {selected.map((col, ci) => (
                  <div key={ci} style={{ padding: "11px 16px", fontSize: 13, color: "#1e293b", fontWeight: 500, borderLeft: "1px solid #f1f5f9" }}>
                    {compareData[col]?.[row.key] ?? "—"}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── COUNSELLING MODAL ────────────────────────────────────────────────────────

function CounsellingModal({ onClose }) {
 
  const [form, setForm] = useState({ name: "", phone: "", stream: "", exam: "", score: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 460, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ background: "linear-gradient(135deg, #1a3a5c, #1a73e8)", borderRadius: "20px 20px 0 0", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🎓</div>
          <h3 style={{ margin: 0, fontWeight: 800, fontSize: 20, color: "#fff" }}>Free Expert Counselling</h3>
          <p style={{ margin: "6px 0 0", fontSize: 14, color: "#bfdbfe" }}>India ke top counsellors se seedha baat karo</p>
        </div>

        <div style={{ padding: 24 }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
              <h4 style={{ fontWeight: 800, color: "#1a3a5c", margin: "0 0 8px" }}>Request Submitted!</h4>
              <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px" }}>Hamare expert <strong>{form.phone}</strong> pe 2 ghante mein call karenge.</p>
              <button onClick={onClose} style={{ background: "#1a73e8", color: "#fff", border: "none", borderRadius: 10, padding: "11px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Got it! 👍</button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>FULL NAME *</label>
                  <input type="text" placeholder="Apna naam likhein" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>PHONE NUMBER *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>STREAM</label>
                    <select value={form.stream} onChange={e => setForm({ ...form, stream: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 13, outline: "none", cursor: "pointer" }}>
                      <option value="">Select</option>
                      <option>Engineering</option>
                      <option>Medical</option>
                      <option>MBA</option>
                      <option>Law</option>
                      <option>Commerce</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>EXAM</label>
                    <select value={form.exam} onChange={e => setForm({ ...form, exam: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 13, outline: "none", cursor: "pointer" }}>
                      <option value="">Select</option>
                      <option>JEE Main</option>
                      <option>NEET</option>
                      <option>CAT</option>
                      <option>CLAT</option>
                      <option>CUET</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>SCORE / RANK (Optional)</label>
                  <input type="text" placeholder="e.g. Rank 5000 or Score 680" value={form.score} onChange={e => setForm({ ...form, score: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <button onClick={onClose}
                  style={{ flex: 1, padding: "11px", borderRadius: 10, border: "1.5px solid #e2e8f0", background: "#fff", color: "#64748b", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  Cancel
                </button>
                <button onClick={handleSubmit}
                  style={{ flex: 2, padding: "11px", borderRadius: 10, border: "none", background: "#1a73e8", color: "#fff", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  📞 Book Free Session
                </button>
              </div>
              <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", margin: "10px 0 0" }}>No spam • 100% free • Expert callback within 2 hours</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function AdmissionChalo() {
  const [searchType, setSearchType] = useState("colleges");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("courses");
  const [showPredictor, setShowPredictor] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showCounselling, setShowCounselling] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [activeCity, setActiveCity] = useState(null);
  
  

const navLinks = ["Colleges", "Courses", "Exams", "Study Abroad", "News", "Rankings"];

  const toggleWishlist = (name) => {
    setWishlist(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  const handlePredictorClick = (title) => {
    if (title === "College Predictor") setShowPredictor(true);
    else if (title === "College Compare" || title === "Compare Now") setShowCompare(true);
    else if (title === "Career Counselling" || title === "Book Session") setShowCounselling(true);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f8", minHeight: "100vh", color: "#1e293b" }}>

      {/* MODALS */}
      {showPredictor && <CollegePredictorModal onClose={() => setShowPredictor(false)} />}
      {showCompare && <CompareModal onClose={() => setShowCompare(false)} />}
      {showCounselling && <CounsellingModal onClose={() => setShowCounselling(false)} />}

      {/* TOP BAR */}
      <div style={{ background: "#1a3a5c", color: "#94c5f5", fontSize: 12, padding: "6px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
          <span>📞 Helpline: 1800-XXX-XXXX (Free Counselling)</span>
          <span>📰 JEE Main 2026 Paper 1 ongoing TODAY &nbsp;|&nbsp; NEET 2026 Registration Open</span>
        </div>
      </div>

      {/* NAVBAR */}
    <Navbar navLinks={navLinks} wishlist={wishlist} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #1a73e8 60%, #0891b2 100%)", padding: "56px 20px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "4px 16px", fontSize: 13, color: "#bfdbfe", marginBottom: 14 }}>
            🎓 India's Largest College Discovery Platform
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(24px, 4.5vw, 42px)", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.2 }}>
            Sahi College, Sahi Course<br />
            <span style={{ color: "#93c5fd" }}>Aapka Sapna, Humari Zimmedari</span>
          </h1>
          <p style={{ color: "#bfdbfe", fontSize: 15, margin: "0 0 28px" }}>25,000+ colleges • 1.8 lakh+ courses • Free expert counselling</p>
          <div style={{ background: "#fff", borderRadius: 14, padding: "5px", boxShadow: "0 8px 32px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", maxWidth: 680, margin: "0 auto" }}>
            <select value={searchType} onChange={e => setSearchType(e.target.value)}
              style={{ border: "none", borderRight: "1.5px solid #e2e8f0", padding: "10px 12px", fontSize: 13, color: "#334155", background: "transparent", cursor: "pointer", outline: "none", fontWeight: 600 }}>
              <option value="colleges">Colleges</option>
              <option value="courses">Courses</option>
              <option value="exams">Exams</option>
            </select>
            <input type="text" placeholder="College, course ya exam search karo..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              style={{ flex: 1, border: "none", padding: "10px 14px", fontSize: 14, outline: "none", color: "#1e293b", background: "transparent" }} />
            <button style={{ background: "#1a73e8", color: "#fff", border: "none", borderRadius: 10, padding: "10px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>🔍 Khojo</button>
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {["IIT JEE", "NEET", "MBA", "B.Tech", "MBBS Delhi", "Law Colleges"].map(tag => (
              <span key={tag} onClick={() => setSearchQuery(tag)}
                style={{ background: "rgba(255,255,255,0.15)", color: "#e0f2fe", fontSize: 12, padding: "4px 12px", borderRadius: 20, cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "18px 0", textAlign: "center", borderRight: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#1a73e8" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px" }}>

        {/* NEWS */}
        <NewsSection />

        {/* COURSES */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Stream ke hisaab se Dhundho" subtitle="Apna course select karo" link="Sab Courses" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {courses.map((c, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "16px 14px", cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 12 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,115,232,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <span style={{ fontSize: 26 }}>{c.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#1e293b" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{c.count}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOP COLLEGES */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Top Colleges 2026" subtitle="India ke best colleges ki jankari" link="Sab Colleges Dekho" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
            {topColleges.map((col, i) => {
              const sc = streamBadgeColors[col.type] || { bg: "#f1f5f9", text: "#475569" };
              const saved = wishlist.includes(col.name);
              return (
                <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "20px", cursor: "pointer", transition: "all 0.18s", position: "relative" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,115,232,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <button onClick={() => toggleWishlist(col.name)}
                    style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>
                    {saved ? "❤️" : "🤍"}
                  </button>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 46, height: 46, borderRadius: 10, background: "linear-gradient(135deg, #1a3a5c, #1a73e8)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18 }}>{col.name[0]}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#1e293b" }}>{col.name}</div>
                        <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>📍 {col.location}</div>
                      </div>
                    </div>
                    <span style={{ background: "#fff7ed", color: "#c2410c", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, border: "1px solid #fed7aa", marginRight: 28 }}>{col.badge}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                    <span style={{ background: sc.bg, color: sc.text, fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{col.type}</span>
                    <span style={{ background: "#f0fdf4", color: "#166534", fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{col.rank}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #f1f5f9" }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>Fees (Approx.)</div>
                      <div style={{ fontWeight: 700, color: "#1a73e8", fontSize: 15 }}>{col.fees}</div>
                    </div>
                    <StarRating rating={col.rating} />
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <button onClick={() => setShowPredictor(true)}
                      style={{ flex: 1, padding: "9px", background: "#eff6ff", color: "#1a73e8", border: "1.5px solid #bfdbfe", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                      Check Chances
                    </button>
                    <button style={{ flex: 1, padding: "9px", background: "#1a73e8", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                      Enquire →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* UPCOMING EXAMS */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Upcoming Entrance Exams" subtitle="Important exam dates miss mat karo" link="Sab Exams" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {upcomingExams.map((ex, i) => {
              const sc = streamBadgeColors[ex.stream] || { bg: "#f1f5f9", text: "#475569" };
              return (
                <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ex.color; e.currentTarget.style.boxShadow = `0 4px 16px ${ex.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: ex.color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>📝</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#1e293b" }}>{ex.name}</div>
                    <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>📅 {ex.date}</div>
                  </div>
                  <span style={{ background: sc.bg, color: sc.text, fontSize: 11, padding: "3px 8px", borderRadius: 6, fontWeight: 600, whiteSpace: "nowrap" }}>{ex.stream}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* PREDICTORS */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Smart Predictors" subtitle="AI-powered tools se apna future plan karo" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
            {predictors.map((p, i) => (
              <div key={i} style={{ background: p.bg, border: `1.5px solid ${p.border}`, borderRadius: 14, padding: "22px 20px", cursor: "pointer", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{p.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#1a3a5c", marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, marginBottom: 16 }}>{p.desc}</div>
                <button onClick={() => handlePredictorClick(p.title)}
                  style={{ background: p.color, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>
                  {p.cta} →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CITIES SECTION */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="City ke hisaab se Colleges" subtitle="Apne shahar ke best colleges dhundho" link="Sab Cities" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
            {popularCities.map((city, i) => (
              <div key={i}
                onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
                style={{ background: activeCity === city.name ? "#1a73e8" : "#fff", border: `1.5px solid ${activeCity === city.name ? "#1a73e8" : "#e2e8f0"}`, borderRadius: 12, padding: "16px 14px", cursor: "pointer", transition: "all 0.18s", textAlign: "center" }}
                onMouseEnter={e => { if (activeCity !== city.name) { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={e => { if (activeCity !== city.name) { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "none"; } }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{city.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: activeCity === city.name ? "#fff" : "#1e293b" }}>{city.name}</div>
                <div style={{ fontSize: 11, color: activeCity === city.name ? "#bfdbfe" : "#64748b", marginTop: 3 }}>{city.colleges} Colleges</div>
              </div>
            ))}
          </div>
          {activeCity && (
            <div style={{ marginTop: 16, background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 700, color: "#1a3a5c", fontSize: 15 }}>📍 {activeCity} ke colleges dekho</div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 3 }}>Engineering, Medical, MBA aur bahut kuch</div>
              </div>
              <button style={{ background: "#1a73e8", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                Explore {activeCity} →
              </button>
            </div>
          )}
        </section>

        {/* TRENDING SECTION */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Trending in Education" subtitle="Sabse zyada search kiye jane wale courses aur specializations" />
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { key: "courses", label: "🔥 Trending Courses" },
              { key: "certs", label: "🏅 Top Certificates" },
              { key: "specs", label: "⚡ Trending Specializations" },
            ].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                style={{ padding: "8px 20px", borderRadius: 24, border: activeTab === tab.key ? "none" : "1.5px solid #e2e8f0", background: activeTab === tab.key ? "#1a73e8" : "#fff", color: activeTab === tab.key ? "#fff" : "#334155", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all 0.15s" }}>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "courses" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {trendingCourses.map((c, i) => (
                <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,115,232,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{c.name}</div>
                      {c.hot && <span style={{ background: "#fef2f2", color: "#dc2626", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 20 }}>🔥 HOT</span>}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{c.enrolled} • {c.level}</div>
                  </div>
                  <span style={{ color: "#1a73e8", fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certs" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {trendingCertificates.map((c, i) => (
                <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "18px", cursor: "pointer", transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.boxShadow = `0 4px 16px ${c.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: c.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏅</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>by {c.provider}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: "1px solid #f1f5f9" }}>
                    <span style={{ fontSize: 12, color: "#64748b" }}>⏱ {c.duration}</span>
                    <span style={{ color: "#f59e0b", fontSize: 13 }}>★ {c.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "specs" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
              {trendingSpecializations.map((s, i) => {
                const tc = tagColors[s.tag] || { bg: "#f1f5f9", text: "#475569" };
                return (
                  <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "16px 14px", cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "center", gap: 12 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "none"; }}>
                    <span style={{ fontSize: 24 }}>{s.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#1e293b" }}>{s.name}</div>
                      <span style={{ background: tc.bg, color: tc.text, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, marginTop: 4, display: "inline-block" }}>{s.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* OUR PRODUCTS */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Hamare Products" subtitle="Students ke liye special tools aur services" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
            {ourProducts.map((p, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 16, padding: "24px 20px", cursor: "pointer", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}22`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 14 }}>{p.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#1a3a5c", marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 18 }}>{p.desc}</div>
                <button onClick={() => handlePredictorClick(p.cta)}
                  style={{ background: "transparent", color: p.color, border: `1.5px solid ${p.color}`, borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  {p.cta} →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ marginBottom: 44 }}>
          <SectionHeader title="Students Ki Kahaniyan" subtitle="Unhe kya mila Admission Chalo se" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "22px", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,115,232,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ color: "#f59e0b", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: "0 0 18px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: t.color }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{t.college}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section style={{ background: "linear-gradient(135deg, #1a3a5c, #1a73e8)", borderRadius: 18, padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Free Expert Counselling Lelo! 🎓</h2>
            <p style={{ color: "#bfdbfe", fontSize: 15, margin: 0 }}>Our experts help you choose the right college & course for your career</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <button onClick={() => setShowCounselling(true)}
              style={{ background: "#fff", color: "#1a3a5c", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>📞 Call Now</button>
            <button onClick={() => setShowCounselling(true)}
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>WhatsApp Karo</button>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#1a3a5c", color: "#94a3b8", padding: "40px 20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, marginBottom: 32 }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Admission Chalo</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, margin: "0 0 16px" }}>India ka sabse trusted education portal. Sahi college dhundhne mein aapki madad karte hain.</p>
              <div style={{ display: "flex", gap: 10 }}>
                {["📘", "📷", "🐦", "▶️"].map((icon, i) => (
                  <div key={i} style={{ width: 34, height: 34, background: "rgba(255,255,255,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15 }}>{icon}</div>
                ))}
              </div>
            </div>
            {[
              { title: "Quick Links", links: ["Colleges", "Courses", "Exams", "Scholarships", "Study Abroad"] },
              { title: "Our Tools", links: ["College Compare", "College Reviews", "College Predictor", "Rank Predictor", "Scholarship Finder"] },
              { title: "Popular Streams", links: ["Engineering", "Medical", "MBA", "Law", "Design"] },
              { title: "Help & Support", links: ["About Us", "Contact Us", "Career Counselling", "News & Updates", "Campus Ambassador"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>{col.title}</div>
                {col.links.map(link => (
                  <div key={link} style={{ marginBottom: 8 }}>
                    <a href="#" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
                      onMouseEnter={e => e.target.style.color = "#93c5fd"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}>{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #2d4a6e", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13 }}>
            <span>©️ 2026 Admission Chalo. All rights reserved.</span>
            <span>Made with ❤️ for Indian Students</span>
          </div>
        </div>
      </footer>
    </div>
  );
}