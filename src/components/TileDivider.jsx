import React from "react";
import { C } from "../theme";

/* ------------------------------------------------------------------ */
/*  TILE DIVIDER — v2 signature motif                                   */
/*  Three small squares (a "tile chip"), replacing the old vein-line    */
/*  squiggle. Used under section eyebrows/titles.                       */
/* ------------------------------------------------------------------ */
export default function TileDivider({ align = "center" }) {
  const justify = align === "center" ? "center" : align === "start" ? "flex-start" : "flex-end";
  return (
    <div style={{ display: "flex", justifyContent: justify, gap: "6px", margin: "10px 0" }}>
      <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: C.copper }} />
      <span style={{ width: "16px", height: "8px", borderRadius: "2px", background: C.emerald }} />
      <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: C.copper }} />
    </div>
  );
}
