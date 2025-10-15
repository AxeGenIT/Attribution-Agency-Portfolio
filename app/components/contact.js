'use client'
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight, Loader2, CheckCircle, XCircle, ArrowUpRight, CalendarDays, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        whatsapp: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [embedDomain, setEmbedDomain] = useState('');

    const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/attributionbooster/30min';

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setEmbedDomain(window.location.hostname);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Validate email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Validate service
        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        // Validate WhatsApp number
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'WhatsApp number is required';
        } else if (!/^\+?[0-9]{7,15}$/.test(formData.whatsapp.trim())) {
            newErrors.whatsapp = 'Please enter a valid number';
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // Show success toast
                toast.success('Thank you! Your message has been sent successfully.', {
                    duration: 5000,
                    style: {
                        background: '#10b981',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '16px',
                        fontSize: '14px',
                    },
                    iconTheme: {
                        primary: '#fff',
                        secondary: '#10b981',
                    },
                });

                // Reset form and errors on success
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setErrors({});
            } else {
                // Show error toast
                toast.error('Sorry, there was an error sending your message. Please try again.', {
                    duration: 5000,
                    style: {
                        background: '#ef4444',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '16px',
                        fontSize: '14px',
                    },
                    iconTheme: {
                        primary: '#fff',
                        secondary: '#ef4444',
                    },
                });
                console.error('Form submission error:', result.error);
            }
        } catch (error) {
            // Show error toast
            toast.error('Something went wrong. Please try again.', {
                duration: 5000,
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '16px',
                    fontSize: '14px',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#ef4444',
                },
            });
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: "/process/location.svg",
            title: 'Location',
            details: '123 Business Ave, Suite 100, New York, NY 10001',
            color: 'from-gray-50 to-gray-100'
        },
        {
            icon: "/process/email.svg",
            title: 'Email Address',
            details: 'info@attributionbooster.com',
            color: 'from-gray-50 to-gray-100',
            link: 'mailto:info@attributionbooster.com'
        },
        {
            icon: "/process/phone.svg",
            title: 'Phone Number',
            details: '+8801812526073',
            color: 'from-gray-50 to-gray-100',
            link: 'tel:+8801812526073'
        },
        {
            icon: "/process/hour.svg",
            title: 'Working Hours',
            details: 'Monday - Friday | 9am - 6pm EST',
            color: 'from-gray-50 to-gray-100'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    const contactItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '16px',
                        fontSize: '14px',
                    },
                }}
            />
            <div className="container mx-auto">
                <section className="relative z-10 w-full py-16 lg:py-24 overflow-hidden">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <div className="">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Contact Us
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Get in touch with us to learn how we can help you scale and grow through
                                    our comprehensive digital transformation services.
                                </p>
                            </div>
                            <div className="py-6">
                                {contactInfo.map((info, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            className="border-b border-white/10 py-6 group"
                                            style={{ transformOrigin: 'left' }}
                                            variants={contactItemVariants}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 border-gray-50 border-opacity-50 border rounded-full flex items-center justify-center`}>
                                                    <img src={info.icon} alt={info.title} className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-lg mb-1">
                                                        {info.title}
                                                    </h3>
                                                    {info.link ? (
                                                        <a href={info.link} className="text-cyan-400 text-sm underline hover:text-cyan-300 transition-colors duration-200">
                                                            {info.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-white/70 text-sm">
                                                            {info.details}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Prefer Direct Contact - CTA Section */}
                            <div className="mt-8">
                                <div className="relative overflow-hidden rounded-2xl border border-gray-50 border-opacity-30  bg-white/5 backdrop-blur-md p-6 sm:p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Prefer Direct Contact?</h3>
                                        <p className="text-white/70">Let's schedule a call to discuss your project in detail</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <div
                                            className="flex-1 group bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-white/10 rounded-xl p-5 sm:p-6 flex items-center gap-4 shadow-lg"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-cyan-300" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-semibold text-lg">Schedule a Call</div>
                                                <div className="text-white/60 text-sm">Available 9AM-5PM EST</div>
                                            </div>
                                        </div>

                                        {/* <motion.button
                                            type="button"
                                            onClick={() => setIsCalendlyOpen(true)}
                                            className="h-12 px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg flex flex-row items-center justify-start gap-3 group bg-[#07f4fa] text-black"
                                            variants={formItemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className='text-black whitespace-pre text-center'>Book Now</span>
                                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                                <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                            </div>
                                        </motion.button> */}
                                        <div
                                            onClick={() => setIsCalendlyOpen(true)}
                                            className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105 cursor-pointer"
                                        >
                                            <span className="mr-1">Book Now</span>
                                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                                <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <div
                            className="bg-white/5 border border-gray-50 border-opacity-30 backdrop-blur-md rounded-2xl p-8"
                        // variants={itemVariants}
                        // whileHover={{ scale: 1.02 }}
                        // transition={{ duration: 0.3 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Your Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.name
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-white/20 focus:ring-cyan-400'
                                            }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-red-400 text-sm"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Working Email ID <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required={true}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.email
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-white/20 focus:ring-cyan-400'
                                            }`}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-red-400 text-sm"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="service" className="block text-white font-medium mb-2">
                                        Select Service <span className="text-red-400">*</span>
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className={`appearance-none w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.service
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-white/20 focus:ring-cyan-400'
                                            }`}
                                    >
                                        <option value="" className='text-black bg-[#09d0d3]'>Select a service</option>
                                        <option className='text-black bg-[#09d0d3]'>Full Stack Web Development</option>
                                        <option className='text-black bg-[#09d0d3]'>CMS Web Development</option>
                                        <option className='text-black bg-[#09d0d3]'>App Development</option>
                                        <option className='text-black bg-[#09d0d3]'>UI/UX Design (Web and Mobile App)</option>
                                        <option className='text-black bg-[#09d0d3]'>Analytics and Conversion Tracking</option>
                                        <option className='text-black bg-[#09d0d3]'>Google Ads</option>
                                        <option className='text-black bg-[#09d0d3]'>Social Media Marketing</option>
                                        <option className='text-black bg-[#09d0d3]'>Graphics Design</option>
                                        <option className='text-black bg-[#09d0d3]'>Video Editing</option>
                                        <option className='text-black bg-[#09d0d3]'>Cyber Security</option>
                                    </select>
                                    {errors.service && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-red-400 text-sm"
                                        >
                                            {errors.service}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="whatsapp" className="block text-white font-medium mb-2">
                                        Phone Number <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required={false}
                                        id="whatsapp"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.whatsapp
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-white/20 focus:ring-cyan-400'
                                            }`}
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.whatsapp && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-red-400 text-sm"
                                        >
                                            {errors.whatsapp}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="company" className="block text-white font-medium mb-2">
                                        Company Name <span className="text-gray-400 text-sm">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required={false}
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your company name"
                                    />
                                </motion.div>

                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Tell us more about your project... <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        required={false}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${errors.message
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-white/20 focus:ring-cyan-400'
                                            }`}
                                        placeholder="Describe your project requirements..."
                                    ></textarea>
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-red-400 text-sm"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </motion.div>

                                {/* <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={` w-fit px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg flex flex-row items-center justify-start gap-3 group ${isSubmitting
                                        ? 'bg-gray-500 cursor-not-allowed text-white'
                                        : 'bg-[#07f4fa] text-black'
                                        }`}
                                    variants={formItemVariants}
                                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className='text-black whitespace-pre text-center'>Request Free Consultancy</span>
                                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                                <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                            </div>
                                        </>
                                    )}
                                </motion.button> */}

                                <div
                                    onClick={() => !isSubmitting && setIsCalendlyOpen(true)}
                                    className={`inline-flex items-center pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base ${isSubmitting
                                            ? 'bg-gray-500 cursor-not-allowed text-white'
                                            : 'bg-[#07f4fa] text-black hover:scale-105 cursor-pointer'
                                        }`}
                                    role="button"
                                    aria-disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="mr-1">Request Free Consultancy</span>
                                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
                                                <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
                                            </div>
                                        </>
                                    )}
                                </div>
                                
                            </form>
                        </div>
                    </motion.div>
                </section>
                {/* Calendly Modal */}
                <AnimatePresence>
                    {isCalendlyOpen && (
                        <motion.div
                            className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCalendlyOpen(false)}
                        >
                            <motion.div
                                className="relative w-full max-w-4xl h-[80vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                onClick={(e) => e.stopPropagation()}
                                role="dialog"
                                aria-modal="true"
                                aria-label="Book a meeting"
                            >
                                <button
                                    onClick={() => setIsCalendlyOpen(false)}
                                    className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/10 hover:bg-black/20 border border-black/20 text-black"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <iframe
                                    title="Calendly Scheduling"
                                    src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(embedDomain)}&embed_type=Inline`}
                                    className="w-full h-full"
                                    frameBorder="0"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ContactSection;