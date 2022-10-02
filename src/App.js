import logo from './logo.svg';
import './App.css';
import React from 'react';
import Functional, {A , B} from './components/typesofComponents/Functional';
import ClassA from './components/typesofComponents/ClassA';

function App() {
  // const element = <h1>Hello</h1>
  // const element = <a href="https://www.reactjs.org"> link </a>;
  // const imgUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";
  // const element = <img src={imgUrl}></img>;

  /* const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
   */
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

  const name = "Naresh";

  return (
    <div className="App">
      {element}
      <Functional name={name}></Functional>
      <A></A>
      <B></B>
      <ClassA name={name}></ClassA>
    </div>
  );
}

export default App;
