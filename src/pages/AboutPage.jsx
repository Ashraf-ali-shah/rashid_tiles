import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AboutStory from "../components/AboutStory";
import ValuesStats from "../components/ValuesStats";
import PalaceGallery from "../components/PalaceGallery";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { aboutBanner } from "../data/pageBannersData";


export default function AboutPage() {
  return (
    <div>
      <Seo
        title="من نحن"
        description="تعرف على فريق رشيد تائلز وخبرتنا في تلميع وترميم الرخام والبلاط في الرياض، بمعدات حديثة وعمل يتحدث عن نفسه."
        path="/about"
      />
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
