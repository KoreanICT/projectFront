import React from 'react'
import Stayle from './product.module.css'
import { useNavigate } from 'react-router-dom'

const Product: React.FC = () => {

    const nav = useNavigate();

    const salForm = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConfirmed = window.confirm("수정이 불가합니다.\n정말 등록하시겠습니까?\n(수락시 매출관리 페이지로 이동됩니다.)");
        if (isConfirmed) {
            nav("/revenue");
        } 
        
    }

    return (
        <div>
            <h2>판매 폼</h2>
            <form onSubmit={salForm}>
            <div>
                <div className={Stayle.sal_div_header}>
                    <p>시작일 : <input type='date' /></p>
                    <p> ~ </p>
                    <p>마감일 : <input type='date' /></p>
                </div>
                <h2>총 판매 단가 : n원 수량입력시 리랜더링</h2>
            </div>
                <table className={Stayle.Table}>
                    <thead>
                        <tr>
                            <th>도서번호</th>
                            <th>도서명</th>
                            <th>도매단가</th>
                            <th>판매단가</th>
                            <th>수량</th>
                            <th>합계금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        <tr>
                            <th><input type="text" value="도서 고유번호를 입력해주세요"></input></th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th>고유번호를 입력하면 리랜더링</th>
                            <th><input type="text" value="수량을 입력해 주세요"></input></th>
                            <th>수량를 입력하면 리랜더링</th>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={6}>
                                <button type='submit'>입력하기</button>
                            </th>
                        </tr>
                        
                    </tfoot>
                </table>
            </form>
        </div>
    )
}

export default Product