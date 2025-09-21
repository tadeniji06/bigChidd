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
	status: string; 
	score: {
		fullTime: {
			home: number | null;
			away: number | null;
		};
	};
};

const Fixtures = () => {
	const [fixtures, setFixtures] = useState<Fixture[]>([]);
	const [loading, setLoading] = useState(true);

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
				<h1 className='text-2xl font-bold text-center mb-6'>
					Upcoming Fixtures
				</h1>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{Array.from({ length: 6 }).map((_, idx) => (
						<Lazy key={idx} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='bg-black min-h-screen py-6 px-4 text-green-400'>
			<h1 className='text-2xl font-bold text-center mb-6'>
				Upcoming Fixtures
			</h1>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{fixtures.map((fixture) => (
					<div
						key={fixture.id}
						className='bg-zinc-900 rounded-2xl shadow-lg border border-green-600 p-4 flex flex-col gap-4 hover:scale-[1.02] transition-transform'
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
							{/* Home */}
							<div className='flex flex-col items-center gap-2 flex-1'>
								{fixture.homeTeam.crest && (
									<Image
										src={fixture.homeTeam.crest}
										alt={fixture.homeTeam.name}
										width={40}
										height={40}
									/>
								)}
								<p className='text-sm text-center'>
									{fixture.homeTeam.name}
								</p>
							</div>

							<span className='text-xs font-bold text-gray-300 px-2'>
								VS
							</span>

							{/* Away */}
							<div className='flex flex-col items-center gap-2 flex-1'>
								{fixture.awayTeam.crest && (
									<Image
										src={fixture.awayTeam.crest}
										alt={fixture.awayTeam.name}
										width={40}
										height={40}
									/>
								)}
								<p className='text-sm text-center'>
									{fixture.awayTeam.name}
								</p>
							</div>
						</div>

						{/* Time */}
						<p className='text-center text-sm text-gray-400'>
							{new Date(fixture.utcDate).toLocaleTimeString("en-GB", {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>

						{/* Score - show only if finished */}
						{fixture.status === "FINISHED" &&
							fixture.score?.fullTime && (
								<p className='text-center text-lg font-bold text-green-400 mt-2'>
									{fixture.score.fullTime.home} -{" "}
									{fixture.score.fullTime.away}
								</p>
							)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Fixtures;
