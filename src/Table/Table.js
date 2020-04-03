import React from "react";
import { connect } from "react-redux";
import Headers from "./Headers";
import Body from "./Body";

import { addRow, validateCells } from "../reducers";


class Table extends React.Component {

  render() {
    return (
      <div>
        <div className={"table-wrapper"}>
          <div className={"table"}>
            <Headers />
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addRow,
  validateCells
};

export default connect(
  null,
  mapDispatchToProps
)(Table);
