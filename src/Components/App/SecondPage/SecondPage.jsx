import React from "react";
import { NavLink } from "react-router-dom";
import Charts from "./Charts";
import Wallets from "./Wallets";
import arrow from "../../../assets/arrow.png";
import "./SecondPage.css";

const SecondPage = () => {
  return (
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
};

export default SecondPage;