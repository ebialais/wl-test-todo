import React from 'react';
import { act, render } from '@testing-library/react';
import TodoList from './TodoList';

test('test todoList rendering', async () => {
    await act(async () => {
        const mockTodo = [
            { id: 1, action: 'first stuff to do', completed: false },
            { id: 2, action: 'second stuff to do', completed: false },
            { id: 3, action: 'third stuff to do', completed: false },
        ];

        const mockToggleCompleted = jest.fn();
        const mockDeleteTodo = jest.fn();

        await act(async () => {
            const renderedTodoList = render( 
                <TodoList 
                    todos={mockTodo}
                    toggleComplete={mockToggleCompleted}
                    deleteComplete={mockDeleteTodo}
                /> );
            expect(renderedTodoList).toMatchSnapshot('rendred todoList');
        });
    });
});