"use client";
import Image from "next/image";
import { win1 } from "@/assets";
import { Icon } from "@iconify/react";

const Winnings = () => {
	return (
		<div className='relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 overflow-hidden'>
			{/* Floating background blobs */}
			<div className='absolute inset-0 opacity-10'>
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className='absolute rounded-full bg-green-500'
						style={{
							width: `${Math.random() * 250 + 80}px`,
							height: `${Math.random() * 250 + 80}px`,
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
			`}</style>

			<div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h1 className='text-5xl font-bold'>
						Recent{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
							Winnings
						</span>
					</h1>
					<p className='mt-3 text-gray-300 max-w-xl mx-auto'>
						A glimpse of some verified slips from the community.
					</p>
				</div>

				{/* Winning Card */}
				<div className='bg-gradient-to-br from-gray-900/50 to-gray-800/20 backdrop-blur-xl border border-green-600/20 rounded-2xl p-6 shadow-xl'>
					<div className='grid md:grid-cols-2 gap-10 items-center'>
						{/* Image */}
						<div className='relative rounded-xl overflow-hidden border border-gray-700'>
							<Image
								src={win1}
								alt='Winning Ticket'
								className='object-cover w-full h-full'
							/>
						</div>

						{/* Right side */}
						<div className='space-y-6'>
							{/* Simple Details */}
							<div className='space-y-4 text-gray-300'>
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:soccer'
										className='w-6 h-6 text-green-400'
									/>
									<p>7-game accumulator</p>
								</div>

								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:check-decagram'
										className='w-6 h-6 text-green-400'
									/>
									<p>Verified winning slip</p>
								</div>
							</div>

							{/* Simple CTA */}
							<button className='mt-4 px-6 py-3 bg-green-600/80 hover:bg-green-600 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2'>
								View More Winnings
								<Icon icon='mdi:arrow-right' className='w-5 h-5' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Winnings;
