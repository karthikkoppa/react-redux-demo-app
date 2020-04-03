import React from "react";
import Cell from "./Cell";
import { connect } from "react-redux";

class Headers extends React.Component {
  render() {
    
    return (
      <div className={"header"}>
        {this.props.headers.map((cell, j) => (
          <Cell count={this.props.selectedRows.length} {...cell} isHeader={true} key={cell.id} column={j} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ table }) => ({
  headers: table.headers,
  selectedRows: table.selectedRows
});

export default connect(
  mapStateToProps,
  null
)(Headers);
