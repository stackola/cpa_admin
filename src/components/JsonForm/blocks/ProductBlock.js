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
      block: StringBlock,
      name: "aliUrl",
      label: "URL"
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
      options: ["Electronics", "Fashion", "Gadgets", "Jewelery", "Toys"],
      name: "category",
      label: "Category"
    },
    {
      block: NumberBlock,
      name: "popularity",
      label: "popularity"
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
      defaultItem: {
        name: "Free shipping",
        price: 0,
        time: "4-5 weeks"
      }
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
