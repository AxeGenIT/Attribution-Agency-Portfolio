'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GooglePartner = () => {
    return (
        <section className="relative z-10 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative bg-white/5 border-white backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Shine Border Effect */}
                        <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>
                        <div className="relative flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 z-10">
                            <motion.div
                                className=''
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <img src="/google.png" alt="Google Partner" width={150} className="object-cover shadow-lg" />
                            </motion.div>
                            <motion.div
                                className="flex-1 text-center sm:text-left"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                                    Trusted by Google to deliver top-tier advertising performance
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base">
                                    As a certified <Link href="https://www.google.com/partners/agency?id=6137804524" className="text-cyan-400 font-semibold">Google Partner</Link>, our strategies are not just creative, they're conversion-proven.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GooglePartner; 