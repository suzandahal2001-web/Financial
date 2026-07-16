import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  ratioAnalysisYears, growthRatios, profitabilityRatios, efficiencyRatios, liquidityRatios,
} from '../../../data/infosysEquityData';

const fmtPct = (v: number | null) => (v === null ? 'N/A' : `${(v * 100).toFixed(2)}%`);

function buildData(ratios: typeof growthRatios) {
  return ratioAnalysisYears.map((year, i) => {
    const row: Record<string, string | number | null> = { year };
    ratios.forEach((r) => { row[r.name] = r.values[i]; });
    return row;
  });
}

export function RatioGrowthChart() {
  const data = buildData(growthRatios);
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Growth Ratios (FY16–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">Year-over-year growth rates for key financial metrics</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} width={45} />
          <Tooltip formatter={(v: any) => fmtPct(v)} contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {growthRatios.map((r, i) => (
            <Bar key={r.name} dataKey={r.name} fill={['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'][i]} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RatioProfitabilityChart() {
  const data = buildData(profitabilityRatios);
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Profitability Margins (FY16–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">Gross, EBITDA, EBIT, EBT and Net Profit margins as % of sales</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} width={45} />
          <Tooltip formatter={(v: any) => fmtPct(v)} contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {profitabilityRatios.map((r, i) => (
            <Bar key={r.name} dataKey={r.name} fill={['#065f46', '#059669', '#10b981', '#34d399', '#6ee7b7'][i]} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RatioEfficiencyChart() {
  const data = buildData(efficiencyRatios);
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Efficiency & Return Ratios (FY16–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">ROCE, ROE and asset turnover ratios</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => v.toFixed(1)} width={45} />
          <Tooltip formatter={(v: any) => (v === null ? 'N/A' : v.toFixed(4))} contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {efficiencyRatios.map((r, i) => (
            <Bar key={r.name} dataKey={r.name} fill={['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'][i]} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RatioLiquidityChart() {
  const data = buildData(liquidityRatios);
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Liquidity & Coverage Ratios (FY16–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">Interest coverage, debtor days, payable days and cash conversion cycle</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} width={45} />
          <Tooltip formatter={(v: any) => (v === null ? 'N/A' : v.toFixed(2))} contentStyle={{ backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' }} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {liquidityRatios.map((r, i) => (
            <Bar key={r.name} dataKey={r.name} fill={['#065f46', '#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'][i]} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
