import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <Briefcase size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">Career Timeline</p>
            <h2 className="text-3xl font-bold text-navy-900">Professional Experience</h2>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-navy-200 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-16 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                <div className="glass-card p-6 md:p-8 glass-card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900">{exp.role}</h3>
                      <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <p className="text-sm text-navy-500 font-medium">{exp.period}</p>
                      <p className="text-sm text-navy-400 flex items-center gap-1 mt-1">
                        <MapPin size={12} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mt-4">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-navy-600 leading-relaxed">
                        <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
