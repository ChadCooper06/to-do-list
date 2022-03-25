import "./App.css";
//import { useState } from "react";
import Button from "./Button";



export default function Paper({ input, setInput, todos, setTodos }) {

    //places the value input by user to the text input
    //const [filter, setFilter] = useState('all');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    //on clicking enter, this sets my todo to the given input and gives the time as an id
    //used empty string at end to clear input field after entering
    const submitHandler = (e) => {
        if(e.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    text: input,
                    done: false,
                    id: Date.now(),
                }
            ])
            setInput('')
        };
    }

    // const filterTodos = todos;
  
    // if(filter === "active") {
    //    filterTodos = todos.filter((todo) => !todo.done);
    // } else if(filter === "done") {
    //    filterTodos = todos.filter((todo) => todo.done);
    // }

    //draws my input, adds fns to it and draws my buttons below-theyre not working yet
    return (
        <div className="paper">
            <h2 className= 'title'>To-Do List</h2>
            <div className='add-task'>
            <input
                type='text'
                placeholder='Add Task'
                value={input}
                name='text'
                className='input'
                onChange={inputHandler} 
                onKeyDown={submitHandler} />
            </div>
            <div className="status-btns">
                <Button id='all' color='grey' text='All' onClick={() => setFilter("all")} />
                <Button id='active' color='grey' text='active' onClick={() => setFilter("active")} />
                <Button id='done' color='grey' text='done' onClick={() => setFilter("done")} />
            </div>
        </div>
    );
};

//                 <Button id='all' color='green' text='All' onClick={() => setState({view: 1}))} />
//                 <Button id='active' color='green' text='active' onClick={() => setState({view: 2})} />
//                 <Button id='done' color='green' text='done' onClick={() => setState({view: 3})} />
// {this.state.view === 1 ? <View1/> : this.state.view === 2 ? <View2/> : this.state.view === 3 ? <View3/> : ""}