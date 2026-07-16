import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { comparableCompanies, compsImpliedValuation } from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

export function CompsMultiplesChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Peer Valuation Multiples Comparison</h4>
      <p className="text-navy-400 text-xs mb-4">EV/Revenue, EV/EBITDA and P/E across 10 IT sector peers</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={comparableCompanies} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="company" stroke="#6173e8" fontSize={10} tickLine={false} angle={-30} textAnchor="end" height={70} />
          <YAxis stroke="#6173e8" fontSize={11} width={45} />
          <Tooltip formatter={(v: any) => v.toFixed(2)} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="evRevenue" name="EV/Revenue" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          <Bar dataKey="evEbitda" name="EV/EBITDA" fill="#2563eb" radius={[3, 3, 0, 0]} />
          <Bar dataKey="pe" name="P/E" fill="#059669" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CompsImpliedPriceChart() {
  const data = [
    { method: 'EV/Revenue', impliedPrice: compsImpliedValuation.evRevenue.impliedPerShare },
    { method: 'EV/EBITDA', impliedPrice: compsImpliedValuation.evEbitda.impliedPerShare },
    { method: 'P/E', impliedPrice: compsImpliedValuation.pe.impliedPerShare },
    { method: 'Current Price', impliedPrice: 1638.7 },
  ];
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Implied Share Price by Valuation Method</h4>
      <p className="text-navy-400 text-xs mb-4">Implied per-share value from each comparable valuation multiple vs. current price</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="method" stroke="#6173e8" fontSize={11} tickLine={false} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `₹${v.toFixed(0)}`} width={55} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toFixed(2)}`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="impliedPrice" name="Implied Price (₹)" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
