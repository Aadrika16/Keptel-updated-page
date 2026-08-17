"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "AI-Powered Operations";
  const bg = "/pic/AI-Powered Operations.png";

  const introHeading =
    "Lay the foundation for operational excellence – improving outcomes and sustainability";

  const introPara =
    "Establishing a strong data foundation and a clear digital strategy is essential for long-term operational success. But the real transformation happens when that strategy is executed through a customer-centric operating model that elevates efficiency, strengthens consistency, and unlocks sustainable business value. Keptel brings deep industry and functional expertise to help you embed intelligence into every layer of your operations—from sharpening back-office precision to elevating customer experiences, optimizing financial processes, and reinforcing regulatory compliance. We ensure that digital capabilities don’t just exist, but work in harmony with your strategic aspirations to deliver operational excellence where milliseconds matter.";

  const midTitle = "Streamlining complex, interconnected operations";

  const midPara =
    "One Keptel client operating in the title services industry faced an extremely complex operational model involving thousands of agents and county-level verifications across the U.S. Manual processes, siloed communication, and fragmented workflows drove delays and inconsistency. Keptel introduced digital operations solutions that strengthened resilience, unlocked new data-driven revenue streams, and positioned the organization as an innovation leader. This transformation demonstrates how intelligent operations can shift an entire industry forward.";

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
                AI-Powered Operations
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                AI-Powered <br />
                <span className="text-red-500 font-normal">Operations</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Operational intelligence that sharpens workflows and elevates value.
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
                  src="/pic/AI-Powered Operations.png" 
                  alt="AI-Powered Operations concept" 
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
                    src="/pic/Business Operations.png" 
                    alt="Business operations concept" 
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
                title="Business Operations"
                text="Unify processes and enable real time, data-driven decisioning by redesigning workflows with automation, intelligence, and end-to-end operational visibility."
                image="/pic/Business Operations.png"
                color="#ffffff"
                href="/data/ai-powered-operations/1"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Customer operations"
                text="Respond to shifting customer expectations with AI-enhanced insights that deliver faster, context-aware, and deeply personalized experiences across every touchpoint."
                image="/pic/Customer operations.png"
                color="#f9f9f9"
                href="/data/ai-powered-operations/2"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Finance and accounting"
                text="Enhance financial performance by digitizing core activities, streamlining approvals, and applying intelligent automation for greater accuracy, speed, and control."
                image="/pic/Finance and accounting.png"
                color="#eaeaea"
                href="/data/ai-powered-operations/3"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Risk and compliance"
                text="Strengthen enterprise protection by leveraging data and AI to anticipate threats, minimize gaps, and simplify compliance across evolving regulatory environments."
                image="/pic/Risk and compliance.png"
                color="#d6d7d9"
                href="/data/ai-powered-operations/4"
              />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}