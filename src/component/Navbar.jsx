import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ navLinks, wishlist }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)", borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>A</span>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#1a3a5c" }}>Admission Chalo</div>
            <div style={{ fontSize: 10, color: "#64748b" }}>INDIA'S EDUCATION GUIDE</div>
          </div>
        </div>

        {/* 🔥 NAV LINKS */}
        <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
          
          {navLinks.map(link => (
            
            <div
              key={link}
              style={{ position: "relative" }}
              onMouseEnter={() => link === "Colleges" && setShowDropdown(true)}
              onMouseLeave={() => link === "Colleges" && setShowDropdown(false)}
            >

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (link === "Colleges") {
                    setShowDropdown(prev => !prev);
                  }
                }}
                style={{
                  padding: "8px 11px",
                  color: "#334155",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                }}
                onMouseEnter={e => e.target.style.background = "#f1f5f9"}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >
                {link}
              </a>

              {/* 🔥 ANIMATED MEGA MENU */}
              {link === "Colleges" && (
                <div
                  style={{
                    position: "absolute",
                    top: showDropdown ? "50px" : "60px",
                    left: 0,
                    opacity: showDropdown ? 1 : 0,
                    transform: showDropdown ? "translateY(0)" : "translateY(10px)",
                    pointerEvents: showDropdown ? "auto" : "none",
                    transition: "all 0.25s ease",
                    background: "#fff",
                    borderRadius: 14,
                    padding: "18px",
                    width: 520,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    border: "1px solid #e2e8f0",
                    zIndex: 999
                  }}
                >

                  <div style={{ display: "flex", gap: 20 }}>

                    {/* LEFT */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
                        TOP ENGINEERING
                      </div>

                      {[
                        { name: "IIT Madras", desc: "Top Ranked IIT", path: "/iit-madras" },
                        { name: "IIT Delhi", desc: "Best in Delhi" },
                        { name: "NIT Trichy", desc: "Top NIT" }
                      ].map((item, i) => (
                        <div
                          key={i}
                          onClick={() => item.path && navigate(item.path)}
                          style={{
                            padding: "10px",
                            borderRadius: 8,
                            cursor: item.path ? "pointer" : "default",
                            transition: "all 0.2s"
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "#f1f5f9";
                            e.currentTarget.style.transform = "translateX(4px)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.transform = "none";
                          }}
                        >
                          <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: "#64748b" }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 10 }}>
                        TOP MEDICAL
                      </div>

                      {[
                        { name: "AIIMS Delhi", desc: "India #1 Medical" },
                        { name: "JIPMER", desc: "Top Govt Medical" },
                        { name: "CMC Vellore", desc: "Private Top College" }
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "10px",
                            borderRadius: 8,
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "#f1f5f9"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: "#64748b" }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* BOTTOM */}
                  <div style={{
                    marginTop: 14,
                    paddingTop: 10,
                    borderTop: "1px solid #e2e8f0",
                    textAlign: "center"
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1a73e8", cursor: "pointer" }}>
                      View All Colleges →
                    </span>
                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {wishlist.length > 0 && (
            <div style={{ background: "#fef2f2", color: "#dc2626", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, border: "1px solid #fecaca", cursor: "pointer" }}>
              ❤️ {wishlist.length} Saved
            </div>
          )}
          <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #1a73e8", background: "transparent", color: "#1a73e8", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
            Login
          </button>
          <button style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "#1a73e8", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
            Register Free
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;