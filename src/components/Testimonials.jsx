import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { TwitterIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { testimonialsEyebrow, testimonialItems } from "../data/testimonialsData";

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS — quote card animates in/out on change (Framer Motion  */
/*  replaces the old CSS keyframe fade), arrows/dots get hover/tap.     */
/* ------------------------------------------------------------------ */
const iconMap = { twitter: TwitterIcon, whatsapp: WhatsAppIcon, instagram: InstagramIcon, facebook: FacebookIcon };

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonialItems.length;
  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);
  const current = testimonialItems[index];
  const Icon = iconMap[current.icon] || TwitterIcon;

  return (
    <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.surface }}>
      <div className="max-w-3xl mx-auto">
        <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>{testimonialsEyebrow}</span>
        <TileDivider />

        <div className="flex items-center gap-3 md:gap-6 mt-10">
          <motion.button
            onClick={goPrev}
            aria-label="السابق"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: `${C.emerald}12`, color: C.emerald }}
          >
            <ChevronRight size={18} />
          </motion.button>

          <div className="flex-1 relative" style={{ minHeight: "180px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-7 md:p-9 rounded-3xl text-center"
                style={{ background: C.cream }}
              >
                <p className="text-sm md:text-base mb-5 leading-relaxed" style={{ color: C.ink }}>"{current.quote}"</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-bold" style={{ color: C.emerald }}>{current.name}</span>
                  <Icon size={15} color={C.copper} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={goNext}
            aria-label="التالي"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: `${C.emerald}12`, color: C.emerald }}
          >
            <ChevronLeft size={18} />
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonialItems.map((item, i) => (
            <motion.button
              key={item.name}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.3 }}
              animate={{ width: i === index ? "20px" : "7px" }}
              transition={{ duration: 0.2 }}
              style={{ height: "7px", borderRadius: "9999px", background: i === index ? C.copper : C.line }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
