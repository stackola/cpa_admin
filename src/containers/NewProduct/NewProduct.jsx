import React from "react";
import CSSModules from "react-css-modules";
import style from "./NewProduct.less";
import JsonForm from "../../components/JsonForm/JsonForm";
import ProductBlock from "../../components/JsonForm/blocks/ProductBlock";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
class NewProduct extends React.Component {
  saveProd(v) {
    let newProd = firebase
      .firestore()
      .collection("products")
      .doc();
    newProd.set({ ...v, id: newProd.id }).then(() => {
      this.props.history.push("/editProduct/" + newProd.id);
    });
  }
  render() {
    return (
      <div styleName="NewProduct">
        <JsonForm
          root={ProductBlock}
          save={v => {
            console.log("got prod", v);
            this.saveProd(v);
          }}
          validate={validateProd}
        />
      </div>
    );
  }
}

function validateProd(v) {
  return v.name.length > 2;
}

export default withRouter(NewProduct);
