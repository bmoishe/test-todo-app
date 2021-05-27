import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import useTodoState from './state/useTodoState/useTodoState'

function App() {
  const {todos, addTodo, deleteTodo } = useTodoState([])
  return (
    <div className="App">
      <header className="App-header">
       Todo List
      </header>
      <TodoForm addTodo={(todoText) => {
        const trimmedText = todoText.trim()
        if (trimmedText.length > 0) {
          addTodo(trimmedText)
        }
      }}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
