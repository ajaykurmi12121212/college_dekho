import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ALL_COURSES = [
  { id: 1, name: "B.Tech Computer Science & Engineering", stream: "Engineering", level: "UG", duration: "4 Years", feesMin: 2, feesMax: 16, feesLabel: "2-16 L", exam: "JEE Main", topColleges: ["IIT Delhi", "GL Bajaj", "Bennett University"], avgSalary: "8-12 LPA", seats: "2000+", mode: "Full Time" },
  { id: 2, name: "B.Tech Artificial Intelligence & ML", stream: "Engineering", level: "UG", duration: "4 Years", feesMin: 2, feesMax: 16, feesLabel: "2-16 L", exam: "JEE Main", topColleges: ["IIT Bombay", "Bennett University", "Galgotias"], avgSalary: "9-15 LPA", seats: "1000+", mode: "Full Time" },
  { id: 3, name: "B.Tech Electronics & Communication", stream: "Engineering", level: "UG", duration: "4 Years", feesMin: 2, feesMax: 12, feesLabel: "2-12 L", exam: "JEE Main", topColleges: ["IIT Madras", "NIT Trichy", "GL Bajaj"], avgSalary: "6-10 LPA", seats: "1500+", mode: "Full Time" },
  { id: 4, name: "B.Tech Mechanical Engineering", stream: "Engineering", level: "UG", duration: "4 Years", feesMin: 2, feesMax: 12, feesLabel: "2-12 L", exam: "JEE Main", topColleges: ["IIT Kanpur", "NIT Warangal", "GL Bajaj"], avgSalary: "5-9 LPA", seats: "1500+", mode: "Full Time" },
  { id: 5, name: "M.Tech Computer Science", stream: "Engineering", level: "PG", duration: "2 Years", feesMin: 1, feesMax: 5, feesLabel: "1-5 L", exam: "GATE", topColleges: ["IIT Delhi", "IIT Bombay", "GL Bajaj"], avgSalary: "10-18 LPA", seats: "500+", mode: "Full Time" },
  { id: 6, name: "MBBS", stream: "Medical", level: "UG", duration: "5.5 Years", feesMin: 5, feesMax: 80, feesLabel: "5-80 L", exam: "NEET", topColleges: ["AIIMS Delhi", "JIPMER", "CMC Vellore"], avgSalary: "8-20 LPA", seats: "1000+", mode: "Full Time" },
  { id: 7, name: "BDS (Bachelor of Dental Surgery)", stream: "Medical", level: "UG", duration: "5 Years", feesMin: 3, feesMax: 50, feesLabel: "3-50 L", exam: "NEET", topColleges: ["Maulana Azad", "Manipal", "SDCH"], avgSalary: "5-12 LPA", seats: "800+", mode: "Full Time" },
  { id: 8, name: "B.Pharm (Bachelor of Pharmacy)", stream: "Medical", level: "UG", duration: "4 Years", feesMin: 1, feesMax: 6, feesLabel: "1-6 L", exam: "CUET", topColleges: ["Galgotias", "Jamia Hamdard", "BITS Pilani"], avgSalary: "4-8 LPA", seats: "1200+", mode: "Full Time" },
  { id: 9, name: "MBA (Master of Business Administration)", stream: "MBA", level: "PG", duration: "2 Years", feesMin: 2, feesMax: 25, feesLabel: "2-25 L", exam: "CAT", topColleges: ["IIM Ahmedabad", "Bennett University", "Galgotias"], avgSalary: "8-25 LPA", seats: "2000+", mode: "Full Time" },
  { id: 10, name: "BBA (Bachelor of Business Administration)", stream: "MBA", level: "UG", duration: "3 Years", feesMin: 1, feesMax: 8, feesLabel: "1-8 L", exam: "CUET", topColleges: ["Bennett University", "Galgotias", "Symbiosis"], avgSalary: "4-8 LPA", seats: "3000+", mode: "Full Time" },
  { id: 11, name: "MBA Finance", stream: "MBA", level: "PG", duration: "2 Years", feesMin: 2, feesMax: 20, feesLabel: "2-20 L", exam: "CAT", topColleges: ["IIM Calcutta", "FMS Delhi", "Bennett University"], avgSalary: "10-30 LPA", seats: "500+", mode: "Full Time" },
  { id: 12, name: "BA LLB (Hons.)", stream: "Law", level: "UG", duration: "5 Years", feesMin: 2, feesMax: 10, feesLabel: "2-10 L", exam: "CLAT", topColleges: ["NLU Delhi", "Galgotias", "Bennett University"], avgSalary: "6-15 LPA", seats: "1000+", mode: "Full Time" },
  { id: 13, name: "BBA LLB (Hons.)", stream: "Law", level: "UG", duration: "5 Years", feesMin: 2, feesMax: 10, feesLabel: "2-10 L", exam: "CLAT", topColleges: ["NLU Bangalore", "Bennett University", "Symbiosis Law"], avgSalary: "6-15 LPA", seats: "800+", mode: "Full Time" },
  { id: 14, name: "LLM (Master of Laws)", stream: "Law", level: "PG", duration: "2 Years", feesMin: 1, feesMax: 5, feesLabel: "1-5 L", exam: "CLAT PG", topColleges: ["NLU Delhi", "BHU", "AMU"], avgSalary: "8-20 LPA", seats: "300+", mode: "Full Time" },
  { id: 15, name: "B.Des (Bachelor of Design)", stream: "Design", level: "UG", duration: "4 Years", feesMin: 3, feesMax: 15, feesLabel: "3-15 L", exam: "NIFT / NID", topColleges: ["NID Ahmedabad", "NIFT Delhi", "Bennett University"], avgSalary: "5-12 LPA", seats: "500+", mode: "Full Time" },
  { id: 16, name: "M.Des (Master of Design)", stream: "Design", level: "PG", duration: "2 Years", feesMin: 2, feesMax: 10, feesLabel: "2-10 L", exam: "NIFT / CEED", topColleges: ["IIT Bombay", "NID Ahmedabad", "NIFT Delhi"], avgSalary: "7-15 LPA", seats: "200+", mode: "Full Time" },
  { id: 17, name: "BCA (Bachelor of Computer Applications)", stream: "Computer", level: "UG", duration: "3 Years", feesMin: 1, feesMax: 8, feesLabel: "1-8 L", exam: "CUET", topColleges: ["Bennett University", "Galgotias", "Symbiosis"], avgSalary: "4-8 LPA", seats: "2000+", mode: "Full Time" },
  { id: 18, name: "MCA (Master of Computer Applications)", stream: "Computer", level: "PG", duration: "2 Years", feesMin: 1, feesMax: 5, feesLabel: "1-5 L", exam: "CUET PG", topColleges: ["NIT Trichy", "GL Bajaj", "Galgotias"], avgSalary: "6-12 LPA", seats: "1000+", mode: "Full Time" },
];

const STREAMS = ["All", "Engineering", "Medical", "MBA", "Law", "Design", "Computer"];
const LEVELS = ["All", "UG", "PG"];
const EXAMS_LIST = ["All", "JEE Main", "NEET", "CAT", "CLAT", "CUET", "GATE", "NIFT / NID"];
const FEES_RANGES = [
  { label: "All", min: 0, max: 999 },
  { label: "Under 5L", min: 0, max: 5 },
  { label: "5L - 15L", min: 5, max: 15 },
  { label: "15L - 30L", min: 15, max: 30 },
  { label: "Above 30L", min: 30, max: 999 },
];

const STREAM_ICONS = { Engineering: "⚙️", Medical: "🏥", MBA: "💼", Law: "⚖️", Design: "🎨", Computer: "💻" };
const STREAM_COLORS = {
  Engineering: { bg: "#e0eafb", text: "#1a3a8f" },
  Medical: { bg: "#fde8e8", text: "#9b1c1c" },
  MBA: { bg: "#fef3c7", text: "#92400e" },
  Law: { bg: "#ede9fe", text: "#5b21b6" },
  Design: { bg: "#fce7f3", text: "#9d174d" },
  Computer: { bg: "#d1fae5", text: "#065f46" },
};

const P = "#1a73e8";
const G = "#6b7280";

export default function CoursesPage() {
  // ✅ FIX 1: useNavigate inside component
  const navigate = useNavigate();

  const [selectedStream, setSelectedStream] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedFees, setSelectedFees] = useState(0);
  const [selectedExam, setSelectedExam] = useState("All");
  const [search, setSearch] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const feesRange = FEES_RANGES[selectedFees];

  const filtered = ALL_COURSES.filter(c => {
    const matchStream = selectedStream === "All" || c.stream === selectedStream;
    const matchLevel = selectedLevel === "All" || c.level === selectedLevel;
    const matchExam = selectedExam === "All" || c.exam.toLowerCase().includes(selectedExam.toLowerCase());
    const matchSearch = search === "" || c.name.toLowerCase().includes(search.toLowerCase());
    const matchFees = c.feesMin <= feesRange.max && c.feesMax >= feesRange.min;
    return matchStream && matchLevel && matchExam && matchSearch && matchFees;
  });

  const resetFilters = () => {
    setSelectedStream("All");
    setSelectedLevel("All");
    setSelectedFees(0);
    setSelectedExam("All");
    setSearch("");
  };

  const activeFiltersCount = [
    selectedStream !== "All",
    selectedLevel !== "All",
    selectedFees !== 0,
    selectedExam !== "All",
  ].filter(Boolean).length;

  const FilterContent = () => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>Filters</span>
        <span onClick={resetFilters} style={{ fontSize: 12, color: P, cursor: "pointer", fontWeight: 600 }}>Reset All</span>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#374151", margin: "0 0 10px" }}>Stream</p>
        {STREAMS.map(s => (
          <div key={s} onClick={() => setSelectedStream(s)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", cursor: "pointer" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${selectedStream === s ? P : "#d1d5db"}`, background: selectedStream === s ? P : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selectedStream === s && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
            </div>
            <span style={{ fontSize: 13, color: selectedStream === s ? P : "#374151", fontWeight: selectedStream === s ? 600 : 400 }}>
              {s !== "All" ? `${STREAM_ICONS[s]} ${s}` : s}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 20, borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#374151", margin: "0 0 10px" }}>Level</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {LEVELS.map(l => (
            <span key={l} onClick={() => setSelectedLevel(l)}
              style={{ padding: "5px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", border: `1px solid ${selectedLevel === l ? P : "#e5e7eb"}`, background: selectedLevel === l ? P : "#fff", color: selectedLevel === l ? "#fff" : "#374151" }}>
              {l}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20, borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#374151", margin: "0 0 10px" }}>Fees Range</p>
        {FEES_RANGES.map((f, i) => (
          <div key={f.label} onClick={() => setSelectedFees(i)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", cursor: "pointer" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${selectedFees === i ? P : "#d1d5db"}`, background: selectedFees === i ? P : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selectedFees === i && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
            </div>
            <span style={{ fontSize: 13, color: selectedFees === i ? P : "#374151", fontWeight: selectedFees === i ? 600 : 400 }}>{f.label}</span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#374151", margin: "0 0 10px" }}>Entrance Exam</p>
        {EXAMS_LIST.map(e => (
          <div key={e} onClick={() => setSelectedExam(e)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", cursor: "pointer" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${selectedExam === e ? P : "#d1d5db"}`, background: selectedExam === e ? P : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {selectedExam === e && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
            </div>
            <span style={{ fontSize: 13, color: selectedExam === e ? P : "#374151", fontWeight: selectedExam === e ? 600 : 400 }}>{e}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "'Segoe UI',-apple-system,sans-serif" }}>
      <style>{`
        .courses-layout { display: flex; gap: 20px; max-width: 1200px; margin: 0 auto; padding: 20px; align-items: flex-start; }
        .courses-sidebar { width: 260px; flex-shrink: 0; position: sticky; top: 80px; background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
        .courses-main { flex: 1; min-width: 0; }
        .courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
        .course-card { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
        .course-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .mobile-filter-btn { display: none; }
        @media (max-width: 768px) {
          .courses-layout { padding: 12px; gap: 12px; }
          .courses-sidebar { display: none; }
          .courses-grid { grid-template-columns: 1fr; }
          .mobile-filter-btn { display: flex; }
        }
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a3a5c, #1a73e8)", padding: "28px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Explore Courses</h1>
        <p style={{ color: "#bfdbfe", fontSize: 14, margin: "0 0 20px" }}>1.8 Lakh+ courses across 50+ streams</p>
        <div style={{ maxWidth: 560, margin: "0 auto", background: "#fff", borderRadius: 12, padding: "6px 6px 6px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses e.g. B.Tech, MBA, MBBS..."
            style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "#374151", background: "transparent" }}
          />
          {search && <span onClick={() => setSearch("")} style={{ color: G, cursor: "pointer", fontSize: 18, padding: "0 8px" }}>×</span>}
          <button style={{ background: P, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Search</button>
        </div>
      </div>

      {/* Stream quick filters */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "12px 20px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 8, maxWidth: 1200, margin: "0 auto", flexWrap: "nowrap" }}>
          {STREAMS.map(s => (
            <span key={s} onClick={() => setSelectedStream(s)}
              style={{ padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", border: `1px solid ${selectedStream === s ? P : "#e5e7eb"}`, background: selectedStream === s ? P : "#fff", color: selectedStream === s ? "#fff" : "#374151", flexShrink: 0 }}>
              {s !== "All" ? `${STREAM_ICONS[s]} ${s}` : "🎓 All Streams"}
            </span>
          ))}
        </div>
      </div>

      <div className="courses-layout">
        <div className="courses-sidebar">
          <FilterContent />
        </div>

        <div className="courses-main">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{filtered.length} Courses</span>
              <span style={{ fontSize: 13, color: G, marginLeft: 6 }}>found</span>
              {selectedStream !== "All" && (
                <span style={{ marginLeft: 8, background: "#e0eafb", color: P, fontSize: 11, fontWeight: 600, padding: "2px 10px", borderRadius: 20 }}>{selectedStream}</span>
              )}
            </div>
            <button className="mobile-filter-btn"
              onClick={() => setShowMobileFilter(true)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", border: `1px solid ${P}`, borderRadius: 8, background: "#fff", color: P, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              ⚙️ Filters {activeFiltersCount > 0 && <span style={{ background: P, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{activeFiltersCount}</span>}
            </button>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: 60, background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 6 }}>No courses found</div>
              <div style={{ fontSize: 13, color: G }}>Try changing your filters</div>
              <button onClick={resetFilters} style={{ marginTop: 16, background: P, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer" }}>Reset Filters</button>
            </div>
          ) : (
            <div className="courses-grid">
              {filtered.map(c => {
                const color = STREAM_COLORS[c.stream] || { bg: "#f3f4f6", text: "#374151" };
                return (
                  <div key={c.id} className="course-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ background: color.bg, color: color.text, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                        {STREAM_ICONS[c.stream]} {c.stream}
                      </span>
                      <span style={{ background: c.level === "UG" ? "#e0eafb" : "#fef3c7", color: c.level === "UG" ? "#1a3a8f" : "#92400e", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                        {c.level}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 12px", lineHeight: 1.4 }}>{c.name}</h3>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                      <div style={{ background: "#f9fafb", borderRadius: 8, padding: "8px 10px" }}>
                        <div style={{ fontSize: 10, color: G, marginBottom: 2 }}>Duration</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>⏱ {c.duration}</div>
                      </div>
                      <div style={{ background: "#f9fafb", borderRadius: 8, padding: "8px 10px" }}>
                        <div style={{ fontSize: 10, color: G, marginBottom: 2 }}>Total Fees</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>💰 {c.feesLabel}</div>
                      </div>
                      <div style={{ background: "#f9fafb", borderRadius: 8, padding: "8px 10px" }}>
                        <div style={{ fontSize: 10, color: G, marginBottom: 2 }}>Avg Salary</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#16a34a" }}>📈 {c.avgSalary}</div>
                      </div>
                      <div style={{ background: "#f9fafb", borderRadius: 8, padding: "8px 10px" }}>
                        <div style={{ fontSize: 10, color: G, marginBottom: 2 }}>Entrance Exam</div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>📝 {c.exam}</div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 11, color: G, marginBottom: 5, fontWeight: 600 }}>TOP COLLEGES</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {c.topColleges.map((col, i) => (
                          <span key={i} style={{ background: "#f3f4f6", color: "#374151", fontSize: 11, padding: "3px 8px", borderRadius: 6, border: "1px solid #e5e7eb" }}>{col}</span>
                        ))}
                      </div>
                    </div>

                    {/* ✅ FIX 2: navigate added to button */}
                    <button
                      onClick={() => navigate(`/course/${c.id}`)}
                      style={{ width: "100%", background: P, color: "#fff", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      Explore Course →
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showMobileFilter && (
        <div onClick={() => setShowMobileFilter(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 2000, display: "flex", alignItems: "flex-end" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "16px 16px 0 0", padding: 20, width: "100%", maxHeight: "80vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>Filters</span>
              <button onClick={() => setShowMobileFilter(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: G }}>×</button>
            </div>
            <FilterContent />
            <button onClick={() => setShowMobileFilter(false)} style={{ width: "100%", background: P, color: "#fff", border: "none", borderRadius: 10, padding: 12, fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 16 }}>
              Show {filtered.length} Courses
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
