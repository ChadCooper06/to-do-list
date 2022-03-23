import React from "react";
//import Paper from "./paper";
import "./App.css";
import WindowSize from "./window";
import Layout from "./layout";
//import Todos from "./todos";

function App() {

  const size = WindowSize();

  return (
    <div className="App">
      {size.width}px / {size.height}px
      <Layout />
    </div>
  );
}

export default App;
