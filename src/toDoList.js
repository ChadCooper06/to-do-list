import React from 'react';
import './App.css'
import { Todos } from './todos';

export default function ToDoList({ todos }) {
        //maps over the array of todos(even if empty) and displays them 
    return (
        <div className="todo-container">
            <div className="todo-list">
               {todos.map((todo) => (
                   <Todos key={todo.id} text={todo.text} />
               ))}
            </div>
        </div>
    ) 
}