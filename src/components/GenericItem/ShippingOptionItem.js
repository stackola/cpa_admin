import React, { Component } from "react";
import StringBlock from "./StringBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
import GenericItem from "./GenericItem";
import NoLoadItem from "./NoLoadItem";
export default class ShippingOptionItem extends Component {
  render() {
    return (
      <NoLoadItem
        {...this.props}
        blockConfig={{
          name: "shippingOption",
          label: "shippingOption",
          fields: [
            {
              block: StringBlock,
              name: "name",
              label: "Name"
            },
            {
              block: NumberBlock,
              name: "price",
              label: "price"
            },
            {
              block: StringBlock,
              name: "time",
              label: "Time"
            },
            {
              block: BoolBlock,
              name: "tracking",
              label: "tracking"
            }
          ]
        }}
      />
    );
  }
}
