import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './upboard.module.css'

// 1) 서버측 데이터의 json을 가지고 인터페이스를 정의한다.
/*
{
    "cdate": "2026-06-30 10:20:09",
    "content": "내용임,내용",
    "hit": 5,
    "imgn": "rabbit3.jpg",
    "mfile": null,
    "num": 23,
    "reip": "192.168.0.45",
    "title": "제목임,제목1",
    "writer": "테스형임,작성자1"
}
*/
// 2) 비동기식으로 받은 데이터를 저장할 useState에 자료형으로 선언 및 생성
// const [upboard, setUpboard] = useState(<UpboardDetail | null>(null))
// 3) 상세보기는 반드시 어디를 거쳐서 랜더링이 될까? 즉, 서버로 보낼 num받아줄 useParams로 정의
// App.tsx에서 라우터가 path='/upboard/:num' , 리스트에서 상세보기로 가능 <Link to{`/upboard/${item.num}`};
// 파라미터를 받기위한 훅 => const { num } = useParams<{ num: string }>();

// 4) 즉 컴포넌트가 로딩이 될때 서버에서 데이터를 비동기식으로 받아와서 setUpboard에 저장
// useEffect(()=>{},[])에서 구현해야 한다.

// 5) aync () => { const response = await axios.get/post .....}
// 6) UI에 적절한 값을 배치하거나 핸들링을 할 수 있다.

interface CommunityVO { // 1
  num: number;
  title: string;
  writer: string;
  content: string;
  imgn?: string;
  hit: number;
  reip: string;
  bdate: string;
}
const CommunityDetail: React.FC = () => {

  const backendUrl = process.env.REACT_APP_BACK_END_URL;

  const [community, setCommunity] = useState<CommunityVO | null>(null);
  const { num } = useParams<{ num: string }>(); // 3
  console.log("숫자가 나와요 : " + num);
  console.log("-------------------------------------");
  // --------------------------------------------------------------------- 검수 반드시 한 ㅜㅎ에 지행 *****
  // useEffect(()=>{},[])
  // [num] 즉 파라미터는 리스트에서 선택될 때마다 값이 바뀌니 그때 마다 데이터를 초기화 한다.
  useEffect(() => {
    const detailServer = async () => {
      const url = `${backendUrl}/api/community/detail?num=${num}`;
      const resp = await axios.get(url);
      console.log('Server Data');
      console.log(resp.data);
      console.log("-------------------------------------");
      // 응답받은 데이터 구조와 동일한 useState에 저장
      setCommunity(resp.data);
    }
    detailServer();
  }, [num]);

  const imageBasePath = `${backendUrl}/imgfile/`;

  return (

    <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '40px', fontFamily: 'monospace', maxWidth: '750px', margin: '0 auto', boxSizing: 'border-box' }}>

      {/* 1. 상단 타이틀 영역 */}
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '30px', letterSpacing: '0.5px' }}>
        {community?.title}
      </div>

      {/* 2. 본문 내용 출력 영역 (whiteSpace: 'pre-wrap'이 핵심 장갑입니다) */}
      <div style={{ fontSize: '13px', lineHeight: '1.8', whiteSpace: 'pre-wrap', color: '#000000', marginBottom: '6px' }}>
        {community?.content}
      </div>

      <div>
        {community?.imgn ? (<img src={`${imageBasePath}${community?.imgn}`} alt={community.title} style={{ width: '500px', height: '500px' }} ></img>) : ("No Image")}
      </div>

      {/* 3. 하단 격자 구분선 및 통합 푸터 구역 */}
      <div style={{ borderTop: '1px solid #333333', marginTop: '60px', paddingTop: '20px', fontSize: '11px', color: '#000000', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '20px', lineHeight: '1.8' }}>

        {/* 좌측 가맹점 정보 */}
        <div>
          <span style={{ fontWeight: 'bold', color: '#000000' }}>대표 OOO</span><br />
          사업자 번호 000-00-00000 통신판매업 0000-서울00-0000<br />
          주소 서울특별시 00 00000 0 ( 00 ) 2층<br />
          이용약관 이용약관 개인정보처리방침 호스팅 레몬24(주)<br />
          T. 00-0000-0000 E. 0000000@gmail.com
        </div>

        {/* 중간 내비게이션 링크 */}
        <div>
          <span style={{ color: '#000000', cursor: 'pointer' }}>북 마인드 소개</span><br />
          <span style={{ cursor: 'pointer' }}>입점처 안내</span><br />
          <span style={{ cursor: 'pointer' }}>대량 주문, 커스텀</span>
        </div>

        {/* 우측 게시판 링크 */}
        <div>
          <span style={{ color: '#000000', cursor: 'pointer' }}>공지사항</span><br />
          <span style={{ cursor: 'pointer' }}>문의사항</span><br />
          <span style={{ cursor: 'pointer' }}>사용후기</span>
        </div>

      </div>
    </div>

  )
}

export default CommunityDetail