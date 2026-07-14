import React, { useState } from 'react';
//게시글 상세
function OwnerPostDetailView() {
  // 학원에서 배우는 기본 문법: 백엔드에서 특정 게시글 데이터를 호출해온 상태를 시뮬레이션
  const [post, setPost] = useState({
    headerTitle: '4번째 소소한 기념일',
    mainTitle: '[행사] 4번째 소소한 기념일',
    writer: '소소문구',
    date: '17.03.20',
    intro: '소란스러웠던 연차가 지나고 벌써 춘분이 왔네요.\n3월 19일. 소소문구의 생일을 기념하여,\n망원동 소소문구에서 작은 행사를 열게되었습니다.',
    period: '3월 22일 수요일~ 3월 31일 금요일 (휴무 없습니다.)\n오후 2시부터 저녁 8시까지',
    location: '망원동 소소문구\n(서울 마포구 망원로 33, 2층)',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', // 도면과 유사한 정갈한 서적/소품 가상 이미지
    outroTitle: '첫번째 아울렛 행사',
    outroContent: '소량남은 소소문구의 1세대 제품들을 모아 -60%부터 할인 판매합니다.'
  });

  return (
    // 전체 다크 브릭 인프라 배경 셋업
    <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '40px 20px', fontFamily: 'monospace', maxWidth: '750px', margin: '0 auto', boxSizing: 'border-box' }}>
      
      {/* 최상단 격자 대시 라인 */}
      <div style={{ color: '#000000', letterSpacing: '-1px', marginBottom: '25px', textAlign: 'center' }}>
        
      </div>

      {/* 게시글 상단 분류 및 타이틀 */}
      <div style={{ fontSize: '13px', color: '#000000', marginBottom: '20px' }}>
        [ 게시글 ] {post.headerTitle}
      </div>

      <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>
        {post.mainTitle}
      </div>

      <div style={{ fontSize: '13px', color: '#000000', marginBottom: '20px' }}>
        {post.writer}
      </div>

      {/* 날짜 및 본문 인트로 대화 내용 */}
      <div style={{ fontSize: '12px', color: '#000000', marginBottom: '5px' }}>
        {post.date}
      </div>
      
      <div style={{ fontSize: '13px', lineHeight: '1.8', whiteSpace: 'pre-wrap', color: '#000000', marginBottom: '25px' }}>
        {post.intro}
      </div>

      {/* 기간 정보 구역 */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>기간</div>
        <div style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap', color: '#000000' }}>
          {post.period}
        </div>
      </div>

      {/* 장소 정보 구역 */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>장소</div>
        <div style={{ fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-wrap', color: '#000000' }}>
          {post.location}
        </div>
      </div>

      {/* 내용 식별자 및 메인 이미지 구역 */}
      <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '15px' }}>내용</div>
      
      <div style={{ width: '100%', marginBottom: '30px', display: 'flex', justifyContent: 'flex-start' }}>
        <img 
          src={post.imageUrl} 
          alt="Event Lineup" 
          style={{ maxWidth: '50%', height: '300px', border: '1px solid #000000' }}
        />
      </div>

      {/* 하단 추가 아울렛 프로모션 본문 구역 */}
      <div style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '20px', color: '#000000' }}>
        {post.outroTitle}
      </div>
      
      <div style={{ fontSize: '13px', lineHeight: '1.8', color: '#000000', marginBottom: '50px' }}>
        {post.outroContent}
      </div>

      {/* 하단 공통 푸터 연합 전선 */}
      <div style={{ borderTop: '1px solid #000000', paddingTop: '20px', fontSize: '11px', color: '#000000', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '20px', lineHeight: '1.8' }}>
        
        <div>
          <span style={{ fontWeight: 'bold', color: '#000000' }}>대표 OOO</span><br />
          사업자 번호 000-00-00000 통신판매업 0000-서울00-0000<br />
          주소 Solicitors 00 00000 0 ( 00 ) 2층<br />
          이용약관 이용약관 개인정보처리방침 호스팅 레몬24(주)<br />
          T. 00-0000-0000 E. 0000000@gmail.com
        </div>

        <div>
          <span style={{ color: '#000000', cursor: 'pointer' }}>백 마인드 소개</span><br />
          <span style={{ cursor: 'pointer' }}>입점처 안내</span><br />
          <span style={{ cursor: 'pointer' }}>대량 주문, 커스텀</span>
        </div>

        <div>
          <span style={{ color: '#000000', cursor: 'pointer' }}>공지사항</span><br />
          <span style={{ cursor: 'pointer' }}>문의사항</span><br />
          <span style={{ cursor: 'pointer' }}>사용후기</span>
        </div>

      </div>

      {/* 최하단 마감 격자 대시 라인 */}
      <div style={{ color: '#000000', letterSpacing: '-1px', marginTop: '30px', textAlign: 'center' }}>
        --------------------------------------------------------------------------------------
      </div>

    </div>
  );
}

export default OwnerPostDetailView;