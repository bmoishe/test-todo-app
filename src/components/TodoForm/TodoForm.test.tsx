import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import TodoForm from './TodoForm';

const addTodo = jest.fn()
afterEach(cleanup)
test('renders input feild', () => {
  render(<TodoForm addTodo={addTodo}/>);
  const input = screen.getByPlaceholderText('Add todo');
  expect(input).toBeInTheDocument();
});
test('adds todo on submit', () => {
  const {getByText } = render(<TodoForm addTodo={addTodo}/>);
  const addButtonNode = getByText(/^Add$/i)
  addButtonNode.click()
  expect(addTodo).not.toHaveBeenCalled();
});
test('takes snapshot of Form', () => {
  const todoForm = render(<TodoForm addTodo={addTodo}/>);
  expect(todoForm).toMatchSnapshot()
})
