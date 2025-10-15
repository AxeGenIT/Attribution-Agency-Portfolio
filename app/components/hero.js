import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {

    return (
        <div className='relative lg:min-h-[calc(100vh-70px)] lg:pt-60'
            style={{
                backgroundImage: `url('/hero_update_1.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
        >
            {/* Full Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#06101A]/95 via-[#06101A]/90 to-[#06101A]/85 z-10"></div> */}

            {/* Floating Blue Orbs */}
            <motion.div
                className="absolute top-20 left-20 w-16 h-16 opacity-80 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
            >
                <motion.img
                    src="/contact_icon.png"
                    alt="Blue Orb"
                    className="w-full h-full object-contain"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.div
                className="absolute top-32 right-32 w-12 h-12 opacity-80 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
            >
                <motion.img
                    src="/contact_icon.png"
                    alt="Blue Orb"
                    className="w-full h-full object-contain"
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -8, 0]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.div
                className="absolute bottom-40 left-16 w-20 h-20 opacity-80 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
            >
                <motion.img
                    src="/contact_icon.png"
                    alt="Blue Orb"
                    className="w-full h-full object-contain"
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 15, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.div
                className="absolute bottom-60 right-20 w-14 h-14 opacity-80 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.55, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
            >
                <motion.img
                    src="/contact_icon.png"
                    alt="Blue Orb"
                    className="w-full h-full object-contain"
                    animate={{
                        y: [0, 18, 0],
                        rotate: [0, -12, 0]
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Hero Section */}
            <section className="relative z-40 w-full lg:h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center relative">
                        {/* Floating Stats Cards - Hidden on mobile */}
                        <motion.div
                            className="hidden lg:block absolute left-0 top-40 xl:top-60 transform -rotate-12 z-30"
                            initial={{ opacity: 0, x: -50, rotate: -12 }}
                            animate={{ opacity: 1, x: 0, rotate: -12 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 xl:p-4 shadow-2xl">
                                <div className="flex items-center space-x-2 xl:space-x-3">
                                    <img src="/hero_1.png" alt="Hero 1" className="w-16 h-16 object-cover" />
                                    <div className='text-start'>
                                        <div className="text-xl xl:text-2xl font-bold text-white">200+</div>
                                        <div className="text-xs xl:text-sm text-white/70">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hidden lg:block absolute right-0 top-40 xl:top-60 transform rotate-12 z-30"
                            initial={{ opacity: 0, x: 50, rotate: 12 }}
                            animate={{ opacity: 1, x: 0, rotate: 12 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 xl:p-4 shadow-2xl">
                                <div className="flex items-center space-x-2 xl:space-x-3">
                                    <img src="/hero_2.png" alt="Hero 2" className="w-16 h-16 object-contain" />
                                    <div className='text-start'>
                                        <div className="text-xl xl:text-2xl font-bold text-white">1500+</div>
                                        <div className="text-xs xl:text-sm text-white/70">Projects Completed</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                                  <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-4">
            ✨ Digital Agency Solutions
          </div>
                        <motion.div
                            className="relative z-20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-6 mt-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Built to Scale<br />
                                <span className="glow-text text-[#00d9ff]" >
                                    Optimized for Growth
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Attribution Booster helps you scale smarter with full-stack web development, precision
                                analytics, performance-driven ads, and conversion-first design.
                            </motion.p>

                            <motion.button
                                href="#"
                                className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href="/services">Explore Our Services</Link>
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                    <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                </div>
                            </motion.button>
                        </motion.div>

                        {/* Central Hero Image */}
                        <motion.div
                            className="relative mt-8 sm:mt-16 lg:mt-8 flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <img
                                src="/hero_image.png"
                                alt="Hero Image"
                                className="w-full max-w-2xl sm:max-w-3xl lg:max-w-3xl xl:max-w-4xl h-auto object-contain z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;