import React from 'react';
import TodoItem from '../TodoItem';
import './index.css';

function NoteGrid({ tasks, labels, deleteTask, updateTask}) {
  return (
    <div className="note-grid">
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} labels={labels} deleteTask={deleteTask}
        updateTask={updateTask}/>
      ))}
    </div>
  );
}

export default NoteGrid;
