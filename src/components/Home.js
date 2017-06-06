import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "animate-components";

import { StyledHome } from "../styles";

export default class Home extends Component {
  static displayName = "Home";

  render () {
    return (
      <FadeIn duration="5s" as="div">
        <StyledHome>
          <h1
            style={{ fontSize: "1.4em", marginTop: "10px", marginBottom: "15px" }}
          >
            Email form template builder
          </h1>
          <Link className="button is-hovered" to="/layouts">Get Started</Link>
        </StyledHome>
      </FadeIn>
    );
  }
}
