'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// ✅ Make sure all images exist in /public/brands/
const partnerLogos = [
  { src: '/brands/cookie_partner.png', type: 'partner' },
  { src: '/brands/stape_partner.png', type: 'partner' },
  { src: '/brands/certified_partner.png', type: 'partner' },
  { src: '/brands/meta_partner.png', type: 'partner' },
  { src: '/brands/shopify_partner.png', type: 'partner' },
  { src: '/brands/wix_partner.png', type: 'partner' },
  { src: '/brands/level_partner.png', type: 'partner' },
  { src: '/brands/dma_client.webp', type: 'client' },
  { src: '/brands/seranova_client.png', type: 'client' },
  { src: '/brands/cardo_client.png', type: 'client' },
  { src: '/brands/avinell.png', type: 'client' },
];

const TrustedPartners = ({
  heading = 'Our Trusted Clients and Partners',
  description = 'Proud to work with brands and partners who share our vision for measurable, performance-driven growth.',
  logos = partnerLogos,
}) => {
  const [activeIndexSmall, setActiveIndexSmall] = useState(0);
  const [activeIndexLarge, setActiveIndexLarge] = useState(0);
  const swiperRefSmall = useRef(null);
  const swiperRefLarge = useRef(null);

  const partners = logos.filter((l) => l.type === 'partner');
  const clients = logos.filter((l) => l.type === 'client');

  const slides = [];
  for (let i = 0; i < Math.max(partners.length, clients.length); i += 4) {
    slides.push({
      row1: partners.slice(i, i + 4),
      row2: clients.slice(i, i + 4),
    });
  }

  const smallSlides = Array.from(
    { length: Math.ceil(logos.length / 4) },
    (_, i) => logos.slice(i * 4, (i + 1) * 4)
  );

  const handleImgError = (e) => {
    e.target.src = '/fallback.png'; // 👈 Optional: add a fallback in /public
  };

  return (
    <section className="relative z-10 w-full py-14 md:py-20 bg-transparent flex flex-col items-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Small Screens */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndexSmall(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRefSmall.current = swiper)}
            className="mb-6"
          >
            {smallSlides.map((group, slideIdx) => (
              <SwiperSlide key={`small-${slideIdx}`}>
                <motion.div
                  className="grid grid-cols-2 gap-4 justify-center items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  {group.map((logo, idx) => (
                    <motion.div
                      key={`small-logo-${idx}`}
                      className="group relative cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <div className="relative h-20 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-4 w-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <img
                          src={logo.src}
                          alt={`Logo - ${logo.src.split('/').pop()?.split('.')[0]}`}
                          className="h-10 w-auto max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={handleImgError}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots (Small Screen) */}
          <div className="flex justify-center space-x-2">
            {smallSlides.map((_, dotIdx) => (
              <button
                key={`small-dot-${dotIdx}`}
                className={`w-3 h-3 rounded-full ${
                  dotIdx === activeIndexSmall
                    ? 'bg-cyan-400'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => {
                  setActiveIndexSmall(dotIdx);
                  swiperRefSmall.current?.slideTo(dotIdx);
                }}
              />
            ))}
          </div>
        </div>

        {/* Medium and Large Screens */}
        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndexLarge(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRefLarge.current = swiper)}
            className="mb-6"
          >
            {slides.map((slide, slideIdx) => (
              <SwiperSlide key={`large-${slideIdx}`}>
                <motion.div
                  className="grid grid-rows-2 grid-cols-4 gap-6 justify-center items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  {[...slide.row1, ...slide.row2].map((logo, idx) => (
                    <motion.div
                      key={`large-logo-${slideIdx}-${idx}`}
                      className="group relative cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <div className="relative h-24 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-6 w-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <img
                          src={logo.src}
                          alt={`Logo - ${logo.src.split('/').pop()?.split('.')[0]}`}
                          className="h-12 w-auto max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={handleImgError}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots (Large Screen) */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, dotIdx) => (
              <button
                key={`large-dot-${dotIdx}`}
                className={`w-3 h-3 rounded-full ${
                  dotIdx === activeIndexLarge
                    ? 'bg-cyan-400'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => {
                  setActiveIndexLarge(dotIdx);
                  swiperRefLarge.current?.slideTo(dotIdx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
