import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { C, fontDisplay, BUSINESS } from "../theme";
import { navItems, navCtaLabel } from "../data/navData";

/* ------------------------------------------------------------------ */
/*  NAVBAR — with hover/tap micro-interaction on the CTA button.        */
/* ------------------------------------------------------------------ */
const MotionNavLink = motion(NavLink);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? C.copperSoft : "#eaf2ee",
    fontWeight: isActive ? 800 : 400,
  });

  return (
    <header className="sticky top-0 z-50" dir="rtl" style={{ background: C.dark }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl grid grid-cols-2 gap-0.5 p-1.5" style={{ background: C.emeraldSoft }}>
            <span style={{ background: "#ffffff", borderRadius: "2px" }} />
            <span style={{ background: C.copper, borderRadius: "2px" }} />
            <span style={{ background: C.copper, borderRadius: "2px" }} />
            <span style={{ background: "#ffffff", borderRadius: "2px" }} />
          </div>
          <div className="leading-tight">
            <div style={{ color: "#ffffff", fontFamily: fontDisplay, fontSize: "20px", fontWeight: 800 }}>
              {BUSINESS.nameAr}
            </div>
            <div style={{ color: "#b7c2bc", fontSize: "10px" }}>{BUSINESS.taglineAr}</div>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === "/"} className="text-sm transition-colors" style={linkStyle}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <MotionNavLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            style={{ background: C.copper, color: "#ffffff" }}
          >
            {navCtaLabel} <ArrowLeft size={15} />
          </MotionNavLink>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#ffffff" }}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-5 pb-5 flex flex-col gap-4" style={{ background: C.dark, borderTop: "1px solid #1e352c" }}>
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === "/"} style={linkStyle} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            style={{ background: C.copper, color: "#ffffff" }}
            onClick={() => setMenuOpen(false)}
          >
            {navCtaLabel}
          </NavLink>
        </div>
      )}
    </header>
  );
}
