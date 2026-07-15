import {
  Award, Landmark, GraduationCap, Monitor, Sparkles, Brain,
} from 'lucide-react';
import { certifications } from '../data';

const certIcons: Record<string, React.ElementType> = {
  Landmark,
  GraduationCap,
  Monitor,
  Sparkles,
  Brain,
  Award,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-navy-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
            <Award size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="section-label">Professional Development</p>
            <h2 className="text-3xl font-bold text-navy-900">Certifications</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c) => {
            const Icon = certIcons[c.icon] || Award;
            return (
              <div
                key={c.name}
                className="glass-card p-6 flex items-start gap-4 glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200 group-hover:bg-blue-100 transition-colors">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-navy-900 font-medium text-sm leading-snug">{c.name}</p>
                  <p className="text-navy-400 text-xs mt-1.5">{c.issuer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
