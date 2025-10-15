'use client';
import React from 'react';
import { motion } from 'framer-motion';
const ExpertiseSection = () => {
    const expertiseAreas = [
        {
            id: 1,
            title: 'Full-Stack Innovators',
            description: 'Building scalable solutions with modern technologies and best practices for optimal performance.',
            icon: '/expert1.png'
        },
        {
            id: 2,
            title: 'Performance Marketing & Data Experts',
            description: 'Creating data-driven campaigns and analytics that drive measurable business growth.',
            icon: '/expert2.png'
        },
        {
            id: 3,
            title: 'Strategic Creatives',
            description: 'Designing compelling visuals and user experiences that convert visitors into customers.',
            icon: '/expert3.png'
        },
        {
            id: 4,
            title: 'Results-Driven Project Managers',
            description: 'Ensuring projects are delivered on time, within budget, and exceed expectations.',
            icon: '/expert4.png'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
            <section className="relative z-10 w-full overflow-hidden">
                {/* Fixed contact_icon orb in the middle */}
                <img
                    src="/contact_icon.png"
                    alt="Orb"
                    className="absolute left-1/2 -bottom-8 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 z-20 opacity-80 pointer-events-none"
                />

                <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-30">
                    {/* Section Header */}
                    <motion.div
                        className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8 sm:mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Meet the Minds Behind<br />
                            Your Digital Growth
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-lg text-start">
                            At Attribution Booster, we believe in your competitive edge. Each member brings
                            their expertise to ensure every build is not just functional but transformative
                            for your business growth.
                        </p>
                    </motion.div>

                    {/* Expertise Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                        variants={containerVariants}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {expertiseAreas.map((area) => (
                            <motion.div
                                key={area.id}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 min-h-[12rem] flex flex-col justify-center"
                                variants={itemVariants}
                            >
                                {/* Shine Border Effect - Always visible */}
                                <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

                                {/* Image and Title on same line */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-4 relative z-10 w-full">
                                    <motion.div
                                        className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <img
                                            src={area.icon}
                                            alt={area.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                    <div className="flex-1 text-center sm:text-left">
                                        {/* Description below */}
                                        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl py-2 sm:py-3 group-hover:text-cyan-400 transition-colors">
                                            {area.title}
                                        </h3>
                                        <p className="text-white/70 text-sm sm:text-base md:text-lg group-hover:text-white/90 transition-colors">
                                            {area.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>

    );
};

export default ExpertiseSection;