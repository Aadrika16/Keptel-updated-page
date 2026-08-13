"use client";

import YellowButton from "./YellowButton";
import Lottie from "lottie-react";
import officeAnimation from "./lottie/Office.json";
import SlideUp from "@/components/SlideUp";

export default function AboutUs() {
  return (
    <section className="max-w-[96rem] mx-auto px-4 sm:px-6 py-20">
      <SlideUp>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 lg:p-20 border border-gray-100 relative overflow-hidden">
          
          {/* Main Flex/Grid Layout matching the target design */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Animation */}
            <div className="w-full lg:w-5/12 flex-shrink-0 flex justify-center">
              <div className="w-full max-w-[550px] flex items-center justify-center">
                <Lottie
                  animationData={officeAnimation}
                  loop
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Title, Underline, Paragraphs, and Button */}
            <div className="w-full lg:w-7/12 flex flex-col items-start">
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extralight text-[#0e355d] tracking-tight">
                About Us
              </h2>

              {/* Red Underline Line */}
              <div className="w-16 h-1 bg-red-600 mt-3 mb-6 rounded-full"></div>

              {/* First Paragraph */}
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-left text-base">
                Keptel was established with a clear purpose: to understand diverse
                organizational needs and connect them with the right talent
                through precise, insight-driven mapping. With strong domain
                expertise across IT Services, Automotive, Aerospace, Automation,
                and emerging technologies, we specialize in identifying
                professionals who integrate seamlessly into business environments
                and deliver immediate value. Our processes are guided by deep
                market intelligence, technical leadership, and ISO-certified
                quality systems, enabling us to provide dependable staffing and
                engineering support tailored to specific industry challenges.
              </p>

              {/* Second Paragraph */}
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-left text-base">
                Backed by extensive research on skill availability, talent
                landscapes, and technology trends, Keptel consistently delivers
                human capital solutions that accelerate business outcomes. Our
                commitment to effective “Talent Mobility” ensures organizations
                gain access to agile, capable, and job-ready professionals who
                strengthen execution and drive growth. As a trusted partner,
                Keptel continues to bridge the gap between opportunity and
                talent—empowering companies to scale with confidence and stay
                competitive in a rapidly evolving market.
              </p>

              {/* Button alignment */}
              <div>
                <YellowButton text="Know More" href="/about" />
              </div>

            </div>

          </div>

        </div>
      </SlideUp>
    </section>
  );
}