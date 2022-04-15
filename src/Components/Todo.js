import React from 'react';
import './style.css';

export const Todo = (props) => {
  const todo = props.todo

  return (
    <div className={ todo.completed ? 'completed todo-element' : 'uncompleted todo-element'}  >
      <p className='todo-p'>{todo.action}</p>
      <div className='icons'>
        <button onClick={()=>props.toggleCompleted(todo.id)}>
          {!todo.completed ? "To Do" : "Done"}
        </button>
        <button onClick={()=>props.deleteTodo(todo.id)}>
          remove
        </button>
      </div>
    </div>
  )
};
