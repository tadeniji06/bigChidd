// Codes.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { ft } from "@/assets";
import FlyerBanner from "@/components/ui/FlyerBanner";
import { ref_link } from "@/utils/data";
import { motion } from "framer-motion";

type Bookie = "1xBet" | "SportyBet";
type Toast = string | null;

const allCodes: Record<string, Record<Bookie, string[]>> = {
	Football: {
		"1xBet": ["3ZURB"],
		SportyBet: ["QFUWZ8"],
	},
	Tennis: {
		"1xBet": ["No Codes Available"],
		SportyBet: ["No Codes Available"],
	},
	Basketball: {
		"1xBet": ["No Codes Available"],
		SportyBet: ["No Codes Available"],
	},
	"Table Tennis": {
		"1xBet": ["No Codes Available"],
		SportyBet: ["No Codes Available"],
	},
};

export default function Codes(): React.ReactElement {
	const params = useSearchParams();
	const sport = (params?.get("type") as string) || "Football";
	const [activeBookie, setActiveBookie] = useState<Bookie>("1xBet");
	const [toast, setToast] = useState<Toast>(null);

	const betCodes = allCodes[sport] ?? allCodes["Football"];

	const copyCode = async (code: string) => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(code);
			} else {
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
		} catch {
			setToast("Failed to copy 😞");
		}
	};

	useEffect(() => {
		if (!toast) return;
		const timer = setTimeout(() => setToast(null), 2000);
		return () => clearTimeout(timer);
	}, [toast]);

	return (
		<div className='relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-12'>
			{toast && (
				<div className='fixed top-16 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50'>
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

				<FlyerBanner img={ft} link={ref_link} />

				<div className='flex justify-center gap-4 mb-8'>
					{(["1xBet", "SportyBet"] as Bookie[]).map((bookie) => (
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

				<div className='grid gap-4'>
					{betCodes[activeBookie].map((code, i) => (
						<motion.div
							key={`${code}-${i}`}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.25, delay: i * 0.03 }}
							className='flex justify-between items-center bg-gray-800/60 border border-gray-700 hover:border-green-600 rounded-xl p-4 transition-all select-none'
						>
							<p className='text-lg font-semibold text-green-400'>
								{code}
							</p>

							<div className='flex items-center gap-3'>
								<button
									onClick={() => copyCode(code)}
									className='p-2 rounded-lg bg-green-600 hover:bg-green-700 transition'
									aria-label={`Copy code ${code}`}
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
									rel='noreferrer'
									className='p-2 rounded-lg bg-gray-700 hover:bg-green-700 transition'
								>
									<Icon icon='mdi:open-in-new' className='w-5 h-5' />
								</a>
							</div>
						</motion.div>
					))}
				</div>

				<p className='text-sm text-gray-500 mt-8'>
					More {sport.toLowerCase()} codes are updated hourly. Check
					back soon.
				</p>
			</div>
		</div>
	);
}
