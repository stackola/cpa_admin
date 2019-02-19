import React, { Component } from "react";
import StringBlock from "./StringBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
import GenericItem from "./GenericItem";
export default class UserItem extends Component {
  render() {
    return (
      <GenericItem
        {...this.props}
        blockConfig={{
          name: "user",
          label: "User",

          collection: "users",
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
              label: "Time",
              parse: v => {
                return v && v.toDate().toString();
              }
            },
            {
              block: StringBlock,
              name: "token",
              label: "Token?"
            }
          ]
        }}
      />
    );
  }
}
