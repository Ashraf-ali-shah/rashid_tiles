import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ServicesGrid from "../components/ServicesGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { servicesBanner } from "../data/pageBannersData";
import { C } from "../theme";

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE — v2                                                  */
/* ------------------------------------------------------------------ */
export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <PageBanner {...servicesBanner} />
      <ServicesGrid showHeading={false} bg={C.bg} />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
