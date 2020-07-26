import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import Charts from "./Charts/Charts";
import Wallets from "./Wallets/Wallets";
import "./SecondPage.css";

const SecondPage = () => (
	<div className="second-page">
		<header>
			<NavLink to="/">
				<img src={arrow} className="arrow" alt="icon-arrow" />
			</NavLink>
		</header>
		<div className="">
			<Wallets />
		</div>
		<Charts />
	</div>
);

export default SecondPage;
