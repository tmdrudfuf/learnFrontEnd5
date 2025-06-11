// File: src/pages/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';

export default function SignupPage() {
  const [form, setForm] = useState({ email: '', password: '', name: '', gender: '', age: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signup(form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="gender" type="text" value={form.gender} onChange={handleChange} placeholder="Gender" />
        <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
