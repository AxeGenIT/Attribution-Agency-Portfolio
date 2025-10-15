'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import ContactHero from '../../../../../components/contact/hero';
import Header from '../../../../../components/header';
import HowWeWorkSection from '../../../../../components/about/works';
import RecentProjects from '../../../../../components/project';
import PromoBanner from '../../../../../components/promo_banner';
import ServiceeDetails from '../../../../../components/service_details';
import servicesData from '../../../../../../json/service.json';
import Image from 'next/image';
import HeroWrapper2 from '../../../../../components/hero_wrapper_2';

const ServiceChild = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const params = useParams();
	const parentSlug = params.slug;
	const childSlug = params.child;

	// Find parent by slug
	const parentService = servicesData.services.find(service => service.slug === parentSlug);
	// Find child by slug
	const childService = parentService && parentService.children ? parentService.children.find(child => child.slug === childSlug) : null;

	// If child service not found, show error
	if (!childService) {
		return <div>Service not found</div>;
	}

	// Transform child service data to match the expected format for ServiceeDetails
	const transformedService = {
		id: childService.id,
		title: childService.title,
		subtitle: childService.subtitle || `What You Will Get with Our ${childService.title} Services`,
		details: typeof childService.details === 'string'
			? childService.details
			: childService.details?.title || `Professional ${childService.title} services tailored to your needs.`,
		features: childService.details?.points || [],
		sectionImages: childService.sectionImages || [],
		children: []
	};

	console.log('Transformed Service:', childService?.heroImage);

	return (
		<div>
			<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] relative overflow-hidden">
				{/* ContactHero wrapper with shine-border - Following Contact page pattern */}
				<HeroWrapper2
					title={childService.title}
					description={transformedService.details}
					imageSrc={childService.heroImage || "/ss.svg"}
					breadcrumb={`Services / ${parentService.title}`}
				/>
				<ServiceeDetails service={transformedService} parentSlug={parentSlug} />
				<HowWeWorkSection />
				<RecentProjects hideTabs={true} />
				<PromoBanner
					headline="Need a tailored solution? Let's Talk"
					description="Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals. Let’s discuss your vision and turn it into a seamless, user-friendly experience."
					image="/promo2.svg"
					buttonText="Let's Talk"
				/>
			</div>
		</div>
	);
};

export default ServiceChild;