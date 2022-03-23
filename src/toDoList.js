import React from 'react';
import './App.css'
import { Todos } from './todos';

export default function ToDoList({ todos }) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                   <Todos key={todo.id} text={todo.text} />
               ))}
            </ul>
        </div>
    ) 
}