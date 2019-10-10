import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getDataForBigWallet,
  changeAbbreviation
} from "../../../../../redux/actions";
import "./Currency.css";

const Currency = ({
  getDataForBigWallet,
  changeAbbreviation,
  courses,
  name,
  abbreviation,
  picture,
  startSumInCoins,
  startSumInDollars
}) => {
  const { Bitcoin, Ethereum, Ripple, Monero, Litecoin } = courses;

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
    <div className="currency-container">
      <NavLink to="/second_page">
        <div onClick={() => changeAbbreviation(abbreviation)}>
          <div
            className="currency"
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
            <div>
              <div className="currency__logo">
                <img className="currency__picture" src={picture} alt={name} />

                <span className="currency__abbr">{abbreviation}</span>
                <br />
                <span className="currency__name">{name}</span>
              </div>

              <div>
                <p className="currency__course">${course}</p>
                <p className="currency__price">Price for one coin</p>
              </div>
            </div>

            <div>
              <div className="currency__all-sum">
                <span className="currency__random_sum">{startSumInCoins}</span>
                <br />
                <span className="currency__random_dollars">
                  ${Number((startSumInCoins * course).toFixed(2)).toLocaleString("en")}
                </span>
              </div>
              <div className="currency__all-profit">
                <p className="currency__percent" style={style}>
                  {sign}
                  {Math.abs(realProfit).toFixed(2)}%
                </p>
                <p className="currency__sign-profit">Profit / Less </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

Currency.propTypes = {
  getDataForBigWallet: PropTypes.func,
  changeAbbreviation: PropTypes.func,
  courses: PropTypes.object,
  name: PropTypes.string,
  abbreviation: PropTypes.string,
  picture: PropTypes.string,
  startSumInCoins: PropTypes.number,
  startSumInDollars: PropTypes.number
};

Currency.defaultProps = {
  getDataForBigWallet: () => {},
  changeAbbreviation: () => {},
  courses: {},
  name: "",
  abbreviation: "",
  picture: "",
  startSumInCoins: 0,
  startSumInDollars: 0
};

export default connect(
  null,
  { getDataForBigWallet, changeAbbreviation }
)(Currency);