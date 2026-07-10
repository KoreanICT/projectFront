// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './cont/member/Signup'; // 대소문자(signup) 확인 필수!

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 루트 경로(/)로 오면 /signup 으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        
        {/* Signup 컴포넌트를 라우터 내부에 등록 */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;