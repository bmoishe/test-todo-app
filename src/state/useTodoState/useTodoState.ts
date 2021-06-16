import {useState, useEffect } from 'react'
import {Todo} from '../../types/sharedTypes'
const useTodoState = (initialValue:Todo[]) => {
  const [todos, setTodos] = useState(initialValue)
  useEffect(() => {
  console.log('t: ',todos)
  }, [todos])
  return {
    todos,
    addTodo: (todoText:string) => {
      const trimmedText = todoText.trim()
        if (trimmedText.length > 0) {
          const newTodo = {userId: 1, id: Math.round(Math.random()), title: trimmedText, completed: false}
          setTodos([ newTodo, ...todos])
        }
    },
    setInitialTodos: (todoArr:Todo[]) => {
      setTodos(todoArr)
    },
    deleteTodo: (id:number) => {
      const newTodos:Todo[] = todos.filter((todo:Todo)=> todo.id!==id)
      setTodos(newTodos)
    }
  }
}
export default useTodoState