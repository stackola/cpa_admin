import React from "react";
import CSSModules from "react-css-modules";
import style from "./Offers.less";
import FirebaseTable from "../FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class Offers extends React.Component {
  render() {
    return (
      <div styleName="Offers">
        <FirebaseTable
          path={"offers"}
          title={"Offers"}
          order={["coins", "desc"]}
          fields={["title", "coins"]}
          linkTo={"offer/"}
        />
      </div>
    );
  }
}
