import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { CommunicationLayer } from './Utils/Data';

const com = new CommunicationLayer();

const App = () => {
  const [todos, setTodos] = useState([]);

  const reload = () => {
    com.fetchTodos(setTodos);
  };

  const addTodo = (action) => {
    com.addTodo(action, reload);
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
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
