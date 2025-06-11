// File: src/api/index.js
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
});

// Auth
export const signup = data => api.post('/auth/signup', data);
export const login  = data => api.post('/auth/login', data);
export const updateProfile = (data, token) =>
  api.put('/auth/update', data, { headers: { Authorization: `Bearer ${token}` } });

// Workouts
export const getWorkouts   = token =>
  api.get('/workouts', { headers: { Authorization: `Bearer ${token}` } });
export const createWorkout = (data, token) =>
  api.post('/workouts', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateWorkout = (id, data, token) =>
  api.put(`/workouts/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteWorkout = (id, token) =>
  api.delete(`/workouts/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Admin
export const getAllUsers = token =>
  api.get('/admin/users', { headers: { Authorization: `Bearer ${token}` } });
export const getUserById = (id, token) =>
  api.get(`/admin/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const updateUser  = (id, data, token) =>
  api.put(`/admin/users/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteUser  = (id, token) =>
  api.delete(`/admin/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export default api;
