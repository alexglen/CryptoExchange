import React from "react";
import { useSelector } from "react-redux";
import { getSign } from "../../../FirstPage/Currencies/Currency/helpers";
import "./BigWallet.css";

const BigWallet = () => {
	const { bigWallet } = useSelector((state) => state);

	const {
		abbreviation,
		name,
		picture,
		startSumInCoins,
		realProfit,
	} = bigWallet;

	return (
		<div className="big-wallet">
			<div className="big-wallet__logo">
				<div>
					<img className="big-wallet__picture" src={picture} alt={name} />
				</div>
				<div>
					<span className="big-wallet__abbr">{abbreviation}</span>
					<br />
					<span className="big-wallet__name">{name}</span>
				</div>
			</div>
			<div>
				<span className="big-wallet__random_sum">{startSumInCoins}</span>
				<p
					className="big-wallet__percent"
					style={{ color: realProfit > 0 ? "#00FF00" : "#FF4500" }}
				>
					{getSign(realProfit)}
					{Math.abs(realProfit).toFixed(2)}%
				</p>
			</div>
		</div>
	);
};

export default BigWallet;
