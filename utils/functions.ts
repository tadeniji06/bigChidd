import axios from "axios";
import { apiURl } from "./api";

export const getAllMatches = async () => {
	try {
		const res = await axios.get(`${apiURl}/matches`);
		// console.log(res.data.matches);
		return res.data.matches;
	} catch (error) {
		throw error;
	}
};
