import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

let blockConfig = {
  name: "prize",
  label: "New Prize",
  fields: [
    {
      block: StringBlock,
      name: "name",
      label: "Name"
    },
    {
      block: StringBlock,
      name: "type",
      label: "Type (coins, product, crate)"
    },

    {
      block: NumberBlock,
      name: "order",
      label: "Order"
    },
    {
      block: NumberBlock,
      name: "chance",
      label: "Chance (in %)"
    },
    {
      block: NumberBlock,
      name: "value",
      label: "Amount (coins)"
    },
    {
      block: ImageBlock,
      name: "image",
      label: "Image (p)"
    },

    {
      block: StringBlock,
      name: "productId",
      label: "ProductId (p)"
    },

    {
      block: NumberBlock,
      name: "resellValue",
      label: "Resell value (p)"
    },

    {
      block: NumberBlock,
      name: "hue",
      label: "Hue (crate)"
    },

    {
      block: StringBlock,
      name: "crateId",
      label: "CrateId (crate)"
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
