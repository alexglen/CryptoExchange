import React from "react";
import { startAllSum } from "../../../data";
import { getSign } from "./helpers";
import "./Header.css";

const Header = ({ totalCurrentSum }) => {
	const allProfit = totalCurrentSum - startAllSum;

	return (
		<header className="header">
			<p className="header__title">Your total balance</p>
			<p className="header__sum">
				<span className="sign_of_dollar">$</span>
				{Number(totalCurrentSum.toFixed(2)).toLocaleString("en")}
			</p>
			<p className="header__sign">24h Changes</p>
			<p
				className="header__profit"
				style={{ color: allProfit > 0 ? "#00FF00" : "#FF4500" }}
			>
				{getSign(allProfit).symb} ${Math.abs(allProfit.toFixed(2))}
				{getSign(allProfit).sign}
			</p>
		</header>
	);
};

export default Header;
