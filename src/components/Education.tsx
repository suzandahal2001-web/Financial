import { GraduationCap, Languages } from 'lucide-react';
import { education, languages } from '../data';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <GraduationCap size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">Academic Background</p>
            <h2 className="text-3xl font-bold text-navy-900">Education</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {education.map((e) => (
            <div key={e.degree} className="glass-card p-8 glass-card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 border border-navy-100">
                  <GraduationCap size={22} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy-900">{e.degree}</h3>
                  <p className="text-navy-500 text-sm mt-1">{e.institution}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-sm text-navy-400">{e.period}</span>
                    <span className="text-sm text-blue-600 font-medium">{e.grade}</span>
                  </div>
                  <p className="text-xs text-navy-400 mt-3 leading-relaxed">
                    Key coursework: {e.coursework}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h3 className="text-xl font-semibold text-navy-900 mb-6 flex items-center gap-2">
          <Languages size={20} className="text-blue-600" />
          Languages
        </h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((l) => (
            <div key={l.name} className="glass-card px-6 py-4 flex items-center gap-3">
              <span className="text-navy-900 font-medium">{l.name}</span>
              <span className="text-blue-600 text-sm">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
