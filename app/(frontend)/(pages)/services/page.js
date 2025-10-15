
import HeroWrapper2 from '../../../components/hero_wrapper_2';
import ServicesSection from '../../../components/service';

const Service = () => {
	return (
		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following About/Contact page pattern */}
			<HeroWrapper2
				title="Solutions Built to Perform. Services Designed to Scale."
				description="Attribution Booster offers a complete suite of digital solutions, from full-stack web and app development to performance marketing, analytics, UI/UX, content creation, and cybersecurity. Every service is built to scale with your business and optimized to deliver measurable results that drive growth."
				imageSrc="/service.svg"
				breadcrumb="Services"
				buttonText="Get Your Service"
			/>

			<ServicesSection />
		</div>
	);
};

export default Service;