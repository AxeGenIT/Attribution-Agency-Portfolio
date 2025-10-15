'use client';
import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestimonialsSection = () => {
	const testimonials = [
		{
			name: "Liya",
			role: "CEO Founder Roast Marketing",
			image: "./test/1.jpg",
			rating: 5,
			text: "Attribution Booster delivered an outstanding experience. They flawlessly set up our Facebook Conversion API while also providing expertise in web design & development, UX/UI, tracking, AI automation, and performance marketing. Reliable, professional, and results-driven – highly recommended!"
		},
		{
			name: "Shan Serran",
			role: "CEO Founder Veewz",
			image: "./test/2.jpg",
			rating: 5,
			text: "Working with Attribution Booster has been an excellent experience. They seamlessly managed our transition to GA4, ensuring accurate tracking and smooth implementation. Beyond analytics, their expertise in AI automation, advanced tracking, and performance marketing makes them an invaluable partner for any business."
		},
		
		{
			name: "Zane Vondracek",
			role: "CEO Founder Astory Media",
			image: "./test/4.png",
			rating: 5,
			text: "I worked with Attribution Booster for web design & development, UX/UI, conversion tracking, and performance marketing. They were professional, fast, and highly knowledgeable. Everything was set up flawlessly, especially the Google Ads tracking which now works perfectly. If you want reliable digital solutions done right the first time, I strongly recommend Attribution Booster."
		},
		{
			name: "Hussien Ellathy",
			role: "Software Engineer | Web Developer",
			image: "./test/3.png",
			rating: 5,
			text: "Collaborating with Attribution Booster has been a great experience. They always deliver projects on time and often go beyond expectations. Their dedication, creativity, and expertise truly set them apart. For businesses seeking reliable, high-quality digital solutions, I highly recommend Attribution Booster."
		},
		
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	const testimonialsPerSlide = 2;
	const slides = Array.from({ length: Math.ceil(testimonials.length / testimonialsPerSlide) }, (_, i) =>
		testimonials.slice(i * testimonialsPerSlide, (i + 1) * testimonialsPerSlide)
	);

	return (
		<section className="relative z-10 px-4 sm:px-6 py-6 overflow-hidden">

			<img
				src="/contact.png"
				alt="Orb"
				className="absolute left-1/2 bottom-6 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20 opacity-80 pointer-events-none"
			/>

			{/* Background decorative elements */}


			<div className="container mx-auto relative z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 md:p-12">
				<div className="absolute inset-0">
					{/* Hero1 on the left side */}
					<img src="/hero1.png" alt="Background Element Left" className="absolute left-0 top-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" style={{ borderTopLeftRadius: '30px', }} />
					{/* Hero2 on the right side */}
					<img src="/hero2.png" alt="Background Element Right" className="absolute right-0 top-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" style={{borderTopRightRadius:'30px'}} />
				</div>
				{/* Section Header */}
				<div className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-0 text-center lg:text-left leading-tight">
						Trusted by Clients Around<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
							the World
						</span>
					</h2>
					<div className=''>
						<p className="text-base text-white/70 leading-relaxed text-center lg:text-left max-w-md">
							Hear from real clients who rely on our digital solutions, development expertise, and marketing strategies to grow and protect their businesses.
						</p>
					</div>
				</div>

				{/* Testimonials Container */}
				<div className="relative overflow-hidden">
					{/* Central Glowing Orb */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

					<Swiper
						slidesPerView={1}
						onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
						onSwiper={swiper => (swiperRef.current = swiper)}
						className="mb-8"
					>
						{slides.map((group, slideIdx) => (
							<SwiperSlide key={slideIdx}>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
									{group.map((testimonial, index) => (
										<div
											key={index}
											className="group relative h-auto min-h-[240px] sm:min-h-[260px] bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border-2 border-gray-600 hover:border-cyan-400"
										>
											{/* Shine Border Effect - Always visible on all cards */}
											<div className="shine-border absolute inset-0 rounded-2xl pointer-events-none"></div>

											{/* Testimonial Text */}
											<p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 group-hover:text-white transition-colors duration-300 leading-relaxed relative z-10">
												"{testimonial.text}"
											</p>

											{/* Author Info */}
											<div className="flex flex-wrap items-center justify-between relative z-10 w-full">
												<div className="flex items-center space-x-4 w-full">
													<img
														src={testimonial.image}
														alt={testimonial.name}
														className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/30"
													/>
													<div className='flex-1 flex flex-wrap items-center w-full justify-between'>
														<div>
															<h4 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors duration-300">
																{testimonial.name}
															</h4>
															<p className="text-white/60 text-sm">
																{testimonial.role}
															</p>
														</div>
														{/* Rating Stars */}
														<div className="flex space-x-1">
															{[...Array(5)].map((_, i) => (
																<Star
																	key={i}
																	className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
																/>
															))}
														</div>
													</div>
												</div>

											</div>
										</div>
									))}
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation Dots */}
					<div className="flex justify-center space-x-2 mt-6 sm:mt-8">
						{slides.map((_, dotIdx) => (
							<button
								key={dotIdx}
								className={`w-2 h-2 rounded-full ${dotIdx === activeIndex ? 'bg-cyan-400' : 'bg-gray-600'} inline-block focus:outline-none`}
								onClick={() => {
									setActiveIndex(dotIdx);
									swiperRef.current?.slideTo(dotIdx);
								}}
								aria-label={`Go to testimonial group ${dotIdx + 1}`}
							></button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;