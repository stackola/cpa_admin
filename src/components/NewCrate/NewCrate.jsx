import React from "react";
import CSSModules from "react-css-modules";
import style from "./NewCrate.less";
import JsonForm from "../../components/JsonForm/JsonForm";
import CrateBlock from "../../components/JsonForm/blocks/CrateBlock";
import firebase from "lib/firebase";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class NewCrate extends React.Component {
  saveCrate(v) {
    let newCrate = firebase
      .firestore()
      .collection("crates")
      .doc();
    newCrate.set({ ...v, id: newCrate.id });
  }
  render() {
    return (
      <div styleName="NewCrate">
        <JsonForm
          root={CrateBlock}
          save={v => {
            console.log("got crate", v);
            this.saveCrate(v);
          }}
          validate={validateCrate}
        />
      </div>
    );
  }
}
function validateCrate(v) {
  return v.name.length > 2;
}
