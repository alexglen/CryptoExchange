import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import Nav from "./Nav";
import { oneDay, week, month } from "./labels";
import {
  fetchDataForChart,
  fetchPeriodToWeek,
  fetchPeriodToMonth,
  changeLabels
} from "../../../../redux/actions";
import "./Charts.css";

class Charts extends Component {
  componentDidMount() {
    this.props.fetchDataForChart(this.props.abbr);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.period !== this.props.period) {
      switch (this.props.period) {
        case "week":
          this.props.fetchPeriodToWeek(this.props.abbr);
          this.props.changeLabels(week);
          break;
        case "month":
          this.props.fetchPeriodToMonth(this.props.abbr);
          this.props.changeLabels(month);
          break;
        case "oneDay":
          this.props.fetchDataForChart(this.props.abbr);
          this.props.changeLabels(oneDay);
          break;
        default:
          this.props.fetchDataForChart(this.props.abbr);
          this.props.changeLabels(oneDay);
      }
    }
    if (prevProps.abbr !== this.props.abbr) {
      this.props.fetchDataForChart(this.props.abbr);
    }
  }

  render() {
    const { lastDataOfServer, labels } = this.props;

    const data = {
      labels: labels,
      series: [lastDataOfServer]
    };

    const options = {
      width: "780px",
      height: "420px",
      axisX: {
        showGrid: false
      },
      axisY: {
        showGrid: true,

        labelInterpolationFnc: function(value) {
          return "$" + value;
        }
      }
    };

    const type = "Line";

    return (
      <div className="charts">
        <Nav />
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    );
  }
}

Charts.propTypes = {
  changeLabels: PropTypes.func,
  fetchDataForChart: PropTypes.func,
  fetchPeriodToWeek: PropTypes.func,
  fetchPeriodToMonth: PropTypes.func,
  labels: PropTypes.array,
  lastDataOfServer: PropTypes.array,
  abbr: PropTypes.string,
  period: PropTypes.string
};

Charts.defaultProps = {
  changeLabels: () => {},
  fetchDataForChart: () => {},
  fetchPeriodToWeek: () => {},
  fetchPeriodToMonth: () => {},
  labels: [],
  lastDataOfServer: [],
  abbr: "",
  period: ""
};

export default connect(
  state => ({
    labels: state.labels,
    lastDataOfServer: state.lastDataOfServer,
    abbr: state.abbr,
    period: state.period
  }),
  { fetchDataForChart, fetchPeriodToWeek, fetchPeriodToMonth, changeLabels }
)(Charts);