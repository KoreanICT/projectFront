import React, { useEffect, useState } from 'react'
import Stayle from './product.module.css'
import { useNavigate } from 'react-router-dom'

interface ProductForm {
    pfnum?: number; //pk
    pstartdate: string; //시작일
    penddate: string;  //마감일
    productItem: ProductItem[];
}
interface ProductItem {
    pinum?: number; //pk
    piname: string;  //도서명
    piisbn: string; //도서번호
    piprice: number; //단가
    piamount: number; //수량
    pisumprice: number; //1행의 합계 가격 (가격*수량)
    piunitCost: number; //출판사
}

const backendUrl = process.env.REACT_APP_BACK_END_URL;

const Product: React.FC = () => {

    //--------form 
    const [productForm, setProductForm] = useState<ProductForm | null>(null);

    const [pstartdate, setPstartdate] = useState<string>("");
    const [penddate, setPenddate] = useState<string>("");
    const [productItem, setProductItem] = useState<ProductItem[]>([]);

    //-------item
    const [piname, setPiname] = useState<string>("");
    const [piisbn, setPiisbn] = useState<string>("");
    const [piprice, setPiprice] = useState<number>(0);
    const [piamount, setPiamount] = useState<number>(0);
    const [piunitCost, setpiunitCost] = useState<number>(0);
    const pisumprice = (piprice && piamount) ? (piprice * piamount) : 0;

    //--------추가로 필요한 훅들
    const nav = useNavigate();


    //-----ts
    const productSumit = async () => {
        if (!pstartdate || !penddate) {
            alert("시작일과 마감일을 모두 선택해 주세요.");
            return;
        }
        if (!productItem || productItem.length === 0) {
            alert("등록할 상품을 최소 하나 이상 추가해 주세요.");
            return;
        }
        
        const isConfirmed = window.confirm("수정이 불가합니다.\n정말 등록하시겠습니까?\n(수락시 매출관리 페이지로 이동됩니다.)");
        if (isConfirmed) {
            const assembledForm = {
                pstartdate: pstartdate,
                penddate: penddate,
                productItem: productItem,
            };
            setProductForm(assembledForm);
            try {
                const productData = JSON.stringify(assembledForm);
                const res = await fetch(`${backendUrl}/api/productForm`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: productData,
                });
                if (res.ok) {
                    nav("/revenue");
                } else {
                    alert("전송 실패 서버 에러");
                }
            } catch (error) {
                console.error(error);
            }

        }
    }

    const addItem = () => {
        const inputRowList = {
            piname: piname,
            piisbn: piisbn,
            piprice: piprice,
            piamount: piamount,
            pisumprice: pisumprice,
            piunitCost: piunitCost
        }

        setProductItem([...productItem, inputRowList]);

        setPiname("");
        setPiisbn("");
        setPiprice(0);
        setPiamount(0);
        setpiunitCost(0);
    }

    return (
        <div className={Stayle.container}>
            <h2>판매 폼</h2>

            <div className={Stayle.sal_div_header}>
                <p>시작일 : <input type='date' name='pstartdate' onChange={(e) => { setPstartdate(e.target.value) }} /></p>
                <p> ~ </p>
                <p>마감일 : <input type='date' name='penddate' onChange={(e) => { setPenddate(e.target.value) }} /></p>
            </div>
            <h2 className={Stayle.total_price_title}>총 판매 단가 : {pisumprice.toLocaleString()}원</h2>
            {/* 입력 테이블 */}
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
                        <td><input type="text" name="piisbn" value={piisbn} onChange={(e) => setPiisbn(e.target.value)} /></td>
                        <td><input type="text" name="piname" value={piname} onChange={(e) => setPiname(e.target.value)} /></td>
                        <td><input type="number" name="piunitCost" value={piunitCost || ''} onChange={(e) => setpiunitCost(parseInt(e.target.value) || 0)} /></td>
                        <td><input type="number" name="piprice" value={piprice || ''} onChange={(e) => setPiprice(parseInt(e.target.value) || 0)} /></td>
                        <td><input type="number" name="piamount" value={piamount || ''} onChange={(e) => setPiamount(parseInt(e.target.value) || 0)} /></td>
                        <td>{pisumprice.toLocaleString()}원</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>
                            <button type="button" onClick={addItem}>입력하기</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <hr />
            {/* 등록된 리스트 테이블 */}
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
                    {productItem.map((e, i) => (
                        <tr key={i}>
                            <td>{e.piisbn}</td>
                            <td>{e.piname}</td>
                            <td>{e.piunitCost}원</td>
                            <td>{e.piprice}원</td>
                            <td>{e.piamount}</td>
                            <td>{e.pisumprice}원</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>
                            <button type="button" onClick={productSumit}>결산확정</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Product