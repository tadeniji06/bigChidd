import axios from "axios";
import { apiURl } from "./api";

import { sanity } from "./sanity";
import { predictionsQuery } from "./queries";

export const getPredictions = async () => {
  try {
    const predictions = await sanity.fetch(predictionsQuery);
    return predictions;
  } catch (err) {
    console.error("Error fetching predictions:", err);
    return [];
  }
};

export const getAllMatches = async () => {
	try {
		const res = await axios.get(`${apiURl}/matches`);
		// console.log(res.data.matches);
		return res.data.matches;
	} catch (error) {
		throw error;
	}
};
export const getHead2Head = async (id: number) => {
	try {
		const res = await axios.get(`${apiURl}/matches/${id}/head2head`);
		return res.data.aggregates;
		// console.log(res.data.aggregates)

	} catch (error) {
		throw error;
	}
};

export const getAllAreas = async () => {
	try {
		const res = await axios.get(`${apiURl}/areas`);
		return res.data.areas;
	} catch (error) {
		throw error;
	}
};
