import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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

    const navigate = useNavigate(); 

    console.log("숫자가 나와요 : " + num);
    console.log("-------------------------------------");
    // --------------------------------------------------------------------- 검수 반드시 한 ㅜㅎ에 지행 *****
    // useEffect(()=>{},[])
    // [num] 즉 파라미터는 리스트에서 선택될 때마다 값이 바뀌니 그때 마다 데이터를 초기화 한다.
    useEffect(() => {
        const detailServer = async () => {
            const url = `${backendUrl}/api/community/detail?num=${num}`;
            const resp = await axios.get(url);
            // 응답받은 데이터 구조와 동일한 useState에 저장
            setCommunity(resp.data);
        }
        detailServer();
    }, [num]);


    const delCommunity = async () => {
        if (window.confirm("정말 삭제하겠나요?")) {
            const url = `${backendUrl}/api/community/delete?num=${num}`;
            await axios.delete(url);
            window.alert("삭제 되었습니다.");
            navigate("/community")
        }
    }

    const imageBasePath = `${backendUrl}/imgfile/`;

    return (
        <div>
            <div className={styles.container}>
                <h1>상세보기 예제</h1>
                <table className={styles.boardTable}>
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <td>{community?.num}</td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>{community?.title}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{community?.writer}</td>
                        </tr>
                        <tr>
                            <th>이미지</th>
                            <td>
                                {community?.imgn ? (<img src={`${imageBasePath}${community?.imgn}`} alt={community.title} style={{ width: '100px', height: '100px' }} ></img>) : ("No Image")}
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>{community?.content}</td>
                        </tr>
                    </tbody>
                    {/* tfoot 목록으로 가는 링크를 만들고 스타일은 */}
                    <tfoot>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>
                                <button className={styles.button} onClick={delCommunity}>삭제</button>&nbsp;
                                <Link to="/community" className={styles.button}>
                                    목록
                                </Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <hr />
            </div>
        </div>
    )
}

export default CommunityDetail