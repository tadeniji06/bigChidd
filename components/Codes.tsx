"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Codes = () => {
	const params = useSearchParams();
	const sport = params.get("type") || "Football";
	const [activeBookie, setActiveBookie] = useState("1xBet");
	const [toast, setToast] = useState(null);

	// 🧩 All unique codes by sport + bookie
	const allCodes = {
		Football: {
			"1xBet": ["SV3AL"],
			SportyBet: ["N7L91N"],
		},
		Tennis: {
			"1xBet": ["No Codes Available"],
			SportyBet: ["No Codes Available"],
		},
		Basketball: {
			"1xBet": ["No	Codes Available"],
			SportyBet: ["No Codes Available"],
		},
		"Table Tennis": {
			"1xBet": ["No Codes Available"],
			SportyBet: ["No Codes Available"],
		},
	};

	const betCodes = allCodes[sport] || allCodes["Football"];

	const copyCode = async (code) => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(code);
			} else {
				// Fallback for iOS/Safari
				const textArea = document.createElement("textarea");
				textArea.value = code;
				textArea.style.position = "fixed";
				textArea.style.left = "-9999px";
				textArea.style.top = "-9999px";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				document.execCommand("copy");
				document.body.removeChild(textArea);
			}
			setToast(`Copied ${code} ✅`);
		} catch (error) {
			console.error("Copy failed:", error);
			setToast("Failed to copy 😞");
		}
	};

	useEffect(() => {
		if (toast) {
			const timer = setTimeout(() => setToast(null), 2000);
			return () => clearTimeout(timer);
		}
	}, [toast]);

	return (
		<div className='relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-12'>
			{/* Toast Notification */}
			{toast && (
				<div className='fixed top-16 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-fadeIn z-50'>
					{toast}
				</div>
			)}

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out;
				}
			`}</style>

			<div className='max-w-3xl mx-auto text-center'>
				<h1 className='text-3xl md:text-4xl font-bold mb-6'>
					{sport} Bet Codes
				</h1>

				{/* Bookie Toggle */}
				<div className='flex justify-center gap-4 mb-8'>
					{["1xBet", "SportyBet"].map((bookie) => (
						<button
							key={bookie}
							onClick={() => setActiveBookie(bookie)}
							className={`px-6 py-2 rounded-full font-semibold border transition-all ${
								activeBookie === bookie
									? "bg-green-600 border-green-600"
									: "bg-transparent border-gray-700 hover:border-green-600"
							}`}
						>
							{bookie}
						</button>
					))}
				</div>

				{/* Bet Codes List */}
				<div className='grid gap-4'>
					{betCodes[activeBookie].map((code, i) => (
						<div
							key={i}
							className='flex justify-between items-center bg-gray-800/60 border border-gray-700 hover:border-green-600 rounded-xl p-4 transition-all select-none'
						>
							<p className='text-lg font-semibold text-green-400'>
								{code}
							</p>

							<div className='flex items-center gap-3'>
								<button
									onClick={() => copyCode(code)}
									className='p-2 rounded-lg bg-green-600 hover:bg-green-700 transition'
								>
									<Icon icon='mdi:content-copy' className='w-5 h-5' />
								</button>
								<a
									href={
										activeBookie === "1xBet"
											? "https://1xbet.com"
											: "https://sportybet.com"
									}
									target='_blank'
									rel='noopener noreferrer'
									className='p-2 rounded-lg bg-gray-700 hover:bg-green-700 transition'
								>
									<Icon icon='mdi:open-in-new' className='w-5 h-5' />
								</a>
							</div>
						</div>
					))}
				</div>

				<p className='text-sm text-gray-500 mt-8'>
					More {sport.toLowerCase()} codes are updated hourly. Check
					back soon.
				</p>
			</div>
		</div>
	);
};

export default Codes;
