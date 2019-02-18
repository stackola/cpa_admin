import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import ShippingOptionBlock from "./ShippingOptionBlock";
import GenericBlock from "./GenericBlock";
import BoolBlock from "./BoolBlock";
import TextBlock from "./TextBlock";
import ChallengeStepBlock from "./ChallengeStepBlock";

let blockConfig = {
  name: "challenge",
  label: "New Challenge",
  fields: [
    {
      block: StringBlock,
      name: "trigger",
      label: "Trigger"
    },
    {
      block: BoolBlock,
      name: "active",
      label: "Active"
    },
    {
      block: BoolBlock,
      name: "continous",
      label: "Continous"
    },
    {
      block: NumberBlock,
      name: "order",
      label: "Order"
    },
    {
      name: "steps",
      label: "Steps",
      block: CollectionBlock,
      of: ChallengeStepBlock,
      defaultItem: {}
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
