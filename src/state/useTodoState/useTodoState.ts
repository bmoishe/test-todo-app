import {useState } from 'react'

const useTodoState = (initialValue:string[]) => {
  const [todos, setTodos] = useState(initialValue)
  return {
    todos,
    addTodo: (todoText:string) => {
      const trimmedText = todoText.trim()
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText])
        }
    },
    deleteTodo: (todoIndex:number) => {
      const newTodos:string[] = todos.filter((todo:string, i:number)=> i!==todoIndex)
      setTodos(newTodos)
    }
  }
}
export default useTodoState