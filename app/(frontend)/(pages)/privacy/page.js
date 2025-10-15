import HeroWrapper2 from '../../../components/hero_wrapper_2';

const privacySections = [
	{
		title: 'Data Controller',
		content: [
			'The Data Controller responsible for your personal data is Attribution Booster. If you have any questions about this Privacy Policy or our data practices, you can contact us at:',
			'Email:',
			'Address:'
		]
	},
	{
		title: 'Information We Collect',
		content: [
			'We may collect both personal and non-personal information when you interact with our Services.',
			'Personal Data: Information that can identify you directly or indirectly, including but not limited to:',
			'Full name, Email address, Phone number, Billing and payment details, Account login credentials, Company/organization details (if applicable)',
			'Non-Personal Data: Information that does not directly identify you, such as:',
			'Device information (IP address, browser type, operating system), Usage data (pages visited, time spent, click activity), Location data (general region), Cookies and tracking identifiers'
		]
	},
	{
		title: 'How We Use Your Data',
		content: [
			'We process your information for the following purposes, in compliance with applicable laws (including GDPR and CCPA):',
			'To provide, operate, and improve our Services',
			'To process payments and manage subscriptions',
			'To communicate with you regarding updates, offers, and support',
			'To personalize your experience and optimize performance',
			'To conduct analytics, reporting, and attribution tracking',
			'To comply with legal and regulatory requirements',
			'To protect against fraud, misuse, or security threats'
		]
	},
	{
		title: 'Legal Basis for Processing (GDPR)',
		content: [
			'We process personal data under the following lawful bases:',
			'Consent – when you voluntarily provide information or agree to marketing communications',
			'Contract – when processing is necessary to deliver the Services you subscribed to',
			'Legitimate Interests – to enhance security, improve user experience, and perform analytics',
			'Legal Obligation – where required by applicable laws or regulations'
		]
	},
	{
		title: 'Data Sharing & Disclosure',
		content: [
			'We respect your confidentiality and do not sell your personal data. However, we may share information with:',
			'Service Providers: Payment processors, hosting providers, analytics, and support tools',
			'Business Partners: For integrations or joint offerings (with your consent where required)',
			'Legal Authorities: If required to comply with laws, regulations, or court orders',
			'Corporate Transfers: In case of merger, acquisition, or sale of company assets'
		]
	},
	{
		title: 'Data Retention',
		content: [
			'We retain your personal data only as long as necessary to fulfill the purposes outlined in this Policy, including legal, accounting, or reporting requirements.',
			'Account-related data: retained while your account is active and up to [X months/years] after termination',
			'Marketing data: retained until you unsubscribe or withdraw consent',
			'Transaction records: retained as required by tax and financial regulations'
		]
	},
	{
		title: 'Your Rights',
		content: [
			'Depending on your location (e.g., GDPR, CCPA), you may have the following rights:',
			'Right to access your data',
			'Right to correct inaccurate or incomplete data',
			'Right to deletion (“right to be forgotten”)',
			'Right to restrict processing',
			'Right to data portability',
			'Right to object to processing (including direct marketing)',
			'Right to withdraw consent at any time',
			'To exercise these rights, contact us at [Insert Contact Email].'
		]
	},
	{
		title: 'Cookies & Tracking Technologies',
		content: [
			'We use cookies and similar technologies to:',
			'Remember your preferences and settings',
			'Analyze usage patterns and improve functionality',
			'Provide targeted advertising and remarketing',
			'Ensure secure login and fraud prevention',
			'You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our Services.'
		]
	},
	{
		title: 'Data Security',
		content: [
			'We implement industry-standard security measures to safeguard your data, including:',
			'SSL encryption for data transmission',
			'Secure access controls and authentication',
			'Regular security audits and monitoring',
			'Data minimization and restricted access policies',
			'Despite these safeguards, no system can guarantee 100% security. You acknowledge and accept this risk when using our Services.'
		]
	},
	{
		title: 'International Data Transfers',
		content: [
			'If you access our Services from outside [Insert Country], your information may be transferred to and stored in countries where data protection laws may differ. We ensure such transfers comply with GDPR and other applicable standards through mechanisms such as Standard Contractual Clauses (SCCs).'
		]
	},
	{
		title: 'Children’s Privacy',
		content: [
			'Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us, and we will take appropriate steps to delete it.'
		]
	},
	{
		title: 'Changes to This Policy',
		content: [
			'We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any updates will be posted on this page with a revised “Effective Date.” Continued use of our Services after changes indicates your acceptance.'
		]
	}
];

const Privacy = () => {
	return (


		<div className="bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
			{/* ContactHero wrapper with shine-border - Following hero_wrapper pattern */}
			<HeroWrapper2
				title="Privacy Policy"
				description=""
				imageSrc="/privacy_policy.jpg"
				breadcrumb="Privacy Policy"
			/>

			<div className="container mx-auto py-16 px-4">
				<h1 className="text-4xl font-bold text-center mb-8 text-cyan-500">Privacy Policy</h1>
				<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
					<p className="text-base text-white/80 mb-8 text-center">
						Attribution Booster (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information of our users (“you” or “your”). This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, services, or tools (collectively, the “Services”).<br /><br />
						By accessing or using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree, please discontinue use of our Services immediately.
					</p>
					{privacySections.map((section, idx) => (
						<div key={idx} className="mb-8">
							<h2 className="text-2xl font-semibold text-cyan-400 mb-3">{section.title}</h2>
							<ul className="list-disc pl-6 text-white/80 space-y-2">
								{section.content.map((point, i) => (
									<li key={i}>{point}</li>
								))}
							</ul>
						</div>
					))}
					<div className="mb-8">
						<h2 className="text-2xl font-semibold text-cyan-400 mb-3">Contact Us</h2>
						<ul className="list-disc pl-6 text-white/80 space-y-2">
							<li>
								If you have any questions, concerns, or requests regarding this Privacy Policy or your data rights, please reach out to us:
							</li>
							<li>Email: <a href="mailto:info@attributionbooster.com" className=" hover:underline">info@attributionbooster.com</a></li>
							<li>Phone: <a href="tel:+8801812526073" className=" hover:underline">+8801812526073</a></li>
							<li>Address: Raleigh 227 Fayetteville</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Privacy;