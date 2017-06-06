// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FadeIn } from "animate-components";

import One from "./One";
import Two from "./Two";

import { Show } from "../styles";

type Props = {
  show: string,
  drag: boolean,
}

export default class Options extends Component<Props> {
  static displayName = "Options";

  static propTypes = {
    show: PropTypes.string,
    drag: PropTypes.bool
  };

  render() {
    const { show, drag } = this.props;

    return (
      <div>
        {drag
          ? <h1 style={{ fontSize: "2.2em" }}>Create an Email template</h1>
          : null}
        <Show>
          {show === "One"
            ? <FadeIn duration="2s"><One drag={drag} /></FadeIn>
            : show === "Two"
                ? <FadeIn duration="2s"><Two drag={drag} /></FadeIn>
                : <One drag={drag} />}
        </Show>
      </div>
    );
  }
}
