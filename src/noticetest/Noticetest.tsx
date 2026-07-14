import React, { useState } from 'react';

export default function NoticeEditPage() {
  // 이미지 데이터 및 입력 필드 상태 관리
  const [title, setTitle] = useState('[공지] 온라인 숍 이용 및 배송 안내');
  const [content, setContent] = useState(`전화 상담\n전화 : 02 - 2774 - 1228\n시간 : 오후 1시 ~ 오후 7시 / 주말 및 공휴일 휴무\n\n게시판 상담\n게시판 답변은 공휴일을 제외하고, 24시간 내로 드립니다.`);
  const [additionalContent, setAdditionalContent] = useState(`배송\nCJ대한통운 - CJ대한통운 상황\n- 추적 URL: http://www.doorstood.or.kr/mainx.isp`);

  const handleSave = () => {
    alert('저장되었습니다.');
  };

  const handleCancel = () => {
    alert('취소가 완료되었습니다.');
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-[#e0e0e0] font-mono p-4 flex flex-col items-center">
      {/* 상단 절취선 구분선 */}
      <div className="w-full max-w-4xl text-center text-xs tracking-widest text-gray-500 mb-6">
        --------------------------------------------------------------------------------------
      </div>

      <div className="w-full max-w-4xl space-y-6 flex-1">
        {/* 상단 인덱스 표시 */}
        <div className="text-sm text-gray-400">[ 게시글 ] [공지] 온라인 숍 이용 및 배송 안내</div>

        {/* 제목 입력란 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-300">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* 본문 내용 입력란 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-300">본문 내용</label>
          <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400 resize-none"
          />
        </div>

        {/* 본문 이미지 영역 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-300">본문 이미지</label>
          <div className="flex items-start gap-4">
            {/* 이미지 플레이스홀더 (online store 아이콘 형태) */}
            <div className="w-64 h-36 bg-[#2d2d2d] border border-gray-600 rounded flex flex-col items-center justify-center text-gray-400 p-4">
              <span className="text-4xl mb-2">🏪</span>
              <span className="text-lg font-bold tracking-wider">online store</span>
            </div>
            {/* 이미지 관리 버튼 */}
            <div className="flex gap-2">
              <button className="border border-gray-600 rounded px-3 py-1 text-xs hover:bg-gray-800 transition">
                이미지 변경
              </button>
              <button className="border border-gray-600 rounded px-3 py-1 text-xs hover:bg-gray-800 transition">
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* 추가 내용 (하단) 입력란 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-300">추가 내용 (하단)</label>
          <textarea
            rows={6}
            value={additionalContent}
            onChange={(e) => setAdditionalContent(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400 resize-none"
          />
        </div>

        {/* 저장 / 취소 버튼 */}
        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={handleSave}
            className="w-36 border border-white text-white rounded py-2 text-sm font-bold hover:bg-white hover:text-black transition"
          >
            저장
          </button>
          <button
            onClick={handleCancel}
            className="w-36 border border-gray-600 text-gray-400 rounded py-2 text-sm font-bold hover:bg-gray-800 transition"
          >
            취소
          </button>
        </div>
      </div>

      {/* 푸터 영역 */}
      <footer className="w-full max-w-4xl mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 grid grid-cols-3 gap-6 pb-8">
        <div className="space-y-1">
          <p>대표 OOO</p>
          <p>사업자 번호 000-00-00000 통신판매업 0000-서울00-0000</p>
          <p>주소 서울특별시 00 00000 0 ( 00 ) 2층</p>
          <p>이용안내 이용약관 개인정보방침 호스팅 레몬24(주)</p>
          <p>T. 00-0000-0000 E. 0000000@gmail.com</p>
        </div>
        <div className="space-y-1">
          <p className="hover:underline cursor-pointer">북 마인드 소개</p>
          <p className="hover:underline cursor-pointer">입점처 안내</p>
          <p className="hover:underline cursor-pointer">대량 주문, 커스텀</p>
        </div>
        <div className="space-y-1">
          <p className="hover:underline cursor-pointer">공지사항</p>
          <p className="hover:underline cursor-pointer">문의사항</p>
          <p className="hover:underline cursor-pointer">사용후기</p>
        </div>
      </footer>
    </div>
  );
}