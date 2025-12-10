"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { bchome } from "@/assets"; // your flyer image
import { ref_link } from "@/utils/data";

const HomePopup = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// Check first time user
		const hasSeen = localStorage.getItem("bc_popup_seen");

		if (!hasSeen) {
			setOpen(true);
			localStorage.setItem("bc_popup_seen", "true");
			return;
		}

		// Regular interval popup
		const interval = setInterval(() => {
			setOpen(true);
		}, 90 * 500);

		return () => clearInterval(interval);
	}, []);

	const closePopup = () => {
		setOpen(false);
	};

	if (!open) return null;

	return (
		<div className='fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center px-4 animate-fadeIn'>
			<div className='relative bg-gradient-to-br from-gray-900 to-black border border-green-600/40 p-4 rounded-2xl shadow-2xl w-full max-w-sm scale-100 animate-popup'>
				{/* CLOSE BUTTON */}
				<button
					onClick={closePopup}
					className='absolute top-2 right-2 text-gray-300 hover:text-white transition text-xl'
				>
					&times;
				</button>

				{/* IMAGE + REF LINK WRAPPER */}
				<Link href={ref_link} target='_blank' onClick={closePopup}>
					<Image
						src={bchome}
						alt='Promo Flyer'
						className='rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-xl'
					/>
				</Link>

				{/* CALL TO ACTION */}
				<div className='mt-4 text-center space-y-2'>
					<h2 className='text-lg font-bold text-green-400 tracking-wide'>
						LIMITED-TIME PROMO
					</h2>

					<p className='text-gray-300 text-sm'>
						Tap the flyer to claim your bonus after signup.
					</p>

					<Link
						href={ref_link}
						target='_blank'
						className='block mt-3 bg-green-600 hover:bg-green-700 text-black font-semibold py-2 rounded-lg transition-all shadow-green-500/20 hover:shadow-lg'
						onClick={closePopup}
					>
						Claim Offer
					</Link>
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				@keyframes popup {
					0% {
						transform: scale(0.8);
						opacity: 0;
					}
					100% {
						transform: scale(1);
						opacity: 1;
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out forwards;
				}
				.animate-popup {
					animation: popup 0.35s ease-out forwards;
				}
			`}</style>
		</div>
	);
};

export default HomePopup;
