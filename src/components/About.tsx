import { User, Target, CheckCircle2, Heart } from 'lucide-react';
import { profile } from '../data';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <User size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">About Me</p>
            <h2 className="text-3xl font-bold text-navy-900">Professional Summary</h2>
          </div>
        </div>

        {/* Summary card */}
        <div className="glass-card p-8 md:p-12 mb-8">
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed font-light">
            {profile.summary}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-navy-100">
            <div>
              <p className="text-3xl font-bold blue-gradient">4+</p>
              <p className="text-sm text-navy-400 mt-1">Professional Roles</p>
            </div>
            <div>
              <p className="text-3xl font-bold blue-gradient">4</p>
              <p className="text-sm text-navy-400 mt-1">Financial Models Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold blue-gradient">5</p>
              <p className="text-sm text-navy-400 mt-1">Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold blue-gradient">9.3</p>
              <p className="text-sm text-navy-400 mt-1">MBA CGPA</p>
            </div>
          </div>
        </div>

        {/* Objective, Strengths, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Objective */}
          <div className="glass-card p-8 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-200">
              <Target size={22} className="text-blue-600" />
            </div>
            <h3 className="text-navy-900 font-semibold mb-3">Career Objective</h3>
            <p className="text-navy-500 text-sm leading-relaxed">{profile.objective}</p>
          </div>

          {/* Strengths */}
          <div className="glass-card p-8 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-200">
              <CheckCircle2 size={22} className="text-blue-600" />
            </div>
            <h3 className="text-navy-900 font-semibold mb-3">Key Strengths</h3>
            <ul className="space-y-2">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-500 leading-relaxed">
                  <span className="text-blue-500 mt-1 shrink-0">▸</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div className="glass-card p-8 glass-card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-200">
              <Heart size={22} className="text-blue-600" />
            </div>
            <h3 className="text-navy-900 font-semibold mb-3">Professional Values</h3>
            <ul className="space-y-2">
              {profile.values.map((v, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-500 leading-relaxed">
                  <span className="text-blue-500 mt-1 shrink-0">▸</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
