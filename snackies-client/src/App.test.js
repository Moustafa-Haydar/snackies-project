import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

test('renders header quote', () => {
  render(<App />);
  const quoteElement = screen.getByText(/a snack a day keeps the hunger away/i);
  expect(quoteElement).toBeInTheDocument();
});
