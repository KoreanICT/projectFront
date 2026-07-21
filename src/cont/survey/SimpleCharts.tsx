import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect } from 'react';

interface ResDataprops {
  questions:[],
  average:[]
}
//평점의 평균값, 질문을 배열로 받는다. 
export default function SimpleCharts() {{/*props:ResDataprops 를 매개변수로 넣는다.*/}
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          //data: [..{props.questions}],
          data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
          height: 28,
          categoryGapRatio: 0.5
        },
      ]}
      series={[
        {
          data: [4.0, 3.2, 3.7, 3.8, 4.2],
          //data: [..{props.average}]
          label: '2026.07.20'
        }
      ]}
      grid={{ horizontal: true, vertical: true}}
      height={300}
    />
  );
}