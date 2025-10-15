import React from "react"
import { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation";

const ServiceCard = ({_id, iconImage, title, description }) => {
  const router = useRouter();
  return (
    <div key={_id} onClick={() => router.push(`/services/${_id}`)} className="group relative cursor-pointer md:h-[280px] h-full lg:h-[280px] overflow-hidden rounded-xl flex items-center">
      {/* Shine Border Effect */}
      <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

      {/* Card Content */}
      <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300  hover:shadow-2xl hover:shadow-cyan-500/20 text-center ">
        {/* Arrow Icon - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-8 h-8 rounded-full bg-gray-700/50 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
          <img src={iconImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 line-clamp-4">
          {description}
        </p>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default ServiceCard
