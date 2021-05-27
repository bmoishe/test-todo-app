import {useState} from 'react'

const useInputState = (initialValue:string) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e:{target:{value:string}}) => {
      setValue(e.target.value)
    },
    reset: () => setValue('')
  }
}

export default useInputState
