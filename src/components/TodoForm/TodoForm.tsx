import { useEffect } from 'react';
import useInputState from '../../state/useInputState/useInputState'

function TodoForm({addTodo}:{addTodo:(value:string)=>void}) {
  const {value, onChange, reset} = useInputState('')
  useEffect(() => {
  }, [value])
  return (
    <form className="TodoForm">
      <input name="todoInput" type="text" placeholder='Add todo' onChange={onChange} value={value}/>
      <button disabled={value.length >=0}onClick={
        (e)=> {
          e.preventDefault()
          addTodo(value)
          reset()
        }
      }>Add</button>
    </form>
  );
}

export default TodoForm;
