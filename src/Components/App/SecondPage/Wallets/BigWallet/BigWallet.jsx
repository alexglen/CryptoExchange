import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./BigWallet.css";

const BigWallet = ({ bigWallet }) => {
  const {
    abbreviation,
    name,
    picture,
    startSumInCoins,
    realProfit
  } = bigWallet;
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
        <p className="big-wallet__percent" style={style}>
          {sign}
          {Math.abs(realProfit).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

BigWallet.propTypes = {
  bigWallet: PropTypes.object
};

BigWallet.defaultProps = {
  bigWallet: {}
};

export default connect(state => ({ bigWallet: state.bigWallet }))(BigWallet);