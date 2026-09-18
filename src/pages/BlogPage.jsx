import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { C } from "../theme";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { blogBanner } from "../data/pageBannersData";
import { blogPosts } from "../data/blogData";

const PAGE_SIZE = 4;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = blogPosts.slice(start, start + PAGE_SIZE);

  function goToPage(p) {
    const next = Math.max(1, Math.min(totalPages, p));
    setPage(next);
  }

  return (
    <div>
      <Navbar />
      <PageBanner {...blogBanner} />

      <section dir="rtl" className="py-16 px-5 md:px-8" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="الصفحة السابقة"
              className="w-9 h-9 rounded-full flex items-center justify-center border disabled:opacity-30"
              style={{ borderColor: C.emerald, color: C.emerald }}
            >
              <ChevronRight size={16} />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                  style={{
                    background: active ? C.copper : "transparent",
                    color: active ? "#ffffff" : C.ink,
                    border: active ? "none" : `1px solid ${C.line}`,
                  }}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="الصفحة التالية"
              className="w-9 h-9 rounded-full flex items-center justify-center border disabled:opacity-30"
              style={{ borderColor: C.emerald, color: C.emerald }}
            >
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
