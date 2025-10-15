import RecentProjects from '../../../components/project';
import PromoBanner from '../../../components/promo_banner';
import HeroWrapper2 from '../../../components/hero_wrapper_2';

const Portfolio = () => {
	return (
		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following About/Contact page pattern */}
			<HeroWrapper2
				title="Our Work Speaks for Itself"
				description="Explore a few of the solutions we've delivered for startups, enterprises, and global brands."
				imageSrc="/port.svg"
				breadcrumb="Portfolio"
			/>

			<RecentProjects hideTabs={false} />
			<PromoBanner
				headline="Ready to create your success story"
				description="Have questions or need assistance? We’re here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let’s start a conversation and explore how we can work together."
				image="/promo3.svg"
				buttonText="Let's Talk"
			/>
		</div>
	);
};

export default Portfolio;