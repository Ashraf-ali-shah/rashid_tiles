import React from "react";
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


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutTeaser />
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
