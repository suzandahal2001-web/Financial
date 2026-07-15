import {
  RadialBar, RadialBarChart, PolarAngleAxis, ResponsiveContainer, Tooltip,
} from 'recharts';
import { projectDCF } from '../../data';

export default function WACCChart() {
  const { waccComponents } = projectDCF;
  const data = [
    { name: 'Cost of Equity', value: waccComponents.costOfEquity * 100, fill: '#2563eb' },
    { name: 'Cost of Debt', value: waccComponents.costOfDebt * 100, fill: '#93c5fd' },
    { name: 'WACC', value: waccComponents.wacc * 100, fill: '#1d4ed8' },
  ];

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">WACC Component Breakdown</h4>
      <p className="text-navy-400 text-xs mb-4">Cost of Equity, Cost of Debt & blended WACC (%)</p>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={data} innerRadius="25%" outerRadius="100%" startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 25]} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={8} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any) => `${v.toFixed(2)}%`}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: d.fill }} />
            <span className="text-xs text-navy-600 font-medium">{d.name}: {d.value.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
