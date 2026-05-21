"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookNowButton } from "./BookNowButton";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/book", label: "Book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide on scroll-down past 120px, show on scroll-up. Never hide while menu open.
      const delta = y - lastY.current;
      if (!open) {
        if (y > 120 && delta > 4) setHidden(true);
        else if (delta < -4) setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: hidden ? 0.35 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 safe-top transition-colors duration-500 ${
          scrolled || open
            ? "bg-[color-mix(in_oklab,var(--color-bone)_82%,transparent)] backdrop-blur-md border-b hairline"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group min-h-[44px] tap touch-manipulation"
            aria-label="Clutch Detailing — home"
          >
            <Logo />
            <span className="font-display text-lg md:text-xl tracking-tight text-forest">
              Clutch <span className="italic-display text-moss">Detailing</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-forest/80 hover:text-forest transition-colors link-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop: book button */}
          <div className="hidden md:block">
            <BookNowButton size="sm" />
          </div>

          {/* Mobile: book button + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <BookNowButton size="sm" label="Book" />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="w-11 h-11 grid place-items-center rounded-full hover:bg-forest/5 active:bg-forest/10 transition tap"
            >
              <span className="block w-5 h-px bg-forest relative before:absolute before:content-[''] before:left-0 before:right-0 before:-top-1.5 before:h-px before:bg-forest after:absolute after:content-[''] after:left-0 after:right-0 after:top-1.5 after:h-px after:bg-forest" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden bg-bone bg-grain safe-top safe-bottom scroll-touch overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Logo />
                <span className="font-display text-lg tracking-tight text-forest">
                  Clutch <span className="italic-display text-moss">Detailing</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 grid place-items-center rounded-full hover:bg-forest/5 active:bg-forest/10 tap"
              >
                <span className="block w-5 h-px bg-forest rotate-45 absolute" />
                <span className="block w-5 h-px bg-forest -rotate-45 absolute" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                hidden: {},
              }}
              className="px-5 mt-10 flex flex-col gap-4"
            >
              {links.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-5xl text-forest leading-none py-3 border-b hairline"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-6"
              >
                <BookNowButton size="lg" full />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-forest" />
      <path
        d="M16 6 L16 26 M6 16 L26 16"
        stroke="currentColor"
        strokeWidth="1"
        className="text-forest"
      />
      <circle cx="16" cy="16" r="4" fill="currentColor" className="text-moss" />
    </svg>
  );
}
