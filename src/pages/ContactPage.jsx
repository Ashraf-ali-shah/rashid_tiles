import React from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { contactBanner } from "../data/pageBannersData";


export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <PageBanner {...contactBanner} />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}
