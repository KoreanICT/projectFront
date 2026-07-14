import React from 'react'
import Stayle from './order.module.css'
import MyCanvasPage from './Signature'

interface order_form{
  registration_number :number; //발주등록번호

}


const Order: React.FC = () => {


  return (
    <div>
      <div className={Stayle.header_container}>
        <h2 className={Stayle.header_container_text_right}>발주자 작성란</h2>
        <h3 className={Stayle.div_text}>서명 및 발주하기</h3>
      </div>
      <form>
        <div className={Stayle.header_container}>
          <div className={Stayle.header_container_text_right}>
            <ul className={Stayle.header_container_li}>
              <li>대표자 : <input type="text" name='representativeName' /></li>
              <li>주소 : <input type="text" name='address' /></li>
              <li>상호명 : <input type="text" name='businessName' /></li>
              <li>연락처 : <input type="text" name='phonNumber' /></li>
              <li>발주일 : <input type="date" name='orderDate' /></li>
            </ul>
          </div>
          <div className={Stayle.header_container_text_left}>
            {/* <ul>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
            <li>발주일 : <input type="text" name='date' /></li>
          </ul> */}

            <MyCanvasPage />
            {/* <input type="button" name='date'>발주하기</input> */}
          </div>
        </div>



        <table className={Stayle.Table}>
          <thead>
            <tr>
              <th>도서명</th>
              <th>출판사</th>
              <th>단가</th>
              <th>합계금액</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><input type="text"></input></th>
              <th><input type="text"></input></th>
              <th><input type="text"></input></th>
              <th>tsx영역, 단가x수량만큼의 값을 출력</th>
              <th><input type="text"></input></th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Order