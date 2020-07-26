export class CryptoCompare {
	_requestFirstPart = `https://min-api.cryptocompare.com/data/v2/histo`;
	_requestSecondPart = `?fsym=`;
	_requestThirdPart = `&tsym=USD&limit=`;

	getData = async () => {
		const res = await fetch(
			"https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,LTC,XMR&tsyms=USD&067169127c6d0870125562e56237756eb5204917494a13d8e115d3ed5706c28d"
		);
		if (!res.ok) {
			throw new Error("I could not get data");
		}
		const {
			BTC: { USD: Bitcoin },
			ETH: { USD: Ethereum },
			XRP: { USD: Litecoin },
			XMR: { USD: Monero },
			LTC: { USD: Ripple },
		} = await res.json();

		return { Bitcoin, Ethereum, Litecoin, Monero, Ripple };
	};

	getChartData = async (name, period, limit) => {
		const res = await fetch(
			`${this._requestFirstPart}${period}${this._requestSecondPart}${name}${this._requestThirdPart}${limit}`
		);
		if (!res.ok) {
			throw new Error("I could not get data");
		}
		const body = await res.json();
		const data = body.Data.Data;
		return data.map(({ open }) => open);
	};
}
