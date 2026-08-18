"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data Management";
  const bg = "/pic/Data management.png";

  const introHeading = "Build a trusted, secure, high-quality data ecosystem";

  const introPara =
    "Enterprises depend on accurate, compliant, and accessible data to operate effectively. Keptel helps modernise your data management with automated governance, privacy controls, lineage intelligence, and AI-driven quality monitoring. We turn fragmented datasets into reliable assets that power operations, analytics, and enterprise AI.";

  const midTitle = "Stronger governance, higher quality, deeper trust";

  const midPara =
    "Keptel’s automated frameworks enforce quality rules, security protocols, metadata standards, and compliance requirements across your entire ecosystem. With end-to-end visibility and proactive monitoring, your teams always work with accurate, complete, and trustworthy data.";

  return (
    <div className="w-full bg-white text-gray-900 selection:bg-red-500 selection:text-white font-light">
      
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[550px] w-full overflow-hidden bg-black">
        <Image src={bg} alt={title} fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 md:pt-32">
          <SlideUp>
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-widest uppercase">
                Data Management
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Data <br />
                <span className="text-red-500 font-normal">Management</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Build governance and quality into your data from day one.
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
            <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center">
              <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
                <Image 
                  src="/pic/data_ecosystem_image_separate.png" 
                  alt="Data management concept" 
                  fill 
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-8/12 space-y-6">
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
              <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center order-1 md:order-1">
                <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden">
                  <Image 
                    src="/pic/data_governance_image_separate.png" 
                    alt="Automated governance concept" 
                    fill 
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-8/12 order-2 md:order-2 space-y-6">
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
      {/* CARD GRID (4 Cards in One Row) */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-28 bg-white">
        <div className="max-w-[96rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start auto-rows-fr">
            
            <div className="w-full h-full">
              <SideBySideCard
                title="Automated governance"
                text="Apply enterprise wide rules, access policies, and compliance controls with automation."
                image="/pic/Automated governance1.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Metadata & lineage visibility"
                text="Track every transformation, dataset, and dependency with AI-enhanced lineage mapping."
                image="/pic/Metadata & lineage visibility.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Security & privacy frameworks"
                text="Protect your data with encryption, masking, and regulatory-ready privacy operations."
                image="/pic/Security & privacy frameworks1.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="AI-driven quality monitoring"
                text="Detect anomalies, score data quality, and automate remediation with intelligent validation."
                image="/pic/AI-driven quality monitoring.png"
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