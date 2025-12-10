import Fixtures from "@/components/Fixtures";
import Hero from "@/components/Hero";
import HomePopup from "@/components/ui/HomePopup";

const page = () => {
	return (
		<div>
			<Hero />
			<Fixtures />
			<HomePopup />
		</div>
	);
};
export default page;
