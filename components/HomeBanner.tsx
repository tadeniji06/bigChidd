"use client";
import Image from "next/image";
import Link from "next/link";
import { onex } from "@/assets";

const HomeBanner = () => {
	return (
		<div className='w-full bg-zinc-950/50 backdrop-blur-sm border-b border-white/5'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
				<Link
					href='https://tinyurl.com/2pwya9wx'
					target='_blank'
					rel='noopener noreferrer'
					className='block relative w-full overflow-hidden rounded-2xl group shadow-2xl shadow-black/50 hover:shadow-green-900/20 transition-all duration-500 ring-1 ring-white/10 hover:ring-green-500/30'
				>
					{/* Main Image */}
					<Image
						src={onex}
						alt='Special Offer'
						className='w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]'
						priority
						sizes='(max-width: 1280px) 100vw, 1280px'
					/>

					{/* Shine Effect */}
					<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10 pointer-events-none' />

					{/* Overlay */}
					<div className='absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none' />
				</Link>
			</div>
		</div>
	);
};

export default HomeBanner;
