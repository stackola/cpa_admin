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
          label: "New Product",
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
              block: TextBlock,
              name: "text",
              label: "Text"
            },
            {
              block: NumberBlock,
              name: "price",
              label: "Price"
            },
            {
              block: OptionsBlock,
              options: ["Gadgets", "Fashion", "Technology", "Toys"],
              name: "category",
              label: "Category"
            },
            {
              block: NumberBlock,
              name: "popularity",
              label: "popularity"
            },
            {
              block: ImageBlock,
              name: "image",
              label: "Image"
            },
            {
              name: "images",
              label: "Images",
              block: CollectionBlock,
              of: ImageBlock,
              defaultItem: ""
            },
            {
              name: "shippingOptions",
              label: "Shipping Options",
              block: CollectionBlock,
              of: ShippingOptionBlock,
              defaultItem: {
                name: "Free shipping",
                price: 0,
                time: "4-5 weeks"
              }
            }
          ]
        }}
      />
    );
  }
}
