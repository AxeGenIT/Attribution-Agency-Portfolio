
'use client';
import ContactSection from '../../../components/contact';
import ContactMap from '../../../components/contact/map';
import HeroWrapper2 from '../../../components/hero_wrapper_2';

const page = () => {
	return (
		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following About page pattern */}
			<HeroWrapper2
				title="Let's get in touch"
				description="Whether you have a question, need support, or want to explore how we can work together, feel free to reach out"
				imageSrc="/contact_hero.png"
				breadcrumb="Contact Us"
			/>

			<ContactSection />
			<ContactMap />
		</div>
	);
};

export default page;