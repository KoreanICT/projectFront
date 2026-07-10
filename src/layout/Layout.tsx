import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import FloatingButton from '../floatButton/FloatingButton';

// children : 컴포넌트의 여는 태그와 닫는 태그 사이에 들어가는 내용을 의미하는 props
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const { pathname } = useLocation();
  // /user 로 시작하는 모든 페이지
  const isSimpleLayout = pathname.startsWith('/user');
    return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        padding: '20px',
        border: '2px solid #ddd',
        backgroundColor: '#fff',
        borderRadius: '8px',
      }}
    >
      {!isSimpleLayout ? (
        <>
          <header
            style={{
              borderBottom: '2px solid black',
              marginBottom: '4px',
              padding: '10px 20px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1>
                <Link to="/" style={{textDecoration: "none", color: 'inherit'}}>프로젝트 로고</Link>
            </h1>
            <div>
              <Link to="/user/login" style={{ marginRight: '10px' }}>
                로그인
              </Link>
              <Link to="/user/signup">회원가입</Link>
            </div>
          </header>

          <DropdownNav />
        </>
      ) : (
        <>
          <header
            style={{
              marginBottom: '4px',
              padding: '10px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1>
                <Link to="/" style={{textDecoration: "none", color: 'inherit'}}>프로젝트 로고</Link>
            </h1>
          </header>
        </>
      )}

      <main>
        {children}

        {!isSimpleLayout && <FloatingButton />}
      </main>

      {!isSimpleLayout && (
        <footer
          style={{
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          @프로젝트
        </footer>
      )}
    </div>
  );
};

export default Layout;