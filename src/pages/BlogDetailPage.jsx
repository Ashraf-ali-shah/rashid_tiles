import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";
import { C, fontDisplay } from "../theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { blogPosts } from "../data/blogData";


export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" });
  }

  return (
    <div>
      <Navbar />

      <section dir="rtl" className="relative overflow-hidden">
        <img src={post.thumbnail.src} alt={post.thumbnail.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${C.emerald}ee 0%, ${C.dark}e6 60%, ${C.emerald}ee 100%)` }} />
        <div className="relative max-w-3xl mx-auto text-center px-6 py-20 md:py-24">
          <h1 className="text-2xl md:text-4xl leading-snug mb-5" style={{ color: "#ffffff", fontFamily: fontDisplay, fontWeight: 800 }}>
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap text-xs md:text-sm" style={{ color: "#d7e3dd" }}>
            <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section dir="rtl" className="py-16 px-5 md:px-8" style={{ background: C.bg }}>
        <article className="max-w-2xl mx-auto">
          <NavLink to="/blog" className="inline-flex items-center gap-1 text-sm font-bold mb-8" style={{ color: C.copper }}>
            <ChevronLeft size={15} className="rotate-180" /> العودة إلى المدونة
          </NavLink>

          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.ink }}>{post.intro}</p>

          {post.contentImage && (
            <img src={post.contentImage.src} alt={post.contentImage.alt} className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg mb-10" />
          )}

          {post.sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-lg md:text-xl mb-3" style={{ fontFamily: fontDisplay, color: C.emerald, fontWeight: 800 }}>{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.slate }}>{p}</p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
