// File: src/pages/NewWorkoutPage.js
import React, { useState } from 'react';
import { createWorkout } from '../api';
import { useNavigate } from 'react-router-dom';

export default function NewWorkoutPage() {
  const [form, setForm] = useState({ title: '', load: '', reps: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await createWorkout(form, token);
      navigate('/workouts');
    } catch {
      setError('Create failed');
    }
  };

  return (
    <div className="page-container">
      <h2>New Workout</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input name="load" type="number" value={form.load} onChange={handleChange} placeholder="Load" required />
        <input name="reps" type="number" value={form.reps} onChange={handleChange} placeholder="Reps" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
