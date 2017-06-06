// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FlipY } from "animate-components";

import HOC from "./HOC";
import { StyledImage, Show, Success } from "../styles";

type Props = {
  title: string,
  body: string,
};

class GenerateOne extends Component<Props> {
  static displayName = "GenerateOne";

  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  };

  render() {
    const { title, body } = this.props;

    return (
      <FlipY as="div" duration="3s">
        <Show>
          <StyledImage src="http://i.imgur.com/0FixUvM.png" />
          <div>
            <h1 style={{ fontSize: "1.6em", padding: "10px" }}>
              {title}
            </h1>
            <p style={{ fontSize: "0.9em", padding: "10px" }}>
              {body}
            </p>
          </div>
        </Show>
        <Success>
          <p>
            Template successfully created
            {" "}
            <span role="img" aria-label="emoji">🎉 😃</span>
          </p>
          <Link to="/layouts" className="button" style={{ margin: "10px" }}>
            Create another
          </Link>
        </Success>
      </FlipY>
    );
  }
}

class GenerateTwo extends Component {
  static displayName = "GenerateTwo";

  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  };

  render() {
    const { title, body } = this.props;

    return (
      <FlipY as="div" duration="3s">
        <Show>
          <div>
            <h1 style={{ fontSize: "1.6em", padding: "10px" }}>
              {title}
            </h1>
            <StyledImage src="http://i.imgur.com/0FixUvM.png" />
            <p style={{ fontSize: "0.9em", padding: "10px" }}>
              {body}
            </p>
          </div>
        </Show>
        <Success>
          <p>
            Template successfully created
            {" "}
            <span role="img" aria-label="emoji">🎉 😃</span>
          </p>
          <Link to="/layouts" className="button" style={{ margin: "10px" }}>
            Create another
          </Link>
        </Success>
      </FlipY>
    );
  }
}

const GOne = HOC(GenerateOne);
const GTwo = HOC(GenerateTwo);

export { GOne, GTwo };
