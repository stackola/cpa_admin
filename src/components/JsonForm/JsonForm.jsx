import React from "react";
import CSSModules from "react-css-modules";
import style from "./JsonForm.less";

import firebase from "lib/firebase";

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
    if (this.props.readOnly) {
      return;
    }
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
  loadItem(item) {
    firebase
      .firestore()
      .doc(item)
      .get()
      .then(snap => {
        this.setState(snap.data());
      });
  }
  save() {
    if (this.props.readOnly) {
      return;
    }
    if (this.props.validate) {
      this.props.validate(this.state) &&
        this.props.save &&
        this.props.save(this.state);
    } else {
      this.props.save && this.props.save(this.state);
    }
  }
  componentDidMount() {
    if (this.props.preload) {
      this.loadItem(this.props.preload);
    }
  }
  render() {
    let Block = this.props.root;
    return (
      <div styleName="JsonForm">
        <Block
          title={this.props.title}
          setValue={(k, v, merge) => {
            this.setValue(k, v, merge);
          }}
          value={this.state}
        />
        <div
          onClick={() => {
            this.save();
          }}
          style={{
            minWidth: 100,
            paddingLeft: 20,
            maxWidth: 500,
            paddingRight: 20,
            height: 40,
            borderRadius: 4,
            marginLeft: 10,
            background: "hsla(130,100%,33%,1)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Speichern
        </div>
      </div>
    );
  }
}
