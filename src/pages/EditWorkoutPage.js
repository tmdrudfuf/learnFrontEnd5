// File: src/pages/EditWorkoutPage.js
import React, { useState, useEffect } from 'react';
import { updateWorkout, getWorkouts } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditWorkoutPage() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', load: '', reps: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOne = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await getWorkouts(token); // 나중에 getOne API로 교체
        const w = res.data.find(x => x._id === id);
        setForm({ title: w.title, load: w.load, reps: w.reps });
      } catch {
        setError('Load failed');
      }
    };
    fetchOne();
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await updateWorkout(id, form, token);
      navigate('/workouts');
    } catch {
      setError('Update failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Edit Workout</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input name="load" type="number" value={form.load} onChange={handleChange} placeholder="Load" required />
        <input name="reps" type="number" value={form.reps} onChange={handleChange} placeholder="Reps" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
    