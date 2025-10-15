"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, Instagram, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import servicesData from "../../json/service.json"

const Footer = () => {
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

  // Pinterest icon as SVG component
  const PinterestIcon = () => (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.373 18.627.001 12.001.001z" />
    </svg>
  );

  // Split services into two columns for layout
  const midIndex = Math.ceil(servicesData.services.length / 2);
  const leftServices = servicesData.services.slice(0, midIndex);
  const rightServices = servicesData.services.slice(midIndex);

  return (
    <footer className="relative z-10 px-6 py-16 text-white bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Company Info - Left Column */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={itemVariants}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/logo.png"
                alt="Attribution Booster Logo"
                className="h-12 w-auto"
              />
            </motion.div>

            <motion.p
              className="text-gray-300 text-sm leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Welcome to our Best Digital Analytics Agency, where innovation meets results! Our team specializes in crafting bespoke advertising strategies tailored
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { image: "/c1.png", text: "+8801812526073", color: "text-blue-400", href: "tel:+8801812526073" },
                { image: "/c2.png", text: "info@attributionbooster.com", color: "text-blue-400", href: "mailto:info@attributionbooster.com" },
                { image: "/c3.png", text: "Address: Raleigh 227 Fayetteville", color: "text-blue-400" }
              ].map((contact, index) => {
                // const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {/* <IconComponent className={`w-4 h-4 ${contact.color}`} /> */}
                    <img src={contact.image} alt="icon" />
                    {
                      contact.href ? (
                        <a href={contact.href} className={`text-sm hover:underline transition-colors duration-300`}>{contact.text}</a>
                      ) : (
                        <span className={`text-sm `}>{contact.text}</span>
                      )
                    }
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {leftServices.map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={`/services/${service.slug}`}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Second Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-transparent font-semibold text-lg mb-6">.</h3>
            <ul className="space-y-3">
              {rightServices.map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={`/services/${service.slug}`}
                    className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: 'Blogs', href: 'https://mohiuddinsumon.com/wp/blog' },
                { label: "Career", href: "/career" },
                { label: "Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={item.href} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-300">
                      {item.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>


        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 items-center'>
          {/* Social Media */}
          <div>
            <p className="text-white font-medium mb-3">Social media:</p>
            <div className="flex space-x-3">
              {[
                { icon: "/icons/link.png", link: "https://www.linkedin.com/company/attribution-booster/about/", alt: "LinkedIn" },
                { icon: "/icons/fb.png", link: "https://www.facebook.com/attributioinbooster", alt: "Facebook" },
                { icon: "/icons/youtube.png", link: "https://www.youtube.com/@attributionbooster", alt: "YouTube" },
                { icon: "/icons/p.png", link: "https://www.pinterest.com/attributionbooster", alt: "Pinterest" },
                { icon: "/icons/ins.png", link: "https://www.instagram.com/attribution_booster/", alt: "Instagram" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  onClick={() => window.open(social.link, '_blank')}
                  className={`w-8 h-8 ${social.bg} rounded-full flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={social.icon} alt={social.alt} className="object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Google Partner Badge */}
          <motion.a
            className="border-l-4 border-cyan-400 rounded-lg px-5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href={'https://www.google.com/partners/agency?id=6137804524'}
          >
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-3 cursor-pointer">
              <div className="text-sm font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
            </div>
            <div className="text-white text-2xl font-medium mt-1">Partner</div>
          </motion.a>

          {/* Glassdoor Review */}
          <motion.div
            className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/50 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shine Border Effect */}
            <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

            <div className="flex justify-between items-start relative z-10">
              {/* Left side - Clutch logo and rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="flex text-cyan-400 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-medium">50 review</p>
              </div>

              {/* Right side - Glassdoor */}
              <div className="flex flex-col items-end">
                <span className="text-green-400 font-bold text-lg mb-2">glassdoor</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-400 font-bold text-lg">4.9</span>
                  <div className="flex text-green-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Attribution Booster | All Rights Reserved | Serving clients since 2017
          </motion.p>

          <motion.div
            className="flex space-x-6 mt-5 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Privacy Policy", "Cookies Policy", "Terms & Agreement"].map((policy, index) => (
              <Link
                key={policy}
                href={index === 0 ? "/privacy" : index === 1 ? "/" : "/"}
                className="text-gray-400 text-sm hover:text-cyan-400 hover:scale-105 transition-all duration-300"
              // variants={itemVariants}
              // whileHover={{ scale: 1.05, y: -2 }}
              // transition={{ duration: 0.3 }}
              >
                {policy}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;