"use client"
import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import servicesData from "../../json/service.json"

// Lazy load ServiceCard component
const ServiceCard = lazy(() => import("./service_card"))

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative image on right side */}
      <img
        src="/product_element.png"
        alt="Decorative"
        className="hidden lg:block absolute right-0 lg:top-10  sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-auto h-auto pointer-events-none select-none z-0"
        style={{ filter: 'blur(2px)', opacity: 0.7 }}
      />


      <div className="container mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">
            {"Our Dedicated "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Services
            </span>
            {/* <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              potential with us
            </span> */}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 45
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0
          }}
          transition={{
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1], // Custom easing for smooth animation
            staggerChildren: 0.1
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.services.map((service, index) => (
            <Suspense
              key={service.id}
              fallback={
                <div className="group relative cursor-pointer md:h-[280px] h-full lg:h-[280px] overflow-hidden rounded-xl flex items-center bg-white/5 backdrop-blur-sm border border-white/20 animate-pulse">
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
  )
}

export default ServicesSection
