import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ArrowLeft, Phone, MessageCircle } from "lucide-react";
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
  const handleClick = () => {
    setMenuOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="sticky top-0 z-50" dir="rtl" style={{ background: C.dark }}>
      <div className="w-full flex items-center justify-between gap-3 px-3 sm:px-5 py-2 bg-[#f8f6f0] border-b border-[#d7c5a3]/50">
        {/* WhatsApp - Left */}
        <a
          href="https://wa.me/966590145501"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex items-center gap-1.5 sm:gap-2 text-[#168653] hover:text-[#0d6240] transition-colors"
        >
          <MessageCircle
            size={15}
            className="shrink-0 animate-bounce sm:w-[17px] sm:h-[17px]"
          />

          <span
            dir="ltr"
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight"
            style={{ unicodeBidi: "isolate" }}
          >
            +966590145501
          </span>
        </a>

        {/* Call - Right */}
        <a
          href="tel:+966590145501"
          aria-label="Call us"
          className="flex items-center gap-1.5 sm:gap-2 text-[#174b38] hover:text-[#b87535] transition-colors"
        >
          <span
            dir="ltr"
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight"
            style={{ unicodeBidi: "isolate" }}
          >
            +966590145501
          </span>

          <Phone
            size={15}
            className="shrink-0 animate-bounce sm:w-[17px] sm:h-[17px]"
          />
        </a>
      </div>
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
            <NavLink onClick={handleClick} key={item.label} to={item.to} end={item.to === "/"} className="text-sm transition-colors" style={linkStyle}>
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
            <NavLink key={item.label} to={item.to} end={item.to === "/"} style={linkStyle} onClick={handleClick}>
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
