import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          text={todo?.text}
          id={todo?.id}
          completed={todo?.completed}
          toggleTodo={toggleTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;