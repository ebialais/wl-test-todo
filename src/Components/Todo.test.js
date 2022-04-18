import React from 'react';
import { act } from '@testing-library/react';
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