// @flow

import React, { Component } from "react";
import Draggable from "react-draggable";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";

import Created from "./Created";

import HOC from "./HOC";
import { Placeholder } from "../styles";

type Props = {
  drag: string,
  onDrop: Function,
  files: Array<mixed>,
  value: string,
  handleChange: Function,
  content: string,
  onHandleChange: Function,
};

class One extends Component<Props> {
  static displayName = "One";

  static propTypes = {
    drag: PropTypes.bool,
    onDrop: PropTypes.func,
    files: PropTypes.array,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    content: PropTypes.string,
    onHandleChange: PropTypes.func
  };

  render() {
    const {
      drag,
      onDrop,
      files,
      value,
      handleChange,
      content,
      onHandleChange
    } = this.props;

    return (
      <div>
        {drag
          ? <div>
              <Dropzone onDrop={onDrop} style={{ padding: "10px" }}>
                <Placeholder src="http://i.imgur.com/0FixUvM.png" />
                <p>
                  {files.map(f => (
                    <li key={f.name}>{f.name} - {f.size} bytes</li>
                  ))}
                </p>
              </Dropzone>
            </div>
          : <Placeholder src="http://i.imgur.com/0FixUvM.png" drag />}
        {drag
          ? <div>
              <Draggable
                bounds={{ top: -19, left: -10, right: 575, bottom: 10 }}
              >
                <div>
                  <input
                    className="title"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              </Draggable>
              <Draggable bounds={{ top: -24, left: -10, right: 8, bottom: 15 }}>
                <div>
                  <textarea
                    className="editor"
                    value={content}
                    onChange={onHandleChange}
                  />
                </div>
              </Draggable>
              <br /><Created page="One" value={value} content={content} /><br />
            </div>
          : <div>
              <h1 style={{ fontSize: "1.6em", padding: "10px" }}>
                Email Title
              </h1>
              <p style={{ fontSize: "0.9em", padding: "10px" }}>
                {content}
              </p>
            </div>}
      </div>
    );
  }
}

export default HOC(One);
