import React, { Component } from "react";
import StringBlock from "./StringBlock";
import NumberBlock from "./NumberBlock";
import BoolBlock from "./BoolBlock";
import GenericItem from "./GenericItem";
export default class ProductItem extends Component {
  render() {
    return (
      <GenericItem
        {...this.props}
        blockConfig={{
          name: "product",
          label: "Product",

          collection: "products",
          fields: [
            {
              block: StringBlock,
              name: "name",
              label: "Name"
            },
            {
              block: StringBlock,
              name: "aliUrl",
              label: "URL"
            },
            {
              block: StringBlock,
              name: "text",
              label: "Text"
            },
            {
              block: NumberBlock,
              name: "price",
              label: "Price"
            },
            {
              block: StringBlock,
              name: "category",
              label: "Category"
            },
            {
              block: NumberBlock,
              name: "popularity",
              label: "popularity"
            },
            {
              block: StringBlock,
              name: "image",
              label: "Image"
            }
          ]
        }}
      />
    );
  }
}
