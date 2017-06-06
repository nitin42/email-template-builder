// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInUpBig } from "animate-components";

import Options from "./Options";
import { Container } from "../styles";

type State = {
  layouts: Array<string>,
  current: string,
};

export default class Layouts extends Component<State> {
  static displayName = "Layouts";

  state = {
    layouts: ["One", "Two"],
    current: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      current: event.target.value
    });
  };

  render() {
    const { layouts, current } = this.state;
    const listOfLayouts = layouts.map((item, i) => {
      return <option key={i} value={item}>{item}</option>;
    });

    return (
      <FadeInUpBig duration="2s">
        <Container>
          <h1
            style={{
              fontSize: "1.4em",
              marginTop: "10px",
              marginBottom: "15px"
            }}
          >
            Select a template
          </h1>
          <Options show={current} />
          <br />
          <div className="field is-grouped">
            <p className="control">
              <span className="select">
                <select onChange={this.handleChange}>
                  {listOfLayouts}
                </select>
              </span>
            </p>
            <p className="control">
              <Link
                className="button"
                to={{ pathname: `/create/${current || "One"}` }}
              >
                Create
              </Link>
            </p>
          </div>
          <br />
        </Container>
      </FadeInUpBig>
    );
  }
}
