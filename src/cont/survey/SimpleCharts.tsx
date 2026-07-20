import { BarChart } from '@mui/x-charts/BarChart';

export default function SimpleCharts() {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
          height: 28,
          categoryGapRatio: 0.5
        },
      ]}
      series={[
        {
          data: [4.0, 3.2, 3.7, 3.8, 4.2],
          label: '2026.07.20'
        }
      ]}
      grid={{ horizontal: true}}
      height={300}
    />
  );
}