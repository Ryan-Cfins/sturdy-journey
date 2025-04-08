import React from 'react';

function TodoItem({ text, completed, id, toggleTodo }) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={completed || false} 
        onChange={() => toggleTodo(id)} 
      />
      <span className={completed ? 'completed' : ''}>{text}</span>
    </div>
  );
}

export default TodoItem;