"use client";

import SlideUp from "@/components/SlideUp";

interface Props {
  image: string;
  title: string;
  text: string;
  index: number;
}

export default function ServiceSection({
  image,
  title,
  text,
  index,
}: Props) {
  const reverse = index % 2 === 1;

  return (
    <section className="bg-[#f5f7fa] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN SERVICE CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 lg:p-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}
            <SlideUp>
              <div
                className={`${
                  reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div
                  className="w-full aspect-[4/3] rounded-3xl overflow-hidden"
                  style={{ backgroundColor: "#f5ede0" }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SlideUp>

            {/* CONTENT */}
            <SlideUp>
              <div
                className={`${
                  reverse ? "md:order-1" : "md:order-2"
                } flex flex-col justify-center`}
              >
                {/* SMALL LABEL */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-1 bg-red-600"></div>

                  <span className="text-sm font-medium uppercase tracking-wider text-red-600">
                    {title}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-light text-[#0e355d] leading-tight">
                  {title}
                </h2>

                {/* DIVIDER */}
                <div className="w-12 h-1 bg-red-600 mt-5 mb-6"></div>

                {/* DESCRIPTION */}
                <p className="text-base text-gray-700 font-light leading-relaxed">
                  {text}
                </p>
              </div>
            </SlideUp>

          </div>
        </div>
      </div>
    </section>
  );
}
