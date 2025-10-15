'use client'
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const PromoBanner = ({ headline, description, buttonText, image }) => {
  return (
    <section className="relative z-10 w-full py-6 sm:py-8 md:py-12 lg:py-16 flex justify-center items-center bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] overflow-hidden container mx-auto">
      {/* Decorative Images: hero1 left, hero2 right, icon bottom right */}

      <img
        src="/contact.png"
        alt="Decorative Icon"
        className="pointer-events-none select-none absolute right-1 bottom-0 sm:right-4 sm:bottom-2 md:right-0 md:bottom-4 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-36 w-auto opacity-60 sm:opacity-70 z-0"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 lg:p-12 z-10">
        <img
          src="/hero1.png"
          alt="Decorative Left"
          className="pointer-events-none select-none absolute left-0 top-0 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto opacity-40 sm:opacity-50 z-0"
          aria-hidden="true"
          style={{borderTopLeftRadius:'30px'}}
        />
        <img
          src="/hero2.png"
          alt="Decorative Right"
          className="pointer-events-none select-none absolute right-0 top-0 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto opacity-40 sm:opacity-50 z-0"
          aria-hidden="true"
          style={{borderTopRightRadius:'30px'}}
        />
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 w-full text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            {headline}
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
            {description}
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1">{buttonText}</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
              <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
            </div>
          </motion.a>
        </motion.div>
        {/* Right: 3D Image */}
        <motion.div
          className="flex-1 w-full hidden md:flex justify-center items-center mt-6 sm:mt-8 md:mt-0 md:ml-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Promo 3D Visual"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};


export default PromoBanner; 