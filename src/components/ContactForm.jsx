import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { C, fontDisplay, BUSINESS } from "../theme";
import { WhatsAppIcon } from "./SocialIcons";
import { contact, map, directContact } from "../data/contactData";


export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error,setError]=useState(false)


    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
        let formData=new FormData(e.target);
        const response=await fetch('https://script.google.com/macros/s/AKfycbzhyfJ-6K1YyvmcuL0CPN1R-F3p0scY0MKzOEKCTq5KJ-AlMh9LBGiIrtNWb8L2zHvy/exec',{
            method:'POST',
            body:formData
        })
        const res=await response.json()
        setSent(true)
        console.log("sucessfully delivered")
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            console.log(error.message)
        }
    }

  return (
    <>
      <section id="contact" dir="rtl" className="py-20 px-5 md:px-8" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.form
            className="space-y-4 p-7 rounded-3xl"
            onSubmit={handleSubmit}
            style={{ background: C.surface, border: `1px solid ${C.line}` }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs font-bold uppercase mb-2" style={{ color: C.copper }}>{contact.formLabel}</p>

            <div className="grid grid-cols-2 gap-4">
              <input name="first_name" type="text" required placeholder={contact.firstName} className="w-full px-4 py-3 rounded-xl border text-sm bg-transparent" style={{ borderColor: C.line }} />
              <input name="last_name" type="text" required placeholder={contact.lastName} className="w-full px-4 py-3 rounded-xl border text-sm bg-transparent" style={{ borderColor: C.line }} />
            </div>
            <input name="email" type="email" required placeholder={contact.email} className="w-full px-4 py-3 rounded-xl border text-sm bg-transparent" style={{ borderColor: C.line }} />
            <input name="phone" type="tel" placeholder={contact.phone} className="w-full px-4 py-3 rounded-xl border text-sm bg-transparent" style={{ borderColor: C.line }} />
            <textarea name="message" required placeholder={contact.message} rows={4} className="w-full px-4 py-3 rounded-xl border text-sm bg-transparent" style={{ borderColor: C.line }} />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="px-8 py-3 rounded-full text-sm font-bold"
              style={{ background: C.emerald, color: "#ffffff" }}
            >
              {contact.send}
            </motion.button>

            {sent && <p className="text-sm" style={{ color: C.emerald }}>{contact.successMessage}</p>}
            {error && <p className="text-sm text-red-500" style={{ color: C.emerald }}>فشل إرسال النموذج. يرجى المحاولة مرة أخرى.
</p>}

          </motion.form>

          <motion.div
            className="rounded-3xl overflow-hidden border h-80 md:h-full relative"
            style={{ borderColor: C.line }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <iframe title="خريطة الرياض" src={map.embedSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
            <a
              href={map.linkHref}
              target="_blank"
              rel="noreferrer"
              className="absolute top-3 right-3 flex items-center gap-1 text-xs px-3 py-2 rounded-full shadow"
              style={{ background: C.emerald, color: "#ffffff" }}
            >
              <MapPin size={13} /> {map.openLabel}
            </a>
          </motion.div>
        </div>
      </section>

      <section dir="rtl" className="py-12 px-5 md:px-8 text-center" style={{ background: C.cream }}>
        <span className="block text-xs font-bold uppercase mb-6" style={{ color: C.copper }}>{directContact.eyebrow}</span>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.a
          dir="ltr"
            href={BUSINESS.phoneHref}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border"
            style={{ borderColor: C.emerald, color: C.emerald }}
          >
            <Phone size={16} /> {BUSINESS.phoneDisplay}
          </motion.a>
          <motion.a
            href={BUSINESS.whatsappHref}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
            style={{ background: "#25D366", color: "#ffffff" }}
          >
            <WhatsAppIcon size={16} color="#ffffff" /> واتساب
          </motion.a>
        </div>
        <p className="mt-6 text-sm" style={{ color: C.slate }}>{directContact.addressLabel}: {BUSINESS.address}</p>
      </section>
    </>
  );
}
