import React, { Component } from "react";
import StringBlock from "./StringBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
import GenericItem from "./GenericItem";
import UserItem from "./UserItem";
import ProductItem from "./ProductItem";
export default class OrderItem extends Component {
  render() {
    return (
      <GenericItem
        {...this.props}
        blockConfig={{
          name: "order",
          label: "Order",
          collection: "orders",
          fields: [
            {
              block: StringBlock,
              name: "address",
              label: "Address"
            },
            {
              block: StringBlock,
              name: "id",
              label: "id"
            },
            {
              block: ProductItem,
              name: "productId",
              label: "productId"
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
              block: NumberBlock,
              name: "totalPrice",
              label: "total price"
            },

            {
              block: StringBlock,
              name: "trackingId",
              label: "trackingId"
            },
            {
              block: BoolBlock,
              name: "usedVoucher",
              label: "usedVoucher"
            },
            {
              block: StringBlock,
              name: "voucherId",
              label: "voucherId"
            },
            {
              block: UserItem,
              name: "user",
              label: "user"
            }
          ]
        }}
      />
    );
  }
}
