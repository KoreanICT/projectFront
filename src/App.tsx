import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;