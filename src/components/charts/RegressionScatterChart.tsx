import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { projectForecast } from '../../data';

export default function RegressionScatterChart() {
  const data = projectForecast.priceData.map((d) => ({
    nifty: d.nifty,
    dmart: d.dmart,
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">DMart vs NIFTY 50 — Price Scatter Plot</h4>
      <p className="text-navy-400 text-xs mb-4">Daily closing prices — December 2024 (21 observations shown)</p>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis type="number" dataKey="nifty" name="NIFTY 50" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={{ stroke: '#c7d8fe' }} tickFormatter={(v) => v.toLocaleString()} domain={['dataMin', 'dataMax']} />
          <YAxis type="number" dataKey="dmart" name="DMart (₹)" stroke="#6173e8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} domain={['dataMin', 'dataMax']} />
          <ZAxis range={[60, 60]} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any, n: any) => n === 'DMart (₹)' ? [`₹${v}`, n] : [v.toLocaleString(), n]}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Scatter name="Daily Prices" data={data} fill="#2563eb" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
