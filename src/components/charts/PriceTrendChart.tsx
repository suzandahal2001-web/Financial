import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectForecast } from '../../data';

export default function PriceTrendChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">DMart & NIFTY 50 — December 2024 Price Trend</h4>
      <p className="text-navy-400 text-xs mb-4">Daily closing prices — DMart in ₹, NIFTY 50 in points</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={projectForecast.priceData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="date" stroke="#6173e8" fontSize={11} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} angle={-30} textAnchor="end" height={60} />
          <YAxis yAxisId="left" stroke="#2563eb" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} width={50} />
          <YAxis yAxisId="right" orientation="right" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} width={50} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any, n: any) => n === 'DMart (₹)' ? [`₹${v}`, n] : [v.toLocaleString(), n]}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Line yAxisId="left" type="monotone" dataKey="dmart" name="DMart (₹)" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: '#2563eb', r: 3 }} />
          <Line yAxisId="right" type="monotone" dataKey="nifty" name="NIFTY 50" stroke="#93c5fd" strokeWidth={2.5} dot={{ fill: '#93c5fd', r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
