'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ChallengesSection = () => {
  const challenges = [
    {
      title: "Let's Create Something Amazing Together",
      description: "We're here to help you bring your vision to life. Whether you need a stunning website, powerful branding, or digital marketing that drives results, our team is ready to make it happen."
    },
    {
      title: "Unlock Your Business Potential with Our Expertise",
      description: "Transform your business with our comprehensive digital solutions. From web development to marketing strategies, we provide the tools and expertise you need to succeed in today's competitive market."
    },
    {
      title: "Experience Professional Service & Innovation",
      description: "Get access to cutting-edge technology and professional service that sets your business apart. Our innovative approach ensures your brand stands out and achieves lasting success."
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Image: hero1 right */}
      {/* <img
        src="/hero2.png"
        alt="Decorative Right"
        className="pointer-events-none select-none absolute right-0 top-40 h-40 md:h-64 opacity-50 z-0"
        aria-hidden="true"
      /> */}
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Yes, we know your challenges<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              as a Digital agency
            </span>
          </h2>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          className="grid grid-cols-1 my-6 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="group my-12 backdrop-blur-md bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 text-center relative overflow-visible shadow-xl"
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              {/* Shine Border Effect */}
              <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

              {/* Icon with decorative eclipse image */}
              <div className="relative flex items-center justify-center mb-4 sm:mb-6">
                {/* Decorative eclipse image */}
                <img
                  src="/digital.png"
                  alt="Eclipse Decorative"
                  className="absolute -top-14 w-52 opacity-100 z-0"
                  aria-hidden="true"
                />
                {/* Icon foreground */}
                {/* <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div> */}
                <img src="/right.png" className='object-contain w-16 h-16 relative z-10' />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight relative z-10">
                {challenge.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300 relative z-10">
                {challenge.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;