import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FONT_IMPORT_URL } from "./theme";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";


export default function App() {
  return (
    <div dir="rtl" lang="ar">
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}