"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactHero({ title, description, buttonText, imageSrc = "/contact_hero.png", breadcrumb = "Contact Us" }) {
	return (
		<div className="">
			<div className="container mx-auto relative">
				{/* Hero Section */}
				<section className="relative py-16 px-6 md:px-0">
					<div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
						{/* Text Content */}
						<div className="basis-6/12 w-full">
							{/* Breadcrumb Navigation */}
							<div className="py-6">
								<div className="flex items-center space-x-2 text-sm">
									<span className="text-slate-300 hover:text-white transition-colors cursor-pointer">Home</span>
									<ChevronRight className="w-4 h-4 text-slate-500" />
									<span className="text-teal-400">{breadcrumb}</span>
								</div>
							</div>

							<div className="space-y-6">
								<h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">{title}</h1>
								<p className="text-slate-300 text-sm leading-relaxed">
									{description}
								</p>
							</div>

							{buttonText &&
								<motion.div
									className="inline-flex items-center bg-[#07f4fa] text-black pl-4 pr-1 py-1 rounded-full font-semibold transition-all duration-300 shadow-lg text-base hover:scale-105 cursor-pointer mt-8"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									<span className="mr-1">{buttonText}</span>
									<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#07f4fa]">
										<ArrowUpRight className="w-5 h-5 text-[#07f4fa]" />
									</div>
								</motion.div>
							}
						</div>

						{/* Image Section */}
						<div className="basis-6/12 w-full">
							<div className="relative flex justify-center items-center">
								<div className="relative w-full max-w-lg ml-auto">
									{/* Main Image Container */}
									<div className="relative z-30 rounded-2xl overflow-hidden shadow-2xl">
										<Image
											src={imageSrc}
											alt="Person working on laptop in modern office"
											width={500}
											height={320}
											className="w-full mt-16 rounded-xl shadow-lg"
										/>
										{/* Overlay gradient */}
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
									</div>

									{/* Decorative Elements */}
									{/* Medium teal circle - top left */}
									<div className="absolute top-4 -left-12 w-20 h-20">
										<img src="/contact.png" alt="Decorative Element" className="w-full h-full object-cover" />
									</div>
									{/* Small blue circle - bottom left */}
									<div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-70">
										<img src="/contact_icon.png" alt="Decorative Element" className="w-full h-full object-cover" />
									</div>
									{/* Extra small circle - middle right */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
