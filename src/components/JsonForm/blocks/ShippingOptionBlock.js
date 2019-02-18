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
      label: "Tracking"
    }
  ]
};

export default class ShippingOptionBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
