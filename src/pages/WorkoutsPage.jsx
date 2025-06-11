// File: src/pages/WorkoutsPage.js
import React, { useEffect, useState } from 'react';
import { getWorkouts, deleteWorkout } from '../api';

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await getWorkouts(token);
        setWorkouts(res.data);
      } catch {
        setError('Cannot load workouts');
      }
    };
    fetch();
  }, []);

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem('token');
      await deleteWorkout(id, token);
      setWorkouts(ws => ws.filter(w => w._id !== id));
    } catch {
      setError('Delete failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Workouts</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {workouts.map(w => (
          <li key={w._id}>
            {w.title} - {w.load}kg x{w.reps}
            <button onClick={() => handleDelete(w._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
