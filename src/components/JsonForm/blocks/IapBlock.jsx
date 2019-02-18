import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import TextBlock from "./TextBlock";

let blockConfig = {
  name: "iap",
  label: "In app buys",
  fields: [
    {
      block: StringBlock,
      name: "sku",
      label: "sku"
    },
    {
      block: NumberBlock,
      name: "count",
      label: "count"
    }
  ]
};

export default class IapBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
