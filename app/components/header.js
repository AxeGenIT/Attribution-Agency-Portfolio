'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import servicesData from '../../json/service.json';

function App({ isMenuOpen, setIsMenuOpen }) {
  const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesDropdownRef = useRef(null);

  // Use props if provided, otherwise use internal state
  const menuOpen = isMenuOpen !== undefined ? isMenuOpen : internalIsMenuOpen;
  const setMenuOpen = setIsMenuOpen !== undefined ? setIsMenuOpen : setInternalIsMenuOpen;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Team', href: '/team' },
    { label: 'Blogs', href: 'https://mohiuddinsumon.com/wp/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers', href: '/career' }
  ];

  // Get main services (top-level services without parent)
  const mainServices = servicesData.services.filter(service => !service.parent);

  // Close dropdown when clicking outside or moving mouse away
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    const handleMouseMove = (event) => {
      if (isServicesOpen && servicesDropdownRef.current) {
        const rect = servicesDropdownRef.current.getBoundingClientRect();
        const dropdownArea = document.querySelector('[data-dropdown-content]');

        if (dropdownArea) {
          const dropdownRect = dropdownArea.getBoundingClientRect();
          const buffer = 50; // 50px buffer zone

          const isInTriggerArea = (
            event.clientX >= rect.left - buffer &&
            event.clientX <= rect.right + buffer &&
            event.clientY >= rect.top - buffer &&
            event.clientY <= rect.bottom + buffer
          );

          const isInDropdownArea = (
            event.clientX >= dropdownRect.left &&
            event.clientX <= dropdownRect.right &&
            event.clientY >= dropdownRect.top &&
            event.clientY <= dropdownRect.bottom
          );

          if (!isInTriggerArea && !isInDropdownArea) {
            setIsServicesOpen(false);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isServicesOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className={`${pathname !== '/' ? '' : ''} z-50 relative min-h-[80px]`}>
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

      >
        <motion.nav
          className="relative rounded-xl py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 max-w-screen-2xl mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between relative z-10 px-5">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className='cursor-pointer'>
                <img src="/logo.png" alt="Logo" className="object-contain" />
              </Link>
            </motion.div>
            <motion.div
              className="hidden lg:flex items-center space-x-6 xl:space-x-8 relative z-40"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((nav, index) => (
                <motion.div
                  key={nav.label}
                  variants={itemVariants}
                  className="relative"
                  ref={nav.hasDropdown ? servicesDropdownRef : null}
                >
                  {nav.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="relative z-50"
                      ref={servicesDropdownRef}
                    >
                      <motion.button
                        className="text-white/80 hover:text-[#22d3ee] transition-colors text-sm xl:text-base flex items-center space-x-1"
                        whileHover={{ scale: 1.1, color: '#22d3ee' }}
                        tabIndex={0}
                      >
                        <span>{nav.label}</span>
                        <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <>
                            <motion.div
                              initial={{ opacity: 0, y: -20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -20, scale: 0.95 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="absolute container left-0  right-0 top-full mt-2 bg-slate-900 shadow-2xl z-50"
                              style={{
                                width: '1220px',
                                marginLeft: 'calc(-41vw + 50%)'
                              }}
                              data-dropdown-content
                              onMouseEnter={() => setIsServicesOpen(true)}
                              onMouseLeave={() => setIsServicesOpen(false)}
                            >
                              <div className="px-4 sm:px-6 lg:px-8 py-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-7xl mx-auto h-full">
                                  {mainServices.map((service, serviceIndex) => (
                                    <motion.div
                                      key={service.id}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                                    >
                                      <Link
                                        href={`/services/${service.slug}`}
                                        className="block p-5 rounded-xl bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-[#22d3ee]/30 backdrop-blur-sm hover:bg-slate-700 h-full"
                                        onClick={() => setIsServicesOpen(false)}
                                      >
                                        <div className="flex">
                                          <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#22d3ee]/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#22d3ee]/30 group-hover:to-blue-500/30 transition-all duration-300">
                                            <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                                          </div>
                                          <div className="ml-4">
                                            <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-[#22d3ee] transition-colors">
                                              {service.title}
                                            </h4>
                                            <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
                                              {service.details}
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                                {/* Footer CTA */}
                                <div className="text-center pt-6 border-t border-white/10">
                                  <Link
                                    href="/services"
                                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#22d3ee] to-blue-500 text-white font-semibold rounded-full hover:from-[#22d3ee]/90 hover:to-blue-500/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    View All Services
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={nav.href} className="text-white/80 hover:text-[#22d3ee] transition-colors text-sm xl:text-base relative z-50">
                      {nav.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <motion.button className="hidden lg:block bg-[#07F4Fa] text-black px-5 py-2 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base">
              <Link href="/contact">Get Started</Link>
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-8 h-8 text-white hover:text-cyan-400 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </motion.nav>
      </motion.div>

      {/* Global Full-Screen Drawer - Outside header to cover entire viewport */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[999999] flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Header area with close button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="object-contain h-10" />
              </div>
              <motion.button
                onClick={toggleMenu}
                className="flex items-center justify-center w-12 h-12 text-white hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-7 h-7" />
              </motion.button>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col space-y-3 p-6 text-white min-h-full">
                {navLinks.map((nav, index) => (
                  <motion.div
                    key={nav.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {nav.hasDropdown ? (
                      <div>
                        <button
                          className="text-white hover:text-cyan-400 transition-colors py-5 px-6 w-full text-left flex items-center justify-between text-xl font-medium rounded-xl hover:bg-white/5"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        >
                          <span>{nav.label}</span>
                          <motion.div
                            animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 pt-4 space-y-2">
                                {mainServices.map((service, serviceIndex) => (
                                  <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: serviceIndex * 0.06 }}
                                  >
                                    <Link
                                      href={`/services/${service.slug}`}
                                      className="block py-4 px-5 text-white/80 hover:text-cyan-400 transition-colors rounded-xl hover:bg-white/5"
                                      onClick={() => {
                                        setMenuOpen(false);
                                        setIsMobileServicesOpen(false);
                                      }}
                                    >
                                      <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-cyan-400/20 rounded-xl flex items-center justify-center">
                                          <img src={service.icon} alt={service.title} className="w-6 h-6" />
                                        </div>
                                        <span className="font-medium text-lg">{service.title}</span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                                <motion.div
                                  initial={{ opacity: 0, x: -15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: mainServices.slice(0, 6).length * 0.06 }}
                                  className="pt-3"
                                >
                                  <Link
                                    href="/services"
                                    className="block py-4 px-5 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400/10 transition-colors"
                                    onClick={() => {
                                      setMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }}
                                  >
                                    View All Services →
                                  </Link>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={nav.href}
                        className="text-white hover:text-cyan-400 transition-colors py-5 px-6 block text-xl font-medium rounded-xl hover:bg-white/5"
                        onClick={() => setMenuOpen(false)}
                      >
                        {nav.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer area with CTA button */}
            <div className="p-6 border-t border-white/10">
              <motion.button
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-5 rounded-xl font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="block w-full text-center">
                  Get Started
                </Link>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default App;