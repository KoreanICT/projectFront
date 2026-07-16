import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './upboard.module.css'
import axios from 'axios';

// 1. 서버측 json보고 만들기
// {
// "bdate": "2026-06-30 10:20:29",
// "content": "내용임,내용",
// "hit": 0,
// "imgn": "yee.jpg",
// "mfile": null,
// "num": 27,
// "reip": "192.168.0.45",
// "title": "제목임,제목1",
// "writer": "테스형임,작성자1"
// },

interface CommunityVO {
  num: number;
  title: string;
  writer: string;
  content: string;
  imgn: string;
  hit: number;
  reip: string;
  cdate: string;
}

// totalItems - count
// totalPages - 전체페이지수
// currentPage - 현재페이지
// startPage , endPage

const Community: React.FC = () => {
  // 환경설정에 정의한 url 사용하기 
  const backendUrl = process.env.REACT_APP_BACK_END_URL;

  const [upCommunityList, setCommunityList] = useState<CommunityVO[]>([]);


  // 페이징처리 관련 어딜가나 페이징 처리 하실때는 그대로 사용
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // cPage의 기본 1값을 초기화
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);

  // <검색>을 위한 useState를 추가한다.
  const [searchType, setSearchType] = useState('1');
  const [searchValue, setSearchValue] = useState('');



  // 3. 초기화 시 -> useEffect를 사용해서 axios를 사용해서 서버측 데이터를 받아 와서 useState에 저장하기
  // http://192.168.0.45/projectBack/imgfile/;
  const imageBasePath = `${backendUrl}/imgfile/`;

  // cPage값 page 서버로 전송
  const fetchUpcommunityList = async (page: number) => {
    try {
      const urls = `${backendUrl}/api/community/upCommunityList`;
      const response = await axios.get(urls, {
        params: {
          cPage: page,
          searchType: searchType,
          searchValue: searchValue
        }
      });
      console.log(response.data.data);
      // useState에 배치
      setCommunityList(response.data.data);
      setTotalItems(response.data.totalItems);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
      setStartPage(response.data.startPage);
      setEndPage(response.data.endPage);
    } catch (error) {
      console.error(error);
    }
  }
  // 4. useEffect 를 사용해서 서버로 비동기식으로 접속해서 데이터를 가져오는 설정
  useEffect(() => {
    fetchUpcommunityList(currentPage);
  }, [currentPage])

  // page Handler
  const pageChange = (page: number) => {
    setCurrentPage(page);
  }

  // 검색 버튼 클릭시에 1페이지 부터 검색!
  const searchFunction = () => {
    fetchUpcommunityList(1);
  }

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '40px', fontFamily: 'monospace', maxWidth: '700px', margin: '0 auto' }}>
      {/* UpboardForm.tsx */}
      {/* [상단 헤더 구역] */}
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>[ 북 마인드     커뮤니티 ]</span>
        <Link to="/communityform" style={{ backgroundColor: 'transparent', color: '#000000', border: 'none', fontSize: '18px', cursor: 'pointer', marginLeft: 'auto', textDecoration: "none" }}>
          [글쓰기]
        </Link>
      </div>
      {/* 이미지의 아날로그 격자선 표현 (+----+ 형태) */}
      <div style={{ color: '#888888', marginBottom: '15px' }}><hr /></div>

      {/* [📌 상단 상시 고정 공지사항 영역] */}
      <div style={{ padding: '0 10px', marginBottom: '15px' }}>
        {upCommunityList.slice(0, 2).map((post) => (
          <div key={post.num} style={{ margin: '15px 0', fontSize: '18px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ marginRight: '10px' }}>📌</span>
            <span style={{ fontWeight: 'bold' }}>[ 게시글 ] {post.title}</span>
          </div>
        ))}
      </div>

      <div style={{ color: '#888888', marginBottom: '10px' }}><hr /></div>

      {/* [일반 커뮤니티/재고 소싱 게시글 목록 영역] */}
      <div style={{ padding: '0 10px' }}>

        {upCommunityList.map((post) => (

          <div key={post.num}>
            <Link to={`/community/detail/${post.num}`} style={{textDecoration: "none"}}>

              <div style={{ padding: '12px 0', cursor: 'pointer' }}>
                <div style={{ fontSize: '13px', color: '#000000', marginBottom: '6px' }}>
                  [ 게시물 ] {post.title}
                </div>
                <div style={{ fontSize: '11px', color: '#888888' }}>
                  {post.writer} {post.cdate}
                </div>
              </div>
            </Link>
            {/* 소소문구 도면 특유의 아이템 구별 점선 스트랩 */}
            <div style={{ color: '#444444', fontSize: '12px', letterSpacing: '-1px' }}>-------------------------------------------------------------</div>
          </div>

        ))}
      </div>


      {/* [최하단 액션 및 검색 바 격자 구역] */}
      <div style={{ color: '#888888' }}><hr /></div>
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', padding: '5px 10px', fontSize: '13px' }}></div>
    </div>
  )
}
export default Community;