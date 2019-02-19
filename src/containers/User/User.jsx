import React from "react";
import CSSModules from "react-css-modules";
import style from "./User.less";
import JsonForm from "../../components/JsonForm/JsonForm";
import UserBlock from "../../components/JsonForm/blocks/UserBlock";

import { withRouter } from "react-router";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";
import GenericItem from "../../components/GenericItem/GenericItem";
import UserItem from "../../components/GenericItem/UserItem";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
class User extends React.Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <div styleName="User">
        <UserItem id={id} />
        <FirebaseTable
          title={"Challenges"}
          path={"users/" + id + "/challenges"}
          fields={["id", "progress"]}
          linkTo={""}
        />
        <FirebaseTable
          title={"crates"}
          order={["time", "desc"]}
          path={"users/" + id + "/crates"}
          fields={["id", "opened"]}
          linkTo={""}
        />
        <FirebaseTable
          title={"transactions"}
          order={["time", "desc"]}
          path={"users/" + id + "/transactions"}
          fields={["amount", "text", "time"]}
          parsers={{
            time: v => {
              return v && v.toDate().toString();
            }
          }}
          linkTo={""}
        />
        <FirebaseTable
          title={"vouchers"}
          order={["time", "desc"]}
          path={"users/" + id + "/vouchers"}
          fields={["id", "used", "sold", "price"]}
          linkTo={""}
        />

        <FirebaseTable
          title={"orders"}
          order={["time", "desc"]}
          where={["user", "==", id]}
          path={"orders"}
          fields={["id", "status", "totalPrice"]}
          linkTo={"/order/"}
        />
      </div>
    );
  }
}

export default withRouter(User);
