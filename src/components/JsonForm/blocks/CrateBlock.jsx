import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import TextBlock from "./TextBlock";
import PrizeBlock from "./PrizeBlock";
import IapBlock from "./IapBlock";

let blockConfig = {
  name: "challenge",
  label: "New Crate",
  fields: [
    {
      block: StringBlock,
      name: "name",
      label: "Name"
    },

    {
      block: NumberBlock,
      name: "hue",
      label: "Hue"
    },
    {
      block: NumberBlock,
      name: "price",
      label: "Price"
    },
    {
      name: "items",
      label: "Items",
      block: CollectionBlock,
      of: PrizeBlock,
      defaultItem: {}
    },
    {
      name: "iaps",
      label: "In apps",
      block: CollectionBlock,
      of: IapBlock,
      defaultItem: {}
    }
  ]
};

export default class CrateBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
