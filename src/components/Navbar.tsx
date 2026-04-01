"use client";

import { useState, useEffect } from "react";

function SoundWaveIcon() {
  return (
    <div className="w-5 overflow-hidden">
      <svg
        viewBox="0 0 200 100"
        className="h-auto w-10 animate-[waveSlide_2s_linear_infinite]"
        aria-hidden="true"
      >
        <path
          d="M 0 50 Q 50 0, 100 50 T 200 50"
          stroke="white"
          fill="transparent"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[9998] flex h-[100px] items-center justify-between px-8 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Left side */}
      <div className="flex items-center gap-6">
        <a
          href="#portfolio-trigger"
          className="text-[10.5px] font-normal uppercase tracking-[0.05em] text-white"
        >
          gallery
        </a>
        <a
          href="tel:+971504757773"
          className="text-[10.5px] font-normal uppercase tracking-[0.05em] text-white"
        >
          +971 504757773
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <button
          type="button"
          className="flex items-center gap-2 text-[10.5px] font-normal uppercase tracking-[0.05em] text-white"
        >
          <SoundWaveIcon />
          <span>Sound</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 text-[10.5px] font-normal uppercase tracking-[0.05em] text-white"
        >
          <span className="h-2 w-2 rounded-full bg-white" />
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
}
