import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  // const header = screen.getByText(/Todo List/i);
  // expect(header).toBeInTheDocument();
});
