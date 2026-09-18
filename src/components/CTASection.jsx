import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { C, fontDisplay, BUSINESS } from "../theme";
import { WhatsAppIcon } from "./SocialIcons";
import { cta } from "../data/ctaData";

/* ------------------------------------------------------------------ */
/*  CTA SECTION — fade-up on scroll into view + hover/tap on buttons.   */
/* ------------------------------------------------------------------ */
const MotionNavLink = motion(NavLink);

export default function CTASection() {
  return (
    <motion.section
      dir="rtl"
      className="py-16 px-5 md:px-8 text-center"
      style={{ background: `linear-gradient(135deg, ${C.copper} 0%, #8f4d13 100%)` }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl md:text-3xl mb-3" style={{ color: "#ffffff", fontFamily: fontDisplay, fontWeight: 800 }}>{cta.title}</h2>
      <p className="text-sm md:text-base mb-8 max-w-xl mx-auto" style={{ color: "#ffe9d6" }}>{cta.desc}</p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <MotionNavLink
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
          style={{ background: "#ffffff", color: C.copper }}
        >
          {cta.primaryLabel} <ArrowLeft size={16} />
        </MotionNavLink>
        <motion.a
          href={BUSINESS.whatsappHref}
          target="_blank"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border"
          style={{ borderColor: "#ffffff", color: "#ffffff" }}
        >
          <WhatsAppIcon size={16} color="#ffffff" /> {cta.secondaryLabel}
        </motion.a>
      </div>
    </motion.section>
  );
}
