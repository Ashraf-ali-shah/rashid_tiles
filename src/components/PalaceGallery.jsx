import React from "react";
import { motion } from "framer-motion";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { gallery } from "../data/aboutData";

/* ------------------------------------------------------------------ */
/*  PALACE GALLERY — images fade up staggered + slight zoom on hover.   */
/* ------------------------------------------------------------------ */
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } };

export default function PalaceGallery() {
  return (
    <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>{gallery.eyebrow}</span>
        <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>{gallery.title}</h2>
        <TileDivider />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {gallery.images.map((img) => (
            <motion.div key={img.src} variants={item} className="overflow-hidden rounded-2xl shadow">
              <motion.img
                src={img.src}
                alt={img.alt}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="w-full h-40 md:h-52 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
