import React from "react";
import CSSModules from "react-css-modules";
import style from "./Home.less";
import JsonForm from "../../components/JsonForm/JsonForm";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class Home extends React.Component {
  render() {
    return <div styleName="Home">Home</div>;
  }
}
