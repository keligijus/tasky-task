import React, { Component } from "react";

import TableHead from "./TableHead";
import TableRow from "./TableRow";
import utils from "./utils";

class Table extends Component {
  render() {
    const keys =
      this.props.data &&
      this.props.data.length &&
      Object.keys(this.props.data[0]).filter(
        key => typeof this.props.data[0][key] !== "object"
      );
    const childKeys =
      this.props.data &&
      this.props.data.length &&
      Object.keys(this.props.data[0]).filter(
        key => typeof this.props.data[0][key] === "object"
      );

    return (
      <table className="table is-fullwidth">
        <TableHead keys={keys} />
        <tbody>
          {this.props.data.map(item => (
            <TableRow
              key={item.id || utils.generateID()}
              keys={keys}
              item={item}
              childKeys={childKeys}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
