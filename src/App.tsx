import React, { useState, useEffect } from 'react'
import {
  Sparkles,
  Terminal,
  Smartphone,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Code2,
  Database,
  Cpu,
  Layers,
  GraduationCap,
  Globe,
  ArrowUpRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Award,
  Zap,
  Target,
  Users,
  Compass,
  BookOpen
} from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact']
      const scrollY = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F2937] overflow-x-clip w-full max-w-full relative selection:bg-[#10B981]/20 selection:text-[#059669]">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5">
        <nav className="px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            {/* Logo */}
            <a className="flex items-center gap-3 group" href="#home">
              <span className="text-2xl sm:text-3xl font-black tracking-tight select-none">
                <span className="bg-gradient-to-r from-[#059669] to-[#10B981] bg-clip-text text-transparent">
                  MG
                </span>
              </span>
              <div className="flex flex-col border-l border-slate-200/80 pl-3">
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-none tracking-tight group-hover:text-[#059669] transition-colors font-display">
                  Manish Gupta
                </span>
                <span className="text-[11px] font-semibold text-[#059669] tracking-tight mt-0.5 leading-none">
                  AI &amp; Full-Stack Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-7 lg:gap-9 list-none m-0 p-0">
              {[
                { name: 'Home', href: '#home', id: 'home' },
                { name: 'About', href: '#about', id: 'about' },
                { name: 'Projects', href: '#projects', id: 'projects' },
                { name: 'Experience', href: '#experience', id: 'experience' },
                { name: 'Skills', href: '#skills', id: 'skills' },
                { name: 'Contact', href: '#contact', id: 'contact' },
              ].map((link) => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.name} className="m-0 p-0 relative">
                    <a
                      className={`text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'text-[#059669]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                      href={link.href}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] block mx-auto mt-1 absolute left-0 right-0 -bottom-2"></span>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/manish_gupta_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl items-center gap-2 shadow-[0_4px_14px_rgba(16,185,129,0.3)] transition-all duration-200 shrink-0"
              >
                <Download size={15} strokeWidth={2.5} />
                <span>Resume</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center gap-1.5 p-2 transition-colors shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 bg-white/95 rounded-2xl shadow-xl px-4 space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-[#059669] py-1.5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="/manish_gupta_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold py-2.5 rounded-xl shadow-sm"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-12 sm:pt-16 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8 pb-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Availability pill */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] text-xs font-semibold tracking-wide mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Uppercase role */}
              <div className="w-full">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#059669] font-mono font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
                  <span className="h-3.5 w-1 bg-[#059669] rounded-full"></span>
                  <span>AI ENGINEER · FULL-STACK DEVELOPER</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 font-display">
                  Building{' '}
                  <span className="bg-gradient-to-r from-[#059669] to-[#10B981] bg-clip-text text-transparent">
                    intelligent products
                  </span>
                  <br className="hidden sm:inline" /> that create
                  <br className="hidden lg:inline" /> real impact.
                </h1>
              </div>

              {/* Supporting Text */}
              <div className="w-full">
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0 font-normal">
                  I build AI-powered applications, intelligent workflows, and full-stack products by combining LLMs, RAG pipelines, agentic AI systems, and modern web technologies.
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-9 w-full">
                <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#E8F5E9]/90 border border-[#C8E6C9] text-[#1B5E20] text-xs sm:text-sm font-semibold shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#2E7D32]" />
                  <span>AI Engineering</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#F3E8FF]/90 border border-[#DDD6FE] text-[#6D28D9] text-xs sm:text-sm font-semibold shadow-xs">
                  <Cpu className="w-4 h-4 text-[#7C3AED]" />
                  <span>LLM &amp; RAG</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#E0F2FE]/90 border border-[#BAE6FD] text-[#0369A1] text-xs sm:text-sm font-semibold shadow-xs">
                  <Code2 className="w-4 h-4 text-[#0284C7]" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#FEF3C7]/90 border border-[#FDE68A] text-[#92400E] text-xs sm:text-sm font-semibold shadow-xs">
                  <Database className="w-4 h-4 text-[#D97706]" />
                  <span>Backend Systems</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto justify-center bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-6 py-4 rounded-xl flex items-center gap-2.5 shadow-[0_4px_14px_rgba(16,185,129,0.3)] transition-all duration-200 group min-h-[48px]"
                >
                  <RocketIcon className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>View My Work</span>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold px-6 py-4 rounded-xl flex items-center gap-2.5 shadow-sm transition-all duration-200 group min-h-[48px]"
                >
                  <Mail className="w-4.5 h-4.5 text-slate-600 group-hover:scale-105 transition-transform" />
                  <span>Let&#39;s Connect</span>
                </a>
              </div>
            </div>

            {/* Right Profile Photo Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 sm:mt-10 lg:mt-0 w-full max-w-full">
              {/* Decorative background grid and glow */}
              <div className="absolute -top-6 -right-2 w-32 h-32 bg-[radial-gradient(#0D9488_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 -z-10 pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#10B981]/15 -z-10 pointer-events-none"></div>

              {/* Photo Box */}
              <div className="w-[260px] sm:w-[330px] lg:w-[370px] h-[330px] sm:h-[410px] rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] relative border-[4px] sm:border-[5px] border-white bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 mx-auto group">
                <img
                  src="/manish-portrait.png"
                  alt="Manish Gupta - AI Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Card 1: Always building */}
              <div className="absolute left-1 sm:-left-8 top-3 sm:top-6 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-100/90 max-w-[175px] sm:max-w-[210px] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xs sm:text-sm leading-tight">Always building</h4>
                    <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">always learning.</p>
                  </div>
                </div>
                <div className="mt-2.5 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#10B981] h-full w-3/4 rounded-full"></div>
                </div>
              </div>

              {/* Floating Card 2: Open to work */}
              <div className="absolute right-1 sm:-right-6 -bottom-5 sm:-bottom-6 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-100/90 max-w-[210px] sm:max-w-[240px] flex items-center gap-3 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 self-start mt-1 animate-pulse"></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm leading-tight">Open to work</h4>
                  <p className="text-slate-500 text-[10px] sm:text-xs leading-tight mt-0.5">
                    Full-time &amp; Engineering Roles
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0 ml-auto">
                  <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-mono font-bold tracking-[0.2em] text-[#059669] uppercase mb-4 shadow-xs">
              <span>WHO I AM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              About Me
            </h2>
          </div>

          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              I&#39;m an <span className="font-bold text-slate-900">AI Engineer and Full-Stack Developer</span> dedicated to turning ideas into intelligent, production-ready software. While AI engineering is my primary discipline, I pair it with deep full-stack execution so I can build and ship entire products rather than isolated experiments.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              My work spans the complete product lifecycle: engineering <span className="font-semibold text-slate-900">LLM applications, RAG pipelines, and agentic workflows</span>, architecting scalable backend services and databases, and designing fast, responsive user interfaces across web and mobile.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              I care about practical product quality. An intelligent feature is only useful if it runs reliably, responds with low latency, and feels straightforward for the person using it.
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1 font-display">
                AI &amp; LLM Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Autonomous agents, RAG architectures, prompt engineering, and production model integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1 font-display">
                Full-Stack Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                High-throughput backend APIs, relational &amp; document databases, and modern Next.js/React frontends.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1 font-display">
                Mobile &amp; Product UX
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Cross-platform React Native mobile applications with published Play Store deployments and clean UI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-mono font-bold tracking-[0.2em] text-[#059669] uppercase mb-4 shadow-xs">
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
            A practical engineering stack for shipping complete AI, web, mobile, and backend products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: AI & LLM Engineering */}
            <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col h-full rounded-[24px] lg:rounded-[2rem] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white w-full border border-slate-200/80">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#10B981] to-[#059669] opacity-90"></div>
              <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase mb-6 relative z-10 text-[#059669] font-display">
                AI &amp; LLM Engineering
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
                {[
                  'Python',
                  'LangChain',
                  'LangGraph',
                  'RAG Systems',
                  'AI Agents',
                  'OpenAI API',
                  'Hugging Face',
                  'PyTorch',
                  'NLP',
                  'Scikit-learn',
                  'Vector Databases',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-[0.85rem] font-medium rounded-full bg-slate-50 text-slate-700 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-slate-200/70 hover:bg-white hover:border-[#10B981]/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Full-Stack Web Systems */}
            <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col h-full rounded-[24px] lg:rounded-[2rem] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white w-full border border-slate-200/80">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#0284C7] to-[#0369A1] opacity-90"></div>
              <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase mb-6 relative z-10 text-[#0284C7] font-display">
                Full-Stack Web Systems
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
                {[
                  'React',
                  'Next.js',
                  'JavaScript',
                  'TypeScript',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'REST APIs',
                  'SQL',
                  'Git & GitHub',
                  'Docker',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-[0.85rem] font-medium rounded-full bg-slate-50 text-slate-700 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-slate-200/70 hover:bg-white hover:border-[#0284C7]/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Mobile & Client Engineering */}
            <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col h-full rounded-[24px] lg:rounded-[2rem] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white w-full border border-slate-200/80">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#F59E0B] to-[#F97316] opacity-90"></div>
              <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase mb-6 relative z-10 text-[#D97706] font-display">
                Mobile &amp; Client Engineering
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
                {[
                  'React Native',
                  'Expo',
                  'Firebase',
                  'Supabase',
                  'Tailwind CSS',
                  'Responsive UI',
                  'API Integration',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-[0.85rem] font-medium rounded-full bg-slate-50 text-slate-700 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-slate-200/70 hover:bg-white hover:border-[#F59E0B]/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="py-20 sm:py-28 px-5 sm:px-8 lg:px-16 max-w-full relative z-10"
        style={{
          background: 'linear-gradient(180deg, #FFFBF0 0%, #FAFAFA 50%, #FFFBF0 100%)',
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-mono font-bold tracking-[0.2em] text-[#EA580C] uppercase mb-4 shadow-xs">
              <span>FEATURED BUILDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              Production-ready applications and software systems built with modern web, mobile, and full-stack technologies.
            </p>
          </div>

          {/* EXACTLY TWO FEATURED PROJECTS IN A BALANCED TWO-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
            {/* Project 1: Campus Ninja */}
            <div className="bg-white rounded-[28px] border border-orange-200/90 shadow-[0_8px_35px_rgba(234,88,12,0.08)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/10 via-orange-500/5 to-transparent rounded-bl-full pointer-events-none"></div>

              <div>
                {/* Header */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF5EB] border border-orange-100 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300 p-3 text-[#EA580C]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                      EDTECH &amp; MOBILE PLATFORM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-[#EA580C] transition-colors font-display">
                      Campus Ninja
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                      Learn. Practice. Build. Succeed.
                    </p>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-100 mb-5 flex items-center justify-center p-2 group-hover:border-orange-200/60 transition-colors">
                  <img
                    src="/campus-ninja.png"
                    alt="Campus Ninja product screenshot"
                    className="w-full h-full object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  An all-in-one B.Tech student platform offering semester notes, previous-year questions, syllabi, learning resources, coding roadmaps, and a companion mobile experience.
                </p>

                {/* Key Badges */}
                <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-3.5 mb-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Smartphone className="w-4.5 h-4.5 text-[#EA580C] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider block leading-tight truncate">
                        ANDROID APP
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 block truncate">
                        Available on Play Store
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Globe className="w-4.5 h-4.5 text-[#EA580C] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider block leading-tight truncate">
                        LIVE PRODUCT
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 block truncate">
                        Actively maintained
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700 hover:border-orange-200 hover:bg-orange-50/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                <a
                  href="https://campusninja.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors py-1 group/btn"
                >
                  <span>LIVE PRODUCT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.campusninja.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors py-1 group/btn"
                >
                  <span>PLAY STORE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <a
                  href="https://campusninja.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors py-1 group/btn"
                >
                  <span>VIEW APP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Project 2: Skill Bridge India */}
            <div className="bg-white rounded-[28px] border border-orange-200/90 shadow-[0_8px_35px_rgba(234,88,12,0.08)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/10 via-orange-500/5 to-transparent rounded-bl-full pointer-events-none"></div>

              <div>
                {/* Header */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF5EB] border border-orange-100 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300 p-3 text-[#EA580C]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                      ACADEMIA &amp; INDUSTRY PORTAL
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-[#EA580C] transition-colors font-display">
                      Skill Bridge India
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                      National Skill Mapping &amp; Collaboration Platform
                    </p>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-100 mb-5 flex items-center justify-center p-2 group-hover:border-orange-200/60 transition-colors">
                  <img
                    src="/skillbridge-india.png"
                    alt="Skill Bridge India platform preview"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  A platform designed to connect learners with skill-development opportunities and help them discover resources to grow their professional skills through academia-industry collaboration and verified skill mapping.
                </p>

                {/* Key Badges */}
                <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-3.5 mb-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Compass className="w-4.5 h-4.5 text-[#EA580C] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider block leading-tight truncate">
                        SKILL MAPPING
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 block truncate">
                        Academia &amp; Industry
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Globe className="w-4.5 h-4.5 text-[#EA580C] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider block leading-tight truncate">
                        NATIONAL PORTAL
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 block truncate">
                        Internships &amp; Placements
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Tailwind CSS', 'REST APIs', 'Lucide Icons', 'Responsive UI'].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700 hover:border-orange-200 hover:bg-orange-50/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                <a
                  href="https://skillbridge-india-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors py-1 group/btn"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <a
                  href="https://skillbridge-india-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors py-1 group/btn"
                >
                  <span>EXPLORE PLATFORM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-12 mb-14 sm:mb-20">
            <div className="flex-1 max-w-xl">
              <div className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#FF6B2B] mb-3">
                EXPERIENCE
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.12] font-display">
                My Professional <br />
                <span className="text-[#FF6B2B]">Journey.</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg max-w-md mt-4 leading-relaxed">
                A timeline of my practical software engineering experience, production projects, and technical growth.
              </p>
              <a
                href="/manish_gupta_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white border border-[#FF6B2B]/30 text-[#FF6B2B] font-semibold text-sm sm:text-base shadow-sm hover:bg-[#FF6B2B]/5 hover:border-[#FF6B2B]/50 transition-all duration-300"
              >
                <Download size={18} strokeWidth={2} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Stat Counters */}
            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 shrink-0">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.04] shadow-[0_6px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 min-w-[150px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-6">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight font-display">2+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Featured Platforms</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.04] shadow-[0_6px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 min-w-[150px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-6">
                  <Calendar size={22} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight font-display">2+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Years Building</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.04] shadow-[0_6px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 min-w-[150px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-6">
                  <Cpu size={22} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight font-display">10+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Production Modules</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mb-16 sm:mb-20 space-y-8">
            {/* Timeline Item 1 */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-stretch relative pb-10 group">
              <div className="w-32 sm:w-40 lg:w-44 shrink-0 pt-6 text-left">
                <div className="font-bold text-[#FF6B2B] text-xs sm:text-sm lg:text-base leading-snug">
                  2025 – Present
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Ongoing</div>
              </div>
              <div className="w-6 shrink-0 flex flex-col items-center relative pt-6 self-stretch">
                <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6B2B] z-10 shrink-0 shadow-[0_0_0_4px_rgba(255,107,43,0.12)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(255,107,43,0.2)]"></div>
                <div className="w-[2px] bg-slate-200/90 flex-1 mt-1 -mb-6"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-black/[0.05] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:border-[#FF6B2B]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 shadow-sm bg-orange-50 border border-orange-100 text-[#EA580C]">
                        <Target className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight leading-snug font-display">
                          Lead Full-Stack &amp; Systems Developer
                        </h3>
                        <a
                          href="https://skillbridge-india-eight.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-[#FF6B2B] mt-0.5 hover:underline"
                        >
                          <span>Skill Bridge India</span>
                          <ExternalLink size={14} />
                        </a>
                        <p className="text-slate-500 text-sm sm:text-[0.935rem] leading-relaxed mt-3 mb-4">
                          Architecting the national academia-industry collaboration and skill-mapping platform. Designed multi-stakeholder workflows connecting students, educational institutions, and industry opportunities with intuitive responsive interfaces and scalable state management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Tailwind CSS', 'REST APIs', 'System Architecture', 'UI/UX Design'].map((t) => (
                            <span
                              key={t}
                              className="bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200/60 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-start md:items-end justify-start gap-3 sm:gap-2 text-xs sm:text-sm text-slate-500 shrink-0 pt-1 md:pl-4 md:border-l md:border-slate-100/80">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin size={15} className="text-slate-400 shrink-0" />
                        <span>Delhi, India</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Globe size={15} className="text-slate-400 shrink-0" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-stretch relative pb-10 group">
              <div className="w-32 sm:w-40 lg:w-44 shrink-0 pt-6 text-left">
                <div className="font-bold text-[#FF6B2B] text-xs sm:text-sm lg:text-base leading-snug">
                  2024 – 2025
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">1 Year</div>
              </div>
              <div className="w-6 shrink-0 flex flex-col items-center relative pt-6 self-stretch">
                <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6B2B] z-10 shrink-0 shadow-[0_0_0_4px_rgba(255,107,43,0.12)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(255,107,43,0.2)]"></div>
                <div className="w-[2px] bg-slate-200/90 flex-1 mt-1 -mb-6"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-black/[0.05] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:border-[#FF6B2B]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 shadow-sm bg-orange-50 border border-orange-100 text-[#EA580C]">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight leading-snug font-display">
                          Full-Stack &amp; Mobile Developer
                        </h3>
                        <a
                          href="https://campusninja.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-sm sm:text-base text-[#FF6B2B] mt-0.5 hover:underline"
                        >
                          <span>Campus Ninja</span>
                          <ExternalLink size={14} />
                        </a>
                        <p className="text-slate-500 text-sm sm:text-[0.935rem] leading-relaxed mt-3 mb-4">
                          Built full-stack academic resource hub for B.Tech students. Implemented semester syllabus search, notes repositories, previous year question archives, and collaborated on cross-platform Android mobile application.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Android'].map((t) => (
                            <span
                              key={t}
                              className="bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200/60 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-start md:items-end justify-start gap-3 sm:gap-2 text-xs sm:text-sm text-slate-500 shrink-0 pt-1 md:pl-4 md:border-l md:border-slate-100/80">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin size={15} className="text-slate-400 shrink-0" />
                        <span>Delhi, India</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Briefcase size={15} className="text-slate-400 shrink-0" />
                        <span>Hybrid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-stretch relative pb-4 group">
              <div className="w-32 sm:w-40 lg:w-44 shrink-0 pt-6 text-left">
                <div className="font-bold text-[#FF6B2B] text-xs sm:text-sm lg:text-base leading-snug">
                  2024 – Present
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Research</div>
              </div>
              <div className="w-6 shrink-0 flex flex-col items-center relative pt-6 self-stretch">
                <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6B2B] z-10 shrink-0 shadow-[0_0_0_4px_rgba(255,107,43,0.12)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_6px_rgba(255,107,43,0.2)]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-black/[0.05] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:border-[#FF6B2B]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6">
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 shadow-sm bg-orange-50 border border-orange-100 text-[#EA580C]">
                        <Cpu className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight leading-snug font-display">
                          AI &amp; Agentic Systems Engineering
                        </h3>
                        <div className="font-semibold text-sm sm:text-base text-[#FF6B2B] mt-0.5">
                          Independent AI Engineering &amp; RAG Research
                        </div>
                        <p className="text-slate-500 text-sm sm:text-[0.935rem] leading-relaxed mt-3 mb-4">
                          Designing and evaluating Retrieval-Augmented Generation (RAG) pipelines, semantic vector search mechanisms, and multi-agent workflows using LangChain, LangGraph, and modern open-source LLMs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Python', 'LangChain', 'LangGraph', 'RAG', 'Vector Databases', 'OpenAI API'].map((t) => (
                            <span
                              key={t}
                              className="bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200/60 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-start md:items-end justify-start gap-3 sm:gap-2 text-xs sm:text-sm text-slate-500 shrink-0 pt-1 md:pl-4 md:border-l md:border-slate-100/80">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin size={15} className="text-slate-400 shrink-0" />
                        <span>Delhi, India</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <Code2 size={15} className="text-slate-400 shrink-0" />
                        <span>Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View for Timeline */}
            <div className="md:hidden space-y-6">
              {[
                {
                  period: '2025 – Present',
                  role: 'Lead Full-Stack & Systems Developer',
                  org: 'Skill Bridge India',
                  link: 'https://skillbridge-india-eight.vercel.app/',
                  desc: 'Architecting the national academia-industry collaboration and skill-mapping platform.',
                  tags: ['React', 'Tailwind CSS', 'REST APIs', 'System Architecture'],
                },
                {
                  period: '2024 – 2025',
                  role: 'Full-Stack & Mobile Developer',
                  org: 'Campus Ninja',
                  link: 'https://campusninja.vercel.app/',
                  desc: 'Built full-stack academic resource platform and Android application for B.Tech students.',
                  tags: ['Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
                },
                {
                  period: '2024 – Present',
                  role: 'AI & Systems Developer',
                  org: 'Autonomous Systems & RAG Research',
                  desc: 'Designing RAG architectures and multi-agent workflows using LangChain and LangGraph.',
                  tags: ['Python', 'LangChain', 'LangGraph', 'RAG', 'Vector DBs'],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-[#FF6B2B]/30 ml-2 pb-6 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-[3px] border-[#FF6B2B] shadow-[0_0_0_4px_rgba(255,107,43,0.15)] z-10"></div>
                  <div className="font-bold text-[#FF6B2B] text-xs uppercase tracking-wider mb-2">
                    {item.period}
                  </div>
                  <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col gap-3">
                    <h3 className="font-bold text-base text-slate-900 leading-snug font-display">
                      {item.role}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-xs text-[#FF6B2B] hover:underline"
                      >
                        {item.org}
                      </a>
                    ) : (
                      <span className="font-semibold text-xs text-[#FF6B2B]">{item.org}</span>
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-slate-100/90 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Sub-Section */}
          <div id="achievements" className="mt-20 pt-16 border-t border-slate-200/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column Header & Trophy SVG */}
              <div className="lg:col-span-4 flex flex-col items-start w-full">
                <div className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#FF6B2B] mb-3">
                  ACHIEVEMENTS
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] font-display">
                  Milestones That <br />
                  <span className="text-[#FF6B2B]">Define Growth.</span>
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4 max-w-sm">
                  A summary of my accomplishments, practical milestones, and the technical impact I&#39;m building along the way.
                </p>

                {/* Trophy SVG Vector matching original aesthetic */}
                <div className="w-full max-w-[260px] sm:max-w-[300px] mx-auto lg:mx-0 mt-8 relative flex justify-center items-center py-6 select-none">
                  <span className="absolute top-2 left-6 text-[#FF6B2B] text-sm font-bold">✦</span>
                  <span className="absolute bottom-6 left-8 text-[#FF9E66] text-xs font-bold">✦</span>
                  <span className="absolute top-10 right-4 text-[#FFCCAB] text-xs font-bold">✦</span>
                  <span className="absolute bottom-12 right-10 text-[#FF6B2B] text-base font-bold">•</span>

                  <svg
                    width="220"
                    height="220"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-sm"
                  >
                    <g fill="#FFCCAB" opacity="0.85">
                      <path d="M48 135 C 30 115, 30 85, 52 55 C 50 75, 42 105, 56 128 Z" />
                      <path d="M42 110 C 26 96, 28 72, 44 48 C 40 68, 36 92, 50 106 Z" />
                      <path d="M50 82 C 38 70, 42 50, 56 32 C 50 48, 48 68, 58 78 Z" />
                      <path d="M64 56 C 54 46, 60 30, 72 16 C 66 30, 64 46, 72 54 Z" />
                    </g>
                    <g fill="#FFCCAB" opacity="0.85">
                      <path d="M152 135 C 170 115, 170 85, 148 55 C 150 75, 158 105, 144 128 Z" />
                      <path d="M158 110 C 174 96, 172 72, 156 48 C 160 68, 164 92, 150 106 Z" />
                      <path d="M150 82 C 162 70, 158 50, 144 32 C 150 48, 152 68, 142 78 Z" />
                      <path d="M136 56 C 146 46, 140 30, 128 16 C 134 30, 136 46, 128 54 Z" />
                    </g>
                    <rect x="65" y="160" width="70" height="12" rx="3" fill="#FFF0E6" />
                    <rect x="72" y="148" width="56" height="12" rx="2" fill="#FFE0CC" />
                    <path d="M85 148 L90 120 H110 L115 148 Z" fill="#FFCCAB" />
                    <path
                      d="M68 75 C 52 75, 52 105, 74 102"
                      stroke="#FFB380"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M132 75 C 148 75, 148 105, 126 102"
                      stroke="#FFB380"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M66 65 H134 C134 100, 118 122, 100 122 C82 122, 66 100, 66 65 Z"
                      fill="url(#trophyGradient)"
                    />
                    <ellipse cx="100" cy="65" rx="34" ry="6" fill="#FFE8D6" />
                    <path
                      d="M76 72 C82 95, 92 110, 100 115"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="trophyGradient"
                        x1="66"
                        y1="65"
                        x2="134"
                        y2="122"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#FFE0CC" />
                        <stop offset="50%" stopColor="#FFCCAB" />
                        <stop offset="100%" stopColor="#FF9E66" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Right Column: Clean Verified Achievement Cards (Hackathon & Open Source Removed) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1 w-full">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 flex flex-col justify-start group">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <RocketIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-[1.125rem] font-bold text-slate-800 tracking-tight leading-snug mb-2 font-display">
                    Full Stack Developer
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Built and deployed full-stack web and mobile applications solving real-world challenges for students and educators.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 flex flex-col justify-start group">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-[1.125rem] font-bold text-slate-800 tracking-tight leading-snug mb-2 font-display">
                    AI/ML Explorer
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Developing practical AI solutions, specialized RAG pipelines, and intelligent agent workflows with LLMs.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 flex flex-col justify-start group">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-[1.125rem] font-bold text-slate-800 tracking-tight leading-snug mb-2 font-display">
                    Mentor &amp; Community Builder
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Mentoring peers in software development, sharing roadmap guidance, and building collaborative peer groups.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-6 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.08)] hover:border-[#FF6B2B]/20 transition-all duration-300 flex flex-col justify-start group">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-[1.125rem] font-bold text-slate-800 tracking-tight leading-snug mb-2 font-display">
                    Consistent Learner
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    Continuously mastering modern AI architectures, agent frameworks, and high-performance full-stack web stacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Summary Counters Bar */}
            <div className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:py-9 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.03)] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
              <div className="flex flex-col items-center text-center px-2 lg:px-4 pt-4 first:pt-0 sm:pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-3">
                  <RocketIcon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B2B] tracking-tight font-display">
                  2+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                  Production Platforms
                </div>
              </div>

              <div className="flex flex-col items-center text-center px-2 lg:px-4 pt-4 first:pt-0 sm:pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B2B] tracking-tight font-display">
                  10+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                  AI &amp; Web Modules
                </div>
              </div>

              <div className="flex flex-col items-center text-center px-2 lg:px-4 pt-4 first:pt-0 sm:pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B2B] tracking-tight font-display">
                  100+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                  Students Impacted
                </div>
              </div>

              <div className="flex flex-col items-center text-center px-2 lg:px-4 pt-4 first:pt-0 sm:pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F0] text-[#FF6B2B] flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B2B] tracking-tight font-display">
                  2+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                  Years of Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="pt-8 sm:pt-16 pb-0 px-3 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#060A16] text-white rounded-t-[1.75rem] sm:rounded-t-[2.5rem] rounded-b-none p-5 sm:p-12 lg:p-14 border border-white/[0.08] border-b-0 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden mb-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start w-full pr-0 lg:pr-6">
                <a className="inline-block mb-2 group" href="#home">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight select-none flex items-center">
                    <span className="bg-gradient-to-r from-[#059669] to-[#10B981] bg-clip-text text-transparent">
                      MG
                    </span>
                  </span>
                </a>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 font-display">
                  Manish Gupta
                </h3>
                <div className="text-base sm:text-lg font-semibold text-[#10B981] mt-1 mb-4">
                  AI Engineer &amp; Full-Stack Developer
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                  Building intelligent AI systems, robust backend architectures, and high-performance web and mobile applications that create real impact.
                </p>

                {/* Direct Contact Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 w-full">
                  <a
                    href="mailto:m09167358@gmail.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm font-medium"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                      <Mail size={17} />
                    </div>
                    <span className="truncate">m09167358@gmail.com</span>
                  </a>

                  <a
                    href="tel:+919560611594"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm font-medium"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                      <Phone size={17} />
                    </div>
                    <span>+91 95606 11594</span>
                  </a>

                  <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0">
                      <MapPin size={17} />
                    </div>
                    <span>Delhi, India</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:m09167358@gmail.com"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
                    aria-label="Email Manish Gupta"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="tel:+919560611594"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#10B981]/20 hover:border-[#10B981]/40 flex items-center justify-center text-[#10B981] transition-all duration-300 group"
                    aria-label="Call Manish Gupta"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://wa.me/919560611594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#25D366]/15 hover:border-[#25D366]/40 flex items-center justify-center text-[#25D366] transition-all duration-300 group"
                    aria-label="WhatsApp Manish Gupta"
                  >
                    <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column Card */}
              <div className="lg:col-span-5 flex flex-col items-start w-full mt-2 sm:mt-0">
                <div className="w-full bg-[#111728]/90 border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between hover:border-[#10B981]/40 transition-all duration-300 group shadow-lg">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/20 group-hover:scale-105 transition-transform p-3">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-1.5 tracking-tight font-display">
                        Let&#39;s build something amazing!
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        I&#39;m open to opportunities, collaborations, and engineering roles.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Ready to start?</span>
                    <a
                      href="mailto:m09167358@gmail.com"
                      className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(16,185,129,0.3)] group/btn"
                    >
                      <span>Let&#39;s Connect</span>
                      <ChevronRight size={16} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright Divider */}
            <div className="border-t border-white/10 my-6 sm:my-10 w-full"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 w-full text-center sm:text-left">
              <div>
                © {new Date().getFullYear()} <span className="text-[#10B981] font-semibold">Manish Gupta</span>. All rights reserved.
              </div>
              <div>
                Designed &amp; Built by <span className="text-[#10B981] font-semibold">Manish Gupta</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
    </svg>
  )
}
