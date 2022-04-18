import React from 'react';
import { act  } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TodoList from './TodoList';
import Todo from './Todo';

test('test todoList rendering', async () => {
    await act(async () => {
        const mockTodos = [
            { id: 1, action: 'first stuff to do', completed: false },
            { id: 2, action: 'second stuff to do', completed: false },
            { id: 3, action: 'third stuff to do', completed: false },
        ];
        const renderer = new ShallowRenderer();
        const renderedTodoList = renderer.render( <TodoList todos={mockTodos}/> );
        expect(renderedTodoList).toMatchSnapshot('rendered TodoList');
    });
});

test('list should render 3 elements', async () => {
    await act(async () => {
        const mockTodos = [
            { id: 1, action: 'first stuff to do', completed: false },
            { id: 2, action: 'second stuff to do', completed: false },
            { id: 3, action: 'third stuff to do', completed: false },
        ];
        const renderer = new ShallowRenderer();
        const renderedTodoList = renderer.render(<TodoList todos={mockTodos}/>);
        expect(renderedTodoList.props.children).toHaveLength(3);
    });
});

