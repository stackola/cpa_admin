import React from "react";
import CSSModules from "react-css-modules";
import style from "./JsonForm.less";

import StringBlock from "./blocks/StringBlock";
import CollectionBlock from "./blocks/CollectionBlock";
import NumberBlock from "./blocks/NumberBlock";
import GenericBlock from "./blocks/GenericBlock";

let tpl = {
  title: "New User",
  fields: [
    {
      block: StringBlock,
      name: "username",
      label: "User name1",
      default: "Hi"
    },
    {
      block: StringBlock,
      name: "username3",
      label: "User name1"
    },
    { block: NumberBlock, name: "username2", label: "User name", default: 29 },
    { block: GenericBlock, name: "aUser" },
    {
      block: CollectionBlock,
      of: GenericBlock,
      defaultItem: {},
      name: "coll1",
      label: "User name"
    }
  ]
};
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class JsonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {}
    };
  }
  setValue(key, value) {
    console.log(key, value);
    this.setState(
      (state, props) => {
        return { ...state, values: { ...state.values, [key]: value } };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div styleName="JsonForm">
        {tpl.fields.map((f, index) => {
          let Block = f.block;
          return (
            <Block
              key={index}
              {...f}
              setValue={(k, v) => {
                this.setValue(k, v);
              }}
              value={this.state.values[f.name]}
            />
          );
        })}
      </div>
    );
  }
}
