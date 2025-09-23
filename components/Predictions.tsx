"use client";
import { useEffect, useState } from "react";
import { getPredictions } from "@/utils/functions";

type Prediction = {
	_id: string;
	predictedWinner: "home" | "away" | "draw";
	comment?: string;
	isCorrect?: boolean;
	match?: {
		_id: string;
		homeTeam: string;
		awayTeam: string;
		utcDate: string;
		status: string;
		finalResult?: {
			homeGoals?: number;
			awayGoals?: number;
			outcome?: "home" | "away" | "draw";
		};
	};
};

const Predictions = () => {
	const [predictions, setPredictions] = useState<Prediction[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPredictions();
			setPredictions(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<div className='bg-black min-h-screen flex items-center justify-center text-green-400'>
				Loading predictions...
			</div>
		);
	}

	return (
		<div className='bg-black min-h-screen py-6 px-4 text-green-400'>
			<h1 className='text-2xl font-bold text-center mb-6'>
				Predictions
			</h1>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{predictions.map((prediction) => (
					<div
						key={prediction._id}
						className='bg-zinc-900 rounded-2xl shadow-lg border border-green-600 p-4 flex flex-col gap-3'
					>
						{/* Teams */}
						<div className='flex justify-between items-center'>
							<span className='text-sm font-medium'>
								{prediction.match?.homeTeam}
							</span>
							<span className='text-xs text-gray-400'>vs</span>
							<span className='text-sm font-medium'>
								{prediction.match?.awayTeam}
							</span>
						</div>

						{/* Date */}
						<p className='text-xs text-gray-400 text-center'>
							{prediction.match?.utcDate &&
								new Date(prediction.match.utcDate).toLocaleString(
									"en-GB",
									{
										weekday: "short",
										day: "2-digit",
										month: "short",
										hour: "2-digit",
										minute: "2-digit",
									}
								)}
						</p>

						{/* Prediction */}
						<div className='text-center'>
							<p className='text-sm'>Predicted:</p>
							<p className='font-bold text-green-400 uppercase'>
								{prediction.predictedWinner}
							</p>
						</div>

						{/* Comment */}
						{prediction.comment && (
							<p className='text-xs italic text-gray-400'>
								“{prediction.comment}”
							</p>
						)}

						{/* Status / Result */}
						{prediction.match?.status === "FINISHED" && (
							<div className='mt-2 text-center'>
								<p className='text-xs'>Final Score:</p>
								<p className='font-bold text-green-400'>
									{prediction.match.finalResult?.homeGoals ?? "-"} -{" "}
									{prediction.match.finalResult?.awayGoals ?? "-"}
								</p>
								{prediction.isCorrect !== undefined && (
									<p
										className={`text-xs font-semibold mt-1 ${
											prediction.isCorrect
												? "text-green-400"
												: "text-red-400"
										}`}
									>
										{prediction.isCorrect ? "✅ Correct" : "❌ Wrong"}
									</p>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Predictions;
