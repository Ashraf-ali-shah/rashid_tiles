import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ServicesGrid from "../components/ServicesGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { servicesBanner } from "../data/pageBannersData";
import { C } from "../theme";


export default function ServicesPage() {
  return (
    <div>
      <Seo
        title="خدماتنا"
        description="جلي وتلميع الرخام، تلميع البورسلين والسيراميك، إزالة البقع والعزل، وترميم الأرضيات القديمة في الرياض من رشيد تائلز."
        path="/services"
      />
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
