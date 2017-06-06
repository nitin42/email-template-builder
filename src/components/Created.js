// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

type Props = {
  page: string,
  value: string,
  content: string,
};

export default class Created extends Component<Props> {
  static displayName = "Created";

  static propTypes = {
    page: PropTypes.string,
    value: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    const { page, value, content } = this.props;
    const state = {
      value,
      content
    };

    return (
      <div className="field is-grouped">
        <p className="control">
          <Link className="button" to="/layouts">
            Back
          </Link>
        </p>
        <p className="control">
          <Link
            className="button"
            to={{ pathname: `/created/${page}`, state: state }}
          >
            Create
          </Link>
        </p>
      </div>
    );
  }
}
