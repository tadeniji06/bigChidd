"use client";
import { useEffect, useState } from "react";
import { sanity } from "@/utils/sanity";

const BestSix = () => {
	const [predictions, setPredictions] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBestSix = async () => {
			try {
				const data = await sanity.fetch(`
          *[_type == "bestSix"] | order(week desc)[0] {
            _id,
            week,
            "matches": picks[] {
              homeTeam,
              awayTeam,
              matchTime,
              odds
            }
          }
        `);

				if (data?.matches) {
					const formatted = data.matches.map(
						(match: any, index: number) => ({
							_id: `pre_${index}`,
							predictedWinner: "draw",
							odds: match.odds?.toFixed(2),
							comment: `Best 6 - Week ${data.week}`,
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
			} catch (error) {
				console.error("Failed to fetch best six:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchBestSix();
	}, []);

	if (loading)
		return (
			<div className='bg-black min-h-screen flex items-center justify-center'>
				<p className='text-green-400 animate-pulse'>
					Loading best six...
				</p>
			</div>
		);

	return (
		<div className='bg-black min-h-screen py-8 px-4'>
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold text-green-400 mb-2'>
					Best Six Predictions
				</h1>
				<p className='text-gray-400 text-sm'>
					Carefully selected draw predictions
				</p>
			</div>

			<div className='max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{predictions.map((prediction) => (
					<div
						key={prediction._id}
						className='bg-zinc-900 rounded-xl border-2 border-green-600 p-5 flex flex-col gap-4 hover:border-green-400 transition-colors'
					>
						<div className='text-center'>
							<p className='text-green-400 font-bold text-lg mb-1'>
								{prediction.match.homeTeam}
							</p>
							<p className='text-gray-500 text-sm mb-1'>vs</p>
							<p className='text-green-400 font-bold text-lg'>
								{prediction.match.awayTeam}
							</p>
						</div>

						<div className='bg-black rounded-lg p-3 text-center'>
							<p className='text-xs text-gray-400 mb-1'>Prediction</p>
							<p className='text-green-400 font-bold uppercase text-xl mb-2'>
								{prediction.predictedWinner}
							</p>
							<p className='text-gray-400 text-sm'>
								Odds:{" "}
								<span className='text-green-400 font-semibold'>
									{prediction.odds}
								</span>
							</p>
						</div>

						<p className='text-xs text-gray-500 text-center'>
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
					</div>
				))}
			</div>

			<div className='max-w-2xl mx-auto mt-12 text-center'>
				<div className='bg-zinc-900 border border-green-600 rounded-xl p-6'>
					<h3 className='text-green-400 font-bold text-lg mb-3'>
						About Best Six
					</h3>
					<p className='text-gray-400 text-sm leading-relaxed'>
						Our Best Six predictions are carefully analyzed matches
						with high draw probability. We consider form, head-to-head
						records, and tactical matchups to bring you the most
						reliable draw predictions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BestSix;
