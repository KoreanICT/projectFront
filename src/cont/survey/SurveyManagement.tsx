import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleCharts from "./SimpleCharts";
import styles from "./surveymanagement.module.css"
import axios from "axios";

interface SurveyResult {
    questions_id: number,
    rating: number
}

interface Data {
    svnum: number,
    code: number, 
    sub: string, 
    sdate: string,
    result: []
}
const SurveyManagement: React.FC = () => {

    const backendUrl = process.env.REACT_APP_BACK_END_URL;

    const [sresult,setSresult] = useState<[]>([]);
    //const [result,setResult] = useState<SurveyResult>({questions_id: 0, rating: 1});
    const [code, setCode] = useState<number>(0);
    const [sub, setSub] = useState<string>("");
    const [data, setData] =useState<Data|null>(null);

    const fetchResult = async () => {
        try{
            const response = await axios.get(`${backendUrl}/api/survey/getAvgs`)
            
            if(response.status === 200) {
                setData(response.data);
            } else {
                console.log("데이터를 불러오는데 실패했습니다.");
            }
        } catch(error) {
            console.error("데이터를 불러오는데 실패했습니다.",error);
        }
    };
    
    const navigate = useNavigate();

    useEffect(() => {
        fetchResult();
    },[])

    return(
        <div className={styles.managementContainer}>
            <button
                onClick={() => navigate("/admin/surveyupdate")}
                className={styles.transbtn}
            >
                평가항목 등록
            </button>
            <div className={styles.resultContainer}>
                <h3>평가 결과</h3>
                <SimpleCharts />
            </div>
        </div>
    );
}
export default SurveyManagement