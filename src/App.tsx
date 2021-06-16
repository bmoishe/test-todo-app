import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import useFetch from './state/useFetch/useFetch';
import useTodoState from './state/useTodoState/useTodoState'

function App() {
  const {todos, addTodo, deleteTodo, setInitialTodos } = useTodoState([])
  const { error, getData } = useFetch('https://jsonplaceholder.typicode.com/todos', setInitialTodos)
  // const tod = response
  console.log('res: ', todos)
  const renderTodos = (data:any) => {
    data&& data.map((res:any)=> {
      console.log('ghajsgf',res)
    })
  }
  if(!todos.length) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Sorry there appears to be a problem...</div>
  }
  return (
    <div className="App">
      <header className="App-header">
       Todo List
      <button onClick={() => getData()}>Fetch</button>
      </header>
      <TodoForm addTodo={(todoText) => {addTodo(todoText)}}/>
      {/* <TodoList todos={todos} deleteTodo={deleteTodo}/> */}
      {<TodoList todos={todos} deleteTodo={deleteTodo}/>}
      {/* {renderTodos(response)} */}
    </div>
  );
}

export default App;
