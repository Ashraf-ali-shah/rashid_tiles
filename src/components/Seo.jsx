import { useEffect } from "react";

const SITE = "https://rashidtiles.com";
const SITE_NAME = "رشيد تائلز";
const DEFAULT_IMAGE = `${SITE}/og-image.webp`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
  }, [title, description, path, image]);

  return null;
}