"use client";
import { useEffect, useState } from "react";
import { sanity } from "@/utils/sanity";

const Predictions = () => {
	const [predictions, setPredictions] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPredictions = async () => {
			try {
				const data = await sanity.fetch(`
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
					const formatted = data.matches.map(
						(match: any, index: number) => ({
							_id: `pred_${index}`,
							predictedWinner: "draw",
							odds: match.odds?.toFixed(2),
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
			} catch (error) {
				console.error("Failed to fetch predictions:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPredictions();
	}, []);

	if (loading)
		return (
			<div className='bg-black min-h-screen flex items-center justify-center'>
				<p className='text-green-400 animate-pulse'>
					Loading predictions...
				</p>
			</div>
		);

	return (
		<div className='bg-black min-h-screen py-6 px-4'>
			<h1 className='text-3xl font-bold text-green-400 mb-8 text-center'>
				Football Predictions
			</h1>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{predictions.map((prediction) => (
					<div
						key={prediction._id}
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
					</div>
				))}
			</div>
		</div>
	);
};

export default Predictions;
