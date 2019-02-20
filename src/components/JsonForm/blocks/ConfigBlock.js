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
      name: "frontPageCategories",
      label: "frontPageCategories",
      block: CollectionBlock,
      of: StringBlock,
      defaultItem: ""
    },
    {
      name: "frontPageLists",
      label: "frontPageLists",
      block: CollectionBlock,
      of: StringBlock,
      defaultItem: ""
    },
    {
      name: "storeCategories",
      label: "storeCategories",
      block: CollectionBlock,
      of: StringBlock,
      defaultItem: ""
    }
  ]
};

export default class ConfigBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
