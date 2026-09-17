import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { C, fontDisplay } from "../theme";
import { aboutTeaser } from "../data/aboutTeaserData";

/* ------------------------------------------------------------------ */
/*  ABOUT TEASER — fade-up on scroll, arrow nudges forward on hover.    */
/* ------------------------------------------------------------------ */
export default function AboutTeaser() {
  return (
    <section id="about" dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.surface }}>
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={aboutTeaser.image.src}
          alt={aboutTeaser.image.alt}
          className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg order-1"
        />
        <div className="order-2">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ background: `${C.emerald}14`, color: C.emerald }}>
            {aboutTeaser.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>
            {aboutTeaser.title}
          </h2>
          <p className="text-sm md:text-base mb-6" style={{ color: C.slate }}>{aboutTeaser.desc}</p>
          <motion.div className="inline-block" whileHover="hover">
            <NavLink to="/about" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.copper }}>
              {aboutTeaser.linkLabel}
              <motion.span
                style={{ display: "inline-flex" }}
                variants={{ hover: { x: -4 } }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft size={15} />
              </motion.span>
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
