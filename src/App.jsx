import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Cpu,
  Cloud,
  Network,
  Server,
  CheckCircle2,
  Users,
  ArrowRight,
  Menu,
  X,
  Mail,
  Linkedin,
  CreditCard,
  Briefcase,
  Shield,
  Activity,
  Award,
  Zap,
  Target,
  BarChart3,
  Layers,
  AlertCircle,
  TrendingUp,
  Settings,
  Clock,
  MapPin,
  Globe,
  Terminal,
  FileText,
  Check,
  Building2,
  DollarSign,
  UserCheck,
  XCircle,
  ClipboardCheck,
  Search,
  UserPlus,
  Play,
  Anchor,
  Users2,
  ShieldAlert
} from 'lucide-react';

// Refined Executive Color Palette
const COLORS = {
  cedarGreen: '#0A140D',
  cedarGreenHover: '#142118',
  slateGray: '#374151',
  neutralBg: '#FBFBF9',
  stoneBg: '#F2F2F0',
  bronzeAccent: '#8B7355',
  white: '#FFFFFF',
  border: '#E5E7EB'
};

const Logo = ({ isFooter = false }) => (
  <div className="flex items-baseline select-none whitespace-nowrap">
    <div
      className="text-xl md:text-2xl font-bold leading-none tracking-tighter"
      style={{ color: isFooter ? COLORS.white : COLORS.cedarGreen }}
    >
      CEDAR
    </div>
    <div
      className="text-xl md:text-2xl font-extralight ml-1 leading-none tracking-tight uppercase"
      style={{ color: isFooter ? 'rgba(255,255,255,0.6)' : COLORS.slateGray }}
    >
      INFRASTRUCTURE
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => {
        setCurrentPage(id);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
        currentPage === id ? 'text-[#8B7355]' : 'text-[#374151] hover:text-[#0A140D]'
      }`}
    >
      {label}
    </button>
  );

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#8B7355] selection:text-white" style={{ backgroundColor: COLORS.neutralBg }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => handlePageChange('home')}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink id="home" label="Home" />
            <NavLink id="services" label="Services" />
            <NavLink id="why-cedar" label="Why Cedar" />
            <NavLink id="engineers" label="Join Cedar" />
            <NavLink id="contact" label="Contact" />
            <div className="h-6 w-px bg-gray-200 ml-2"></div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] hover:text-[#0A140D] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} style={{ color: COLORS.cedarGreen }} /> : <Menu size={24} style={{ color: COLORS.cedarGreen }} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-xl">
            <NavLink id="home" label="Home" />
            <NavLink id="services" label="Services" />
            <NavLink id="why-cedar" label="Why Cedar" />
            <NavLink id="engineers" label="Join Cedar" />
            <NavLink id="contact" label="Contact" />
            <div className="pt-2 flex items-center space-x-4 border-t border-gray-100 mt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Connect</span>
              <a href="https://linkedin.com" className="text-[#8B7355]"><Linkedin size={20} /></a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setPage={handlePageChange} />}
        {currentPage === 'services' && <ServicesPage setPage={handlePageChange} />}
        {currentPage === 'why-cedar' && <WhyCedarPage />}
        {currentPage === 'engineers' && <EngineersPage setPage={handlePageChange} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="pt-16 pb-12 md:py-20 px-6 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="space-y-6">
            <Logo isFooter />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Curated infrastructure capacity for enterprise IT, VAR, and MSP delivery teams. Every specialist is technically vetted for scope, environment, and operational risk.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeAccent }}>Navigation</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-300 font-light">
              <button onClick={() => handlePageChange('services')} className="hover:text-white text-left transition-colors">Services</button>
              <button onClick={() => handlePageChange('why-cedar')} className="hover:text-white text-left transition-colors">Why Cedar</button>
              <button onClick={() => handlePageChange('contact')} className="hover:text-white text-left transition-colors font-bold">Contact</button>
              <button onClick={() => handlePageChange('engineers')} className="hover:text-white text-left transition-colors">Join Cedar</button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeAccent }}>Client Operations</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <div className="flex items-center space-x-3">
                <Mail size={14} className="opacity-60" style={{ color: COLORS.bronzeAccent }} />
                <a href="mailto:projects@hirecedar.com" className="hover:text-white transition-colors">projects@hirecedar.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard size={14} className="opacity-60" style={{ color: COLORS.bronzeAccent }} />
                <a href="mailto:billing@hirecedar.com" className="hover:text-white transition-colors">billing@hirecedar.com</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeAccent }}>Working For Cedar</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <p className="text-gray-400 text-xs italic font-light leading-relaxed">
                Independent infrastructure specialists can submit credentials for review through <button onClick={() => handlePageChange('engineers')} className="text-[#8B7355] font-bold hover:underline uppercase">JOIN CEDAR</button>.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left font-light">
          © {new Date().getFullYear()} Cedar Infrastructure Group. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

/* --- PAGE COMPONENTS --- */
const HomePage = ({ setPage }) => (
  <div className="animate-in fade-in duration-700">
    <section className="relative py-24 md:py-40 px-6 overflow-hidden text-center lg:text-left">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tighter"
            style={{ color: COLORS.cedarGreen }}
          >
            Infrastructure Capacity, Curated for Execution. <br />
            <span className="font-extralight italic" style={{ color: COLORS.slateGray }}>
              Vetted. Calibrated. Deployed.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 leading-relaxed font-light"
            style={{ color: COLORS.slateGray }}
          >
            Cedar deploys mid-to-senior infrastructure specialists for remote, project, and managed capacity engagements.
            Every specialist is technically reviewed against your scope, environment, and operational risk before deployment.
            Engagements are accepted only when scope, urgency, and commercial posture are aligned with senior-level execution standards.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={() => setPage('contact')}
              className="text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center group"
              style={{ backgroundColor: COLORS.cedarGreen }}
            >
              REQUEST CAPACITY
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>

            <button
              onClick={() => setPage('engineers')}
              className="border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all text-center"
              style={{ borderColor: COLORS.cedarGreen, color: COLORS.cedarGreen }}
            >
              Join Cedar
            </button>
          </div>

          <p className="mt-6 text-sm font-light" style={{ color: COLORS.slateGray }}>
            Built for enterprise IT teams, CIO offices, VAR practices, and MSP delivery organizations.
          </p>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-1/3 h-full -z-10 hidden lg:block"
        style={{ backgroundColor: `${COLORS.cedarGreen}05` }}
      />
    </section>

    <section className="bg-white py-20 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <ValueProp
            number="01"
            title="Execution Velocity"
            desc="Deploy proven specialists into active workstreams without adding permanent headcount burden."
          />
          <ValueProp
            number="02"
            title="Technical Calibration"
            desc="Each engagement is mapped to architecture, operating model, and risk tolerance before start."
          />
          <ValueProp
            number="03"
            title="Continuity Control"
            desc="Structured oversight and rapid replacement protection preserve delivery outcomes."
          />
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ setPage }) => (
  <div className="py-24 px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="max-w-7xl mx-auto">
      <section className="mb-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter leading-[1.05]" style={{ color: COLORS.cedarGreen }}>
            Curated Infrastructure Capacity. <br />Governance. Calibration. Deployment.
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-3xl">
            Infrastructure talent selection is a risk decision. Cedar curates mid-to-senior infrastructure specialists for complex environments,
            applies executive technical governance before deployment, and protects continuity through delivery for commercially mature engagements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { setPage('contact'); }}
              className="text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all shadow-md hover:shadow-xl hover:bg-black"
              style={{ backgroundColor: COLORS.cedarGreen }}
            >
              Initiate Capacity Request
            </button>
            <button
              onClick={() => { setPage('contact'); }}
              className="border-2 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:bg-gray-50"
              style={{ borderColor: COLORS.cedarGreen, color: COLORS.cedarGreen }}
            >
              Submit Scope
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block" style={{ color: COLORS.bronzeAccent }}>
              Where Cedar Is Deployed
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: COLORS.cedarGreen }}>
              When delivery risk becomes financial exposure.
            </h2>
            <p className="mt-5 text-sm font-light text-gray-500 leading-relaxed">
              These are the operating conditions where misaligned technical execution creates downtime, rework, and margin loss.
              Cedar functions as the quality gate.
            </p>
            <div className="mt-8 space-y-3">
              <MiniProof icon={<Shield size={16} />} label="Executive technical filter" />
              <MiniProof icon={<Target size={16} />} label="Scope-fit matching, not keyword matching" />
              <MiniProof icon={<Zap size={16} />} label="Rapid continuity replacement if needed" />
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScenarioCard icon={<Activity size={18} />} title="Hard deadline migrations" desc="Data center exits, lease events, and compliance windows." />
            <ScenarioCard icon={<Network size={18} />} title="SD-WAN and core rollouts" desc="Multi-site cutovers where downtime has direct cost." />
            <ScenarioCard icon={<Cloud size={18} />} title="Landing zone hardening" desc="Production-ready Azure/AWS foundations and guardrails." />
            <ScenarioCard icon={<Layers size={18} />} title="Post-acquisition integration" desc="Rapid standardization, network convergence, and control." />
            <ScenarioCard icon={<TrendingUp size={18} />} title="Practice overflow spikes" desc="Delivery surge capacity without long-term structural load." />
            <ScenarioCard icon={<AlertCircle size={18} />} title="Escalation recovery" desc="Corrective capacity when internal throughput breaks down." />
          </div>
        </div>
      </section>

      <section className="mb-24 border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeAccent }}>
                How Engagement Works
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: COLORS.cedarGreen }}>
                Three steps from scope to deployment.
              </h3>
            </div>
            <button
              onClick={() => { setPage('contact'); }}
              className="hidden md:inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] group"
              style={{ color: COLORS.bronzeAccent }}
            >
              Request Capacity <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowStep n="01" title="Define Scope" desc="Environment, timeline, operating constraints, and budget band." />
            <HowStep n="02" title="Technical Calibration" desc="Deep technical review for delivery maturity and scope fit." />
            <HowStep n="03" title="Deploy With Oversight" desc="Start fast with continuity controls and replacement protection." />
          </div>
        </div>
      </section>

      <section className="mb-32 py-20 bg-white border border-gray-100 p-12">
        <h2 className="text-3xl font-bold mb-10 tracking-tight uppercase text-center" style={{ color: COLORS.cedarGreen }}>Capacity Without Structural Liability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg font-light text-gray-600 leading-relaxed max-w-5xl mx-auto">
          <div className="space-y-6">
            <p>
              Permanent headcount carries permanent cost. Infrastructure execution demand is variable and often deadline-driven.
              Traditional full-time hiring cycles are too slow for live delivery pressure and create long-term cost drag after peak demand.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Cedar provides a cleaner operating model: deploy specialist capacity when needed, hold accountability during execution,
              and release capacity when milestones are complete. That is disciplined scale without permanent headcount debt.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="mb-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Engagement Models</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EngagementModel title="Project Delivery Capacity" desc="Scope-based deployment tied to defined outcomes and milestone accountability from implementation to production stability." />
          <EngagementModel title="Managed Execution Capacity" desc="Time-based specialist support for high-velocity teams that need sustained throughput without adding permanent headcount." />
          <EngagementModel title="Embedded Program Capacity" desc="Reduced-rate structure for 12+ month roadmaps requiring stable specialist continuity across multi-phase infrastructure initiatives." />
        </div>
      </section>

      {/* EXECUTION DISCIPLINES */}
      <section>
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Execution Disciplines</h2>
          <div className="h-[2px] w-12" style={{ backgroundColor: COLORS.bronzeAccent }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<Server size={32} />} title="Systems Engineering" items={["Senior compute specialists for virtualization and platform stability", "Hardened server OS execution in regulated and high-control environments", "High-availability architecture support and zero-drift operational controls"]} />
          <ServiceCard icon={<Network size={32} />} title="Network Engineering" items={["Carrier-grade network specialists for multi-site rollouts", "Multi-vendor routing and security implementation depth", "Controlled SD-WAN execution to remove latency and reliability bottlenecks"]} />
          <ServiceCard icon={<Cloud size={32} />} title="Cloud Implementation" items={["Production-ready Azure/AWS foundations and governance guardrails", "Migration specialists for low-risk workload transitions", "Hybrid identity and secure cloud connectivity execution"]} />
        </div>
      </section>
    </div>
  </div>
);

const WhyCedarPage = () => (
  <div className="animate-in fade-in duration-700 bg-white">
    {/* 1) HEADER SECTION - TONAL BG */}
    <section className="pt-20 pb-16 px-6 bg-[#FBFBF9] border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.95]" style={{ color: COLORS.cedarGreen }}>Why Cedar</h2>
        <div className="h-[2px] w-16 bg-[#8B7355] mx-auto mb-8" />
        <p className="text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto text-gray-500">
          Cedar operates as a technical quality gate, not a volume sourcing pipeline. We reject keyword sorting and apply senior-level technical review before introducing specialist capacity.
        </p>
      </div>
    </section>

    {/* 2) PARTNERSHIP ACCOUNTABILITY - DENSE GRID */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 border-l-4 pl-10 py-2" style={{ borderColor: COLORS.bronzeAccent }}>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6" style={{ color: COLORS.cedarGreen }}>Technical Advisory Panel</h3>
            <p className="text-base font-light text-gray-600 leading-relaxed mb-8 max-w-xl">
              Every specialist presented by Cedar is reviewed by former infrastructure engineers, architects, and IT executives with direct enterprise delivery experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0A140D]">
              <div className="flex items-center space-x-3">
                <Terminal size={16} style={{ color: COLORS.bronzeAccent }} />
                <span>Peer-led technical review</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserCheck size={16} style={{ color: COLORS.bronzeAccent }} />
                <span>Delivery maturity validation</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#F2F2F0] p-10 border border-gray-200 rounded-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-[#8B7355]">Strategic Outcome</h4>
            <p className="text-sm font-light leading-relaxed text-gray-600">
              Your team speaks only with high-fit specialists already vetted for scope, environment, communication quality, and risk profile.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* 3) CORE VALUE PROPOSITION - TONAL BG */}
    <section className="py-16 px-6 bg-[#FBFBF9] border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="space-y-10">
            <Feature icon={<Shield style={{ color: COLORS.bronzeAccent }} size={24} />} title="Risk Control" desc="Specialist selection is handled as an operational risk control, not an administrative process." />
            <Feature icon={<Activity style={{ color: COLORS.bronzeAccent }} size={24} />} title="Environment Alignment" desc="Technical depth is validated against real production conditions where downtime carries financial impact." />
            <Feature icon={<Award style={{ color: COLORS.bronzeAccent }} size={24} />} title="Delivery Accountability" desc="We prioritize execution discipline, documentation quality, and change-control maturity." />
          </div>

          <div className="bg-white border border-gray-200 p-10 md:p-14 shadow-xl relative rounded-sm">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#8B7355]" />
            <h3 className="text-lg font-bold mb-8 tracking-widest uppercase text-[#0A140D]">The Cedar Difference</h3>
            <div className="space-y-5">
              <CheckItem text="CIO-level technical filter" />
              <CheckItem text="Governance-led calibration" />
              <CheckItem text="Execution continuity controls" />
              <CheckItem text="No permanent headcount liability" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4) INSTITUTIONAL PHILOSOPHY - WHITE BG */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-extralight italic leading-tight text-gray-400 uppercase tracking-tighter">
            The Perspective of a CIO. <br />The Discipline of an Architect.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-light">
            <p>Cedar Infrastructure Group operates as a private infrastructure capacity advisory and deployment partner with executive-level technical oversight.</p>
            <p>Finding the right specialist under active deadlines is often the highest operational risk inside infrastructure programs. Cedar removes friction between procurement and execution by pre-validating technical depth and delivery readiness.</p>
          </div>

          <div className="bg-[#F2F2F0] p-10 border border-gray-200 rounded-sm">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border-b border-gray-300 pb-2 text-[#0A140D]">Methodology</h5>
            <div className="grid grid-cols-1 gap-y-6">
              <ListItem title="Executive Governance" desc="Engagements are governed by operating scope and delivery impact." />
              <ListItem title="Risk Calibration" desc="Specialists are matched to mission-critical production realities." />
              <ListItem title="Operational Review" desc="Technical depth and documentation discipline are validated early." />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 5) ANCHOR BAND - DARK */}
    <section className="py-12 bg-[#0A140D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <ShieldAlert size={24} style={{ color: COLORS.bronzeAccent }} />
            <h4 className="text-sm font-bold uppercase tracking-[0.3em]">Institutional Quality Gate</h4>
          </div>
          <div className="h-px flex-grow bg-white/10 hidden md:block" />
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">Governance | Calibration | Deployment</p>
        </div>
      </div>
    </section>

    {/* 6) CLOSING - TONAL BG */}
    <section className="py-20 px-6 bg-[#FBFBF9]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl font-light text-gray-500 leading-relaxed">
          Cedar provides enterprise and VAR organizations with disciplined infrastructure execution capacity.
          We calibrate specialists to executive standards so delivery stays stable, accountable, and commercially sound.
        </p>
      </div>
    </section>
  </div>
);

const EngineersPage = ({ setPage }) => (
  <div className="py-24 px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Join Cedar</h2>
        <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: COLORS.slateGray }}>
          Cedar works with independent mid-to-senior infrastructure specialists who can deliver in enterprise and VAR environments with minimal supervision.
        </p>
      </div>

      {/* Four Baseline Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <Benefit title="Remote-Primary" desc="Most engagements are remote, with United States travel only when scope requires on-site execution." />
        <Benefit title="Defined Scope" desc="Clear deliverables, clean engagement terms, and accountable stakeholders." />
        <Benefit title="Enterprise Environments" desc="Work spans complex systems, network, and cloud stacks in production settings." />
        <Benefit title="Commercial Alignment" desc="Aligned engagements prioritize defined scope, executive accountability, and serious delivery budgets." />
      </div>

      {/* Fit vs Not-Fit Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border-l-4 border-[#065F46] p-8 md:p-12 shadow-sm rounded-sm text-left">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#065F46]">You Are A Strong Fit If</h3>
            <ul className="space-y-6">
              <FitItem text="You have led production infrastructure deployments end-to-end" />
              <FitItem text="You operate independently without daily direction" />
              <FitItem text="You respect change control and documentation standards" />
              <FitItem text="You communicate clearly with enterprise stakeholders" />
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#991B1B] p-8 md:p-12 shadow-sm rounded-sm text-left">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#991B1B]">This Is Not A Fit For</h3>
            <ul className="space-y-6">
              <NotFitItem text="Entry-level technologists seeking training programs" />
              <NotFitItem text="Specialists who need constant direction" />
              <NotFitItem text="Profile collectors without delivery accountability" />
              <NotFitItem text="Individuals unwilling to own outcome quality" />
            </ul>
          </div>
        </div>
      </section>

      {/* 4-Step Process Strip */}
      <section className="mb-24 bg-[#0A140D] p-10 md:p-14 rounded-sm shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
          <ProcessStep n="01" icon={<FileText size={20} />} text="Profile Review" />
          <ProcessStep n="02" icon={<Search size={20} />} text="Technical Review" />
          <ProcessStep n="03" icon={<Target size={20} />} text="Scope Alignment" />
          <ProcessStep n="04" icon={<Play size={20} />} text="Deployment" />
        </div>
      </section>

      {/* Operational & Engagement Details */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 text-slate-600 text-left">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: COLORS.cedarGreen }}>Delivery Expectations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ExpectationItem text="Clean handoffs" />
              <ExpectationItem text="Executive-ready communication" />
              <ExpectationItem text="Structured documentation" />
              <ExpectationItem text="Respect for client controls" />
              <ExpectationItem text="United States-based execution" />
              <ExpectationItem text="Remote-primary with travel support" />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-12">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4" style={{ color: COLORS.bronzeAccent }}>Reach and Capacity</h3>
            <p className="text-xl font-extralight leading-relaxed text-gray-500 italic">
              Cedar specialists support enterprise IT teams across healthcare, financial services, higher education,
              manufacturing, and national VAR delivery organizations.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-md rounded-sm sticky top-24">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#8B7355]">Engagement Structure</h3>
            <ul className="space-y-8 text-sm font-light text-gray-500">
              <li className="flex items-start space-x-3">
                <Globe size={18} className="text-gray-300 mt-0.5 shrink-0" />
                <span>United States-based delivery environments only</span>
              </li>
              <li className="flex items-start space-x-3">
                <FileText size={18} className="text-gray-300 mt-0.5 shrink-0" />
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-[#0A140D]">1099 Independent Contractor (Individual)</span>
                  <span className="font-bold text-[#0A140D]">Independent B2B (Individual LLC / S-Corp / C-Corp)</span>
                  <p className="text-[11px] leading-relaxed text-gray-400 mt-1">
                    Note: Cedar engages individuals directly to preserve end-to-end delivery quality. Multi-layer subcontracting firms are outside our operating model.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gray-300 mt-0.5 shrink-0" />
                <span>Minimum engagement sizes typically 300+ hours</span>
              </li>
              <li className="flex items-start space-x-3">
                <Target size={18} className="text-gray-300 mt-0.5 shrink-0" />
                <span>Multi-month implementation focus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specialist Intake CTA */}
      <div className="max-w-3xl mx-auto mt-24 p-10 md:p-16 border text-center shadow-xl relative overflow-hidden bg-white" style={{ borderColor: COLORS.border }}>
        <div className="absolute top-0 left-0 w-full h-1 bg-[#8B7355]" />
        <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest" style={{ color: COLORS.cedarGreen }}>Specialist Intake</h3>
        <p className="text-gray-500 font-light mb-10 max-w-2xl mx-auto">
          Submissions are reviewed for technical depth, delivery maturity, and alignment with active enterprise and VAR initiatives.
          Qualified specialists are contacted when scope alignment is confirmed.
        </p>

        <div className="mb-10 px-6 py-4 bg-gray-50 inline-block border border-gray-100 rounded-sm">
          <p className="text-sm font-bold text-[#0A140D] tracking-tight">
            Cedar aligns with mid-to-senior specialists operating at professional market standards.
          </p>
        </div>

        <div className="space-y-8">
          <a href="mailto:join@hirecedar.com?subject=Specialist%20Intake%20Submission" className="inline-block text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.4em] transition-all shadow-lg hover:bg-black" style={{ backgroundColor: COLORS.cedarGreen }}>Submit Credentials</a>
          <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto opacity-40 text-gray-600">
            By submitting, you consent to Cedar Infrastructure Group storing your data for future scope alignment.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const [userRole, setUserRole] = useState('');

  return (
    <div className="py-24 px-6 animate-in fade-in duration-500 text-left">
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter leading-none" style={{ color: COLORS.cedarGreen }}>
            Request Capacity
          </h2>
          <p className="text-xl font-light text-gray-600 tracking-tight mb-2">
            Structured intake for organizations requiring vetted infrastructure execution capacity.
          </p>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#B45309]">
              Cedar supports United States-based organizations and United States-based engagements only.
            </p>
            <p className="text-sm font-light text-gray-500 leading-relaxed italic max-w-2xl">
              We align scope, delivery window, and commercial posture before confirming specialist availability.
            </p>
            <div className="h-[1px] w-24 mt-4" style={{ backgroundColor: COLORS.bronzeAccent }} />
          </div>
        </section>

        <form className="space-y-12">
          {/* SECTION 1 - ORGANIZATION PROFILE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeAccent }}>Section 1 - Organization Profile</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              <InputWrapper label="You Are">
                <select
                  required
                  className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none cursor-pointer"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="direct">Enterprise IT / End Client</option>
                  <option value="channel">VAR / MSP (delivering for a client)</option>
                </select>
              </InputWrapper>
              <div className="hidden md:block"></div>

              <InputWrapper label="Full Name">
                <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="First Last" />
              </InputWrapper>
              <InputWrapper label="Work Email">
                <input required type="email" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="email@company.com" />
              </InputWrapper>
              <InputWrapper label="Requesting Organization">
                <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Your Firm Name" />
              </InputWrapper>
              <InputWrapper label="Requesting HQ Location">
                <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="City, State" />
              </InputWrapper>
              <InputWrapper label="Organization Type">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Category</option>
                  <option>Enterprise</option>
                  <option>VAR</option>
                  <option>MSP</option>
                  <option>Technology Vendor</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Engagement Working Time Zone">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Zone</option>
                  <option>Eastern (ET)</option>
                  <option>Central (CT)</option>
                  <option>Mountain (MT)</option>
                  <option>Pacific (PT)</option>
                  <option>Arizona (MST)</option>
                  <option>Alaska (AKT)</option>
                  <option>Hawaii (HAT)</option>
                </select>
              </InputWrapper>
            </div>

            {/* Conditional Reveal for VAR/MSP */}
            {userRole === 'channel' && (
              <div className="pt-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-[#0A140D]">End Client Details (Required for VAR/MSP)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <InputWrapper label="End Client Organization">
                    <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Client Company Name" />
                  </InputWrapper>
                  <InputWrapper label="End Client HQ Location">
                    <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="City, State" />
                  </InputWrapper>
                  <InputWrapper label="End Client Industry">
                    <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                      <option value="">Select Client Industry</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Financial Services</option>
                      <option>Manufacturing</option>
                      <option>SaaS / Technology</option>
                      <option>Public Sector</option>
                      <option>Other</option>
                    </select>
                  </InputWrapper>
                  <InputWrapper label="End Client Working Time Zone (If Different)">
                    <select className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                      <option value="">Same as Requesting Organization</option>
                      <option>Eastern (ET)</option>
                      <option>Central (CT)</option>
                      <option>Mountain (MT)</option>
                      <option>Pacific (PT)</option>
                    </select>
                  </InputWrapper>
                </div>
              </div>
            )}

            <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-400 font-medium">Cedar supports United States-based delivery environments only.</p>
          </div>

          {/* SECTION 2 - ENGAGEMENT STRUCTURE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeAccent }}>Section 2 - Engagement Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <InputWrapper label="Engagement Model">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Model</option>
                  <option>Project Delivery Capacity (Defined Scope and Outcome)</option>
                  <option>Managed Capacity (Time-Based Allocation)</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Start Window">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Availability Needed</option>
                  <option>0-30 Days</option>
                  <option>30-60 Days</option>
                  <option>60-90 Days</option>
                  <option>Planning Stage</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Contract Duration">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Term</option>
                  <option>90 Days</option>
                  <option>120 Days</option>
                  <option>6 Months</option>
                  <option>12+ Months</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Weekly Allocation">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Capacity</option>
                  <option>20 Hours</option>
                  <option>30 Hours</option>
                  <option>40 Hours</option>
                  <option>Variable</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Work Mode">
                <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Mode</option>
                  <option>Remote Primary (Travel as Required - U.S. only)</option>
                  <option>Hybrid (U.S. only)</option>
                </select>
                <p className="mt-2 text-[10px] text-gray-400 font-medium">Cedar specialists operate remotely by default, with United States travel supported when required by scope.</p>
              </InputWrapper>
            </div>
          </div>

          {/* SECTION 3 - SCOPE & COMMERCIAL ALIGNMENT */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeAccent }}>Section 3 - Scope and Commercial Alignment</h3>
            <div className="space-y-10">
              <InputWrapper label="Technical Domain">
                <div className="flex flex-wrap gap-4 pt-2">
                  {['Network', 'Systems', 'Cloud', 'Security', 'Hybrid Infrastructure'].map(domain => (
                    <label key={domain} className="flex items-center space-x-3 text-sm font-light text-gray-600 cursor-pointer border border-gray-100 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 accent-[#8B7355]" />
                      <span>{domain}</span>
                    </label>
                  ))}
                </div>
              </InputWrapper>
              <InputWrapper label="Primary Platforms and Stack">
                <input required type="text" className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Cisco, Fortinet, VMware, Azure, AWS, Aruba, etc." />
              </InputWrapper>
              <InputWrapper label="Definition of Success">
                <textarea required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors h-24 resize-none bg-transparent font-light" placeholder="What does successful completion look like?" />
              </InputWrapper>
              <InputWrapper label="Constraints and Risk Factors">
                <textarea required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors h-24 resize-none bg-transparent font-light" placeholder="Deadlines, maintenance windows, compliance, change control, outage sensitivity." />
              </InputWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <InputWrapper label="Budget Posture">
                  <select required className="w-full border-b border-gray-200 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                    <option value="">Select Posture</option>
                    <option>Market-Competitive (Mid-Level)</option>
                    <option>Market-Competitive (Senior-Level)</option>
                    <option>Premium / Escalation-Sensitive</option>
                  </select>
                </InputWrapper>
                <InputWrapper label="Budget Band (Optional)">
                  <div className="border-b border-gray-200 py-2.5">
                    <input type="text" className="w-full outline-none transition-colors bg-transparent font-light" placeholder="Share your target budget posture" />
                  </div>
                </InputWrapper>
              </div>
            </div>
          </div>

          {/* MINIMUM ENGAGEMENT POLICY BLOCK */}
          <div className="bg-[#0A140D]/5 border border-gray-100 p-8 md:p-12 rounded-sm">
            <h4 className="text-lg font-bold uppercase tracking-tight mb-6" style={{ color: COLORS.cedarGreen }}>Engagement Minimums</h4>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>Cedar operates under structured capacity commitments. Standard minimum structures include:</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.bronzeAccent }} />
                  <span><strong>300 hours</strong> over a 120-day window</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.bronzeAccent }} />
                  <span><strong>360 hours</strong> over a 90-day window</span>
                </li>
              </ul>
              <p className="text-sm italic">Short-term emergency requests are generally outside Cedar's operating model.</p>
              <p className="text-sm font-bold" style={{ color: COLORS.cedarGreen }}>Cedar does not support non-U.S. engagements.</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
              Cedar reviews complete requests with defined scope, timeline, and commercial alignment.
            </p>
            <button
              type="submit"
              className="w-full text-white py-6 text-sm font-bold uppercase tracking-[0.4em] transition-all shadow-xl hover:bg-black"
              style={{ backgroundColor: COLORS.cedarGreen }}
            >
              Submit Capacity Request
            </button>
            <p className="text-[10px] text-gray-500 font-light leading-relaxed max-w-2xl mx-auto text-center">
              Submissions are reviewed for scope clarity, timeline realism, and budget fit. Cedar confirms availability and next steps when criteria are met.
              Discovery calls are scheduled only when required for scope validation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

/* --- SHARED SUBCOMPONENTS --- */

const ValueProp = ({ number, title, desc }) => (
  <div className="group border-t border-gray-100 pt-10">
    <div className="text-5xl font-extralight mb-6 text-gray-300 group-hover:text-[#8B7355] transition-colors duration-500">{number}</div>
    <h3 className="text-lg font-bold mb-4 tracking-widest uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <p className="text-base leading-relaxed font-light text-gray-500">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, items }) => (
  <div className="p-12 bg-white border border-gray-100 hover:shadow-xl transition-all group duration-500 text-left">
    <div className="mb-8 group-hover:scale-110 transition-transform duration-500 inline-block text-slate-400 group-hover:text-[#8B7355]">{icon}</div>
    <h3 className="text-xl font-bold mb-8 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm font-light flex items-center space-x-3 text-gray-500">
          <ChevronRight size={14} style={{ color: COLORS.bronzeAccent }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MiniProof = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-xs text-gray-600 font-light">
    <div className="shrink-0" style={{ color: COLORS.bronzeAccent }}>{icon}</div>
    <span>{label}</span>
  </div>
);

const ScenarioCard = ({ icon, title, desc }) => (
  <div className="p-5 bg-white border border-gray-100 hover:shadow-md transition-all rounded-sm text-left">
    <div className="flex items-start gap-4">
      <div className="mt-0.5 shrink-0" style={{ color: COLORS.bronzeAccent }}>{icon}</div>
      <div>
        <div className="text-sm font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</div>
        <div className="mt-1 text-sm font-light text-gray-500 leading-snug">{desc}</div>
      </div>
    </div>
  </div>
);

const HowStep = ({ n, title, desc }) => (
  <div className="bg-white border border-gray-100 p-8 rounded-sm hover:shadow-md transition-all text-left">
    <div className="text-4xl font-extralight mb-5 text-gray-300">{n}</div>
    <div className="text-sm font-bold uppercase tracking-tight" style={{ color: COLORS.cedarGreen }}>{title}</div>
    <div className="mt-2 text-sm font-light text-gray-500 leading-relaxed">{desc}</div>
  </div>
);

const EngagementModel = ({ title, desc }) => (
  <div className="p-10 bg-white border-t-2 shadow-sm h-full text-left" style={{ borderTopColor: COLORS.bronzeAccent }}>
    <h4 className="font-bold mb-4 text-lg tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h4>
    <p className="text-base leading-relaxed font-light text-gray-500 italic">{desc}</p>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="flex space-x-8 text-left">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-bold mb-3 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h4>
      <p className="text-base leading-relaxed font-light text-gray-500">{desc}</p>
    </div>
  </div>
);

const ListItem = ({ title, desc }) => (
  <li className="space-y-2 text-slate-600 font-light text-left">
    <span className="text-[10px] font-bold tracking-[0.3em] uppercase block text-[#0A140D]" style={{ color: COLORS.cedarGreen }}>{title}</span>
    <p className="text-sm leading-relaxed">{desc}</p>
  </li>
);

const VettingItem = ({ title, desc }) => (
  <div className="flex space-x-6 text-left">
    <div className="h-4 w-[1px] mt-2 bg-[#8B7355] shrink-0" />
    <div>
      <h6 className="font-bold text-white text-lg mb-2 tracking-tight uppercase">{title}</h6>
      <p className="text-gray-500 font-light text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CheckItem = ({ text, light = false }) => (
  <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: light ? 'white' : COLORS.cedarGreen }}>
    <CheckCircle2 size={18} style={{ color: COLORS.bronzeAccent }} />
    <span>{text}</span>
  </div>
);

const Benefit = ({ title, desc }) => (
  <div className="bg-white p-10 border-t border-gray-100 shadow-sm hover:shadow-md transition-all h-full text-left">
    <h4 className="font-bold mb-4 text-sm md:text-base leading-snug tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h4>
    <p className="text-xs md:text-sm leading-relaxed italic font-light text-gray-400">{desc}</p>
  </div>
);

const InputWrapper = ({ label, children }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A140D]">{label}</label>
    {children}
  </div>
);

const FitItem = ({ text }) => (
  <li className="flex items-start space-x-3 text-[#065F46]">
    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
    <span className="text-sm font-light text-gray-600 leading-relaxed">{text}</span>
  </li>
);

const NotFitItem = ({ text }) => (
  <li className="flex items-start space-x-3 text-[#991B1B]">
    <XCircle size={18} className="mt-0.5 shrink-0" />
    <span className="text-sm font-light text-gray-600 leading-relaxed">{text}</span>
  </li>
);

const ExpectationItem = ({ text }) => (
  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
    <div className="w-1 h-1 rounded-full bg-[#8B7355]" />
    <span className="text-sm font-light text-gray-600">{text}</span>
  </div>
);

const ProcessStep = ({ n, icon, text }) => (
  <div className="flex flex-col items-center text-center space-y-4 group">
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none">{n}</span>
      <div className="w-10 h-10 rounded-full border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] transition-all group-hover:border-[#8B7355]">
        {icon}
      </div>
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default App;
