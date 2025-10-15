'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom hook for counter animation
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const startValue = start;
      const endValue = end;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, start, hasStarted]);

  return [count, ref];
};

const ResultsSection = () => {
  // Counter hooks for animated numbers
  const [projectCount, projectRef] = useCounter(1500, 2500);
  const [experienceCount, experienceRef] = useCounter(25, 2000);
  const [awardCount, awardRef] = useCounter(24, 1800);

  const skills = [
    'UX/UI', 'Design', 'Branding', 'Analytics', 'React', 'Flutter',
    'SEO', 'Development', 'Advertising', 'SEO', 'Automation', 'Strategy'
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Hero images positioned absolutely outside container */}
      {/* <img
        src="/hero1.png"
        alt="Hero Left"
        className="absolute left-0 top-0 object-cover opacity-20 md:opacity-30 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto z-10"
        style={{ pointerEvents: 'none' }}
      />
      <img
        src="/hero2.png"
        alt="Hero Right"
        className="absolute right-0 top-0 object-cover opacity-20 md:opacity-30 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto z-10"
        style={{ pointerEvents: 'none' }}
      /> */}

      {/* Main content container - responsive margins to avoid image overlap */}
      <div className="relative z-20 mx-auto container px-4">
        {/* Header Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
              Real Results. Global<br />
              Reach. Proven Trust
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Attribution Booster delivers measurable growth through full-stack
              development, performance marketing, and analytics-driven strategies.
              With a global footprint and a client-first mindset
            </p>
          </div>
        </motion.div>

        {/* Stats Grid - Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Projects Complete Card */}
          <motion.div
            className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 h-48 sm:h-56 md:h-64 lg:h-72"
            style={{
              backgroundImage: `url('/r3.png')`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            {/* Shine Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="self-start">
                <div ref={projectRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                  {projectCount.toLocaleString()}+
                </div>
                <div className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl">Project Complete</div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 h-48 sm:h-56 md:h-64 lg:h-72"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Shine Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

            <div className="flex flex-col h-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1">
                <div className="mb-4 sm:mb-0">
                  <div ref={experienceRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                    {experienceCount}+
                  </div>
                  <div className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl">Years Of Experience</div>
                </div>
                <div className="flex-shrink-0 sm:ml-4">
                  <img
                    src="/r4.png"
                    alt="Blue orb"
                    className="w-16 sm:w-20 md:w-24 lg:w-40 xl:w-48 h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mt-auto">
                Our deep industry knowledge drives innovative and reliable
                solutions. Trust our proven track record to deliver results that
                exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - Skills and Awards */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 lg:items-stretch">
          {/* Skills Cloud Card - 1/3 width on desktop, full width on mobile */}
          <motion.div
            className="w-full lg:basis-1/3 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <img
              src="/r1.png"
              alt="Skills Cloud"
              className="w-full h-auto object-contain sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            />
          </motion.div>

          {/* Awards Card - 2/3 width on desktop, full width on mobile */}
          <motion.div
            className="w-full lg:basis-2/3 backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
            style={{
              backgroundImage: `url('/r2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl"></div>

            {/* Shine Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between h-full">
              <div className="mb-4 sm:mb-0">
                <div ref={awardRef} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {awardCount}+
                </div>
                <div className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg">Award Winning</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;