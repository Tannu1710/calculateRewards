import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
