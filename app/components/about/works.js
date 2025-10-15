import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Settings, Headphones } from 'lucide-react';

const steps = [
  {
    number: 'Step 1',
    title: 'Understand & Align',
    description:
      'We begin by deeply understanding your business goals, challenges, and requirements. Our team works closely with you to align our strategy with your vision.',
    icon: "/process/file.svg",
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: 'Step 2',
    title: 'Strategize & Plan',
    description:
      'Based on our analysis, we develop a comprehensive strategy and detailed project plan that outlines timelines, milestones, and deliverables.',
    icon: "/process/plan.svg",
    color: 'from-teal-500 to-teal-600',
  },
  {
    number: 'Step 3',
    title: 'Build, Launch & Optimize',
    description:
      'We execute the plan with precision, building robust solutions, launching them successfully, and continuously optimizing for peak performance.',
    icon: "/process/branch.svg",
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: 'Step 4',
    title: 'Deliver & Support',
    description:
      'We ensure smooth delivery and provide ongoing support, maintenance, and updates to keep your solutions running at their best.',
    icon: "/process/setting.svg",
    color: 'from-orange-500 to-orange-600',
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Images: hero1 left, hero2 right - outside container */}

      <div className="container mx-auto relative z-20 bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-12">
        <img
          src="/hero1.png"
          alt="Decorative Left"
          className="pointer-events-none select-none absolute left-0 top-0 h-40 md:h-64 opacity-50 z-0"
          aria-hidden="true"
        />
        <img
          src="/hero2.png"
          alt="Decorative Right"
          className="pointer-events-none select-none absolute right-0 top-0 h-40 md:h-64 opacity-50 z-0"
          aria-hidden="true"
        />
        {/* Shine Border Effect for whole section */}
        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Every project we undertake follows a structured approach, from
            initial consultation to final delivery and beyond.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Top Eclipse image above step number */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none">
                  <img src="/top_eclipse.png" alt="Eclipse" className="w-full h-full object-contain" />
                </div>
                {/* Process Card with Glass Effect */}
                <motion.div
                  className="backdrop-blur-md bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 rounded-2xl p-6 h-full transition-all duration-300 group relative overflow-visible shadow-xl mt-5"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  {/* Shine Border Effect */}
                  <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

                  {/* Step Number Inside Card with Glass Effect */}
                  <p className="text-white text-lg font-semibold relative text-center mb-5">
                    Step {index + 1}
                  </p>

                  {/* Icon */}
                  <div className="text-4xl mb-4 text-purple-400">
                    <img src={step.icon} alt={`Step ${step.id} Icon`} width={40} height={40} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;