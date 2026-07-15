import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectForecast } from '../../data';

export default function RegressionStatsChart() {
  const data = projectForecast.coefficients.map((c) => ({
    name: c.name.includes('Intercept') ? 'Intercept (α)' : 'Beta (β)',
    'Coefficient': c.value,
    'Lower 95%': c.lower95,
    'Upper 95%': c.upper95,
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">Regression Coefficients with 95% Confidence Interval</h4>
      <p className="text-navy-400 text-xs mb-4">OLS regression — Intercept and Beta estimates</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="name" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} />
          <YAxis stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => v.toFixed(3)} width={55} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any) => v.toFixed(4)}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Bar dataKey="Lower 95%" fill="#dbeafe" radius={[4, 4, 0, 0]} barSize={40} />
          <Bar dataKey="Coefficient" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
          <Bar dataKey="Upper 95%" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
