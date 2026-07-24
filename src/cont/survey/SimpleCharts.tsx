import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';

interface ResDataprops {
  code: number,
  average: number[],
}
//평점의 평균값, 질문을 배열로 받는다. 
export default function SimpleCharts() {{/*props:ResDataprops 를 매개변수로 넣는다.*/}

  const [res, setRes] = useState<ResDataprops>();
  const [qList,setQlist] = useState<string[]>(Array(2).fill(""));
  const [avgArr,setAvgArr] = useState<number[]>(Array(2).fill(0));

  useEffect(() => {
    if(res) {
      setQlist(Array(res.code).fill(null).map((_,index) => `q${index+1}`));
      setAvgArr(res.average); 
    } else {
      console.log("Chart 구성을 불러오는데 실패했습니다.")
    }
  },[])

  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          //data: qlist,
          data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
          height: 28,
          categoryGapRatio: 0.5
        },
      ]}
      series={[
        {
          data: [4.0, 3.2, 3.7, 3.8, 4.2],
          //data: avgArr,
          label: '2026.07.20'
        }
      ]}
      grid={{ horizontal: true, vertical: true}}
      height={300}
    />
  );
}