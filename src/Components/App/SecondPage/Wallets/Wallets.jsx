import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BigWallet from "./BigWallet";
import Wallet from "./Wallet/Wallet";
import { data } from "../../data";
import "./Wallets.css";

const Wallets = ({ information }) => {
  const wallets = data.map(wallet => {
    const {
      name,
      abbreviation,
      picture,
      startSumInCoins,
      startSumInDollars
    } = wallet;
    return (
      <Wallet
        key={abbreviation}
        name={name}
        abbreviation={abbreviation}
        picture={picture}
        startSumInCoins={startSumInCoins}
        startSumInDollars={startSumInDollars}
        information={information}
      />
    );
  });
  return (
    <main>
      <div className="wallets">{wallets}</div>
      <div>
        <BigWallet />
      </div>
    </main>
  );
};

Wallets.propTypes = {
  information: PropTypes.object
};

Wallets.defaultProps = {
  information: {}
};

export default connect(state => ({ information: state.data }))(Wallets);