"use client";

import { useState, useMemo } from "react";
import AIpipline from "@/components/AIPipelineFlow";
import Footer from "@/components/Footer";

export default function DataAISolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: "Data Cleaning & Quality Engineering",
      category: "Data Foundation",
      description:
        "Automated cleansing, deduplication, validation, metadata enrichment, and schema alignment for enterprise data quality.",
      href: "/data/data-cleaning",
    },
    {
      id: 2,
      title: "Data Monetization",
      category: "Business Value",
      description:
        "Turn data into high-value products, dashboards, APIs, and insights that unlock new revenue streams.",
      href: "/data/data-monetization",
    },
    {
      id: 3,
      title: "AI-Ready Pipelines",
      category: "AI Foundation",
      description:
        "Production-grade data pipelines that prepare your data for LLMs, predictive models, and intelligent automation.",
      href: "/data/ai-ready-pipelines",
    },
  ];

  const [query, setQuery] = useState("");
  const filteredSolutions = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return solutions;
    return solutions.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-light">

      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-widest uppercase">
              Data & AI Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-extralight leading-[1.1] tracking-tight">
              Clean, Monetize, and Power <span className="font-normal text-red-500">AI with Your Data</span>
            </h1>

            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Three essential capabilities for modern enterprises: ensure data quality through cleaning, generate revenue through monetization, and enable intelligent automation with AI-ready pipelines.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-[420px] p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
              <AIpipline />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THREE PILLARS ================= */}
      <section className="w-full py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr,1.2fr] gap-14 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
              Three Core Pillars
            </span>

            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-slate-900 leading-tight">
              Transform enterprise data into <span className="font-normal text-red-600">business value</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Our approach focuses on three fundamental capabilities: cleaning data to establish trust and quality, monetizing it to generate revenue, and making it AI-ready to enable intelligent automation.
            </p>
          </div>

          <div className="space-y-4">
            <NumberedCard
              number="01"
              title="Data Cleaning & Quality Engineering"
              body="Automated validation, deduplication, standardization, and quality scoring that eliminate inconsistencies and establish trusted data foundations."
            />
            <NumberedCard
              number="02"
              title="Data Monetization"
              body="Transform data into revenue-generating products including analytics dashboards, predictive APIs, and actionable insights."
            />
            <NumberedCard
              number="03"
              title="AI-Ready Pipelines"
              body="Production-grade pipelines that feed LLMs, ML models, and intelligent automation with clean, governed, real-time data."
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION CATALOG ================= */}
      <section className="w-full py-24 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
                Solution Catalog
              </span>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-slate-900 mt-4">
                Explore Data & AI Solutions
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-2xl font-light">
                Discover solutions for building clean, standardized, and AI-ready enterprise data.
              </p>
            </div>

            <div className="w-full md:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: e.g. cleaning, pipelines..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredSolutions.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md shadow-slate-200/40 hover:shadow-2xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-4">
                    {s.category}
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 font-light leading-relaxed">{s.description}</p>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-red-600 relative z-10 group-hover:translate-x-1 transition-transform">
                  <span>View details</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <p className="text-sm text-slate-500 mt-6 text-center py-12">
              No solutions match "{query}". Try another keyword.
            </p>
          )}
        </div>
      </section>

      {/* ================= DATA INSIGHTS ================= */}
      <section className="w-full py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-light text-slate-900">
                Why data quality matters
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Organizations struggle with inconsistent formats, missing values, technical silos, and manual processes. These issues reduce accuracy and delay insights. Quality engineering solves this with automated cleansing and validation.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                  Common data quality challenges
                </p>

                <BarRow label="Quality issues" value={48} color="bg-red-500" />
                <BarRow label="Siloed sources" value={32} color="bg-sky-600" />
                <BarRow label="Manual processes" value={15} color="bg-slate-500" />
                <BarRow label="No governance" value={5} color="bg-emerald-500" />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-light text-slate-900">
                AI success requires data maturity
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                High-quality, unified, governed data is the foundation of successful AI. The right infrastructure and pipelines convert raw data into production-ready AI fuel.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                  Data maturity levels
                </p>

                <ComparisonBar label="Current state" leader={20} follower={15} laggard={10} />
                <ComparisonBar label="Target state" leader={80} follower={70} laggard={60} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full py-24 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div>
            <span className="text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
              Key Benefits
            </span>

            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-slate-900 mt-4 mb-10">
              What you achieve with data transformation
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-slate-700">
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-normal text-lg mb-3 text-slate-900">Clean & Trusted Data</h4>
                <p className="font-light text-sm leading-relaxed text-slate-600">
                  Eliminate duplicates, fix inconsistencies, and structure data for reliable consumption across applications and analytics.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-normal text-lg mb-3 text-slate-900">Revenue Generation</h4>
                <p className="font-light text-sm leading-relaxed text-slate-600">
                  Build dashboards, APIs, analytics layers, and ML insights that directly contribute to revenue and performance.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-normal text-lg mb-3 text-slate-900">AI-Powered Automation</h4>
                <p className="font-light text-sm leading-relaxed text-slate-600">
                  Deploy production-ready pipelines that enable real-time analytics, LLMs, and intelligent decision-making.
                </p>
              </div>

            </div>
          </div>

          {/* STATISTICS */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h4 className="text-lg font-light text-slate-900 mb-4">
                Data transformation priorities
              </h4>

              <table className="w-full text-sm font-light">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-100">
                    <th className="py-3 pr-2 font-medium">Priority</th>
                    <th className="py-3 pr-2 text-red-600 font-medium">Leader</th>
                    <th className="py-3 pr-2 text-sky-700 font-medium">Follower</th>
                    <th className="py-3 text-slate-700 font-medium">Laggard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <Row label="Data Quality Automation" leader="62%" follower="30%" laggard="8%" />
                  <Row label="Unified Data Models" leader="55%" follower="37%" laggard="18%" />
                  <Row label="AI-Ready Pipelines" leader="70%" follower="40%" laggard="15%" />
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h4 className="text-lg font-light text-slate-900 mb-4">
                Implementation metrics
              </h4>

              <div className="space-y-4 text-sm font-light">
                <MetricItem label="Data quality improvement" value="85-95%" />
                <MetricItem label="Time to insights reduction" value="60-70%" />
                <MetricItem label="Cost savings" value="30-40%" />
                <MetricItem label="AI model accuracy gain" value="25-35%" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="w-full bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.1fr,1.3fr] gap-14 items-center relative z-10">

          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
              Technology Stack
            </span>

            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight leading-tight">
              Built on modern cloud and <span className="text-red-500 font-normal">data platforms</span>
            </h2>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Leveraging industry-leading technologies for data ingestion, quality control, transformation, analytics, and AI deployment across scalable cloud architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-light">
            {[
              "Cloud: AWS, Azure, GCP",
              "Analytics: Power BI, Tableau, Qlik",
              "Big Data: Spark, Databricks",
              "Frameworks: Python, Kafka, .NET",
              "Orchestration: Airflow, Kubernetes",
              "Storage: S3, ADLS, Snowflake",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-3.5 shadow-sm text-slate-200 hover:border-red-500/40 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}


/* ================== HELPER COMPONENTS ================== */

type NumberedCardProps = {
  number: number | string;
  title: string;
  body: string;
};

type BarRowProps = {
  label: string;
  value: number;
  color: string;
};

type ComparisonBarProps = {
  label: string;
  leader: number;
  follower: number;
  laggard: number;
};

type RowProps = {
  label: string;
  leader: number | string;
  follower: number | string;
  laggard: number | string;
};

type MetricItemProps = {
  label: string;
  value: number | string;
};

export function NumberedCard({ number, title, body }: NumberedCardProps) {
  return (
    <div className="flex bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg shadow-slate-950/20 hover:border-slate-700 transition-colors">
      <div className="w-20 flex items-center justify-center bg-black/40 border-r border-slate-800">
        <span className="text-red-500 text-xl font-light">{number}</span>
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-base font-normal text-white mb-1.5 tracking-tight">{title}</h3>
        <p className="text-xs text-slate-400 font-light leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export function BarRow({ label, value, color }: BarRowProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-xs mb-1.5 text-slate-600 font-light">
        <span className="text-slate-700">{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export function ComparisonBar({ label, leader, follower, laggard }: ComparisonBarProps) {
  const total = leader + follower + laggard;

  return (
    <div className="mb-4 last:mb-0">
      <p className="text-xs font-light mb-1.5 text-slate-700">{label}</p>
      <div className="h-2.5 rounded-full bg-slate-100 flex overflow-hidden text-[10px] gap-0.5">
        <div
          className="flex items-center justify-center bg-red-500 text-white font-medium"
          style={{ width: `${(leader / total) * 100}%` }}
        >
          L {leader}%
        </div>
        <div
          className="flex items-center justify-center bg-sky-600 text-white font-medium"
          style={{ width: `${(follower / total) * 100}%` }}
        >
          F {follower}%
        </div>
        <div
          className="flex items-center justify-center bg-slate-600 text-white font-medium"
          style={{ width: `${(laggard / total) * 100}%` }}
        >
          G {laggard}%
        </div>
      </div>
    </div>
  );
}

export function Row({ label, leader, follower, laggard }: RowProps) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="py-3.5 pr-2 font-light text-slate-700">{label}</td>
      <td className="py-3.5 pr-2 text-red-600 font-medium">{leader}</td>
      <td className="py-3.5 pr-2 text-sky-600 font-medium">{follower}</td>
      <td className="py-3.5 text-slate-600 font-medium">{laggard}</td>
    </tr>
  );
}

export function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0 font-light">
      <span className="text-slate-600">{label}</span>
      <span className="font-normal text-red-600">{value}</span>
    </div>
  );
}