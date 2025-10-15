"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ProcessSection = () => {
    const processSteps = [
        {
            id: 1,
            title: "Discovery & Alignment",
            description: "We begin with a deep dive strategy session to understand your business, goals, and pain points",
            icon: "/process/process.svg",
        },
        {
            id: 2,
            title: "Strategic Planning",
            description: "Our team outlines the roadmap, defines deliverables, allocates resources, and establishes",
            icon: "/process/process1.svg",
        },
        {
            id: 3,
            title: "Seamless Execution",
            description: "From design to development, tracking to campaign launch — we execute with precision, keeping you updated",
            icon: "/process/process2.svg",
        },
        {
            id: 4,
            title: "Continuous Optimization",
            description: "We monitor, analyze, and refine, ensuring performance improves over time and your digital presence",
            icon: "/process/process3.svg",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Decorative Image: hero1 left */}
            {/* <img
                src="/hero1.png"
                alt="Decorative Left"
                className="pointer-events-none select-none absolute left-0 top-0 h-40 md:h-64 opacity-30 z-0"
                aria-hidden="true"
            /> */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-0">
                        Our Collaboration <br /> Process
                    </h2>
                    <p className="text-base text-white/70 max-w-lg lg:text-left">
                        We prioritize open communication, transparency, and strategy from day one, ensuring every project starts with clarity and ends with measurable success.
                    </p>
                </motion.div>

                {/* Process Steps - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => {
                        return (
                            <motion.div
                                key={step.id}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Top Eclipse image above step number */}
                                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none">
                                    <img src="/top_eclipse.png" alt="Eclipse" className="w-full h-full object-contain" />
                                </div>
                                {/* Process Card with Glass Effect */}
                                <motion.div
                                    className="backdrop-blur-md bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 rounded-2xl p-6 h-[280px] transition-all duration-300 group relative overflow-visible shadow-xl mt-5"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    {/* Shine Border Effect */}
                                    <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

                                    {/* Step Number Inside Card with Glass Effect */}
                                    <p className="text-white text-lg font-semibold relative text-center mb-5">
                                        Step {step.id}
                                    </p>

                                    {/* Icon */}
                                    <div className="text-4xl mb-4 text-purple-400">
                                        <img src={step.icon} alt={`Step ${step.id} Icon`} width={40} height={40} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection
