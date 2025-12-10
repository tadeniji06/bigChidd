"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FlyerBannerProps {
	img: StaticImageData | string;
	link: string;
	position?: "top" | "side"; // layout mode
}

const FlyerBanner: React.FC<FlyerBannerProps> = ({
	img,
	link,
	position = "top",
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={`w-full flex justify-center mb-8 ${
				position === "side" ? "md:justify-start" : ""
			}`}
		>
			<Link href={link} target='_blank'>
				<motion.div
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					className='
            w-full max-w-md rounded-2xl cursor-pointer overflow-hidden
            shadow-lg shadow-green-500/30 border border-green-600/40
          '
				>
					<Image
						src={img}
						alt='Promo Flyer'
						className='w-full h-auto'
						priority
					/>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default FlyerBanner;
