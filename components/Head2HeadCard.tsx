"use client";
import { useEffect, useState } from "react";
import { getHead2Head } from "@/utils/functions";

type Head2HeadData = {
	numberOfMatches?: number;
	totalGoals?: number;
	homeTeam?: {
		id: number;
		name: string;
		wins: number;
		draws: number;
		losses: number;
	};
	awayTeam?: {
		id: number;
		name: string;
		wins: number;
		draws: number;
		losses: number;
	};
	aggregates?: {
		numberOfMatches: number;
		totalGoals: number;
		homeTeam: {
			id: number;
			name: string;
			wins: number;
			draws: number;
			losses: number;
		};
		awayTeam: {
			id: number;
			name: string;
			wins: number;
			draws: number;
			losses: number;
		};
	};
};

interface Head2HeadCardProps {
	matchId: number;
	onClose: () => void;
}

const Head2HeadCard = ({ matchId, onClose }: Head2HeadCardProps) => {
	const [h2h, setH2h] = useState<Head2HeadData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchH2h = async () => {
			try {
				const res = await getHead2Head(matchId);
				setH2h(res);
			} catch (err) {
				console.error("Failed to fetch H2H:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchH2h();
	}, [matchId]);

	const aggregates = h2h?.aggregates ?? h2h;

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/80 z-50 px-4'>
			<div className='bg-zinc-900 rounded-2xl shadow-lg border border-green-600 w-full max-w-md p-6 relative text-green-400'>
				{/* Close button */}
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-gray-400 hover:text-green-400'
				>
					✕
				</button>

				<h2 className='text-xl font-bold text-center mb-4'>
					Head to Head Stats
				</h2>
				<p className='text-xs text-gray-400 text-center mb-6'>
					*Click on a fixture to see Head-to-Head history
				</p>

				{loading ? (
					<p className='text-center text-gray-400'>Loading...</p>
				) : !aggregates ? (
					<p className='text-center text-gray-400'>
						No data available
					</p>
				) : (
					<div className='space-y-4 text-sm text-gray-300'>
						<div className='flex justify-between'>
							<span>Matches Played</span>
							<span className='text-green-400'>
								{aggregates.numberOfMatches}
							</span>
						</div>
						<div className='flex justify-between'>
							<span>Total Goals</span>
							<span className='text-green-400'>
								{aggregates.totalGoals}
							</span>
						</div>

						{/* Home Team */}
						<div className='flex flex-col gap-1'>
							<p className='font-semibold text-green-400'>
								{aggregates.homeTeam?.name}
							</p>
							<p>Wins: {aggregates.homeTeam?.wins}</p>
							<p>Draws: {aggregates.homeTeam?.draws}</p>
							<p>Losses: {aggregates.homeTeam?.losses}</p>
						</div>

						{/* Away Team */}
						<div className='flex flex-col gap-1'>
							<p className='font-semibold text-green-400'>
								{aggregates.awayTeam?.name}
							</p>
							<p>Wins: {aggregates.awayTeam?.wins}</p>
							<p>Draws: {aggregates.awayTeam?.draws}</p>
							<p>Losses: {aggregates.awayTeam?.losses}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Head2HeadCard;
