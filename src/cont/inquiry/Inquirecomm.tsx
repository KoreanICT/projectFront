import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Inquirecomm: React.FC = () => {
    const backendUrl = process.env.REACT_APP_BACK_END_URL;
    const nav = useNavigate();

    const upForm = (e:React.SubmitEvent) => {
        e.preventDefault();
        alert("작성이 완료되었습니다.");
        //값을 데이터베이스에 전공할수있는 함수
        nav("/inquiry");
    }

  return (
    <div className='mt-4'>
        <h4>Comments</h4>
        <form className='mb-3' onSubmit={upForm}>
            <div className='mb-2'>
                <input type="text" placeholder='작성자' className='form-control'
                />
            </div>
            <div className='mb-2'>
                <textarea  className='form-control' placeholder='댓글' 
                ></textarea>
            </div>
            <div className='text-center'>
                <button type='submit' className='btn btn-primary'>댓글작성</button>
            </div>
        </form>
        {/* 댓글 리스트  */}
        <ul className='list-group'>
           <li>n번댓글</li>
        </ul>
    </div>
  )
}

export default Inquirecomm