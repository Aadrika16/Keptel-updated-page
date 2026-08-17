"use client";

import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import SolutionMiniCard from "@/components/SolutionMiniCard";
import ExlCard from "@/components/ExlCard";
import Link from "next/link";

export default function DataAIPage() {
  const blogData = [
    {
      id: 1,
      title: "Industrial Automation",
      text: "Powering smart manufacturing with robotics, IoT, and intelligent automation systems.",
      bg: "/top/autommation.jpeg",
      href: "/banner/banner4",
    },
    {
      id: 2,
      title: "Healthcare Digital Transformation",
      text: "Enabling patient-centric, data-driven care with AI, telemedicine, and cloud technologies.",
      bg: "/top/healthcare.jpeg",
      href: "/banner/banner3",
    },
    {
      id: 3,
      title: "IT Services & Digital Engineering",
      text: "Accelerating enterprise transformation through cloud, AI/ML, and scalable digital platforms.",
      bg: "/top/server.jpeg",
      href: "/banner/banner1",
    },
    {
      id: 4,
      title: "IoT & Embedded Systems",
      text: "Driving renewable energy, smart infrastructure, and edge intelligence through embedded innovation.",
      bg: "/top/windmill.jpeg",
      href: "/banner/banner2",
    },
    {
      id: 5,
      title: "Aerospace & Defence",
      text: "Engineering mission-critical avionics, autonomous systems, and next-generation defense technologies.",
      bg: "/top/aerospace.jpeg",
      href: "/banner/banner6",
    },
    {
      id: 6,
      title: "Automotive Engineering",
      text: "Shaping electric, autonomous, and software-defined vehicles with advanced automotive innovation.",
      bg: "/top/car.jpeg",
      href: "/banner/banner5",
    },
  ];

  const miniCardLinks = [
    { label: "Cloud & Analytics", href: "/tech/cloud-analytics", img: "/mini/cloud.jpeg" },
    { label: "Frameworks", href: "/tech/frameworks", img: "/mini/framework.jpeg" },
    { label: "Infrastructure", href: "/tech/infrastructure", img: "/mini/infrastructure.jpeg" },
    { label: "Orchestration Platforms", href: "/tech/orchestration", img: "/mini/orchestration.jpeg" },
    { label: "Backend Engineering", href: "/tech/backend-engineering", img: "/mini/backend.jpeg" },
    { label: "Storage & Databases", href: "/tech/storage-databases", img: "/mini/storage.jpeg" },
  ];

  return (
    <div className="w-full bg-white text-gray-900 selection:bg-red-500 selection:text-white">

      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5170f_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="w-[320px] mx-auto md:mx-0 p-4 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
            <img src="/ball.gif" className="w-full h-auto object-contain rounded-2xl" alt="Ball animation" />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide uppercase">
              Enterprise Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
              Introduce to <span className="font-normal text-red-500">Keptel</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Transforming enterprises through AI-driven insights, advanced data engineering, and intelligent automation powered by unified, high-quality data.
            </p>
            
            <div className="pt-2">
              <Link href="/contact-us">
                <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-red-600 text-white font-medium rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all duration-300 hover:translate-x-1">
                  <span>Request a demo</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUE CAPABILITY ================= */}
      <section className="w-full py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-slate-900 leading-[1.2]">
              Unlock the true potential of your <span className="text-red-600 font-normal">enterprise data</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Most organizations face silos, unstructured information, and slow data workflows. 
              A modern AI-native foundation enables seamless insights, automation, and faster decision-making 
              across the enterprise.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-black w-full h-[320px] md:h-[380px] relative group">
            <video
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              src="/a.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>

      {/* ================= MODULAR APPROACH ================= */}
      <section className="w-full py-28 bg-slate-100/60 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-slate-900 leading-tight">
              Orchestrating data, AI and human expertise in enterprise workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <ExlCard
                  title={item.title}
                  desc={item.text}
                  image={item.bg}
                  href={item.href}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SEAMLESS INTEGRATION ================= */}
      <section className="w-full bg-black text-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-red-500 rounded-full"></div>
            
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-[1.2]">
              Seamless integration, <span className="text-red-500 font-normal">maximum impact</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Our AI-native ecosystem integrates smoothly with modern data platforms,
              enhancing your existing investments while delivering faster outcomes.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 h-[320px] md:h-[380px]">
            <video
              src="/carousel/liquid.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION MINI CARDS ================= */}
      <section className="w-full py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-slate-900 mt-4">
              Solution modules
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {miniCardLinks.map((item, index) => (
              <SolutionMiniCard
                key={index}
                title={item.label}
                img={item.img}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}