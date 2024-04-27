'use client'
import React, { useState } from 'react';


function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleTaskToggle = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className=''>
      <h1 className=' mt-9 text-5xl font-bold text-center'>To-Do App</h1>
      <div className='text-center'>
        <div className='mt-6 text-center border-slate-900 '>
        <input 
          className='bg-emerald-300 rounded-full text-xl p-2 text-rose-800 font-medium'
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        </div>
        <button 
        // className='mt-5 p-3 font-medium rounded-full border-7-slate-900 bg-emerald-300 text-3xl '
       className='mt-5 p-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
       onClick={handleAddTask}>Add</button>
      </div>
      <ul className='mt-9 text-2xl font-bold text-center justify-center'>
        {tasks.map(task => (
          <li 
          className=''
          key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <div className='flex  text-center justify-center border-black'>
            <span 
            className='basis-1/2 bg-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2'
            onClick={() => handleTaskToggle(task.id)}>{task.text}</span>
            <button
            className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
            onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
