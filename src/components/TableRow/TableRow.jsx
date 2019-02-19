import React from "react";
import CSSModules from "react-css-modules";
import style from "./TableRow.less";
import { Link } from "react-router-dom";
@CSSModules(style, { allowMultiple: true, handleNotFoundStyleName: "log" })
export default class TableRow extends React.Component {
  render() {
    return (
      <Link to={this.props.linkTo + this.props.data.id} styleName="TableRow">
        <div style={{ width: 30 }}>{this.props.index}</div>
        {this.props.fields.map(fn => {
          return (
            <div styleName={"field"}>
              {this.props.parsers && this.props.parsers[fn]
                ? this.props.parsers[fn](this.props.data[fn])
                : this.props.data[fn].toString()}
            </div>
          );
        })}
      </Link>
    );
  }
}
