import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Currency from "./Currency";
import Header from "./Header";
import {
  data,
  firstSum,
  secondSum,
  thirdSum,
  fourthSum,
  fifthSum
} from "../../data";
import "./Currencies.css";


class Currencies extends Component {
  render() {
    const { courses } = this.props;
    const { Bitcoin, Ethereum, Ripple, Monero, Litecoin } = courses;
    const totalCurrentSum = Bitcoin * firstSum + Ethereum * secondSum +
      Ripple * thirdSum + Monero * fourthSum + Litecoin * fifthSum;

    const currencies = data.map(item => {
      const {
        name,
        abbreviation,
        picture,
        startSumInCoins,
        startSumInDollars
      } = item;
      
      return (
        <div key={name}>
          <Currency
            name={name}
            abbreviation={abbreviation}
            picture={picture}
            startSumInCoins={startSumInCoins}
            startSumInDollars={startSumInDollars}
            courses={courses}
          />
        </div>
      );
    });
    return (
      <main className="currencies">
        <Header totalCurrentSum={totalCurrentSum} />
        <div className="currencies__one">{currencies}</div>
      </main>
    );
  }
}

Currencies.propTypes = {
  courses: PropTypes.object
};

Currencies.defaultProps = {
  courses: {}
};

export default connect()(Currencies);