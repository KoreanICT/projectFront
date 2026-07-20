import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface UserInfo {
  nickname: string;
  name: string;
  grade: string;
  location: string;
  joinDate: string;
  postCount: number;
  commentCount: number;
}

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const userInfo: UserInfo = {
    nickname: "닉네임",
    name: "홍길동",
    grade: "우수 회원",
    location: "매장의 위치가 들어갈 자리입니다",
    joinDate: "2026-07-10",
    postCount: 0,
    commentCount: 0,
  };

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      {/* 1. 상단 프로필 영역 */}
      <div className="d-flex justify-content-between align-items-start pb-4 border-bottom">
        <div>
          <h2 className="fw-bold mb-2">{userInfo.nickname}</h2>
          <p className="text-muted mb-1 small">
            {userInfo.name} ({userInfo.grade})
          </p>
          <p className="mb-1">{userInfo.location}</p>
          <p className="text-muted mb-0">가입일 : {userInfo.joinDate}</p>
        </div>
        <button
          onClick={() => navigate('/ProfileEditPage')}
          className="btn btn-secondary px-4 py-3 border-0"
          style={{ backgroundColor: '#d9d9d9', color: '#000', minWidth: '150px' }}
        >
          프로필 편집
        </button>
      </div>

      {/* 2. 중앙 통계 영역 */}
      <div className="row text-center py-4 fs-3 fw-bold">
        <div className="col-6">
          게시물 : {userInfo.postCount}
        </div>
        <div className="col-6">
          댓글 : {userInfo.commentCount}
        </div>
      </div>

      {/* 3. 하단 콘텐츠 영역 */}
      <div className="border rounded p-4 position-relative" style={{ minHeight: '300px' }}>
        <span className="badge border text-dark position-absolute top-0 start-0 m-3 bg-white">
          Section 6
        </span>
        <div className="d-flex justify-content-center align-items-center h-100" style={{ minHeight: '220px' }}>
          <h3 className="fw-bold text-dark mb-0">회원이 작성한 글 목록 리스트</h3>
        </div>
      </div>
    </div>
  );
};

export default MyPage;