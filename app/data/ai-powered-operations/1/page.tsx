"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Business Operations";
  const bg = "/pic/Business Operations.png";

  const introHeading =
    "Transform your operations into a high-performing, intelligence-driven engine";

  const introPara =
    "Business operations determine the speed, precision, and resilience of your organisation. Keptel helps you modernise workflows by integrating data, AI, automation, and customer-centric design. We streamline processes, break down silos, and enable real-time visibility so your teams can operate with greater accuracy and efficiency.";

  const midTitle = "Smarter, faster, and more agile business operations";

  const midPara =
    "Keptel builds intelligent workflows that reduce manual effort, anticipate operational bottlenecks, and enhance collaboration. From workforce optimisation to process re-engineering and automation-first design, we enable continuous improvement across the entire value chain.";

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
                Business Operations
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Business <br />
                <span className="text-red-500 font-normal">Operations</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Unlock operational excellence through intelligence and automation.
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
                  src="/pic/operations_image_1.png" 
                  alt="Business Operations concept" 
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
                    src="/pic/operations_image_2.png" 
                    alt="Workflow optimisation concept" 
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
                title="Workflow optimisation"
                text="Redesign operational processes to eliminate inefficiencies and improve cycle times."
                image="/pic/Workflow optimisation.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Automation & intelligent routing"
                text="Use AI and automation to simplify manual tasks and prioritise work intelligently."
                image="/pic/Automation & intelligent routing1.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Operational analytics"
                text="Capture real time performance insights to strengthen decision-making and forecasting."
                image="/pic/Operational analytics1.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Performance management"
                text="Enhance accountability and productivity through data-driven performance frameworks."
                image="/pic/Performance management1.png"
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