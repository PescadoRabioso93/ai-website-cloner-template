"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: "(01)",
    title: "Quality, that lasts",
    description:
      "We choose refined, long-lasting materials — safe for your guests, gentle on the space, and effortless to care for.",
  },
  {
    number: "(02)",
    title: "Seamless, like nature",
    description:
      "One moment — an empty space. The next — a scene in bloom. Like a real flower opening at first light, our installations appear seamlessly.",
  },
  {
    number: "(03)",
    title: "As unique as each flower",
    description:
      "No two blooms are the same — and neither are our designs. We craft each project with soul, shaped by your story and brought to life with care.",
  },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading blur reveal
      const words = headingRef.current?.querySelectorAll<HTMLSpanElement>(".blur-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.1, filter: "blur(10px)", y: 20 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            stagger: 0.06,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      }

      // Benefit items stagger fade in
      const items = itemsRef.current?.querySelectorAll<HTMLDivElement>(".benefit-item");
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0.1, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
              },
            },
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative w-full overflow-hidden px-6 py-32 md:px-12"
    >
      {/* Background blue blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[1000px] w-[800px] opacity-40">
          <Image src="/images/blue-blur.webp" alt="" fill className="object-contain" aria-hidden="true" />
        </div>
        <div className="absolute -left-40 bottom-0 h-[800px] w-[600px] opacity-25">
          <Image src="/images/blue-blur.webp" alt="" fill className="object-contain" aria-hidden="true" />
        </div>
      </div>

      {/* Flower image */}
      <Image
        src="/images/flower-image.webp"
        alt=""
        width={400}
        height={600}
        className="pointer-events-none absolute right-0 top-1/2 h-auto w-[400px] -translate-y-1/2 object-contain opacity-20"
        aria-hidden="true"
      />

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        aria-hidden="true"
      >
        <source src="/videos/orchid-video.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="relative z-10">
        {/* Tag + Sub-heading */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
            <span className="text-small">benefits</span>
            <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
          </div>
          <span className="text-small text-white/60">
            discover Why cube Studio
          </span>
        </div>

        {/* Large Heading with blur words */}
        <div ref={headingRef} className="mb-24">
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.3vw, 105px)",
              fontWeight: 300,
              lineHeight: 0.76,
              textTransform: "uppercase",
            }}
          >
            <span className="block">
              <span className="blur-word inline-block">The</span>{" "}
              <span className="blur-word inline-block">beauty</span>{" "}
              <span className="blur-word inline-block">is</span>
            </span>
            <span className="block text-right">
              <span className="blur-word inline-block">in</span>{" "}
              <span className="blur-word inline-block">how</span>{" "}
              <span className="blur-word inline-block">it&apos;s</span>
            </span>
            <span className="block text-right mr-[10%]">
              <span className="blur-word inline-block">done</span>
            </span>
          </h2>
        </div>

        {/* Benefits List */}
        <div ref={itemsRef} className="flex flex-col gap-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="benefit-item flex flex-col items-start gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:gap-12"
            >
              <span className="text-small shrink-0 text-white/70">
                {benefit.number}
              </span>
              <h3 className="text-heading-small flex-1">{benefit.title}</h3>
              <p className="text-small max-w-[450px] leading-[1.6] text-white/40">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
