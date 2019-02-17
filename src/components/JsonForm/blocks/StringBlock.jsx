import React, { Component } from "react";

export default class NumberBlock extends Component {
  componentDidMount() {
    console.log("MOUNTTT!");
    this.valueChanged(this.props.default || "");
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  validate() {}
  render() {
    return (
      <div>
        <div>{this.props.label}!</div>
        <div>
          <input
            type="text"
            value={this.props.value}
            onChange={e => {
              this.valueChanged(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}
