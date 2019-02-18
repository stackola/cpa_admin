import React, { Component } from "react";

export default class NumberBlock extends Component {
  componentDidMount() {}
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  validate() {}
  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex", marginBottom: 10 }}>
        {this.props.label && (
          <div style={{ width: 200 }}>{this.props.label}!</div>
        )}
        <div>
          <textarea
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
