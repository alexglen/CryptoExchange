import React from "react";
import {
	data,
	firstSum,
	secondSum,
	thirdSum,
	fourthSum,
	fifthSum,
} from "../../data";
import Currency from "./Currency/Currency";
import Header from "./Header/Header";

const Currencies = ({ courses }) => {
	const { Bitcoin, Ethereum, Ripple, Monero, Litecoin } = courses;

	const totalCurrentSum =
		Bitcoin * firstSum +
		Ethereum * secondSum +
		Ripple * thirdSum +
		Monero * fourthSum +
		Litecoin * fifthSum;

	return (
		<main className="currencies">
			<Header totalCurrentSum={totalCurrentSum} />
			<div className="currencies__one">
				{data.map((item) => {
					return (
						<div key={item.name}>
							<Currency courses={courses} {...item} />
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default Currencies;
