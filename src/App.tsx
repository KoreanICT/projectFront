import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/AppRoutes';


const Dashboard = () => (
  <div style={{ padding: '20px', textAlign: 'center', marginTop: '5px' }}>
    <h2>도서 재고관리 메인 화면 (UI 테스트 중)</h2>
    <p>로그인에 성공하여 메인 페이지로 무사히 진입했습니다!</p>
    <a href="/login" style={{ color: '#0360d9', textDecoration: 'none', fontWeight: 'bold' }}>테스트 로그아웃 (로그인 화면으로)</a>
  </div>
);

const App: React.FC = () => {
  

  return (
    <Router>
     
        <Layout>
          <AppRoutes />
        </Layout>
      
    </Router>
  );
};

export default App;