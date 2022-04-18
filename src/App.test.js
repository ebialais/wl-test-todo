import { render, act, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

it('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/Todo App/);
  expect(h1).toBeInTheDocument();
});

test('render complete All', async () => {
  await act(async () => {
    const renderer = new ShallowRenderer()
    const renderedApp= renderer.render(<App />);
    expect(renderedApp).toMatchSnapshot('rendered App');
  });
});

test('should behave as expected', () => {
  
  render(<App/>)

  //intial state
  
  const list = screen.getByTestId('todoList');
  expect(list.children.length).toEqual(1);
  expect(list).toContainElement(screen.getByText('Meet the team @WorldLine'));

  //add a new element

  const todoFormInput = screen.getByTestId('todoForm-input');
  user.type(todoFormInput, 'a new todo');
  const submitButton = screen.getByText(/add/i);
  fireEvent.click(submitButton);

  expect(list.children.length).toEqual(2);
  expect(list).toContainElement(screen.getByText('a new todo'));

  //completed element

  const toggleCompletedButtons = screen.getAllByTestId('toggleCompleted-button');
  fireEvent.click(toggleCompletedButtons[1]);
  expect(screen.getByText('a new todo').parentElement).toHaveClass('completed');

  //delete element

  const deleteTodoButtons = screen.getAllByTestId('deleteTodo-button');
  fireEvent.click(deleteTodoButtons[1]);
  expect(list.children.length).toEqual(1);
});