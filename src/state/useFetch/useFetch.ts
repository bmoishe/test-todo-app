import {useEffect, useState } from 'react'
import {Todo} from '../../types/sharedTypes'
const useFetch = (url:string, callback:(data:Todo[])=>void) => {
  const [error, setError] = useState(null)
  const [fetchData, setFetchData] = useState(true)
  
  useEffect(() => {
    if(fetchData) {
      fetch(url)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(error => setError(error))
      setFetchData(false)
    }
  }
  , [fetchData, url, callback])
  return {
    error,
    getData: () => setFetchData(true)
  }
}

export default useFetch
