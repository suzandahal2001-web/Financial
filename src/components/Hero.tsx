import { ArrowDown, TrendingUp, Download } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-navy-50" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 mb-6">
          <TrendingUp size={16} className="text-blue-600" />
          <span className="text-blue-600 text-sm font-medium tracking-[0.25em] uppercase border border-blue-300 bg-blue-50 px-4 py-2 rounded-full">
            Financial Analyst
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-4 tracking-tight">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-navy-500 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-navy-300 text-navy-800 px-8 py-3.5 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={16} /> Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy-400 hover:text-blue-600 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
