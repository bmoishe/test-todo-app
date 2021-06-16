import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch'

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//   json: () => Promise.resolve({ data: 'this is a responce' }),
// })
// );
test('should return null if no url is passsed', () => {
  const { result } = renderHook(() => useFetch(''))

  act(() => {
    result.current.getData()
  })

  expect(result.current.response).toBe(null)
})
// test('should reset input', () => {
//   const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos'))

//   act(() => {
//     result.current.getData()
//   })

//   expect(result.current.response).toBe({data: 'this is a responce' })
// })
// test('should increment counter', () => {
//   const { result } = renderHook(() => useInputState(''))
//   const updatedTodo = {target:{value:'todo'}}
//   act(() => {
//     result.current.onChange(updatedTodo)
//   })
//   expect(result.current.value).toEqual('todo')
// })
