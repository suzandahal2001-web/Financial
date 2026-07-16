import { useState } from 'react';
import {
  ArrowLeft, TrendingUp, LineChart as LineChartIcon, Sparkles, Calculator,
  Building2, Trophy, FileText, ShieldCheck, BarChart3,
} from 'lucide-react';
import {
  ratioAnalysisYears, growthRatios, profitabilityRatios, efficiencyRatios, liquidityRatios,
  forecastYears, salesForecast, netProfitForecast, epsForecast, ebitdaForecast,
  intrinsicGrowthYears, roicData, reinvestmentRateData, intrinsicGrowthRateData,
  dcfYears, dcfFCFF, dcfAssumptions, dcfTerminalValue, dcfEquityValue, dcfSensitivity,
  comparableCompanies, compsStats, compsImpliedValuation,
  footballFieldData,
  historicalFSYears, historicalIncomeStatement, historicalBalanceSheet, historicalCashFlow,
  altmanZScoreYears, altmanZScoreData,
} from '../data/infosysEquityData';
import { RatioGrowthChart, RatioProfitabilityChart, RatioEfficiencyChart, RatioLiquidityChart } from './charts/equity/RatioCharts';
import { ForecastSalesChart, ForecastNetProfitChart, ForecastEPSChart, ForecastEBITDAChart } from './charts/equity/ForecastCharts';
import { IntrinsicROICChart, IntrinsicReinvestmentChart, IntrinsicGrowthRateChart } from './charts/equity/IntrinsicGrowthCharts';
import { DCFFCFFChart, DCFSensitivityChart } from './charts/equity/DCFCharts';
import { CompsMultiplesChart, CompsImpliedPriceChart } from './charts/equity/CompsCharts';
import { FootballFieldChart } from './charts/equity/FootballFieldChart';
import { HistoricalRevenueChart, HistoricalBalanceSheetChart, HistoricalCashFlowChart } from './charts/equity/HistoricalFSCharts';
import { AltmanZScoreTrendChart, AltmanZScoreComponentsChart } from './charts/equity/AltmanZScoreCharts';

type TabId = 'ratio' | 'forecast' | 'intrinsic' | 'dcf' | 'comps' | 'football' | 'historical' | 'altman';

const tabs: { id: TabId; label: string; icon: typeof TrendingUp }[] = [
  { id: 'ratio', label: 'Ratio Analysis', icon: BarChart3 },
  { id: 'forecast', label: 'Forecasting', icon: LineChartIcon },
  { id: 'intrinsic', label: 'Intrinsic Growth', icon: Sparkles },
  { id: 'dcf', label: 'DCF', icon: Calculator },
  { id: 'comps', label: 'Comparable Valuation', icon: Building2 },
  { id: 'football', label: 'Football Field', icon: Trophy },
  { id: 'historical', label: 'Historical FS', icon: FileText },
  { id: 'altman', label: 'Altman Z-Score', icon: ShieldCheck },
];

const fmtPct = (v: number | null) => (v === null ? 'N/A' : `${(v * 100).toFixed(2)}%`);
const fmtCr = (v: number) => (v === 0 ? '—' : `₹${Number(v).toLocaleString('en-IN')}`);
const fmtNum = (v: number | null) => (v === null ? 'N/A' : v.toFixed(4));

function DataTable({ headers, rows }: { headers: string[]; rows: (string | number | null)[][] }) {
  return (
    <div className="overflow-x-auto bg-white border border-navy-100 rounded-2xl shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-50 border-b border-navy-100">
            {headers.map((h, i) => (
              <th key={i} className={`px-4 py-3 font-semibold text-navy-700 ${i === 0 ? 'text-left' : 'text-right'}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-navy-50 hover:bg-blue-50/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 ${j === 0 ? 'text-left font-medium text-navy-800' : 'text-right text-navy-600'}`}>
                  {cell === null ? 'N/A' : typeof cell === 'number' ? cell.toLocaleString('en-IN', { maximumFractionDigits: 4 }) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: typeof TrendingUp; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
        <Icon size={20} className="text-blue-600" />
      </div>
      <div>
        <h3 className="text-navy-900 font-bold text-lg">{title}</h3>
        <p className="text-navy-400 text-xs">{subtitle}</p>
      </div>
    </div>
  );
}

function RatioSection() {
  const ratioGroups = [
    { title: 'Growth Ratios', data: growthRatios, fmt: fmtPct },
    { title: 'Profitability Ratios', data: profitabilityRatios, fmt: fmtPct },
    { title: 'Efficiency & Return Ratios', data: efficiencyRatios, fmt: fmtNum },
    { title: 'Liquidity & Coverage Ratios', data: liquidityRatios, fmt: fmtNum },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader icon={BarChart3} title="Ratio Analysis" subtitle="10-year financial ratio decomposition from Infosys.xlsx → Ratio Analysis sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RatioGrowthChart />
        <RatioProfitabilityChart />
        <RatioEfficiencyChart />
        <RatioLiquidityChart />
      </div>
      {ratioGroups.map((g) => (
        <div key={g.title}>
          <h4 className="text-navy-800 font-semibold text-sm mb-3">{g.title}</h4>
          <DataTable
            headers={['Metric', ...ratioAnalysisYears]}
            rows={g.data.map((r) => [r.name, ...r.values.map((v) => (v === null ? null : g.fmt(v)))])}
          />
        </div>
      ))}
    </div>
  );
}

function ForecastSection() {
  const forecastItems = [
    { label: 'Sales (₹ Cr)', data: salesForecast, fmt: (v: number) => v.toLocaleString('en-IN') },
    { label: 'Net Profit (₹ Cr)', data: netProfitForecast, fmt: (v: number) => v.toLocaleString('en-IN') },
    { label: 'EPS (₹)', data: epsForecast, fmt: (v: number) => v.toFixed(4) },
    { label: 'EBITDA (₹ Cr)', data: ebitdaForecast, fmt: (v: number) => v.toLocaleString('en-IN') },
  ];
  return (
    <div className="space-y-8">
      <SectionHeader icon={LineChartIcon} title="Forecasting" subtitle="5-year historical + 5-year projected financials from Infosys.xlsx → Forecasting sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ForecastSalesChart />
        <ForecastNetProfitChart />
        <ForecastEPSChart />
        <ForecastEBITDAChart />
      </div>
      {forecastItems.map((item) => (
        <div key={item.label}>
          <h4 className="text-navy-800 font-semibold text-sm mb-3">{item.label}</h4>
          <DataTable
            headers={['Year', ...forecastYears]}
            rows={[forecastYears.map((y) => item.data[forecastYears.indexOf(y)]).map((v) => item.fmt(v))].map((row) => [item.label, ...row])}
          />
        </div>
      ))}
      <DataTable
        headers={['Year', ...forecastYears]}
        rows={[
          ['Sales (₹ Cr)', ...salesForecast.map((v) => v.toLocaleString('en-IN'))],
          ['Net Profit (₹ Cr)', ...netProfitForecast.map((v) => v.toLocaleString('en-IN'))],
          ['EPS (₹)', ...epsForecast.map((v) => v.toFixed(4))],
          ['EBITDA (₹ Cr)', ...ebitdaForecast.map((v) => v.toLocaleString('en-IN'))],
        ]}
      />
    </div>
  );
}

function IntrinsicGrowthSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Sparkles} title="Intrinsic Growth" subtitle="ROIC × Reinvestment Rate = Fundamental growth rate, from Infosys.xlsx → Intrinsic Growth sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IntrinsicROICChart />
        <IntrinsicReinvestmentChart />
        <IntrinsicGrowthRateChart />
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-4">Intrinsic Growth Rate Summary</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <p className="text-emerald-700 text-xs font-medium uppercase">4-Year Average</p>
              <p className="text-2xl font-bold text-emerald-900">{(intrinsicGrowthRateData.fourYearAverage * 100).toFixed(2)}%</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-blue-700 text-xs font-medium uppercase">4-Year Median</p>
              <p className="text-2xl font-bold text-blue-900">{(intrinsicGrowthRateData.fourYearMedian * 100).toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>
      <DataTable
        headers={['Year', ...intrinsicGrowthYears]}
        rows={[
          ['ROIC', ...roicData.roic.map((v) => fmtPct(v))],
          ['Reinvestment Rate', ...intrinsicGrowthRateData.reinvestmentRate.map((v) => fmtPct(v))],
          ['Intrinsic Growth', ...intrinsicGrowthRateData.intrinsicGrowth.map((v) => fmtPct(v))],
        ]}
      />
    </div>
  );
}

function DCFSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Calculator} title="Discounted Cash Flow" subtitle="FCFF build-up, terminal value and sensitivity analysis from Infosys.xlsx → DCF sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DCFFCFFChart />
        <DCFSensitivityChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 text-sm">Key Assumptions</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-navy-500">Expected Growth</span><span className="font-semibold text-navy-800">{(dcfAssumptions.expectedGrowth * 100).toFixed(1)}%</span></div>
            <div className="flex justify-between"><span className="text-navy-500">Terminal Growth</span><span className="font-semibold text-navy-800">{(dcfAssumptions.terminalGrowth * 100).toFixed(1)}%</span></div>
            <div className="flex justify-between"><span className="text-navy-500">WACC</span><span className="font-semibold text-navy-800">{(dcfAssumptions.wacc * 100).toFixed(2)}%</span></div>
          </div>
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 text-sm">Terminal Value</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-navy-500">FCFF (n+1)</span><span className="font-semibold text-navy-800">₹{dcfTerminalValue.fcffN1.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between"><span className="text-navy-500">WACC</span><span className="font-semibold text-navy-800">{(dcfTerminalValue.wacc * 100).toFixed(2)}%</span></div>
            <div className="flex justify-between"><span className="text-navy-500">Terminal Value</span><span className="font-semibold text-navy-800">₹{dcfTerminalValue.terminalValue.toLocaleString('en-IN')}</span></div>
          </div>
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 text-sm">Equity Value</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-navy-500">Value of Equity</span><span className="font-semibold text-navy-800">₹{dcfEquityValue.valueOfEquity.toLocaleString('en-IN')} Cr</span></div>
            <div className="flex justify-between"><span className="text-navy-500">Per Share</span><span className="font-semibold text-emerald-700">₹{dcfEquityValue.equityValuePerShare.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between"><span className="text-navy-500">Current Price</span><span className="font-semibold text-navy-800">₹{dcfEquityValue.sharePrice.toLocaleString('en-IN')}</span></div>
          </div>
        </div>
      </div>
      <DataTable
        headers={['Year', ...dcfYears]}
        rows={[
          ['EBIT', ...dcfFCFF.ebit.map((v) => Math.round(v))],
          ['EBIT(1-T)', ...dcfFCFF.ebitAfterTax.map((v) => Math.round(v))],
          ['Reinvestment Rate', ...dcfFCFF.reinvestmentRate.map((v) => fmtPct(v))],
          ['FCFF', ...dcfFCFF.fcff.map((v) => Math.round(v))],
          ['Discount Factor', ...dcfFCFF.discountFactor.map((v) => v?.toFixed(4) ?? 'N/A')],
          ['PV of FCFF', ...dcfFCFF.pvOfFCFF.map((v) => v ? Math.round(v) : null)],
        ]}
      />
    </div>
  );
}

function CompsSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Building2} title="Comparable Valuation" subtitle="10-peer IT sector comparison and implied valuation from Infosys.xlsx → Comps Val sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompsMultiplesChart />
        <CompsImpliedPriceChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(compsImpliedValuation).map(([key, val]) => (
          <div key={key} className="bg-white border border-navy-100 rounded-2xl p-5 shadow-sm">
            <p className="text-navy-500 text-xs font-medium uppercase mb-2">{key.toUpperCase()} Implied</p>
            <p className="text-2xl font-bold text-navy-900">₹{val.impliedPerShare.toLocaleString('en-IN')}</p>
            <p className={`text-xs font-medium mt-1 ${val.status === 'Undervalued' ? 'text-emerald-600' : 'text-red-600'}`}>{val.status}</p>
          </div>
        ))}
      </div>
      <DataTable
        headers={['Company', 'Share Price', 'Shares (Cr)', 'Equity Value (₹ Cr)', 'Net Debt', 'EV (₹ Cr)', 'Revenue (₹ Cr)', 'EBITDA (₹ Cr)', 'EV/Rev', 'EV/EBITDA', 'P/E']}
        rows={comparableCompanies.map((c) => [
          c.company, c.sharePrice, c.sharesOutstanding, Math.round(c.equityValue), Math.round(c.netDebt),
          Math.round(c.enterpriseValue), Math.round(c.revenue), Math.round(c.ebitda),
          c.evRevenue.toFixed(2), c.evEbitda.toFixed(2), c.pe.toFixed(2),
        ])}
      />
      <div>
        <h4 className="text-navy-800 font-semibold text-sm mb-3">Multiples Statistics</h4>
        <DataTable
          headers={['Statistic', 'EV/Revenue', 'EV/EBITDA', 'P/E']}
          rows={Object.entries(compsStats).map(([key, val]) => [
            key.charAt(0).toUpperCase() + key.slice(1),
            val.evRevenue.toFixed(2), val.evEbitda.toFixed(2), val.pe.toFixed(2),
          ])}
        />
      </div>
    </div>
  );
}

function FootballSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={Trophy} title="Football Field" subtitle="Valuation ranges across all methodologies from Infosys.xlsx → Football Field sheet" />
      <FootballFieldChart />
      <DataTable
        headers={['Methodology', 'Low (₹)', 'High (₹)']}
        rows={footballFieldData.map((d) => [d.method, d.low.toFixed(2), d.high.toFixed(2)])}
      />
    </div>
  );
}

function HistoricalFSSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={FileText} title="Historical Financial Statements" subtitle="10-year income statement, balance sheet and cash flow from Infosys.xlsx → Historical FS sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HistoricalRevenueChart />
        <HistoricalBalanceSheetChart />
        <HistoricalCashFlowChart />
      </div>
      <div>
        <h4 className="text-navy-800 font-semibold text-sm mb-3">Income Statement (₹ Cr)</h4>
        <DataTable
          headers={['Item', ...historicalFSYears]}
          rows={[
            ['Sales', ...historicalIncomeStatement.sales.map((v) => Math.round(v))],
            ['Gross Profit', ...historicalIncomeStatement.grossProfit.map((v) => Math.round(v))],
            ['EBITDA', ...historicalIncomeStatement.ebitda.map((v) => v ? Math.round(v) : null)],
            ['Interest', ...historicalIncomeStatement.interest.map((v) => Math.round(v))],
            ['Earning Before Tax', ...historicalIncomeStatement.earningBeforeTax.map((v) => Math.round(v))],
            ['Tax', ...historicalIncomeStatement.tax.map((v) => Math.round(v))],
            ['Net Profit', ...historicalIncomeStatement.netProfit.map((v) => Math.round(v))],
          ]}
        />
      </div>
      <div>
        <h4 className="text-navy-800 font-semibold text-sm mb-3">Balance Sheet (₹ Cr)</h4>
        <DataTable
          headers={['Item', ...historicalFSYears.slice(0, 10)]}
          rows={[
            ['Equity Share Capital', ...historicalBalanceSheet.equityShareCapital.map((v) => Math.round(v))],
            ['Reserves', ...historicalBalanceSheet.reserves.map((v) => Math.round(v))],
            ['Borrowings', ...historicalBalanceSheet.borrowings.map((v) => Math.round(v))],
            ['Total Liabilities', ...historicalBalanceSheet.totalLiabilities.map((v) => Math.round(v))],
            ['Fixed Assets (Net Block)', ...historicalBalanceSheet.fixedAssetsNetBlock.map((v) => Math.round(v))],
            ['Receivables', ...historicalBalanceSheet.receivables.map((v) => Math.round(v))],
            ['Cash & Bank', ...historicalBalanceSheet.cashAndBank.map((v) => Math.round(v))],
            ['Total Assets', ...historicalBalanceSheet.totalAssets.map((v) => Math.round(v))],
          ]}
        />
      </div>
      <div>
        <h4 className="text-navy-800 font-semibold text-sm mb-3">Cash Flow Statement (₹ Cr)</h4>
        <DataTable
          headers={['Item', ...historicalFSYears.slice(0, 10)]}
          rows={[
            ['Operating Activity', ...historicalCashFlow.operatingActivity.map((v) => Math.round(v))],
            ['Investing Activity', ...historicalCashFlow.investingActivity.map((v) => Math.round(v))],
            ['Financing Activity', ...historicalCashFlow.financingActivity.map((v) => Math.round(v))],
            ['Net Cash Flow', ...historicalCashFlow.netCashFlow.map((v) => Math.round(v))],
          ]}
        />
      </div>
    </div>
  );
}

function AltmanSection() {
  return (
    <div className="space-y-8">
      <SectionHeader icon={ShieldCheck} title="Altman Z-Score" subtitle="Bankruptcy prediction model from Infosys.xlsx → Altman Z Score sheet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AltmanZScoreTrendChart />
        <AltmanZScoreComponentsChart />
      </div>
      <DataTable
        headers={['Year', ...altmanZScoreYears]}
        rows={[
          ['Working Capital (₹ Cr)', ...altmanZScoreData.workingCapital.map((v) => Math.round(v))],
          ['Total Assets (₹ Cr)', ...altmanZScoreData.totalAssets.map((v) => Math.round(v))],
          ['WC/TA (A)', ...altmanZScoreData.workingCapitalTA.map((v) => v.toFixed(4))],
          ['EBIT/TA (C)', ...altmanZScoreData.ebitTA.map((v) => v.toFixed(4))],
          ['Mkt Cap/LTL (D)', ...altmanZScoreData.marketCapLTL.map((v) => v === null ? 'N/A' : v.toFixed(2))],
          ['Sales/TA (E)', ...altmanZScoreData.salesTA.map((v) => v.toFixed(4))],
          ['Final Z-Score', ...altmanZScoreData.finalScore.map((v) => v.toFixed(2))],
          ['Stability', ...altmanZScoreData.financialStability],
        ]}
      />
    </div>
  );
}

export default function InfosysEquityDetail({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<TabId>('ratio');

  return (
    <div className="animate-fade-in-up">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-navy-500 hover:text-blue-600 transition-colors text-sm font-medium mb-6"
      >
        <ArrowLeft size={16} /> Back to All Projects
      </button>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-400/10 flex items-center justify-center shrink-0 border border-blue-400/20">
              <TrendingUp size={30} className="text-blue-300" />
            </div>
            <div>
              <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">Equity Research Report</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-1">Infosys Equity Research & Valuation</h3>
              <p className="text-blue-100 leading-relaxed text-base max-w-3xl">
                A comprehensive equity research report on Infosys Ltd. (INFY) covering ratio analysis, financial forecasting,
                intrinsic growth, DCF valuation, comparable company analysis, football field synthesis, historical financials,
                and Altman Z-Score bankruptcy prediction — all built from a single Excel workbook with 8 interconnected sheets.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-blue-400/10 rounded-2xl p-5">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">DCF Equity Value/Share</p>
              <p className="text-2xl font-bold text-white">₹{dcfEquityValue.equityValuePerShare.toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-white/5 border border-blue-400/10 rounded-2xl p-5">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">Current Share Price</p>
              <p className="text-2xl font-bold text-white">₹{dcfEquityValue.sharePrice.toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-white/5 border border-blue-400/10 rounded-2xl p-5">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">WACC</p>
              <p className="text-2xl font-bold text-white">{(dcfAssumptions.wacc * 100).toFixed(2)}%</p>
            </div>
            <div className="bg-white/5 border border-blue-400/10 rounded-2xl p-5">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">Latest Z-Score</p>
              <p className="text-2xl font-bold text-emerald-400">{altmanZScoreData.finalScore[altmanZScoreData.finalScore.length - 1].toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-white border border-navy-100 rounded-2xl px-6 md:px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">Infosys Ltd. (INFY)</span>
        </div>
        <div className="h-4 w-px bg-navy-200" />
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">IT Services & Consulting</span>
        </div>
        <div className="h-4 w-px bg-navy-200" />
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">FY16–FY30F (10Y Historical + 5Y Forecast)</span>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="mt-8 sticky top-0 z-20 bg-navy-50/90 backdrop-blur-sm py-3 -mx-4 px-4 rounded-2xl">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-navy-600 border border-navy-100 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {activeTab === 'ratio' && <RatioSection />}
        {activeTab === 'forecast' && <ForecastSection />}
        {activeTab === 'intrinsic' && <IntrinsicGrowthSection />}
        {activeTab === 'dcf' && <DCFSection />}
        {activeTab === 'comps' && <CompsSection />}
        {activeTab === 'football' && <FootballSection />}
        {activeTab === 'historical' && <HistoricalFSSection />}
        {activeTab === 'altman' && <AltmanSection />}
      </div>
    </div>
  );
}
