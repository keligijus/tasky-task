import React, { Component } from "react";
import utils from "./utils";

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.keys.map(key => (
            <th key={key}>{utils.capitalizeFirstLetter(key)}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
