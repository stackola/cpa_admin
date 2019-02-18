import React, { Component } from "react";

export default class NumberBlock extends Component {
  constructor(p) {
    super(p);
  }
  componentDidMount() {}
  addItem() {
    this.valueChanged([...(this.props.value || []), this.props.defaultItem]);
  }
  removeOne() {
    this.valueChanged(this.props.value.slice(0, this.props.value.length - 1));
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, v);
  }
  updateItem(index, newValue) {
    let newItems = this.props.value.map((oldValue, i) => {
      if (i == index) {
        return newValue;
      }
      return oldValue;
    });
    this.valueChanged(newItems);
  }
  validate() {}
  render() {
    return (
      <div style={{ flexDirection: "row", display: "flex", marginBottom: 10 }}>
        <div style={{ width: 200 }}>{this.props.label}</div>
        <div>
          {!!this.props.value &&
            this.props.value.map((b, i) => {
              let Block = this.props.of;
              return (
                <Block
                  value={b}
                  key={i}
                  setValue={(name, value) => {
                    this.updateItem(i, value);
                  }}
                />
              );
            })}

          <div
            style={{
              minWidth: 100,
              paddingLeft: 20,
              paddingRight: 20,
              height: 40,
              borderRadius: 4,
              background: "hsla(130,100%,33%,1)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={() => this.addItem()}
          >
            New {this.props.label}
          </div>
          {!!this.props.value && this.props.value.length > 0 && (
            <div
              style={{
                minWidth: 100,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 10,
                height: 20,
                borderRadius: 4,
                background: "red",
                color: "white",
                cursor: "pointer",
                display: "flex",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => this.removeOne()}
            >
              Remove one {this.props.label}!
            </div>
          )}
        </div>
      </div>
    );
  }
}
