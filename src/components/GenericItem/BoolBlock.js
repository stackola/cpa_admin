import React, { Component } from "react";

export default class BoolBlock extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>{this.props.label}</div>
        <div style={{ flex: 1 }}>
          {this.props.data ? this.props.data.toString() : "false"}
        </div>
      </div>
    );
  }
}
