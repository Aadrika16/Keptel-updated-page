"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function KeptelAILeadershipPage() {
  const solutions = [
    {
      title: "Data Cleaning & Quality Engineering",
      desc: "Automated validation, deduplication, standardization, and quality scoring for trusted data.",
      image: "/demo/cleaning.png",
      href: "/data/data-cleaning",
    },
    {
      title: "Data Monetization",
      desc: "Transform enterprise data into analytics products, APIs, and revenue-generating insights.",
      image: "/demo/data.jpg",
      href: "/data/data-monetization",
    },
    {
      title: "AI-Ready Pipelines",
      desc: "End-to-end pipelines that convert raw data into AI-optimized, real-time decision systems.",
      image: "/demo/ai.jpg",
      href: "/data/ai-ready-pipelines",
    },
    {
      title: "Enterprise Data Operations",
      desc: "Continuous monitoring, lifecycle management, and reliable pipelines that let teams focus on innovation.",
      image: "/top/server.jpeg",
      href: "/tech/infrastructure",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 selection:bg-red-500 selection:text-white font-light">

      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <img 
          src="/m.webp" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" 
          alt="Background" 
        />

        <div className="relative max-w-7xl mx-auto px-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-widest uppercase">
            AI Leadership Report
          </span>

          <h1 className="text-4xl md:text-6xl font-extralight leading-[1.1] tracking-tight max-w-4xl">
            A proven leader in <span className="font-normal text-red-500">AI innovation</span> and data modernization
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Keptel recognized for its excellence in AI engineering, scalable data platforms, and enterprise-wide modernization solutions across industries.
          </p>
        </div>
      </section>

      {/* ================= SOLUTION GRID ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* TOP TITLE SECTION */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200/60 inline-block">
              Our solutions
            </span>

            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-slate-900 leading-snug">
              Unifying data, AI, and human expertise to power enterprise workflows
            </h2>
            
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Explore our core capabilities built to drive enterprise efficiency, scalability, and automated intelligence.
            </p>
          </div>

          {/* CARDS GRID (Properly Styled Card Layout matching reference style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {solutions.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F2F4F7] rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-48 overflow-hidden bg-white">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-normal text-red-600 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-red-700 transition-colors"
                  >
                    <span>Read more</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ABOUT THE REPORT ================= */}
      <section className="w-full bg-slate-100/60 py-28 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200/60 inline-block">
              Report Overview
            </span>

            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-slate-900 leading-tight">
              About the report
            </h2>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              Keptel has been recognized as a top innovator in data engineering, AI lifecycle management, and enterprise modernization. This assessment evaluates leading AI solution providers on their ability to scale AI, deliver measurable results, and drive transformation across industries.
            </p>

            <p className="text-slate-600 leading-relaxed font-light text-base">
              The report highlights Keptel’s differentiated approach to:
            </p>

            <ul className="space-y-3 text-slate-700 font-light text-sm md:text-base pt-2">
              {[
                "Building scalable cloud and data foundations",
                "Operationalizing AI across workflows",
                "Domain-led engineering and industry accelerators",
                "End-to-end governance, observability, and quality"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-2">
            <img 
              src="/banner1/graph.png" 
              alt="AI Leadership Chart" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= KEY FINDINGS ================= */}
      <section className="w-full bg-slate-950 text-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Analysis & Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
              Key findings
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg">
              Based on in-depth evaluation of leading AI and data transformation providers, the report identifies Keptel’s strengths in delivering enterprise-grade AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FindingCard 
              number="01" 
              title="Accelerated Time-to-Value Through Proprietary Solutions" 
              body="Keptel’s accelerators shorten deployment timelines and enable rapid, measurable AI outcomes across industries." 
            />

            <FindingCard 
              number="02" 
              title="Real-World Results, Not Just Pilots" 
              body="Keptel excels at scaling AI from experimental pilots to production systems through high-discipline delivery frameworks." 
            />

            <FindingCard 
              number="03" 
              title="Industry-Driven Design" 
              body="Solutions are tailored for automotive, aerospace, healthcare, retail, and enterprise operations—embedding AI into core workflows." 
            />

            <FindingCard 
              number="04" 
              title="Strong Cloud & AI Ecosystem Partnerships" 
              body="Strategic collaborations with AWS, Azure, Nvidia, and GCP enable performance, reliability, and large-scale AI deployment." 
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= FINDING CARD ================= */

function FindingCard({ 
  number, 
  title, 
  body, 
}: { 
  number: string | number; 
  title: string; 
  body: string; 
}) { 
  return ( 
    <div className="flex bg-slate-900 text-slate-100 rounded-3xl overflow-hidden border border-slate-800 shadow-xl shadow-slate-950/40 hover:border-slate-700 transition-colors"> 
      <div className="w-24 flex items-center justify-center bg-black/40 border-r border-slate-800 shrink-0"> 
        <span className="text-red-500 text-3xl font-light">{number}</span> 
      </div> 

      <div className="p-8 space-y-2"> 
        <h3 className="text-lg font-normal text-white tracking-tight">{title}</h3> 
        <p className="text-sm text-slate-400 font-light leading-relaxed">{body}</p> 
      </div> 
    </div> 
  ); 
}