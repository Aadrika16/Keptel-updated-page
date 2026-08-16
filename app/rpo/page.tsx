"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Recruitment Process Outsourcing";
  const bg = "/rpo/bg.jpeg";

  const introLeft =
    "We integrate strategy, technology, and process excellence to deliver a recruitment function that operates with precision and global standards.";

  const introRight =
    "Talent challenges vary across organisations, industries, and stages of growth. Keptel delivers tailored Recruitment Process Outsourcing (RPO) solutions built on deep market intelligence, proven hiring frameworks, and a data-driven methodology. Our experts analyse talent gaps, role competencies, and business objectives to build scalable, cost-effective, and highly efficient recruitment engines. With our RPO model, organisations can shift focus to core business priorities while we drive end-to-end talent delivery—ensuring agility, speed, and accuracy. We equip enterprises with market insights, advanced recruitment technologies, and seamless execution, enabling them to achieve strategic workforce transformation.";

  const bottomText =
    "From start-ups to large enterprises, we deploy project-oriented RPO frameworks designed for speed, cost efficiency, and measurable hiring impact.";

  // 2) TABS
  const tabs = [
    {
      id: "fulltime",
      label: "End to End RPO",
      icon: "/icon/shield.svg",
    },
    {
      id: "flexi",
      label: "Project Recruitment Process Outsourcing",
      icon: "/icon/laptop.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "End to End RPO",
      image: "/rpo/r1f.jpeg",
      text:
        "Keptel’s End-to-End RPO delivers a comprehensive recruitment ecosystem—from employer branding and sourcing strategy to candidate engagement, assessment, and onboarding. Our model reduces hiring manager workload, accelerates talent acquisition, and embeds best industry practices tailored to each client’s challenge. Every engagement is designed with full customization and operational flexibility, ensuring consistent high-quality hiring outcomes aligned to business growth.",
    },

    flexi: {
      title: "Project Recruitment Process Outsourcing",
      image: "/rpo/r2f.jpeg",
      text:
        "Our Project RPO model supports organisations during expansion phases, new product launches, or sudden hiring surges. We collaborate closely with hiring managers and internal recruitment teams to deliver swift, high-quality hiring within agreed timelines. This model ensures agility, improved time-to-fill, and consistent delivery across short-term or high-volume recruitment needs.",
    },
  };

  // CURRENT TAB STATE
  const [currentTab, setCurrentTab] = useState<"fulltime" | "flexi">(
    "fulltime"
  );

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
          setCurrentTab(id as "fulltime" | "flexi")
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
