import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AboutStory from "../components/AboutStory";
import ValuesStats from "../components/ValuesStats";
import PalaceGallery from "../components/PalaceGallery";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { aboutBanner } from "../data/pageBannersData";

/* ------------------------------------------------------------------ */
/*  ABOUT PAGE — v2                                                     */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <PageBanner {...aboutBanner} />
      <AboutStory />
      <ValuesStats />
      <PalaceGallery />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
