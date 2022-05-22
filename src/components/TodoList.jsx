import React from 'react';
import { useState } from 'react';
// import styles from "./todo.module.css";
import styles from "./todolist.module.css";

const Todo = (todo) => {
  let [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isCompleted, setCompleted] = useState(todo.isCompleted)

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const onDelete = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <div>
      <input value={newTodo} onChange={handleChange} className='input' placeholder='Write Something' />
      <button className='add-button' onClick={() => {
        setTodos([
          ...todos,
          { id: Date.now(), value: newTodo, isComplete: false }
        ]);
        setTodo("");
      }}>
        +
      </button>

      {todos.map((todo) => (
        <div className='todos'>

          <input
            checked={isCompleted}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
            className='checkbox'
            type='checkbox'>
          </input>

          <div className={isCompleted ? styles.striked : ""}>{todo.value}</div>

          <button className='delete' onClick={() => onDelete(todo.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;