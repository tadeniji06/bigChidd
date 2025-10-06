"use client";
import { useState } from "react";

const Predictions = () => {
	const [predictions] = useState([
		{
			_id: "pred_001",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Libertad",
				awayTeam: "Trinidense",
				utcDate: "2025-10-06T00:00:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_002",
			predictedWinner: "draw",
			odds: 3.2,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Veraguas",
				awayTeam: "Plaza Amador",
				utcDate: "2025-10-05T00:15:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_003",
			predictedWinner: "draw",
			odds: 3.4,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Rosario Central",
				awayTeam: "River Plate",
				utcDate: "2025-10-06T01:15:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_004",
			predictedWinner: "draw",
			odds: 2.3,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Pumas",
				awayTeam: "Guadalajara",
				utcDate: "2025-10-06T052:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		// {
		// 	_id: "pred_005",
		// 	predictedWinner: "draw",
		// 	odds: 2.85,
		// 	comment: "Multiple Draw Accumulator",
		// 	match: {
		// 		homeTeam: "Real Espana",
		// 		awayTeam: "Platenese",
		// 		utcDate: "2025-10-06T02:30:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		{
			_id: "pred_006",
			predictedWinner: "draw",
			odds: 3.25,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Tijuana",
				awayTeam: "Monterrey",
				utcDate: "2025-10-06T04:05:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_007",
			predictedWinner: "draw",
			odds: 3.0,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "FC Fard",
				awayTeam: "Shahrdari Nowshahr",
				utcDate: "2025-10-06T14:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
			// isCorrect: true,
		},
		{
			_id: "pred_008",
			predictedWinner: "draw",
			odds: 3.1,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Shenavar Sazi Qeshm",
				awayTeam: "Navad Urmia",
				utcDate: "2025-10-06T16:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_009",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "KAMAZ",
				awayTeam: "Ural",
				utcDate: "2025-10-06T17:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_010",
			predictedWinner: "draw",
			odds: 2.65,
			comment: "Second Betting Slip",
			match: {
				homeTeam: "FC Botosani",
				awayTeam: "UTA Arad",
				utcDate: "2025-10-06T18:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pred_011",
			predictedWinner: "draw",
			odds: 2.65,
			comment: "Second Betting Slip",
			match: {
				homeTeam: "Dep. Riestra",
				awayTeam: "Velez Sarsfield",
				utcDate: "2025-10-05T18:00:00Z",
				status: "PENDING",
				finalResult: null,
			},
			// isCorrect: false,
		},

		//  stop
		// {
		// 	_id: "pred_012",
		// 	predictedWinner: "draw",
		// 	odds: 3.3,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "FK Sutjeska Niksic",
		// 		awayTeam: "FK Buducnost",
		// 		utcDate: "2025-10-05T16:00:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_013",
		// 	predictedWinner: "draw",
		// 	odds: 3.4,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "Gornik Zabrze",
		// 		awayTeam: "Legia Warszawa",
		// 		utcDate: "2025-10-05T17:30:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_014",
		// 	predictedWinner: "draw",
		// 	odds: 3.75,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "Copenhagen",
		// 		awayTeam: "FC Midtjylland",
		// 		utcDate: "2025-10-05T18:00:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_015",
		// 	predictedWinner: "draw",
		// 	odds: 3.7,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "AD Fafe",
		// 		awayTeam: "SC Sao Joao de Ver",
		// 		utcDate: "2025-10-05T16:30:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_016",
		// 	predictedWinner: "draw",
		// 	odds: 3.2,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "FK Tekstilac Odzaci",
		// 		awayTeam: "Gfk Dubocica",
		// 		utcDate: "2025-10-05T14:00:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_017",
		// 	predictedWinner: "draw",
		// 	odds: 3.4,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "FK Vardar Skopje",
		// 		awayTeam: "FC Struga Trim Lum",
		// 		utcDate: "2025-10-05T15:00:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// },
		// {
		// 	_id: "pred_018",
		// 	predictedWinner: "draw",
		// 	odds: 3.0,
		// 	comment: "Second Betting Slip",
		// 	match: {
		// 		homeTeam: "FK Jezero Plav",
		// 		awayTeam: "OFK Petrovac",
		// 		utcDate: "2025-10-05T14:00:00Z",
		// 		status: "PENDING",
		// 		finalResult: null,
		// 	},
		// 	isCorrect: true,
		// },
	]);

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
						{/* Teams */}
						<div className='flex justify-between items-center'>
							<span className='text-sm font-medium text-green-400'>
								{prediction.match.homeTeam}
							</span>
							<span className='text-xs text-gray-400'>vs</span>
							<span className='text-sm font-medium text-green-400'>
								{prediction.match.awayTeam}
							</span>
						</div>

						{/* Date */}
						<p className='text-xs text-gray-400 text-center'>
							{new Date(prediction.match.utcDate).toLocaleString(
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
							<p className='text-sm text-gray-400'>Predicted:</p>
							<p className='font-bold text-green-400 uppercase text-lg'>
								{prediction.predictedWinner}
							</p>
							<p className='text-sm text-gray-400 mt-1'>
								Odds: {prediction.odds}
							</p>
						</div>

						{/* Comment */}
						{/* {prediction.comment && (
							<p className='text-xs italic text-gray-400 text-center'>
								"{prediction.comment}"
							</p>
						)} */}

						{/* Status Badge */}
						{/* <div className='flex justify-center mt-2'>
							<span
								className={`px-3 py-1 rounded-full text-xs font-semibold ${
									prediction.match.status === "PENDING"
										? "bg-yellow-900 text-yellow-400"
										: "bg-green-900 text-green-400"
								}`}
							>
								{prediction.match.status}
							</span>
						</div> */}

						{/* Result (if finished) */}
						{prediction.match.status === "FINISHED" &&
							prediction.match.finalResult && (
								<div className='mt-2 pt-3 border-t border-gray-700 text-center'>
									<p className='text-xs text-gray-400'>
										Final Score:
									</p>
									{/* <p className='font-bold text-green-400 text-2xl my-1'>
										{prediction.match.finalResult.homeGoals} -{" "}
										{prediction.match.finalResult.awayGoals}
									</p> */}
									{/* {prediction.isCorrect !== undefined && (
										<p
											className={`text-sm font-semibold mt-2 ${
												prediction.isCorrect
													? "text-green-400"
													: "text-red-400"
											}`}
										>
											{prediction.isCorrect ? "✅ WIN" : "❌ LOST"}
										</p>
									)} */}
								</div>
							)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Predictions;
