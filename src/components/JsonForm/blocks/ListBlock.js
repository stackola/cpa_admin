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
      name: "id",
      label: "id"
    },
    {
      name: "products",
      label: "Products",
      block: CollectionBlock,
      of: StringBlock,
      defaultItem: ""
    }
  ]
};

export default class ListBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
