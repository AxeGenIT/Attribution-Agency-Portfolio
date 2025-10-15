'use client'
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Array with type info for each logo
const partnerLogos = [
  { src: './brands/cookie_partner.png', type: 'partner' },
  { src: './brands/stape_partner.png', type: 'partner' },
  { src: './brands/certified_partner.png', type: 'partner' },
  { src: './brands/meta_partner.png', type: 'partner' },
  { src: './brands/shopify_partner.png', type: 'partner' },
  { src: './brands/wix_partner.png', type: 'partner' },
  { src: './brands/level_partner.png', type: 'partner' },
  { src: './brands/dma_client.webp', type: 'client' },
  { src: './brands/seranova_client.png', type: 'client' },
  { src: './brands/cardo_client.png', type: 'client' },
  { src: './brands/avinell.png', type: 'client' },
];

const TrustedPartners = ({
  heading = "Our Trusted Clients and Partners",
  description = "Proud to work with brands and partners who share our vision for measurable, performance-driven growth.",
  logos = partnerLogos // Use the updated array as default
}) => {
  const [activeIndexSmall, setActiveIndexSmall] = useState(0);
  const [activeIndexLarge, setActiveIndexLarge] = useState(0);
  const swiperRefSmall = useRef(null);
  const swiperRefLarge = useRef(null);
  const logosPerSlide = 8; // First slide: 8 images (4x2 grid)
  const logosPerRow = 4;
  const smallLogosPerSlide = 4; // 2 per row × 2 rows on small devices
  const smallLogosPerRow = 2;
  
  // Split into slides: 4 partners in first row, 4 clients in second row per slide
  const partners = logos.filter(l => l.type === 'partner');
  const clients = logos.filter(l => l.type === 'client');
  const slides = [];
  let pIdx = 0, cIdx = 0;
  while (pIdx < partners.length || cIdx < clients.length) {
    const row1 = partners.slice(pIdx, pIdx + 4);
    const row2 = clients.slice(cIdx, cIdx + 4);
    slides.push({ row1, row2 });
    pIdx += 4;
    cIdx += 4;
  }
  
  const smallSlides = Array.from({ length: Math.ceil(logos.length / smallLogosPerSlide) }, (_, i) =>
    logos.slice(i * smallLogosPerSlide, (i + 1) * smallLogosPerSlide)
  );

  return (
    <section className="relative z-10 w-full py-16 lg:py-24 bg-transparent flex flex-col items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">{description}</p>
        </motion.div>
        {/* Small screens: 2x2 grid */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1}
            onSlideChange={swiper => setActiveIndexSmall(swiper.activeIndex)}
            onSwiper={swiper => (swiperRefSmall.current = swiper)}
            className="mb-8"
          >
            {smallSlides.map((group, slideIdx) => (
              <SwiperSlide key={`small-${slideIdx}`}>
                <motion.div
                  className="grid grid-cols-2 gap-4 justify-center items-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {Array.from({ length: 2 }).map((_, rowIdx) => (
                    group.slice(rowIdx * smallLogosPerRow, (rowIdx + 1) * smallLogosPerRow).map((logo, idx) => (
                      <motion.div
                        key={`small-${rowIdx * smallLogosPerRow + idx}`}
                        className="group relative cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                      // whileHover={{ scale: 1.05 }}
                      >
                        {/* Shine Border Effect */}
                        <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

                        {/* Card Content */}
                        <div className="relative h-20 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-4 w-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                          <img
                            src={logo}
                            alt={`Partner Logo`}
                            className="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              console.warn(`Failed to load image: ${logo}`);
                              // Optional: set a fallback image
                              // e.target.src = '/fallback-logo.png';
                            }}
                          />

                          {/* Hover glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    ))
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Medium and larger screens: 4x2 grid */}
        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            onSlideChange={swiper => setActiveIndexLarge(swiper.activeIndex)}
            onSwiper={swiper => (swiperRefLarge.current = swiper)}
            className="mb-8"
          >
            {slides.map((slide, slideIdx) => (
              <SwiperSlide key={`large-${slideIdx}`}>
                <motion.div
                  className="grid grid-rows-2 grid-cols-4 gap-4 md:gap-6 justify-center items-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* First row: partners */}
                  {Array.from({ length: 4 }).map((_, idx) => (
                    slide.row1[idx] ? (
                      <motion.div
                        key={`slide-${slideIdx}-partner-${idx}`}
                        className="group relative cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                      >
                        <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
                        <div className="relative h-20 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-4 w-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                          <img
                            src={slide.row1[idx].src}
                            alt={`Partner Logo - ${slide.row1[idx].src.split('/').pop().split('.')[0]}`}
                            className="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              console.warn(`Failed to load image: ${slide.row1[idx].src}`);
                            }}
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    ) : (
                      <div key={`slide-${slideIdx}-partner-empty-${idx}`}></div>
                    )
                  ))}
                  {/* Second row: clients */}
                  {Array.from({ length: 4 }).map((_, idx) => (
                    slide.row2[idx] ? (
                      <motion.div
                        key={`slide-${slideIdx}-client-${idx}`}
                        className="group relative cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                      >
                        <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
                        <div className="relative h-20 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center p-4 w-full hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                          <img
                            src={slide.row2[idx].src}
                            alt={`Client Logo - ${slide.row2[idx].src.split('/').pop().split('.')[0]}`}
                            className="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              console.warn(`Failed to load image: ${slide.row2[idx].src}`);
                            }}
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>
                    ) : (
                      <div key={`slide-${slideIdx}-client-empty-${idx}`}></div>
                    )
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center space-x-2">
          {/* Small screen dots */}
          <div className="block md:hidden">
            {smallSlides.map((_, dotIdx) => (
              <button
                key={`small-dot-${dotIdx}`}
                className={`w-3 h-3 rounded-full ${dotIdx === activeIndexSmall ? 'bg-cyan-400' : 'bg-white/20'} inline-block focus:outline-none`}
                onClick={() => {
                  setActiveIndexSmall(dotIdx);
                  swiperRefSmall.current?.slideTo(dotIdx);
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
              ></button>
            ))}
          </div>
          {/* Large screen dots */}
          <div className="hidden md:block space-x-2">
            {slides.map((_, dotIdx) => (
              <button
                key={`large-dot-${dotIdx}`}
                className={`w-3 h-3 rounded-full ${dotIdx === activeIndexLarge ? 'bg-cyan-400' : 'bg-white/20'} inline-block focus:outline-none`}
                onClick={() => {
                  setActiveIndexLarge(dotIdx);
                  swiperRefLarge.current?.slideTo(dotIdx);
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;