import React, { useState } from 'react';
import './style.css';

const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(input)
        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    return (
        <div className='todo-form-container'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    className='todo-input'
                    type='text'
                    data-testid='todoForm-input'
                    placeholder='Add something to do'
                    value={input}
                    onChange={handleChange}
                />
                <button className='todo-form-button'>Add</button>
            </form>
        </div>
    )
};

export default TodoForm;
