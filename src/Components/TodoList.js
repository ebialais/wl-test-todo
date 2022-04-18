import React from 'react'
import Todo from './Todo'
import './style.css';


const TodoList = (props) => {
    
    const todos = props.todos;
    
    return (
        <ul className='todo-list'>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id} 
                        todo={todo}
                        toggleCompleted={props.toggleCompleted}
                        deleteTodo={props.deleteTodo}
                    />
                )
            })}
        </ul>
    )
};

export default TodoList;