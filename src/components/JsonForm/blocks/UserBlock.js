import React, { Component } from "react";

import StringBlock from "./StringBlock";
import CollectionBlock from "./CollectionBlock";
import NumberBlock from "./NumberBlock";
import GenericBlock from "./GenericBlock";

let blockConfig = {
  name: "user",
  label: "New User",
  fields: [
    {
      block: StringBlock,
      name: "username",
      label: "User name1"
    },
    {
      block: StringBlock,
      name: "username3",
      label: "User name1"
    }
  ]
};

export default class UserBlock extends Component {
  render() {
    return <GenericBlock {...this.props} blockConfig={blockConfig} />;
  }
}
