// SalesLineChart.jsx
import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from 'recharts';
// import { data } from './sampleData';

interface SalesData {
    date: string;  // 가로축 (예: '6월 1주차')
    sales: number; // 세로축 매출 (예: 5000000)
}

const data: SalesData[] = [
    { date: '6월 1주차', sales: 1500000 },
    { date: '6월 2주차', sales: 3200000 },
    { date: '6월 3주차', sales: 2800000 },
    { date: '6월 4주차', sales: 4500000 },
];
const Chart: React.FC = () => {
    // 2. 축 포맷터 함수에 정확한 타입 지정
    const formatXAxis = (tickItem: string): string => {
        return tickItem; // 필요 시 날짜 포맷팅 로직 추가
    };

    const formatYAxis = (tickItem: number): string => {
        // 10,000원 단위나 만원 단위로 변환하고 싶을 때 사용
        return `${(tickItem / 10000).toLocaleString()}만원`;
    };

    return (
        <div role="img" aria-label="6월 주차별 매출 추이를 보여주는 선형 차트">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    /* Recharts가 요구하는 정석 객체 구조 유지 */
                    margin={{ top: 16, right: 24, left: 8, bottom: 8 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" tickFormatter={formatXAxis} />
                    <YAxis tickFormatter={formatYAxis} />

                    {/* 3. Tooltip 내부 매개변수들에 확실하게 타입 지정을 해주거나 기본 추론을 활용 */}
                    {/* <Tooltip
                        formatter={(value: number | string | Array<number | string>) =>
                            typeof value === 'number' ? `${value.toLocaleString()}원` : value
                        }
                        labelFormatter={(label: string) => `날짜: ${label}`}
                    /> */}

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={false}
                        name="매출"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;