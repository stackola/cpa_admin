import React from "react";

export default class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          margin: 5,
          padding: 5,
          border: "1px solid black",
          borderRadius: 5
        }}
      >
        <div style={{ fontWeight: "bold" }}>{this.props.label}</div>
        {this.props.data.map(d => {
          let Block = this.props.of;
          return <Block data={d} />;
        })}
      </div>
    );
  }
}
