import React, { Component } from "react";

export default class BoolBlock extends Component {
  componentDidMount() {
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex", marginBottom: 10 }}>
        <div style={{ width: 200 }}>{this.props.label}</div>
        <div>
          <input
            type="checkbox"
            checked={this.props.value}
            onChange={e => {
              this.valueChanged(e.target.checked);
            }}
          />
        </div>
      </div>
    );
  }
}
