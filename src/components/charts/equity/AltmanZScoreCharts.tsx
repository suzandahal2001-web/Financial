import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, ReferenceLine,
} from 'recharts';
import { altmanZScoreYears, altmanZScoreData } from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

export function AltmanZScoreTrendChart() {
  const data = altmanZScoreYears.map((year, i) => ({
    year,
    zScore: altmanZScoreData.finalScore[i],
  }));

  const getZone = (z: number) => {
    if (z >= 3) return '#059669';
    if (z >= 1.81) return '#f59e0b';
    return '#dc2626';
  };

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Altman Z-Score Trend</h4>
      <p className="text-navy-400 text-xs mb-4">Z-Score by year — green ≥3 (safe), amber 1.81–3 (grey zone), red &lt;1.81 (distress)</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} width={45} />
          <Tooltip formatter={(v: any) => Number(v).toFixed(2)} contentStyle={tooltipStyle} />
          <ReferenceLine y={3} stroke="#059669" strokeDasharray="5 5" label={{ value: 'Safe (3.0)', position: 'right', fill: '#059669', fontSize: 10 }} />
          <ReferenceLine y={1.81} stroke="#f59e0b" strokeDasharray="5 5" label={{ value: 'Grey zone (1.81)', position: 'right', fill: '#f59e0b', fontSize: 10 }} />
          <Bar dataKey="zScore" name="Z-Score" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={getZone(d.zScore)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AltmanZScoreComponentsChart() {
  const latest = altmanZScoreData.finalScore.length - 1;
  const data = [
    { component: 'A (WC/TA)', value: altmanZScoreData.workingCapitalTA[latest] * 6.56 },
    { component: 'B (RE/TA)', value: altmanZScoreData.retainedEarningsTA[latest] * 3.26 },
    { component: 'C (EBIT/TA)', value: altmanZScoreData.ebitTA[latest] * 6.72 },
    { component: 'D (Mkt Cap/TL)', value: (altmanZScoreData.marketCapLTL[latest] ?? 0) * 1.0 },
    { component: 'E (Sales/TA)', value: altmanZScoreData.salesTA[latest] * 0.998 },
  ];

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Z-Score Component Breakdown (Latest Year)</h4>
      <p className="text-navy-400 text-xs mb-4">Weighted contribution of each of the 5 ratios to the total Z-Score</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 40, bottom: 10, left: 100 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis type="number" stroke="#6173e8" fontSize={11} />
          <YAxis type="category" dataKey="component" stroke="#6173e8" fontSize={10} tickLine={false} width={100} />
          <Tooltip formatter={(v: any) => Number(v).toFixed(2)} contentStyle={tooltipStyle} />
          <Bar dataKey="value" name="Weighted Contribution" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'][i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
