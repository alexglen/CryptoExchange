import React from "react";
import PropTypes from "prop-types";
import { startAllSum } from "../../../data";
import "./Header.css";

const Header = ({ totalCurrentSum }) => {
  const allProfit = totalCurrentSum - startAllSum;
  const style = { color: allProfit > 0 ? "#00FF00" : "#FF4500" };
  let sign = " ↑";
  let symb = "+ ";
  if (allProfit < 0) {
    sign = " ↓";
    symb = "- ";
  } else if (allProfit === 0) {
    sign = "";
    symb = "";
  } else {
    sign = " ↑";
    symb = "+ ";
  }

  return (
    <header className="header">
      <p className="header__title">Your total balance</p>
      <p className="header__sum">
        <span className="sign_of_dollar">$</span>
        {Number(totalCurrentSum.toFixed(2)).toLocaleString("en")}
      </p>
      <p className="header__sign">24h Changes</p>
      <p className="header__profit" style={style}>
        {symb}${Math.abs(allProfit.toFixed(2))}
        {sign}
      </p>
    </header>
  );
};

Header.propTypes = {
  totalCurrentSum: PropTypes.number
};

Header.defaultProps = {
  totalCurrentSum: 0
};

export default Header;