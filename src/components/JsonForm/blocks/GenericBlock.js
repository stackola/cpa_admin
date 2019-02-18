import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import UserBlock from "./UserBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
let blockConfig = {
  name: "user",
  label: "New User",
  fields: [
    {
      block: StringBlock,
      name: "username",
      label: "User name1",
      default: "Hi"
    },
    {
      block: StringBlock,
      name: "username3",
      label: "User name111"
    },
    {
      block: BoolBlock,
      name: "hasSomes",
      label: "User name1"
    },
    {
      block: CollectionBlock,
      of: UserBlock,
      defaultItem: {},
      name: "coll1",
      label: "User name"
    }
  ]
};
export default class GenericBlock extends Component {
  constructor(p) {
    super(p);
    this.state = {
      blockConfig: { fields: [] }
    };
  }
  valueChanged(v) {
    this.props.setValue(this.props.name, v, true);
  }
  setValue(k, v) {
    let newValue = { ...(this.props.value || {}), [k]: v };
    this.valueChanged(newValue);
  }
  componentDidMount() {
    //get block config from props.
    this.setState({ blockConfig: this.props.blockConfig || blockConfig });
  }

  render() {
    return (
      <div
        style={{
          margin: 10,
          border: "1px solid black",
          padding: 5,
          borderRadius: 4
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          {this.props.title || this.state.blockConfig.label}
        </div>
        <div>
          {this.state.blockConfig.fields.map((f, index) => {
            let Block = f.block;
            return (
              <Block
                key={index}
                {...f}
                setValue={(k, v) => {
                  this.setValue(k, v);
                }}
                value={this.props.value && this.props.value[f.name]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
