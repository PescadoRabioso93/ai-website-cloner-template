"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

interface CapabilityCard {
  number: string;
  title: string;
  description: string;
}

const CARDS: CapabilityCard[] = [
  {
    number: "(01)",
    title: "Artificial Flowers and Plants",
    description:
      "Low-maintenance, high-quality artificial plants for lasting indoor & outdoor aesthetics",
  },
  {
    number: "(02)",
    title: "Custom Event Decorations",
    description:
      "Tailored solutions for weddings, corporate events, and private parties",
  },
  {
    number: "(03)",
    title: "Modern Table Settings",
    description:
      "Elegant and modern table designs that complement every theme",
  },
  {
    number: "(04)",
    title: "Design Consultations",
    description:
      "Expert advice on theme development, color schemes, and layout planning",
  },
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading word-by-word blur reveal
      const words = headingRef.current?.querySelectorAll<HTMLSpanElement>(".blur-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.1, filter: "blur(12px)", y: 30 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            stagger: 0.06,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: true,
            },
          },
        );
      }

      // Mirror image parallax
      gsap.to(".mirror-parallax", {
        y: -80,
        scrollTrigger: {
          trigger: ".mirror-parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-black">
      {/* Background blue gradient blobs */}
      <div className="pointer-events-none absolute top-0 left-0 h-[1400px] w-[800px] opacity-40">
        <Image src="/images/blue-blur.webp" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute top-[40%] right-0 h-[1400px] w-[800px] opacity-30">
        <Image src="/images/blue-blur.webp" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute bottom-[10%] left-1/4 h-[1400px] w-[800px] opacity-25">
        <Image src="/images/blue-blur.webp" alt="" fill className="object-contain" aria-hidden="true" />
      </div>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute top-[20%] left-1/2 z-0 h-auto w-full max-w-[1000px] -translate-x-1/2 opacity-15"
      >
        <source src="/videos/orchid-video.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="relative z-10">
        {/* Part 1: Section Heading — blur reveal */}
        <div className="px-8 pb-20 pt-32">
          <div className="mb-12 flex items-center gap-2">
            <StarIcon className="h-3 w-3 animate-[starSpin_10s_linear_infinite]" />
            <span className="text-[10.5px] font-normal uppercase tracking-[0.05em] text-white">
              capabilities
            </span>
          </div>

          <div ref={headingRef} className="flex flex-col gap-1">
            <h2 className="text-left" style={{ fontSize: "clamp(2.5rem, 7.3vw, 105px)", fontWeight: 300, lineHeight: 0.76, textTransform: "uppercase" }}>
              <span className="blur-word inline-block">Let&apos;s</span>{" "}
              <span className="blur-word inline-block">make</span>
            </h2>
            <h2 className="text-right" style={{ fontSize: "clamp(2.5rem, 7.3vw, 105px)", fontWeight: 300, lineHeight: 0.76, textTransform: "uppercase" }}>
              <span className="blur-word inline-block">the</span>{" "}
              <span className="blur-word inline-block">moment</span>
            </h2>
            <h2 className="text-left" style={{ fontSize: "clamp(2.5rem, 7.3vw, 105px)", fontWeight: 300, lineHeight: 0.76, textTransform: "uppercase" }}>
              <span className="blur-word inline-block">blossom</span>
            </h2>
          </div>
        </div>

        {/* Part 2: Description + CTA */}
        <div className="flex items-start justify-between px-8 pb-24">
          <div className="flex items-center gap-2">
            <StarIcon className="h-3 w-3" />
            <span className="text-[10.5px] font-normal uppercase tracking-[0.05em] text-white">
              capabilities
            </span>
          </div>
          <div className="flex max-w-[300px] flex-col items-end gap-6">
            <p className="text-[10.5px] uppercase leading-[1.6] tracking-[0.05em] text-white/60">
              What fades in form can still remain in feeling. Our arrangements
              reflect your moment — its light, its tone, its soul — and let it
              echo gently, even after it&apos;s gone.
            </p>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Plan Your Event
            </a>
          </div>
        </div>

        {/* Part 3: Mirror Image with parallax */}
        <div className="relative flex justify-center pb-32">
          <div className="mirror-parallax relative w-[65vw]">
            <Image
              src="/images/mirror.webp"
              alt="Decorative mirror"
              width={1200}
              height={800}
              className="h-auto w-full opacity-80"
              sizes="65vw"
            />
          </div>
        </div>

        {/* Part 4: Capability Cards — 3D sticky stack with overlap */}
        <div className="relative" style={{ perspective: "1200px" }}>
          {CARDS.map((card, i) => (
            <div key={card.number} className="h-[2000px]">
              <div
                className="sticky top-1/2 flex -translate-y-1/2 items-center justify-center"
              >
                <div
                  className="cap-card-gradient relative flex h-[482px] w-[425px] flex-col items-center justify-between rounded-[29px] px-10 pb-12 pt-16 shadow-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`,
                    boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 120px rgba(30,64,175,0.08)",
                  }}
                >
                  {/* Border overlay */}
                  <Image
                    src="/images/capabilities-border.webp"
                    alt=""
                    fill
                    className="pointer-events-none rounded-[29px] object-cover"
                    sizes="425px"
                  />

                  {/* Card content */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-between">
                    <span className="text-[10.5px] uppercase tracking-[0.05em] text-white/80">
                      {card.number}
                    </span>
                    <h3 className="font-display text-center text-[48px] font-light uppercase leading-[0.9] text-white">
                      {card.title}
                    </h3>
                    <p className="max-w-[280px] text-center text-[10.5px] uppercase leading-[1.6] tracking-[0.05em] text-white/60">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
