"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { StarIcon, ArrowRightIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

export function NewsletterSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
              start: "top 85%",
              end: "top 35%",
              scrub: true,
            },
          });
        }
      }

      /* ─── Form entrance ─── */
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
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
    <section className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,149,62,0.1) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center">
        {/* Tag */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <StarIcon className="h-3 w-3 animate-[starSpin_10s_linear_infinite]" />
          <span className="text-[10.5px] font-normal uppercase tracking-[0.05em] text-white">
            newsletter
          </span>
          <StarIcon className="h-3 w-3 animate-[starSpin_10s_linear_infinite]" />
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          style={{
            fontSize: "clamp(2rem, 5vw, 72px)",
            fontWeight: 200,
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          No te pierdas nada
        </h2>

        {/* Description */}
        <p
          className="mx-auto mt-8 max-w-[500px] text-[10.5px] uppercase leading-[1.8] tracking-[0.05em] text-white/60"
        >
          Prompts, agentes, análisis y herramientas directo a tu inbox.
          Sin spam. Solo lo que vale la pena.
        </p>

        {/* Email form */}
        <form
          ref={formRef}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto mt-12 flex max-w-[500px] flex-col items-center gap-4 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="Tu e-mail"
            aria-label="Email para newsletter"
            className="input-field flex-1 text-center sm:text-left"
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-6 py-3 uppercase text-white transition-all duration-300 hover:border-[#00d4ff]/60 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
            style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
          >
            Suscribirse
            <ArrowRightIcon className="h-3 w-2" />
          </button>
        </form>

        {/* Trust line / feedback */}
        <div className="mt-6" aria-live="polite">
          {submitted ? (
            <p className="text-[10px] uppercase tracking-[0.08em] text-[#00d4ff]">
              Próximamente — mientras tanto, seguime en redes
            </p>
          ) : (
            <p className="text-[9px] uppercase tracking-[0.08em] text-white/30">
              Gratis · Sin spam · Cancelá cuando quieras
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
