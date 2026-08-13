"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data Platform Modernization";
  const bg = "/pic/Data platform modernization2.png";

  const introHeading =
    "Modernize your data platform to unlock speed, scale, and AI readiness";

  const introPara =
    "Legacy data systems slow innovation and restrict your ability to deliver insights at scale. Keptel modernizes your data platform with cloud-native architectures, automated orchestration, and next-generation integration frameworks. We help you migrate, optimize, and operationalize platforms that support real-time intelligence and enterprise-wide AI.";

  const midTitle =
    "Transform outdated systems into agile, high-performance platforms";

  const midPara =
    "Through automated code conversion, governed lakehouse models, event-driven pipelines, and multi-cloud flexibility, Keptel eliminates technical debt and future-proofs your environment. Your teams gain a reliable, modern foundation that accelerates analytics, reduces cost, and supports continuous innovation.";

  return (
    <div className="pt-13">
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover" />

        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <SlideUp>
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
                Data Platform<br />
                <span className="text-red-600 font-normal">Modernization</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                Build a resilient, scalable, and cloud-native data platform.
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
                  src="/pic/Data platform modernization1.png" 
                  alt="Data platform modernization concept" 
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
                    src="/pic/Cloud migration & automation.png" 
                    alt="Cloud migration and automation concept" 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="w-full md:w-8/12 order-2 md:order-2">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-light leading-snug text-blue-900">
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
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
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
      {/* CARD GRID */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start auto-rows-fr">
            
            <div className="w-full h-full">
              <SideBySideCard
                title="Legacy platform assessment"
                text="Evaluate technical debt, performance gaps, and modernization opportunities to determine the fastest migration path."
                image="/pic/Legacy platform assessment1.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Cloud migration & automation"
                text="Automate data movement, schema conversion, and orchestration across AWS, Azure, GCP, Databricks, and Snowflake."
                image="/pic/Cloud migration & automation.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Lakehouse architecture"
                text="Implement governed data lakehouses for unified analytics, AI workloads, and near real-time processing."
                image="/pic/Lakehouse architecture.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
              <SideBySideCard
                title="Platform performance optimization"
                text="Optimize compute, storage, pipelines, and workloads to reduce cost and scale seamlessly with business needs."
                image="/pic/Platform performance optimization.png"
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