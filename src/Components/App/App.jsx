import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={FirstPage} exact />
        <Route path="/second_page" component={SecondPage} />
      </Switch>
    </div>
  );
};

export default App;