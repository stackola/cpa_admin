import React, { Component } from "react";

export default class NumberBlock extends Component {
  constructor(p) {
    super(p);
  }
  componentDidMount() {
    console.log("MOUNTTT!");
    this.valueChanged(this.props.default || []);
  }
  addItem() {
    this.valueChanged([...(this.props.value || []), this.props.defaultItem]);
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
      <div style={{ margin: 10 }}>
        Collection
        <div>
          {this.props.value &&
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
        </div>
        <div onClick={() => this.addItem()}>add item!</div>
      </div>
    );
  }
}
