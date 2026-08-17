"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";
import { Database, CheckCircle2, Terminal, Code2 } from "lucide-react";

export default function BackendEngineering() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E7EEF3]">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white pt-36 pb-24 px-6 overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <SlideUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide uppercase mb-6">
              <Database className="w-4 h-4" /> Core Systems & Logic
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
              Backend <span className="text-red-500 font-normal">Engineering</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-3xl">
              Keptel builds stable, scalable, and secure backend systems that power 
              enterprise applications. Our backend engineering focuses on high 
              performance, robust integration, and clean architecture.
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
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-slate-900 tracking-tight">What We Do</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Enterprise backend development",
                "REST & GraphQL API development",
                "Integration with ERP, CRM, and Cloud services",
                "Performance tuning & optimization",
                "DevOps-enabled CI/CD deployments"
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
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-slate-900 tracking-tight">Technologies & Tools</h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Java", ".NET", "Python", "Microservices", 
                "Docker", "Kubernetes", "API Gateways"
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

      </main>

      <Footer />
    </div>
  );
}