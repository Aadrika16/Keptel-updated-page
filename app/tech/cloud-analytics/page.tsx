"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";
import { Cloud, CheckCircle2, Layers, Cpu, Compass } from "lucide-react";

export default function CloudAnalytics() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E7EEF3]">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white pt-36 pb-24 px-6 overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SlideUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide uppercase mb-6">
              <Cloud className="w-4 h-4" /> Cloud & Analytics Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
              Cloud & <span className="text-red-500 font-normal">Analytics</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-3xl">
              Keptel delivers complete cloud and analytics solutions across AWS, Azure, and Google Cloud. We help enterprises modernize data systems, build secure cloud ecosystems, and enable real-time decision-making through powerful analytics platforms.
            </p>
          </SlideUp>
        </div>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-16 -mt-10 relative z-20 space-y-8">

        {/* What We Do Card */}
        <SlideUp>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-slate-900 tracking-tight">What We Do</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Cloud migration & modernization",
                "Data Lake & Data Warehouse engineering",
                "End-to-end BI & dashboard development",
                "Cloud-native ETL/ELT pipeline creation",
                "Multi-cloud governance & cost optimization"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-light text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* Technologies Card */}
        <SlideUp>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-slate-900 tracking-tight">Technologies & Tools</h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "AWS", "Azure", "GCP", "BigQuery", "Snowflake", "Hive", 
                "Power BI", "Tableau", "Looker", "Qlik", "Talend", "Informatica", "AWS Glue"
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs md:text-sm font-light text-slate-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* Use Cases Card */}
        <SlideUp>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-slate-900 tracking-tight">Use Cases</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Real-time analytics dashboards",
                "Customer behavior & personalization",
                "End-to-end CI/CD data pipelines",
                "Predictive forecasting & optimization"
              ].map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-sm font-light text-slate-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

      </main>

      <Footer />
    </div>
  );
}