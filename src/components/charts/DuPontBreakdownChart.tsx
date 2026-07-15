import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectDuPont } from '../../data';

export default function DuPontBreakdownChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">DuPont ROE Decomposition (6-Year)</h4>
      <p className="text-navy-400 text-xs mb-4">Net Margin × Asset Turnover × Equity Multiplier = ROE (%)</p>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={projectDuPont.dupontBreakdown} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} />
          <YAxis stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} width={45} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(value: any, name: any) => {
              if (name === 'Asset Turnover') return [`${value}x`, name];
              return [`${value}%`, name];
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Bar dataKey="netMargin" name="Net Margin %" fill="#bfdbfe" radius={[4, 4, 0, 0]} barSize={16} />
          <Bar dataKey="assetTurnover" name="Asset Turnover" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={16} />
          <Bar dataKey="equityMultiplier" name="Equity Multiplier" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={16} />
          <Line type="monotone" dataKey="roe" name="ROE %" stroke="#1e3a8a" strokeWidth={3} dot={{ fill: '#1e3a8a', r: 5 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
