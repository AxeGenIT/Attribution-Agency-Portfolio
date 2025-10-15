'use client';
import { useEffect } from 'react';

const PerformanceMonitor = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'performance' in window) {
            // Monitor Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    // Log performance metrics in development
                    if (process.env.NODE_ENV === 'development') {
                        console.log(`${entry.name}:`, entry.value);
                    }
                }
            });

            // Observe Core Web Vitals
            try {
                observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
            } catch (e) {
                // Fallback for older browsers
                console.log('Performance Observer not supported');
            }

            // Monitor Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                if (entries.length > 0) {
                    const lcp = entries[entries.length - 1];
                    if (process.env.NODE_ENV === 'development') {
                        console.log('LCP:', lcp.startTime);
                    }
                }
            });

            try {
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP Observer not supported');
            }

            // Cleanup
            return () => {
                observer.disconnect();
                lcpObserver.disconnect();
            };
        }
    }, []);

    return null;
};

export default PerformanceMonitor;