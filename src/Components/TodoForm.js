import React, { useEffect, useState } from 'react';
import './style.css';

export const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodos(input)
        console.log('input 1 dans form', input)
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
                    placeholder='Add something to do'
                    value={input}
                    name='text'
                    onChange={handleChange}
                />
                <button className='todo-form-button'>Add</button>
            </form>
        </div>
    )
};
