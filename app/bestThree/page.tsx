const BestSix = () => {
	const predictions = [
		{
			_id: "pre_1",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Nogoom FC",
				awayTeam: "Eastern Company SC",
				utcDate: "2025-10-07T13:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pre_2",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Mes Sahr-e Babak",
				awayTeam: "Sanat Mes Kerman FC",
				utcDate: "2025-10-07T14:15:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pre_3",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Ario Eslamshalr",
				awayTeam: "Sanat Naft Abadan FC",
				utcDate: "2025-10-07T14:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pre_4",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Defensor Sporting",
				awayTeam: "Liverpool Monteviedo",
				utcDate: "2025-10-05T14:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pre_5",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Naft gachsaran",
				awayTeam: "Palayesh Naft Abbas FC",
				utcDate: "2025-10-07T14:30:00Z",
				status: "PENDING",
				finalResult: null,
			},
		},
		{
			_id: "pre_6",
			predictedWinner: "draw",
			odds: 2.95,
			comment: "Multiple Draw Accumulator",
			match: {
				homeTeam: "Monteviedo Wanderers",
				awayTeam: "Nacional de Monteviedo",
				utcDate: "2025-10-07T19:00:00Z",
				status: "PENDING",
				finalResult: null,
			},
			// isCorrect: true,
		},
	];

	return (
		<div className='bg-black min-h-screen py-8 px-4'>
			{/* Header */}
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold text-green-400 mb-2'>
					Best Six Predictions
				</h1>
				<p className='text-gray-400 text-sm'>
					Carefully selected draw predictions
				</p>
			</div>

			{/* Predictions Grid */}
			<div className='max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{predictions.map((prediction, index) => (
					<div
						key={prediction._id}
						className='bg-zinc-900 rounded-xl border-2 border-green-600 p-5 flex flex-col gap-4 hover:border-green-400 transition-colors'
					>
						{/* Number Badge */}
						{/* <div className='flex justify-between items-center'>
							<span className='bg-green-600 text-black font-bold text-xs px-3 py-1 rounded-full'>
								#{index + 1}
							</span>
							<span
								className={`text-xs font-semibold px-2 py-1 rounded ${
									prediction.match.status === "PENDING"
										? "bg-yellow-900 text-yellow-400"
										: "bg-green-900 text-green-400"
								}`}
							>
								{prediction.match.status}
							</span>
						</div> */}

						{/* Teams */}
						<div className='text-center'>
							<p className='text-green-400 font-bold text-lg mb-1'>
								{prediction.match.homeTeam}
							</p>
							<p className='text-gray-500 text-sm mb-1'>vs</p>
							<p className='text-green-400 font-bold text-lg'>
								{prediction.match.awayTeam}
							</p>
						</div>

						{/* Prediction Info */}
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

						{/* Date */}
						<p className='text-xs text-gray-500 text-center'>
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

						{/* Result (if finished) */}
						{prediction.match.status === "FINISHED" &&
							prediction.match.finalResult && (
								<div className='mt-2 pt-3 border-t border-gray-700'>
									<p className='text-xs text-gray-400 text-center mb-1'>
										Final Score
									</p>
									{/* <p className='font-bold text-green-400 text-3xl text-center mb-2'>
										{prediction.match.finalResult.homeGoals} -{" "}
										{prediction.match.finalResult.awayGoals}
									</p> */}
									{/* {prediction.isCorrect !== undefined && (
										<div className='text-center'>
											<span
												className={`inline-block px-4 py-2 rounded-lg font-bold text-sm ${
													prediction.isCorrect
														? "bg-green-600 text-black"
														: "bg-red-600 text-white"
												}`}
											>
												{prediction.isCorrect ? "✅ WIN" : "❌ LOST"}
											</span>
										</div>
									)} */}
								</div>
							)}
					</div>
				))}
			</div>

			{/* Footer Info */}
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
