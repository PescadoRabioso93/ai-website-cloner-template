import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  FacebookIcon,
  TikTokIcon,
  XTwitterIcon,
  EmailIcon,
} from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-8">
        {/* Row 1: Main Content */}
        <div className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-start">
          {/* Left column */}
          <div className="shrink-0">
            <span
              className="text-white/80"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "24px",
                fontWeight: 300,
              }}
            >
              Dr. Paruzzo
            </span>
          </div>

          {/* Center column */}
          <div className="flex flex-col items-start gap-1 md:items-center">
            <a
              href="https://wa.me/543584189267"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-white transition-opacity hover:opacity-70"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 36px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              WhatsApp: +54 358 418 9267
            </a>
            <a
              href="mailto:dr.paruzzo@gmail.com"
              className="uppercase text-white transition-opacity hover:opacity-70"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 36px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              dr.paruzzo@gmail.com
            </a>
          </div>

          {/* Right column */}
          <div className="shrink-0 md:text-right">
            <p
              className="max-w-[160px] uppercase text-white/70 md:ml-auto"
              style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
            >
              Donde convergen cuerpo, mente y tecnología
            </p>
          </div>
        </div>

        {/* Row 2: Social Icons */}
        <div className="flex flex-wrap gap-3 pb-8">
          {[
            { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/543584189267" },
            { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/dr.paruzzo" },
            { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@dr.paruzzo" },
            { icon: TikTokIcon, label: "TikTok", href: "https://tiktok.com/@dr.paruzzo" },
            { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/drparuzzo" },
            { icon: XTwitterIcon, label: "X", href: "https://x.com/DrParuzzo" },
            { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/dr.paruzzo" },
            { icon: EmailIcon, label: "Email", href: "mailto:dr.paruzzo@gmail.com" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#00d4ff]/50"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-white" />
            </a>
          ))}
        </div>

        {/* Row 3: Bottom Credits */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <span
            className="uppercase text-white/50"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            &copy; 2025&ensp;Dr. Paruzzo. Todos los derechos reservados.
          </span>
          <span
            className="uppercase text-white/50"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            Cuerpo · Mente · Tecnología
          </span>
        </div>
      </div>
    </footer>
  );
}
