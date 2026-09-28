import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutTeaser from "../components/AboutTeaser";
import ServicesGrid from "../components/ServicesGrid";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import VideoGallery from "../components/VideoGallery";
import PalaceGallery from "../components/PalaceGallery";


export default function HomePage() {
  return (
    <div>
      <Seo
        title=" رشيد تائلز | تلميع وترميم الرخام والبلاط في الرياض"
        description="رشيد تائلز متخصصون في جلي وتلميع وترميم الرخام والبلاط في الرياض للفلل والقصور والمنشآت التجارية. معاينة مجانية وأسعار واضحة."
        path="/"
      />
      <Navbar />
      <Hero />
      <AboutTeaser />
      <PalaceGallery></PalaceGallery>
      <ServicesGrid limit={6} />
      <WhyUs />
      <VideoGallery></VideoGallery>
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
