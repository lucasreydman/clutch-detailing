"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { site } from "@/lib/site";
import clsx from "clsx";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  full?: boolean;
  label?: string;
  /** Override Calendly URL (e.g. a per-service deep link) */
  url?: string;
  className?: string;
};

export function BookNowButton({
  size = "md",
  variant = "primary",
  full = false,
  label = "Book your detail",
  url,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);

  const calendlyUrl = url || site.calendlyUrl;

  const base =
    "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-full transition-all duration-300 will-change-transform";
  const sizes: Record<NonNullable<Props["size"]>, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-14 px-7 text-base",
  };
  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-forest text-bone hover:bg-forest-soft ring-luxe hover:shadow-luxe hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-forest border border-forest/20 hover:border-forest hover:bg-forest hover:text-bone",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={clsx(base, sizes[size], variants[variant], full && "w-full", className)}
      >
        <span>{label}</span>
        <Arrow />
      </button>

      {root && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={root}
          pageSettings={{
            backgroundColor: "f4f1ea",
            primaryColor: "1a2e1f",
            textColor: "1a2e1f",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      )}
    </>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M2 7H12M12 7L8 3M12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
