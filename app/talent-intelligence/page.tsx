"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Talent Intelligence";
  const bg = "/intelligence/bg.jpeg";

  const introLeft =
    "Access strategic talent insights that empower your organisation to scale with precision. Our intelligence framework evaluates skills, locations, industries, and emerging workforce trends.";

  const introRight =
    "Keptel delivers talent intelligence backed by deep research, structured assessment frameworks, and comprehensive market data. Our approach helps organisations identify the right talent fit by evaluating competencies across industry relevance, skills, experience, compensation benchmarks, and career pathways. Talent intelligence accelerates decision-making, supports strategic workforce planning, and ensures alignment between business goals and talent availability. With every engagement, we enable our clients to forecast talent needs, reduce recruitment risks, and build stronger, insight-backed hiring strategies.";

  const bottomText =
    "A research-driven blueprint that identifies, evaluates, and delivers the right talent through structured market intelligence.";

  // 2) TABS
  const tabs = [
    {
      id: "fulltime",
      label: "Role Mapping",
      icon: "/icon/shield.svg",
    },
    {
      id: "flexi",
      label: "Talent Advisory",
      icon: "/icon/laptop.svg",
    },
    {
      id: "strategic",
      label: "Compensation Benchmarking Services",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "Role Mapping",
      image: "/intelligence/a1.png",
      text:
        "Keptel defines competitive talent landscapes by proactively identifying and profiling potential candidates across targeted markets. Through exhaustive role mapping, we analyse technical expertise, behavioural competencies, industry exposure, and organisational alignment. This enables businesses to understand market availability, talent readiness, and the most strategic sourcing pathways—leading to informed hiring decisions and structured workforce planning.",
    },

    flexi: {
      title: "Talent Advisory",
      image: "/intelligence/a2.webp",
      text:
        "Our Talent Advisory solutions bring timely, intelligence-led insights to optimise recruitment efficiency and cost. As specialists, we deliver market trends, skill insights, and evaluations of rare and niche talent pools, enabling clients to accelerate hiring decisions. Our experts collaborate with client hiring managers to share data on experience, expertise, knowledge depth, and behavioural traits—ensuring hires are aligned to evolving industry standards. The advisory framework also strengthens diversity hiring and supports organisations in meeting their inclusivity goals.",
    },

    strategic: {
      title: "Compensation Benchmarking Services",
      image: "/intelligence/a3.png",
      text:
        "Compensation benchmarking provides actionable insights that align organisational pay structures with market realities—critical for attracting and retaining high-value talent. With rising demand-supply gaps in skilled talent pools, accurate compensation intelligence has become a strategic differentiator. Keptel analyses role-specific compensation trends across industries and domains, delivering data-backed recommendations for salary structures, benefits, and performance-based components. Our transparent and analytical approach supports rational, competitive, and uniform compensation policies across the organisation.",
    },
  };

  const [currentTab, setCurrentTab] = useState<
    "fulltime" | "flexi" | "strategic"
  >("fulltime");

  return (
    <div>
      {/* HERO */}
      <FullHero title={title} bg={bg} />

      {/* OVERVIEW SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SlideUp>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            Overview
          </p>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {/* LEFT COLUMN */}
          <SlideUp>
            <h2 className="text-2xl md:text-3xl font-light leading-snug text-gray-800">
              {introLeft}
            </h2>

            <p className="mt-6 text-gray-600 font-light text-left text-[13px] md:text-sm leading-[1.7]">
              {bottomText}
            </p>
          </SlideUp>

          {/* RIGHT COLUMN */}
          <SlideUp>
            <div className="border-l-4 border-red-600 pl-5 md:pl-6">
              <p className="text-gray-700 font-light text-left text-[13px] md:text-sm leading-[1.7]">
                {introRight}
              </p>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* SERVICES HEADING */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <SlideUp>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            Our Services
          </p>
        </SlideUp>

        <SlideUp>
          <h3 className="text-3xl font-light text-gray-800 leading-snug mt-3">
            Services
          </h3>
        </SlideUp>

        <SlideUp>
          <div className="w-16 h-1 bg-red-600 mt-3"></div>
        </SlideUp>
      </div>

      {/* TABS */}
      <ServiceTabs
        tabs={tabs}
        onSelect={(id: string) =>
          setCurrentTab(id as "fulltime" | "flexi" | "strategic")
        }
      />

      {/* SERVICE CONTENT */}
      <ServiceSection
        index={0}
        title={sections[currentTab].title}
        image={sections[currentTab].image}
        text={sections[currentTab].text}
      />

      {/* PROCESS SECTION */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
              Process
            </p>
          </SlideUp>

          <SlideUp>
            <h3 className="text-3xl font-light leading-snug text-gray-800 mt-3">
              Talent Intelligence Process Flow
            </h3>
          </SlideUp>

          <SlideUp>
            <div className="w-16 h-1 bg-red-600 mt-4"></div>
          </SlideUp>

          <SlideUp>
            <img
              src="/intelligence/a4.webp"
              className="w-full mt-8"
              alt="Talent Intelligence Process Flow"
            />
          </SlideUp>
        </div>
      </div>

      <Footer />
    </div>
  );
}
