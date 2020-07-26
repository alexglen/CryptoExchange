import React from "react";
import { useDispatch } from "react-redux";
import {
	changeAbbreviation,
	getDataForBigWallet,
} from "../../../../../redux/actions";
import { getSign } from "../../../FirstPage/Currencies/Currency/helpers";
import "./Wallet.css";

const Wallet = ({
	name,
	abbreviation,
	picture,
	startSumInCoins,
	startSumInDollars,
	information,
}) => {
	let realProfit =
		((startSumInCoins * information[name] - startSumInDollars) /
			startSumInDollars) *
		100;

	const dispatch = useDispatch();

	return (
		<div
			onClick={() =>
				dispatch(
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
			<div
				className="wallet"
				onClick={() => dispatch(changeAbbreviation(abbreviation))}
			>
				<div className="wallet__logo">
					<div>
						<img className="wallet__picture" src={picture} alt={name} />
					</div>
					<div>
						<span className="wallet__abbr">{abbreviation}</span>
						<br />
						<span className="wallet__name">{name}</span>
					</div>
				</div>
				<div>
					<span className="wallet__random_sum">{startSumInCoins}</span>
					<p
						className="wallet__percent"
						style={{ color: realProfit > 0 ? "#00FF00" : "#FF4500" }}
					>
						{getSign(realProfit)}
						{Math.abs(realProfit).toFixed(2)}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
