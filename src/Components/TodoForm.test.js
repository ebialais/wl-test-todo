import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import user from '@testing-library/user-event';
import TodoForm from './TodoForm';


it('should accept value for new todo', () => {
    const mockAddTodo = jest.fn()
    const { getByRole, getByText } = render( <TodoForm addTodo={mockAddTodo}/> )

    const input = getByRole('textbox', {name : ''});
    user.type(input, 'a new todo');
    expect(input.value).toEqual('a new todo');

    const submitButton = getByText(/add/i);
    fireEvent.click(submitButton);
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    
});

test('test todoForm rendering', async () => {
    const mockAddTodo = jest.fn()

    await act(async () => {
        await act(async () => {
            const renderer = new ShallowRenderer();
            const renderedTodoForm = renderer.render( <TodoForm addTodo={mockAddTodo} /> );
            expect(renderedTodoForm).toMatchSnapshot('rendered TodoForm');
        });
    });
});