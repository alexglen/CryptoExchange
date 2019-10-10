import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Currencies from "./Currencies";
import Loader from "../Loader";
import { fetchData } from "../../../redux/actions";
import "./FirstPage.css";

class FirstPage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, data } = this.props;

    if (loading) return <Loader />;
    return (
      <div>
        <Currencies courses={data} />
      </div>
    );
  }
}

FirstPage.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  fetchData: PropTypes.func
};

FirstPage.defaultProps = {
  data: {},
  loading: false,
  fetchData: () => {}
};

export default connect(
  state => ({ data: state.data, loading: state.loading }),
  { fetchData }
)(FirstPage);