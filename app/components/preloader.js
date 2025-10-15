'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Remove SSR fallback overlay as soon as we mount (no blank flash)
        const ssrOverlay = document.getElementById('preloader-ssr');
        if (ssrOverlay) {
            ssrOverlay.style.opacity = '0';
            ssrOverlay.style.transition = 'opacity 200ms ease';
            setTimeout(() => {
                ssrOverlay.parentNode && ssrOverlay.parentNode.removeChild(ssrOverlay);
            }, 220);
        }

        const handleLoad = () => {
            // Reduce delay for faster perceived performance
            setTimeout(() => setShow(false), 100);
        };

        // Check if DOM content is already loaded
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            handleLoad();
        } else {
            // Use DOMContentLoaded instead of load for faster response
            document.addEventListener('DOMContentLoaded', handleLoad);
            window.addEventListener('load', handleLoad);
        }

        return () => {
            document.removeEventListener('DOMContentLoaded', handleLoad);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="flex flex-col items-center justify-center"
                    >
                        <img src="/logo.png" alt="Logo" className="w-28 h-28 object-contain" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;


