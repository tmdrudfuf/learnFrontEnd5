// File: src/components/Layout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout() {
  return (
    <div className="app-container">
      {/* …헤더/네비게이션 그대로… */}
      <main className="app-main">
        <Outlet />   {/* 중첩된 자식 라우트가 여기 렌더됨 */}
      </main>
      {/* …푸터… */}
    </div>
  );
}
