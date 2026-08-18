"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Artificial Intelligence";
  const bg = "/pic/Artificial Intelligence.png";

  const introHeading =
    "The key to unlocking business growth and innovation";

  const introPara =
    "From smarter decision-making to improved customer experiences, AI has the power to transform how organisations operate and compete. Yet many companies struggle to harness their data, extract meaningful insights, and act on them in real time. Data silos, inconsistent quality, and organisational complexity often slow progress—while the rapid rise of generative AI raises expectations even higher. Keptel enables organisations to turn their data foundation into a long-term advantage, accelerating insight generation and empowering teams to make confident, high-impact decisions.";

  const midTitle =
    "Get on the fast track to highly customized generative AI";

  const midPara =
    "Generative AI delivers measurable value only when aligned with real business needs. Keptel helps organisations build custom AI solutions by focusing on five key success factors—from data readiness and governance to workflow integration, orchestration, and responsible AI practices. This ensures faster deployment, greater accuracy, and secure enterprise-wide scalability.";

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
                Artificial Intelligence
              </span>
              <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Artificial <br />
                <span className="text-red-500 font-normal">Intelligence</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 rounded-full"></div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                Build intelligent systems that transform decisions, experiences, and outcomes.
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
                  src="/pic/ChatGPT Image Aug 17, 2026, 05_24_31 PM.png" 
                  alt="Artificial Intelligence concept" 
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
                    src="/pic/ChatGPT Image Aug 17, 2026, 05_28_53 PM.png" 
                    alt="Generative AI solutions concept" 
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
                title="Analytics & AI"
                text="Unlock enterprise wide intelligence by transforming raw data into clear insights through advanced analytics, machine learning, and scalable AI solutions."
                image="/pic/Analytics & AI.png"
                color="#ffffff"
                href="/data/aritifical-intelligence/1"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Data management"
                text="Organize, standardize, and govern data across your ecosystem with modern platforms and practices that ensure reliability, accessibility, and enterprise wide trust."
                image="/pic/Data management.png"
                color="#f9f9f9"
                href="/data/aritifical-intelligence/2"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Data-led marketing"
                text="Understand audience behavior, personalize engagement, and accelerate growth with marketing strategies powered by analytics and precision targeting."
                image="/pic/Data-led marketing.png"
                color="#eaeaea"
                href="/data/aritifical-intelligence/3"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Generative AI solutions"
                text="Build tailored generative AI systems that automate complex tasks, elevate customer interactions, and accelerate innovation across key business functions."
                image="/pic/Generative AI solutions.png"
                color="#d6d7d9"
                href="/data/aritifical-intelligence/4"
              />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}