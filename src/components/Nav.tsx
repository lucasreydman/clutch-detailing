"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[color-mix(in_oklab,var(--color-bone)_88%,transparent)] backdrop-blur-md border-b hairline"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
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
          <div className="md:hidden flex items-center gap-2">
            <BookNowButton size="sm" label="Book" />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-forest/5 transition"
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
            className="fixed inset-0 z-[60] md:hidden bg-bone bg-grain"
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
                className="w-10 h-10 grid place-items-center rounded-full hover:bg-forest/5"
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
