import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, Cell,
} from 'recharts';
import { footballFieldData } from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

export function FootballFieldChart() {
  const data = footballFieldData.map((d) => ({
    method: d.method,
    low: d.low,
    high: d.high,
    range: Math.abs(d.high - d.low),
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Football Field — Valuation Ranges by Methodology</h4>
      <p className="text-navy-400 text-xs mb-4">Low and high implied share price (₹) from each valuation approach</p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 40, bottom: 10, left: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis type="number" stroke="#6173e8" fontSize={11} tickFormatter={(v) => `₹${v.toFixed(0)}`} />
          <YAxis type="category" dataKey="method" stroke="#6173e8" fontSize={11} tickLine={false} width={80} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toFixed(2)}`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <ReferenceLine x={1639} stroke="#dc2626" strokeWidth={2} label={{ value: 'Current ₹1,639', position: 'top', fill: '#dc2626', fontSize: 11 }} />
          <Bar dataKey="low" name="Low (₹)" fill="#bfdbfe" radius={[0, 0, 0, 0]} stackId="range" />
          <Bar dataKey="range" name="Range" radius={[0, 4, 4, 0]} stackId="range">
            {data.map((_, i) => (
              <Cell key={i} fill={['#2563eb', '#059669', '#059669', '#059669', '#3b82f6'][i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
