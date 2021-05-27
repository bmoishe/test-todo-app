import { renderHook, act } from '@testing-library/react-hooks'
import useTodoState from './useTodoState'

test('should addTodo', () => {
  const { result } = renderHook(() => useTodoState([]))

  act(() => {
    result.current.addTodo('todo')
  })

  expect(result.current.todos).toEqual(['todo'])
})
test('should addTodo', () => {
  const { result } = renderHook(() => useTodoState(['todo1', 'todo2']))

  act(() => {
    result.current.deleteTodo(1)
  })

  expect(result.current.todos).toEqual(['todo1'])
})
