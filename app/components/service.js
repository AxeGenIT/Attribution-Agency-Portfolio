"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import servicesData from "../../json/service.json";

// Lazy load ServiceCard
const ServiceCard = lazy(() => import("./service_card"));

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative image on right side */}
      <img
        src="/product_element.png"
        alt="Decorative"
        className="hidden lg:block absolute right-0 top-10 w-40 xl:w-48 2xl:w-auto h-auto pointer-events-none select-none z-0"
        style={{ filter: "blur(2px)", opacity: 0.7 }}
      />

      <div className="container mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          className="mb-10 sm:mb-14 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Dedicated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Services
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1],
            staggerChildren: 0.1,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.services.map((service) => (
            <Suspense
              key={service.id}
              fallback={
                <div className="group relative cursor-pointer h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-xl flex items-center bg-white/5 backdrop-blur-sm border border-white/20 animate-pulse">
                  <div className="relative h-full w-full p-6">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4 mx-auto"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
              }
            >
              <ServiceCard
                title={service.title}
                description={service.details}
                iconImage={service.icon}
                _id={service.slug}
              />
            </Suspense>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
