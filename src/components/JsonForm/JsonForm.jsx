import React from "react";
import CSSModules from "react-css-modules";
import style from "./JsonForm.less";

import StringBlock from "./blocks/StringBlock";
import CollectionBlock from "./blocks/CollectionBlock";
import NumberBlock from "./blocks/NumberBlock";
import GenericBlock from "./blocks/GenericBlock";
import BoolBlock from "./blocks/BoolBlock";

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
      block: GenericBlock,
      name: "username3",
      label: "User name1"
    },
    { block: BoolBlock, name: "username2", label: "User name", default: false }
  ]
};
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class JsonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  setValue(key, value, merge) {
    console.log(key, value, merge);
    this.setState(
      (state, props) => {
        return merge ? { ...(state || {}), ...value } : value;
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    let Block = this.props.root;
    return (
      <div styleName="JsonForm">
        <Block
          setValue={(k, v, merge) => {
            this.setValue(k, v, merge);
          }}
          value={this.state}
        />
      </div>
    );
  }
}
