"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@/components/icons";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: "Project-8", image: "/images/project-8.webp", year: "2024" },
  { name: "Project 1", image: "/images/project-1.webp", year: "2024" },
  { name: "Project 2", image: "/images/project-2.webp", year: "2024" },
  { name: "Project 3", image: "/images/project-3.webp", year: "2024" },
  { name: "Project 4", image: "/images/project-4.webp", year: "2024" },
  { name: "Project 5", image: "/images/project-5.webp", year: "2024" },
  { name: "Project 6", image: "/images/project-6.webp", year: "2024" },
  { name: "Project 7", image: "/images/project-7.webp", year: "2024" },
];

export function PortfolioSection() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              end: "top 40%",
              scrub: true,
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
          <span className="text-small">portfolio</span>
          <StarIcon className="h-3 w-3 animate-[starSpin_8s_linear_infinite]" />
        </div>

        <div ref={headingRef}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.3vw, 105px)",
              fontWeight: 300,
              lineHeight: 0.85,
              textTransform: "uppercase",
            }}
          >
            <span className="blur-word inline-block">Our</span>{" "}
            <span className="blur-word inline-block">Work,</span>
            <br />
            <span className="blur-word inline-block">in</span>{" "}
            <span className="blur-word inline-block">full</span>{" "}
            <span className="blur-word inline-block">bloom</span>
          </h2>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, FreeMode]}
          slidesPerView={3.5}
          spaceBetween={16}
          freeMode
          grabCursor
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <div className="group flex flex-col">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={350}
                    height={450}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-small">{project.name}</span>
                  <span className="text-small text-white/50">
                    {project.year}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center gap-6">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="transition-opacity hover:opacity-60"
          >
            <ArrowLeftIcon className="h-5 w-3" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="transition-opacity hover:opacity-60"
          >
            <ArrowRightIcon className="h-5 w-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
