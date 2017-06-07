// @flow

import React, { Component } from "react";
import Draggable from "react-draggable";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import RichTextEditor, { createEmptyValue } from "react-rte";

import type { EditorValue } from "react-rte";

import Button from "./Button";

import HOC from "./HOC";
import { Placeholder, Show } from "../styles";

type Props = {
  drag: string,
  onDrop: Function,
  files: Array<mixed>,
  value: string,
  handleChange: Function,
  content: string,
  onHandleChange: Function
};

class Two extends Component<Props> {
  static displayName = "One";

  state = {
    value: createEmptyValue(),
    format: "html",
    readOnly: false,
    file: "",
    imagePreviewUrl: ""
  };

  static propTypes = {
    drag: PropTypes.bool,
    onDrop: PropTypes.func,
    files: PropTypes.array,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    content: PropTypes.string,
    onHandleChange: PropTypes.func
  };

  _onChange = (value: EditorValue) => {
    this.setState({ value });
  };

  _onChangeSource = (event: Object) => {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format)
    });
  };

  _onChangeFormat = (event: Object) => {
    this.setState({ format: event.target.value });
  };

  _onChangeReadOnly = (event: Object) => {
    this.setState({ readOnly: event.target.checked });
  };

  render() {
    const {
      drag,
      onDrop,
      files,
      value,
      handleChange,
    } = this.props;

    return (
      <div>
        {drag
          ? <div>
              <Show>
                <Draggable>
                  <div>
                    <input
                      className="title"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                </Draggable>
                <Draggable>
                  <div>
                    <Dropzone onDrop={onDrop} style={{ padding: "10px" }}>
                      <Placeholder
                        src={
                          files.length !== 0
                            ? files.map(f => f.preview)
                            : "http://i.imgur.com/0FixUvM.png"
                        }
                      />
                    </Dropzone>
                  </div>
                </Draggable>
                <Draggable>
                  <div>
                    <RichTextEditor
                      value={this.state.value}
                      onChange={this._onChange}
                      className="editor"
                      placeholder="Text will appear here. Start typing in the box given below"
                      toolbarClassName="demo-toolbar"
                      editorClassName="demo-editor"
                      readOnly={true}
                    />
                  </div>
                </Draggable>
                <br />
              </Show>
              <div
                style={{
                  margin: "30px auto",
                  width: "800px",
                  overflow: "auto"
                }}
              >
                <h1 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
                  Start typing here and content will appear above. Note it supports plain text and also html.
                </h1>
                <textarea
                  className="textarea"
                  placeholder="Editor Source"
                  value={this.state.value.toString("html")}
                  onChange={this._onChangeSource}
                  autoFocus
                />
              </div>
              <Button />
            </div>
          : <div>
              <Show>
                <input className="title" value={value} readOnly />
                <Placeholder
                  style={{ padding: "10px" }}
                  src={
                    files.length !== 0
                      ? files.map(f => f.preview)
                      : "http://i.imgur.com/0FixUvM.png"
                  }
                />
                <RichTextEditor
                  value={this.state.value}
                  onChange={this._onChange}
                  className="editor"
                  placeholder="Write the email content here..."
                  toolbarClassName="demo-toolbar"
                  editorClassName="demo-editor"
                  readOnly={true}
                />
              </Show>
            </div>}
      </div>
    );
  }
}

export default HOC(Two);
