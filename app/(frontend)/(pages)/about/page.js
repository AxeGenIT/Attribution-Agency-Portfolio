'use client'
import React, { useState } from 'react';
import Header from '../../../components/header';
import ContactHero from '../../../components/contact/hero';
import MissionSection from '../../../components/about/mission';
import VisionSection from '../../../components/about/vision';
import HowWeWorkSection from '../../../components/about/works';
import PromoBanner from '../../../components/promo_banner';
import ProcessSection from '../../../components/process';
import Image from 'next/image';
import HeroWrapper2 from '../../../components/hero_wrapper_2';

const About = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following hero_wrapper pattern */}
			<HeroWrapper2
				title="Driven by Data. Designed for Growth"
				description="Attribution Booster is a results-driven digital agency that blends advanced analytics, creative execution, and full-stack technology to help businesses scale faster and smarter. As a certified Google Partner, we don't just deliver services, we engineer growth strategies that convert."
				imageSrc="/about.svg"
				breadcrumb="About Us"
			/>

			<MissionSection />
			<VisionSection />
			<HowWeWorkSection />

			<div className="">
				<PromoBanner
					headline="Let's Build Something That Grows"
					description="Have questions or need assistance? We're here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let's start a conversation and explore how we can work together."
					image="/about_1.png"
					buttonText="Get in Touch"
				/>
			</div>
		</div>
	);
};

export default About;