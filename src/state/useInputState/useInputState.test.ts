import { renderHook, act } from '@testing-library/react-hooks'
import useInputState from './useInputState'

test('should reset input', () => {
  const { result } = renderHook(() => useInputState(''))

  act(() => {
    result.current.reset()
  })

  expect(result.current.value).toEqual('')
})
test('should increment counter', () => {
  const { result } = renderHook(() => useInputState(''))
  const updatedTodo = {target:{value:'todo'}}
  act(() => {
    result.current.onChange(updatedTodo)
  })
  expect(result.current.value).toEqual('todo')
})
