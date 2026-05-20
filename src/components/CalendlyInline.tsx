"use client";

import { InlineWidget } from "react-calendly";
import { site } from "@/lib/site";

export function CalendlyInline() {
  return (
    <div className="rounded-3xl overflow-hidden border hairline bg-bone-warm/40">
      <InlineWidget
        url={site.calendlyUrl}
        styles={{ height: "100%", minHeight: 720 }}
        pageSettings={{
          backgroundColor: "f4f1ea",
          primaryColor: "1a2e1f",
          textColor: "1a2e1f",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
}
