interface Todo {userId: number, id: number, title: string, completed: boolean}
interface TodoListProps {todos:[]|Todo[]|null,deleteTodo:(index:number)=>void}

const TodoList = ({todos, deleteTodo}:TodoListProps) => (
  todos&&
  <ul>
    {todos.map((todo:Todo, index:number) => (
        <li key={index.toString()}>
          {todo.title}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      )
    )}
  </ul>
)

export default TodoList