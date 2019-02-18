import React from "react";
import CSSModules from "react-css-modules";
import style from "./Crates.less";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class Crates extends React.Component {
  render() {
    return (
      <div styleName="Crates">
        <FirebaseTable
          path={"crates"}
          fields={["name", "price"]}
          order={["price", "desc"]}
          linkTo={"editCrate/"}
        />
      </div>
    );
  }
}
