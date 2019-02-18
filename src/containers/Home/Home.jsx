import React from "react";
import CSSModules from "react-css-modules";
import style from "./Home.less";
import JsonForm from "../../components/JsonForm/JsonForm";

import { Link } from "react-router-dom";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class Home extends React.Component {
  render() {
    return (
      <div styleName="Home">
        <Link to="users">User list</Link>
        <Link to="crates">Crate list</Link>
        <Link to="products">Product list</Link>
        <Link to="orders">Order list</Link>
      </div>
    );
  }
}
