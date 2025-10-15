'use client'
import Image from "next/image"
import { Facebook, Instagram, Linkedin, ArrowRight, ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function TeamSection({ max, fix, autoPlay = false }) {
    const router = useRouter();
    const swiperRef = useRef(null);
    const teamMembers = [
        {
            id: 1,
            name: "Muhammad Nurullah",
            role: "CEO & Founder",
            image: "/teams/CEO.jpg"
        },
        {
            id: 17,
            name: "Md Touhid",
            role: "Projects Manager",
            image: "/teams/Touhid.jpg"
        },
        {
            id: 21,
            name: "Shib Lal Das",
            role: "Web Analytics Specialist",
            image: "/teams/Shib Lal Das.jpg"
        },
        {
            id: 22,
            name: "Rabiul Islam",
            role: "Sales Manager",
            image: "/teams/Rabiul Islam.jpg"
        },
        {
            id: 19,
            name: "Sohag Roy",
            role: "Full Stack Webflow Developer",
            image: "/teams/Sohag Roy.jpg"
        },
        {
            id: 13,
            name: "AB Salam",
            role: "Webflow Designer & Developer",
            image: "/teams/AB.jpg"
        },


        {
            id: 18,
            name: "Limon Rana",
            role: "Webflow Junior Designer",
            image: "/teams/Limon Rana.jpg"
        },
        {
            id: 7,
            name: "Amir Ahad",
            role: "Full Stack Developer",
            image: "/teams/Amir Ahad.jpg",
        },
        {
            id: 5,
            name: "Talha Jubair",
            role: "Full Stack Developer",
            image: "/teams/Talha Jubair.jpg",
        },
        {
            id: 6,
            name: "Sabbir Ahmed",
            role: "Full Stack Developer",
            image: "/teams/Sabbir Ahmed.jpg",
        },
        {
            id: 14,
            name: "Emon Hossain",
            role: "Junior UX & UI Designer",
            image: "/teams/Emon Ui.jpg"
        },
        {
            id: 23,
            name: "Yeasin Arafat",
            role: "UI/UX Designer",
            image: "/teams/Yeasin Arafat.jpg"
        },
        {
            id: 24,
            name: "Mehedi Hasan Ontor",
            role: "UI/UX Designer",
            image: "/teams/Mehedi Hasan Ontor.jpg"
        },
        {
            id: 25,
            name: "Md Sakil Ahamed",
            role: "WordPress Developer",
            image: "/teams/Sakil.jpg"
        },
        {
            id: 15,
            name: "Yunus",
            role: "WordPress Design & Developer",
            image: "/teams/Yunus.jpg"
        },
        {
            id: 12,
            name: "Emon Hossain",
            role: "Performance Marketing Specialist",
            image: "/teams/Emon.jpg"
        },
        {
            id: 20,
            name: "Rion Ahmed",
            role: "Conversion Tracking Expert",
            image: "/teams/Rion Ahmed.jpg"
        },
        {
            id: 26,
            name: "Tanzil Ahmed",
            role: "SEO Specialist",
            image: "/teams/Tanzil SEO Specialist.jpg"
        },
        {
            id: 2,
            name: "Shamim Uzzaman",
            role: "Graphics Designer",
            image: "/teams/Shamim.jpg",
        },
        {
            id: 11,
            name: "Tuhin Rana",
            role: "Video Editing Expert",
            image: "/teams/Tuhin Rana.jpg"
        },

        {
            id: 16,
            name: "Shakil Hossain",
            role: "AI Automation Expert",
            image: "/teams/Shakil Hossain.jpg"
        },

    ]

    // Show only max members if max prop is provided
    const visibleMembers = max ? teamMembers.slice(0, max) : teamMembers;

    // Team member card component
    const TeamMemberCard = ({ member }) => (
        <div
            className="group relative rounded-xl overflow-hidden border-2 border-gray-600 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 "
            style={{ height: 475 }}
        >
            {/* Shine Border Effect - Always visible like expert section */}
            <div className="shine-border absolute inset-0 rounded-xl pointer-events-none z-10"></div>

            {/* Social Icons - Only visible on hover */}
            <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                </button>
            </div>

            {/* Member Image */}
            <div className="overflow-hidden relative z-1 h-full w-full">
                <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover h-full w-full transition-transform duration-300 rounded-lg"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg z-0"></div>
            </div>

            {/* Member Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{member.role}</p>
            </div>
        </div>
    );

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .swiper-pagination-bullet-custom {
                        width: 12px;
                        height: 12px;
                        background: #6b7280;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    .swiper-pagination-bullet-custom:hover {
                        background: #9ca3af;
                    }
                    .swiper-pagination-bullet-active-custom {
                        background: #07f4fa !important;
                        transform: scale(1.25);
                    }
                    .team-swiper {
                        padding: 0 60px;
                    }
                    .team-swiper .swiper-slide {
                        height: auto;
                    }
                    .team-swiper .swiper-button-next,
                    .team-swiper .swiper-button-prev {
                        width: 48px;
                        height: 48px;
                        background: rgba(0, 0, 0, 0.5);
                        border-radius: 50%;
                        color: #07f4fa;
                        backdrop-filter: blur(4px);
                        transition: all 0.3s ease;
                        z-index: 20;
                    }
                    .team-swiper .swiper-button-next:hover,
                    .team-swiper .swiper-button-prev:hover {
                        background: rgba(0, 0, 0, 0.7);
                        transform: scale(1.1);
                    }
                    .team-swiper .swiper-button-next::after,
                    .team-swiper .swiper-button-prev::after {
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .team-swiper .swiper-button-disabled {
                        opacity: 0.3;
                        pointer-events: none;
                    }
                `
            }} />
            <div className="container mx-auto px-4 py-16">
                <div className="">
                    {fix ? (
                        /* Swiper Carousel Mode */
                        <div className="relative">
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                navigation={true}
                                autoplay={autoPlay ? {
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                } : false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                className="team-swiper mb-8"
                            >
                                {teamMembers.map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <TeamMemberCard member={member} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>


                            {/* Custom Pagination */}
                            <div className="swiper-pagination-custom flex justify-center space-x-2 mt-8 mb-8"></div>

                            {/* View Full Team Button */}
                            <div className="flex justify-center">
                                <div
                                    onClick={() => router.push('/team')}
                                    className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105 cursor-pointer"
                                >
                                    <span className="mr-1">View Full Team</span>
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                        <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Regular Grid Mode */
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {visibleMembers.map((member) => (
                                    <TeamMemberCard key={member.id} member={member} />
                                ))}
                            </div>

                            {/* View All Members Button */}
                            {max && (
                                <div className="flex justify-center">
                                    <div
                                        onClick={() => router.push('/team')}
                                        className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105 cursor-pointer"
                                    >
                                        <span className="mr-1">View All Members</span>
                                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                            <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
