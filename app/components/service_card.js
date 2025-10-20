"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ServiceCard = ({ _id, iconImage, title, description }) => {
  const router = useRouter();

  return (
    <div
      key={_id}
      onClick={() => router.push(`/services/${_id}`)}
      className="group relative cursor-pointer h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] overflow-hidden rounded-xl flex items-stretch"
    >
      {/* Shine Border */}
      <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

      {/* Card Body */}
      <div className="relative flex flex-col justify-between h-full w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
        
        {/* Arrow Button */}
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-white/10 p-2 group-hover:scale-105 transition-transform duration-300">
            <img
              src={iconImage || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 line-clamp-4 px-2 sm:px-0">
          {description}
        </p>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
