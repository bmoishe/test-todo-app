const TodoList = ({todos, deleteTodo}:{todos:[]|string[],deleteTodo:(index:number)=>void}) => (
  <ul>
    {todos.map((todo:string, index:number) => (
        <li key={index.toString()}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      )
    )}
  </ul>
)

export default TodoList