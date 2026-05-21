"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

/**
 * Mobile-only floating Book CTA.
 * Appears once the user has scrolled past the hero (~one viewport),
 * sits above the iOS home indicator via env(safe-area-inset-bottom).
 */
export function MobileBookFab() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setRoot(document.body);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // Show after the hero is roughly out of view (~80% of viewport)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-5 pb-4 pt-3 pointer-events-none safe-bottom"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
          >
            <button
              onClick={() => setOpen(true)}
              className="pointer-events-auto w-full h-14 rounded-full bg-forest text-bone font-medium tracking-tight shadow-luxe ring-luxe touch-manipulation select-none active:scale-[0.97] active:transition-[transform] active:duration-75 flex items-center justify-center gap-2"
              aria-label="Book your detail"
            >
              <span>Book your detail</span>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {root && (
        <PopupModal
          url={site.calendlyUrl}
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
