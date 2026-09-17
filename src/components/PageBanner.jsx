import React from "react";
import { motion } from "framer-motion";
import { C, fontDisplay } from "../theme";

/* ------------------------------------------------------------------ */
/*  PAGE BANNER — fade-up entrance for breadcrumb/title/subtitle,       */
/*  matching Hero's treatment on inner pages.                           */
/* ------------------------------------------------------------------ */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

export default function PageBanner({ breadcrumbHome, breadcrumbCurrent, title, subtitle, image }) {
  return (
    <section dir="rtl" className="relative overflow-hidden">
      <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${C.emerald}ee 0%, ${C.dark}e6 60%, ${C.emerald}ee 100%)` }}
      />
      <motion.div
        className="relative max-w-4xl mx-auto text-center px-6 py-20 md:py-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-2 text-xs mb-5" style={{ color: "#cfe0d8" }}>
          <span>{breadcrumbHome}</span>
          <span style={{ color: C.copperSoft }}>/</span>
          <span style={{ color: C.copperSoft }}>{breadcrumbCurrent}</span>
        </motion.div>
        <motion.h1 variants={item} className="text-3xl md:text-5xl leading-snug mb-5" style={{ color: "#ffffff", fontFamily: fontDisplay, fontWeight: 800 }}>
          {title}
        </motion.h1>
        <motion.p variants={item} className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "#d7e3dd" }}>{subtitle}</motion.p>
      </motion.div>
    </section>
  );
}
