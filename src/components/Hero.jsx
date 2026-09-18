import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { C, fontDisplay } from "../theme";
import { hero } from "../data/heroData";
import { WhatsAppIcon } from "./SocialIcons";
/* ------------------------------------------------------------------ */
/*  HERO — staggered entrance + hover/tap on both CTA buttons.          */
/* ------------------------------------------------------------------ */

const MotionNavLink = motion(NavLink);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section dir="rtl" className="relative overflow-hidden">
      <img src={hero.image.src} alt={hero.image.alt} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${C.emerald}f0 0%, ${C.dark}e8 55%, ${C.emerald}f0 100%)` }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto text-center px-6 py-24 md:py-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-6"
          style={{ background: "rgba(255,255,255,0.12)", color: "#eaf2ee" }}
        >
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl leading-snug mb-6"
          style={{ color: "#ffffff", fontFamily: fontDisplay, fontWeight: 800 }}
        >
          {hero.title}
        </motion.h1>

        <motion.p variants={item} className="text-sm md:text-base max-w-2xl mx-auto mb-9" style={{ color: "#d7e3dd" }}>
          {hero.desc}
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <MotionNavLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
            style={{ background: C.copper, color: "#ffffff" }}
          >
            {hero.primaryLabel} <ArrowLeft size={16} />
          </MotionNavLink>
          <motion.a
            href="https://wa.me/966590145501"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border"
            style={{ borderColor: "#ffffff", color: "#ffffff" }}
          >
            <WhatsAppIcon size={16} color="#ffffff" /> {hero.secondaryLabel}
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-10 md:gap-14">
          {hero.chips.map((c) => (
            <div key={c.label}>
              <div style={{ color: "#ffffff", fontFamily: fontDisplay, fontSize: "26px", fontWeight: 800 }}>{c.value}</div>
              <div className="text-xs mt-1" style={{ color: "#c9d6d0" }}>{c.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
