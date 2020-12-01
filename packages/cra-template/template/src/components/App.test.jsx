import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders starter span', () => {
  render(<App />);
  const spanElement = screen.getByText(/starter/i);
  expect(spanElement).toBeInTheDocument();
});
