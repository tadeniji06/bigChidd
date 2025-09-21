"use client";
import { useEffect, useState } from "react";
import { getAllMatches } from "@/utils/functions";
import Lazy from "./ui/Lazy";
import Image from "next/image";

type Team = {
	id: number;
	name: string;
	crest?: string;
};

type Area = {
	id: number;
	name: string;
	flag?: string;
};

type Fixture = {
	id: number;
	utcDate: string;
	area: Area;
	homeTeam: Team;
	awayTeam: Team;
};

const Fixtures = () => {
	const [fixtures, setFixtures] = useState<Fixture[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true; // avoid state updates if unmounted
		const getMatches = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await getAllMatches(); // must return Fixture[] array
				if (!mounted) return;
				setFixtures(res || []);
			} catch (err: any) {
				console.error(err);
				if (mounted)
					setError(err?.message || "Failed to fetch matches");
			} finally {
				if (mounted) setLoading(false);
			}
		};

		getMatches();

		return () => {
			mounted = false;
		};
	}, []);

	// Number of skeleton cards to render on mobile view
	const skeletonCount = Array.from({ length: 6 });

	return (
		<div className='bg-black min-h-screen py-6 px-4 text-green-400'>
			<h1 className='text-2xl font-bold text-center mb-6'>
				Upcoming Fixtures
			</h1>

			{error && (
				<div className='text-center text-red-400 mb-4'>
					Oops — {error}. Check server or token.
				</div>
			)}

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{loading
					? skeletonCount.map((_, i) => <Lazy key={i} />)
					: fixtures.map((fixture) => (
							<div
								key={fixture.id}
								className='bg-zinc-900 rounded-2xl shadow-lg border border-green-600 p-4 flex flex-col gap-4 hover:scale-[1.02] transition-transform'
							>
								{/* Country/League Info */}
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-2'>
										{fixture.area.flag ? (
											<Image
												src={fixture.area.flag}
												alt={`${fixture.area.name} flag`}
												width={24}
												height={24}
												className='rounded-full'
											/>
										) : (
											<div className='w-6 h-6 rounded-full bg-zinc-800' />
										)}
										<p className='text-sm font-medium'>
											{fixture.area.name}
										</p>
									</div>
									<span className='text-xs text-gray-400'>
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

								{/* Teams */}
								<div className='flex justify-between items-center'>
									<div className='flex flex-col items-center gap-2 flex-1'>
										{fixture.homeTeam.crest ? (
											<Image
												src={fixture.homeTeam.crest}
												alt={fixture.homeTeam.name}
												width={40}
												height={40}
											/>
										) : (
											<div className='w-10 h-10 rounded-full bg-zinc-800' />
										)}
										<p className='text-sm text-center'>
											{fixture.homeTeam.name}
										</p>
									</div>

									<span className='text-xs font-bold text-gray-300 px-2'>
										VS
									</span>

									<div className='flex flex-col items-center gap-2 flex-1'>
										{fixture.awayTeam.crest ? (
											<Image
												src={fixture.awayTeam.crest}
												alt={fixture.awayTeam.name}
												width={40}
												height={40}
											/>
										) : (
											<div className='w-10 h-10 rounded-full bg-zinc-800' />
										)}
										<p className='text-sm text-center'>
											{fixture.awayTeam.name}
										</p>
									</div>
								</div>

								{/* Time */}
								<p className='text-center text-sm text-gray-400'>
									{new Date(fixture.utcDate).toLocaleTimeString(
										"en-GB",
										{
											hour: "2-digit",
											minute: "2-digit",
										}
									)}
								</p>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default Fixtures;
