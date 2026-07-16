import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-navy-50 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="section-label mb-2">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Let's Connect</h2>
        <p className="text-navy-500 text-lg mb-12 max-w-2xl mx-auto">
          Open to opportunities in financial analysis, equity research, and valuation. Feel free to reach out.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="glass-card p-6 flex items-center gap-4 glass-card-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors border border-blue-200">
              <Mail size={22} className="text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-navy-400 text-xs">Email</p>
              <p className="text-navy-900 text-sm font-medium">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="glass-card p-6 flex items-center gap-4 glass-card-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors border border-blue-200">
              <Phone size={22} className="text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-navy-400 text-xs">Phone</p>
              <p className="text-navy-900 text-sm font-medium">{profile.phone}</p>
            </div>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 flex items-center gap-4 glass-card-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors border border-blue-200">
              <Linkedin size={22} className="text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-navy-400 text-xs">LinkedIn</p>
              <p className="text-navy-900 text-sm font-medium">{profile.linkedin}</p>
            </div>
          </a>

          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
              <MapPin size={22} className="text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-navy-400 text-xs">Location</p>
              <p className="text-navy-900 text-sm font-medium">{profile.location}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
