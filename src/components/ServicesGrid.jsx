import React from "react";
import { motion } from "framer-motion";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { servicesEyebrow, servicesTitle, servicesItems } from "../data/servicesData";
import  { img1, img2, img3, img4, img5, img6 } from '../data/imgs.js'
let imgs=[img1, img2, img3, img4, img5, img6]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ServicesGrid({ limit, showHeading = true, sectionId = "services", bg = C.bg }) {
  const items = limit ? servicesItems.slice(0, limit) : servicesItems;

  return (
    <section id={sectionId} dir="rtl" className="py-20 px-5 md:px-8" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto">
        {showHeading && (
          <>
            <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>
              {servicesEyebrow}
            </span>
            <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>
              {servicesTitle}
            </h2>
            <TileDivider />
          </>
        )}

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              variants={card}
              whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-3xl border flex items-start gap-4"
              style={{ background: C.surface, borderColor: C.line }}
            >
              <img
                src={imgs[i]}
                alt={s.title}
                className="w-16 h-16 rounded-2xl object-cover shrink-0"
              />
              <div>
                <span style={{ color: C.line, fontFamily: fontDisplay, fontSize: "12px", fontWeight: 800 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 mb-2 text-base" style={{ fontFamily: fontDisplay, color: C.emerald, fontWeight: 800 }}>
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: C.slate }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
