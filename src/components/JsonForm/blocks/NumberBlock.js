import React, { Component } from "react";

export default class NumberBlock extends Component {
  componentDidMount() {
    this.valueChanged(this.props.default || 0);
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, parseFloat(v));
  }
  render() {
    return (
      <div>
        <div>{this.props.label}</div>
        <div>
          <input
            type="number"
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
