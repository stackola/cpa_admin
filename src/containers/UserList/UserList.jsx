import React from "react";
import CSSModules from "react-css-modules";
import style from "./UserList.less";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class UserList extends React.Component {
  render() {
    return (
      <div styleName="UserList">
        <FirebaseTable
          path={"users"}
          title={"Users"}
          order={["time", "desc"]}
          fields={["id", "coins"]}
          linkTo={"user/"}
        />
      </div>
    );
  }
}
