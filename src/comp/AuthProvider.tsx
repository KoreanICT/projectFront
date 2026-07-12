import React, { createContext, useContext, useEffect, useState } from 'react';

interface Member {
  userid: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  member: Member | null; 
  checkLogin: () => Promise<void>; 
  isLoggedIn: boolean; 

  login: (userid: string, password: string) => Promise<'success' | 'fail' | 'error'>;
  logout: () => Promise<void>; 
  updateMemberName: (name: string) => void; 
  updateMemberEmail: (email: string) => void;

  loading: boolean; 
}

// 1단계: Context 생성
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  // [UI 테스트용] 로그인 상태 체크 함수 (서버 요청 없이 로딩만 해제)
  const checkLogin = async () => {
    try {
      // 로컬 스토리지 등에 임시 저장된 유저 정보가 있다면 불러오는 식으로 고도화도 가능합니다.
      setLoading(false);
    } catch {
      setMember(null);
    } finally {
      setLoading(false);
    }
  };

  // [UI 테스트용] 로그인 함수 (아이디: admin@test.com / 비번: 1234 일 때만 성공)
  const login = async (userid: string, password: string): Promise<'success' | 'fail' | 'error'> => {
    setLoading(true);
    try {
      if (userid === 'admin@test.com' && password === '1234') {
        setMember({
          userid: 'admin@test.com',
          name: '홍길동',
          email: 'admin@test.com'
        });
        return 'success';
      } else {
        return 'fail'; // 정보가 다르면 로그인 실패 메시지 출력용
      }
    } catch {
      return 'error';
    } finally {
      setLoading(false);
    }
  };

  // [UI 테스트용] 로그아웃 함수
  const logout = async () => {
    setMember(null);
  };

  useEffect(() => {
    if (window.location.pathname !== '/login') {
      checkLogin();
    } else {
      setLoading(false); 
    }
  }, []);

  // 회원 정보 수정 시뮬레이션
  const updateMemberName = (name: string) => {
    setMember(prev => (prev ? { ...prev, name } : prev));
  };

  const updateMemberEmail = (email: string) => {
    setMember(prev => (prev ? { ...prev, email } : prev));
  };

  // 로그인 여부를 true / false로 계산
  const isLoggedIn = member !== null;

  return (
    <AuthContext.Provider value={{   
        member,
        isLoggedIn,
        checkLogin,
        login,
        logout,
        updateMemberName,
        updateMemberEmail,
        loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthContext 은 AuthProvider 안에서만 사용해야 합니다.');
  return context;
};