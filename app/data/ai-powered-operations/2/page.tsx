"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Customer Operations";
  const bg = "/pic/Customer operations.png";

  const introHeading =
    "Deliver seamless customer experiences with data, intelligence, and speed";

  const introPara =
    "Customer expectations have never been higher. Keptel transforms customer operations by integrating AI-driven insights, automated workflows, and omnichannel orchestration. We help you deliver fast, personalised, high-quality experiences that strengthen loyalty and reduce service friction.";

  const midTitle =
    "Customer operations designed for immediate, relevant, and predictive engagement";

  const midPara =
    "Keptel enables enterprises to unify customer data, infuse intelligent recommendations, and streamline every touchpoint. From onboarding to service to retention, we help organisations engage customers more effectively using data-led strategies and powerful AI tools.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center px-6 md:px-20">
          <SlideUp>
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
                Customer<br />
                <span className="text-red-600 font-normal">Operations</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 mt-4 mb-6"></div>
              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                Create personalised, connected customer experiences at scale.
              </p>
            </div>
          </SlideUp>
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
                  src="/pic/Customer operations.png" 
                  alt="Customer operations concept" 
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
      {/* MID SECTION (Card style with wider layout and left image) */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-[88rem] mx-auto px-6">
          <SlideUp>
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border-l-4 border-red-600 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-4/12 flex-shrink-0 flex justify-center order-1 md:order-1">
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl p-2 flex items-center justify-center">
                  <Image 
                    src="/pic/Customer journey optimization1.png" 
                    alt="Customer journey optimization concept" 
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
      {/* WHAT WE DO */}
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
      {/* CARD GRID (3 in first row, remaining aligned to start) */}
      {/* -------------------------------------------------- */}
      <div className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start auto-rows-fr">

            <div className="w-full h-full">
              <SideBySideCard
                title="Customer journey optimisation"
                text="Design frictionless customer journeys supported by intelligence and automation."
                image="/pic/Customer journey optimization1.png"
                color="#ffffff"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="AI-assisted service"
                text="Enable agents and customers with real-time recommendations and automated resolutions."
                image="/pic/AI-assisted service.png"
                color="#f9f9f9"
              />
            </div>

            <div className="w-full h-full">
              <SideBySideCard
                title="Omnichannel orchestration"
                text="Deliver consistent experiences across chat, email, voice, self-service, and mobile."
                image="/pic/Omnichannel orchestration.png"
                color="#eaeaea"
              />
            </div>

            <div className="w-full h-full md:col-span-2 lg:col-span-1 lg:col-start-1">
              <SideBySideCard
                title="Customer insights & analytics"
                text="Turn customer signals into predictive insights that drive engagement and loyalty."
                image="/pic/Customer insights & analytics.png"
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