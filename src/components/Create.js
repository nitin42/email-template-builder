// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";

import Options from "./Options";
import { StyledCreate } from "../styles";

type Props = {
  layout: string
};

export default class Create extends Component<Props> {
  static displayName = "Create";

  static propTypes = {
    layout: PropTypes.string
  };

  render() {
    const { layout } = this.props;

    return (
      <div>
        <StyledCreate>
          <Options show={layout} drag={true} />
        </StyledCreate>
      </div>
    );
  }
}
