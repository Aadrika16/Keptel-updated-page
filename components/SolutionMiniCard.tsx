"use client";

import SlideUp from "@/components/SlideUp";

interface SolutionMiniCardProps {
  title: string;
  img?: string;
  href: string;
}

export default function SolutionMiniCard({
  title,
  img,
  href,
}: SolutionMiniCardProps) {
  return (
    <a
      href={href}
      className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-md shadow-slate-200/40 hover:shadow-2xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
    >
      {/* Decorative gradient blur background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {img && (
        <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 relative shadow-inner">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="flex items-center justify-between gap-4 relative z-10">
        <h3 className="text-lg md:text-xl font-light text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
          {title}
        </h3>
        
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shrink-0 shadow-sm">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </a>
  );
}