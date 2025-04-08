import React, { useState } from 'react';
import generateUUID from './utils';
import TodoList from './components/TodoList';
import { Button } from 'primereact/button';  
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex     
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false, id: generateUUID() }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      prev => prev.map(todo => todo.id === id ? {
        ...todo,
        completed: !todo.completed,
      } : todo),
    );
  };

  return (
      <div className="App">
        <h1>Todo Application</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button onClick={addTodo}>Add Todo</Button>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
  );
}

export default App;