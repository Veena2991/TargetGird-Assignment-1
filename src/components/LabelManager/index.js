import React, { Component } from 'react';
import './index.css';

class LabelManager extends Component {
  
  state = { labelName: '' };
  
  handleInputChange = (e) => {
    this.setState({ labelName: e.target.value });
  };

  handleAddLabel = () => {
    this.props.addLabel(this.state.labelName);
    this.setState({ labelName: '' });
  };

  render() {
    return (
      <div className="label-manager">
        <input
          type="text"
          value={this.state.labelName}
          onChange={this.handleInputChange}
          placeholder="Add a label"
        />
        <button onClick={this.handleAddLabel}>Add</button>
      </div>
    );
  }
}

export default LabelManager;
