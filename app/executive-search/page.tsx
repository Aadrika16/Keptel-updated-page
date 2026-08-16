"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Executive Search & Board Room Hiring";
  const bg = "/bg5.jpg";

  const introLeft =
    "We enable organizations to build high-impact leadership by identifying, evaluating, and placing exceptional executives and board members who shape long-term success.";

  const introRight =
    "A strong and future-ready Board and Executive team determines the strategic direction and stability of every organisation—across Start-Ups, Mid-Size enterprises, and global corporations. Keptel’s deep functional expertise, industry insights, and global leadership network empower us to identify high-performing executives with the right skill sets, governance mindset, and cultural alignment. Our specialised Executive Search experts assess leadership behaviours, strategic thinking, and boardroom capabilities to match organisations with leaders who accelerate transformation, innovation, and sustainable performance.";

  const bottomText =
    "Our sector-specific leadership intelligence enables us to identify executives who align seamlessly with organisational culture, strategic priorities, and growth vision.";

  // 2) TABS
  const tabs = [
    {
      id: "fulltime",
      label: "Executive Search",
      icon: "/icon/shield.svg",
    },
    {
      id: "flexi",
      label: "CXO Mapping",
      icon: "/icon/laptop.svg",
    },
    {
      id: "strategic",
      label: "Director/ Board Member Hiring",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "Executive Search",
      image: "/executive/e1f.jpeg",
      text:
        "Keptel partners closely with Founders, CXOs, and Leadership Teams to understand organisational vision, strategic goals, and role expectations. Our structured leadership assessment framework—covering Role Mapping, Competency Scoring, and Behavioural Evaluation—enables us to identify executives who bring strategic clarity, innovation, and execution excellence. We ensure organisations gain leaders who not only fit the position but elevate long-term business performance.",
    },

    flexi: {
      title: "CXO Mapping",
      image: "/executive/e2f.jpeg",
      text:
        "We support organisations in evaluating, benchmarking, and restructuring their leadership through comprehensive CXO Mapping. Our approach assesses experience depth, competency maturity, decision-making style, and transformation readiness for CXO-level roles. This enables companies to build strong leadership pipelines, restructure existing hierarchies, and identify future-ready executives capable of driving business expansion and operational excellence.",
    },

    strategic: {
      title: "Director/ Board Member Hiring",
      image: "/executive/e3.webp",
      text:
        "Board members play a pivotal role in governance, strategic oversight, innovation enablement, and organisational stewardship. Keptel’s Board Search practice identifies leaders with proven expertise in advisory leadership, mentoring, compliance, corporate governance, and inclusive decision-making. We ensure our clients build diverse, dynamic, and strategically aligned boardrooms capable of guiding long-term vision and enterprise transformation.",
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
        {/* SECTION LABEL */}
        <SlideUp>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            Overview
          </p>
        </SlideUp>

        {/* TWO COLUMN OVERVIEW */}
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {/* LEFT COLUMN */}
          <SlideUp>
            <h2 className="text-3xl font-light leading-snug text-gray-800">
              {introLeft}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed font-light text-justify text-sm">
              {bottomText}
            </p>
          </SlideUp>

          {/* RIGHT COLUMN */}
          <SlideUp>
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-gray-700 leading-relaxed font-light text-justify text-sm">
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

      {/* ACTIVE SERVICE SECTION */}
      <ServiceSection
        index={0}
        title={sections[currentTab].title}
        image={sections[currentTab].image}
        text={sections[currentTab].text}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
