'use client';
import { useEffect } from 'react';

const ClientOptimizer = () => {
    useEffect(() => {
        // Preload critical images
        const criticalImages = [
            '/hero_update_1.png',
            '/logo.png',
            '/contact.png'
        ];

        const preloadImages = () => {
            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            });
        };

        // Preload images after a short delay
        setTimeout(preloadImages, 100);

        // Add intersection observer for lazy loading
        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        }, observerOptions);

        // Observe all lazy images
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => observer.observe(img));

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
};

export default ClientOptimizer;