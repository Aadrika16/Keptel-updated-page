"use client";

import SlideUp from "@/components/SlideUp";

export default function FullHero({ title, bg }: { title: string; bg: string }) {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[500px] mb-5">
      {/* Background Image */}
      <img
        src={bg}
        alt={title}
        className="w-full h-full object-cover brightness-75"
      />

      {/* Subtle blue overlay for better title visibility */}
      <div className="absolute inset-0 bg-[#0e355d]/65"></div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
        <SlideUp>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white text-center">
            {title}
          </h1>
        </SlideUp>
      </div>
    </div>
  );
}
