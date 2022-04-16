import React from 'react';
import { render, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import TodoForm from './TodoForm';


it('should accept value for new todo', () => {
    const mockAddTodo = jest.fn()
    const { getByRole, getByText } = render( <TodoForm addTodos={mockAddTodo}/> )

    const input = getByRole('textbox', {name : ''});
    user.type(input, 'a new todo');
    expect(input.value).toEqual('a new todo');

    // const onSubmit = jest.fn()
    // const submitButton = getByText(/add/i);
    // fireEvent.click(submitButton);
    // expect(onSubmit).toHaveBeenCalled();
    // expect(mockAddTodo).toHaveBeenCalledTimes(1);
    
});

test('test todoForm rendering', async () => {
    const mockAddTodo = jest.fn()

    await act(async () => {
        await act(async () => {
            const rendredTodoForm = render( <TodoForm addTodo={mockAddTodo} /> );
            expect(rendredTodoForm).toMatchSnapshot('rendred TodoForm');
        });
    });
});