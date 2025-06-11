// File: src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import WorkoutsPage from './pages/WorkoutsPage.jsx';
import NewWorkoutPage from './pages/NewWorkoutPage.jsx';
import EditWorkoutPage from './pages/EditWorkoutPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AdminUsersPage from './pages/AdminUsersPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 라우트: 공통 헤더/푸터 */}
        <Route element={<Layout />}>
          <Route path="/login"            element={<LoginPage />} />
          <Route path="/signup"           element={<SignupPage />} />
          <Route path="/"                 element={<Navigate replace to="/login" />} />
          <Route path="/workouts"         element={<WorkoutsPage />} />
          <Route path="/workouts/new"     element={<NewWorkoutPage />} />
          <Route path="/workouts/:id/edit" element={<EditWorkoutPage />} />
          <Route path="/profile"          element={<ProfilePage />} />
          <Route path="/admin/users"      element={<AdminUsersPage />} />
        </Route>
        {/* 그 외 경로는 다시 /로 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
