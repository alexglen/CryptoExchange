import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	getDataForBigWallet,
	changeAbbreviation,
} from "../../../../../redux/actions";
import { getSign } from "./helpers";
import "./Currency.css";

const Currency = ({
	courses,
	name,
	abbreviation,
	picture,
	startSumInCoins,
	startSumInDollars,
}) => {
	const disptach = useDispatch();

	let realProfit =
		((startSumInCoins * courses[name] - startSumInDollars) /
			startSumInDollars) *
		100;

	return (
		<div className="currency-container">
			<NavLink to="/charts">
				<div onClick={() => disptach(changeAbbreviation(abbreviation))}>
					<div
						className="currency"
						onClick={() =>
							disptach(
								getDataForBigWallet({
									abbreviation,
									name,
									picture,
									startSumInCoins,
									realProfit,
								})
							)
						}
					>
						<div>
							<div className="currency__logo">
								<img className="currency__picture" src={picture} alt={name} />

								<span className="currency__abbr">{abbreviation}</span>
								<br />
								<span className="currency__name">{name}</span>
							</div>

							<div>
								<p className="currency__course">${courses[name]}</p>
								<p className="currency__price">Price for one coin</p>
							</div>
						</div>

						<div>
							<div className="currency__all-sum">
								<span className="currency__random_sum">{startSumInCoins}</span>
								<br />
								<span className="currency__random_dollars">
									$
									{Number(
										(startSumInCoins * courses[name]).toFixed(2)
									).toLocaleString("en")}
								</span>
							</div>
							<div className="currency__all-profit">
								<p
									className="currency__percent"
									style={{ color: realProfit > 0 ? "#00FF00" : "#FF4500" }}
								>
									{getSign(realProfit)}
									{Math.abs(realProfit).toFixed(2)}%
								</p>
								<p className="currency__sign-profit">Profit / Less </p>
							</div>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default Currency;
