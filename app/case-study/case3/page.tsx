"use client";

import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";
import { 
  AlertTriangle, 
  Lightbulb, 
  Target, 
  Wrench, 
  Users, 
  CheckCircle2, 
  Rocket, 
  UserCheck, 
  TrendingUp, 
  Zap,
  Plane
} from "lucide-react";

export default function CaseStudyPage() {
  const title = "Aerospace & Defence";
  const bg = "/case/plane.jpeg";

  return (
    <div className="min-h-screen flex flex-col bg-[#E7EEF3]">
      {/* HERO */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src={bg}
          alt="Case Study Hero"
          className="w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
          <h1
            className="text-[#e5170f] text-3xl md:text-5xl font-medium tracking-wide text-center"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "#ffffffff",
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* MAIN SECTION */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-6">

          {/* Top Section: Title & Description alongside Problem Statement */}
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Domain & Description */}
            <div className="lg:col-span-6 space-y-3">
              <SlideUp>
                <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 leading-tight">
                  Avionics, Embedded Systems & V&V
                </h1>
              </SlideUp>

              <SlideUp>
                <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
                  An overview of how Keptel supported aerospace engineering programs 
                  requiring expertise in DO-178C, DO-254, embedded avionics, 
                  safety-critical software, and verification & validation processes.
                </p>
              </SlideUp>
            </div>

            {/* Right: Problem Statement Card */}
            <div className="lg:col-span-6">
              <SlideUp>
                <div className="p-6 md:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl text-white">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-red-500 mb-2">
                        Problem Statement
                      </h2>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                        The aerospace customer needed engineers with hands-on expertise in 
                        DO-178C, DO-254, embedded avionics, real-time operating systems, 
                        and V&V workflows. Working under strict global certification 
                        frameworks demanded precision, compliance, and deep domain 
                        knowledge across avionics subsystems.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>

          {/* Approach & Solution */}
          <SlideUp>
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-5 max-w-2xl">
                <div className="p-3.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 shrink-0 flex items-center justify-center w-14 h-14">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2">
                    Keptel's Approach & Solution
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                    Keptel engaged avionics specialists with proven experience in 
                    safety-critical software and hardware certification. Teams 
                    supported DO-178C lifecycle activities, performed requirement 
                    validation, executed test cases under RTOS environments, and 
                    assisted with certification documentation.
                  </p>
                </div>
              </div>

              <div className="shrink-0 bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-3 w-full md:w-auto justify-center">
                <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-inner">
                  <Plane className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-500 font-medium space-y-0.5">
                  <div className="text-slate-900 font-semibold">Aerospace Standards</div>
                  <div>DO-178C • DO-254</div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Business Outcomes */}
          <SlideUp>
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-5 mb-6">
                <div className="p-3.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 flex items-center justify-center w-14 h-14">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2">
                    Business Outcomes
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                    Keptel enabled the customer to accelerate avionics software 
                    development, strengthen verification cycles, and consistently 
                    meet certification milestones. The engagement improved compliance 
                    accuracy, enhanced system reliability, and reduced delays.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center">
                  <Rocket className="w-5 h-5 text-emerald-600 mb-2" />
                  <span className="text-xs font-medium text-slate-800">Accelerated Milestones</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center">
                  <UserCheck className="w-5 h-5 text-emerald-600 mb-2" />
                  <span className="text-xs font-medium text-slate-800">Enhanced Compliance</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mb-2" />
                  <span className="text-xs font-medium text-slate-800">Improved Reliability</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-600 mb-2" />
                  <span className="text-xs font-medium text-slate-800">Reduced Program Delays</span>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <SlideUp>
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center w-14 h-14 shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium text-slate-900 text-base md:text-lg">Key Engineering Contributions</h4>
                </div>
                <ul className="text-xs md:text-sm font-light text-slate-600 space-y-4 my-auto">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>DO-178C and DO-254 compliance engineering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Embedded avionics software development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>V&V for safety-critical systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>RTOS development & testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Certification documentation & audits</span>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center w-14 h-14 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium text-slate-900 text-base md:text-lg">Ideal For</h4>
                </div>
                <ul className="text-xs md:text-sm font-light text-slate-600 space-y-5 my-auto">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Aerospace OEMs & Tier-1 suppliers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Defense system integrators</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Companies building safety-critical embedded platforms</span>
                  </li>
                </ul>
              </div>
            </SlideUp>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}