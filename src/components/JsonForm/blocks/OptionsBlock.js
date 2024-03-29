import React, { Component } from "react";

export default class OptionsBlock extends Component {
  componentDidMount() {}
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  validate() {}
  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex", marginBottom: 10 }}>
        {this.props.label && (
          <div style={{ width: 200 }}>{this.props.label}</div>
        )}
        <div>
          <select
            value={this.props.value}
            onChange={e => {
              this.valueChanged(e.target.value);
            }}
          >
            <option key={"null"} value={"no!"}>
              PICK ONE!
            </option>
            {this.props.options.map(o => {
              return (
                <option key={o} value={o}>
                  {o}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
