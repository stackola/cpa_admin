import React from "react";
import CSSModules from "react-css-modules";
import style from "./Lists.less";
import FirebaseTable from "../FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class Lists extends React.Component {
  render() {
    return (
      <div styleName="Lists">
        <FirebaseTable
          path={"lists"}
          title={"Lists"}
          order={["id", "desc"]}
          fields={["name"]}
          linkTo={"list/"}
        />
      </div>
    );
  }
}
