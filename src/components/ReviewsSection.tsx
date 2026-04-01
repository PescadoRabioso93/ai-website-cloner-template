"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

import "swiper/css";

const testimonials = [
  {
    name: "Omar",
    role: "Hospitality Brand Manager",
    number: "( 01 )",
    title: "Everything was delivered on time and with zero stress.",
    text: "We needed a clean, elegant setup for a private dinner. The team handled everything quietly and efficiently. The space looked sharp, exactly how we imagined it — no distractions, no noise, just quality.",
    image: "/images/author-1.webp",
  },
  {
    name: "Layla",
    role: "Event Producer",
    number: "( 02 )",
    title: "They listen — and that shows in the result.",
    text: "We had a layered concept and limited time. They didn't overcomplicate anything. Just understood the direction, kept it clean, and delivered something that made sense visually and emotionally.",
    image: "/images/author-2.webp",
  },
  {
    name: "Zain",
    role: "Founder, Boutique Fashion Label",
    number: "( 03 )",
    title: "They respected the tone of our brand completely.",
    text: "It's rare to work with a team that doesn't try to 'make it theirs.' The mood, the materials, the flow — it all felt aligned with what we stand for. Subtle, minimal, but with intention.",
    image: "/images/author-3.webp",
  },
  {
    name: "Hana",
    role: "Bride",
    number: "( 04 )",
    title: "It felt like they actually cared about how it would feel.",
    text: "They didn't push their own taste — they asked the right questions and gave us space to shape it together. In the end, it looked beautiful, but more importantly, it felt like us.",
    image: "/images/author-4.webp",
  },
  {
    name: "Tarek",
    role: "Creative Director, PR Agency",
    number: "( 05 )",
    title: "No need for micromanaging — they get it.",
    text: "We briefed once, and they came back with a setup that hit the mark. Visually consistent, functional, and clear. Our clients noticed the difference — it didn't feel like standard event decor.",
    image: "/images/author-5.webp",
  },
];

export function ReviewsSection() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Heading (faded) */}
      <h2 className="absolute top-24 left-6 md:left-12 text-heading-medium opacity-[0.15] pointer-events-none select-none z-0">
        <span className="block">Clients</span>
        <span className="block">say about</span>
        <span className="block">cube</span>
      </h2>

      {/* Carousel */}
      <div className="relative z-10 pt-32 md:pt-48">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.3}
          spaceBetween={32}
          grabCursor
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.number}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Left column — Author */}
                <div className="md:w-[40%] flex flex-col items-start gap-4">
                  <h3 className="text-heading-small font-display">
                    {testimonial.name}
                  </h3>
                  <span className="text-small opacity-50">
                    {testimonial.role}
                  </span>

                  {/* Author image with border overlay */}
                  <div className="relative w-[120px] h-[120px] mt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-full h-full"
                    />
                    <Image
                      src="/images/author-border.webp"
                      alt=""
                      width={140}
                      height={140}
                      className="absolute -inset-[10px] w-[140px] h-[140px] pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Right column — Review */}
                <div className="md:w-[60%] relative">
                  {/* Review border overlay */}
                  <Image
                    src="/images/review-border.webp"
                    alt=""
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-30"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 p-6 md:p-10">
                    <span className="text-small block mb-4">
                      {testimonial.number}
                    </span>
                    <h4 className="text-lg md:text-2xl font-medium mb-6">
                      {testimonial.title}
                    </h4>
                    <p className="text-small opacity-70 leading-[1.8] tracking-[0.05em]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-6 mt-8">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            className="transition-opacity hover:opacity-60"
          >
            <ArrowLeftIcon className="w-3 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            className="transition-opacity hover:opacity-60"
          >
            <ArrowRightIcon className="w-3 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
