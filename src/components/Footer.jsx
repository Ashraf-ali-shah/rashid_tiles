import React from "react";
import { NavLink } from "react-router-dom";
import { C, fontDisplay, BUSINESS } from "../theme";
import { navItems } from "../data/navData";
import { footerDesc, footerMenuTitle, footerContactTitle, socialLinks } from "../data/footerData";
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";

/* ------------------------------------------------------------------ */
/*  FOOTER — v3                                                         */
/*  Deep emerald-black surface. Quick links use <NavLink>; social/      */
/*  phone links stay plain <a> since they're external. RTL layout.      */
/* ------------------------------------------------------------------ */

const iconMap = { facebook: FacebookIcon, twitter: TwitterIcon, instagram: InstagramIcon, whatsapp: WhatsAppIcon };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer dir="rtl" style={{ background: C.dark }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl grid grid-cols-2 gap-0.5 p-1.5" style={{ background: C.emeraldSoft }}>
              <span style={{ background: "#ffffff", borderRadius: "2px" }} />
              <span style={{ background: C.copper, borderRadius: "2px" }} />
              <span style={{ background: C.copper, borderRadius: "2px" }} />
              <span style={{ background: "#ffffff", borderRadius: "2px" }} />
            </div>
            <span style={{ color: "#ffffff", fontFamily: fontDisplay, fontSize: "18px", fontWeight: 800 }}>{BUSINESS.nameAr}</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#b7c2bc" }}>{footerDesc}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm" style={{ color: C.copperSoft }}>{footerMenuTitle}</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} end={item.to === "/"} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#cdd6d1" }}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm" style={{ color: C.copperSoft }}>{footerContactTitle}</h4>
          <a  href={BUSINESS.phoneHref} className="block text-sm mb-2 hover:opacity-80 transition-opacity" style={{ color: "#cdd6d1" }}>{BUSINESS.phoneDisplay}</a>
          <p className="text-sm mb-4" style={{ color: "#cdd6d1" }}>{BUSINESS.address}</p>
          <div className="flex gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) return null;
              return (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.icon} className="hover:opacity-80 transition-opacity">
                  <Icon size={19} color={C.copperSoft} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs" style={{ borderColor: "#1e352c", color: "#7f8f88" }}>
        {`جميع الحقوق محفوظة © ${year} · تصميم created by Ashraf ali`}
      </div>
    </footer>
  );
}
