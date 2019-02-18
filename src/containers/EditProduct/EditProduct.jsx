import React from "react";
import CSSModules from "react-css-modules";
import style from "./EditProduct.less";

import JsonForm from "../../components/JsonForm/JsonForm";
import ProductBlock from "../../components/JsonForm/blocks/ProductBlock";
import firebase from "lib/firebase";
import { withRouter } from "react-router";
import FirebaseTable from "../../components/FirebaseTable/FirebaseTable";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
export class EditProduct extends React.Component {
  saveProd(v) {
    let id = this.props.match.params.id;
    let newProd = firebase
      .firestore()
      .collection("products")
      .doc(id);
    newProd.set({ ...v, id: newProd.id });
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div styleName="EditProduct">
        <JsonForm
          root={ProductBlock}
          title={"Edit product"}
          preload={"products/" + id}
          save={v => {
            console.log("got prod", v);
            this.saveProd(v);
          }}
          validate={validateProd}
        />
        <FirebaseTable
          path={"products/" + id + "/reviews"}
          fields={["rating", "text", "shippingTime"]}
          linkTo={""}
        />
      </div>
    );
  }
}

function validateProd(v) {
  return v.name.length > 2;
}

export default withRouter(EditProduct);
