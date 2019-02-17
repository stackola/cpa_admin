import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";

let blockConfig = {
  name: "shippingOption",
  label: "Shipping Option",
  fields: [
    {
      block: StringBlock,
      name: "name",
      label: "Name"
    },
    {
      block: NumberBlock,
      name: "price",
      default: 12,
      label: "Price"
    },
    {
      block: StringBlock,
      name: "time",
      label: "Time"
    },
    {
      block: BoolBlock,
      name: "tracking",
      label: "Tracking",
      default: false
    }
  ]
};

export default class ShippingOptionBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
