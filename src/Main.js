import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Layouts from "./components/Layouts";
import Create from "./components/Create";
import { GOne, GTwo } from "./components/Generate";

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
          <Route
            path="/created/:page"
            render={renderProps => {
              if (renderProps.match.url === "/created/One") {
                return (
                  <GOne
                    title={renderProps.location.state.value}
                    body={renderProps.location.state.content}
                  />
                );
              } else if (renderProps.match.url === "/created/Two") {
                return (
                  <GTwo
                    title={renderProps.location.state.value}
                    body={renderProps.location.state.content}
                  />
                );
              }
            }}
          />
        </div>
      </Router>
    );
  }
}
