import { useState } from 'react';
import {
  FolderKanban, Layers, TrendingUp, Target, DollarSign, BarChart3,
  LineChart as LineChartIcon, Building2, Calendar,
  Lightbulb, CheckCircle2, Wrench, AlertTriangle, ArrowRight,
} from 'lucide-react';
import {
  projectDCF, projectDuPont, projectForecast, projectInfosys,
} from '../data';
import DCFPeerChart from './charts/DCFPeerChart';
import WACCChart from './charts/WACCChart';
import DuPontRevenueChart from './charts/DuPontRevenueChart';
import DuPontBreakdownChart from './charts/DuPontBreakdownChart';
import EPSGrowthChart from './charts/EPSGrowthChart';
import RegressionScatterChart from './charts/RegressionScatterChart';
import PriceTrendChart from './charts/PriceTrendChart';
import RegressionStatsChart from './charts/RegressionStatsChart';
import InfosysRevenueChart from './charts/InfosysRevenueChart';
import InfosysRadarChart from './charts/InfosysRadarChart';
import InfosysValuationChart from './charts/InfosysValuationChart';
import ShareholderChart from './charts/ShareholderChart';

type Project = {
  id: string;
  title: string;
  company: string;
  sector: string;
  period: string;
  overview: string;
  problem: string;
  objective: string;
  methodology: string[];
  kpis: { label: string; value: string; highlight?: boolean }[];
  insights: string[];
  recommendations: string[];
  tools: string[];
  challenges: string;
  outcome: string;
};

const projectList: Project[] = [projectDCF, projectDuPont, projectForecast, projectInfosys];

const projectCharts: Record<string, React.ReactNode> = {
  'dcf-valuation': (
    <>
      <DCFPeerChart />
      <WACCChart />
    </>
  ),
  'dupont-analysis': (
    <>
      <DuPontRevenueChart />
      <DuPontBreakdownChart />
      <EPSGrowthChart />
    </>
  ),
  'regression-forecast': (
    <>
      <RegressionScatterChart />
      <PriceTrendChart />
      <RegressionStatsChart />
    </>
  ),
  'infosys-profile': (
    <>
      <InfosysRevenueChart />
      <InfosysRadarChart />
      <InfosysValuationChart />
      <ShareholderChart />
    </>
  ),
};

function KPICard({ kpi }: { kpi: { label: string; value: string; highlight?: boolean } }) {
  return (
    <div
      className={`rounded-2xl p-5 border transition-all duration-300 ${
        kpi.highlight
          ? 'bg-blue-50 border-blue-200 shadow-sm'
          : 'bg-white/5 border-blue-400/10'
      }`}
    >
      <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-1">{kpi.label}</p>
      <p className={`text-2xl font-bold ${kpi.highlight ? 'text-white' : 'text-blue-100'}`}>{kpi.value}</p>
    </div>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  const icons = [DollarSign, Target, LineChartIcon, Building2];
  const Icon = icons[index];

  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors border border-blue-100">
          <Icon size={24} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600 text-xs font-bold">PROJECT {String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="text-navy-900 font-bold text-lg leading-snug group-hover:text-blue-700 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>
      <p className="text-navy-500 text-sm leading-relaxed mb-4">{project.overview}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-navy-600 bg-navy-50 border border-navy-100 px-3 py-1 rounded-lg flex items-center gap-1">
          <Building2 size={12} /> {project.company}
        </span>
        <span className="text-xs text-navy-600 bg-navy-50 border border-navy-100 px-3 py-1 rounded-lg flex items-center gap-1">
          <Calendar size={12} /> {project.period}
        </span>
      </div>
      <div className="flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:gap-3 transition-all">
        View Case Study <ArrowRight size={16} />
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <div className="animate-fade-in-up">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-navy-500 hover:text-blue-600 transition-colors text-sm font-medium mb-6"
      >
        <ArrowRight size={16} className="rotate-180" /> Back to All Projects
      </button>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-navy-900 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
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
              <Layers size={30} className="text-blue-300" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-blue-100 leading-relaxed text-base max-w-3xl">{project.overview}</p>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.kpis.map((kpi) => (
              <KPICard key={kpi.label} kpi={kpi} />
            ))}
          </div>
        </div>
      </div>

      {/* Company info bar */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-white border border-navy-100 rounded-2xl px-6 md:px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">{project.company}</span>
        </div>
        <div className="h-4 w-px bg-navy-200" />
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">{project.sector}</span>
        </div>
        <div className="h-4 w-px bg-navy-200" />
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-blue-600" />
          <span className="text-navy-700 text-sm font-medium">{project.period}</span>
        </div>
      </div>

      {/* Problem & Objective */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle size={18} className="text-blue-600" /> Business Problem
          </h4>
          <p className="text-navy-600 text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 flex items-center gap-2">
            <Target size={18} className="text-blue-600" /> Objective
          </h4>
          <p className="text-navy-600 text-sm leading-relaxed">{project.objective}</p>
        </div>
      </div>

      {/* Methodology */}
      <div className="mt-6 bg-white border border-navy-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h4 className="text-navy-900 font-semibold mb-4 flex items-center gap-2">
          <Layers size={18} className="text-blue-600" /> Methodology
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.methodology.map((m, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <span className="text-blue-600 text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed pt-0.5">{m}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts section */}
      <div className="mt-12 mb-6 flex items-center gap-2">
        <div className="h-px flex-1 bg-navy-200" />
        <span className="text-navy-500 text-sm font-medium px-4 flex items-center gap-2">
          <LineChartIcon size={16} className="text-blue-600" /> Interactive Dashboard
        </span>
        <div className="h-px flex-1 bg-navy-200" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectCharts[project.id]}
      </div>

      {/* Insights */}
      <div className="mt-8 bg-white border border-navy-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h4 className="text-navy-900 font-semibold mb-4 flex items-center gap-2">
          <Lightbulb size={18} className="text-blue-600" /> Business Insights & Key Findings
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <TrendingUp size={16} className="text-blue-600" />
              </div>
              <p className="text-navy-600 text-sm leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-6 bg-white border border-navy-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h4 className="text-navy-900 font-semibold mb-4 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-blue-600" /> Recommendations
        </h4>
        <div className="space-y-3">
          {project.recommendations.map((rec, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
              <p className="text-navy-600 text-sm leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools, Challenges, Outcome */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 flex items-center gap-2 text-sm">
            <Wrench size={16} className="text-blue-600" /> Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="text-xs text-navy-600 bg-navy-50 border border-navy-100 px-3 py-1.5 rounded-lg">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 flex items-center gap-2 text-sm">
            <AlertTriangle size={16} className="text-blue-600" /> Challenges
          </h4>
          <p className="text-navy-500 text-xs leading-relaxed">{project.challenges}</p>
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-sm">
          <h4 className="text-navy-900 font-semibold mb-3 flex items-center gap-2 text-sm">
            <Target size={16} className="text-blue-600" /> Outcome
          </h4>
          <p className="text-navy-500 text-xs leading-relaxed">{project.outcome}</p>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-navy-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-300/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <FolderKanban size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">Independent Case Studies</p>
            <h2 className="text-3xl font-bold text-navy-900">Project Showcase</h2>
          </div>
        </div>

        <p className="text-navy-500 text-base mb-10 max-w-3xl leading-relaxed">
          Each project is an independent case study built from a single Excel workbook —
          with its own data, methodology, interactive dashboard, and insights. No data is
          shared or merged across projects.
        </p>

        {selected === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onSelect={() => setSelected(i)} />
            ))}
          </div>
        ) : (
          <ProjectDetail project={projectList[selected]} onBack={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}
