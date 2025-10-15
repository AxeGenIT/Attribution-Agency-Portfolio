'use client';
import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto ">
        {/* Video Container */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-cyan-500/10 rounded-full blur-xl sm:blur-2xl"></div>
          <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-blue-500/10 rounded-full blur-lg sm:blur-xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center relative z-10">
            {/* Video Thumbnail */}
            <motion.div
              className="relative group cursor-pointer order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Attribution Booster team"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute inset-0 bg-slate-900/40 rounded-xl sm:rounded-2xl group-hover:bg-slate-900/60 transition-all duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                </motion.div>
              </div>

              {/* Video Duration */}
              <motion.div
                className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-white text-xs sm:text-sm font-medium">2:30</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-2 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Attribution Booster
                </span><br />
                In 1 Minute
              </h2>

              <p className="text-white/70 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed">
                Discover how Attribution Booster transforms businesses through innovative digital solutions. Watch our team in action and learn about our proven methodologies that drive real results.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;