import React from 'react'
import { Todo } from './Todo'

export const TodoList = (props) => {
    
    const todos = props.todos;

    const toggleCompleted = (id) => {
        props.toggleCompleted(id)
    };

    const deleteTodo = (id) => {
        props.deleteTodo(id)
    }
    
    return (
        todos.map((todo) => {
            return (
                <Todo
                    key={todo.id} 
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}
                />
            )
        })
    )
}