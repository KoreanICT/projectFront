import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Stayle from './order.module.css'
import { OrderForm } from './Order';

interface SignatureProps {
    order: OrderForm | null;
}

export default function Signature({ order }: SignatureProps) {
    // useRef에 SignatureCanvas 타입을 명시하고 초기값을 null로 지정
    const canvasRef = useRef<SignatureCanvas | null>(null);

    // 3번 조건: 리액트 버튼 클릭 트리거 함수
    const handleSubmit = async (): Promise<void> => {
        // 캔버스 인스턴스가 존재하지 않으면 함수 종료 (타입 가드)
        if (!canvasRef.current) return;

        if (canvasRef.current.isEmpty()) {
            alert("서명확인");
            return;
        }
        
        if (!order) {
            alert("주문서 정보가 없습니다.");
            return;
        }

        // 2번 조건: 그려진 공간을 이미지 데이터(Base64 문자열)로 추출
        const trimmedCanvas = canvasRef.current.getTrimmedCanvas();
        const image64: string = trimmedCanvas.toDataURL('image/png');

        // 스프링부트 백엔드로 전송할 FormData 객체 생성
        const formData = new FormData();

        try {
            // Base64 문자열을 실제 파일(Blob/File) 객체로 변환하여 담기
            const response = await fetch(image64);
            const blob: Blob = await response.blob();

            const fileName = order?.ophone
                ? `signature_${order.ophone}.png` //서명파일 작명양식 : signature_핸드폰번호.png
                : 'canvas_signature.png';

            formData.append('signature', blob, fileName); // 백엔드에서 'signature'이라는 이름으로 받음
            if (order) {
                formData.append('order', JSON.stringify(order));
            }
            // 백엔드로 전송 (Axios나 fetch 사용)
            const res = await fetch('/api/order', {
                method: 'POST',
                body: formData, // Multipart FormData 전송
            });

            if (res.ok) {
                alert("전송 완료!");
            } else {
                alert("전송 실패 서버 에러");
            }
        } catch (err) {
            console.error("업로드 중 에러 발생:", err);
        }
    };

    // 지우기 버튼용 함수
    const handleClear = (): void => {
        if (canvasRef.current) {
            canvasRef.current.clear();
        }
    };

    return (
        <div className={Stayle.Signature_div}>
            {/* 1번 조건: 일정 크기의 그리기 공간 */}
            <div style={{ border: '2px solid #ccc', width: '400px', height: '200px', background: '#f9f9f9' }}>
                <SignatureCanvas
                    ref={canvasRef}
                    canvasProps={{ width: 500, height: 300, className: 'sigCanvas' }}
                    penColor="black"
                />
            </div>


            {/* Signature_btn */}
            <div style={{ display: 'flex', gap: '10px' }}>
                <button className={Stayle.Signature_btn1} onClick={handleClear}>재서명</button>
                <button className={Stayle.Signature_btn2} onClick={handleSubmit} style={{ backgroundColor: '#0088FE', color: '#fff' }}>
                    (서명)
                </button>
            </div>
        </div>
    );
}