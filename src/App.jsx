import React, { useState, useEffect } from 'react';
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
  ShieldAlert,
  Paperclip
} from 'lucide-react';

// Refined Executive Color Palette
const COLORS = {
  cedarGreen: '#0A140D',
  cedarGreenHover: '#142118',
  slateGray: '#374151',
  neutralBg: '#FBFBF9',
  stoneBg: '#F2F2F0',
  bronzeAccent: '#8B7355',
  bronzeDark: '#A38A6A',
  bronzeOnLight: '#7A6548',
  white: '#FFFFFF',
  border: '#E5E7EB'
};

const Logo = ({ isFooter = false, isMobileNav = false }) => {
  const src = (isFooter || isMobileNav) ? "/cedar_lockup_white.png?v=2" : "/cedar_lockup_black.png?v=2";
  let className = "select-none block";
  if (isFooter) {
    className += " w-56 md:w-full md:max-h-12 h-auto";
  } else if (isMobileNav) {
    className += " w-56 h-auto";
  } else {
    className += " h-8 md:h-10 w-auto";
  }
  return <img src={src} alt="Cedar Infrastructure Group" className={className} />;
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'services', 'why-cedar', 'engineers', 'contact', 'email-policy', 'partners'];
    return validPages.includes(hash) ? hash : 'home';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageTitles = { home: 'Home', services: 'Services', 'why-cedar': 'Why Cedar', engineers: 'Join Cedar', contact: 'Contact', 'email-policy': 'Email Policy', partners: 'Channel Partner Brief' };

  useEffect(() => {
    document.title = `${pageTitles[currentPage] || 'Home'} - Cedar Infrastructure Group`;
  }, [currentPage]);

  useEffect(() => {
    const META_ID = 'cedar-robots-noindex';
    const unlisted = currentPage === 'partners';
    let tag = document.getElementById(META_ID);
    if (unlisted) {
      if (!tag) {
        tag = document.createElement('meta');
        tag.id = META_ID;
        tag.name = 'robots';
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', 'noindex, nofollow');
    } else if (tag) {
      tag.remove();
    }
  }, [currentPage]);

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => {
        setCurrentPage(id);
        setIsMenuOpen(false);
        window.location.hash = id === 'home' ? '' : id;
        window.scrollTo(0, 0);
      }}
      aria-current={currentPage === id ? 'page' : undefined}
      className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 rounded-sm ${
        currentPage === id ? 'text-[#7A6548] underline underline-offset-4 decoration-[#8B7355]' : 'text-[#374151] hover:text-[#0A140D]'
      }`}
    >
      {label}
    </button>
  );

  const mainRef = React.useRef(null);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo(0, 0);
    setTimeout(() => mainRef.current?.focus(), 100);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#8B7355] selection:text-white" style={{ backgroundColor: COLORS.neutralBg }}>
      {/* Skip Navigation */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:shadow-lg">
        Skip to main content
      </a>

      {/* Desktop Nav */}
      <nav aria-label="Main navigation" className="sticky top-0 z-50 hidden md:block bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <button className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 rounded-sm" onClick={() => handlePageChange('home')} aria-label="Cedar Infrastructure Group - Home">
            <Logo />
          </button>
          <div className="flex items-center space-x-8">
            <NavLink id="home" label="Home" />
            <NavLink id="services" label="Services" />
            <NavLink id="why-cedar" label="Why Cedar" />
            <NavLink id="engineers" label="Join Cedar" />
            <NavLink id="contact" label="Contact" />
            <div className="h-6 w-px bg-gray-200 ml-2" aria-hidden="true"></div>
            <a
              href="https://www.linkedin.com/company/cedar-infrastructure-group/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cedar Infrastructure Group on LinkedIn (opens in new tab)"
              className="text-[#8B7355] hover:text-[#0A140D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 rounded-sm"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav aria-label="Mobile navigation" className="sticky top-0 z-50 md:hidden" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="px-4 h-16 flex items-center justify-between">
          <button className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm" onClick={() => handlePageChange('home')} aria-label="Cedar Infrastructure Group - Home">
            <Logo isMobileNav />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm p-1">
            {isMenuOpen ? <X size={24} color="#fff" aria-hidden="true" /> : <Menu size={24} color="#fff" aria-hidden="true" />}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="px-4 pb-6 flex flex-col space-y-4" style={{ backgroundColor: COLORS.cedarGreen }}>
            {['home','services','why-cedar','engineers','contact'].map(id => (
              <button key={id} onClick={() => { setCurrentPage(id); setIsMenuOpen(false); window.scrollTo(0,0); }}
                aria-current={currentPage === id ? 'page' : undefined}
                className={`text-sm font-medium tracking-widest uppercase text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm ${currentPage === id ? 'text-[#A38A6A] underline underline-offset-4 decoration-[#A38A6A]' : 'text-gray-300 hover:text-white'}`}>
                {id === 'home' ? 'Home' : id === 'services' ? 'Services' : id === 'why-cedar' ? 'Why Cedar' : id === 'engineers' ? 'Join Cedar' : 'Contact'}
              </button>
            ))}
            <div className="pt-2 flex items-center space-x-4 border-t border-white/10 mt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500" aria-hidden="true">Connect</span>
              <a href="https://www.linkedin.com/company/cedar-infrastructure-group/" aria-label="Cedar Infrastructure Group on LinkedIn (opens in new tab)" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm"><Linkedin size={20} aria-hidden="true" /></a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main id="main-content" ref={mainRef} tabIndex={-1} className="flex-grow focus:outline-none" role="main">
        {currentPage === 'home' && <HomePage setPage={handlePageChange} />}
        {currentPage === 'services' && <ServicesPage setPage={handlePageChange} />}
        {currentPage === 'why-cedar' && <WhyCedarPage />}
        {currentPage === 'engineers' && <EngineersPage setPage={handlePageChange} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'email-policy' && <EmailPolicyPage />}
        {currentPage === 'partners' && <PartnersPage />}
      </main>

      {/* Footer */}
      <footer className="pt-10 pb-12 md:py-20 px-4 md:px-6 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="space-y-3 min-w-0">
            <Logo isFooter />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Curated infrastructure capacity for enterprise IT, defense, government, VAR, and MSP delivery teams. Every specialist is technically vetted for scope, environment, and operational risk.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeDark }}>Navigation</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300 font-light">
              <button onClick={() => handlePageChange('services')} className="hover:text-white text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">Services</button>
              <button onClick={() => handlePageChange('why-cedar')} className="hover:text-white text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">Why Cedar</button>
              <button onClick={() => handlePageChange('contact')} className="hover:text-white text-left transition-colors font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">Request Capacity</button>
              <button onClick={() => handlePageChange('engineers')} className="hover:text-white text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">Join Cedar</button>
            </div>
          </nav>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeDark }}>Client Operations</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300 font-light">
              <div className="flex items-center space-x-3">
                <Mail size={14} className="opacity-60" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                <a href="mailto:projects@hirecedar.com" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">projects@hirecedar.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard size={14} className="opacity-60" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                <a href="mailto:billing@hirecedar.com" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm">billing@hirecedar.com</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeDark }}>Working For Cedar</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <p className="text-gray-400 text-xs italic font-light leading-relaxed">
                Independent infrastructure specialists can submit credentials for review through <button onClick={() => handlePageChange('engineers')} className="text-[#A38A6A] font-bold hover:underline uppercase">JOIN CEDAR</button>.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-[10px] text-gray-400 uppercase tracking-widest font-light flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2">
          <div>© {new Date().getFullYear()} Cedar Infrastructure Group. All Rights Reserved.</div>
          <div>CAGE: 1APC0 &nbsp;|&nbsp; UEI: KWXKBP6CNVJ9 &nbsp;|&nbsp; SAM.gov Registered</div>
          <div>A subsidiary of <a href="https://thekingstree.com" target="_blank" rel="noopener noreferrer" aria-label="The King's Tree Holdings, Ltd Co (opens in new tab)" className="text-gray-400 hover:text-white transition-colors">The King's Tree Holdings, Ltd Co</a></div>
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
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} aria-hidden="true" />
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
            Built for enterprise IT teams, CIO offices, defense and government agencies, VAR practices, and MSP delivery organizations.
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
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block" style={{ color: COLORS.bronzeOnLight }}>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>
                How Engagement Works
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: COLORS.cedarGreen }}>
                Three steps from scope to deployment.
              </h3>
            </div>
            <button
              onClick={() => { setPage('contact'); }}
              className="hidden md:inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] group"
              style={{ color: COLORS.bronzeOnLight }}
            >
              Request Capacity <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} aria-hidden="true" />
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
          <div className="h-[2px] w-12" style={{ backgroundColor: COLORS.bronzeAccent }} aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<Server size={32} />} title="Systems Engineering" items={["Senior compute specialists for virtualization and platform stability", "Hardened server OS execution in regulated, high-control, and classified environments", "High-availability architecture support and zero-drift operational controls"]} />
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
                <Terminal size={16} style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                <span>Peer-led technical review</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserCheck size={16} style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                <span>Delivery maturity validation</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#F2F2F0] p-10 border border-gray-200 rounded-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-[#7A6548]">Strategic Outcome</h4>
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
          <h3 className="text-2xl md:text-3xl font-extralight italic leading-tight text-gray-500 uppercase tracking-tighter">
            The Perspective of a CIO. <br />The Discipline of an Architect.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-light">
            <p>Cedar Infrastructure Group operates as a private infrastructure capacity advisory and deployment partner with executive-level technical oversight.</p>
            <p>Finding the right specialist under active deadlines is often the highest operational risk inside infrastructure programs. Cedar removes friction between procurement and execution by pre-validating technical depth and delivery readiness.</p>
          </div>

          <div className="bg-[#F2F2F0] p-10 border border-gray-200 rounded-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border-b border-gray-300 pb-2 text-[#0A140D]">Methodology</h4>
            <ul className="grid grid-cols-1 gap-y-6 list-none p-0 m-0">
              <ListItem title="Executive Governance" desc="Engagements are governed by operating scope and delivery impact." />
              <ListItem title="Risk Calibration" desc="Specialists are matched to mission-critical production realities." />
              <ListItem title="Operational Review" desc="Technical depth and documentation discipline are validated early." />
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* 5) ANCHOR BAND - DARK */}
    <section className="py-12 bg-[#0A140D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <ShieldAlert size={24} style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
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
          Cedar provides enterprise, defense, government, and VAR organizations with disciplined infrastructure execution capacity.
          We calibrate specialists to executive standards so delivery stays stable, accountable, and commercially sound.
        </p>
      </div>
    </section>
  </div>
);

const EngineersPage = ({ setPage }) => {
  const [intakeFiles, setIntakeFiles] = useState([]);
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);
  const [intakeSubmitting, setIntakeSubmitting] = useState(false);
  const [intakeError, setIntakeError] = useState('');
  const intakeConfirmRef = React.useRef(null);

  const handleIntakeSubmit = async (e) => {
    e.preventDefault();
    setIntakeSubmitting(true);
    setIntakeError('');
    try {
      const fd = new FormData(e.target);
      const resp = await fetch('/api/intake', { method: 'POST', body: fd });
      const data = await resp.json();
      if (data.success) {
        setIntakeSubmitted(true);
        setIntakeFiles([]);
        e.target.reset();
        setTimeout(() => intakeConfirmRef.current?.focus(), 100);
      } else {
        setIntakeError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setIntakeError('Network error. Please try again.');
    } finally {
      setIntakeSubmitting(false);
    }
  };

  return (
  <div className="py-24 px-6 animate-in slide-in-from-bottom-4 duration-500">
    <div className="max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Join Cedar</h2>
        <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: COLORS.slateGray }}>
          Cedar works with independent mid-to-senior infrastructure specialists who can deliver in enterprise, defense, government, and VAR environments with minimal supervision.
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
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4" style={{ color: COLORS.bronzeOnLight }}>Reach and Capacity</h3>
            <p className="text-xl font-extralight leading-relaxed text-gray-500 italic">
              Cedar specialists support enterprise IT teams across defense, government, healthcare, financial services, higher education,
              manufacturing, and national VAR delivery organizations.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-md rounded-sm sticky top-24">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#7A6548]">Engagement Structure</h3>
            <ul className="space-y-8 text-sm font-light text-gray-500">
              <li className="flex items-start space-x-3">
                <Globe size={18} className="text-gray-300 mt-0.5 shrink-0" aria-hidden="true" />
                <span>United States-based delivery environments only</span>
              </li>
              <li className="flex items-start space-x-3">
                <FileText size={18} className="text-gray-300 mt-0.5 shrink-0" aria-hidden="true" />
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-[#0A140D]">1099 Independent Contractor (Individual)</span>
                  <span className="font-bold text-[#0A140D]">Independent B2B (Individual LLC / S-Corp / C-Corp)</span>
                  <p className="text-[11px] leading-relaxed text-gray-500 mt-1">
                    Note: Cedar engages individuals directly to preserve end-to-end delivery quality. Multi-layer subcontracting firms are outside our operating model.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gray-300 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Minimum engagement sizes typically 300+ hours</span>
              </li>
              <li className="flex items-start space-x-3">
                <Target size={18} className="text-gray-300 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Multi-month implementation focus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specialist Intake Form */}
      <div className="max-w-4xl mx-auto mt-24 text-left">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest" style={{ color: COLORS.cedarGreen }}>Specialist Intake</h3>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Submissions are reviewed for technical depth, delivery maturity, and alignment with active enterprise, defense, government, and VAR initiatives.
            Qualified specialists are contacted when scope alignment is confirmed.
          </p>
        </div>

        <form className="space-y-12" onSubmit={handleIntakeSubmit}>
          {/* PROFILE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <InputWrapper label="Full Name">
                <input required name="specialistname" type="text" autoComplete="name" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="First Last" />
              </InputWrapper>
              <InputWrapper label="Email">
                <input required name="specialistemail" type="email" autoComplete="email" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="email@domain.com" />
              </InputWrapper>
              <InputWrapper label="Phone (Optional)">
                <input name="specialistphone" type="tel" autoComplete="tel" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="(555) 555-5555" />
              </InputWrapper>
              <InputWrapper label="Location">
                <input required name="specialistlocation" type="text" autoComplete="address-level2" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="City, State" />
              </InputWrapper>
              <InputWrapper label="LinkedIn Profile (Optional)">
                <input name="linkedin" type="url" autoComplete="url" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="https://linkedin.com/in/..." />
              </InputWrapper>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <InputWrapper label="Primary Discipline">
                <select required name="discipline" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Discipline</option>
                  <option>Network Engineering</option>
                  <option>Systems Engineering</option>
                  <option>Cloud Engineering (Azure)</option>
                  <option>Cloud Engineering (AWS)</option>
                  <option>Security Engineering</option>
                  <option>Hybrid / Multi-Discipline</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Years of Infrastructure Experience">
                <select required name="experience" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Range</option>
                  <option>5-7 Years</option>
                  <option>8-12 Years</option>
                  <option>13-18 Years</option>
                  <option>18+ Years</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Engagement Type">
                <select required name="engagementtype" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Structure</option>
                  <option>1099 Independent Contractor</option>
                  <option>LLC / S-Corp / C-Corp</option>
                </select>
              </InputWrapper>
            </div>

            <fieldset className="mt-8">
              <legend className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A140D] mb-2">Certifications (Select All That Apply)</legend>
              <div className="flex flex-wrap gap-4 pt-2">
                {['CCNA', 'CCNP', 'CCIE', 'MCSE', 'Azure Solutions Architect', 'AWS Solutions Architect', 'VCP', 'CISSP', 'CompTIA Network+', 'CompTIA Security+', 'ITIL'].map(cert => (
                  <label key={cert} className="flex items-center space-x-3 text-sm font-light text-gray-600 cursor-pointer border border-gray-100 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <input type="checkbox" name="cert" value={cert} className="w-4 h-4 accent-[#8B7355]" />
                    <span>{cert}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="mt-8">
              <InputWrapper label="Other Certifications (Optional)">
                <input name="othercerts" type="text" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="JNCIA, Fortinet NSE, Palo Alto PCNSA, etc." />
              </InputWrapper>
            </div>
            <div className="mt-8">
              <InputWrapper label="Primary Platforms and Stack">
                <input required name="specialiststack" type="text" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Cisco, Fortinet, VMware, Azure, AWS, Aruba, Palo Alto, etc." />
              </InputWrapper>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
              <InputWrapper label="Available Start">
                <select required name="availability" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Window</option>
                  <option>Immediately</option>
                  <option>Within 2 Weeks</option>
                  <option>Within 30 Days</option>
                  <option>Within 60 Days</option>
                  <option>Open / No Active Deadline</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Weekly Capacity">
                <select required name="weeklycapacity" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Hours</option>
                  <option>20 Hours</option>
                  <option>30 Hours</option>
                  <option>40 Hours</option>
                  <option>Flexible</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Work Mode">
                <select required name="specialistworkmode" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Mode</option>
                  <option>Remote Only</option>
                  <option>Remote + Travel When Required</option>
                </select>
              </InputWrapper>
            </div>
          </div>

          {/* RESUME / CV UPLOAD */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.bronzeOnLight }}>Resume / CV</h3>
            <p id="resume-upload-desc" className="text-xs text-gray-500 font-light mb-6">Attach your resume, CV, or any supporting documents. Multiple files accepted. PDF, DOC, DOCX format preferred.</p>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-sm cursor-pointer hover:border-[#8B7355] hover:bg-gray-50 transition-all focus-within:ring-2 focus-within:ring-[#8B7355] focus-within:ring-offset-2">
              <input
                type="file"
                name="resume"
                multiple
                accept=".pdf,.doc,.docx,.txt,.rtf"
                className="sr-only"
                aria-label="Upload resume or CV files"
                aria-describedby="resume-upload-desc"
                onChange={(e) => setIntakeFiles(Array.from(e.target.files))}
              />
              <FileText size={28} className="text-gray-300 mb-3" aria-hidden="true" />
              {intakeFiles.length === 0 ? (
                <>
                  <span className="text-sm font-light text-gray-500">Click to select files</span>
                  <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">PDF, DOC, DOCX</span>
                </>
              ) : (
                <div className="text-center">
                  <span className="text-sm font-medium" style={{ color: COLORS.cedarGreen }}>{intakeFiles.length} file{intakeFiles.length > 1 ? 's' : ''} selected</span>
                  <div className="mt-2 space-y-1">
                    {intakeFiles.map((f, i) => (
                      <p key={i} className="text-xs text-gray-500 font-light">{f.name}</p>
                    ))}
                  </div>
                </div>
              )}
            </label>
          </div>

          {/* ADDITIONAL NOTES */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Additional Notes (Optional)</h3>
            <textarea name="specialistnotes" aria-label="Additional notes" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors h-24 resize-none bg-transparent font-light" placeholder="Anything else Cedar should know about your background, preferences, or availability." />
          </div>

          {/* SUBMIT */}
          <div className="space-y-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Cedar aligns with mid-to-senior specialists operating at professional market standards.
            </p>

            {intakeError && (
              <div role="alert" className="text-center p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-xs font-medium text-red-800">{intakeError}</p>
              </div>
            )}

            {intakeSubmitted ? (
              <div ref={intakeConfirmRef} tabIndex={-1} role="status" aria-live="polite" className="text-center p-6 bg-green-50 border border-green-200 rounded-sm focus:outline-none">
                <p className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Submission Received</p>
                <p className="text-xs font-light text-green-700">
                  Thank you. Cedar will review your credentials and contact you when scope alignment is confirmed.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={intakeSubmitting}
                className="w-full text-white py-6 text-sm font-bold uppercase tracking-[0.4em] transition-all shadow-xl hover:bg-black disabled:opacity-50 disabled:cursor-wait"
                style={{ backgroundColor: COLORS.cedarGreen }}
              >
                {intakeSubmitting ? 'Submitting...' : 'Submit Credentials'}
              </button>
            )}
            <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto text-gray-500 text-center">
              By submitting, you consent to Cedar Infrastructure Group storing your data for future scope alignment.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

const ContactPage = () => {
  const [userRole, setUserRole] = useState('');
  const [contactFiles, setContactFiles] = useState([]);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactError, setContactError] = useState('');
  const contactConfirmRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    setContactError('');
    try {
      const fd = new FormData(e.target);
      const resp = await fetch('/api/contact', { method: 'POST', body: fd });
      const data = await resp.json();
      if (data.success) {
        setContactSubmitted(true);
        setContactFiles([]);
        e.target.reset();
        setTimeout(() => contactConfirmRef.current?.focus(), 100);
      } else {
        setContactError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setContactError('Network error. Please try again.');
    } finally {
      setContactSubmitting(false);
    }
  };

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

        <form className="space-y-12" onSubmit={handleSubmit}>
          {/* SECTION 1 - ORGANIZATION PROFILE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Section 1 - Organization Profile</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              <InputWrapper label="You Are">
                <select
                  required
                  className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none cursor-pointer"
                  name="role"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="direct">Enterprise IT / End Client</option>
                  <option value="government">Defense / Government Agency</option>
                  <option value="channel">VAR / MSP (delivering for a client)</option>
                </select>
              </InputWrapper>
              <div className="hidden md:block"></div>

              <InputWrapper label="Full Name">
                <input required name="fullname" type="text" autoComplete="name" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="First Last" />
              </InputWrapper>
              <InputWrapper label="Work Email">
                <input required name="workemail" type="email" autoComplete="work email" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="email@company.com" />
              </InputWrapper>
              <InputWrapper label="Requesting Organization">
                <input required name="org" type="text" autoComplete="organization" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Your Firm Name" />
              </InputWrapper>
              <InputWrapper label="Requesting HQ Location">
                <input required name="hqlocation" type="text" autoComplete="address-level2" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="City, State" />
              </InputWrapper>
              <InputWrapper label="Organization Type">
                <select required name="orgtype" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Category</option>
                  <option>Enterprise</option>
                  <option>Defense / DoD</option>
                  <option>Federal Government</option>
                  <option>State / Local Government</option>
                  <option>VAR</option>
                  <option>MSP</option>
                  <option>Technology Vendor</option>
                  <option>Professional Services</option>
                  <option>Other</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Engagement Working Time Zone">
                <select required name="timezone" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
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
                    <input required name="endclientorg" type="text" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Client Company Name" />
                  </InputWrapper>
                  <InputWrapper label="End Client HQ Location">
                    <input required name="endclienthq" type="text" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="City, State" />
                  </InputWrapper>
                  <InputWrapper label="End Client Industry">
                    <select required name="endclientindustry" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                      <option value="">Select Client Industry</option>
                      <option>Defense / DoD</option>
                      <option>Federal Government</option>
                      <option>State / Local Government</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Financial Services</option>
                      <option>Manufacturing</option>
                      <option>SaaS / Technology</option>
                      <option>Other</option>
                    </select>
                  </InputWrapper>
                  <InputWrapper label="End Client Working Time Zone (If Different)">
                    <select name="endclienttz" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
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

            <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-500 font-medium">Cedar supports United States-based delivery environments only.</p>
          </div>

          {/* SECTION 2 - ENGAGEMENT STRUCTURE */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Section 2 - Engagement Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <InputWrapper label="Engagement Model">
                <select required name="model" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Model</option>
                  <option>Project Delivery Capacity (Defined Scope and Outcome)</option>
                  <option>Managed Capacity (Time-Based Allocation)</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Start Window">
                <select required name="startwindow" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Availability Needed</option>
                  <option>0-30 Days</option>
                  <option>30-60 Days</option>
                  <option>60-90 Days</option>
                  <option>Planning Stage</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Contract Duration">
                <select required name="duration" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Term</option>
                  <option>90 Days</option>
                  <option>120 Days</option>
                  <option>6 Months</option>
                  <option>12+ Months</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Weekly Allocation">
                <select required name="weeklyhours" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Capacity</option>
                  <option>20 Hours</option>
                  <option>30 Hours</option>
                  <option>40 Hours</option>
                  <option>Variable</option>
                </select>
              </InputWrapper>
              <InputWrapper label="Work Mode">
                <select required name="workmode" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                  <option value="">Select Mode</option>
                  <option>Remote Primary (Travel as Required - U.S. only)</option>
                  <option>Hybrid (U.S. only)</option>
                </select>
                <p className="mt-2 text-[10px] text-gray-500 font-medium">Cedar specialists operate remotely by default, with United States travel supported when required by scope.</p>
              </InputWrapper>
            </div>
          </div>

          {/* SECTION 3 - SCOPE & COMMERCIAL ALIGNMENT */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: COLORS.bronzeOnLight }}>Section 3 - Scope and Commercial Alignment</h3>
            <div className="space-y-10">
              <fieldset>
                <legend className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A140D] mb-2">Technical Domain</legend>
                <div className="flex flex-wrap gap-4 pt-2">
                  {['Network', 'Systems', 'Cloud', 'Security', 'Hybrid Infrastructure'].map(domain => (
                    <label key={domain} className="flex items-center space-x-3 text-sm font-light text-gray-600 cursor-pointer border border-gray-100 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <input type="checkbox" name="domain" value={domain} className="w-4 h-4 accent-[#8B7355]" />
                      <span>{domain}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <InputWrapper label="Primary Platforms and Stack">
                <input required name="platforms" type="text" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light" placeholder="Cisco, Fortinet, VMware, Azure, AWS, Aruba, etc." />
              </InputWrapper>
              <InputWrapper label="Definition of Success">
                <textarea required name="success" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors h-24 resize-none bg-transparent font-light" placeholder="What does successful completion look like?" />
              </InputWrapper>
              <InputWrapper label="Constraints and Risk Factors">
                <textarea required name="constraints" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors h-24 resize-none bg-transparent font-light" placeholder="Deadlines, maintenance windows, compliance, change control, outage sensitivity." />
              </InputWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <InputWrapper label="Budget Posture">
                  <select required name="budgetposture" className="w-full border-b border-gray-400 py-2.5 focus:border-[#0A140D] outline-none transition-colors bg-transparent font-light appearance-none">
                    <option value="">Select Posture</option>
                    <option>Market-Competitive (Mid-Level)</option>
                    <option>Market-Competitive (Senior-Level)</option>
                    <option>Premium / Escalation-Sensitive</option>
                  </select>
                </InputWrapper>
                <InputWrapper label="Budget Band (Optional)">
                  <div className="border-b border-gray-200 py-2.5">
                    <input name="budgetband" type="text" aria-label="Budget band" className="w-full outline-none transition-colors bg-transparent font-light" placeholder="Share your target budget posture" />
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

          {/* ATTACHMENTS (OPTIONAL) */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.bronzeOnLight }}>Attachments (Optional)</h3>
            <p id="attachment-upload-desc" className="text-xs text-gray-500 font-light mb-6">SOWs, network diagrams, scope documents, or other supporting materials. Max 3 files, 5MB each. PDF, DOC, DOCX, XLS, PPT, CSV, PNG, JPG.</p>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-sm cursor-pointer hover:border-[#8B7355] hover:bg-gray-50 transition-all focus-within:ring-2 focus-within:ring-[#8B7355] focus-within:ring-offset-2">
              <input
                type="file"
                name="attachment"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.png,.jpg,.jpeg"
                className="sr-only"
                aria-label="Attach supporting documents"
                aria-describedby="attachment-upload-desc"
                onChange={(e) => setContactFiles(Array.from(e.target.files))}
              />
              <Paperclip size={24} className="text-gray-300 mb-2" aria-hidden="true" />
              {contactFiles.length === 0 ? (
                <span className="text-sm font-light text-gray-500">Click to attach files</span>
              ) : (
                <div className="text-center">
                  <span className="text-sm font-medium" style={{ color: COLORS.cedarGreen }}>{contactFiles.length} file{contactFiles.length > 1 ? 's' : ''} selected</span>
                  <div className="mt-1 space-y-0.5">
                    {contactFiles.map((f, i) => (
                      <p key={i} className="text-xs text-gray-500 font-light">{f.name}</p>
                    ))}
                  </div>
                </div>
              )}
            </label>
          </div>

          <div className="space-y-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Cedar reviews complete requests with defined scope, timeline, and commercial alignment.
            </p>

            {contactError && (
              <div role="alert" className="text-center p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-xs font-medium text-red-800">{contactError}</p>
              </div>
            )}

            {contactSubmitted ? (
              <div ref={contactConfirmRef} tabIndex={-1} role="status" aria-live="polite" className="text-center p-6 bg-green-50 border border-green-200 rounded-sm focus:outline-none">
                <p className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Request Received</p>
                <p className="text-xs font-light text-green-700">
                  Cedar will review your scope, timeline, and commercial alignment. You will be contacted when next steps are confirmed.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full text-white py-6 text-sm font-bold uppercase tracking-[0.4em] transition-all shadow-xl hover:bg-black disabled:opacity-50 disabled:cursor-wait"
                style={{ backgroundColor: COLORS.cedarGreen }}
              >
                {contactSubmitting ? 'Submitting...' : 'Submit Capacity Request'}
              </button>
            )}

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
    <div className="text-5xl font-extralight mb-6 text-gray-500 group-hover:text-[#8B7355] transition-colors duration-500" aria-hidden="true">{number}</div>
    <h2 className="text-lg font-bold mb-4 tracking-widest uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h2>
    <p className="text-base leading-relaxed font-light text-gray-500">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, items }) => (
  <div className="p-12 bg-white border border-gray-100 hover:shadow-xl transition-all group duration-500 text-left">
    <div className="mb-8 group-hover:scale-110 transition-transform duration-500 inline-block text-slate-400 group-hover:text-[#8B7355]" aria-hidden="true">{icon}</div>
    <h3 className="text-xl font-bold mb-8 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm font-light flex items-center space-x-3 text-gray-500">
          <ChevronRight size={14} style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MiniProof = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-xs text-gray-600 font-light">
    <div className="shrink-0" style={{ color: COLORS.bronzeAccent }} aria-hidden="true">{icon}</div>
    <span>{label}</span>
  </div>
);

const ScenarioCard = ({ icon, title, desc }) => (
  <div className="p-5 bg-white border border-gray-100 hover:shadow-md transition-all rounded-sm text-left">
    <div className="flex items-start gap-4">
      <div className="mt-0.5 shrink-0" style={{ color: COLORS.bronzeAccent }} aria-hidden="true">{icon}</div>
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
    <h3 className="font-bold mb-4 text-lg tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <p className="text-base leading-relaxed font-light text-gray-500 italic">{desc}</p>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="flex space-x-8 text-left">
    <div className="shrink-0 mt-1" aria-hidden="true">{icon}</div>
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
    <CheckCircle2 size={18} style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
    <span>{text}</span>
  </div>
);

const Benefit = ({ title, desc }) => (
  <div className="bg-white p-10 border-t border-gray-100 shadow-sm hover:shadow-md transition-all h-full text-left">
    <h3 className="font-bold mb-4 text-sm md:text-base leading-snug tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <p className="text-xs md:text-sm leading-relaxed italic font-light text-gray-500">{desc}</p>
  </div>
);

const InputWrapper = ({ label, children }) => {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A140D]">{label}</label>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && (child.type === 'input' || child.type === 'select' || child.type === 'textarea')) {
          return React.cloneElement(child, { id });
        }
        return child;
      })}
    </div>
  );
};

const FitItem = ({ text }) => (
  <li className="flex items-start space-x-3 text-[#065F46]">
    <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
    <span className="text-sm font-light text-gray-600 leading-relaxed">{text}</span>
  </li>
);

const NotFitItem = ({ text }) => (
  <li className="flex items-start space-x-3 text-[#991B1B]">
    <XCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
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
      <div className="w-10 h-10 rounded-full border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] transition-all group-hover:border-[#8B7355]" aria-hidden="true">
        {icon}
      </div>
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{text}</span>
  </div>
);

const EmailPolicyPage = () => (
  <div style={{ backgroundColor: COLORS.neutralBg }}>
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: COLORS.cedarGreen }}>
            Email Policy
          </h1>
          <div className="w-full h-0.5" style={{ backgroundColor: COLORS.bronzeAccent }} />
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed" style={{ color: COLORS.slateGray }}>
          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: COLORS.cedarGreen }}>Confidentiality Notice</h2>
            <p>
              This email and any attachments are intended solely for the use of the individual or entity to whom they are addressed. They may contain information that is confidential, privileged, or otherwise protected from disclosure under applicable law. If you are not the intended recipient, or the employee or agent responsible for delivering the message to the intended recipient, you are hereby notified that any dissemination, distribution, copying, or use of this communication or its contents is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: COLORS.cedarGreen }}>Received in Error</h2>
            <p>
              If you have received this communication in error, please notify the sender immediately by reply email and permanently delete the original message and all copies, including any attachments, from your system. No privilege or confidentiality is waived by any misdirected transmission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: COLORS.cedarGreen }}>No Liability</h2>
            <p>
              Cedar Infrastructure Group accepts no liability for any damage caused by any virus or other harmful code transmitted by this email, or for any errors or omissions in its content resulting from email transmission. Any views expressed in this message are those of the individual sender and may not represent the views of Cedar Infrastructure Group unless explicitly stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: COLORS.cedarGreen }}>No Contractual Obligation</h2>
            <p>
              Unless expressly stated otherwise, nothing in this email is intended to constitute a binding agreement or create any legal obligation on behalf of Cedar Infrastructure Group. Contractual commitments are made only through formally executed agreements.
            </p>
          </div>

          <div className="pt-4 border-t" style={{ borderColor: COLORS.border }}>
            <p className="text-sm" style={{ color: COLORS.slateGray }}>
              <strong style={{ color: COLORS.cedarGreen }}>Cedar Infrastructure Group</strong><br />
              <a href="mailto:projects@hirecedar.com" className="hover:underline" style={{ color: COLORS.bronzeOnLight }}>projects@hirecedar.com</a><br />
              <a href="https://hirecedar.com" className="hover:underline" style={{ color: COLORS.bronzeOnLight }}>hirecedar.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const PartnersPage = () => (
  <div style={{ backgroundColor: COLORS.neutralBg }}>
    {/* CONFIDENTIAL BANNER */}
    <div className="w-full text-white text-center py-2.5 px-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em]" style={{ backgroundColor: '#7F1D1D' }} role="alert">
      <ShieldAlert size={14} className="inline -mt-0.5 mr-2" aria-hidden="true" />
      Confidential — Internal Reference. Not for distribution to clients or prospects.
    </div>

    {/* HERO */}
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border" style={{ borderColor: '#7F1D1D', backgroundColor: '#7F1D1D10' }}>
          <ShieldAlert size={12} aria-hidden="true" style={{ color: '#7F1D1D' }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: '#7F1D1D' }}>Confidential</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-4" style={{ color: COLORS.bronzeOnLight }}>
          Internal Reference
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 leading-[1.05]" style={{ color: COLORS.cedarGreen }}>
          Channel Partner Brief
        </h1>
        <div className="h-[2px] w-16 mb-6" style={{ backgroundColor: COLORS.bronzeAccent }} aria-hidden="true" />
        <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
          For strategic relationships originating Cedar opportunities. Use this brief to recognize a Cedar deal in conversation, size it in your head, and hand it off cleanly. Do not forward to clients, prospects, or anyone outside the named channel relationship.
        </p>
      </div>
    </section>

    {/* WHAT CEDAR SELLS */}
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 uppercase" style={{ color: COLORS.cedarGreen }}>What Cedar Sells, in Plain English</h2>
        <div className="space-y-5 text-[15px] leading-relaxed font-light" style={{ color: COLORS.slateGray }}>
          <p>
            Cedar is an IT consulting services firm. We are working on relationships with vendors to start selling HPE Aruba, Palo Alto, and Fortinet to become a Value-Added Reseller (VAR). Companies hire us when they need senior technical people to do infrastructure work that their own internal IT team cannot do alone, either because they are too busy, do not have the right skills, are facing a deadline they cannot miss, or want to reset staffing needs after M&A.
          </p>
          <p>The kind of work Cedar does is the plumbing of corporate IT. Things like:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Setting up the network so all the office locations can talk to each other</li>
            <li>Building cloud environments (Microsoft Azure, Amazon AWS) so the business can run software without owning servers</li>
            <li>Replacing old servers with new ones and moving the data over without breaking anything</li>
            <li>Securing the network against hackers (firewalls, segmentation, identity controls)</li>
            <li>Sending people to physical office or data center locations to install or replace equipment</li>
            <li>Combining and/or replacing the IT systems of two companies after a merger or acquisition</li>
          </ul>
          <p>
            We do not do help desk, password resets, or printer support. We are not the people you call when your laptop breaks. We are the people you call when you have a deadline to migrate hundreds or thousands of servers or network switches and your internal team cannot get it done.
          </p>
        </div>
      </div>
    </section>

    {/* THE THREE THINGS */}
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>The Three Products</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>The Three Things Cedar Sells</h2>
          <p className="mt-4 text-[15px] leading-relaxed font-light" style={{ color: COLORS.slateGray }}>
            These are the three "products" Cedar offers. Knowing the difference helps you spot the right kind of deal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PartnerProduct
            n="01"
            title="Staff Augmentation"
            tagline="Renting one of our specialists to work alongside the client's internal team for the length of an engagement."
            body={[
              'The client tells us what skills they need (for example, a senior network engineer with Cisco and Palo Alto firewall experience). We provide a vetted specialist who shows up, embeds with their team, and works on whatever they need. The client pays an hourly rate. They get the skills they need without having to hire a full-time employee and without their internal HR team needing to vet someone with these skill sets.',
              'Engagements can run anywhere from a few months to multi-year for clients with sustained demand (private equity portfolios, large healthcare or manufacturing groups, federal subcontracts).'
            ]}
            cue={'"We need help, we just do not have the bench for this." "Our senior engineer just left and we have a project mid-flight." "We need to staff up for the next six months."'}
          />
          <PartnerProduct
            n="02"
            title="Project Implementation"
            tagline="Cedar owns the outcome and the deadline, not just the bodies."
            body={[
              'The client gives us a defined goal (for example, migrate 250 retail sites to a new network). We scope it, price it, staff it, run it, and deliver it. The client buys the outcome. They do not have to manage the people doing the work, just the relationship with us.'
            ]}
            cue={'"We need this done by Q3." "We are doing a network refresh across all our sites." "We need someone to run this migration end to end."'}
          />
          <PartnerProduct
            n="03"
            title="Advisory"
            tagline="Senior technical leadership delivered on a retainer or hourly basis."
            body={[
              'For companies that need an experienced IT executive or architect at the table but do not need (or cannot afford) a full-time hire. Comes in two flavors:'
            ]}
            sub={[
              { label: 'Fractional CIO', text: 'A part-time senior IT executive who owns IT strategy, vendor decisions, budget posture, and executive technical communication. Common for small and mid-market companies, and for private equity portfolio companies during the integration phase after an acquisition.' },
              { label: 'Infrastructure Architect Advisory', text: 'A senior architect engaged to validate technical decisions, review vendor proposals, design target-state environments, or backstop an internal team on a complex program.' }
            ]}
            cue={'"We do not have a CIO and we are out of our depth." "We need someone senior to validate what our vendor is telling us." "We just acquired a company and need leadership cover during integration." "Our internal team is good but we need someone with more scars on a transformation this size."'}
          />
        </div>
      </div>
    </section>

    {/* RATE CARD */}
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>Pricing</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Cedar's Rate Card</h2>
          <p className="mt-4 text-[15px] leading-relaxed font-light max-w-3xl" style={{ color: COLORS.slateGray }}>
            These are the hourly rates Cedar charges the client. Cedar covers payroll, insurance, replacement protection, and project oversight. The client pays one invoice.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]" style={{ color: COLORS.slateGray }}>
            <thead>
              <tr className="border-b-2" style={{ borderColor: COLORS.cedarGreen }}>
                <th className="py-3 pr-4 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.cedarGreen }}>Role</th>
                <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.cedarGreen }}>What They Do</th>
                <th className="py-3 pl-4 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap" style={{ color: COLORS.cedarGreen }}>Bill Rate</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <RateRow role="Field Services Technician (FST)" what="Goes on-site to install, replace, or troubleshoot physical equipment. The 'hands and feet' of any project. Often called 'Smart Hands.'" rate="$60 to $75 / hour" />
              <RateRow role="Lead Field Services Technician (Lead FST)" what="Same as above but runs the on-site crew and reports back to project leadership. On-site work is always sold with a Lead FST and FSTs added as needed depending on volume and scope." rate="$75 to $95 / hour" />
              <RateRow role="Implementation Engineer" what="Mid-level technical specialist who configures network equipment, builds servers, sets up cloud environments. Most 'doing the work' hours come from this role." rate="$95 to $150 / hour" />
              <RateRow role="Senior Engineer / Architect" what="Senior specialist who designs the solution and owns the technical decisions. Smaller engagements where someone has to both design and build." rate="$135 to $200 / hour" />
              <RateRow role="Technical Project Manager" what="Runs the schedule, the budget, and the customer status updates. Keeps the engagement on track." rate="$75 to $135 / hour" />
              <RateRow role="Fractional CIO / IT Leadership Advisor" what="Part-time senior IT executive for small and mid-market companies that cannot afford a full-time CIO." rate="$7,500 to $15,000 / month retainer" />
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#F2F2F0] border border-gray-200 p-6 rounded-sm">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.bronzeOnLight }}>Travel and On-Site Work</h4>
            <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              Cedar can deploy people anywhere in the continental United States. When travel is required, Cedar bills the client for reasonable expenses (flights, lodging, rental car or ride share) plus $50 per diem for overnight stays. Pricing varies depending on the metro and duration of stay, but typically $1,800 to $3,000 pass-through cost per technician.
            </p>
          </div>
          <div className="border-l-4 bg-white p-6 rounded-sm shadow-sm" style={{ borderColor: COLORS.bronzeAccent }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.cedarGreen }}>One Important Rule</h4>
            <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              Cedar does not do one-off dispatch. Every engagement has a minimum of about 300 hours of work, which usually translates to a few months of part-time engagement or one to two months of full-time. If a prospect says "I just need someone for a day," that is not a Cedar deal. Pass.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* DEAL SIZING */}
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>Deal Sizing</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>What a Cedar Deal Typically Looks Like in Dollars</h2>
          <p className="mt-4 text-[15px] leading-relaxed font-light max-w-3xl" style={{ color: COLORS.slateGray }}>
            Use these to size up an opportunity in your head when you are talking to a prospect. The commission column reflects the rate that applies to that deal type: 6 percent on staff augmentation and advisory retainers, 5 percent on project implementation and one-off advisory engagements.
          </p>
        </div>

        <div className="overflow-x-auto bg-white border border-gray-100 shadow-sm rounded-sm">
          <table className="w-full text-left text-[14px]" style={{ color: COLORS.slateGray }}>
            <thead>
              <tr className="border-b-2" style={{ borderColor: COLORS.cedarGreen }}>
                <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.cedarGreen }}>Deal Type</th>
                <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap" style={{ color: COLORS.cedarGreen }}>Typical Contract Value</th>
                <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap" style={{ color: COLORS.cedarGreen }}>Your Commission</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <DealRow deal="One specialist on staff augmentation, six months" tcv="$80,000 to $150,000" comm="$4,800 to $9,000 (6%)" />
              <DealRow deal="One specialist on staff augmentation, twelve months" tcv="$150,000 to $300,000" comm="$9,000 to $18,000 (6%)" />
              <DealRow deal="Multi-specialist staff augmentation, long-term (PE portfolio, large M&A)" tcv="$1,500,000 to $5,000,000+" comm="$90,000 to $300,000+ (6%)" />
              <DealRow deal="Project implementation, multi-resource, three to six months" tcv="$250,000 to $750,000" comm="$12,500 to $37,500 (5%)" />
              <DealRow deal="Project implementation, larger program, six to twelve months" tcv="$750,000 to $2,000,000" comm="$37,500 to $100,000 (5%)" />
              <DealRow deal="Advisory: Fractional CIO retainer" tcv="$90,000 to $120,000 base" comm="$5,400 to $7,200 (6%) plus pull-through" />
              <DealRow deal="Advisory: Infrastructure Architect engagement" tcv="$50,000 to $200,000 per engagement" comm="$2,500 to $10,000 (5%)" />
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* TARGET CLIENT PROFILE */}
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>Who To Look For</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Target Client Profile</h2>
          <p className="mt-4 text-[15px] leading-relaxed font-light max-w-3xl" style={{ color: COLORS.slateGray }}>
            These are the kinds of companies that hire Cedar. When you are in a room and someone fits this picture, that is a Cedar conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border-l-4 border-[#065F46] p-6 md:p-8 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#065F46]">The Best Prospects</h3>
            <div className="space-y-5">
              <ProfileItem title="Private equity firms and their portfolio companies" desc="Especially right after an acquisition. PE has a 100-day plan and needs the IT integration done fast. Cedar runs this play all day. This is the strongest lane." />
              <ProfileItem title="Mid-sized companies (500 to 10,000 employees) doing big IT projects" desc="Cloud migrations, network replacements, new locations, post-merger IT system integrations. Their internal team is good but stretched." />
              <ProfileItem title="CIOs and IT Directors with a transformation budget" desc="They have money to spend, a board that wants results, and a small team. They need experienced hands to deliver." />
              <ProfileItem title="Other IT firms (VARs and MSPs) that are over capacity" desc="Examples: CDW, SHI, Trace3, Insight, Presidio, World Wide Technology. They win a deal they cannot deliver fast enough alone. Cedar fills in." />
            </div>
          </div>

          <div className="bg-white border-l-4 border-[#A38A6A] p-6 md:p-8 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest" style={{ color: COLORS.bronzeOnLight }}>Possible But Slower</h3>
            <div className="space-y-5">
              <ProfileItem title="Federal contractors and defense work" desc="Cedar is SAM.gov registered and CAGE coded for federal work and is already active in this space. If a prospect happens to be a federal prime or sub, bring it to Christian. Federal sales cycles are six to eighteen months." />
              <ProfileItem title="Small businesses without a defined IT budget cycle" desc="Worth pursuing only if there is a Fractional CIO opportunity. Otherwise the deal is too small and the sales cycle is too long." />
            </div>
          </div>

          <div className="bg-white border-l-4 border-[#991B1B] p-6 md:p-8 shadow-sm rounded-sm">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#991B1B]">Not A Fit (Pass)</h3>
            <ul className="space-y-3 text-[14px] font-light" style={{ color: COLORS.slateGray }}>
              <PassItem text="Anyone asking for help desk, deskside support, or break-fix work" />
              <PassItem text="Anyone asking for a single day of work or a one-time service call" />
              <PassItem text="Price shoppers looking for the cheapest body they can find" />
              <PassItem text="Deals under $50,000 total contract value" />
              <PassItem text="Anyone whose only contact is procurement (no decision-maker access)" />
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* RECOGNITION CUES */}
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>Listen For These</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>How to Recognize a Cedar Deal in Conversation</h2>
          <p className="mt-4 text-[15px] leading-relaxed font-light" style={{ color: COLORS.slateGray }}>
            When you hear these phrases from a prospect, you have a live one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Quote text="We are short staffed." />
          <Quote text="We just acquired a company and the IT integration is a mess." />
          <Quote text="We have a hard deadline and we are behind." />
          <Quote text="Our internal team cannot handle this on top of their day jobs." />
          <Quote text="We do not have the right skills in-house for this." />
          <Quote text="We are doing a data center exit, cloud migration, or network refresh." />
          <Quote text="Our current vendor is not delivering." />
          <Quote text="We need senior people, not junior consultants." />
          <Quote text="We are running a transformation program and need outside help." />
        </div>
      </div>
    </section>

    {/* M&A PITCH */}
    <section className="py-16 md:py-20 px-4 md:px-6 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeDark }}>The M&A Room Pitch</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-8">How to Pitch Cedar in an M&A Room</h2>
        <p className="text-[15px] font-light leading-relaxed mb-8 text-gray-300">
          When you are sitting with PE partners or deal teams who just acquired a company:
        </p>
        <blockquote className="border-l-4 pl-6 py-2 text-lg md:text-xl font-extralight italic leading-relaxed" style={{ borderColor: COLORS.bronzeAccent }}>
          You just bought a company with no real IT bench. Their setup is held together by an outside firm that does not know the environment, and your integration deadline is six months. Cedar drops in a vetted technical lead plus a small team of specialists. They scope the actual work, they run the integration, and you get one accountable point of contact. No full-time hires you have to lay off later. Same playbook works on carve-outs.
        </blockquote>
        <p className="text-[14px] font-light leading-relaxed mt-8 text-gray-300">
          That is the entire pitch. Decision-makers in M&A rooms already know they have this problem. They just have not heard a clean solution articulated.
        </p>
      </div>
    </section>

    {/* HOW YOU GET PAID */}
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>Commission Structure</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>How You Get Paid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#F2F2F0] border border-gray-200 p-6 rounded-sm">
            <p className="text-3xl font-bold mb-2" style={{ color: COLORS.cedarGreen }}>6%</p>
            <p className="text-[13px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              of monthly collected billing on <strong className="font-semibold">staff augmentation</strong> engagements and <strong className="font-semibold">advisory retainers</strong> (Fractional CIO).
            </p>
          </div>
          <div className="bg-[#F2F2F0] border border-gray-200 p-6 rounded-sm">
            <p className="text-3xl font-bold mb-2" style={{ color: COLORS.cedarGreen }}>5%</p>
            <p className="text-[13px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              of collected billing on <strong className="font-semibold">project implementation</strong> engagements and <strong className="font-semibold">one-off advisory engagements</strong> (Infrastructure Architect).
            </p>
          </div>
        </div>

        <div className="space-y-6 text-[15px] leading-relaxed font-light mb-10" style={{ color: COLORS.slateGray }}>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-1" style={{ color: COLORS.cedarGreen }}>Trigger</span>
            <p>Two things must happen before any commission accrues. First, the client signs a contract with Cedar. Second, the client pays Cedar's first invoice. Once both are true, your commission begins.</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-1" style={{ color: COLORS.cedarGreen }}>Duration</span>
            <p>The life of that signed engagement.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border-l-4 p-6 shadow-sm rounded-sm" style={{ borderColor: COLORS.bronzeAccent }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.cedarGreen }}>Example: Staff Augmentation (6%)</h4>
            <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              You introduce Cedar to a PE-backed company. Cedar signs a contract to provide one network engineer at $130 per hour for twelve months, billed at 160 hours per month. Monthly billing is $20,800. Your monthly commission at 6 percent is <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>$1,248</strong>. Over the twelve-month engagement, you earn <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>$14,976</strong> on that one placement. If the engagement extends another year, you continue earning $1,248 per month for the duration.
            </p>
          </div>
          <div className="bg-white border-l-4 p-6 shadow-sm rounded-sm" style={{ borderColor: COLORS.bronzeAccent }}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.cedarGreen }}>Example: Project Implementation (5%)</h4>
            <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              You introduce Cedar to a mid-market company doing a network refresh. Cedar signs a $600,000 fixed-scope project that bills out in milestones over five months. At 5 percent of collected billing, you earn <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>$30,000</strong> across the life of the project, paid monthly as Cedar invoices and collects.
            </p>
          </div>
        </div>

        <p className="text-[14px] font-light italic" style={{ color: COLORS.slateGray }}>
          Multiple placements stack. There is no cap on how many engagements you can originate.
        </p>
      </div>
    </section>

    {/* HOW TO HAND OFF */}
    <section className="py-16 md:py-20 px-4 md:px-6 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>The Handoff</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>How to Hand a Deal to Cedar</h2>
        </div>

        <ol className="space-y-6">
          <HandoffStep n="01" text="Confirm the prospect fits the profile above." />
          <HandoffStep n="02" text="Make sure the prospect actually has decision-maker authority or access to it." />
          <HandoffStep
            n="03"
            text={(
              <>
                Send Christian a short email or text with:
                <ul className="list-disc pl-6 mt-3 space-y-1.5 font-light">
                  <li>The company name and who you talked to (name, title)</li>
                  <li>One paragraph on what they said they need</li>
                  <li>Their timeline if they mentioned one</li>
                  <li>Whether they have a budget approved or are still building the case</li>
                </ul>
              </>
            )}
          />
          <HandoffStep n="04" text="Christian takes it from there. Cedar runs its own technical scoping conversation with the prospect." />
        </ol>

        <div className="mt-10 bg-[#F2F2F0] border border-gray-200 p-6 rounded-sm">
          <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
            The deal becomes yours for commission purposes the moment Christian confirms back to you that the lead is qualified and Cedar is engaged.
          </p>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] block mb-3" style={{ color: COLORS.bronzeOnLight }}>For When Prospects Ask</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6" style={{ color: COLORS.cedarGreen }}>About Cedar</h2>
        <div className="space-y-5 text-[15px] leading-relaxed font-light" style={{ color: COLORS.slateGray }}>
          <p>
            Cedar Infrastructure Group is an infrastructure services firm founded in 2026 and headquartered in Florence, South Carolina. We deploy mid-to-senior technical specialists across staff augmentation, project implementation, and advisory engagements for enterprise, mid-market, and federal customers.
          </p>
          <p>
            <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>Christian Matthews, Founder & CEO.</strong> Fifteen-plus years in IT infrastructure. Former Global IT Director leading a multi-country IT operation across North America, Europe, and Australia. Former Practice Lead at a national IT consulting and VAR organization, where he built and ran a $1.6M field services and infrastructure delivery practice on top of a $5.6M enterprise networking practice. Currently leading Cedar as CEO and personally engaging with select clients in Fractional CIO and Infrastructure Architect advisory capacities.
          </p>
          <p>
            <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>Website:</strong>{' '}
            <a href="https://hirecedar.com" className="hover:underline" style={{ color: COLORS.bronzeOnLight }}>hirecedar.com</a>
          </p>
        </div>
      </div>
    </section>
  </div>
);

const PartnerProduct = ({ n, title, tagline, body, sub, cue }) => (
  <div className="bg-white border border-gray-100 shadow-sm p-7 rounded-sm flex flex-col">
    <span className="text-[10px] font-bold tracking-[0.3em] mb-3" style={{ color: COLORS.bronzeOnLight }}>{n}</span>
    <h3 className="text-xl font-bold uppercase tracking-tight mb-3" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <p className="text-[13px] italic font-light mb-5 leading-relaxed" style={{ color: COLORS.bronzeOnLight }}>{tagline}</p>
    <div className="space-y-3 text-[14px] font-light leading-relaxed mb-5" style={{ color: COLORS.slateGray }}>
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {sub && (
        <ul className="space-y-3 pt-1">
          {sub.map((s, i) => (
            <li key={i}>
              <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>{s.label}.</strong> {s.text}
            </li>
          ))}
        </ul>
      )}
    </div>
    {cue && (
      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: COLORS.bronzeOnLight }}>Best When They Say</p>
        <p className="text-[13px] italic font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{cue}</p>
      </div>
    )}
  </div>
);

const RateRow = ({ role, what, rate }) => (
  <tr className="border-b border-gray-100 align-top">
    <td className="py-4 pr-4 font-semibold" style={{ color: COLORS.cedarGreen }}>{role}</td>
    <td className="py-4 px-4">{what}</td>
    <td className="py-4 pl-4 font-semibold whitespace-nowrap" style={{ color: COLORS.cedarGreen }}>{rate}</td>
  </tr>
);

const DealRow = ({ deal, tcv, comm }) => (
  <tr className="border-b border-gray-100 align-top last:border-b-0">
    <td className="py-4 px-4">{deal}</td>
    <td className="py-4 px-4 font-semibold whitespace-nowrap" style={{ color: COLORS.cedarGreen }}>{tcv}</td>
    <td className="py-4 px-4 font-semibold" style={{ color: COLORS.bronzeOnLight }}>{comm}</td>
  </tr>
);

const ProfileItem = ({ title, desc }) => (
  <div>
    <p className="text-[13px] font-bold mb-1" style={{ color: COLORS.cedarGreen }}>{title}</p>
    <p className="text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{desc}</p>
  </div>
);

const PassItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <XCircle size={14} className="mt-1 shrink-0 text-[#991B1B]" aria-hidden="true" />
    <span>{text}</span>
  </li>
);

const Quote = ({ text }) => (
  <div className="bg-white border-l-4 p-5 rounded-sm shadow-sm" style={{ borderColor: COLORS.bronzeAccent }}>
    <p className="text-[15px] italic font-light leading-relaxed" style={{ color: COLORS.slateGray }}>"{text}"</p>
  </div>
);

const HandoffStep = ({ n, text }) => (
  <li className="flex items-start gap-5 bg-white border border-gray-100 p-5 md:p-6 rounded-sm shadow-sm">
    <span className="text-2xl md:text-3xl font-bold tracking-tight shrink-0" style={{ color: COLORS.bronzeAccent }}>{n}</span>
    <div className="text-[15px] leading-relaxed pt-1" style={{ color: COLORS.slateGray }}>{text}</div>
  </li>
);


export default App;
