import React, { Component } from 'react';
import './index.css';

class TaskForm extends Component {
  
    state = {
      description: '',
      selectedLabels: [],
    };
  

  handleInputChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleLabelChange = (e) => {
    const selectedLabels = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({ selectedLabels });
  };

  handleAddTask = () => {
    this.props.addTask(this.state.description, this.state.selectedLabels);
    this.setState({ description: '', selectedLabels: [] });
  };

  render() {
    return (
      <div className="task-form">
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleInputChange}
          placeholder="Add a task"
        />
        <select multiple onChange={this.handleLabelChange}>
          {this.props.labels.map(label => (
            <option key={label.id} value={label.id}>{label.name}</option>
          ))}
        </select>
        <button onClick={this.handleAddTask}>Add Task</button>
      </div>
    );
  }
}

export default TaskForm;
