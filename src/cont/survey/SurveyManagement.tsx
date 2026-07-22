import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleCharts from "./SimpleCharts";
import styles from "./surveymanagement.module.css"

interface SurveyContents {
    }
const SurveyManagement: React.FC = () => {

    const [sresult,setSresult] = useState<[SurveyContents]>();
    useEffect(() => {
        setSresult([
            {
                
            },
        ])
    },[])

    const navigate = useNavigate();

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