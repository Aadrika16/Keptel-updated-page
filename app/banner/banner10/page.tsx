"use client";

import Footer from "@/components/Footer";

const Box = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
    <h3 className="text-xl font-normal text-[#D60000] leading-snug tracking-tight mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed font-light">{text}</p>
  </div>
);

export default function KeptelAIPage() {
  return (
    <div className="w-full bg-white text-gray-900 selection:bg-[#D60000] selection:text-white font-light">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#F4F7FB] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-tight leading-[1.15] text-slate-900">
              Unlock the power of AI with Keptel.AI
            </h1>

            <div className="h-[3px] w-16 bg-[#D60000]"></div>

            <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
              Keptel.AI unifies data, automation, and intelligence into a single seamless ecosystem.
              From raw, fragmented data to enterprise-grade AI deployment, Keptel accelerates every step of the journey.
              Built for scale, speed, and real-world impact, it empowers organizations to operate smarter, faster, and more efficiently.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            <Box title="100+ AI accelerators" text="to optimize and automate operations end-to-end." />
            <Box title="AI agents tailored by industry" text="built for automotive, aerospace, IT, and automation." />
            <Box title="Open cloud architecture" text="smooth integration with AWS, Azure, GCP, and Fabric." />
            <Box title="Full observability dashboards" text="track cost, model drift, compliance, and performance." />
            <Box title="5+ years of AI expertise" text="delivering scalable, production-grade AI systems across global industries." />
            <Box title="Unified data-to-AI pipeline" text="from ingestion to deployment, ensuring your data becomes AI-ready with zero friction." />
          </div>

        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-slate-900">Key benefits of Keptel</h2>
            <div className="h-[3px] w-16 bg-[#D60000] mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-normal text-[#D60000] tracking-tight mb-3">Seamless AI integration</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  Integrates into existing workflows with cloud-agnostic design.
                  No disruptive overhauls — deploy AI instantly across hybrid environments.
                </p>
              </div>
            </div>

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-normal text-[#D60000] tracking-tight mb-3">Efficiency & cost savings</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  Automate processes, reduce delays, eliminate human error,
                  and streamline operations with built-in governance.
                </p>
              </div>
            </div>

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-normal text-[#D60000] tracking-tight mb-3">Analytics at your fingertips</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  Leverage Keptel’s domain-specific datasets + third-party data
                  for real-time insights and faster decision-making.
                </p>
              </div>
            </div>

            <div className="bg-slate-50/60 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-normal text-[#D60000] tracking-tight mb-3">Personalized experiences</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  AI tools adapt to customer needs, enhancing user experience
                  while reducing operational effort and increasing satisfaction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="w-full py-28 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight">Keptel impact</h2>
            <div className="h-[3px] w-16 bg-[#D60000] mt-3"></div>
            <p className="text-slate-300 leading-relaxed font-light mt-6 text-base">
              Keptel.AI empowers organizations to scale AI with control, speed,
              and measurable business results — across automotive, aerospace,
              embedded, and digital transformation programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCard metric="100+" text="AI accelerators and industry-ready agents" />
            <ImpactCard metric="27%" text="reduction in process turnaround time" />
            <ImpactCard metric="40%" text="boost in customer satisfaction scores" />
            <ImpactCard metric="20%" text="productivity increase through AI automation" />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

function ImpactCard({ metric, text }: { metric: string | number; text: string }) {
  return (
    <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200/80 flex flex-col justify-between">
      <h3 className="text-4xl font-light text-[#D60000] tracking-tight">{metric}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed text-sm font-light">{text}</p>
    </div>
  );
}