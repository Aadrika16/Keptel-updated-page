"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {

  const title = "Data Modernization";
  const bg = "/pic/Data Modernization1.png";
  const introHeading =
    "Outdated data systems stall growth — Keptel builds for the future";
  const introPara =
    "Legacy systems, fragmented data sources, and slow pipelines directly limit your organisation’s ability to innovate. As AI adoption accelerates, outdated architectures create bottlenecks that delay insights and inflate operational costs. Keptel modernises your ecosystem end-to-end—transforming scattered data into a trusted, governed, and highly scalable enterprise asset. With automation-first design, enriched metadata, and cloud-native flexibility, your data foundation evolves from reactive maintenance to proactive innovation.";
  const midTitle = "A future-ready platform for AI, speed, and scale";
  const midPara =
    "Modern businesses must deliver insights at the pace of customer expectation. Teams need immediate access to accurate data to drive decisions, power AI models, and accelerate digital initiatives. Keptel enables this with robust cloud-native accelerators, pre-built frameworks, and consistent operational governance. We automate critical data operations, identify issues early, and ensure pipeline reliability across the ecosystem—helping you ship new models faster, reduce downstream failures, and maintain a continuously high-performing data platform.";
  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[550px] w-full overflow-hidden bg-black">
        <Image src={bg} alt={title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-16">
          <SlideUp>
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-widest uppercase">
                Data Modernization
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Data <br />
                <span className="text-red-500 font-normal">Modernization</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Transform legacy architectures into scalable, AI-ready data ecosystems.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      {/* INTRO (Card style with wider layout and left image) */}
      {/* -------------------------------------------------- */}
      <div className="max-w-[88rem] mx-auto px-6 py-20">
        <SlideUp>
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl p-2 flex items-center justify-center">
                <Image
                  src="/pic/Enterprise data strategy.png"
                  alt="Enterprise data strategy"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            <div className="w-full md:w-8/12">
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-light text-red-600 leading-snug">
                {introHeading}
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed font-light text-left text-base">
                {introPara}
              </p>
            </div>
          </div>
        </SlideUp>
      </div>
      {/* -------------------------------------------------- */}
      {/* MID BLOCK (Card style with wider layout and left image) */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-[88rem] mx-auto px-6">
          <SlideUp>
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center order-1 md:order-1">
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl p-2 flex items-center justify-center">
                  <Image
                    src="/pic/Managed services and data operations.png"
                    alt="Managed services and data operations"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="w-full md:w-8/12 order-2 md:order-2">
                <div className="w-12 h-1 bg-red-600 mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-light text-red-600 leading-snug">
                  {midTitle}
                </h3>
                <p className="mt-6 text-gray-700 leading-relaxed font-light text-left text-base">
                  {midPara}
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      {/* WHAT WE DO TITLE */}
      {/* -------------------------------------------------- */}
      <div className="max-w-[88rem] mx-auto px-6 py-16 bg-white">
        <SlideUp>
          <h3 className="text-3xl font-light text-red-600 leading-snug whitespace-nowrap">
            What we do
          </h3>
        </SlideUp>
        <SlideUp>
          <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
        </SlideUp>
      </div>
      {/* -------------------------------------------------- */}
      {/* CARD GRID (4 cards in one row on large screens) */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-20">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start auto-rows-fr">
            <div className="w-full h-full">
              <SideBySideCard
                title="Enterprise data strategy"
                text="Evaluate current data capabilities and build a strategic blueprint that aligns the business priorities with governance, AI adoption, and scalable future-ready platforms."
                image="/pic/Enterprise data strategy.png"
                color="#ffffff"
                href="/data/data-modernization/1"
              />
            </div>
            <div className="w-full h-full">
              <SideBySideCard
                title="Data platform modernization"
                text="Transform legacy environments and modernize cloud ecosystems through automated migration, lakehouse architectures, and intelligent orchestration across AWS, Azure, GCP, Databricks, and Snowflake."
                image="/pic/Data platform modernization1.png"
                color="#f9f9f9"
                href="/data/data-modernization/2"
              />
            </div>
            <div className="w-full h-full">
              <SideBySideCard
                title="Data management"
                text="Establish robust governance, quality, security, and privacy processes supported by automated controls creating trusted, high performance data foundations for AI and analytics."
                image="/pic/Data management.png"
                color="#eaeaea"
                href="/data/data-modernization/3"
              />
            </div>
            <div className="w-full h-full">
              <SideBySideCard
                title="Managed services and data operations"
                text="Enable seamless data operations with continuous monitoring, optimization, and lifecycle management delivering reliable pipelines that let your teams stay focused on innovation."
                image="/pic/Managed services and data operations.png"
                color="#d6d7d9"
                href="/data/data-modernization/4"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}