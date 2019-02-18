import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
import GenericBlock from "./GenericBlock";

let blockConfig = {
  name: "user",
  label: "New User",
  fields: [
    {
      block: StringBlock,
      name: "address",
      label: "Address"
    },
    {
      block: NumberBlock,
      name: "coins",
      label: "Coins"
    },
    {
      block: StringBlock,
      name: "friend",
      label: "Friend?"
    },
    {
      block: BoolBlock,
      name: "notificationsEnabled",
      label: "Notis?"
    },
    {
      block: StringBlock,
      name: "time",
      label: "Time"
    },
    {
      block: StringBlock,
      name: "token",
      label: "Token?"
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
