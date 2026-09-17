import React from "react";

/* ------------------------------------------------------------------ */
/*  SOCIAL / BRAND ICONS                                               */
/*  lucide-react does not include brand logos (Facebook, Twitter/X,    */
/*  Instagram, WhatsApp, etc). These are small hand-built SVGs so the  */
/*  site doesn't depend on an icon pack for brand marks.               */
/*  Usage: <WhatsAppIcon size={18} color="#c9a35c" />                  */
/* ------------------------------------------------------------------ */

export function WhatsAppIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.4" />
      <path
        d="M10.5 21.5 L11.4 18.1 A6.8 6.8 0 1 1 14.2 20.7 L10.5 21.5 Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M13.2 13.2c-.3.6-.3 1.3.2 2.1.9 1.5 2 2.5 3.5 3.1.6.2 1.2.2 1.6-.2.2-.2.4-.5.4-.8 0-.2-.1-.3-.3-.4l-1.2-.6c-.2-.1-.4-.1-.5.1l-.4.5c-.1.1-.3.2-.4.1-.6-.3-1.1-.7-1.5-1.2-.4-.5-.7-1-.9-1.6-.1-.2 0-.4.1-.5l.5-.4c.1-.1.2-.3.1-.5l-.6-1.2c-.1-.2-.2-.3-.4-.3-.3 0-.7.1-.9.4-.1 0-.2.1-.3.2Z"
        fill={color}
      />
    </svg>
  );
}

export function FacebookIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.4" />
      <path
        d="M18.2 11.8h1.8V9h-2.2c-2 0-3.3 1.3-3.3 3.4v1.7h-2v2.8h2V23h2.9v-6.1h2l.4-2.8h-2.4v-1.4c0-.6.3-.9.8-.9Z"
        fill={color}
      />
    </svg>
  );
}

/* Twitter is now X — a simple crossed mark reads more current than the bird */
export function TwitterIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.4" />
      <path d="M11 11l10 10M21 11l-10 10" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.4" />
      <rect x="10.5" y="10.5" width="11" height="11" rx="3.2" stroke={color} strokeWidth="1.4" />
      <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="1.4" />
      <circle cx="19.4" cy="12.6" r="0.8" fill={color} />
    </svg>
  );
}

export function YoutubeIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.4" />
      <path d="M14.3 12.8v6.4l5.6-3.2-5.6-3.2Z" fill={color} />
    </svg>
  );
}
