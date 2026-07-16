import {
  BarChart, Bar, Line, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  intrinsicGrowthYears, roicData, reinvestmentRateData, intrinsicGrowthRateData,
} from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

const roicChartData = intrinsicGrowthYears.map((year, i) => ({
  year,
  roic: roicData.roic[i],
  ebit: roicData.ebit[i],
  investedCapital: roicData.investedCapital[i],
}));

const reinvestmentData = intrinsicGrowthYears.map((year, i) => ({
  year,
  reinvestmentRate: reinvestmentRateData.reinvestmentRate[i],
  reinvestment: reinvestmentRateData.reinvestment[i],
}));

const growthRateData = intrinsicGrowthYears.map((year, i) => ({
  year,
  intrinsicGrowth: intrinsicGrowthRateData.intrinsicGrowth[i],
}));

export function IntrinsicROICChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Return on Invested Capital (FY21–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">ROIC, EBIT and Invested Capital over 5 years</p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={roicChartData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis yAxisId="left" stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} width={45} />
          <YAxis yAxisId="right" orientation="right" stroke="#059669" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any, n: any) => n === 'roic' ? `${(v * 100).toFixed(2)}%` : `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar yAxisId="right" dataKey="ebit" name="EBIT (₹ Cr)" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          <Bar yAxisId="right" dataKey="investedCapital" name="Invested Capital (₹ Cr)" fill="#93c5fd" radius={[3, 3, 0, 0]} />
          <Line yAxisId="left" type="monotone" dataKey="roic" name="ROIC %" stroke="#1e3a8a" strokeWidth={2.5} dot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IntrinsicReinvestmentChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Reinvestment Rate (FY21–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">Reinvestment amount and rate over 5 years</p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={reinvestmentData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis yAxisId="left" stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} width={45} />
          <YAxis yAxisId="right" orientation="right" stroke="#059669" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any, n: any) => n === 'reinvestmentRate' ? (v === null ? 'N/A' : `${(v * 100).toFixed(2)}%`) : `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar yAxisId="right" dataKey="reinvestment" name="Reinvestment (₹ Cr)" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          <Line yAxisId="left" type="monotone" dataKey="reinvestmentRate" name="Reinvestment Rate %" stroke="#059669" strokeWidth={2.5} dot={{ r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IntrinsicGrowthRateChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Intrinsic Growth Rate (FY21–FY25)</h4>
      <p className="text-navy-400 text-xs mb-4">Fundamental growth rate = Reinvestment Rate × ROIC</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={growthRateData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} width={45} />
          <Tooltip formatter={(v: any) => v === null ? 'N/A' : `${(v * 100).toFixed(2)}%`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="intrinsicGrowth" name="Intrinsic Growth %" fill="#059669" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
