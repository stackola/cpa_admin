import React from "react";
import CSSModules from "react-css-modules";
import style from "./NewProduct.less";
import JsonForm from "../../components/JsonForm/JsonForm";
import ProductBlock from "../../components/JsonForm/blocks/ProductBlock";
import ChallengeBlock from "../../components/JsonForm/blocks/ChallengeBlock";
import CrateBlock from "../../components/JsonForm/blocks/CrateBlock";
import IapDefBlock from "../../components/JsonForm/blocks/IapDefBlock";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export default class NewProduct extends React.Component {
  render() {
    return (
      <div styleName="NewProduct">
        <JsonForm root={ProductBlock} />
        <JsonForm root={ChallengeBlock} />
        <JsonForm root={CrateBlock} />
        <JsonForm root={IapDefBlock} />
      </div>
    );
  }
}
