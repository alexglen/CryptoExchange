import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  changeAbbreviation,
  getDataForBigWallet
} from "../../../../../redux/actions";
import "./Wallet.css";

const Wallet = ({
  getDataForBigWallet,
  changeAbbreviation,
  name,
  abbreviation,
  picture,
  startSumInCoins,
  startSumInDollars,
  information
}) => {
  const { Bitcoin, Ethereum, Ripple, Monero, Litecoin } = information;
  let course = "";

  switch (name) {
    case "Bitcoin":
      course = Bitcoin;
      break;
    case "Ethereum":
      course = Ethereum;
      break;
    case "Ripple":
      course = Ripple;
      break;
    case "Litecoin":
      course = Litecoin;
      break;
    case "Monero":
      course = Monero;
      break;
    default:
      course = "";
      break;
  }
  let realProfit =
    ((startSumInCoins * course - startSumInDollars) / startSumInDollars) * 100;

  const style = { color: realProfit > 0 ? "#00FF00" : "#FF4500" };

  let sign = "+ ";
  if (realProfit < 0) {
    sign = "- ";
  } else if (realProfit === 0) {
    sign = "";
  } else {
    sign = "+ ";
  }

  return (
    <div
      onClick={() =>
        getDataForBigWallet({
          abbreviation,
          name,
          picture,
          startSumInCoins,
          realProfit
        })
      }
    >
      <div className="wallet" onClick={() => changeAbbreviation(abbreviation)}>
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
          <p className="wallet__percent" style={style}>
            {sign}
            {Math.abs(realProfit).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

Wallet.propTypes = {
  getDataForBigWallet: PropTypes.func,
  changeAbbreviation: PropTypes.func,
  name: PropTypes.string,
  abbreviation: PropTypes.string,
  picture: PropTypes.string,
  startSumInCoins: PropTypes.number,
  startSumInDollars: PropTypes.number,
  information: PropTypes.object
};

Wallet.defaultProps = {
  getDataForBigWallet: () => {},
  changeAbbreviation: () => {},
  name: "",
  abbreviation: "",
  picture: "",
  startSumInCoins: 0,
  startSumInDollars: 0,
  information: {}
};

export default connect(
  null,
  { changeAbbreviation, getDataForBigWallet }
)(Wallet);