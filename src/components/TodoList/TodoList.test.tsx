import { render, cleanup } from '@testing-library/react';
import TodoList from './TodoList';
const todos = ['todo1', 'todo2', 'todo3']
const deleteTodo = jest.fn()
afterEach(cleanup)
test('TodoList renders todos', () => {
  const {container} = render(<TodoList todos={todos}deleteTodo={deleteTodo}/>);
  expect(container.textContent).toMatch('todo1')
  expect(container.textContent).toMatch('todo2')
  expect(container.textContent).toMatch('todo3')
})
test('Deletes todo is called when delete button is pressed', () => {
  const {getByText} = render(<TodoList todos={todos}deleteTodo={deleteTodo}/>);
  const secondTodo = getByText(/^todo2$/i)
  const deleteButtonNode = secondTodo.querySelector('button')
  deleteButtonNode.click()
  expect(deleteTodo).toHaveBeenCalledTimes(1)
})
test('takes snapshot of Form', () => {
  const todoList = render(<TodoList todos={todos}deleteTodo={deleteTodo}/>);
  expect(todoList).toMatchSnapshot()
})