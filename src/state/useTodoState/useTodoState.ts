import {useState } from 'react'

const useTodoState = (initialValue:string[]) => {
  const [todos, setTodos] = useState(initialValue)
  return {
    todos,
    addTodo: (todoText:string) => {
      setTodos([...todos, todoText])
    },
    deleteTodo: (todoIndex:number) => {
      const newTodos:string[] = todos.filter((todo:string, i:number)=> i!==todoIndex)
      setTodos(newTodos)
    }
  }
}
export default useTodoState