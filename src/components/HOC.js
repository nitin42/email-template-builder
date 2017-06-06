import React, { Component } from "react";

// High Order Component for components <One /> and <Two /> (different types of layouts)
let HOC = WrapperComponent =>
  class extends Component {
    state = {
      files: [],
      value: "Email Title",
      content: `
Delete this text message and start typing...
      `,
    };

    handleChange = e => {
      this.setState({
        value: e.target.value
      });
    };

    onDrop = files => {
      this.setState({ files });
    };

    onHandleChange = (e) => {
      this.setState({content: e.target.value});
    }

    render() {
      return (
        <WrapperComponent
          {...this.props}
          value={this.state.value}
          files={this.state.files}
          content={this.state.content}
          handleChange={this.handleChange}
          onHandleChange={this.onHandleChange}
          onDrop={this.onDrop}
        />
      );
    }
  };

export default HOC;
