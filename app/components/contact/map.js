import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
	return (
		<div>
			{/* Map Section */}
			<motion.section
				className="py-16"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="mx-auto">
					<div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 overflow-hidden">
						<div className="h-96 relative">
							{/* Google Maps iframe */}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0042588!3d40.7401608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x2595e6d0b5b3c4b8!2s123%20Business%20Ave%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Attribution Booster Office Location"
								className=""
							></iframe>

							{/* Overlay with location info */}
							<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
								<div className="flex items-center space-x-3">
									<div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
										<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-slate-900 text-sm font-semibold">Our Office</h3>
										<p className="text-slate-600 text-xs">123 Business Ave, Suite 100</p>
										<p className="text-slate-600 text-xs">New York, NY 10001</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default ContactMap;