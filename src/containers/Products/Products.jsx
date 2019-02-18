import React from "react";
import CSSModules from "react-css-modules";
import style from "./Products.less";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class Products extends React.Component {
  render() {
    return (
      <div styleName="Products">
        <FirebaseTable
          path={"products"}
          fields={["name", "price"]}
          order={["price", "desc"]}
          linkTo={"editProduct/"}
        />
      </div>
    );
  }
}
