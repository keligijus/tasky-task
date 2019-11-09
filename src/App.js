import React, { Component } from "react";
import Table from "./Table.js";
import Filters from "./Filters";
import testData from "./data/testData";

import "bulma/css/bulma.css";

const data = testData.data.random;
const filterSchema = [
  { key: "id", filterType: "string", input: "" },
  { key: "name", filterType: "string", input: "" },
  { key: "type", filterType: "string", input: "" },
  { key: "state", filterType: "enum", values: ["up", "down"], input: "" },
  { key: "status", filterType: "enum", values: ["good", "bad"], input: "" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data, filteredData: {}, filterSchema };
    this.filterData = this.filterData.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  filterData(filterSchema, data) {
    let result = data;
    const filtersWithInput = filterSchema.filter(item => !!item.input);

    filtersWithInput.forEach(
      filter =>
        (result = result.filter(
          item => String(item[filter.key]).indexOf(filter.input) !== -1
        ))
    );

    if (!result.length) {
      // return keys to maintain table shape
      result[0] = {};
      Object.keys(data[0]).forEach(key => {
        result[0][key] = "";
      });
    }

    return result;
  }

  updateFilter(key, input) {
    const clone = JSON.parse(JSON.stringify(this.state.filterSchema));
    const index = clone.findIndex(item => item.key === key);
    if (index !== -1) {
      clone[index].input = input;
    }

    this.setState({ filterSchema: clone });
  }

  clearFilters() {
    this.setState({ filterSchema: filterSchema });
  }

  render() {
    return (
      <div className={"app container"}>
        <Filters
          filterSchema={this.state.filterSchema}
          onUpdateFilter={this.updateFilter}
          clearFilters={this.clearFilters}
        />
        <hr />
        <Table
          data={this.filterData(this.state.filterSchema, this.state.data)}
        />
      </div>
    );
  }
}

export default App;
