import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setTodos([...todos, { firstName, lastName }]);
      setFirstName('');
      setLastName('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="flex items-center justify-center text-2xl font-bold mb-4">Full Name</h1>
        <form onSubmit={addTodo} className="mb-4">
          <div className="mb-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDoItem
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
