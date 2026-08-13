"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";
import { Headphones, Monitor, Database, ShieldCheck } from "lucide-react";

export default function Page() {
  const title = "Managed Services & Data Operations";
  const bg = "/pic/Managed services and data operations1.png";

  const introHeading =
    "Ensure stability, scalability, and continuous intelligence across your data ecosystem";

  const introPara =
    "Modern organisations require uninterrupted, high-performing, and compliant data operations. Keptel provides fully managed services that monitor, maintain, and optimise your data ecosystem—from pipelines to cloud environments to production AI workloads. With proactive governance, 24/7 visibility, and automation-led operations, your teams stay focused on innovation instead of operational burden.";

  const midTitle =
    "Operational excellence powered by automation and intelligence";

  const midPara =
    "Keptel's managed services integrate real-time monitoring, automated incident handling, workload optimisation, and predictive analytics. This ensures your pipelines stay reliable, cost-efficient, and aligned with fast-evolving business requirements. You gain a resilient and future-ready operational environment.";

  return (
    <div className="pt-13">
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[520px] w-full overflow-hidden bg-white">
        {/* Background Image / Right Side Graphic Container */}
        <div className="absolute inset-0 flex justify-end">
          <div className="relative w-full lg:w-[65%] h-full">
            <Image 
              src={bg} 
              alt={title} 
              fill 
              className="object-cover [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" 
              priority
            />
            {/* Subtle overlay to enhance contrast */}
            <div className="absolute inset-0 bg-black/10 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" />
          </div>
        </div>

        {/* Left Side Content & Circular Nodes Layout matching reference */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 z-20">
              <SlideUp>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extralight text-[#0e355d] tracking-tight leading-tight">
                    Managed Services<br />
                    <span className="text-red-600 font-normal">& Data Operations</span>
                  </h1>
                  <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
                  <p className="text-gray-600 text-lg md:text-xl font-light max-w-md leading-relaxed">
                    Maintain continuous operational intelligence with zero disruption.
                  </p>
                </div>
              </SlideUp>
            </div>

            {/* Circular Orbit & Floating Label Cards (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-6 relative h-full min-h-[400px]">
              {/* SVG Circular Path with Indicator Dots */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 450" fill="none">
                <circle 
                  cx="200" 
                  cy="225" 
                  r="150" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="5 5" 
                  opacity="0.5"
                />
              </svg>

              {/* Node 1: Expert Support (Top) */}
              <div className="absolute top-[12%] left-[50%] -translate-x-1/2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-red-100 flex items-center gap-3 text-gray-800">
                <div className="text-red-600 bg-red-50 p-2 rounded-full">
                  <Headphones size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900 leading-tight">Expert</p>
                  <p className="text-xs text-gray-500">Support</p>
                </div>
              </div>

              {/* Node 2: Real-time Monitoring (Left) */}
              <div className="absolute top-[48%] left-[2%] -translate-y-1/2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-red-100 flex items-center gap-3 text-gray-800">
                <div className="text-red-600 bg-red-50 p-2 rounded-full">
                  <Monitor size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900 leading-tight">Real-time</p>
                  <p className="text-xs text-gray-500">Monitoring</p>
                </div>
              </div>

              {/* Node 3: Data Management (Right) */}
              <div className="absolute top-[48%] right-[5%] -translate-y-1/2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-red-100 flex items-center gap-3 text-gray-800">
                <div className="text-red-600 bg-red-50 p-2 rounded-full">
                  <Database size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900 leading-tight">Data</p>
                  <p className="text-xs text-gray-500">Management</p>
                </div>
              </div>

              {/* Node 4: Secure & Reliable (Bottom) */}
              <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-red-100 flex items-center gap-3 text-gray-800">
                <div className="text-red-600 bg-red-50 p-2 rounded-full">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-900 leading-tight">Secure &</p>
                  <p className="text-xs text-gray-500">Reliable</p>
                </div>
              </div>
            </div>

          </div>
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
                  src="/pic/Managed services and data operations.png" 
                  alt="Managed services and data operations concept" 
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
                    src="/pic/Pipeline & workload monitoring.png" 
                    alt="Pipeline and workload monitoring concept" 
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
                title="Pipeline & workload monitoring"
                text="Monitor ingestion, processing, and orchestration in real time to ensure seamless data flow."
                image="/pic/Pipeline & workload monitoring.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Incident automation"
                text="Resolve issues faster with automated alerting, triage logic, and predictive maintenance."
                image="/pic/Incident automation.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Performance & cost optimisation"
                text="Continuously optimize compute, storage, and workload distribution to reduce cost and improve efficiency."
                image="/pic/Performance & cost optimisation1.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
              <SideBySideCard
                title="Operational governance"
                text="Enforce compliance, standards, access controls, and audit readiness across your entire data ecosystem."
                image="/pic/Operational governance1.png"
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