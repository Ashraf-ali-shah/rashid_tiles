import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import { faqEyebrow, faqItems } from "../data/faqData";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.bg }}>
      <div className="max-w-3xl mx-auto">
        <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>{faqEyebrow}</span>
        <TileDivider />

        <div className="mt-10 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="rounded-2xl overflow-hidden" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                <motion.button
                  whileHover={{ backgroundColor: C.cream }}
                  transition={{ duration: 0.15 }}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold" style={{ color: C.ink }}>{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ color: C.copper, flexShrink: 0, display: "flex" }}
                  >
                    <Plus size={18} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5 text-sm" style={{ color: C.slate }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
