import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import Todo from './Todo';

test('test uncompleted todo rendering', async () => {
    await act(async () => {
        const props = {todo : { action: 'stuff', completed: false }};
        await act(async () => {
            const renderer = new ShallowRenderer()
            const renderedTodo = renderer.render(<Todo {...props} />);
            expect(renderedTodo).toMatchSnapshot('uncompleted todo');
        });
    });
});

test('test completed todo rendering', async () => {
    await act(async () => {
        const props = {todo : { action: 'stuff', completed: true }};
        await act(async () => {
            const renderer = new ShallowRenderer()
            const renderedTodo = renderer.render(<Todo {...props} />);
            expect(renderedTodo).toMatchSnapshot('completed todo');
        });
    });
});

it('buttons should call methods', () => {
    const props = {todo : { action: 'stuff', completed: true }};
    const mockToggleCompleted = jest.fn();
    const mockDeleteTodo = jest.fn();
    render( 
        <Todo 
            toggleCompleted={mockToggleCompleted}
            deleteTodo={mockDeleteTodo}
            {...props}
        /> );

    const toggleCompletedButton = screen.getByTestId('toggleCompleted-button');
    fireEvent.click(toggleCompletedButton);
    expect(mockToggleCompleted).toHaveBeenCalledTimes(1);

    const deleteTodoButton = screen.getByTestId('deleteTodo-button');
    fireEvent.click(deleteTodoButton);
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
});