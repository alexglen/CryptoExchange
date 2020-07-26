import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartistGraph from "react-chartist";
import { getLabels } from "./labels";
import { fetchDataForChart, changeLabels } from "../../../../redux/actions";
import Nav from "./Nav/Nav";
import "./Charts.css";

const Charts = () => {
	const { labels, lastDataOfServer, abbr, period, limit } = useSelector(
		(state) => state
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataForChart(abbr, period, limit));
		// eslint-disable-next-line
	}, [abbr, period, limit]);

	useEffect(() => {
		dispatch(changeLabels(getLabels(period, limit)));
		// eslint-disable-next-line
	}, [period, limit]);

	const data = {
		labels: labels,
		series: [lastDataOfServer],
	};

	const options = {
		width: "780px",
		height: "420px",
		axisX: {
			showGrid: false,
		},
		axisY: {
			showGrid: true,

			labelInterpolationFnc: function (value) {
				return "$" + value;
			},
		},
	};

	return (
		<div className="charts">
			<Nav />
			<ChartistGraph data={data} options={options} type={"Line"} />
		</div>
	);
};

export default Charts;
