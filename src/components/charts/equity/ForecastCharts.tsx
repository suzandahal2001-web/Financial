import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  forecastYears, salesForecast, salesForecastGrowth,
  netProfitForecast, netProfitForecastGrowth,
  epsForecast, epsForecastGrowth,
  ebitdaForecast, ebitdaForecastGrowth,
} from '../../../data/infosysEquityData';

const salesData = forecastYears.map((year, i) => ({
  year,
  sales: salesForecast[i],
  growth: salesForecastGrowth[i],
}));

const profitData = forecastYears.map((year, i) => ({
  year,
  netProfit: netProfitForecast[i],
  growth: netProfitForecastGrowth[i],
}));

const epsData = forecastYears.map((year, i) => ({
  year,
  eps: epsForecast[i],
  growth: epsForecastGrowth[i],
}));

const ebitdaData = forecastYears.map((year, i) => ({
  year,
  ebitda: ebitdaForecast[i],
  growth: ebitdaForecastGrowth[i],
}));

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

export function ForecastSalesChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Sales Forecast (FY16–FY30F)</h4>
      <p className="text-navy-400 text-xs mb-4">Historical and projected revenue in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any, n: any) => n === 'growth' ? (v === null ? 'N/A' : `${(v * 100).toFixed(2)}%`) : `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Line type="monotone" dataKey="sales" name="Sales (₹ Cr)" stroke="#1e3a8a" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForecastNetProfitChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Net Profit Forecast (FY16–FY30F)</h4>
      <p className="text-navy-400 text-xs mb-4">Historical and projected net profit in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={profitData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Line type="monotone" dataKey="netProfit" name="Net Profit (₹ Cr)" stroke="#059669" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForecastEPSChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">EPS Forecast (FY16–FY30F)</h4>
      <p className="text-navy-400 text-xs mb-4">Historical and projected Earnings per Share</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={epsData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => v.toFixed(2)} width={45} />
          <Tooltip formatter={(v: any) => v?.toFixed(4)} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Line type="monotone" dataKey="eps" name="EPS (₹)" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForecastEBITDAChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">EBITDA Forecast (FY16–FY30F)</h4>
      <p className="text-navy-400 text-xs mb-4">Historical and projected EBITDA in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ebitdaData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Line type="monotone" dataKey="ebitda" name="EBITDA (₹ Cr)" stroke="#1e3a8a" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
