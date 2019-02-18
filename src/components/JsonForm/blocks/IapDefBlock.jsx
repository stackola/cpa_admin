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
  label: "New In app",
  fields: [
    {
      block: StringBlock,
      name: "id",
      label: "id"
    },
    {
      name: "contents",
      label: "Contents",
      block: CollectionBlock,
      of: PrizeBlock,
      defaultItem: {}
    }
  ]
};

export default class IapDefBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
