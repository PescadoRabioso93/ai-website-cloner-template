"use client";

import { StarIcon, ArrowRightIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-0 pt-32 pb-16">
      {/* Blue gradient blob background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.15]"
        src="/videos/blur-bg.webm"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px] px-8">
        {/* Tag block */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <StarIcon className="h-3 w-3 text-white/60" />
          <span
            className="uppercase tracking-[0.05em] text-white"
            style={{ fontSize: "10.5px" }}
          >
            Contact
          </span>
          <StarIcon className="h-3 w-3 text-white/60" />
        </div>

        {/* Description paragraph */}
        <p
          className="mx-auto mb-12 max-w-[500px] text-center uppercase leading-[1.6] text-white/70"
          style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
        >
          Have an upcoming event? Contact us for a personalized consultation,
          and let&apos;s bring your vision to life — effortlessly.
        </p>

        {/* Contact form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-[900px]"
        >
          {/* Top row: Name + Textarea */}
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-field"
                autoComplete="name"
              />
            </div>
            <div className="row-span-2">
              <textarea
                name="message"
                placeholder="How can we help you"
                className="input-field resize-none md:h-full"
                rows={4}
              />
            </div>

            {/* Bottom row: Phone + E-mail */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input-field"
                autoComplete="tel"
              />
            </div>
          </div>

          {/* E-mail below on mobile, right column bottom on desktop */}
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            <div className="md:col-start-2">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input-field"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-6 py-3 uppercase text-white transition-colors hover:border-white/60"
              style={{ fontSize: "10.5px", letterSpacing: "0.05em" }}
            >
              Discuss the project
              <ArrowRightIcon className="h-3 w-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
