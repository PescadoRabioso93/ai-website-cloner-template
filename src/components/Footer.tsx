import { WhatsAppIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-8">
        {/* Row 1: Main Content */}
        <div className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-start">
          {/* Left column */}
          <div className="shrink-0">
            <span
              className="lowercase text-white/80"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "24px",
                fontWeight: 300,
              }}
            >
              naya studio
            </span>
          </div>

          {/* Center column */}
          <div className="flex flex-col items-start gap-1 md:items-center">
            <a
              href="tel:+971504757773"
              className="uppercase text-white transition-opacity hover:opacity-70"
              style={{
                fontSize: "clamp(2rem, 4vw, 48px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              +971 504757773
            </a>
            <a
              href="mailto:info@nayastudiodubai.com"
              className="uppercase text-white transition-opacity hover:opacity-70"
              style={{
                fontSize: "clamp(2rem, 4vw, 48px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              info@nayastudiodubai.com
            </a>
          </div>

          {/* Right column */}
          <div className="shrink-0 md:text-right">
            <p
              className="max-w-[120px] uppercase text-white/70 md:ml-auto"
              style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
            >
              Decor that changes everything
            </p>
          </div>
        </div>

        {/* Row 2: Social Icons */}
        <div className="flex gap-3 pb-8">
          <a
            href="https://wa.me/971504757773"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/40"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/40"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/40"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 text-white" />
          </a>
        </div>

        {/* Row 3: Bottom Credits */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <span
            className="uppercase text-white/50"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            &copy; 2024&ensp;All rights reserved.
          </span>
          <span
            className="uppercase text-white/50"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            Designed by Anastasiia Hodubiak
          </span>
          <span
            className="uppercase text-white/50"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            Website by Artycoders Agency
          </span>
        </div>
      </div>
    </footer>
  );
}
