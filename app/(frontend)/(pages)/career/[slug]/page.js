'use client'
import { MapPin, Clock, CalendarDays, ArrowRight, ArrowUpRight } from "lucide-react"
import ContactHero from "../../../../components/contact/hero"
import Header from "../../../../components/header"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useState } from "react"
import HeroWrapper2 from "../../../../components/hero_wrapper_2"
import { useParams } from 'next/navigation'
import careerData from '../../../../../json/career.json'

const Career = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const params = useParams();
	const jobSlug = params.slug;
	// Find the job details from JSON data using slug
	const jobDetail = careerData.jobListings.find(job => job.slug === jobSlug);
	
	// If job not found, show default or redirect
	if (!jobDetail) {
		return (
			<div className='bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] relative overflow-hidden'>
				<div className="container mx-auto px-4 py-16 text-center">
					<h1 className="text-2xl text-white">Job not found</h1>
					<p className="text-white/70 mt-4">The job position you're looking for doesn't exist.</p>
				</div>
			</div>
		);
	}
	return (
		<div className='bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] relative overflow-hidden'>
			{/* ContactHero wrapper with shine-border - Following Contact page pattern */}
			<HeroWrapper2
				title="Build the Future With Us"
				description="Our spaces are crafted to spark innovation, fuel bold ideas, and foster a community of forward-thinkers."
				imageSrc="/career.svg"
				breadcrumb="Career Details"
			/>

			<div className=" flex justify-center items-start">


				<div className="container w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl space-y-8 relative overflow-hidden">
					{/* Shine Border Effect */}
					<div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>
					{/* Header Section */}
					<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#2A2E34] z-10">
						<div className="space-y-1">
							<p className="text-[#00E0FF] text-sm font-medium">{jobDetail.category}</p>
							<h1 className="text-3xl font-bold text-white">{jobDetail.title}</h1>
							<div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
								<div className="flex items-center gap-1">
									<MapPin className="h-4 w-4" />
									<span>{jobDetail.location}</span>
								</div>
								<div className="flex items-center gap-1">
									<Clock className="h-4 w-4" />
									<span>{jobDetail.type}</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start md:items-end gap-3">
							<div className="flex items-center gap-1 text-gray-400 text-sm">
								<CalendarDays className="h-4 w-4" />
								<span>{jobDetail.date}</span>
							</div>
							<motion.a
								href="mailto:info@attribution.com"
								className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<span className="mr-1">
									Send Your CV
								</span>
								<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
									<ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
								</div>
							</motion.a>
						</div>
					</div>

					{/* Key Responsibilities */}
					<div className="space-y-3">
						<h2 className="text-xl font-bold text-white">Key Responsibilities</h2>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							{jobDetail.responsibilities.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					{/* Required Skills & Qualifications */}
					<div className="space-y-3">
						<h2 className="text-xl font-bold text-white">Required Skills & Qualifications</h2>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							{jobDetail.skills.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					{/* Bonus If You Have */}
					<div className="space-y-3">
						<h2 className="text-xl font-bold text-white">Bonus If You Have</h2>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							{jobDetail.bonus.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					{/* What Makes You an Expert */}
					{jobDetail.expert && (
						<div className="space-y-3">
							<h2 className="text-xl font-bold text-white">What Makes You an Expert</h2>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								{jobDetail.expert.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					)}

					{/* What We Offer */}
					<div className="space-y-3">
						<h2 className="text-xl font-bold text-white">What We Offer</h2>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							<li>Remote-first, flexible work culture</li>
							<li>Work with a passionate and experienced team</li>
							<li>Exposure to high-impact projects</li>
							<li>Learning budget & career growth opportunities</li>
							<li>Annual bonuses and performance incentives</li>
						</ul>
					</div>

					{/* How to Apply */}
					<div className="space-y-3">
						<h2 className="text-xl font-bold text-white">How to Apply</h2>
						<p className="text-gray-300">Ready to join our team? Send your resume, portfolio, and LinkedIn profile to:</p>
						<motion.a
							href="mailto:info@attribution.com"
							className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<span className="mr-1">
								Send Your CV
							</span>
							<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
								<ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
							</div>
						</motion.a>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Career
