import React from "react";
//import "./App.css";
//import PageBottom from "./bottom";
//import Todos from "./todos";


export default function Paper({children}) {
    return(
        <div className="toDoPage">
            <h1 className="title">To Do List</h1>
            {children}
        </div>
    )
};