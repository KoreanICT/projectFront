import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './Inquire.module.css'
import Inquirecomm from './Inquirecomm';

const InquireDetail: React.FC = () => {


    return (
        <div className={styles.container}>
            <h1>상세보기 예제</h1>
            <table className={styles.boardTable}>
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>안녕하세요</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>테스형</td>
                    </tr>
                    <tr>
                        <th>이미지</th>
                        <td>이미지를 사용할 자리</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>내용이 들어갈 자리</td>
                    </tr>    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2} style={{textAlign:"center"}}>
                        <button className={styles.button} >삭제</button>&nbsp;  
                        <Link to="/inquiry" className={styles.button}>
                        목록</Link>
                        </td>
                    </tr>
                </tfoot>           
            </table>
            <hr />
            <Inquirecomm/>
        </div>
    )
}

export default InquireDetail