import React from "react";
import { motion } from "framer-motion";
import { Gem, Wrench, Leaf, MapPin } from "lucide-react";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { values, stats } from "../data/aboutData";

/* ------------------------------------------------------------------ */
/*  VALUES + STATS — icon cards fade up staggered + hover lift;         */
/*  stats numbers fade up together.                                     */
/* ------------------------------------------------------------------ */
const iconMap = { precision: Gem, equipment: Wrench, eco: Leaf, local: MapPin };
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function ValuesStats() {
  return (
    <>
      <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>{values.eyebrow}</span>
          <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>{values.title}</h2>
          <TileDivider />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.items.map((v) => {
              const Icon = iconMap[v.icon];
              return (
                <motion.div
                  key={v.title}
                  variants={card}
                  whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(0,0,0,0.06)" }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-3xl text-center"
                  style={{ background: C.cream }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: C.emerald }}>
                    <Icon size={22} color="#ffffff" />
                  </div>
                  <h3 className="mb-2 text-sm" style={{ fontFamily: fontDisplay, color: C.emerald, fontWeight: 800 }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: C.slate }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section
        dir="rtl"
        className="py-14 px-5 md:px-8"
        style={{ background: C.bg, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: fontDisplay, color: C.copper, fontSize: "32px", fontWeight: 800 }}>{s.value}</div>
              <div className="text-xs md:text-sm mt-1" style={{ color: C.slate }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
