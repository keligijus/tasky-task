import React, { Component } from "react";
import utils from "./utils";

class Filter extends Component {
  render() {
    let filter = <span></span>;

    if (this.props && this.props.filter) {
      if (this.props.filter.filterType === "enum") {
        filter = (
          <div className="control">
            <label className="label" htmlFor={this.props.filter.key}>
              {utils.capitalizeFirstLetter(this.props.filter.key)}
            </label>
            <div className="control">
              <div className="select">
                <select
                  name={this.props.filter.key}
                  value={this.props.filter.input}
                  onChange={e =>
                    this.props.onUpdateFilter(
                      this.props.filter.key,
                      e.target.value
                    )
                  }
                >
                  <option value={""}>Any</option>
                  {this.props.filter.values.map(value => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      }

      if (this.props.filter.filterType === "string") {
        filter = (
          <div className="control">
            <label htmlFor={this.props.filter.key} className="label">
              {utils.capitalizeFirstLetter(this.props.filter.key)}
            </label>
            <div className="control">
              <input
                className="input"
                name={this.props.filter.key}
                type={"text"}
                value={this.props.filter.input}
                onChange={e =>
                  this.props.onUpdateFilter(
                    this.props.filter.key,
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        );
      }
    }

    return filter;
  }
}

export default Filter;
