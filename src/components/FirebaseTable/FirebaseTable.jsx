import React from "react";
import CSSModules from "react-css-modules";
import style from "./FirebaseTable.less";

import firebase from "lib/firebase";
import TableRow from "../TableRow/TableRow";

@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class FirebaseTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: 5,
      items: []
    };
  }

  componentDidMount() {
    //get first 25.
    this.fetchItems();
  }
  fetchItems() {
    let order = this.props.order || null;
    let where = this.props.where || null;
    let pageSize = this.state.pageSize;
    let path = this.props.path;
    let q = firebase
      .firestore()
      .collection(path)
      .limit(pageSize);

    if (order) {
      q = q.orderBy(order[0], order[1]);
    }
    if (where) {
      q = q.where(where[0], where[1], where[2]);
    }
    if (this.state.items.length > 0) {
      q = q.startAfter(this.state.items[this.state.items.length - 1]);
    }
    q.get().then(snap => {
      let tmpItems = [];
      snap.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tmpItems.push(doc);
      });
      this.setState({ items: [...this.state.items, ...tmpItems] }, () => {
        console.log(this.state);
      });
    });
  }
  render() {
    return (
      <div styleName="FirebaseTable">
        <div style={{ fontWeight: "bold" }}>{this.props.title}</div>
        <div style={{ display: "flex" }}>
          <div style={{ width: 30 }}>#</div>
          {this.props.fields.map(f => {
            return <div style={{ flex: 1 }}>{f}</div>;
          })}
        </div>
        {this.state.items.map((i, index) => {
          let data = i.data();
          return (
            <TableRow
              data={data}
              index={index}
              fields={this.props.fields}
              linkTo={this.props.linkTo}
            />
          );
        })}
        <div onClick={() => this.fetchItems()}>Load more?</div>
      </div>
    );
  }
}
