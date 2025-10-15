'use client'
import React, { useState } from 'react';
import Header from '../../../../components/header';
import { useParams } from 'next/navigation';
import ContactHero from '../../../../components/contact/hero';
import HowWeWorkSection from '../../../../components/about/works';
import RecentProjects from '../../../../components/project';
import PromoBanner from '../../../../components/promo_banner';
import ServiceeDetails from '../../../../components/service_details';
import servicesData from '../../../../../json/service.json';
import Image from 'next/image';
import HeroWrapper2 from '../../../../components/hero_wrapper_2';

const ServiceDetails = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const params = useParams();
    const slug = params.slug;

    // Find the service by slug
    const service = servicesData.services.find(s => s.slug === slug);

    // If service not found, show default or redirect
    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
                {/* ContactHero wrapper with shine-border - Following About/Contact page pattern */}
                <HeroWrapper2
                    title={service.title}
                    description={service.details}
                    imageSrc={service.heroImage || "/ss.svg"} // Use heroImage from service
                    breadcrumb="Services"
                />

                <ServiceeDetails service={service} parentSlug={slug} />
                <HowWeWorkSection />
                <RecentProjects hideTabs={true} />
                <PromoBanner
                    headline="Need a tailored Solution? Let's Talk"
                    description="Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals. Let’s discuss your vision and turn it into a seamless, user-friendly experience."
                    image="/promo2.svg"
                    buttonText="Let's Talk"
                />
            </div>
        </div>
    );
};

export default ServiceDetails;