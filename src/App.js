import React, {useState, useEffect} from 'react';
import Form from "./components/form";
import Todo from "./components/todolist"
import './App.css';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setfilterTodos] = useState([]);
  useEffect(() => {
    filterHandler()
  }, [todos, status]);
  const filterHandler = () => {
    switch(status){
      case 'completed': setfilterTodos(todos.filter(todo => todo.completed===true));
      break;
      case 'uncompleted': setfilterTodos(todos.filter(todo => todo.completed===false));
      break;
      default: setfilterTodos(todos);
      break;
    }
  };

  return (
    <div className="App">
      <header>
  <h1>Todo List </h1>
    </header>
    <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText} 
      setStatus={setStatus}/>
    <Todo 
    todos={todos}
    filterTodos={filterTodos} 
    setTodos={setTodos}/>
    </div>
  );
}

export default App;
