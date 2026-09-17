import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import { C, fontDisplay } from "../theme";

/* ------------------------------------------------------------------ */
/*  BLOG CARD — hover lift + image zoom.                                */
/* ------------------------------------------------------------------ */
const MotionNavLink = motion(NavLink);

export default function BlogCard({ post }) {
  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" });
  }

  return (
    <MotionNavLink
      to={`/blog/${post.slug}`}
      whileHover="hover"
      initial="rest"
      className="text-start rounded-3xl overflow-hidden border shadow-sm flex flex-col"
      style={{ background: C.surface, borderColor: C.line }}
    >
      <motion.div
        variants={{ rest: { y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" }, hover: { y: -5, boxShadow: "0 14px 30px rgba(0,0,0,0.08)" } }}
        transition={{ duration: 0.2 }}
        className="flex flex-col flex-1"
      >
        <div className="overflow-hidden">
          <motion.img
            src={post.thumbnail.src}
            alt={post.thumbnail.alt}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.3 }}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-[11px] mb-2" style={{ color: C.slate }}>
            <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
          <h3 className="mb-2 text-base leading-snug" style={{ fontFamily: fontDisplay, color: C.emerald, fontWeight: 800 }}>
            {post.title}
          </h3>
          <p className="text-xs leading-relaxed mb-4" style={{ color: C.slate }}>{post.excerpt}</p>
          <span className="mt-auto text-xs font-bold inline-flex items-center gap-1" style={{ color: C.copper }}>
            اقرأ المزيد <ChevronLeft size={13} />
          </span>
        </div>
      </motion.div>
    </MotionNavLink>
  );
}
