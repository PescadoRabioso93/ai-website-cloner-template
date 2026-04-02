"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { StarIcon } from "@/components/icons";
import {
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
  XTwitterIcon,
  FacebookIcon,
  RedditIcon,
  ThreadsIcon,
  WhatsAppIcon,
} from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: "Instagram",
    handle: "@dr.paruzzo",
    href: "https://instagram.com/dr.paruzzo",
    icon: InstagramIcon,
    color: "#E1306C",
    description: "Contenido diario, reels, historias",
  },
  {
    name: "YouTube",
    handle: "@dr.paruzzo",
    href: "https://youtube.com/@dr.paruzzo",
    icon: YouTubeIcon,
    color: "#FF0000",
    description: "Videos largos, análisis profundos",
  },
  {
    name: "TikTok",
    handle: "@dr.paruzzo",
    href: "https://tiktok.com/@dr.paruzzo",
    icon: TikTokIcon,
    color: "#ffffff",
    description: "Clips cortos, tips rápidos",
  },
  {
    name: "LinkedIn",
    handle: "drparuzzo",
    href: "https://linkedin.com/in/drparuzzo",
    icon: LinkedInIcon,
    color: "#0A66C2",
    description: "Networking profesional, artículos",
  },
  {
    name: "X / Twitter",
    handle: "@DrParuzzo",
    href: "https://x.com/DrParuzzo",
    icon: XTwitterIcon,
    color: "#ffffff",
    description: "Opiniones, threads, debates",
  },
  {
    name: "Facebook",
    handle: "dr.paruzzo",
    href: "https://facebook.com/dr.paruzzo",
    icon: FacebookIcon,
    color: "#1877F2",
    description: "Comunidad, eventos, lives",
  },
  {
    name: "IG Animaciones",
    handle: "@dr.paruzzo_animaciones",
    href: "https://instagram.com/dr.paruzzo_animaciones",
    icon: InstagramIcon,
    color: "#C13584",
    description: "Animaciones 3D médicas",
  },
  {
    name: "TikTok Animaciones",
    handle: "@dr.paruzzo_animaciones",
    href: "https://tiktok.com/@dr.paruzzo_animaciones",
    icon: TikTokIcon,
    color: "#69C9D0",
    description: "Clips de animaciones virales",
  },
  {
    name: "Reddit",
    handle: "dr_paruzzo",
    href: "https://reddit.com/user/dr_paruzzo",
    icon: RedditIcon,
    color: "#FF4500",
    description: "Discusiones, AMAs",
  },
  {
    name: "Threads",
    handle: "@dr.paruzzo",
    href: "https://threads.net/@dr.paruzzo",
    icon: ThreadsIcon,
    color: "#ffffff",
    description: "Conversaciones casuales",
  },
  {
    name: "WhatsApp",
    handle: "+54 358 418 9267",
    href: "https://wa.me/543584189267",
    icon: WhatsAppIcon,
    color: "#25D366",
    description: "Mensajes directos",
  },
];

export function PortfolioSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ─── Heading: SplitType word blur reveal ─── */
      if (headingRef.current) {
        const split = new SplitType(headingRef.current, {
          types: "words",
          tagName: "span",
        });
        if (split.words) {
          gsap.set(split.words, {
            opacity: 0,
            filter: "blur(0.8vw)",
            scale: 0.95,
          });
          gsap.to(split.words, {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.8,
            ease: "power1.inOut",
            stagger: { each: 0.4 / split.words.length },
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          });
        }
      }

      /* ─── Grid cards stagger entrance ─── */
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".social-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio-trigger"
      className="relative w-full overflow-hidden px-6 py-32 md:px-12"
    >
      {/* Tag + Heading */}
      <div className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
          <span className="text-small">redes</span>
          <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
        </div>

        <div ref={headingRef}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.3vw, 105px)",
              fontWeight: 200,
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
            }}
          >
            Encontrame en todos lados
          </h2>
        </div>
      </div>

      {/* Social Media Grid */}
      <div
        ref={gridRef}
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card group relative flex flex-col items-center gap-3 rounded-2xl border border-white/8 px-4 py-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)",
            }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at center, ${social.color}10 0%, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <social.icon className="h-8 w-8 text-white/70 transition-colors duration-300 group-hover:text-white" />
            </div>

            {/* Name */}
            <span className="relative z-10 text-[13px] font-light tracking-wide text-white">
              {social.name}
            </span>

            {/* Handle */}
            <span className="relative z-10 text-[10px] uppercase tracking-[0.05em] text-white/40">
              {social.handle}
            </span>

            {/* Description */}
            <span className="relative z-10 text-center text-[9px] uppercase tracking-[0.04em] text-white/25 transition-colors duration-300 group-hover:text-white/50">
              {social.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
