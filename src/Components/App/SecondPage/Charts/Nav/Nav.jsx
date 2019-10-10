import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { changePeriod } from "../../../../../redux/actions";
import "./Nav.css";

const Nav = ({ changePeriod }) => {
  return (
    <div className="nav">
      <NavLink to="/second_page/" exact activeClassName="activeNav">
        <p onClick={() => changePeriod("oneDay")}>Day</p>
      </NavLink>
      <NavLink to="/second_page/week" exact activeClassName="activeNav">
        <p onClick={() => changePeriod("week")}>Week</p>
      </NavLink>
      <NavLink to="/second_page/month" activeClassName="activeNav">
        <p onClick={() => changePeriod("month")}>Month</p>
      </NavLink>
    </div>
  );
};

Nav.propTypes = {
  changePeriod: PropTypes.func
};

Nav.defaultProps = {
  changePeriod: () => {}
};

export default connect(
  null,
  { changePeriod }
)(Nav);