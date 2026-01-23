import Fixtures from "@/components/Fixtures";
import Hero from "@/components/Hero";
import HomePopup from "@/components/ui/HomePopup";
import HomeBanner from "@/components/HomeBanner";

const page = () => {
	return (
		<div>
			<HomeBanner />
			<Hero />
			<Fixtures />
			<HomePopup />
		</div>
	);
};
export default page;
