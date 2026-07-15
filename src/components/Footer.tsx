import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';
import { profile } from '../data';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Name & tagline */}
          <div>
            <h3 className="text-xl font-bold mb-3">{profile.name}</h3>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">{profile.tagline}</p>
            <div className="flex items-center gap-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-wide mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-navy-300 text-sm hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-navy-200 uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-navy-300 text-sm hover:text-blue-400 transition-colors">
                <Mail size={14} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-navy-300 text-sm hover:text-blue-400 transition-colors">
                <Phone size={14} /> {profile.phone}
              </a>
              <div className="flex items-center gap-2 text-navy-300 text-sm">
                <MapPin size={14} /> {profile.location}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-xs">
            {profile.name} — Financial Analyst Portfolio. All rights reserved.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-navy-300 hover:text-blue-400 transition-colors text-xs"
          >
            <ArrowUp size={14} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
