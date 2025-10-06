"use client";
import { useEffect, useState } from "react";
import { getAllMatches } from "@/utils/functions";
import Lazy from "./ui/Lazy";
import Image from "next/image";
import Head2HeadCard from "./Head2HeadCard";

const Fixtures = () => {
	const [fixtures, setFixtures] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedMatch, setSelectedMatch] = useState<number | null>(
		null
	);

	useEffect(() => {
		const getMatches = async () => {
			try {
				const res = await getAllMatches();
				setFixtures(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getMatches();
	}, []);

	if (loading) {
		return (
			<div className='bg-black min-h-screen py-6 px-4 text-green-400'>
				<h1 className='text-3xl font-bold text-center mb-8'>
					Loading Fixtures...
				</h1>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{Array.from({ length: 6 }).map((_, idx) => (
						<Lazy key={idx} />
					))}
				</div>
			</div>
		);
	}

	// Empty state
	if (!fixtures || fixtures.length === 0) {
		return (
			<div className='bg-black min-h-screen py-12 px-4 flex items-center justify-center'>
				<div className='text-center max-w-md'>
					<div className='mb-6'>
						<svg
							className='mx-auto h-24 w-24 text-green-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
					</div>
					<h2 className='text-2xl font-bold text-green-400 mb-3'>
						No Fixtures Available
					</h2>
					<p className='text-gray-400 mb-6'>
						There are currently no upcoming fixtures. Check back later
						for new matches!
					</p>
					<button
						onClick={() => window.location.reload()}
						className='bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg transition-colors'
					>
						Refresh Page
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-black min-h-screen py-6 px-4 text-green-400'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-8'>
					<h1 className='text-4xl font-bold mb-2'>
						Upcoming Fixtures
					</h1>
					<p className='text-gray-400 text-sm'>
						{fixtures.length}{" "}
						{fixtures.length === 1 ? "match" : "matches"} available
					</p>
				</div>

				{/* Fixtures Grid */}
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{fixtures.map((fixture) => (
						<div
							key={fixture.id}
							className='bg-zinc-900 rounded-2xl shadow-lg border-2 border-green-600 p-5 flex flex-col gap-4 hover:scale-[1.02] hover:shadow-green-600/50 transition-all cursor-pointer'
							onClick={() => setSelectedMatch(fixture.id)}
						>
							{/* Country/League Info */}
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									{fixture.area.flag && (
										<Image
											src={fixture.area.flag}
											alt={`${fixture.area.name} flag`}
											width={24}
											height={24}
											className='rounded-full'
										/>
									)}
									<p className='text-sm font-semibold text-green-400'>
										{fixture.area.name}
									</p>
								</div>
								<span className='text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full font-semibold'>
									{new Date(fixture.utcDate).toLocaleDateString(
										"en-GB",
										{
											weekday: "short",
											day: "2-digit",
											month: "short",
										}
									)}
								</span>
							</div>

							{/* Status Badge */}
							<div className='flex justify-center'>
								<span
									className={`text-xs font-bold px-3 py-1 rounded-full ${
										fixture.status === "FINISHED"
											? "bg-green-900 text-green-400"
											: fixture.status === "IN_PLAY"
											? "bg-red-900 text-red-400 animate-pulse"
											: "bg-yellow-900 text-yellow-400"
									}`}
								>
									{fixture.status === "FINISHED"
										? "FINISHED"
										: fixture.status === "IN_PLAY"
										? "LIVE"
										: "SCHEDULED"}
								</span>
							</div>

							{/* Teams */}
							<div className='flex justify-between items-center py-2'>
								<div className='flex flex-col items-center gap-2 flex-1'>
									{fixture.homeTeam.crest && (
										<div className='w-12 h-12 flex items-center justify-center'>
											<Image
												src={fixture.homeTeam.crest}
												alt={fixture.homeTeam.name}
												width={48}
												height={48}
												className='object-contain'
											/>
										</div>
									)}
									<p className='text-sm text-center font-medium'>
										{fixture.homeTeam.name}
									</p>
								</div>

								<div className='px-4'>
									{fixture.status === "FINISHED" &&
									fixture.score?.fullTime ? (
										<div className='text-center'>
											<p className='text-2xl font-bold text-green-400'>
												{fixture.score.fullTime.home} -{" "}
												{fixture.score.fullTime.away}
											</p>
										</div>
									) : (
										<span className='text-lg font-bold text-gray-500'>
											VS
										</span>
									)}
								</div>

								<div className='flex flex-col items-center gap-2 flex-1'>
									{fixture.awayTeam.crest && (
										<div className='w-12 h-12 flex items-center justify-center'>
											<Image
												src={fixture.awayTeam.crest}
												alt={fixture.awayTeam.name}
												width={48}
												height={48}
												className='object-contain'
											/>
										</div>
									)}
									<p className='text-sm text-center font-medium'>
										{fixture.awayTeam.name}
									</p>
								</div>
							</div>

							{/* Time */}
							<div className='text-center pt-2 border-t border-gray-700'>
								<p className='text-sm text-gray-400'>
									⏰{" "}
									{new Date(fixture.utcDate).toLocaleTimeString(
										"en-GB",
										{
											hour: "2-digit",
											minute: "2-digit",
										}
									)}
								</p>
							</div>

							{/* Click hint */}
							<p className='text-xs text-center text-gray-500 italic'>
								👆 Click for head-to-head stats
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Head to Head Modal */}
			{selectedMatch && (
				<Head2HeadCard
					matchId={selectedMatch}
					onClose={() => setSelectedMatch(null)}
				/>
			)}
		</div>
	);
};

export default Fixtures;
