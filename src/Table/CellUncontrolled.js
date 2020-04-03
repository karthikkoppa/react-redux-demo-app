import React from "react";
import  PopupModal from "./Modal"

export default class TableCellUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value , isOpen:false};
  }

  onChange(e) {
    
    this.setState({ value: e.target.value });
  }
  onClick(e) {
    
    this.props.onChange(e);
  }

  showModal=()=>{
    this.setState({
      isOpen : true
    })
  }

  closeModal=()=>{
    this.setState({
      isOpen : false
    })
  }

  onBlur(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    if (this.props.column === 5) {
      
    }
    const readOnlyClass = this.props.readOnly ? "read-only" : "editable";

    return (
      <div key={this.props.id} className={readOnlyClass}>
        <PopupModal closeModal={this.closeModal} isOpen={this.state.isOpen}/>
        {(this.props.count != undefined && this.props.column === 5) &&

          <button onClick={this.showModal.bind(this)}>view {this.props.count}</button>
        }
        {(this.props.column === 5 && this.props.count == undefined) &&
          <button onClick={this.onClick.bind(this)}>whitelist</button>
        }
        {this.props.type !== "button" &&
          <input
            onChange={this.onChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
            value={this.state.value}
            readOnly={this.props.readOnly}
            disabled={this.props.readOnly}
          />
        }
      </div>
    );
  }
}
