import React from "react";
import CSSModules from "react-css-modules";
import style from "./Order.less";
import OrderBlock from "../../components/JsonForm/blocks/OrderBlock";
import JsonForm from "../../components/JsonForm/JsonForm";

import { withRouter } from "react-router";
import OrderItem from "../../components/GenericItem/OrderItem";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
class Order extends React.Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <div styleName="Order">
        <OrderItem id={id} />
      </div>
    );
  }
}

export default withRouter(Order);
