import { render, screen } from '@testing-library/react';
import InitialQuery from './InitialQuery';

test('renders learn react link', () => {
  render(<InitialQuery />);
  const linkElement = screen.getByText('Kate Chopin');
  expect("Kate Chopin").toBeInTheDocument();
});
