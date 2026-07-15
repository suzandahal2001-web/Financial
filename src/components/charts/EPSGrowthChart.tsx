import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectDuPont } from '../../data';

export default function EPSGrowthChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">EPS Growth Trajectory (10 Years)</h4>
      <p className="text-navy-400 text-xs mb-4">Avenue Supermarts Ltd. — Earnings Per Share in ₹</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={projectDuPont.historicalData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} />
          <YAxis stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} width={50} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any) => [`₹${v}`, 'EPS']}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Line type="monotone" dataKey="eps" name="EPS (₹)" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
