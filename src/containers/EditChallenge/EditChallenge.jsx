import React from "react";
import CSSModules from "react-css-modules";
import style from "./EditChallenge.less";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
import ChallengeBlock from "../../components/JsonForm/blocks/ChallengeBlock";
import JsonForm from "../../components/JsonForm/JsonForm";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
class EditChallenge extends React.Component {
  save(v) {
    let id = this.props.match.params.id;
    let newItem = firebase
      .firestore()
      .collection("challenges")
      .doc(id);
    newItem.set({ ...v });
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div styleName="EditChallenge">
        <JsonForm
          root={ChallengeBlock}
          title={"Edit Challenge"}
          preload={"challenges/" + id}
          save={v => {
            this.save(v);
          }}
        />
      </div>
    );
  }
}

export default withRouter(EditChallenge);
