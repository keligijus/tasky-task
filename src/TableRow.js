import React, { Component } from "react";
import Table from "./Table";
import "./TableRow.css";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = { showChildTables: false };
    this.toggleShowChildTables = this.toggleShowChildTables.bind(this);
  }

  toggleShowChildTables() {
    this.setState(prevState => ({
      showChildTables: !prevState.showChildTables
    }));
  }

  render() {
    let childTables;
    let childKeysWithItems;

    if (this.props.childKeys && this.props.childKeys.length) {
      childKeysWithItems = this.props.childKeys.filter(
        key => this.props.item[key] && this.props.item[key].length
      );
    }

    if (this.state.showChildTables && childKeysWithItems) {
      childTables = childKeysWithItems.map(key => {
        return (
          <tr key={key}>
            <td colSpan={this.props.keys.length}>
              <Table key={key} data={this.props.item[key]} />
            </td>
          </tr>
        );
      });
    }

    return (
      <React.Fragment>
        <tr
          key={this.props.item.id}
          onClick={
            childKeysWithItems && childKeysWithItems.length
              ? this.toggleShowChildTables
              : () => {}
          }
          className={`${
            childKeysWithItems && childKeysWithItems.length
              ? "has-children"
              : ""
          } ${this.state.showChildTables ? "is-selected" : ""}`}
        >
          {this.props.keys.map(key => (
            <td key={key}>{this.props.item[key]}</td>
          ))}
        </tr>
        {childTables}
      </React.Fragment>
    );
  }
}

export default TableRow;
