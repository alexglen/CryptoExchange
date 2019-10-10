import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import litecoin from "../../assets/litecoin.png";
import monero from "../../assets/monero.png";
import ripple from "../../assets/ripple.png";

// Произвольные суммы в coins
export const firstSum = 0.8752;
export const secondSum = 58.89;
export const thirdSum = 1256.99;
export const fourthSum = 52;
export const fifthSum = 52;

const firtsSumInDollars = 8182.73 * firstSum;
const secondSumInDollars = 175.23 * secondSum;
const thirdSumInDollars = 0.2542 * thirdSum;
const fourthSumInDollars = 57.88 * fourthSum;
const fifthSumInDollars = 56.81 * fifthSum;

export const startAllSum =
  firtsSumInDollars +
  secondSumInDollars +
  thirdSumInDollars +
  fourthSumInDollars +
  fifthSumInDollars;

export const data = [
  {
    abbreviation: "BTC",
    name: "Bitcoin",
    picture: bitcoin,
    startSumInCoins: firstSum,
    startSumInDollars: firtsSumInDollars
  },
  {
    abbreviation: "ETH",
    name: "Ethereum",
    picture: ethereum,
    startSumInCoins: secondSum,
    startSumInDollars: secondSumInDollars
  },
  {
    abbreviation: "XRP",
    name: "Ripple",
    picture: litecoin,
    startSumInCoins: thirdSum,
    startSumInDollars: thirdSumInDollars
  },
  {
    abbreviation: "XMR",
    name: "Monero",
    picture: monero,
    startSumInCoins: fourthSum,
    startSumInDollars: fourthSumInDollars
  },
  {
    abbreviation: "LTC",
    name: "Litecoin",
    picture: ripple,
    startSumInCoins: fifthSum,
    startSumInDollars: fifthSumInDollars
  }
];