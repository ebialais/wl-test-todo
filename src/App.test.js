import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

it('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/Todo App/);
  expect(h1).toBeInTheDocument();
});

test('render complete All', async () => {
  await act(async () => {
      await act(async () => {
          const renderer = new ShallowRenderer()
          const renderedApp= renderer.render(<App />);
          expect(renderedApp).toMatchSnapshot('rendered App');
      });
  });
});