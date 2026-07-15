import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectDuPont } from '../../data';

export default function DuPontRevenueChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">Revenue, EBITDA & Net Profit Trend (10 Years)</h4>
      <p className="text-navy-400 text-xs mb-4">Avenue Supermarts Ltd. — All figures in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={projectDuPont.historicalData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} />
          <YAxis
            yAxisId="left"
            stroke="#6173e8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
            width={45}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#2563eb"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}%`}
            width={45}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(value: any, name: any) => {
              if (name.includes('Margin')) return [`${value}%`, name];
              return [`₹${Number(value).toLocaleString()} Cr`, name];
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Bar yAxisId="left" dataKey="sales" name="Revenue" fill="#bfdbfe" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar yAxisId="left" dataKey="ebitda" name="EBITDA" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar yAxisId="left" dataKey="netProfit" name="Net Profit" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
          <Line yAxisId="right" type="monotone" dataKey="netMargin" name="Net Margin %" stroke="#1e3a8a" strokeWidth={2.5} dot={{ fill: '#1e3a8a', r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
