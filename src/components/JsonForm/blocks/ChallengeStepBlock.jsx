import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import TextBlock from "./TextBlock";
import PrizeBlock from "./PrizeBlock";

let blockConfig = {
  name: "challenge",
  label: "New Step",
  fields: [
    {
      block: StringBlock,
      name: "name",
      label: "Name"
    },
    {
      block: StringBlock,
      name: "text",
      label: "Text"
    },
    {
      block: NumberBlock,
      name: "order",
      label: "Order"
    },
    {
      block: NumberBlock,
      name: "target",
      label: "Target"
    },
    {
      block: CollectionBlock,
      of: PrizeBlock,
      name: "prizes",
      label: "Prizes",
      defaultItem: {}
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
