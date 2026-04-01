"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarIcon, ArrowRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const subHeroRef = useRef<HTMLDivElement>(null);
  const subHeroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const rockVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax — image scales down and fades as you scroll
      gsap.to(".hero-bg-image", {
        scale: 1.1,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Rock video parallax — moves up and rotates as you scroll
      if (rockVideoRef.current) {
        gsap.to(rockVideoRef.current, {
          y: -200,
          rotation: 15,
          scrollTrigger: {
            trigger: heroContentRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Sub-hero heading: word-by-word blur reveal driven by scroll
      const words =
        subHeroHeadingRef.current?.querySelectorAll<HTMLSpanElement>(
          ".blur-word",
        );
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, filter: "blur(12px)", y: 20 },
          {
            opacity: 0.6,
            filter: "blur(0px)",
            y: 0,
            stagger: 0.08,
            scrollTrigger: {
              trigger: subHeroHeadingRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const headingWords = [
    { line: ["DESIGN"] },
    { line: ["THAT", "BLOOMS"] },
    { line: ["INTO"] },
    { line: ["EMOTION"] },
  ];

  return (
    <section className="relative" style={{ height: "2755px" }}>
      {/* ───── Part 1: Hero Content ───── */}
      <div ref={heroContentRef} className="relative h-screen overflow-hidden">
        {/* Hero background image */}
        <div className="hero-bg-image absolute inset-0">
          <Image
            src="/images/hero-image.webp"
            alt="Cube Studio hero — surreal landscape with reflective cube"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </div>

        {/* 3D Rock/Crystal video element */}
        <video
          ref={rockVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-1/2 top-[55%] z-[5] w-[35vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2"
          style={{ mixBlendMode: "screen" }}
        >
          <source src="/videos/hero-rock.webm" type="video/webm" />
        </video>

        {/* Heading: CUBE STUDIO */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <h1
            className="font-display text-center text-white"
            style={{
              fontSize: "clamp(8rem, 13.5vw, 195px)",
              fontWeight: 300,
              lineHeight: 0.76,
              textTransform: "uppercase",
            }}
          >
            <span className="block">cube</span>
            <span className="block">studio</span>
          </h1>
        </div>

        {/* Circular scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1">
          {/* Circular arc */}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            className="mb-1 opacity-40"
          >
            <path
              d="M 5 38 A 35 35 0 0 1 75 38"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
          <span className="text-[10px] font-normal uppercase tracking-[0.15em] text-white/80">
            Scroll down
          </span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className="mt-1 text-white/60"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      </div>

      {/* ───── Star decoration ───── */}
      <div className="flex items-center justify-center py-12">
        <StarIcon className="h-4 w-4 animate-[starSpin_12s_linear_infinite]" />
      </div>

      {/* ───── Part 2: Sub-Hero ───── */}
      <div
        ref={subHeroRef}
        className="relative overflow-hidden"
        style={{ height: "1855px" }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/blur-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/videos/blur-bg.webm" type="video/webm" />
          <source src="/videos/blur-bg.mp4" type="video/mp4" />
        </video>

        {/* Blue blur blob */}
        <div
          className="absolute bottom-0 right-0 opacity-60"
          style={{ width: "700px", height: "700px" }}
        >
          <Image
            src="/images/blue-blur.webp"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Second blue blob — top left */}
        <div
          className="absolute -left-40 top-1/4 opacity-30"
          style={{ width: "600px", height: "600px" }}
        >
          <Image
            src="/images/blue-blur.webp"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Sub-hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          {/* Large heading — MASSIVE like the original */}
          <h2
            ref={subHeroHeadingRef}
            className="text-center font-light"
            style={{
              fontSize: "clamp(3rem, 10vw, 150px)",
              lineHeight: 0.85,
              textTransform: "uppercase",
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 200,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "-0.02em",
            }}
          >
            {headingWords.map((lineObj, lineIdx) => (
              <span key={lineIdx} className="block">
                {lineObj.line.map((word, wordIdx) => (
                  <span key={wordIdx}>
                    <span className="blur-word inline-block">{word}</span>
                    {wordIdx < lineObj.line.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          {/* Description paragraph */}
          <p
            className="text-small mx-auto mt-20 max-w-[520px] text-center text-white/60"
            style={{ lineHeight: 1.8 }}
          >
            We create immersive floral design for weddings, brand events, and
            personal moments. Each project is shaped with intention to turn space
            into a story — felt deeply, remembered clearly, and never quite
            forgotten.
          </p>

          {/* Star decoration */}
          <div className="my-8">
            <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="text-small inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
          >
            <ArrowRightIcon className="h-3 w-2 rotate-180" />
            <span>Plan Your Event</span>
            <ArrowRightIcon className="h-3 w-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
