import { useState, useEffect } from 'react';
import './App.css';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import { CommunicationLayer } from './Utils/Data';

const com = new CommunicationLayer();

function App() {
  const [todos, setTodos] = useState([]);

  const reload = () => {
    com.fetchTodos(setTodos);
  };

  const addTodos = (action) => {
    com.addTodos(action, reload);
  };

  const toggleCompleted = (id) => {
    com.toggleCompleted(id, reload);
  };

  const deleteTodo = (id) => {
    com.deleteTodo(id, reload)
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className='todo-app'>
      <h1 className='todo-title'>Todo App</h1>
      <TodoForm 
        addTodos={addTodos}
      />
      <TodoList 
        todos={todos}
        toggleCompleted={toggleCompleted}
        className='todo-list'
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
