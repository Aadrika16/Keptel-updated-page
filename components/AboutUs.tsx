"use client";

import Image from "next/image";
import SlideUp from "@/components/SlideUp";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Gem,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const featureCards = [
  {
    title: "Our Purpose",
    description:
      "To understand organizational needs and connect them with the right talent through precision and insight.",
    icon: Target,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    lineColor: "bg-red-500",
  },
  {
    title: "Our Expertise",
    description:
      "Deep domain knowledge across IT, Automotive, Aerospace, Automation & emerging technologies.",
    icon: Gem,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    lineColor: "bg-blue-500",
  },
  {
    title: "Our Commitment",
    description:
      "Delivering reliable staffing and engineering support with ISO-certified quality and strong processes.",
    icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    lineColor: "bg-emerald-500",
  },
  {
    title: "Our Promise",
    description:
      "Empowering organizations with agile, capable talent that drives execution and growth.",
    icon: Rocket,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    lineColor: "bg-violet-500",
  },
];

const stats = [
  {
    value: "500+",
    label: "Talent",
    subLabel: "Deployed",
    icon: Users,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    value: "10+",
    label: "Industry",
    subLabel: "Domains",
    icon: BriefcaseBusiness,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    value: "ISO",
    label: "Certified",
    subLabel: "Quality",
    icon: BadgeCheck,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    value: "100%",
    label: "Client",
    subLabel: "Satisfaction",
    icon: BarChart3,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at 10% 20%,
              rgba(219, 234, 254, 0.65),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(254, 226, 226, 0.65),
              transparent 32%
            )
          `,
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* =========================================================
            MAIN PREMIUM CARD
            ========================================================= */}

        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-5 shadow-[0_25px_80px_rgba(30,58,95,0.10)] backdrop-blur-xl sm:p-8 lg:p-10 xl:p-12">
          
          {/* Decorative background glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

          {/* =======================================================
              MAIN GRID
              ======================================================= */}

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-12 xl:gap-16">
            
            {/* =====================================================
                LEFT SIDE
                ===================================================== */}

            <div className="flex min-w-0 flex-col">
              
              {/* WHO WE ARE */}
              <SlideUp>
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 shadow-[0_8px_25px_rgba(239,68,68,0.08)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
                    <Users
                      size={16}
                      strokeWidth={2.5}
                      className="text-red-500"
                    />
                  </span>

                  <span className="text-xs font-semibold tracking-[0.12em] text-red-500 sm:text-sm">
                    WHO WE ARE
                  </span>
                </div>
              </SlideUp>

              {/* HEADING */}
              <SlideUp>
                <div>
                  <h2 className="text-[44px] font-bold leading-[0.98] tracking-[-0.04em] text-[#122247] sm:text-5xl md:text-6xl">
                    About{" "}
                    <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                      Us
                    </span>
                  </h2>

                  <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-rose-400" />
                </div>
              </SlideUp>

              {/* DESCRIPTION */}
              <div className="mt-6 max-w-2xl space-y-5">
                <SlideUp>
                  <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7">
                    Keptel was established with a clear purpose: to{" "}
                    <strong className="font-semibold text-[#122247]">
                      understand
                    </strong>{" "}
                    diverse organizational needs and{" "}
                    <strong className="font-semibold text-[#122247]">
                      connect
                    </strong>{" "}
                    them with the right talent through precise,
                    insight-driven mapping.
                  </p>
                </SlideUp>

                <SlideUp>
                  <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7">
                    With strong domain expertise across IT Services,
                    Automotive, Aerospace, Automation, and emerging
                    technologies, we specialize in identifying professionals
                    who integrate seamlessly into business environments and{" "}
                    <strong className="font-semibold text-[#122247]">
                      deliver immediate value.
                    </strong>
                  </p>
                </SlideUp>

                <SlideUp>
                  <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7">
                    Backed by extensive research on skill availability, talent
                    landscapes, and technology trends, Keptel delivers human
                    capital solutions that accelerate business outcomes. Our
                    commitment to effective{" "}
                    <span className="font-semibold text-red-500">
                      “Talent Mobility”
                    </span>{" "}
                    ensures organizations gain access to agile, capable, and
                    job-ready professionals.
                  </p>
                </SlideUp>
              </div>

              {/* =====================================================
                  STATS
                  ===================================================== */}

              <SlideUp>
                <div className="mt-8 rounded-[22px] border border-slate-100 bg-white p-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-4">
                  <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
                    {stats.map((stat) => {
                      const Icon = stat.icon;

                      return (
                        <div
                          key={stat.value}
                          className="group flex items-center gap-3 px-3 py-3 transition-transform duration-300 hover:-translate-y-1 sm:px-4"
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${stat.iconBg}`}
                          >
                            <Icon
                              size={21}
                              strokeWidth={2}
                              className={stat.iconColor}
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="text-lg font-bold leading-none text-[#122247] sm:text-xl">
                              {stat.value}
                            </div>

                            <div className="mt-1 text-xs leading-4 text-slate-500">
                              {stat.label}
                              <br />
                              {stat.subLabel}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SlideUp>

              {/* =====================================================
                  BUTTON
                  ===================================================== */}

              <SlideUp>
                <div className="mt-8">
                  <a
                    href="/about"
                    className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(239,68,68,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(239,68,68,0.32)]"
                  >
                    <span>Know More</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={19} strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </SlideUp>
            </div>

            {/* =====================================================
                RIGHT SIDE
                ===================================================== */}

            <div className="min-w-0">
              
              {/* ===================================================
                  FEATURE CARDS
                  =================================================== */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {featureCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <SlideUp key={card.title}>
                      <div
                        className="group relative h-full min-h-[190px] overflow-hidden rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)] sm:p-6"
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {/* Hover glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-slate-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                        {/* ICON */}
                        <div
                          className={`relative flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg}`}
                        >
                          <Icon
                            size={27}
                            strokeWidth={2}
                            className={card.iconColor}
                          />
                        </div>

                        {/* TITLE */}
                        <h3 className="relative mt-5 text-[17px] font-semibold text-[#122247]">
                          {card.title}
                        </h3>

                        {/* SMALL LINE */}
                        <div
                          className={`relative mt-3 h-[2px] w-9 rounded-full ${card.lineColor}`}
                        />

                        {/* DESCRIPTION */}
                        <p className="relative mt-4 text-sm leading-6 text-slate-500">
                          {card.description}
                        </p>
                      </div>
                    </SlideUp>
                  );
                })}
              </div>

              {/* ===================================================
                  TEAM IMAGE CARD
                  =================================================== */}

              <SlideUp>
                <div className="group relative mt-5 h-[250px] overflow-hidden rounded-[24px] border border-white bg-gradient-to-br from-red-50 via-white to-blue-50 shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:h-[280px]">
                  
                  {/* Decorative dots */}
                  <div className="absolute left-4 top-5 z-10 grid grid-cols-4 gap-2 opacity-50">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-1 w-1 rounded-full bg-red-300"
                      />
                    ))}
                  </div>

                  {/* Decorative line */}
                  <div className="absolute right-0 top-12 z-10 h-20 w-32 rounded-l-full border-l-2 border-t-2 border-red-200/70" />

                  {/* Soft background circles */}
                  <div className="absolute -bottom-16 -right-8 h-36 w-36 rounded-full bg-red-100/60 blur-sm" />

                  <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-blue-100/50" />

                  {/* IMAGE */}

                  <Image
                    src="/group.jpg"
                    alt="Keptel professional community"
                    fill
                    className="relative z-[2] object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#122247]/10 via-transparent to-transparent" />
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
