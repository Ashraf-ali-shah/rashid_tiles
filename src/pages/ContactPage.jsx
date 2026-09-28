import React from "react"
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { contactBanner } from "../data/pageBannersData";


export default function ContactPage() {
  return (
    <div>
      <Seo
        title="اتصل بنا"
        description="احجز معاينة مجانية لأرضيتك أو تواصل معنا عبر الواتساب والهاتف. رشيد تائلز، الرياض."
        path="/contact"
      />
      <Navbar />
      <PageBanner {...contactBanner} />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}
