import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { changePeriod } from "../../../../../redux/actions";
import "./Nav.css";

const Nav = ({ changePeriod }) => (
	<div className="nav">
		<NavLink to="/charts/" exact activeClassName="activeNav">
			<p onClick={() => changePeriod("hour", 12)}>Day</p>
		</NavLink>
		<NavLink to="/charts/week" exact activeClassName="activeNav">
			<p onClick={() => changePeriod("day", 6)}>Week</p>
		</NavLink>
		<NavLink to="/charts/month" activeClassName="activeNav">
			<p onClick={() => changePeriod("day", 30)}>Month</p>
		</NavLink>
	</div>
);

export default connect(null, { changePeriod })(Nav);
