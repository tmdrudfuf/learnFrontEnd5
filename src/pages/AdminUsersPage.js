// File: src/pages/AdminUsersPage.js
import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../api';

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await getAllUsers(token);
        setUsers(res.data.users);
      } catch {
        setError('Cannot load users');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem('token');
      await deleteUser(id, token);
      setUsers(us => us.filter(u => u._id !== id));
    } catch {
      setError('Delete failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Admin - Users</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.email} ({u.role})
            <button onClick={() => handleDelete(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
