import React from 'react'
import Todo from './Todo'
import './style.css';


const TodoList = (props) => {
    
    const todos = props.todos;

    const toggleCompleted = (id) => {
        props.toggleCompleted(id)
    };

    const deleteTodo = (id) => {
        props.deleteTodo(id)
    }
    
    return (
        <ul className='todo-list'>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id} 
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
};

export default TodoList;