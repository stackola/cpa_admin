import React, { Component } from "react";

import StringBlock from "./StringBlock";
import TextBlock from "./TextBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import OptionsBlock from "./OptionsBlock";
import BoolBlock from "./BoolBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";

let blockConfig = {
  name: "user",
  label: "New User",
  fields: [
    {
      block: TextBlock,
      name: "address",
      label: "Address"
    },
    {
      block: StringBlock,
      name: "id",
      label: "id"
    },
    {
      block: StringBlock,
      name: "productId",
      label: "productId"
    },
    {
      block: ShippingOptionBlock,
      name: "shippingOption",
      label: "Shipping option"
    },
    {
      block: StringBlock,
      name: "time",
      label: "Time"
    },
    {
      block: NumberBlock,
      name: "totalPrice",
      label: "total price"
    },
    {
      block: OptionsBlock,
      options: ["new", "processed"],
      name: "status",
      label: "Status"
    },
    {
      block: StringBlock,
      name: "trackingId",
      label: "trackingId"
    },
    {
      block: BoolBlock,
      name: "usedVoucher",
      label: "usedVoucher"
    },
    {
      block: StringBlock,
      name: "voucherId",
      label: "voucherId"
    },
    {
      block: StringBlock,
      name: "user",
      label: "user"
    }
  ]
};

export default class OrderBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
