import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import TodoForm from './TodoForm';

const addTodo = jest.fn()
afterEach(cleanup)
test('renders input feild', () => {
  render(<TodoForm addTodo={addTodo}/>);
  const input = screen.getByPlaceholderText('Add todo');
  expect(input).toBeInTheDocument();
});
test('renders input feild', () => {
  render(<TodoForm addTodo={addTodo}/>);
  const input = screen.getByPlaceholderText('Add todo');
  expect(input).toBeInTheDocument();
});
test('type in input feild', () => {
  render(<TodoForm addTodo={addTodo}/>)
  const input = screen.getByPlaceholderText('Add todo');
  userEvent.type(input, 'This is a todo')
  expect(input).toHaveValue('This is a todo')
})

test('adds todo on submit', () => {
  const {getByText } = render(<TodoForm addTodo={addTodo}/>);
  const addButtonNode = getByText(/^Add$/i)
  addButtonNode.click()
  expect(addTodo).toHaveBeenCalledTimes(1);
});
test('takes snapshot of Form', () => {
  const todoForm = render(<TodoForm addTodo={addTodo}/>);
  expect(todoForm).toMatchSnapshot()
})
