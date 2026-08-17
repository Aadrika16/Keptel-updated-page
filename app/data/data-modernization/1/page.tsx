"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Enterprise Data Strategy";
  const bg = "/pic/Enterprise data strategy.png";

  const introHeading =
    "Build a strategic data foundation that accelerates transformation";

  const introPara =
    "Organisations often collect vast amounts of data but struggle to convert it into meaningful, measurable value. Keptel helps you design a data strategy that aligns governance, architecture, business priorities, and AI readiness. The result is a long-term roadmap that enables scalability, reduces operational friction, and supports smarter decision-making across the enterprise.";

  const midTitle =
    "A unified roadmap for clarity, governance, and AI-enabled growth";

  const midPara =
    "Keptel partners with organisations to assess maturity, identify capability gaps, and define the frameworks needed to enable enterprise-wide intelligence. When you establish a clear data operating model—supported by governance, ownership, and quality management—your teams gain the confidence to innovate at speed.";

  return (
    <div className="w-full bg-white text-gray-900 selection:bg-red-500 selection:text-white font-light">
      
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[550px] w-full overflow-hidden bg-black">
        <Image src={bg} alt={title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 md:pt-32">
          <SlideUp>
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-widest uppercase">
                Data Strategy
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Enterprise <br />
                <span className="text-red-500 font-normal">Data Strategy</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Align business goals, governance, and technology with a unified data vision.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-[88rem] mx-auto px-6 py-28">
        <SlideUp>
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-5/12 flex-shrink-0 flex justify-center">
              <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
                <Image 
                  src="/pic/Enterprise data strategy.png" 
                  alt="Enterprise data strategy concept" 
                  fill 
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 space-y-6">
              <div className="w-12 h-1 bg-red-600 rounded-full"></div>
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
      {/* MID BLOCK SECTION */}
      {/* -------------------------------------------------- */}
      <div className="py-28" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-[88rem] mx-auto px-6">
          <SlideUp>
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-5/12 flex-shrink-0 flex justify-center order-1 md:order-1">
                <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
                  <Image 
                    src="/pic/Data operating model design.png" 
                    alt="Data operating model concept" 
                    fill 
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 order-2 md:order-2 space-y-6">
                <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-light leading-snug text-red-600">
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
      <div className="max-w-[88rem] mx-auto px-6 pt-24 pb-12 bg-white">
        <SlideUp>
          <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200/60 inline-block mb-3">
            Capabilities
          </span>
          <h3 className="text-3xl font-light text-red-600 leading-snug whitespace-nowrap">
            What we do
          </h3>
          <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
        </SlideUp>
      </div>

      {/* -------------------------------------------------- */}
      {/* CARD GRID */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-28 bg-white">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start auto-rows-fr">

            <div className="w-full h-full">
              <SideBySideCard
                title="Data maturity assessment"
                text="Evaluate current data capabilities, identify gaps, and determine readiness for large scale transformation and AI adoption."
                image="/pic/Data maturity assessment.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Data operating model design"
                text="Define ownership, roles, workflows, and governance structures that create accountability and efficiency across the organisation."
                image="/pic/Data operating model design.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Enterprise data architecture"
                text="Blueprint future ready architecture including data lakes, warehouses, lakehouses, and integration frameworks."
                image="/pic/Enterprise data architecture.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Roadmap and execution planning"
                text="Convert strategy into actionable phases, enabling scalable implementation with minimal operational disruption."
                image="/pic/Roadmap and execution planning.png"
                color="#d6d7d9"
              />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}