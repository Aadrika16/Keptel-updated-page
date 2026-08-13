"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";
import { Database, FolderCheck, Settings, CloudUpload } from "lucide-react";

export default function Page() {
  const title = "Data Management";
  const bg = "/pic/Data management1.png";

  const introHeading =
    "Transform data into a trusted, governed, high-value enterprise asset";

  const introPara =
    "Strong data management is the backbone of every modern digital and AI strategy. Keptel ensures that your data is accurate, secure, compliant, and accessible across the enterprise. With automated governance, metadata enrichment, quality monitoring, and privacy enforcement, we help you build an ecosystem of trust that empowers consistent and reliable insight generation.";

  const midTitle =
    "A governed, high-quality, always-on data ecosystem";

  const midPara =
    "Through automation-first governance, lineage transparency, role-based access control, and AI-augmented quality monitoring, Keptel strengthens the reliability of your entire data lifecycle. This ensures that every dataset is secure, compliant, and ready for analytics, modelling, and operational use.";

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
            {/* Subtle overlay to enhance contrast if needed */}
            <div className="absolute inset-0 bg-black/10 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" />
          </div>
        </div>

        {/* Left Side Content & Curved Wave Line with Icons */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 z-20">
              <SlideUp>
                <div>
                  <h1 className="text-4xl md:text-6xl font-extralight text-[#0e355d] tracking-tight leading-tight">
                    Data<br />
                    <span className="text-red-600 font-normal">Management</span>
                  </h1>
                  <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
                  <p className="text-gray-600 text-lg md:text-xl font-light max-w-md leading-relaxed">
                    Ensure your data is secure, compliant, and ready for intelligent use.
                  </p>
                </div>
              </SlideUp>
            </div>

            {/* Floating Icons & Curved Indicator Path (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-6 relative h-full min-h-[400px]">
              {/* SVG Curved Dotted Line connecting the nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 450" fill="none">
                <path 
                  d="M 50 40 C 150 100, 150 220, 50 280 C -50 340, -50 400, 50 430" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="6 6" 
                  opacity="0.6"
                />
              </svg>

              {/* Node 1 */}
              <div className="absolute top-[8%] left-[2%] -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 flex items-center justify-center w-14 h-14 text-red-600">
                <Database size={26} />
              </div>

              {/* Node 2 */}
              <div className="absolute top-[35%] left-[18%] -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 flex items-center justify-center w-14 h-14 text-red-600">
                <FolderCheck size={26} />
              </div>

              {/* Node 3 */}
              <div className="absolute top-[65%] left-[8%] -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 flex items-center justify-center w-14 h-14 text-red-600">
                <Settings size={26} />
              </div>

              {/* Node 4 */}
              <div className="absolute top-[90%] left-[22%] -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 flex items-center justify-center w-14 h-14 text-red-600">
                <CloudUpload size={26} />
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
                  src="/pic/Data management1.png" 
                  alt="Data management concept" 
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
                    src="/pic/Data governance automation.png" 
                    alt="Data governance automation concept" 
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
                title="Data governance automation"
                text="Deploy automated policies, quality rules, and validations that improve accuracy and minimise risk."
                image="/pic/Data governance automation.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Metadata & lineage intelligence"
                text="Build transparency with end-to-end lineage tracking and enriched metadata for analytics and compliance."
                image="/pic/Metadata & lineage intelligence.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Privacy, security & compliance"
                text="Implement enterprise grade controls, encryption, masking, and privacy frameworks that protect sensitive data."
                image="/pic/security & compliance.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
              <SideBySideCard
                title="Data quality engineering"
                text="Enhance reliability with AI driven anomaly detection, scoring models, and automated remediation workflows."
                image="/pic/Data quality engineering1.png"
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