// File: src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WorkoutsPage from './pages/WorkoutsPage';
import NewWorkoutPage from './pages/NewWorkoutPage';
import EditWorkoutPage from './pages/EditWorkoutPage';
import ProfilePage from './pages/ProfilePage';
import AdminUsersPage from './pages/AdminUsersPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Navigate replace to="/workouts" />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workouts/new" element={<NewWorkoutPage />} />
          <Route path="/workouts/:id/edit" element={<EditWorkoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
