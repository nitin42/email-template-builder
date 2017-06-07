import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Layouts from "./components/Layouts";
import Create from "./components/Create";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/layouts" component={Layouts} />
          <Route
            path="/create/:example"
            render={renderProps => {
              if (renderProps.match.url === "/create/Two") {
                return <Create layout="Two" />;
              } else if (renderProps.match.url === "/create/One") {
                return <Create layout="One" />;
              }
            }}
          />
        </div>
      </Router>
    );
  }
}
