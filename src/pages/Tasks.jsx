// src/pages/Tasks.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock task data
const mockTasks = [
  { id: 1, description: 'Design a logo', price: 2 },
  { id: 2, description: 'Write an article', price: 0.5 },
];

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend or use mock data for now
    setTasks(mockTasks);
  }, []);

  return (
    <div>
      <h2>Available Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.description}</p>
            <p>Price: {task.price} SOL</p>
            <Link to={`/task/${task.id}`}>View Task</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
