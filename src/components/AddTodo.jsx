import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') return; // Prevent adding empty todos
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="flex items-center justify-center mt-8">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-gray-800 rounded-l-lg border-t border-b border-l border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
            />
            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
