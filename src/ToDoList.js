import React from 'react';
import './App.css';
import Todos from './Todos';

//creates the to do list of the to-dos
const ToDoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <div className="todo-list">
               {todos.map((todo) => (
                   <Todos key={todo.id} 
                   todo={todo} 
                   todos={todos} 
                   setTodos={setTodos} />
               ))}
            </div>
        </div>
    ) 
}
export default ToDoList