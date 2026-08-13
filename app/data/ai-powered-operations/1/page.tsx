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
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <SlideUp>
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
                Business<br />
                <span className="text-red-600 font-normal">Operations</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                Unlock operational excellence through intelligence and automation.
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
                  src="/pic/Business Operations.png" 
                  alt="Business Operations concept" 
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
      {/* MID SECTION (Card style with wider layout and left image) */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-[88rem] mx-auto px-6">
          <SlideUp>
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center order-1 md:order-1">
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl p-2 flex items-center justify-center">
                  <Image 
                    src="/pic/Workflow optimisation.png" 
                    alt="Workflow optimisation concept" 
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
      {/* WHAT WE DO */}
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
      {/* CARD GRID (3 in first row, remaining aligned to start) */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start auto-rows-fr">

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

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
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