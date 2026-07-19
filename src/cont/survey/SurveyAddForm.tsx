import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from './survey.module.css'; 

const SurveyAddForm: React.FC = () => {
  const [code, setCode] = useState("5"); 
  const [surveyTitles, setSurveyTitles] = useState<number[]>(Array(5).fill(0)); 
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACK_END_URL;
  const surveyRatingChange = (index: number, score: number) => {
    const newRatings = [...surveyTitles];
    newRatings[index] = score;
    setSurveyTitles(newRatings);
  };
  const surveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fixedQuestions = [
        "도서 검색 및 데이터 처리 속도에 만족하십니까?",
        "메뉴 구성과 화면 디자인이 사용하기 편리했습니까?",
        "주문 연동 및 재고 수량의 정확성에 만족하십니까?",
        "재고 부족 알림 및 모니터링 기능이 업무에 도움이 되었습니까?",
        "향후 이 프로그램을 지속적으로 사용할 의향이 있으십니까?",
        "기타 개선 사항이나 추가되었으면 하는 기능이 있다면 자유롭게 적어주세요. 추가"
      ];

      const surveyData = {
        code: 5, 
        contents: fixedQuestions.map((q, index) => ({
        surveytitle: `${q} [기본 설정 평점: ${surveyTitles[index]}점]`, 
        }))
      };
      
      const response = await axios.post(`${backendUrl}/api/survey/addsurvey`, surveyData);
      if(response.status === 200){
        alert("설문이 등록 되었습니다.");
        navigate("/surveylist");
      } 
    } catch (error) {
      console.error("Error :", error);
      alert("설문 등록에 실패했습니다.");
    }
  
    navigate(-1);
  };

  return (
    <div className={style.container2}>
      <form onSubmit={surveySubmit}>
        <div className="card w-100 shadow border-0">
          
          {/* 제목 */}
          <div className="card-header bg-dark text-white fw-bold py-3 text-center">
             (회사로고)프로그램 만족도 조사
          </div>

          {/* 설문문항 */}
          <ul className="list-group list-group-flush">
            {[
              "1. 도서 검색 및 데이터 처리 속도에 만족하십니까?",
              "2. 메뉴 구성과 화면 디자인이 사용하기 편리했습니까?",
              "3. 주문 연동 및 재고 수량의 정확성에 만족하십니까?",
              "4. 재고 부족 알림 및 모니터링 기능이 업무에 도움이 되었습니까?",
              "5. 향후 이 프로그램을 지속적으로 사용할 의향이 있으십니까?"
            ].map((question, index) => (
              <li key={index} className="list-group-item p-4 bg-white d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                
                {/* 질문 */}
                <div className="fw-bold text-dark flex-grow-1">{question}</div>
                <div className="d-flex align-items-center gap-3 ms-md-auto">
                  <div className={style.starRatingContainer}>
                    {[1, 2, 3, 4, 5].map((score) => {
                      const isSelected = surveyTitles[index] >= score;
                      return (
                        <span
                          key={score}
                          onClick={() => surveyRatingChange(index, score)}
                          className={`${style.starItem} ${isSelected ? style.active : ""}`}
                        >
                          ★
                        </span>
                      );
                    })}
                  </div>
                    
                  {/* 점수표시  */}
                  <span className={`badge bg-secondary rounded-pill ${style.scoreBadge}`}>
                    {surveyTitles[index]}점
                  </span>
                </div>

              </li>
            ))}
          </ul>
          
          <div className="card-footer bg-light p-3 text-center border-0 d-flex gap-2 justify-content-center">
            <button type="submit" className="btn btn-primary fw-bold px-4 py-2">등록</button>
            <button type="button" className="btn btn-secondary px-4 py-2" onClick={() => navigate("/surveylist")}>
              목록
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyAddForm;