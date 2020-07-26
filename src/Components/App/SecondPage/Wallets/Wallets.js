import React from "react";
import { data } from "../../data";
import Wallet from "./Wallet/Wallet";
import BigWallet from "./BigWallet/BigWallet";
import { useSelector } from "react-redux";
import "./Wallets.css";

const Wallets = () => {
	const { data: information } = useSelector((state) => state);

	return (
		<main>
			<div className="wallets">
				{data.map((wallet) => (
					<Wallet
						key={wallet.abbreviation}
						{...wallet}
						information={information}
					/>
				))}
			</div>
			<div>
				<BigWallet />
			</div>
		</main>
	);
};

export default Wallets;
