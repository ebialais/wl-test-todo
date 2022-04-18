import React from 'react';
import './style.css';

const Todo = (props) => {
  const todo = props.todo
  
  return (
    <li className={ todo.completed ? 'completed todo-element' : 'uncompleted todo-element'}  >
      <p className={ todo.completed ? 'completed-todo-p' : 'todo-p'}>{todo.action}</p>
      <div className='todo-buttons-wrapper'>
        <button
          className='todo-button'
          onClick={()=>props.toggleCompleted(todo.id)}
        >
          <i className="fi fi-br-check"></i>
        </button>
        <button 
          className='todo-button'
          onClick={()=>props.deleteTodo(todo.id)}
        >
          <i className="fi fi-rs-trash"></i>
        </button>
      </div>
    </li>
  )
};

export default Todo;
