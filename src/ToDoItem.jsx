import React from 'react';

const ToDoItem = ({ index, todo, removeTodo }) => {
  return (
    <li className="flex justify-between items-center bg-green-200 p-2 rounded-lg font-bold mb-2">
      <span>{todo.firstName} {todo.lastName}</span>
      <button
        onClick={() => removeTodo(index)}
        className="bg-red-400 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Remove
      </button>
    </li>
  );
};

export default ToDoItem;
