import React from "react";
import CSSModules from "react-css-modules";
import style from "./IapList.less";
import FirebaseTable from "../FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class IapList extends React.Component {
  render() {
    return (
      <div styleName="IapList">
        <FirebaseTable
          path={"iapItems"}
          title={"IAPs"}
          order={["id", "desc"]}
          fields={["id"]}
          linkTo={"iap/"}
        />
      </div>
    );
  }
}
