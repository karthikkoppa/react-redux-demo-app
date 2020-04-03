import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import FileUpload from  '../src/upload/FileUpload';
import Table from  '../src/Table/Table';
import { connect } from "react-redux";
import { initialiseTable } from '../src/reducers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.initialiseTable();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FileUpload />
          <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  initialiseTable
};

export default connect(
  null,
  mapDispatchToProps
)(App);
