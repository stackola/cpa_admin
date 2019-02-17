import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { HashRouter as Router } from "react-router-dom";

const render = Component => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    document.getElementById("app")
  );
};

render(AppContainer);

if (module.hot) {
  module.hot.accept("./containers/AppContainer", () => {
    var NextRootContainer = require("./containers/AppContainer").default;
    render(NextRootContainer);
  });
}
