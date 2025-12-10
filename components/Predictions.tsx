// Predictions.tsx
"use client";

import React, { useEffect, useState } from "react";
import { bcdt } from "@/assets";
import { sanity } from "@/utils/sanity";
import FlyerBanner from "@/components/ui/FlyerBanner";
import { ref_link } from "@/utils/data";
import { motion } from "framer-motion";

interface MatchRaw {
	homeTeam: string;
	awayTeam: string;
	matchTime: string;
	odds?: number | string | null;
}

interface FetchedAllTips {
	_id?: string;
	week?: number | string;
	matches?: MatchRaw[];
}

interface Prediction {
	_id: string;
	predictedWinner: string;
	odds?: string | null;
	comment?: string;
	match: {
		homeTeam: string;
		awayTeam: string;
		utcDate: string;
		status: string;
		finalResult: any;
	};
}

export default function Predictions(): React.ReactElement {
	const [predictions, setPredictions] = useState<Prediction[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchPredictions = async () => {
			try {
				const data: FetchedAllTips | null = await sanity.fetch(`
          *[_type == "allTips"] | order(week desc)[0] {
            _id,
            week,
            "matches": tips[] {
              homeTeam,
              awayTeam,
              matchTime,
              odds
            }
          }
        `);

				if (data?.matches) {
					const formatted: Prediction[] = data.matches.map(
						(match, index) => ({
							_id: `pred_${index}`,
							predictedWinner: "draw",
							odds:
								match.odds != null
									? String(Number(match.odds).toFixed(2))
									: null,
							comment: `Multiple Draw Accumulator - Week ${data.week}`,
							match: {
								homeTeam: match.homeTeam,
								awayTeam: match.awayTeam,
								utcDate: match.matchTime,
								status: "PENDING",
								finalResult: null,
							},
						})
					);
					setPredictions(formatted);
				}
			} catch {
				// noop
			} finally {
				setLoading(false);
			}
		};

		fetchPredictions();
	}, []);

	if (loading) {
		return (
			<div className='bg-black min-h-screen flex items-center justify-center'>
				<p className='text-green-400 animate-pulse'>
					Loading predictions...
				</p>
			</div>
		);
	}

	return (
		<div className='bg-black min-h-screen py-6 px-4'>
			<h1 className='text-3xl font-bold text-green-400 mb-4 text-center'>
				Football Predictions
			</h1>

			<FlyerBanner img={bcdt} link={ref_link} />

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4'>
				{predictions.map((prediction, idx) => (
					<motion.div
						key={prediction._id}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: idx * 0.03 }}
						whileHover={{ scale: 1.01 }}
						className='bg-zinc-900 rounded-2xl shadow-lg border border-green-600 p-4 flex flex-col gap-3'
					>
						<div className='flex justify-between items-center'>
							<span className='text-sm font-medium text-green-400'>
								{prediction.match.homeTeam}
							</span>
							<span className='text-xs text-gray-400'>vs</span>
							<span className='text-sm font-medium text-green-400'>
								{prediction.match.awayTeam}
							</span>
						</div>

						<p className='text-xs text-gray-400 text-center'>
							{new Date(prediction.match.utcDate).toLocaleString(
								"en-GB",
								{
									weekday: "short",
									day: "2-digit",
									month: "short",
									hour: "2-digit",
									minute: "2-digit",
									timeZone: "UTC",
								}
							)}{" "}
							UTC
						</p>

						<div className='text-center'>
							<p className='text-sm text-gray-400'>Predicted:</p>
							<p className='font-bold text-green-400 uppercase text-lg'>
								{prediction.predictedWinner}
							</p>
							<p className='text-sm text-gray-400 mt-1'>
								Odds: {prediction.odds}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
