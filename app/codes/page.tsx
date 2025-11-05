import { Suspense } from "react";
import Codes from "@/components/Codes";

export default function CodesPage() {
	return (
		<Suspense
			fallback={
				<div className='text-white text-center py-10'>Loading...</div>
			}
		>
			<Codes />
		</Suspense>
	);
}
