import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Button extends Component<Props> {
  static displayName = "Button";

  render() {
    return (
      <Container>
        <div className="field is-grouped">
          <p className="control">
            <Link className="button" to="/layouts">
              Back
            </Link>
          </p>
        </div>
      </Container>
    );
  }
}
