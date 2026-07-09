import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <Router>
      {/* 
      Layout 태그 안에 AppRoutes가 있기에
      AppRoutes 내용이 Layout 안에 있는 {children}에 대입된다
      */}
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}
export default App;