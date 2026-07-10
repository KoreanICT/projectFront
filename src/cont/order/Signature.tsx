import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Stayle from './order.module.css'

/*
    미래를 위한 주석

    const formData = new FormData();
    // 1. 부모에게 받은 텍스트 데이터 쑤셔넣기
    formData.append('textData', JSON.stringify(parentData)); 
    // 2. 3번에서 만든 서명 이미지 파일 쑤셔넣기
    formData.append('file', signatureBlob);

    서명이미지파일과, Order에서 받아온 파라미터를 하나의 객체에 넣으면
    이미지파일이 깨질 가능성이높음
    다라서 제이슨에 별도의 키(객체)로써 저장 후 MultipartFile로 받아야함
*/

export default function Signature() {
    // 핵심: useRef에 SignatureCanvas 타입을 명시하고 초기값을 null로 지정합니다.
    const canvasRef = useRef<SignatureCanvas | null>(null);

    // 3번 조건: 리액트 버튼 클릭 트리거 함수
    const handleSubmit = async (): Promise<void> => {
        // 캔버스 인스턴스가 존재하지 않으면 함수 종료 (타입 가드)
        if (!canvasRef.current) return;

        if (canvasRef.current.isEmpty()) {
            alert("글씨를 먼저 써주세요!");
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
            /* 
                중요한 주석 남김 
                canvas_image.png 부분 서명파일에 일관성이 없으니까
                반드시 DB아키택처할때 유저식별코드(pk)를 
                signature_${파라미터.식별코드}.png 로 받을것
            */ 
            formData.append('signature', blob, 'canvas_image.png'); // 백엔드에서 'signature'이라는 이름으로 받음

            // 백엔드로 전송 (Axios나 fetch 사용)
            const res = await fetch('/api/upload-canvas', {
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

            <div style={{ bottom: 0, display: 'flex', gap: '10px' }}>
                <button onClick={handleClear}>재서명</button>
                <button onClick={handleSubmit} style={{ backgroundColor: '#0088FE', color: '#fff' }}>
                    (서명)
                </button>
            </div>
        </div>
    );
}