import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// 백엔드(스프링부트)에서 이 모양 그대로 JSON만 던져주면 됩니다.
const data = [
    { name: '소설', value: 400 },
    { name: '자연과학', value: 300 },
    { name: '인문학', value: 100 },
    { name: '만화', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#575550','pink'];

export default function ShareChart() {
    return (
        <div style={{ width: 500 , height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%" cy="50%"
                        innerRadius={60} // 이 값을 주면 도넛 차트가 되고, 0으로 하면 꽉 찬 원형 차트가 됩니다!
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip /> {/* 마우스 올렸을 때 점유율 정보 팝업 */}
                    <Legend />  {/* 하단에 컬러별 범례 표시 */}
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}