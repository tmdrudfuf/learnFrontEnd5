// File: src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { updateProfile } from '../api';

export default function ProfilePage() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [oldPassword, setOld] = useState('');
  const [newPassword, setNew] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // 프로필 불러오는 API 있으면 호출
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const data = { ...user, oldPassword, newPassword };
      const res = await updateProfile(data, token);
      setUser(res.data.user);
    } catch {
      setError('Update failed');
    }
  };

  return (
    <div className="page-container">
      <h2>Profile</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} placeholder="Name" />
        <input name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} placeholder="Email" />
        <input type="password" value={oldPassword} onChange={e => setOld(e.target.value)} placeholder="Old Password" required />
        <input type="password" value={newPassword} onChange={e => setNew(e.target.value)} placeholder="New Password" required />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
