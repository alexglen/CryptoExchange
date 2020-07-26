import {
	FETCH_DATA_SUCCESS,
	GET_DATA_TO_BIG_WALLET,
	FETCH_DATA_FOR_CHART,
	CHANGE_ABBREVIATION,
	FETCH_DATA_START,
	FETCH_DATA_ERROR,
	CHANGE_LABELS,
	CHANGE_PERIOD,
} from "./constants";
import { CryptoCompare } from "../services/CryptoCompare";

export const fetchData = () => {
	return async (dispatch) => {
		dispatch({
			type: FETCH_DATA_START,
		});
		const dataCurrency = new CryptoCompare();
		dataCurrency
			.getData()
			.then((data) => {
				dispatch({
					type: FETCH_DATA_SUCCESS,
					payload: data,
				});
			})
			.catch((e) => {
				dispatch({
					type: FETCH_DATA_ERROR,
					payload: e,
				});
			});
	};
};

export const getDataForBigWallet = (obj) => ({
	type: GET_DATA_TO_BIG_WALLET,
	payload: obj,
});

export const changeLabels = (array) => ({
	type: CHANGE_LABELS,
	payload: array,
});

export const fetchDataForChart = (name, period, limit) => {
	return async (dispatch) => {
		dispatch({
			type: FETCH_DATA_START,
		});
		const dataCurrency = new CryptoCompare();
		dataCurrency
			.getChartData(name, period, limit)
			.then((data) => {
				dispatch({
					type: FETCH_DATA_FOR_CHART,
					payload: data,
				});
			})
			.catch((e) => {
				dispatch({
					type: FETCH_DATA_ERROR,
					payload: e,
				});
			});
	};
};

export const changeAbbreviation = (name) => ({
	type: CHANGE_ABBREVIATION,
	payload: name,
});

export const changePeriod = (period, limit) => ({
	type: CHANGE_PERIOD,
	payload: { period, limit },
});
