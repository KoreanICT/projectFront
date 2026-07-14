import React, { useState } from 'react';

function OwnerCommunityMain() {
  // 학원에서 배우는 기본 상태 관리: 현재 페이지 및 검색어
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  // [점주용 데이터 보급고] 소소문구X북마인드 연합 양식 데이터
  const pinnedPosts = [
    { id: 1, title: '제 17회 서울 디자인 페스티벌 - 북마인드 점주 초청권 배부', date: '2026. 07. 13' },
    { id: 2, title: '런던 디자인 페어 - 글로벌 독립출판물 위탁 매입 안내', date: '2026. 07. 12' },
  ];

  const regularPosts = [
    { id: 3, title: '브랜드MD 채용 공고 (소소 가맹점 연합)', date: '2026. 07. 11' },
    { id: 4, title: '소소 프로젝트 다섯 번째: 소소 프로젝트 작가님/점주님 모집', date: '2026. 07. 10' },
    { id: 5, title: '오브젝트 형태 협업 스토어 재고 공유 및 스왑 마켓', date: '2026. 07. 09' },
    { id: 6, title: '북페어용 종이장터 위탁 정산 안내', date: '2026. 07. 08' },
    { id: 7, title: '현대백화점 팝업센터 WE MARKET 참여 신청 가이드', date: '2026. 07. 07' },
    { id: 8, title: '정식 매장 디자이너 채용 (파트타임/정규직)', date: '2026. 07. 06' },
  ];

  return (
    // 전체 화면 장갑판 (이미지와 동일한 올 블랙/다크 그레이 배경 콘셉트)
    <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '40px', fontFamily: 'monospace', maxWidth: '700px', margin: '0 auto' }}>
      
      {/* [상단 헤더 구역] */}
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>[ 북 마인드     커뮤니티 ]</span>
        <button style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', fontSize: '18px', cursor: 'pointer', marginLeft: 'auto' }}>
          [글쓰기]
        </button>
      </div>

      {/* 이미지의 아날로그 격자선 표현 (+----+ 형태) */}
      <div style={{ color: '#888888', marginBottom: '15px' }}><hr/></div>

      {/* [📌 상단 상시 고정 공지사항 영역] */}
      <div style={{ padding: '0 10px', marginBottom: '15px' }}>
        {pinnedPosts.map((post) => (
          <div key={post.id} style={{ margin: '15px 0', fontSize: '18px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ marginRight: '10px' }}>📌</span>
            <span style={{ fontWeight: 'bold' }}>[ 게시글 ] {post.title}</span>
          </div>
        ))}
      </div>

      <div style={{ color: '#888888', marginBottom: '10px' }}><hr/></div>

      {/* [일반 커뮤니티/재고 소싱 게시글 목록 영역] */}
      <div style={{ padding: '0 10px' }}>
        {regularPosts.map((post) => (
          <div key={post.id}>
            <div style={{ padding: '12px 0', cursor: 'pointer' }}>
              <div style={{ fontSize: '13px', color: '#000000', marginBottom: '6px' }}>
                [ 게시물 ] {post.title}
              </div>
              <div style={{ fontSize: '11px', color: '#888888' }}>
                북 마인드 {post.date}
              </div>
            </div>
            {/* 소소문구 도면 특유의 아이템 구별 점선 스트랩 */}
            <div style={{ color: '#444444', fontSize: '12px', letterSpacing: '-1px' }}>-------------------------------------------------------------</div>
          </div>
        ))}
      </div>

      {/* [하단 페이징 내비게이션 영역] */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0 20px 0', fontSize: '13px', color: '#888888' }}>
        <span style={{ margin: '0 8px', color: '#000000', fontWeight: 'bold', cursor: 'pointer' }}>[1]</span>
        <span style={{ margin: '0 8px', cursor: 'pointer' }}>2</span>
        <span style={{ margin: '0 8px', cursor: 'pointer' }}>3</span>
        <span style={{ margin: '0 8px', cursor: 'pointer' }}>4</span>
        <span style={{ margin: '0 8px', cursor: 'pointer' }}>5</span>
        <span style={{ margin: '0 8px', cursor: 'pointer' }}>[다음]</span>
      </div>

      {/* [최하단 액션 및 검색 바 격자 구역] */}
      <div style={{ color: '#888888' }}><hr/></div>
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '5px 10px', fontSize: '13px' }}>
        
        {/* 좌측 관리 기능 보급선 */}
        <div>
          {/* <span style={{ cursor: 'pointer', marginRight: '6px' }}>[ 조회 ]</span> */}
          {/* <span style={{ color: '#444444' }}>|</span> */}
          {/* <span style={{ cursor: 'pointer', margin: '0 6px' }}>[ 수정 ]</span>
          <span style={{ color: '#000000' }}>|</span>
          <span style={{ cursor: 'pointer', marginLeft: '6px' }}>[ 삭제 ]</span> */}
        </div>

        {/* 우측 정밀 검색 통신망 */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {/* <span style={{ color: '#444444', marginRight: '10px' }}>|</span> */}
          <span>[ 검색 ] </span>
          <input 
            type="text" 
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #E0E0E0', color: '#FFFFFF', marginLeft: '5px', width: '120px', outline: 'none' }}
          />
          <span style={{ marginLeft: '5px', cursor: 'pointer' }}>🔍</span>
          {/* <span style={{ color: '#444444', marginLeft: '10px' }}>|</span> */}
        </div>

      </div>
      <div style={{ color: '#888888', marginTop: '5px' }}><hr/></div>

    </div>
  );
}

export default OwnerCommunityMain;