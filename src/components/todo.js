import React from "react";

const Todo = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id!==todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id===todo.id){
                return {
                    ...item, completed: !item.completed
                }
            };
            return item;
        }));
    }
    return (
        <div className="todo">
            <ui className={`todo-item ${todo.completed ? "completed":""}`}>{text}</ui>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;