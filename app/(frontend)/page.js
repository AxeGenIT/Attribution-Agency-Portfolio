'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroWrapper from '../components/hero_wrapper';
import GooglePartner from '../components/google_partner';

// Dynamic imports with loading states for better performance
const ServicesSection = dynamic(() => import('../components/service'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const PromoBanner = dynamic(() => import('../components/promo_banner'), {
    loading: () => <div className="h-48 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const TrustedPartners = dynamic(() => import('../components/partners'), {
    loading: () => <div className="h-32 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const RecentProjects = dynamic(() => import('../components/project'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const ResultsSection = dynamic(() => import('../components/reults'), {
    loading: () => <div className="h-64 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const AttributionBooster = dynamic(() => import('../components/booster'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const ExpertiseSection = dynamic(() => import('../components/expert'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const TeamSection = dynamic(() => import('../components/team'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const TestimonialsSection = dynamic(() => import('../components/testimonial'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const ProcessSection = dynamic(() => import('../components/process'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const ContactSection = dynamic(() => import('../components/contact'), {
    loading: () => <div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

const ChallengesSection = dynamic(() => import('../components/challange'), {
    loading: () => <div className="h-48 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />,
    ssr: false
});

export default function HomePage() {
    return (
        <div className="">
            {/* Critical above-the-fold content loads immediately */}
            <HeroWrapper />
            <GooglePartner />

            {/* Non-critical content loads dynamically */}
            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ServicesSection />
            </Suspense>

            <Suspense fallback={<div className="h-48 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <PromoBanner
                    headline="Enjoy 10% Off When You Choose Our Annual Package"
                    description="Take advantage of a special 10% discount on your first annual subscription. This limited-time offer is exclusively available for new customers. Don't miss out—subscribe today and start enjoying premium features while saving money on your yearly plan."
                    image="/promo1.svg"
                    buttonText="Start Now"
                />
            </Suspense>

            <Suspense fallback={<div className="h-32 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <TrustedPartners />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <RecentProjects />
            </Suspense>

            <Suspense fallback={<div className="h-64 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ResultsSection />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <AttributionBooster />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ExpertiseSection />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <TeamSection fix={true} />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <TestimonialsSection />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ProcessSection />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ContactSection />
            </Suspense>

            <Suspense fallback={<div className="h-48 bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] animate-pulse" />}>
                <ChallengesSection />
            </Suspense>
        </div>
    )
}
