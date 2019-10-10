export class CryptoCompare {
  _requestFirstPart =
    "https://min-api.cryptocompare.com/data/v2/histohour?fsym=";

  _requestSecondPart = "&tsym=USD&limit=11";

  _requestFirstForDays =
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=";
  _requestSecondForDays = "&tsym=USD&limit=";

  getData = async () => {
    const res = await fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,LTC,XMR&tsyms=USD&067169127c6d0870125562e56237756eb5204917494a13d8e115d3ed5706c28d"
    );
    if (!res.ok) {
      throw new Error("I could not get data");
    }
    const currencies = await res.json();
    const { BTC, ETH, XRP, XMR, LTC } = currencies;

    const Bitcoin = BTC.USD;
    const Ethereum = ETH.USD;
    const Litecoin = LTC.USD;
    const Monero = XMR.USD;
    const Ripple = XRP.USD;

    return { Bitcoin, Ethereum, Litecoin, Monero, Ripple };
  };

  getHourlyData = async name => {
    const res = await fetch(
      `${this._requestFirstPart}${name}${this._requestSecondPart}`
    );
    if (!res.ok) {
      throw new Error("I could not get data");
    }
    const body = await res.json();
    const data = body.Data.Data;
    return data.map(({ open }) => open);
  };

  getDailyData = async (name, limit) => {
    const res = await fetch(
      `${this._requestFirstForDays}${name}${this._requestSecondForDays}${limit}`
    );
    if (!res.ok) {
      throw new Error("I could not get data");
    }
    const body = await res.json();
    const data = body.Data.Data;
    return data.map(({ open }) => open);
  };
};