'use client'
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const RecentProjects = ({ hideTabs = false }) => {
  const [activeTab, setActiveTab] = useState('See All');

  const tabs = ['See All', 'Design', 'Development', 'UI/UX Design', 'Marketing', 'SEO'];

  const projects = [
    {
      id: 1,
      title: 'Travel Website',
      category: 'Creative Design',
      image: '/project1.png',
      tags: ['Design', 'UI/UX Design']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'Development',
      image: '/project3.png',
      tags: ['Development', 'UI/UX Design']
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'Creative Design',
      image: '/project4.png',
      tags: ['Design', 'UI/UX Design']
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Marketing Strategy',
      image: '/project4.png',
      tags: ['Marketing', 'SEO']
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'Development',
      image: '/project5.png',
      tags: ['Development', 'SEO']
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'Creative Design',
      image: '/project6.png',
      tags: ['Design', 'Marketing']
    }
  ];

  let filteredProjects = [];
  if (hideTabs) {
    filteredProjects = projects.slice(0, 3);
  } else {
    filteredProjects =
      activeTab === 'See All'
        ? projects
        : projects.filter(project => project.tags.includes(activeTab));
  }

  // If no projects found for a tab, and user clicks 'See All', always show all projects
  // (This is already handled by the logic above, but if you want to show a message for empty tabs:)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative p-2 sm:p-4 md:p-6 lg:p-8 z-10 w-full py-10 sm:py-14 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-2 sm:p-4 md:p-8 lg:p-12">
        {/* Shine Border Effect for full section */}
        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
        {/* Section Header with shine-border */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-50 m-4 mb-0"></div>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Recent Projects
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl ">
              Discover our most successful projects showcasing every service we offer. Use the filter buttons above to select a specific service.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation (hide if hideTabs is true) */}
        {!hideTabs && (
          <motion.div
            className="inline-flex flex-wrap justify-start gap-0 mb-8 sm:mb-10 md:mb-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-1 relative w-full max-w-fit overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Shiny Border Effect for Entire Tab Container */}
            <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === tab
                  ? 'text-black font-semibold'
                  : 'text-white/70 hover:text-white'
                  } ${index > 0 ? 'border-l border-white/10' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab && (
                  <>
                    {/* Active Tab Background */}
                    <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg px-4 py-2 -m-3">
                      {tab}
                    </div>
                  </>
                )}

                {activeTab !== tab && (
                  <span className="relative z-10">{tab}</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
            ease: [0.19, 1, 0.22, 1],
            staggerChildren: 0.1
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-md border-[3px] border-white/10 rounded-[10px] overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs sm:max-w-none mx-auto hover:border-transparent min-h-[340px] sm:min-h-[360px] md:min-h-[380px]"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shine Border Effect - Only visible on hover */}
                <div className="shine-border absolute inset-0 rounded-[10px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Project Image */}
                <div
                  className="relative overflow-hidden aspect-[9/7] w-full p-1 sm:p-2 z-1"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 rounded-lg min-h-[120px] sm:min-h-[160px] md:min-h-[180px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg"></div>
                </div>

                {/* Project Info */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm">
                      {project.category}
                    </p>
                  </div>

                  {/* Icon - Always visible, opposite to title and category */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-white/70 py-12 text-lg">
              No projects found for this category.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;