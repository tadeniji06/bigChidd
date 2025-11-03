"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Hero = () => {
	const [currentStat, setCurrentStat] = useState(0);

	const stats = [
		{ number: "95%", label: "Accuracy Rate", icon: "mdi:target" },
		{
			number: "10K+",
			label: "Active Users",
			icon: "mdi:account-group",
		},
		{ number: "500+", label: "Daily Tips", icon: "mdi:chart-line" },
		{ number: "12", label: "Sports Covered", icon: "mdi:soccer" },
	];

	const sports = [
		{ icon: "mdi:soccer", name: "Football" },
		{ icon: "mdi:tennis", name: "Tennis" },
		{ icon: "mdi:basketball", name: "Basketball" },
		{ icon: "mdi:horse-variant", name: "Horse Racing" },
		{ icon: "mdi:hockey-sticks", name: "Hockey" },
		{ icon: "mdi:table-tennis", name: "Table Tennis" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStat((prev) => (prev + 1) % stats.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden'>
			{/* Animated Background Pattern */}
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-0 left-0 w-full h-full'>
					{[...Array(20)].map((_, i) => (
						<div
							key={i}
							className='absolute rounded-full bg-green-500'
							style={{
								width: `${Math.random() * 300 + 50}px`,
								height: `${Math.random() * 300 + 50}px`,
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								animation: `float ${
									Math.random() * 10 + 10
								}s ease-in-out infinite`,
								animationDelay: `${Math.random() * 5}s`,
							}}
						/>
					))}
				</div>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translate(0, 0);
					}
					50% {
						transform: translate(20px, 20px);
					}
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(-20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
				{/* Main Hero Content */}
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column - Main Content */}
					<div className='space-y-8'>
						{/* Badge */}
						<div className='inline-flex items-center gap-2 bg-green-600/20 border border-green-600 rounded-full px-4 py-2 backdrop-blur-sm'>
							<Icon
								icon='mdi:trophy'
								className='w-5 h-5 text-green-400'
							/>
							<span className='text-sm font-semibold text-green-400'>
								#1 Betting Tips Platform
							</span>
						</div>

						{/* Main Heading */}
						<div className='space-y-4'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
								Stay Ahead of the{" "}
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
									Bookies
								</span>
							</h1>
							<p className='text-xl text-gray-300 leading-relaxed max-w-2xl'>
								Expert predictions backed by advanced algorithms and
								in-depth analysis. Join thousands of winners who trust
								BigChidd for winning tips.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								href='/tips'
								className='group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-600/50 flex items-center justify-center gap-2'
							>
								View Today's Tips
								<Icon
									icon='mdi:arrow-right'
									className='w-5 h-5 group-hover:translate-x-1 transition-transform'
								/>
							</Link>
							<Link
								href='/'
								className='px-8 py-4 bg-transparent border-2 border-green-600 hover:bg-green-600/10 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2'
							>
								How It Works
								<Icon
									icon='mdi:information-outline'
									className='w-5 h-5'
								/>
							</Link>
						</div>

						{/* Trust Indicators */}
						<div className='flex flex-wrap gap-6 pt-4'>
							<div className='flex items-center gap-2'>
								<Icon
									icon='mdi:shield-check'
									className='w-6 h-6 text-green-400'
								/>
								<span className='text-sm text-gray-300'>
									Verified Tips
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Icon
									icon='mdi:clock-fast'
									className='w-6 h-6 text-green-400'
								/>
								<span className='text-sm text-gray-300'>
									Real-time Updates
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Icon
									icon='mdi:chart-line-variant'
									className='w-6 h-6 text-green-400'
								/>
								<span className='text-sm text-gray-300'>
									Data-Driven
								</span>
							</div>
						</div>
					</div>

					{/* Right Column - Stats & Sports */}
					<div className='space-y-6'>
						{/* Animated Stats Card */}
						<div className='bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur-xl rounded-2xl p-8 border border-green-600/30 shadow-2xl'>
							<div className='text-center space-y-4'>
								<Icon
									icon={stats[currentStat].icon}
									className='w-16 h-16 mx-auto text-green-400'
								/>
								<div className='space-y-2'>
									<h3 className='text-5xl font-bold text-green-400'>
										{stats[currentStat].number}
									</h3>
									<p className='text-xl text-gray-300'>
										{stats[currentStat].label}
									</p>
								</div>
							</div>

							{/* Progress Dots */}
							<div className='flex justify-center gap-2 mt-6'>
								{stats.map((_, index) => (
									<div
										key={index}
										className={`w-2 h-2 rounded-full transition-all duration-300 ${
											index === currentStat
												? "bg-green-400 w-8"
												: "bg-gray-600"
										}`}
									/>
								))}
							</div>
						</div>

						{/* Sports Grid */}
						<div className='bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700'>
							<h3 className='text-lg font-semibold mb-4 text-center text-gray-300'>
								Sports We Cover
							</h3>
							<div className='grid grid-cols-3 gap-4'>
								{sports.map((sport, index) => (
									<div
										key={sport.name}
										className='flex flex-col items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-green-600/20 hover:border-green-600 border border-transparent transition-all duration-300 cursor-pointer group'
										style={{
											animation: `slideIn 0.5s ease-out ${
												index * 0.1
											}s both`,
										}}
									>
										<Icon
											icon={sport.icon}
											className='w-8 h-8 text-green-400 group-hover:scale-110 transition-transform'
										/>
										<span className='text-xs text-gray-400 group-hover:text-green-400 transition-colors'>
											{sport.name}
										</span>
									</div>
								))}
							</div>
							<p className='text-center text-sm text-gray-500 mt-4'>
								+ 6 more sports
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Feature Strip */}
				<div className='mt-16 pt-8 border-t border-gray-800'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
						<div className='space-y-2'>
							<Icon
								icon='mdi:brain'
								className='w-8 h-8 mx-auto text-green-400'
							/>
							<p className='text-sm text-gray-400'>
								AI-Powered Analysis
							</p>
						</div>
						<div className='space-y-2'>
							<Icon
								icon='mdi:update'
								className='w-8 h-8 mx-auto text-green-400'
							/>
							<p className='text-sm text-gray-400'>Daily Updates</p>
						</div>
						<div className='space-y-2'>
							<Icon
								icon='mdi:account-supervisor'
								className='w-8 h-8 mx-auto text-green-400'
							/>
							<p className='text-sm text-gray-400'>Expert Team</p>
						</div>
						<div className='space-y-2'>
							<Icon
								icon='mdi:lock'
								className='w-8 h-8 mx-auto text-green-400'
							/>
							<p className='text-sm text-gray-400'>100% Secure</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
