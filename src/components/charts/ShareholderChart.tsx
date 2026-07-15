import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectInfosys } from '../../data';

export default function ShareholderChart() {
  const data = projectInfosys.topShareholders.slice(0, 6).map((s) => ({
    name: s.name.length > 20 ? s.name.substring(0, 18) + '...' : s.name,
    'Holding %': s.holding,
    'Market Value (₹ Cr)': s.marketValue,
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">Top 6 Institutional Shareholders</h4>
      <p className="text-navy-400 text-xs mb-4">Infosys Ltd. — Holding percentage and market value (₹ Cr)</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis type="number" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="name" stroke="#6173e8" fontSize={11} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} width={120} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any, n: any) => n.includes('Market') ? [`₹${v.toLocaleString()} Cr`, n] : [`${v.toFixed(2)}%`, n]}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Bar dataKey="Holding %" fill="#2563eb" radius={[0, 4, 4, 0]} barSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
