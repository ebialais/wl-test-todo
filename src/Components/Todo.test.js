import React from 'react';
import { act, render } from '@testing-library/react';
import Todo from './Todo';

test('test uncompleted todo rendering', async () => {
    await act(async () => {
        const todo = { action: 'stuff', completed: false };
        await act(async () => {
            const { container } = render( <Todo todo={todo}/> );
            expect(container).toMatchSnapshot('uncompleted todo');
        });
    });
});

test('test completed todo rendering', async () => {
    await act(async () => {
        const todo = { action: 'stuff', completed: true };
        await act(async () => {
            const { container } = render( <Todo todo={todo}/> );
            expect(container).toMatchSnapshot('uncompleted todo');
        });
    });
});