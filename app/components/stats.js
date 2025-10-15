'use client'
import React from 'react';
import { motion } from 'framer-motion';

const defaultStats = [
  {
    image: '/project1.png',
    stat: '1,500+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across web development, digital marketing, and analytics solutions.',
  },
  {
    image: '/promo_banner.png',
    stat: '25+',
    label: 'Years Of Experience',
    description: 'Our deep industry knowledge drives innovative and reliable solutions, from concept to result. We exist to deliver results that exceed expectations.',
  },
  {
    image: '/expert1.png',
    stat: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently high satisfaction rates from our global client base, reflecting our commitment to excellence and results-driven approach.',
  },
  {
    image: '/project2.png',
    stat: '24+',
    label: 'Awards Won',
    description: 'Recognition for innovation, design excellence, and outstanding performance in digital solutions and marketing campaigns.',
  },
];

const StatsShowcase = ({
  headline = 'Real Results. Global Reach. Proven Trust',
  description = 'Attribution Booster delivers measurable growth through full-stack development, performance marketing, and analytics solutions, with a global footprint and a client-first mindset.',
  stats = defaultStats,
}) => {
  return (
    <section className="relative z-10 w-full py-16 lg:py-24 flex justify-center items-center bg-transparent">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Headline and Description */}
        <motion.div
          className="flex-1 flex flex-col justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            {headline}
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-md">
            {description}
          </p>
        </motion.div>
        {/* Right: 2x2 Grid of Stat Cards */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className="backdrop-blur-md bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 rounded-2xl p-6 flex flex-col justify-between min-h-[200px] relative overflow-visible shadow-xl group transition-all duration-300"
              variants={{
                hidden: { y: 30 },
                visible: { y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              {/* Shine Border Effect */}
              <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

              {/* Image/Icon */}
              {item.image && (
                <img
                  src={item.image}
                  alt="Stat Visual"
                  className="w-16 h-16 object-contain mb-4 rounded-xl mx-auto relative z-10"
                />
              )}
              {/* Stat */}
              {item.stat && (
                <div className="text-3xl font-bold text-white mb-2 text-center relative z-10">{item.stat}</div>
              )}
              {/* Label */}
              {item.label && (
                <div className="text-white/80 text-base font-medium mb-2 text-center relative z-10">{item.label}</div>
              )}
              {/* Description */}
              {item.description && (
                <div className="text-white/60 text-sm text-center relative z-10">{item.description}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsShowcase;