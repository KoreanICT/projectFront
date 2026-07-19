import { Link } from "react-router-dom";

interface SurveyContents {
        
    }
const SurveyManagement: React.FC = () => {

    
    return(
        <div>
            <Link 
                to="/admin/surveyupdate"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                평가항목 관리
            </Link>
            <p>전체적인 평가(설문조사)를 관리하는 컴포넌트 입니다.</p>
            <p>평가항목 수정 컴포넌트로 가는 버튼, 평가 결과를 시각적으로 보여주는 컴포넌트를 화면에 렌더링하는 상위 컴포넌트입니다.</p>
            
        </div>
    );
}
export default SurveyManagement