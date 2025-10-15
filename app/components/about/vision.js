import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Vision
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become a global leader in digital transformation, known for our innovation, 
              integrity, and impact. We aim to create value for our clients through technology 
              solutions that drive meaningful change and sustainable success.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/vission.png"
                alt="Vision concept with digital elements"
                className="h-80 object-contain w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;