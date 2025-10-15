

import TeamSection from '../../../components/team';
import PromoBanner from '../../../components/promo_banner';
import Image from 'next/image';
import HeroWrapper2 from '../../../components/hero_wrapper_2';

const Team = () => {

	return (
		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following About/Contact/Portfolio/Services page pattern */}
			<HeroWrapper2
				title="Our Work Speaks for Itself"
				description="Explore a few of the solutions we've delivered for startups, enterprises, and global brands."
				imageSrc="/team.svg"
				breadcrumb="Team"
			/>

			<TeamSection />
			<PromoBanner
				headline="Let’s Build Something That Grows"
				description="Have questions or need assistance? We’re here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let’s start a conversation and explore how we can work together."
				image="/team-banner.png"
				buttonText="Get in Touch"
			/>
		</div>
	);
};

export default Team;