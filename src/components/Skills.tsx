import { TrendingUp, Calculator, BarChart3, Award } from 'lucide-react';
import { competencies } from '../data';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Calculator,
  BarChart3,
  Award,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <BarChart3 size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">Skills & Expertise</p>
            <h2 className="text-3xl font-bold text-navy-900">Core Competencies</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((cat) => {
            const Icon = iconMap[cat.icon] || Award;
            return (
              <div
                key={cat.category}
                className="glass-card p-8 glass-card-hover group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300 border border-navy-100">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-navy-600 bg-navy-50 border border-navy-100 px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
