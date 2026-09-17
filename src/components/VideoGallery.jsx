import React from "react";
import { motion } from "framer-motion";
import { C, fontDisplay } from "../theme";
import TileDivider from "./TileDivider";
import {
  videoGalleryEyebrow,
  videoGalleryTitle,
  videoGallerySubtitle,
  videoItems,
} from "../data/videoData";



const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function VideoGallery() {
  return (
    <section dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-xs font-bold uppercase mb-1" style={{ color: C.copper }}>
          {videoGalleryEyebrow}
        </span>
        <h2 className="text-center text-2xl md:text-4xl" style={{ fontFamily: fontDisplay, color: C.ink, fontWeight: 800 }}>
          {videoGalleryTitle}
        </h2>
        <p className="text-center text-sm md:text-base mt-3 max-w-xl mx-auto" style={{ color: C.slate }}>
          {videoGallerySubtitle}
        </p>
        <TileDivider />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {videoItems.map((v) => (
            <motion.div
              key={v.src}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl overflow-hidden border"
              style={{ borderColor: C.line, background: "#000" }}
            >
              <video
                src={v.src}
                controls
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={v.label}
                className="w-full h-64 md:h-72 object-cover block"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
