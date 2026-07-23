import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from './survey.module.css'; 

interface SubmitData {
  result : {},
  request? : any
}

interface SurveyData {
  svnum : number,
  code : number,
  sub : string,
  questions : []
}

const SurveyAddForm: React.FC = () => {
  const [code, setCode] = useState("5"); 
  const [req,setReq] = useState<string>("")
  const [surveyTitles, setSurveyTitles] = useState<number[]>(Array(5).fill(0)); 
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACK_END_URL;

  const [surveyRespData,setSurveyRespData] = useState<SurveyData>();
  const [questions,setQuestions] = useState<[]>([]);

  const surveyRatingChange = (index: number, score: number) => {
    const newRatings = [...surveyTitles];
    newRatings[index] = score;
    setSurveyTitles(newRatings);
  };

  useEffect(() => {
    /*backend의 survey_Questions 로부터 questions_text, survey로부터 code,svnum을 받아올 것.
      개인의 mnum을 가져올 것.
    */
    //const resquest = await axios.get(`${backendUrl}/api/survey/selectSurvey`, surveyRespData)
  },[])

  const surveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //이후 json을 통해 질문이 배열 형태로 ..연산자를 통하여 fixedQuestions 배열 내에 들어갈 수 있게끔
      const fixedQuestions = [
        "도서 검색 및 데이터 처리 속도에 만족하십니까?",
        "메뉴 구성과 화면 디자인이 사용하기 편리했습니까?",
        "주문 연동 및 재고 수량의 정확성에 만족하십니까?",
        "재고 부족 알림 및 모니터링 기능이 업무에 도움이 되었습니까?",
        "향후 이 프로그램을 지속적으로 사용할 의향이 있으십니까?",
        "기타 개선 사항이나 추가되었으면 하는 기능이 있다면 자유롭게 적어주세요. 추가"
      ];
      //const fixedQuestions = [...[]]

      const surveyData:SubmitData = {
        //code: 5, //code는 관리자 페이지에서 평가항목 수정에 의해 정해진 code(갯수)
        result: fixedQuestions.map((q, index) => ({
        surveytitle: `${q} [기본 설정 평점: ${surveyTitles[index]}점]`, 
        })),
        request:req
      };
      
      const response = await axios.post(`${backendUrl}/api/survey/addResult`, surveyData);
      if(response.status === 200){
        alert("평가해 주셔서 감사합니다. 여러분들의 평가는 저희의 발전의 원동력이 됩니다.");
        navigate(-1);
      } 
    } catch (error) {
      console.error("Error :", error);
      alert("평가 등록에 실패하였습니다. 잠시 후 다시 시도해주십시오.");
    }
  };

  const handleChange = (e: any) => {
    setReq(e.target.value);
  }

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
            {/*추가적인 요청 사항 텍스트 박스*/}
            <li className="list-group-item p-4 bg-white d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
              <div className={style.textareaContainer}>
                <p className="fw-bold text-dark flex-grow-1">6. 추가로 요청하실 사안이 있으시다면 자유롭게 작성해주세요.</p>{/*숫자 6은 code를 받고 +1 시킬 것. */}
                <textarea
                  className={style.textarea}
                  rows={8}
                  cols={85}
                  onChange={handleChange}
                />
              </div>
            </li>
          </ul>
          
          <div className="card-footer bg-light p-3 text-center border-0 d-flex gap-2 justify-content-center">
            <button type="submit" className="btn btn-primary fw-bold px-4 py-2">등록</button>
            {/* <button type="button" className="btn btn-secondary px-4 py-2" onClick={() => navigate("/surveylist")}>
              목록
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyAddForm;