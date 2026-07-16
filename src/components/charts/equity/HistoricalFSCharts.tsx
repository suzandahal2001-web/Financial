import {
  LineChart, Line, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  historicalFSYears, historicalIncomeStatement, historicalBalanceSheet, historicalCashFlow,
} from '../../../data/infosysEquityData';

const tooltipStyle = { backgroundColor: '#fff', border: '1px solid #dbeafe', borderRadius: '8px', fontSize: '13px' };

const revenueData = historicalFSYears.map((year, i) => ({
  year,
  sales: historicalIncomeStatement.sales[i],
  ebitda: historicalIncomeStatement.ebitda[i],
  netProfit: historicalIncomeStatement.netProfit[i],
}));

const bsData = historicalFSYears.slice(0, 10).map((year, i) => ({
  year,
  totalAssets: historicalBalanceSheet.totalAssets[i],
  totalLiabilities: historicalBalanceSheet.totalLiabilities[i],
  cash: historicalBalanceSheet.cashAndBank[i],
  borrowings: historicalBalanceSheet.borrowings[i],
}));

const cfData = historicalFSYears.slice(0, 10).map((year, i) => ({
  year,
  operating: historicalCashFlow.operatingActivity[i],
  investing: historicalCashFlow.investingActivity[i],
  financing: historicalCashFlow.financingActivity[i],
}));

export function HistoricalRevenueChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Revenue, EBITDA & Net Profit Trend</h4>
      <p className="text-navy-400 text-xs mb-4">Historical P&L key figures in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any) => v === 0 ? 'N/A' : `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Line type="monotone" dataKey="sales" name="Sales" stroke="#1e3a8a" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="ebitda" name="EBITDA" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="netProfit" name="Net Profit" stroke="#059669" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HistoricalBalanceSheetChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Balance Sheet Key Items</h4>
      <p className="text-navy-400 text-xs mb-4">Total assets, liabilities, cash and borrowings in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={bsData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="totalAssets" name="Total Assets" fill="#bfdbfe" radius={[3, 3, 0, 0]} />
          <Bar dataKey="cash" name="Cash & Bank" fill="#60a5fa" radius={[3, 3, 0, 0]} />
          <Bar dataKey="borrowings" name="Borrowings" fill="#1e3a8a" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HistoricalCashFlowChart() {
  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
      <h4 className="text-navy-900 font-semibold mb-1">Cash Flow Statement</h4>
      <p className="text-navy-400 text-xs mb-4">Operating, investing and financing cash flows in ₹ Crore</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={cfData} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0eaff" />
          <XAxis dataKey="year" stroke="#6173e8" fontSize={10} tickLine={false} angle={-25} textAnchor="end" height={50} />
          <YAxis stroke="#6173e8" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} width={45} />
          <Tooltip formatter={(v: any) => `₹${Number(v).toLocaleString()} Cr`} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: '11px' }} />
          <Bar dataKey="operating" name="Operating" fill="#059669" radius={[3, 3, 0, 0]} />
          <Bar dataKey="investing" name="Investing" fill="#f59e0b" radius={[3, 3, 0, 0]} />
          <Bar dataKey="financing" name="Financing" fill="#dc2626" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
