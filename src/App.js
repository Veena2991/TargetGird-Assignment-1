import React, { Component } from 'react';
import { PiNotePencilDuotone } from "react-icons/pi";

import NoteGrid from './components/NoteGrid';
import LabelManager from './components/LabelManager';
import TaskForm from './components/TaskForm';
import LabelSearch from './components/LabelSearch';
import './App.css';

class App extends Component {
 
    state = {
      tasks: [],
      labels: [],
      filteredTasks: [],
      selectedLabel: null,
    };
  

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const labels = JSON.parse(localStorage.getItem('labels')) || [];
    this.setState({ tasks, labels, filteredTasks: tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
    if (prevState.labels !== this.state.labels) {
      localStorage.setItem('labels', JSON.stringify(this.state.labels));
    }
  }

  filterTasksByLabel = (label) => {
    const filteredTasks = this.state.tasks.filter(task =>
      task.labels.includes(label.id)
    );
    this.setState({ filteredTasks, selectedLabel: label });
  };

  addTask = (description, labels = []) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      labels,
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
      filteredTasks: [...prevState.tasks, newTask],
    }));
  };

  addLabel = (name) => {
    const newLabel = {
      id: Date.now(),
      name,
    };

    this.setState(prevState => ({
      labels: [...prevState.labels, newLabel],
    }));
  };

  deleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks: updatedTasks, filteredTasks: updatedTasks });
  };

  updateTask = (updatedTask) => {
    const updatedTasks = this.state.tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.setState({ tasks: updatedTasks, filteredTasks: updatedTasks });
  };

  render() {
    return (
      <div className="app">
        <h1>Let's make a To Do List</h1>
        <img src="https://edit.sundayriley.com/wp-content/uploads/2019/05/list-making-wellness-the-sunday-edit.jpg" alt="todo-img" className="todo-image-style" />
        <header className="app-header">
        <PiNotePencilDuotone size={40} color="blue"/>
          <LabelSearch
            labels={this.state.labels}
            onLabelSelect={this.filterTasksByLabel}
          />
        </header>
        <TaskForm addTask={this.addTask} labels={this.state.labels} />
        <LabelManager labels={this.state.labels} addLabel={this.addLabel} />
        <NoteGrid
          tasks={this.state.filteredTasks}
          labels={this.state.labels}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}

export default App;
