import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ── College lists by category ──
const ENGINEERING_COLLEGES = [
  
  { name: "GL Bajaj (GLBITM)", desc: "Greater Noida | NAAC A+", path: "/college/gl-bajaj" },
  { name: "Bennett University", desc: "Greater Noida | Times Group", path: "/college/bennett-university" },
  { name: "Galgotias University", desc: "Greater Noida | NAAC A+", path: "/college/galgotias-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
  { name: "Amity University", desc: "Noida | NAAC A+", path: "/college/amity-university-noida" },
  { name: "IIMT University", desc: "Meerut | NAAC A", path: "/college/iimt-university" },
  { name: "Noida International University", desc: "Greater Noida | NAAC B++", path: "/college/noida-international-university" },
];

const MANAGEMENT_COLLEGES = [
  
  { name: "Bennett University", desc: "Greater Noida | Cornell Partnership", path: "/college/bennett-university" },
  { name: "Amity University", desc: "Noida | NAAC A+", path: "/college/amity-university-noida" },
  { name: "Galgotias University", desc: "Greater Noida | NAAC A+", path: "/college/galgotias-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
  { name: "GD Goenka University", desc: "Gurgaon | NAAC A", path: "/college/gd-goenka-university" },
  { name: "KR Mangalam University", desc: "Gurgaon | NAAC A", path: "/college/kr-mangalam-university" },
  { name: "Manav Rachna University", desc: "Faridabad | NAAC A", path: "/college/manav-rachna-university" },
];

const MEDICAL_COLLEGES = [

  { name: "Sharda University", desc: "Greater Noida | 1000-bed Hospital", path: "/college/sharda-university" },
  { name: "IIMT University", desc: "Meerut | 300-bed Hospital", path: "/college/iimt-university" },
  { name: "MVN University", desc: "Palwal | 500-bed Hospital", path: "/college/mvn-university" },
];

const LAW_COLLEGES = [

  { name: "Bennett University", desc: "Greater Noida | Top Law School", path: "/college/bennett-university" },
  { name: "Galgotias University", desc: "Greater Noida | NIRF #36 Law", path: "/college/galgotias-university" },
  { name: "Amity University", desc: "Noida | Top Law School", path: "/college/amity-university-noida" },
  { name: "GD Goenka University", desc: "Gurgaon | NAAC A", path: "/college/gd-goenka-university" },
  { name: "KR Mangalam University", desc: "Gurgaon | NAAC A", path: "/college/kr-mangalam-university" },
  { name: "Lingaya's Vidyapeeth", desc: "Faridabad | Deemed University", path: "/college/lingayas-vidyapeeth" },
  { name: "MVN University", desc: "Palwal | Affordable Fees", path: "/college/mvn-university" },
];

const DESIGN_COLLEGES = [


  { name: "Bennett University", desc: "Greater Noida | B.Des Programs", path: "/college/bennett-university" },
  { name: "GD Goenka University", desc: "Gurgaon | Design School", path: "/college/gd-goenka-university" },
];

const PHARMACY_COLLEGES = [

  { name: "Galgotias University", desc: "Greater Noida | NIRF #55 Pharmacy", path: "/college/galgotias-university" },
  { name: "KR Mangalam University", desc: "Gurgaon | PCI Approved", path: "/college/kr-mangalam-university" },
  { name: "MVN University", desc: "Palwal | PCI Approved", path: "/college/mvn-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
];

const COLLEGE_CATEGORIES = [
  { label: "Engineering", colleges: ENGINEERING_COLLEGES },
  { label: "Management", colleges: MANAGEMENT_COLLEGES },
  { label: "Medical", colleges: MEDICAL_COLLEGES },
  { label: "Law", colleges: LAW_COLLEGES },
  { label: "Design", colleges: DESIGN_COLLEGES },
  { label: "Pharmacy", colleges: PHARMACY_COLLEGES },
];

// ── Courses data ──
const POPULAR_COURSES = [
  ["B.Tech", "B.Arch", "B.Tech Mechanical Engineering", "B.Sc Radiotherapy", "B.Sc Medical Lab Technology"],
  ["MBA", "Auto CAD", "B.Des", "B.Ed", "B.Sc Agriculture"],
  ["MBA Media Management", "MBA International Business", "MBA Operations Management", "B.Sc Statistics", "B.Sc Home Science"],
  ["Bachelor of Management Studies", "Bachelor of Mass Communication", "Bachelor of Computer Application", "B.Pharma", "Bachelor of Dental Surgery (BDS)"],
];

// ── Exams data ──
const EXAM_STREAMS = ["Engineering", "Management", "Commerce & Banking", "Medical", "Sciences", "Hotel Management", "Information Technology", "Arts & Humanities", "Mass Communication", "Nursing", "Agriculture", "Design", "Law", "Pharmacy", "Para Medical", "Dental", "Performing Arts", "Education"];

const EXAMS = [
  { name: "JEE Mains", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
  { name: "JEE Advance", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
  { name: "BITSAT", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
  { name: "GATE", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
  { name: "NEET UG", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
  { name: "CAT", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare", "Previous Year Question Paper"] },
];

const NAV_LINKS = ["Colleges", "Courses", "Exams", "Study Abroad", "News", "Rankings"];
const NAV_ROUTES = {
  Colleges: "/colleges",
  Courses: "/courses",
  Exams: "/exams",
  "Study Abroad": "/study-abroad",
  News: "/news",
  Rankings: "/rankings",
};

function CollegeItem({ item, onNavigate }) {
  return (
    <div
      onClick={() => item.path && onNavigate(item.path)}
      className={`px-2.5 py-2 rounded-lg transition-all duration-150 hover:bg-blue-50 hover:translate-x-1 ${item.path ? "cursor-pointer" : "cursor-default opacity-60"}`}>
      <p className="font-semibold text-sm text-slate-800 m-0">{item.name}</p>
      <p className="text-[11px] text-slate-500 m-0">{item.desc}</p>
    </div>
  );
}

export default function Navbar({ navLinks, wishlist = [] }) {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Engineering");
  const [activeExamStream, setActiveExamStream] = useState("Engineering");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState(null);
  const leaveTimer = useRef(null);

  const handleNavEnter = (link) => {
    clearTimeout(leaveTimer.current);
    if (["Colleges", "Courses", "Exams"].includes(link)) setActiveDropdown(link);
    else setActiveDropdown(null);
  };
  const handleNavLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const handleMenuEnter = () => clearTimeout(leaveTimer.current);
  const handleMenuLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const closeAll = () => { setActiveDropdown(null); setMenuOpen(false); setMobileExpanded(null); setMobileCategoryExpanded(null); };
  const handleNavClick = (link) => { navigate(NAV_ROUTES[link]); closeAll(); };

  const links = navLinks || NAV_LINKS;
  const activeCategoryData = COLLEGE_CATEGORIES.find(c => c.label === activeCategory);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={() => { navigate("/"); closeAll(); }}>
            <div className="bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] rounded-xl w-9 h-9 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-extrabold text-lg">A</span>
            </div>
            <div>
              <p className="font-extrabold text-[15px] text-blue-700 m-0 leading-tight">Admission Chalo</p>
              <p className="text-[9px] text-gray-400 m-0 tracking-widest uppercase">India's Education Guide</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            {links.map(link => (
              <div key={link}
                onMouseEnter={() => handleNavEnter(link)}
                onMouseLeave={handleNavLeave}
                className="relative">
                <span
                  onClick={() => handleNavClick(link)}
                  className={`flex items-center gap-1 px-3.5 h-16 text-[13.5px] font-medium cursor-pointer border-b-2 transition-all select-none
                    ${activeDropdown === link
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-400"}`}>
                  {link}
                  {["Colleges", "Courses", "Exams"].includes(link) && (
                    <span className={`text-[8px] transition-transform duration-200 ${activeDropdown === link ? "rotate-180 text-blue-400" : "text-gray-400"}`}>▼</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {wishlist.length > 0 && (
              <div className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
                ❤️ {wishlist.length} Saved
              </div>
            )}
            <button onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg border border-blue-600 bg-transparent text-blue-600 font-semibold text-[13px] cursor-pointer hover:bg-blue-50 transition-colors">
              Login
            </button>
            <button onClick={() => navigate("/register")}
              className="px-4 py-2 rounded-lg border-none bg-blue-600 text-white font-semibold text-[13px] cursor-pointer hover:bg-blue-700 transition-colors">
              Register Free
            </button>
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-gray-600 transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* ── MEGA MENUS ── */}
      {activeDropdown && (
        <div className="fixed left-0 right-0 bg-white border-t-2 border-blue-600 shadow-2xl z-40"
          style={{ top: 64, animation: "slideDown 0.15s ease" }}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}>

          <style>{`@keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }`}</style>

          {/* ── COLLEGES ── */}
          {activeDropdown === "Colleges" && (
            <div className="flex max-w-[1280px] mx-auto" style={{ maxHeight: 500 }}>

              {/* Left Sidebar - categories */}
              <div className="w-48 flex-shrink-0 bg-slate-50 border-r border-gray-200 overflow-y-auto py-3">
                {COLLEGE_CATEGORIES.map(cat => (
                  <div key={cat.label}
                    onMouseEnter={() => setActiveCategory(cat.label)}
                    className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer flex justify-between items-center border-l-[3px] transition-all
                      ${activeCategory === cat.label
                        ? "bg-white text-blue-600 border-blue-600 font-semibold"
                        : "text-slate-600 border-transparent hover:bg-white hover:text-blue-500"}`}>
                    {cat.label}
                    {activeCategory === cat.label && <span className="text-blue-500 text-xs">›</span>}
                  </div>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div
                    onClick={() => { navigate("/colleges"); closeAll(); }}
                    className="px-4 py-2.5 text-[12px] font-bold text-blue-600 cursor-pointer hover:bg-blue-50">
                    All Colleges →
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 px-6 py-5 overflow-y-auto">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Top {activeCategory} Colleges
                </p>
                <div className="grid grid-cols-2 gap-x-6">
                  {activeCategoryData?.colleges.map((c, i) => (
                    <CollegeItem key={i} item={c} onNavigate={(path) => { navigate(path); closeAll(); }} />
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span onClick={() => { navigate("/colleges"); closeAll(); }}
                    className="text-[12px] font-bold text-blue-600 cursor-pointer hover:underline">
                    View All {activeCategory} Colleges →
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ── COURSES ── */}
          {activeDropdown === "Courses" && (
            <div className="max-w-[1280px] mx-auto px-8 py-7">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Popular Courses</p>
              <div className="grid grid-cols-4 gap-x-10">
                {POPULAR_COURSES.map((col, ci) => (
                  <div key={ci} className={`${ci > 0 ? "border-l border-gray-100 pl-8" : ""}`}>
                    {col.map((course, i) => (
                      <a key={i} href="#"
                        onClick={e => { e.preventDefault(); navigate(`/courses?q=${encodeURIComponent(course)}`); closeAll(); }}
                        className="block text-[13.5px] text-gray-600 py-1.5 no-underline hover:text-blue-600 hover:pl-1.5 transition-all duration-100">
                        {course}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a href="#" onClick={e => { e.preventDefault(); navigate("/courses"); closeAll(); }}
                  className="text-[13px] font-bold text-blue-600 no-underline hover:underline">
                  View All Courses →
                </a>
              </div>
            </div>
          )}

          {/* ── EXAMS ── */}
          {activeDropdown === "Exams" && (
            <div className="flex max-w-[1280px] mx-auto" style={{ maxHeight: 480 }}>
              <div className="w-52 flex-shrink-0 bg-slate-50 border-r border-gray-200 overflow-y-auto py-3">
                {EXAM_STREAMS.map(s => (
                  <div key={s}
                    onMouseEnter={() => setActiveExamStream(s)}
                    className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer flex justify-between items-center border-l-[3px] transition-all
                      ${activeExamStream === s
                        ? "bg-white text-blue-600 border-blue-600 font-semibold"
                        : "text-slate-600 border-transparent hover:bg-white hover:text-blue-500"}`}>
                    {s}
                    {activeExamStream === s && <span className="text-blue-500 text-xs">›</span>}
                  </div>
                ))}
              </div>
              <div className="flex-1 px-8 py-6 overflow-y-auto">
                <div className="grid grid-cols-3 gap-4">
                  {EXAMS.map((exam, i) => (
                    <div key={i} className="bg-slate-50 border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <p className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-2 m-0">
                        <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                        {exam.name}
                      </p>
                      {exam.links.map((link, j) => (
                        <a key={j} href="#"
                          onClick={e => { e.preventDefault(); navigate(`/exams/${exam.name.toLowerCase().replace(/\s+/g, "-")}`); closeAll(); }}
                          className="block text-[12px] text-gray-500 py-1 no-underline hover:text-blue-600 transition-colors">
                          {link}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span onClick={() => { navigate("/exams"); closeAll(); }}
                    className="text-[13px] font-bold text-blue-600 cursor-pointer hover:underline">
                    View all exams →
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg" style={{ maxHeight: "80vh", overflowY: "auto" }}>
          {links.map(link => (
            <div key={link}>
              <div
                onClick={() => {
                  if (["Colleges", "Courses", "Exams"].includes(link)) {
                    setMobileExpanded(mobileExpanded === link ? null : link);
                  } else {
                    handleNavClick(link);
                  }
                }}
                className="flex justify-between items-center px-5 py-3.5 text-[14px] font-medium text-gray-700 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                {link}
                {["Colleges", "Courses", "Exams"].includes(link) && (
                  <span className="text-[9px] text-gray-400 inline-block transition-transform duration-200"
                    style={{ transform: mobileExpanded === link ? "rotate(180deg)" : "none" }}>▼</span>
                )}
              </div>

              {/* Mobile Colleges */}
              {mobileExpanded === "Colleges" && link === "Colleges" && (
                <div className="bg-slate-50">
                  {COLLEGE_CATEGORIES.map(cat => (
                    <div key={cat.label}>
                      <div
                        onClick={() => setMobileCategoryExpanded(mobileCategoryExpanded === cat.label ? null : cat.label)}
                        className="flex justify-between items-center px-5 py-3 text-[13px] font-bold text-gray-700 border-b border-gray-100 cursor-pointer hover:bg-blue-50">
                        {cat.label} Colleges
                        <span className="text-[9px] text-gray-400 inline-block transition-transform duration-200"
                          style={{ transform: mobileCategoryExpanded === cat.label ? "rotate(180deg)" : "none" }}>▼</span>
                      </div>
                      {mobileCategoryExpanded === cat.label && (
                        <div className="bg-white">
                          {cat.colleges.map((c, i) => (
                            <div key={i}
                              onClick={() => { if (c.path) { navigate(c.path); closeAll(); } }}
                              className={`px-7 py-2.5 border-b border-gray-50 ${c.path ? "cursor-pointer hover:bg-blue-50" : "opacity-50"}`}>
                              <p className="text-[13px] font-semibold text-slate-800 m-0">{c.name}</p>
                              <p className="text-[11px] text-slate-500 m-0">{c.desc}</p>
                            </div>
                          ))}
                          <div onClick={() => { navigate("/colleges"); closeAll(); }}
                            className="px-7 py-2.5 text-[12px] font-bold text-blue-600 cursor-pointer">
                            View All {cat.label} Colleges →
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile Courses */}
              {mobileExpanded === "Courses" && link === "Courses" && (
                <div className="bg-slate-50 py-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-5 py-2">Popular Courses</p>
                  {POPULAR_COURSES.flat().map((c, i) => (
                    <div key={i} onClick={() => { navigate(`/courses?q=${encodeURIComponent(c)}`); closeAll(); }}
                      className="px-5 py-2 text-[13px] text-gray-600 cursor-pointer hover:text-blue-600 hover:bg-blue-50">{c}</div>
                  ))}
                  <div onClick={() => { navigate("/courses"); closeAll(); }}
                    className="px-5 py-2.5 text-[13px] font-bold text-blue-600 cursor-pointer">View All Courses →</div>
                </div>
              )}

              {/* Mobile Exams */}
              {mobileExpanded === "Exams" && link === "Exams" && (
                <div className="bg-slate-50 py-2">
                  {EXAMS.map((exam, i) => (
                    <div key={i}>
                      <p className="text-[11px] font-bold text-gray-800 px-5 pt-3 pb-1 m-0">{exam.name}</p>
                      {exam.links.map((l, j) => (
                        <div key={j} onClick={() => { navigate(`/exams/${exam.name.toLowerCase().replace(/\s+/g, "-")}`); closeAll(); }}
                          className="px-8 py-1.5 text-[12px] text-gray-500 cursor-pointer hover:text-blue-600">{l}</div>
                      ))}
                    </div>
                  ))}
                  <div onClick={() => { navigate("/exams"); closeAll(); }}
                    className="px-5 py-2.5 text-[13px] font-bold text-blue-600 cursor-pointer">View all exams →</div>
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-2 px-5 py-4">
            <button onClick={() => { navigate("/login"); closeAll(); }}
              className="flex-1 py-2.5 border border-blue-600 text-blue-600 rounded-lg font-semibold text-[13px] bg-transparent cursor-pointer hover:bg-blue-50">Login</button>
            <button onClick={() => { navigate("/register"); closeAll(); }}
              className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-[13px] border-none cursor-pointer hover:bg-blue-700">Register Free</button>
          </div>
        </div>
      )}
    </>
  );
}
