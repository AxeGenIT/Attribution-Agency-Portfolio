import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/mission.png"
                alt="Team collaboration"
                className="h-80 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Mission
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To empower businesses with tech-driven strategies, cutting-edge technology and 
              performance-focused solutions. We help companies transform their operations, 
              optimize processes, and achieve sustainable growth in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;