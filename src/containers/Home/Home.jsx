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
        <Link to="/users">User list</Link>
        <Link to="/crates">Crate list</Link>
        <Link to="/products">Product list</Link>
        <Link to="/newProduct">New Product</Link>
        <Link to="/orders">Order list</Link>
        <Link to="/challenges">Challenge list</Link>
        <Link to="/iapList">IAPs</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/offers">Offer lists</Link>
        <Link to="/config">Config</Link>
      </div>
    );
  }
}
