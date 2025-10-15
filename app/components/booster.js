'use client';
import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const AttributionBooster = () => {
    return (
        <section className="relative z-10 w-full py-16 lg:py-24 overflow-hidden scroll-smooth">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Attribution Booster In{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            1 Minutes
                        </span>
                    </h2>
                    {/* <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                        In this section, we would love to showcase a short video about Attribution Booster,
                        where we would cover our expertise, why you should work with us, and how Booster
                        has made our clients happy and successful in their business.
                    </p> */}
                </div>

                {/* Video Container */}
                <div
                    className=" mx-auto px-10 relative z-30"
                >
                    <div className=" rounded-3xl ">
                        <div className=" aspect-video flex items-center justify-center z-30">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/9RSUQk1ITYI?si=dLPYosTUXIjICDN2"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full rounded-3xl z-30"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative z-1 px-4 sm:px-6 py-6 overflow-hidden -mt-96 hidden md:block ">
                <div className="container mx-auto relative z-20 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-12 min-h-[570px] border border-gray-50 border-opacity-30">
                    <div className="absolute inset-0">
                        {/* Hero1 on the left side */}
                        <img src="/video_left.png" alt="Background Element Left" className="absolute left-0 bottom-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" />
                        {/* Hero2 on the right side */}
                        <img src="/video_right.png" alt="Background Element Right" className="absolute right-0 bottom-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AttributionBooster;