import React, { useState } from "react";

import "./App.css";
//import WindowSize from "./window";
import Layout from "./layout";
import { Todos } from "./todos";
import { ToDoList } from "./toDoList";


export default function App() {

  const [userInput, setToDoList] = useState('');
  const [todos, setTodos] = useState([]);
  //const size = WindowSize();
 
  return (
    <div className="App">
      {/* {size.width}px / {size.height}px */}
      
      <Layout />
      
    </div>
  );
}
