import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import ImageBlock from "./ImageBlock";
import OptionsBlock from "./OptionsBlock";
import TextBlock from "./TextBlock";

let blockConfig = {
  name: "product",
  label: "New Product",
  fields: [
    {
      block: StringBlock,
      name: "name",
      label: "Name"
    },
    {
      block: TextBlock,
      name: "text",
      label: "Text"
    },
    {
      block: NumberBlock,
      name: "price",
      label: "Price"
    },
    {
      block: OptionsBlock,
      options: ["Gadgets", "Fashion", "Technology", "Toys"],
      name: "categroy",
      label: "Category"
    },
    {
      block: ImageBlock,
      name: "image",
      label: "Image"
    },
    {
      name: "images",
      label: "Images",
      block: CollectionBlock,
      of: ImageBlock,
      defaultItem: ""
    },
    {
      name: "shippingOptions",
      label: "Shipping Options",
      block: CollectionBlock,
      of: ShippingOptionBlock,
      defaultItem: {}
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
