import React, { Component } from "react";

export default class StringBlock extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>{this.props.label}</div>
        <div style={{ flex: 1 }}>
          {this.props.parse
            ? this.props.parse(this.props.data)
            : this.props.data}
        </div>
      </div>
    );
  }
}
