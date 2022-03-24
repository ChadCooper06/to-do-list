import React, { useState } from "react";
import Paper from "./paper";
import PageBottom from "./bottom";
import ToDoList from "./toDoList";
//import { getLocalStorage, set } from "../utils/localStorage";

export default function Layout() {

	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

    return(
        <div className="Layout">
            <Paper 
				input={input}
				setInput={setInput} 
				todos={todos}
				setTodos={setTodos}
            />
            <ToDoList todos={todos}/>
            <PageBottom />
        </div>
    )
}