// File: src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Fitness Tracker</h1>
        <nav>
          <Link to="/workouts">Workouts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin/users">Admin</Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">© 2025 Fitness App</footer>
    </div>
  );
}
