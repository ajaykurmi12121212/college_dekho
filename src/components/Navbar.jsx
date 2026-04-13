import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ENGINEERING_COLLEGES = [
  { name: "IIT Madras", desc: "Top Ranked IIT", path: "/iit-madras" },
  // Ye change karo
{ name: "GL Bajaj", desc: "Best in Delhi", path: "/college/gl-bajaj" },
{ name: "Bennett University", desc: "Times Group University", path: "/college/bennett-university" },
{ name: "Galgotias University", desc: "Top Private Univ, UP", path: "/college/galgotias-university" },
 
  { name: "NIT Trichy", desc: "Top NIT", path: null },
];

const MEDICAL_COLLEGES = [
  { name: "AIIMS Delhi", desc: "India #1 Medical", path: null },
  { name: "JIPMER", desc: "Top Govt Medical", path: null },
  { name: "CMC Vellore", desc: "Private Top College", path: null },
];

function MegaMenuColumn({ title, items, onNavigate }) {
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <p className="text-xs font-bold text-slate-500 mb-2.5 m-0">{title}</p>
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            if (item.path) {
              navigate(item.path);
              if (onNavigate) onNavigate();
            }
          }}
          className={`px-2.5 py-2.5 rounded-lg transition-all duration-200 hover:bg-slate-100 hover:translate-x-1 ${
            item.path ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <p className="font-semibold text-sm text-slate-800 m-0">{item.name}</p>
          <p className="text-[11px] text-slate-500 m-0">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Navbar({ navLinks, wishlist }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCollegesOpen, setMobileCollegesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] rounded-xl w-[38px] h-[38px] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-extrabold text-lg">A</span>
          </div>
          <div>
            <p className="font-extrabold text-lg text-[#1a3a5c] m-0 leading-tight">Admission Chalo</p>
            <p className="text-[10px] text-slate-500 m-0 tracking-wide">INDIA'S EDUCATION GUIDE</p>
          </div>
        </div>

        {/* ── Desktop Nav links ── */}
        <div className="hidden md:flex gap-0.5 items-center">
          {navLinks.map((link) => (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => link === "Colleges" && setShowDropdown(true)}
              onMouseLeave={() => link === "Colleges" && setShowDropdown(false)}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (link === "Colleges") setShowDropdown((prev) => !prev);
                }}
                className="block px-3 py-2 text-slate-700 text-[13px] font-medium no-underline rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {link}
              </a>

              {/* Desktop Mega menu */}
              {link === "Colleges" && (
                <div
                  className="absolute left-0 w-[520px] bg-white rounded-2xl p-[18px] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[999] transition-all duration-250"
                  style={{
                    top: showDropdown ? "50px" : "60px",
                    opacity: showDropdown ? 1 : 0,
                    transform: showDropdown ? "translateY(0)" : "translateY(10px)",
                    pointerEvents: showDropdown ? "auto" : "none",
                  }}
                >
                  <div className="flex gap-5">
                    <MegaMenuColumn title="TOP ENGINEERING" items={ENGINEERING_COLLEGES} onNavigate={() => setShowDropdown(false)} />
                    <MegaMenuColumn title="TOP MEDICAL" items={MEDICAL_COLLEGES} onNavigate={() => setShowDropdown(false)} />
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-slate-200 text-center">
                    <span className="text-[13px] font-semibold text-blue-600 cursor-pointer hover:underline">
                      View All Colleges →
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Desktop Right side ── */}
        <div className="hidden md:flex gap-2 items-center">
          {wishlist.length > 0 && (
            <div className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
              ❤️ {wishlist.length} Saved
            </div>
          )}
          <button className="px-4 py-2 rounded-lg border border-blue-600 bg-transparent text-blue-600 font-semibold text-[13px] cursor-pointer hover:bg-blue-50 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg border-none bg-blue-600 text-white font-semibold text-[13px] cursor-pointer hover:bg-blue-700 transition-colors">
            Register Free
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-slate-700 transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span className="block w-6 h-0.5 bg-slate-700 transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-slate-700 transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link === "Colleges" ? (
              <div key={link}>
                {/* Accordion trigger */}
                <button
                  onClick={() => setMobileCollegesOpen(!mobileCollegesOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-700 text-[14px] font-medium rounded-lg hover:bg-slate-100 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <span>Colleges</span>
                  <span
                    className="text-slate-400 text-[10px] inline-block transition-transform duration-200"
                    style={{ transform: mobileCollegesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >▼</span>
                </button>

                {/* Accordion content */}
                {mobileCollegesOpen && (
                  <div className="mt-1 mb-2 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    {/* Engineering */}
                    <div className="px-4 pt-3 pb-1">
                      <p className="text-[10px] font-bold text-slate-400 tracking-wider m-0 mb-1">TOP ENGINEERING</p>
                      {ENGINEERING_COLLEGES.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            if (item.path) {
                              navigate(item.path);        // ← navigate call
                              setMenuOpen(false);
                              setMobileCollegesOpen(false);
                            }
                          }}
                          className={`py-2 px-2 rounded-lg transition-colors ${
                            item.path ? "cursor-pointer hover:bg-blue-50" : "cursor-default"
                          }`}
                        >
                          <p className="font-semibold text-[13px] text-slate-800 m-0">{item.name}</p>
                          <p className="text-[11px] text-slate-500 m-0">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-slate-200 mx-3" />

                    {/* Medical */}
                    <div className="px-4 pt-2 pb-3">
                      <p className="text-[10px] font-bold text-slate-400 tracking-wider m-0 mb-1">TOP MEDICAL</p>
                      {MEDICAL_COLLEGES.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            if (item.path) {
                              navigate(item.path);        // ← navigate call
                              setMenuOpen(false);
                              setMobileCollegesOpen(false);
                            }
                          }}
                          className={`py-2 px-2 rounded-lg transition-colors ${
                            item.path ? "cursor-pointer hover:bg-blue-50" : "cursor-default"
                          }`}
                        >
                          <p className="font-semibold text-[13px] text-slate-800 m-0">{item.name}</p>
                          <p className="text-[11px] text-slate-500 m-0">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-slate-200 px-4 py-2.5 text-center">
                      <span className="text-[13px] font-semibold text-blue-600 cursor-pointer">
                        View All Colleges →
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link}
                href="#"
                className="py-2.5 px-3 text-slate-700 text-[14px] font-medium no-underline rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            )
          )}

          <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
            <button className="flex-1 py-2.5 rounded-lg border border-blue-600 bg-transparent text-blue-600 font-semibold text-[13px] cursor-pointer hover:bg-blue-50 transition-colors">
              Login
            </button>
            <button className="flex-1 py-2.5 rounded-lg border-none bg-blue-600 text-white font-semibold text-[13px] cursor-pointer hover:bg-blue-700 transition-colors">
              Register Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
