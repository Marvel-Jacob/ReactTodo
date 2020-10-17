import React from "react";
import Todo from "./todo"

const todoList = ({todos, setTodos, filterTodos}) => {
    return (
        <div className="todo-container">
          <ul className="todo-list">
            {filterTodos.map(todo => (
            <Todo key={todo.id} todos={todos} setTodos={setTodos} text={todo.text} todo={todo}/>))};
          </ul>
    </div>
    );
}

export default todoList;