import Link from "next/link";
import { site } from "@/lib/site";
import { BookNowButton } from "./BookNowButton";

export function Footer() {
  return (
    <footer className="relative bg-forest text-bone overflow-hidden safe-bottom">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 md:gap-8">
          <div>
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h3 className="display-xl text-4xl md:text-5xl text-bone mb-6 text-balance max-w-[12ch]">
              Book your <span className="italic-display text-sand">detail.</span>
            </h3>
            <BookNowButton variant="ghostDark" size="md" />
          </div>

          <div>
            <p className="label-eyebrow mb-4">Reach</p>
            <ul className="space-y-1 text-sm text-bone/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow mb-4">Site</p>
            <ul className="space-y-1 text-sm text-bone/80">
              <li><Link href="/services" className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation">Services</Link></li>
              <li><Link href="/about" className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation">About</Link></li>
              <li><Link href="/team" className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation">Team</Link></li>
              <li><Link href="/book" className="inline-flex items-center min-h-[40px] link-underline hover:text-bone tap touch-manipulation">Book</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-bone/50 tracking-wide">
            © {new Date().getFullYear()} Clutch Detailing. Toronto, Canada.
          </p>
          <p className="text-xs text-bone/50 tracking-wide">
            Built by{" "}
            <a
              href="https://lucasreydman.xyz"
              target="_blank"
              rel="noreferrer"
              className="text-bone/80 hover:text-bone link-underline"
            >
              Lucas Reydman
            </a>
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-bone/[0.06] font-display leading-none tracking-tighter -mb-6 md:-mb-12 text-[28vw] md:text-[18vw]"
        style={{ marginLeft: "-2vw" }}
      >
        CLUTCH<span className="italic-display">·</span>
      </div>
    </footer>
  );
}
