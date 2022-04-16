import { render, screen } from '@testing-library/react';
import App from './App';

it('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/Todo App/);
  expect(h1).toBeInTheDocument();
});

it('should load todos', () => {
// const { debug } = render(<App/>)
// debug()

})