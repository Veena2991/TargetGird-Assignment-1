import React, { Component } from 'react';
import './index.css';

class TodoItem extends Component {
  
    state = {
      isEditing: false,
      description: this.props.task.description,
      selectedLabels: this.props.task.labels,
    };
  

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleInputChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleLabelChange = (e) => {
    const selectedLabels = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({ selectedLabels });
  };

  handleUpdate = () => {
    const updatedTask = {
      ...this.props.task,
      description: this.state.description,
      labels: this.state.selectedLabels,
    };
    this.props.updateTask(updatedTask);
    this.toggleEdit();
  };

  render() {
    const { task, labels, deleteTask } = this.props;
    const taskLabels = labels.filter(label => task.labels.includes(label.id));

    return (
      <div className="todo-item">
        {this.state.isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            <select
              multiple
              value={this.state.selectedLabels}
              onChange={this.handleLabelChange}
              className="label-select"
            >
              {labels.map(label => (
                <option key={label.id} value={label.id}>
                  {label.name}
                </option>
              ))}
            </select>
            <button onClick={this.handleUpdate}>Save</button>
            <button onClick={this.toggleEdit}>Cancel</button>
          </div>
        ) : (
          <div className="view-mode">
            <p>{task.description}</p>
            <div className="labels">
              {taskLabels.map(label => (
                <span key={label.id} className="label">
                  {label.name}
                </span>
              ))}
            </div>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default TodoItem;
