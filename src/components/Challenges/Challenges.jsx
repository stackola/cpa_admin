import React from "react";
import CSSModules from "react-css-modules";
import style from "./Challenges.less";
import FirebaseTable from "../FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class Challenges extends React.Component {
  render() {
    return (
      <div styleName="Challenges">
        <FirebaseTable
          path={"challenges"}
          title={"Challenges"}
          order={["order", "desc"]}
          fields={["name"]}
          linkTo={"challenge/"}
        />
      </div>
    );
  }
}
