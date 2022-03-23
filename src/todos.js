import React, { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './localStorage';



export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let data = getLocalStorage(todos);
        if (data.length > 0) {
          setTodos(data);
        } else {
          getData(todos)
            .then((data) => {
              setTodos(data);
              setLocalStorage(todos, data);
            })
        }
      }, []);

  return (
    <div>todos here</div>
  )
}