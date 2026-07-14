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
        <div className={styles.container}>
            <h2>UpcommunityList</h2>
            <h3>검수용 : totalPages : {totalPages} / startPage : {startPage} / endPage : {endPage}</h3>
            <table className={styles.boardTable}>
                <thead>
                    <tr>
                        <td colSpan={6}>현재 페이지 : {currentPage}</td>
                    </tr>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>이미지</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {upCommunityList.map((item) => (
                        <tr key={item.num}>
                            <td>{item.num}</td>
                            <td>
                                <Link to={`/community/detail/${item.num}`} className={styles.titleLink}>{item.title}</Link>
                            </td>
                            <td>{item.writer}</td>
                            <td>
                                {/* {item.imgn?(<img src={imageBasePath+item.imgn} alt={item.title} style={{width: '100px', height: '100px'}} ></img>):("No Image")} */}
                                {item.imgn?(<img src={`${imageBasePath}${item.imgn}`} alt={item.title} style={{width: '100px', height: '100px'}}></img>):("No Image")}
                                
                            </td>
                            <td>{item.hit}</td>
                            <td>{item.cdate}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={6} className='text-center align-middle'>
                            <select name="" id="" onChange={(e) => {setSearchType(e.target.value)}}>
                                <option value="1">작성자</option>
                                <option value="2">제목</option>
                                <option value="3">내용</option>
                            </select>
                            <input type='text' onChange={(e) => {setSearchValue(e.target.value)}} />
                            <button className='btn btn-warning' onClick={searchFunction}>검색</button>
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={6} style={{textAlign: "center"}}>
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {startPage > 1 && (
                                        <li className="page-item">
                                            <button className="page-link"
                                                onClick={() => { pageChange(startPage - 1) }}>
                                                이전</button>
                                        </li>
                                    )}
                                    {/* 페이지 출력하기 */}
                                    {
                                        // startPage = 1 , endPage=3 => [1,2,3]이란 배열을 만들어 준다.
                                        Array.from({length: endPage - startPage+1}, (xx, i) => i + startPage)
                                            .map((page) => (
                                                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                                    <button className="page-link" onClick={() => {pageChange(page)}}>{page}</button>
                                                </li>
                                            ))
                                    }

                                    {/*
                                NextPage 출력하기 : totalPage 보다 endPage 적을 때 다음페이지가 
                                있는 것으로 계산        
                                */}
                                    {endPage < totalPages && (
                                        <li className="page-item">
                                            <button className="page-link" onClick={() => { pageChange(endPage + 1) }}>
                                                다음</button>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </td>
                    </tr>
                </tfoot>

            </table>
            {/* UpboardForm.tsx */}
            <Link to="/communityform" className={styles.button}>
                글쓰기
            </Link>
        </div>
    )
}

export default Community