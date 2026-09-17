import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Wrench, MapPin, ShieldCheck } from "lucide-react";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { whyEyebrow, whyTitle, whyItems } from "../data/whyData";

/* ------------------------------------------------------------------ */
/*  WHY US — icon cards fade up on scroll (staggered) + hover lift.     */
/* ------------------------------------------------------------------ */
const icons = [Sparkles, Wrench, MapPin, ShieldCheck];

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function WhyUs() {
  return (
    <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>
          {whyEyebrow}
        </span>
        <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>
          {whyTitle}
        </h2>
        <TileDivider />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyItems.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={w.title}
                variants={card}
                whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl text-center"
                style={{ background: C.surface }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${C.emerald}14` }}>
                  <Icon size={20} color={C.emerald} />
                </div>
                <h3 className="mb-2 text-sm" style={{ fontFamily: fontDisplay, color: C.emerald, fontWeight: 800 }}>{w.title}</h3>
                <p className="text-sm" style={{ color: C.slate }}>{w.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
