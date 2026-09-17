import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { C } from "../theme";
import { WhatsAppIcon } from "./SocialIcons";
import { floatingContact } from "../data/floatingContactData";

/* ------------------------------------------------------------------ */
/*  FLOATING CONTACT BUTTON                                             */
/*  Closed state has a slow, subtle breathing pulse so it doesn't go    */
/*  unnoticed on a long page, without being distracting. Sub-buttons    */
/*  get a hover scale; main button rotates into an × when open.         */
/* ------------------------------------------------------------------ */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 60 }}>
      <motion.a
        href={floatingContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={floatingContact.whatsappLabel}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          bottom: open ? 132 : 0,
          opacity: open ? 1 : 0,
          scale: open ? 1 : 0.4,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute", right: "4px",
          width: "48px", height: "48px", borderRadius: "9999px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "#25D366", boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <WhatsAppIcon size={22} color="#ffffff" />
      </motion.a>

      <motion.a
        href={floatingContact.phoneHref}
        aria-label={floatingContact.phoneLabel}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          bottom: open ? 72 : 0,
          opacity: open ? 1 : 0,
          scale: open ? 1 : 0.4,
        }}
        transition={{ duration: 0.25, ease: "easeOut", delay: open ? 0.05 : 0 }}
        style={{
          position: "absolute", right: "4px",
          width: "48px", height: "48px", borderRadius: "9999px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: C.emerald, boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <Phone size={20} color="#ffffff" />
      </motion.a>

      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "إغلاق خيارات التواصل" : "تواصل معنا"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={
          open
            ? { rotate: 90, scale: 1 }
            : { rotate: 0, scale: [1, 1.06, 1] }
        }
        transition={
          open
            ? { duration: 0.25 }
            : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          width: "56px", height: "56px", borderRadius: "9999px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: C.copper, boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          border: "none", cursor: "pointer",
        }}
      >
        {open ? <X size={24} color="#ffffff" /> : <MessageCircle size={24} color="#ffffff" />}
      </motion.button>
    </div>
  );
}
