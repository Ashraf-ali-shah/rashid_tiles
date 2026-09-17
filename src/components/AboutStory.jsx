import React from "react";
import { motion } from "framer-motion";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { aboutStory, milestones } from "../data/aboutData";

/* ------------------------------------------------------------------ */
/*  ABOUT STORY — story block + image collage fade up on scroll,        */
/*  milestone strip fades up staggered.                                 */
/* ------------------------------------------------------------------ */
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function AboutStory() {
  return (
    <>
      <motion.section
        dir="rtl"
        className="py-20 px-5 md:px-8"
        style={{ background: C.bg }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ background: `${C.emerald}14`, color: C.emerald }}>
              {aboutStory.eyebrow}
            </span>
            <h2 className="text-2xl md:text-4xl mb-5" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>
              {aboutStory.title}
            </h2>
            {aboutStory.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base mb-4" style={{ color: C.slate }}>{p}</p>
            ))}
          </div>

          <div className="relative h-[380px]">
            <img
              src={aboutStory.images[0].src}
              alt={aboutStory.images[0].alt}
              className="absolute top-0 right-0 w-4/5 h-56 object-cover rounded-3xl shadow-xl"
            />
            <img
              src={aboutStory.images[1].src}
              alt={aboutStory.images[1].alt}
              className="absolute bottom-0 left-0 w-3/5 h-48 object-cover rounded-3xl shadow-2xl border-4"
              style={{ borderColor: C.bg }}
            />
          </div>
        </div>
      </motion.section>

      <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>{milestones.eyebrow}</span>
          <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>{milestones.title}</h2>
          <TileDivider />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {milestones.items.map((m, i) => (
              <motion.div key={m.year} variants={card} className="relative pt-6" style={{ borderTop: `3px solid ${C.copper}` }}>
                <span className="absolute -top-3 right-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: C.emerald, color: "#fff" }}>
                  {i + 1}
                </span>
                <div style={{ fontFamily: fontDisplay, color: C.emerald, fontSize: "24px", fontWeight: 800 }}>{m.year}</div>
                <h3 className="mt-1 mb-2 text-sm font-bold" style={{ color: C.ink }}>{m.title}</h3>
                <p className="text-sm" style={{ color: C.slate }}>{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
