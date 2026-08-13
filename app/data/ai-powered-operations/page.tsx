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
                AI-Powered<br />
                <span className="text-red-600 font-normal">Operations</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                Operational intelligence that sharpens workflows and elevates value.
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
                  src="/pic/AI-Powered Operations.png" 
                  alt="AI-Powered Operations concept" 
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
                    src="/pic/Business Operations.png" 
                    alt="Business operations concept" 
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
      {/* CARDS GRID (3 in first row, remaining aligned to start) */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start auto-rows-fr">

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

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
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