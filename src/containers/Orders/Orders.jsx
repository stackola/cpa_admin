import React from "react";
import CSSModules from "react-css-modules";
import style from "./Orders.less";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class Orders extends React.Component {
  render() {
    return (
      <div styleName="Orders">
        <FirebaseTable
          title={"orders"}
          order={["time", "desc"]}
          path={"orders"}
          fields={["id", "status", "totalPrice"]}
          linkTo={"order/"}
        />
      </div>
    );
  }
}
