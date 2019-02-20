import React from "react";

export default class NoLoadItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName="GenericItem">
        <div style={{ fontWeight: "bold" }}>{this.props.blockConfig.label}</div>
        {this.props.blockConfig.fields.map(b => {
          let B = b.block;
          return <B {...b} data={this.props.data[b.name]} />;
        })}
      </div>
    );
  }
}
