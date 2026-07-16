import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { dcfYears, dcfFCFF, dcfSensitivity } from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

const fcffData = dcfYears.map((year, i) => ({
  year,
  ebit: dcfFCFF.ebit[i],
  ebitAfterTax: dcfFCFF.ebitAfterTax[i],
  fcff: dcfFCFF.fcff[i],
  pvOfFCFF: dcfFCFF.pvOfFCFF[i],
}));

export function DCFFCFFChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">DCF — FCFF Build-up (FY25–FY30F)</h4>
      <p className="text-navy-400 text-xs mb-4">EBIT, EBIT(1-T), FCFF and PV of FCFF in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={fcffData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={50} />
          <Tooltip formatter={(v: any) => v === null ? 'N/A' : `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="ebit" name="EBIT" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          <Bar dataKey="ebitAfterTax" name="EBIT(1-T)" fill="#60a5fa" radius={[3, 3, 0, 0]} />
          <Bar dataKey="fcff" name="FCFF" fill="#2563eb" radius={[3, 3, 0, 0]} />
          <Bar dataKey="pvOfFCFF" name="PV of FCFF" fill="#1e3a8a" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DCFSensitivityChart() {
  const data = dcfSensitivity.waccValues.map((wacc: number, i: number) => {
    const row: Record<string, number> = { wacc: `${(wacc * 100).toFixed(1)}%` };
    dcfSensitivity.tgValues.forEach((tg: number, j: number) => {
      row[`TG ${(tg * 100).toFixed(1)}%`] = dcfSensitivity.matrix[i][j];
    });
    return row;
  });
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">DCF Sensitivity Analysis</h4>
      <p className="text-navy-400 text-xs mb-4">Implied share price (₹) under varying WACC and terminal growth rates</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="wacc" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `₹${v.toFixed(0)}`} width={55} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toFixed(0)}`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          {dcfSensitivity.tgValues.map((tg: number, i: number) => (
            <Bar key={tg} dataKey={`TG ${(tg * 100).toFixed(1)}%`} fill={['#bfdbfe', '#60a5fa', '#2563eb', '#1e3a8a'][i]} radius={[3, 3, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
