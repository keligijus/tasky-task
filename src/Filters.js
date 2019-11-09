import React, { Component } from "react";
import Filter from "./Filter";

class Filters extends Component {
  render() {
    return (
      <div className={"field is-grouped is-grouped-multiline"}>
        {this.props.filterSchema.map(filter => (
          <Filter
            key={filter.key}
            filter={filter}
            onUpdateFilter={this.props.onUpdateFilter}
          />
        ))}
        <div className="control">
          <label className="label">&nbsp;</label>
          <button
            className={"button is-primary is-outlined"}
            onClick={this.props.clearFilters}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
