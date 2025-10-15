'use client'
import React, { useState } from 'react';
import { Search, MapPin, Clock, ArrowRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroWrapper2 from '../../../components/hero_wrapper_2';
import careerData from "../../../../json/career.json"

const jobCategories = careerData.jobCategories;

const jobListings = careerData.jobListings;

const Career = () => {
	const [selectedCategory, setSelectedCategory] = useState('All positions');
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedLocation, setSelectedLocation] = useState('All Location');

	const filteredJobs = jobListings.filter(job => {
		// If 'All positions' is selected, show all jobs
		if (selectedCategory === 'All positions') {
			return job.title.toLowerCase().includes(searchTerm.toLowerCase());
		}
		// Otherwise, match by categoryMatch field or category
		const matchesCategory = job.categoryMatch === selectedCategory || job.category === selectedCategory;
		const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	

	return (
		<div className='bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] relative overflow-hidden'>
			{/* ContactHero wrapper with shine-border - Following Career details page pattern */}
			<HeroWrapper2
				title="Build the Future With Us"
				description="Our spaces are crafted to spark innovation, fuel bold ideas, and foster a community of forward-thinkers."
				imageSrc="/career.svg"
				breadcrumb="Career"
			/>

			{/* Job Board Section */}
			<div className="container mx-auto  py-16 relative z-10">
				{/* Main Content Grid */}
				<div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Sidebar - Filters */}
					<motion.div
						className="lg:col-span-1 space-y-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{/* Search Bar */}
						<div className="relative">
							<div className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-xl p-4">
								<div className="relative">
									<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
									<input
										type="text"
										placeholder="Search"
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-white/50 focus:outline-none"
									/>
								</div>
								{/* Shine Border Effect */}
								<div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
							</div>
						</div>

						{/* Location Filter */}
						<div className="relative">
							<div className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-xl p-4">
								<div className="relative">
									<select
										value={selectedLocation}
										onChange={(e) => setSelectedLocation(e.target.value)}
										className="w-full bg-transparent text-white focus:outline-none appearance-none pr-8  rounded-xl placeholder-white/50"
									>
										<option value="All Location" className='bg-[#09d0d3]'>All Location</option>
										<option value="Remote" className='bg-[#09d0d3]'>Remote</option>
										<option value="On Site" className='bg-[#09d0d3]'>On Site</option>
										<option value="Hybrid" className='bg-[#09d0d3]'>Hybrid</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
								</div>
								{/* Shine Border Effect */}
								<div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
							</div>
						</div>

						{/* Position Categories */}
						<div className="space-y-2">
							{jobCategories.map((category) => (
								<motion.button
									key={category.name}
									onClick={() => setSelectedCategory(category.name)}
									className={`w-full flex justify-between text-left px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${category.active
										? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold"
										: "bg-white/10 text-white hover:bg-white/20"
										}`}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									{/* Shine Border Effect for active category */}
									{category.active && (
										<div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
									)}
									<span className="relative z-10">{category.name}</span>
									<span className="relative z-10">({category.count})</span>
								</motion.button>
							))}
						</div>

						{/* Recruitment Message */}
						<div className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-xl p-6 relative overflow-hidden">
							{/* Shine Border Effect */}
							<div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>
							<p className="text-white/80 text-sm leading-relaxed relative z-10">
								We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
							</p>
						</div>
					</motion.div>

					{/* Right Job Listings */}
					<motion.div
						className="lg:col-span-2 space-y-4"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						{filteredJobs.map((job, index) => (
							<motion.div
								key={index}
								className="backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
								initial={{ y: 20 }}
								whileInView={{ y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -2 }}
							>
								{/* Shine Border Effect */}
								<div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

								<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
									<div className="space-y-2">
										<p className="text-cyan-400 text-sm font-medium">{job.category}</p>
										<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
											{job.title}
										</h3>
										<div className="flex items-center gap-4 text-white/60 text-sm">
											<div className="flex items-center gap-2">
												<MapPin className="w-4 h-4" />
												<span>{job.location}</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4" />
												<span>{job.type}</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start md:items-end gap-3">
										<div className="flex items-center gap-2 text-white/60 text-sm">
											<Clock className="w-4 h-4" />
											<span>{job.date}</span>
										</div>
										{/* <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 group-hover:scale-105 shadow-lg">
											 See Details
											 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										 </button> */}
										 <motion.a
											 href={`/career/${job.slug}`}
											 className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105"
											 whileHover={{ scale: 1.05 }}
											 transition={{ duration: 0.3 }}
										 >
											 <span className="mr-1">
												 See Details
											 </span>
											 <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
												 <ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
											 </div>
										 </motion.a>
									 </div>
								 </div>
							 </motion.div>
						 ))}

						{/* Load More Button */}
						<motion.div
							className="flex justify-center pt-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<motion.button
								className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<span className="mr-1">
									Load More
								</span>
								<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
									<ChevronDown className="w-5 h-5 text-[#07f4fa]" />
								</div>
							</motion.button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	)
};

export default Career;