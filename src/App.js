import React from 'react';
import logo from './logo.svg';
import './App.css';

function Person() {  // To make component 
  return <h1>Name : Md.Nasim Hossain</h1>
}

function App() {
  var person = {
    name : "Nasim Hossain",
    email : "mdnasim6416@gmail.com"
  }
  var style= {
    color:"red",
    backgroundColor:"white",
    borderRadius : "20px",
    fontWeight :"900",
    padding :"30px",

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style ={style}>Hellow It's working Perfectly yes  {person.name +" "+ person.email}  </p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
