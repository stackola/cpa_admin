import React from "react";
import CSSModules from "react-css-modules";
import style from "./GenericItem.less";

import firebase from "lib/firebase";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class GenericItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    //load item by id, mostly.
    let collection = this.props.blockConfig.collection;
    console.log(this.props);
    let id = this.props.id || this.props.data;
    firebase
      .firestore()
      .collection(collection)
      .doc(id)
      .get()
      .then(snap => {
        this.setState({ ...snap.data(), loading: false });
      });
  }
  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div styleName="GenericItem">
        <div style={{ fontWeight: "bold" }}>{this.props.blockConfig.label}</div>
        {this.props.blockConfig.fields.map(b => {
          let B = b.block;
          return <B {...b} data={this.state[b.name]} />;
        })}
      </div>
    );
  }
}
