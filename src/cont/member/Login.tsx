import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ userid: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // 로그인 버튼 클릭 시 (지금은 무조건 통과!)
  const urls = process.env.REACT_APP_BACK_END_URL;
  const submitLogin = async () => {
    if (!formData.userid || !formData.password) {
      setMessage('이메일과 비밀번호를 입력해주세요.');
      return;
    }
    try {
      
      const res = await axios.post(
        `${urls}/api/login/dologin`,
        
        {
          email: formData.userid,   
          pwd: formData.password    
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, 
        }
      );

      if (res.data === 'success') {
        setMessage('로그인 성공! 메인 화면으로 이동합니다.');
        alert('로그인 성공! 메인(/) 페이지로 이동합니다.');
        navigate('/');
      } else {
        setMessage('이메일 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setMessage('로그인 처리 중 오류가 발생했습니다. (서버 연결 실패)');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px',
      height: '100vh'
    }}>

      <div style={{
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fff'
      }}>

        <h2 style={{ marginBottom: '20px' }}>로그인</h2>

        {/* 이메일 입력창 */}
        <input
          name="userid"
          value={formData.userid}
          onChange={inputChange}
          placeholder="이메일"
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        />

        {/* 비밀번호 입력창 */}
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={inputChange}
          placeholder="비밀번호"
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
        />

        {/* 로그인 버튼 */}
        <button
          onClick={submitLogin}
          style={{ width: '100%', padding: '10px', backgroundColor: '#0360d9', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          로그인
        </button>
        <button
          type="button"
          onClick={() => alert('카카오 로그인 페이지로 이동합니다. (UI 테스트)')}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#FEE500',
            color: '#191919',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          카카오 로그인
        </button>
        {/* 안내 메시지 */}
        <p style={{ marginTop: '10px', color: 'red', fontSize: '14px' }}>{message}</p>
      </div>

      {/* 하단 회원가입 이동 링크 */}
      <div className="login-footer" style={{ marginTop: '20px', textAlign: 'center' }}>
        <span className="footer-text" style={{ color: '#666', marginRight: '5px' }}>아직 회원이 아니신가요?</span>
        <a href="/signup" className="signup-link" style={{ color: '#0360d9', fontWeight: 'bold', textDecoration: 'none' }}>회원가입하기</a>
      </div>
    </div>
  );
};

export default Login;