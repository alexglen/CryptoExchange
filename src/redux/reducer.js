import {
	FETCH_DATA_SUCCESS,
	GET_DATA_TO_BIG_WALLET,
	FETCH_DATA_FOR_CHART,
	CHANGE_ABBREVIATION,
	CHANGE_PERIOD,
	FETCH_DATA_START,
	FETCH_DATA_ERROR,
	CHANGE_LABELS,
} from "./constants";
import { oneDay } from "../Components/App/SecondPage/Charts/labels";

const initialState = {
	data: {},
	loading: false,
	error: null,
	bigWallet: {},
	lastDataOfServer: [],
	abbr: "",
	period: "hour",
	labels: oneDay,
	limit: 12,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_DATA_START:
			return {
				...state,
				loading: true,
			};

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				data: payload,
				loading: false,
			};

		case FETCH_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			};

		case GET_DATA_TO_BIG_WALLET:
			return {
				...state,
				bigWallet: payload,
			};

		case FETCH_DATA_FOR_CHART:
			return {
				...state,
				lastDataOfServer: payload,
			};

		case CHANGE_ABBREVIATION:
			return {
				...state,
				abbr: payload,
			};

		case CHANGE_PERIOD:
			return {
				...state,
				period: payload.period,
				limit: payload.limit,
			};

		case CHANGE_LABELS:
			return {
				...state,
				labels: payload,
			};

		default:
			return state;
	}
};
