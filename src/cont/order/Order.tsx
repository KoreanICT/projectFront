import React from 'react'
import Stayle from './order.module.css'
import MyCanvasPage from './Signature'
const Order: React.FC = () => {
  
  
  return (
    <div>
      {/* <div className={Stayle.header_container}>
                <h2 className={Stayle.header_container_text}>발주관리 컴포넌트</h2>
                <button className={Stayle.header_container_btn}>test1</button>
                <button className={Stayle.header_container_btn}>test1</button>
            </div>
            <hr/> */}
      <h2>발주자 작성란</h2>
      <form>
        <div className={Stayle.header_container}>
        <div className={Stayle.header_container_text_right}>
          <ul className={Stayle.header_container_li}>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
          </ul>
        </div>
        <div className={Stayle.header_container_text_left}>
          <ul>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
          </ul>
          {/* <input type="button" name='date'>발주하기</input> */}
        </div>
        </div>
        <MyCanvasPage/>
      </form>
      
      <table className={Stayle.Table}>
        <thead>
          <tr>
            <th>뭐시기</th>
            <th>뭐시기</th>
            <th>뭐시기</th>
            <th>뭐시기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>더미데이터</th>
            <th>더미데이터</th>
            <th>더미데이터</th>
            <th>더미데이터</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Order