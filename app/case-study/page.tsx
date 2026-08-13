"use client";

import ServiceHero from "@/components/ServiceHero";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Page() {
  // Hero Section Data
  const title = "Case Study";
  const bg = "/services-bg.jpg";

  return (
    <div className="min-h-screen flex flex-col bg-[#E7EEF3]">
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* BLOG GRID SECTION */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Grid of blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <BlogCard
            image="/case/case1.webp"
            title="IT Services & Digital Engineering"
            href="/case-study/case1"
          />
          <BlogCard
            image="/case/case2.webp"
            title="Automotive Engineering"
            href="/case-study/case2"
          />
          <BlogCard
            image="/case/case3.png"
            title="Aerospace & Defence"
            href="/case-study/case3"
          />
          <BlogCard
            image="/case/case4.jpg"
            title="Industrial Automation"
            href="/case-study/case4"
          />
          <BlogCard
            image="/case/case5.webp"
            title="Healthcare Technology"
            href="/case-study/case5"
          />
          <BlogCard
            image="/case/case6.webp"
            title="IoT & Embedded Systems"
            href="/case-study/case6"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}