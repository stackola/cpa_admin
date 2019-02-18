import React from "react";
import CSSModules from "react-css-modules";
import style from "./EditCrate.less";

import JsonForm from "../../components/JsonForm/JsonForm";
import CrateBlock from "../../components/JsonForm/blocks/CrateBlock";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export class EditCrate extends React.Component {
  saveCrate(v) {
    let id = this.props.match.params.id;
    let newCrate = firebase
      .firestore()
      .collection("crates")
      .doc(id);
    newCrate.set({ ...v, id: newCrate.id });
  }
  render() {
    console.log(this.props);
    let id = this.props.match.params.id;
    return (
      <div styleName="EditCrate">
        <JsonForm
          root={CrateBlock}
          title={"Edit crate"}
          preload={"crates/" + id}
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

export default withRouter(EditCrate);
