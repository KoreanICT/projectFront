
interface SurveyResult {
    surveycode: number,
    result:[],//컨텐츠 1의 평균, 컨텐츠 2의 평균,....이런 식으로 데이터를 받아옵니다.

}
const SurveyResult: React.FC = () => {
 
    return (
        <div>평가 결과가 나오는 컴포넌트입니다.</div>
    )
}
export default SurveyResult