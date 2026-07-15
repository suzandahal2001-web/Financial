import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from 'recharts';
import { projectInfosys } from '../../data';

export default function InfosysRadarChart() {
  const data = projectInfosys.financialSummary.map((d) => ({
    year: d.year,
    'ROE': d.roe,
    'ROCE': d.roce,
    'Net Margin': d.netMargin,
  }));

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-navy-900 font-semibold mb-1">Profitability Radar (ROE, ROCE, Net Margin %)</h4>
      <p className="text-navy-400 text-xs mb-4">Infosys Ltd. — 5-year profitability metrics comparison</p>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e0eaff" />
          <PolarAngleAxis dataKey="year" tick={{ fill: '#6173e8', fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 45]} tick={{ fill: '#a4bcfc', fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
          <Radar name="ROE" dataKey="ROE" stroke="#2563eb" fill="#2563eb" fillOpacity={0.15} strokeWidth={2} />
          <Radar name="ROCE" dataKey="ROCE" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.1} strokeWidth={2} />
          <Radar name="Net Margin" dataKey="Net Margin" stroke="#1e3a8a" fill="#1e3a8a" fillOpacity={0.1} strokeWidth={2} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }}
            formatter={(v: any) => `${v.toFixed(2)}%`}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#2563eb]" /><span className="text-xs text-navy-600 font-medium">ROE</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#60a5fa]" /><span className="text-xs text-navy-600 font-medium">ROCE</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1e3a8a]" /><span className="text-xs text-navy-600 font-medium">Net Margin</span></div>
      </div>
    </div>
  );
}
