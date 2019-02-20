import React from "react";
import CSSModules from "react-css-modules";
import style from "./EditList.less";
import JsonForm from "../JsonForm/JsonForm";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
import ListBlock from "../../components/JsonForm/blocks/ListBlock";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
class EditList extends React.Component {
  save(v) {
    let id = this.props.match.params.id;
    let newItem = firebase
      .firestore()
      .collection("lists")
      .doc(id);
    newItem.set({ ...v });
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div styleName="EditList">
        <JsonForm
          root={ListBlock}
          title={"Edit list"}
          preload={"lists/" + id}
          save={v => {
            console.log("got crate", v);
            this.save(v);
          }}
        />
      </div>
    );
  }
}

export default withRouter(EditList);
