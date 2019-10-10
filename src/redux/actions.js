import {
    FETCH_DATA_SUCCESS,
    GET_DATA_TO_BIG_WALLET,
    FETCH_DATA_FOR_CHART,
    CHANGE_ABBREVIATION,
    CHANGE_PERIOD_TO_WEEK,
    CHANGE_PERIOD,
    CHANGE_PERIOD_TO_MONTH,
    FETCH_DATA_START,
    FETCH_DATA_ERROR,
    CHANGE_LABELS
  } from "./constants";
  import { CryptoCompare } from "../services/CryptoCompare";
  
  export const fetchData = () => {
    return async dispatch => {
      dispatch({
        type: FETCH_DATA_START
      });
      const dataCurrency = new CryptoCompare();
      dataCurrency
        .getData()
        .then(data => {
          dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data
          });
        })
        .catch(e => {
          dispatch({
            type: FETCH_DATA_ERROR,
            payload: e
          });
        });
    };
  };
  
  export const getDataForBigWallet = obj => ({
    type: GET_DATA_TO_BIG_WALLET,
    payload: obj
  });
  
  export const changeLabels = array => ({ type: CHANGE_LABELS, payload: array });
  
  export const fetchDataForChart = name => {
    return async dispatch => {
      dispatch({
        type: FETCH_DATA_START
      });
      const dataCurrency = new CryptoCompare();
      dataCurrency
        .getHourlyData(name)
        .then(data => {
          dispatch({
            type: FETCH_DATA_FOR_CHART,
            payload: data
          });
        })
        .catch(e => {
          dispatch({
            type: FETCH_DATA_ERROR,
            payload: e
          });
        });
    };
  };
  
  export const fetchPeriodToWeek = name => {
    return async dispatch => {
      dispatch({
        type: FETCH_DATA_START
      });
      const dataCurrency = new CryptoCompare();
      dataCurrency
        .getDailyData(name, 6)
        .then(data => {
          dispatch({
            type: CHANGE_PERIOD_TO_WEEK,
            payload: data
          });
        })
        .catch(e => {
          dispatch({
            type: FETCH_DATA_ERROR,
            payload: e
          });
        });
    };
  };
  
  export const fetchPeriodToMonth = name => {
    return async dispatch => {
      dispatch({
        type: FETCH_DATA_START
      });
      const dataCurrency = new CryptoCompare();
      dataCurrency
        .getDailyData(name, 30)
        .then(data => {
          dispatch({
            type: CHANGE_PERIOD_TO_MONTH,
            payload: data
          });
        })
        .catch(e => {
          dispatch({
            type: FETCH_DATA_ERROR,
            payload: e
          });
        });
    };
  };
  
  export const changeAbbreviation = name => ({
    type: CHANGE_ABBREVIATION,
    payload: name
  });
  export const changePeriod = name => ({ type: CHANGE_PERIOD, payload: name });  