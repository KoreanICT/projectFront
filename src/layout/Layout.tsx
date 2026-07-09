import React from 'react'
import { Link } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import FloatingButton from '../floatButton/FloatingButton';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{
            maxWidth: '1200px', margin: '40px auto 0',
            padding: '20px', border: '2px solid #ddd',
            backgroundColor: '#fff',
            borderRadius: '8px'
        }}>
            <header style={{
                borderBottom: '2px solid black',
                marginBottom: '4px',
                padding: '10px 20px',
                borderRadius: '8px', display: "flex", 
                justifyContent: "space-between", alignItems: "center"
            }}>
                <h1>프로젝트</h1>
                <div>
                    <a href="/login" style={{marginRight: "10px"}}>로그인</a>
                    {/* <a href="/signup" style={{ color: "white"}}>회원가입</a> */}
                    <Link to="/signup">회원가입</Link>
                </div>
            </header>
            <div>
                <DropdownNav />
            </div>
            <main>
                {children}
                <FloatingButton />
            </main>
            <footer style={{
                padding: '10px',
                borderRadius: '8px', textAlign: 'center'
            }}>@프로젝트</footer>
        </div>
    )
}

export default Layout