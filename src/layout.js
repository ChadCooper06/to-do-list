import React, { useState, useEffect } from "react";
import Paper from "./paper";
import PageBottom from "./bottom";
import ToDoList from "./toDoList";
//import { useLocalStorage } from "../useLocalStorage";

export default function Layout() {

    //this layout is how my app will be formatted overall in the view
    //these local storage fns are here since my app.js only calls Layout
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

    //parses todos from local storage
    useEffect(() => {
        if (localStorage.getItem("todos")) {
          setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);

    //saves todos in local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    //this is the page layout
    return(
        <div className="layout">
            <Paper 
                todos={todos}
                setTodos={setTodos}
                input={input}
                setInput={setInput} />
            <ToDoList 
                todos={todos} 
                setTodos={setTodos} />
            <PageBottom />
        </div>
    )
}