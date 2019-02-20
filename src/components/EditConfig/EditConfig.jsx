import React from "react";
import JsonForm from "../JsonForm/JsonForm";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
import ListBlock from "../../components/JsonForm/blocks/ListBlock";
import ConfigBlock from "../JsonForm/blocks/ConfigBlock";

class EditConfig extends React.Component {
  save(v) {
    let id = "main";
    let newItem = firebase
      .firestore()
      .collection("config")
      .doc(id);
    newItem.set({ ...v });
  }
  render() {
    let id = "main";
    return (
      <div>
        <JsonForm
          root={ConfigBlock}
          title={"Edit list"}
          preload={"config/" + id}
          save={v => {
            this.save(v);
          }}
        />
      </div>
    );
  }
}

export default withRouter(EditConfig);
