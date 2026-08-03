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
  Paperclip,
  Bookmark,
  Lock,
  Share,
  ChevronDown,
  Phone,
  Sparkles
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
    const validPages = ['home', 'services', 'why-cedar', 'engineers', 'contact', 'email-policy', 'partners', 'web'];
    const hash = window.location.hash.replace('#', '');
    if (validPages.includes(hash)) return hash;
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (validPages.includes(path)) {
      window.history.replaceState(null, '', `/#${path}`);
      return path;
    }
    return 'home';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageTitles = { home: 'Home', services: 'Services', 'why-cedar': 'Why Cedar', engineers: 'Join Cedar', contact: 'Contact', 'email-policy': 'Email Policy', partners: 'Channel Partner Brief', web: 'Web Services' };

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
        {currentPage === 'web' && <WebServicesPage />}
      </main>

      {/* Footer */}
      <footer className="pt-10 pb-12 md:py-20 px-4 md:px-6 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="space-y-3 min-w-0">
            <Logo isFooter />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Curated IT infrastructure capacity for enterprise IT, defense, government, VAR, and MSP delivery teams. Every specialist is technically vetted for scope, environment, and operational risk.
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
            Cedar deploys IT network and infrastructure engineers, technical PMs, and fractional IT leadership for enterprise, government, and VAR/MSP delivery teams.
            Engagements span architecture and design, burst support, and scoped project delivery.
            Every specialist is vetted against your specific environment and risk profile before day one.
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
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <section className="pt-20 pb-16 px-6 bg-[#FBFBF9] border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.95]" style={{ color: COLORS.cedarGreen }}>Services</h2>
        <div className="h-[2px] w-16 bg-[#8B7355] mx-auto mb-8" />
        <p className="text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto text-gray-500">
          Cedar deploys IT network and infrastructure engineers, technical PMs, and fractional IT leadership for
          enterprise, government, and VAR/MSP delivery teams. Every engagement is scoped, calibrated to your
          environment, and delivered to senior-level execution standards.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
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

    <div className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
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
            <ScenarioCard icon={<Layers size={18} />} title="Post-acquisition integration" desc="Rapid standardization, network convergence, and control." />
            <ScenarioCard icon={<TrendingUp size={18} />} title="Practice overflow spikes" desc="Delivery surge capacity without long-term structural load." />
            <ScenarioCard icon={<AlertCircle size={18} />} title="Escalation recovery" desc="Corrective capacity when internal throughput breaks down." />
            <ScenarioCard icon={<Globe size={18} />} title="Web development and digital identity" desc="Fixed-price websites and digital presence, built to Cedar standards." />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard icon={<Server size={32} />} title="Systems Engineering" items={["Senior compute specialists for virtualization and platform stability", "Hardened server OS execution in regulated, high-control, and classified environments", "High-availability architecture support and zero-drift operational controls"]} />
          <ServiceCard icon={<Network size={32} />} title="Network Engineering" items={["Carrier-grade network specialists for multi-site rollouts", "Multi-vendor routing and security implementation depth", "Controlled SD-WAN execution to remove latency and reliability bottlenecks"]} />
          <ServiceCard icon={<Cloud size={32} />} title="Cloud Implementation" items={["Production-ready Azure/AWS foundations and governance guardrails", "Migration specialists for low-risk workload transitions", "Hybrid identity and secure cloud connectivity execution"]} />
          <ServiceCard icon={<Globe size={32} />} title="Web Development" items={["Fixed-price custom websites for organizations of every size and sector", "Managed hosting, domains, and professional email under one Care Plan", "Built to the same security standards Cedar brings to enterprise networks"]} cta={{ label: 'Explore Web Services', onClick: () => setPage('web') }} />
        </div>
      </section>
    </div>
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
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <section className="pt-20 pb-16 px-6 bg-[#FBFBF9] border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.95]" style={{ color: COLORS.cedarGreen }}>Join Cedar</h2>
        <div className="h-[2px] w-16 bg-[#8B7355] mx-auto mb-8" />
        <p className="text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto text-gray-500">
          Cedar works with independent mid-to-senior infrastructure specialists who can deliver in enterprise, defense, government, and VAR environments with minimal supervision.
        </p>
      </div>
    </section>
    <div className="py-16 md:py-20 px-6">
    <div className="max-w-7xl mx-auto">

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
                  <option>Technical Project Management</option>
                  <option>Program Management</option>
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
                {['CCNA', 'CCNP', 'CCIE', 'MCSE', 'Azure Solutions Architect', 'AWS Solutions Architect', 'VCP', 'CISSP', 'CompTIA Network+', 'CompTIA Security+', 'ITIL', 'PMP'].map(cert => (
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
    <div className="animate-in fade-in duration-500 text-left">
      <section className="pt-20 pb-16 px-6 bg-[#FBFBF9] border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.95]" style={{ color: COLORS.cedarGreen }}>Request Capacity</h2>
          <div className="h-[2px] w-16 bg-[#8B7355] mx-auto mb-8" />
          <p className="text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto text-gray-500 mb-6">
            Structured intake for organizations requiring vetted infrastructure execution capacity.
            We align scope, delivery window, and commercial posture before confirming specialist availability.
          </p>
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#B45309]">
            Cedar supports United States-based organizations and United States-based engagements only.
          </p>
        </div>
      </section>
      <div className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

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

const ServiceCard = ({ icon, title, items, cta }) => (
  <div className="p-10 lg:p-12 bg-white border border-gray-100 hover:shadow-xl transition-all group duration-500 text-left flex flex-col">
    <div className="mb-8 group-hover:scale-110 transition-transform duration-500 inline-block text-slate-400 group-hover:text-[#8B7355]" aria-hidden="true">{icon}</div>
    <h3 className="text-xl font-bold mb-8 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm font-light flex items-start space-x-3 text-gray-500">
          <ChevronRight size={14} className="shrink-0 mt-1" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {cta && (
      <button
        onClick={cta.onClick}
        className="mt-8 pt-6 border-t border-gray-100 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.3em] group/cta text-left"
        style={{ color: COLORS.bronzeOnLight }}
      >
        {cta.label}
        <ArrowRight className="ml-2 group-hover/cta:translate-x-1 transition-transform shrink-0" size={14} aria-hidden="true" />
      </button>
    )}
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

const PARTNERS_RED = '#7F1D1D';
const PARTNERS_RED_DEEP = '#5B1414';
const PARTNERS_GREEN = '#15803D';
const PARTNERS_GREEN_DEEP = '#14532D';

const PartnersBookmarkPrompt = () => {
  const [platform, setPlatform] = React.useState(null);
  const [dismissed, setDismissed] = React.useState(true);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (localStorage.getItem('cedar-partners-bookmark-dismissed') === '1') return;
    } catch (e) {}
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isAndroid = /Android/.test(ua);
    setPlatform(isIOS ? 'ios' : isAndroid ? 'android' : 'desktop');
    setDismissed(false);
  }, []);

  const handleDismiss = () => {
    try { localStorage.setItem('cedar-partners-bookmark-dismissed', '1'); } catch (e) {}
    setDismissed(true);
  };

  if (dismissed || !platform) return null;

  const message = platform === 'ios'
    ? <>Save for quick access. Tap <Share size={12} className="inline -mt-0.5 mx-0.5" aria-hidden="true" /> Share, then <strong className="font-semibold">Add to Home Screen</strong>.</>
    : platform === 'android'
      ? <>Save for quick access. Open your browser menu, then <strong className="font-semibold">Add to Home screen</strong> or <strong className="font-semibold">Bookmark</strong>.</>
      : <>Save for quick access. Press <kbd className="px-1.5 py-0.5 text-[11px] font-mono border rounded-sm mx-0.5" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>⌘D</kbd> or <kbd className="px-1.5 py-0.5 text-[11px] font-mono border rounded-sm mx-0.5" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>Ctrl+D</kbd> to bookmark.</>;

  return (
    <div className="border-b" style={{ backgroundColor: COLORS.stoneBg, borderColor: COLORS.border }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-2.5 flex items-center gap-3">
        <Bookmark size={14} className="shrink-0" style={{ color: COLORS.bronzeOnLight }} aria-hidden="true" />
        <p className="text-[12px] md:text-[13px] font-light leading-snug flex-1" style={{ color: COLORS.slateGray }}>{message}</p>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss bookmark suggestion"
          className="shrink-0 p-1 hover:bg-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] rounded-sm"
          style={{ color: COLORS.slateGray }}
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const SectionHeader = ({ n, eyebrow, title, lead, accent }) => (
  <div className="mb-6 md:mb-8">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-3xl md:text-4xl font-bold tracking-tighter leading-none" style={{ color: accent || COLORS.bronzeAccent }}>{n}</span>
      {eyebrow && (
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeOnLight }}>{eyebrow}</span>
      )}
    </div>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.05]" style={{ color: COLORS.cedarGreen }}>{title}</h2>
    {lead && <p className="mt-3 text-[14px] md:text-[15px] font-light leading-relaxed max-w-3xl" style={{ color: COLORS.slateGray }}>{lead}</p>}
  </div>
);

const QuickFact = ({ label, value, note }) => (
  <div className="bg-white border p-4 md:p-5" style={{ borderColor: COLORS.border }}>
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: COLORS.bronzeOnLight }}>{label}</p>
    <p className="text-[16px] md:text-[17px] font-bold leading-snug mb-1.5" style={{ color: COLORS.cedarGreen }}>{value}</p>
    {note && <p className="text-[12px] md:text-[13px] font-light leading-snug" style={{ color: COLORS.slateGray }}>{note}</p>}
  </div>
);

const ProductCard = ({ icon, title, tagline, body, sub, cue }) => (
  <div className="bg-white border shadow-sm p-5 md:p-6 flex flex-col" style={{ borderColor: COLORS.border }}>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 flex items-center justify-center" style={{ backgroundColor: COLORS.cedarGreen, color: 'white' }}>
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold tracking-tight" style={{ color: COLORS.cedarGreen }}>{title}</h3>
    </div>
    <p className="text-[14px] italic font-light leading-relaxed mb-4 pb-3 border-b" style={{ color: COLORS.bronzeOnLight, borderColor: COLORS.border }}>{tagline}</p>
    <div className="space-y-3 text-[14px] md:text-[15px] font-light leading-relaxed mb-4" style={{ color: COLORS.slateGray }}>
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {sub && (
        <ul className="space-y-2.5 pt-1">
          {sub.map((s, i) => (
            <li key={i}>
              <strong className="font-semibold" style={{ color: COLORS.cedarGreen }}>{s.label}.</strong> {s.text}
            </li>
          ))}
        </ul>
      )}
    </div>
    {cue && (
      <div className="mt-auto pt-3 border-t" style={{ borderColor: COLORS.border }}>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5" style={{ color: COLORS.bronzeOnLight }}>If they say</p>
        <p className="text-[13px] italic font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{cue}</p>
      </div>
    )}
  </div>
);

const RateCard = ({ role, what, rate }) => (
  <div className="bg-white border p-5 md:p-6 flex flex-col md:flex-row md:items-center md:gap-6" style={{ borderColor: COLORS.border }}>
    <div className="md:flex-1 md:max-w-[18rem] mb-2 md:mb-0">
      <p className="text-[16px] md:text-[17px] font-bold leading-snug" style={{ color: COLORS.cedarGreen }}>{role}</p>
    </div>
    <p className="text-[14px] md:text-[15px] font-light leading-relaxed md:flex-[2]" style={{ color: COLORS.slateGray }}>{what}</p>
    <p className="text-[18px] md:text-[20px] font-bold tracking-tight whitespace-nowrap mt-3 md:mt-0 md:ml-4 md:text-right md:min-w-[11rem]" style={{ color: COLORS.cedarGreen }}>{rate}</p>
  </div>
);

const DealCard = ({ deal, tcv, comm }) => (
  <div className="bg-white border p-5" style={{ borderColor: COLORS.border }}>
    <p className="text-[14px] md:text-[15px] font-semibold leading-snug mb-3 pb-3 border-b" style={{ color: COLORS.cedarGreen, borderColor: COLORS.border }}>{deal}</p>
    <div className="grid grid-cols-2 gap-3">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: COLORS.bronzeOnLight }}>Contract Value</p>
        <p className="text-[15px] font-bold leading-snug" style={{ color: COLORS.cedarGreen }}>{tcv}</p>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: PARTNERS_GREEN }}>Your Take</p>
        <p className="text-[15px] font-bold leading-snug" style={{ color: PARTNERS_GREEN }}>{comm}</p>
      </div>
    </div>
  </div>
);

const ProfileBlock = ({ title, items, accent }) => (
  <div className="bg-white border-l-4 p-5 md:p-6 shadow-sm h-full" style={{ borderColor: accent }}>
    <h3 className="text-[14px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: accent }}>{title}</h3>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i}>
          {item.title && <p className="text-[14px] font-bold mb-1" style={{ color: COLORS.cedarGreen }}>{item.title}</p>}
          <p className="text-[13.5px] md:text-[14px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{item.desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

const CueChip = ({ text }) => (
  <div className="bg-white border-l-2 px-4 py-3" style={{ borderColor: COLORS.bronzeAccent }}>
    <p className="text-[14px] md:text-[15px] italic font-light leading-snug" style={{ color: COLORS.slateGray }}>"{text}"</p>
  </div>
);

const PartnersFinalBand = () => (
  <div className="text-white text-center py-4 px-4 text-[10px] font-bold uppercase tracking-[0.35em]" style={{ backgroundColor: PARTNERS_RED_DEEP }} role="alert">
    <Lock size={11} className="inline -mt-0.5 mr-2" aria-hidden="true" />
    Internal Reference · Do Not Forward · Cedar Infrastructure Group · {new Date().getFullYear()}
  </div>
);

const PartnersPage = () => (
  <div style={{ backgroundColor: COLORS.neutralBg }}>
    {/* CONFIDENTIAL BANNER (flat, no stripes) */}
    <div className="w-full text-white" style={{ backgroundColor: PARTNERS_RED }} role="alert">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <Lock size={15} className="shrink-0" aria-hidden="true" />
          <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] leading-tight truncate">
            Confidential <span className="opacity-50 mx-1.5">·</span> Do Not Forward
          </p>
        </div>
        <span className="hidden md:inline-block text-[10px] font-bold uppercase tracking-[0.25em] px-2 py-0.5 border border-white/40">
          Channel Partner
        </span>
      </div>
    </div>

    <PartnersBookmarkPrompt />

    {/* HERO */}
    <section className="px-4 md:px-6 pt-10 md:pt-14 pb-8 md:pb-10 border-b" style={{ borderColor: COLORS.border }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: COLORS.bronzeOnLight }}>Cedar Infrastructure Group</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.02] mb-4" style={{ color: COLORS.cedarGreen }}>
          Channel Partner Brief
        </h1>
        <div className="h-[3px] w-16 mb-5" style={{ backgroundColor: COLORS.bronzeAccent }} aria-hidden="true" />
        <p className="text-[15px] md:text-lg font-light leading-relaxed max-w-3xl" style={{ color: COLORS.slateGray }}>
          For strategic relationships originating Cedar opportunities. Use this to recognize a Cedar deal in conversation, size it in your head, and hand it off cleanly.
        </p>
      </div>
    </section>

    {/* QUICK REFERENCE CARD */}
    <section className="px-4 md:px-6 py-8 md:py-10 border-b" style={{ borderColor: COLORS.border, backgroundColor: COLORS.stoneBg }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: COLORS.bronzeOnLight }}>Quick Reference</span>
          <div className="h-px flex-grow" style={{ backgroundColor: COLORS.border }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-6" style={{ color: COLORS.cedarGreen }}>The essentials, up front.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3">
          <QuickFact label="What We Sell" value="Senior IT execution" note="Network, cloud, security, M&A integration" />
          <QuickFact label="Min Deal Size" value="$50K TCV" note="~300+ hours, no one-off dispatch" />
          <QuickFact label="Staff Aug + Advisory" value="6%" note="Of monthly collected billing" />
          <QuickFact label="Project + One-off" value="5%" note="Of collected billing, life of project" />
          <QuickFact label="Strongest Lane" value="PE portfolio companies" note="Post-acquisition IT integration" />
          <QuickFact label="Handoff" value="Text Christian" note="Company, contact, need, timeline, budget" />
        </div>
      </div>
    </section>

    {/* SERVICES (was 02 — now elevated) */}
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          n="01"
          eyebrow="What We Sell"
          title="Three things. Know the difference."
          lead="Most Cedar conversations fit one of these three shapes. Spot which one your prospect needs and you have done 80 percent of the qualifying work."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          <ProductCard
            icon={<Users size={18} />}
            title="Staff Augmentation"
            tagline="Rent a specialist who embeds with the client's team for the length of an engagement."
            body={[
              'Client tells us what skills they need. We provide a vetted specialist who shows up, embeds, and works on whatever they need. Client pays hourly. No FTE to vet or carry.',
              'Engagements run a few months to multi-year for sustained demand (PE portfolios, large healthcare or manufacturing, federal subcontracts).'
            ]}
            cue={'"We need help, we just do not have the bench." "Our senior engineer just left." "We need to staff up for six months."'}
          />
          <ProductCard
            icon={<Target size={18} />}
            title="Project Implementation"
            tagline="Cedar owns the outcome and the deadline, not just the bodies."
            body={[
              'Client gives us a defined goal (migrate 250 retail sites to a new network). We scope it, price it, staff it, run it, deliver it. They buy the outcome, not the project management headache.'
            ]}
            cue={'"We need this done by Q3." "We are doing a network refresh across all our sites." "We need someone to run this migration end to end."'}
          />
          <ProductCard
            icon={<Briefcase size={18} />}
            title="Advisory"
            tagline="Senior technical leadership on retainer or hourly."
            body={[
              'For companies that need an experienced IT executive or architect at the table but do not need (or cannot afford) a full-time hire.'
            ]}
            sub={[
              { label: 'Fractional CIO', text: 'Part-time senior IT executive owning strategy, vendor decisions, budget, executive communication. Common for SMB, mid-market, and PE portfolio integration.' },
              { label: 'Infrastructure Architect', text: 'Senior architect to validate decisions, review vendor proposals, design target-state, or backstop an internal team on a complex program.' }
            ]}
            cue={'"We do not have a CIO and we are out of our depth." "We need someone to validate what our vendor is telling us." "We just acquired a company and need leadership cover."'}
          />
        </div>
      </div>
    </section>

    {/* RATE CARD (the centerpiece) */}
    <section className="px-4 md:px-6 py-12 md:py-16 border-y" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          n="02"
          eyebrow="Rate Card"
          title="What Cedar charges the client."
          lead="Hourly rates Cedar bills. Cedar covers payroll, insurance, replacement protection, and project oversight. Client pays one invoice."
        />

        {/* Internal staff confidentiality callout */}
        <div className="mb-5 md:mb-6 flex items-start gap-3 p-4 md:p-5 border-l-4" style={{ borderColor: PARTNERS_RED, backgroundColor: '#FEF2F2' }}>
          <Lock size={18} className="shrink-0 mt-0.5" style={{ color: PARTNERS_RED }} aria-hidden="true" />
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
            <strong className="font-bold" style={{ color: PARTNERS_RED }}>Internal staff and candidates never see bill rates.</strong> These are what Cedar charges the end client. Sharing them with the specialists Cedar deploys allows margin to be reverse-engineered. Keep this card with you, not with them.
          </p>
        </div>

        <div className="space-y-2.5 md:space-y-3">
          <RateCard role="Field Services Technician" what="On-site install, replace, or troubleshoot. 'Hands and feet' of any project. Often called Smart Hands." rate="$50 to $75 / hour" />
          <RateCard role="Lead Field Services Technician" what="Runs the on-site crew, reports to project leadership. On-site work is always sold with a Lead FST plus added FSTs as scope requires." rate="$75 to $95 / hour" />
          <RateCard role="Implementation Engineer" what="Mid-level technical specialist who configures network equipment, builds servers, sets up cloud environments. Most 'doing the work' hours come from this role." rate="$95 to $150 / hour" />
          <RateCard role="Senior Engineer / Architect" what="Senior specialist who designs the solution and owns the technical decisions. Smaller engagements where someone has to both design and build." rate="$135 to $200 / hour" />
          <RateCard role="Technical Project Manager" what="Runs the schedule, the budget, and the customer status updates. Keeps the engagement on track." rate="$75 to $135 / hour" />
          <RateCard role="Fractional CIO / IT Advisor" what="Part-time senior IT executive for SMB and mid-market that cannot afford full-time CIO." rate="$7,500 to $15,000 / month" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <div className="bg-[#FBFBF9] border p-5" style={{ borderColor: COLORS.border }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: COLORS.bronzeOnLight }}>Travel and On-Site</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              Deployable anywhere in the continental US. Cedar bills reasonable expenses (flights, lodging, ground) plus $50 per diem for overnights. Typical pass-through: $1,800 to $3,000 per technician.
            </p>
          </div>
          <div className="bg-[#FBFBF9] border-l-4 p-5" style={{ borderColor: PARTNERS_RED }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: PARTNERS_RED }}>The One Rule</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              No one-off dispatch. Every engagement is ~300+ hours minimum. If a prospect says <em>"I just need someone for a day,"</em> pass.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* DEAL SIZING */}
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          n="03"
          eyebrow="Deal Sizing"
          title="What you earn, in dollars."
          lead="Size up an opportunity in your head while you are still talking. 6 percent on staff aug and advisory retainers. 5 percent on project implementation and one-off advisory."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <DealCard deal="Single specialist, staff aug, 6 months" tcv="$80K to $150K" comm="$4.8K to $9K (6%)" />
          <DealCard deal="Single specialist, staff aug, 12 months" tcv="$150K to $300K" comm="$9K to $18K (6%)" />
          <DealCard deal="Multi-specialist long-term (PE portfolio, M&A)" tcv="$1.5M to $5M+" comm="$90K to $300K+ (6%)" />
          <DealCard deal="Project implementation, 3 to 6 months" tcv="$250K to $750K" comm="$12.5K to $37.5K (5%)" />
          <DealCard deal="Larger program, 6 to 12 months" tcv="$750K to $2M" comm="$37.5K to $100K (5%)" />
          <DealCard deal="Fractional CIO retainer" tcv="$90K to $120K base" comm="$5.4K to $7.2K (6%) plus pull-through" />
        </div>
      </div>
    </section>

    {/* WHAT CEDAR DOES (was 01 — now context after services + rates) */}
    <section className="px-4 md:px-6 py-12 md:py-16 border-y" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          n="04"
          eyebrow="What Cedar Does"
          title="The plumbing of corporate IT."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-[15px] md:text-[16px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
          <div className="space-y-3">
            <p>Cedar is an IT consulting services firm. We are working with vendors to start selling HPE Aruba, Palo Alto, and Fortinet as a Value-Added Reseller (VAR). Companies hire us when they need senior technical people to do infrastructure work their internal IT team cannot do alone.</p>
            <p>That happens when they are too busy, do not have the right skills, are facing a deadline they cannot miss, or want to reset staffing after M&A.</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.bronzeOnLight }}>The work looks like</p>
            <ul className="space-y-2">
              {[
                'Setting up the network so all offices can talk to each other',
                'Building Azure or AWS cloud environments',
                'Replacing old servers, migrating data without downtime',
                'Securing the network: firewalls, segmentation, identity',
                'On-site install or replacement of equipment',
                'Merging or replacing IT systems after M&A'
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-1 shrink-0" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-7 p-5 border-l-4 bg-[#FBFBF9]" style={{ borderColor: PARTNERS_RED }}>
          <p className="text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
            <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>We do not do</strong> help desk, password resets, or printer support. Not the people you call when a laptop breaks. We are the people you call when there is a deadline to migrate hundreds of servers and the internal team cannot get it done.
          </p>
        </div>
      </div>
    </section>

    {/* TARGET PROFILE */}
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          n="05"
          eyebrow="Who to Look For"
          title="Target client profile."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
          <ProfileBlock
            title="Strongest Lane"
            accent="#065F46"
            items={[
              { title: 'PE firms + portfolio companies', desc: 'Especially right after acquisition. 100-day integration deadlines. Cedar runs this play all day.' },
              { title: 'Mid-market doing big IT projects', desc: '500 to 10,000 employees. Cloud migrations, network refreshes, new locations, post-M&A integration.' },
              { title: 'CIOs with a transformation budget', desc: 'Money to spend, board wants results, small team. They need experienced hands to deliver.' },
              { title: 'Other VARs and MSPs over capacity', desc: 'CDW, SHI, Trace3, Insight, Presidio, WWT. They win a deal they cannot deliver fast enough alone.' }
            ]}
          />
          <ProfileBlock
            title="Possible but Slower"
            accent={COLORS.bronzeOnLight}
            items={[
              { title: 'Federal prime / sub contractors', desc: 'Cedar is SAM.gov registered, CAGE coded, and active in federal. Bring it to Christian if it comes up. Cycles run 6 to 18 months.' },
              { title: 'Small businesses, ad-hoc budget', desc: 'Only worth pursuing if there is a Fractional CIO play. Otherwise too small, too slow.' }
            ]}
          />
          <ProfileBlock
            title="Not a Fit · Pass"
            accent={PARTNERS_RED}
            items={[
              { desc: 'Anyone asking for help desk, deskside, or break-fix work.' },
              { desc: 'Anyone asking for a single day of work or one-time service call.' },
              { desc: 'Price shoppers looking for the cheapest body.' },
              { desc: 'Deals under $50,000 total contract value.' },
              { desc: 'Anyone whose only contact is procurement (no decision-maker access).' }
            ]}
          />
        </div>
      </div>
    </section>

    {/* CUES */}
    <section className="px-4 md:px-6 py-12 md:py-16 border-y" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          n="06"
          eyebrow="Listen For These"
          title="How to recognize a Cedar deal in conversation."
          lead="When you hear these phrases, you have a live one."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {[
            'We are short staffed.',
            'We just acquired a company and the IT integration is a mess.',
            'We have a hard deadline and we are behind.',
            'Our internal team cannot handle this on top of their day jobs.',
            'We do not have the right skills in-house for this.',
            'We are doing a data center exit, cloud migration, or network refresh.',
            'Our current vendor is not delivering.',
            'We need senior people, not junior consultants.',
            'We are running a transformation program and need outside help.'
          ].map((q, i) => <CueChip key={i} text={q} />)}
        </div>
      </div>
    </section>

    {/* M&A PITCH (DARK BAND) */}
    <section className="px-4 md:px-6 py-14 md:py-20 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.bronzeDark }}>The M&A Room Pitch</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.05] mb-6 text-white">When you are sitting with deal teams.</h2>
        <blockquote className="border-l-4 pl-5 md:pl-6 text-[17px] md:text-xl font-extralight italic leading-relaxed text-gray-100" style={{ borderColor: COLORS.bronzeAccent }}>
          You just bought a company with no real IT bench. Their setup is held together by an outside firm that does not know the environment, and your integration deadline is six months. Cedar drops in a vetted technical lead plus a small team of specialists. They scope the actual work, run the integration, and you get one accountable point of contact. No full-time hires you have to lay off later. Same playbook works on carve-outs.
        </blockquote>
        <p className="text-[14px] md:text-[15px] font-light leading-relaxed mt-6 text-gray-400 max-w-2xl">
          That is the entire pitch. Decision-makers in M&A rooms already know they have this problem. They just have not heard a clean solution articulated.
        </p>
      </div>
    </section>

    {/* COMMISSION */}
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          n="07"
          eyebrow="How You Get Paid"
          title="Commission, triggers, duration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-white border p-5 md:p-6 flex items-baseline gap-5" style={{ borderColor: COLORS.border }}>
            <p className="text-5xl md:text-6xl font-bold tracking-tighter leading-none" style={{ color: PARTNERS_GREEN }}>6%</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              of monthly collected billing on <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>staff augmentation</strong> and <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>advisory retainers</strong> (Fractional CIO).
            </p>
          </div>
          <div className="bg-white border p-5 md:p-6 flex items-baseline gap-5" style={{ borderColor: COLORS.border }}>
            <p className="text-5xl md:text-6xl font-bold tracking-tighter leading-none" style={{ color: PARTNERS_GREEN }}>5%</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              of collected billing on <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>project implementation</strong> and <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>one-off advisory</strong> (Infrastructure Architect).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border-l-2 pl-4" style={{ borderColor: COLORS.bronzeAccent }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: COLORS.cedarGreen }}>Trigger</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              Client signs a contract <em>and</em> pays Cedar's first invoice. Once both are true, your commission begins.
            </p>
          </div>
          <div className="border-l-2 pl-4" style={{ borderColor: COLORS.bronzeAccent }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: COLORS.cedarGreen }}>Duration</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              The life of that signed engagement. Multiple placements stack. No cap on what you can originate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white border-l-4 p-5" style={{ borderColor: PARTNERS_GREEN }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: PARTNERS_GREEN }}>Example · Staff Aug (6%)</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              You introduce a PE-backed company. Cedar signs one network engineer at $130/hr for twelve months, 160 hr/month. Monthly billing: $20,800. Your monthly commission: <strong className="font-bold" style={{ color: PARTNERS_GREEN }}>$1,248</strong>. Year one: <strong className="font-bold" style={{ color: PARTNERS_GREEN }}>$14,976</strong>. If it extends, the meter keeps running.
            </p>
          </div>
          <div className="bg-white border-l-4 p-5" style={{ borderColor: PARTNERS_GREEN }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: PARTNERS_GREEN }}>Example · Project (5%)</p>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
              You introduce a mid-market network refresh. Cedar signs a $600,000 fixed-scope project billed in milestones over five months. At 5%, you earn <strong className="font-bold" style={{ color: PARTNERS_GREEN }}>$30,000</strong> across the life of the project, paid monthly as Cedar invoices and collects.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* HANDOFF */}
    <section className="px-4 md:px-6 py-12 md:py-16 border-y" style={{ borderColor: COLORS.border, backgroundColor: 'white' }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          n="08"
          eyebrow="The Handoff"
          title="How to hand a deal to Cedar."
        />
        <ol className="space-y-3">
          {[
            { n: '1', text: 'Confirm the prospect fits the profile above.' },
            { n: '2', text: 'Confirm they have decision-maker authority or access to it.' },
            { n: '3', text: 'Text or email Christian with: company name + your contact (name, title), one paragraph on what they need, timeline if mentioned, and whether budget is approved or still being built.' },
            { n: '4', text: 'Christian takes it from there. Cedar runs its own technical scoping conversation with the prospect.' }
          ].map((step) => (
            <li key={step.n} className="flex items-start gap-5 bg-[#FBFBF9] border p-4 md:p-5" style={{ borderColor: COLORS.border }}>
              <span className="text-3xl md:text-4xl font-bold tracking-tighter shrink-0 leading-none" style={{ color: COLORS.bronzeAccent }}>{step.n}</span>
              <p className="text-[15px] md:text-[16px] font-light leading-relaxed pt-1" style={{ color: COLORS.slateGray }}>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 p-5 border-l-4 bg-white" style={{ borderColor: PARTNERS_GREEN }}>
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
            The deal becomes yours for commission purposes the moment Christian confirms back that the lead is qualified and Cedar is engaged.
          </p>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          n="09"
          eyebrow="For When Prospects Ask"
          title="About Cedar."
        />
        <div className="space-y-4 text-[15px] md:text-[16px] font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
          <p>
            Cedar Infrastructure Group is an infrastructure services firm founded in 2026 and headquartered in Florence, South Carolina. We deploy mid-to-senior technical specialists across staff augmentation, project implementation, and advisory engagements for enterprise, mid-market, and federal customers.
          </p>
          <p>
            <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>Christian Matthews, Founder and CEO.</strong> Fifteen-plus years in IT infrastructure. Former Global IT Director leading a multi-country IT operation across North America, Europe, and Australia. Former Practice Lead at a national IT consulting and VAR organization where he built and ran a $1.6M field services and infrastructure delivery practice on top of a $5.6M enterprise networking practice. Currently leading Cedar as CEO and personally engaging with select clients in Fractional CIO and Infrastructure Architect advisory capacities.
          </p>
          <p>
            <strong className="font-bold" style={{ color: COLORS.cedarGreen }}>Website:</strong>{' '}
            <a href="https://hirecedar.com" className="hover:underline" style={{ color: COLORS.bronzeOnLight }}>hirecedar.com</a>
          </p>
        </div>
      </div>
    </section>

    <PartnersFinalBand />
  </div>
);

/* --- WEB SERVICES (unlisted /web) --- */

const WEB_MAIL = 'projects@hirecedar.com';
const webMailto = (subject) => `mailto:${WEB_MAIL}?subject=${encodeURIComponent(subject)}`;

const WebStyles = () => (
  <style>{`
    @keyframes webRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
    .web-rise { opacity: 0; animation: webRise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .web-plan-card { transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease; }
    .web-plan-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -20px rgba(10, 20, 13, 0.25); }
  `}</style>
);

const WebEyebrow = ({ children, light = false }) => (
  <div className="flex items-center justify-center gap-4 mb-4">
    <span className="h-px w-8" style={{ backgroundColor: light ? 'rgba(163,138,106,0.6)' : COLORS.bronzeAccent }} aria-hidden="true" />
    <span className="text-[13px] font-bold uppercase tracking-[0.3em]" style={{ color: light ? COLORS.bronzeDark : COLORS.bronzeOnLight }}>{children}</span>
    <span className="h-px w-8" style={{ backgroundColor: light ? 'rgba(163,138,106,0.6)' : COLORS.bronzeAccent }} aria-hidden="true" />
  </div>
);

const WebInclude = ({ text }) => (
  <li className="flex items-start space-x-3 text-left">
    <CheckCircle2 size={16} className="shrink-0 mt-1" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
    <span className="text-sm font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{text}</span>
  </li>
);

const WebPlanCard = ({ title, price, priceCaption, tagline, lead, items, note, cta, ctaSubject, featured = false }) => (
  <div className={`web-plan-card relative bg-white border shadow-sm flex flex-col h-full ${featured ? 'border-t-4' : ''}`} style={{ borderColor: featured ? COLORS.bronzeAccent : COLORS.border, ...(featured ? { borderTopColor: COLORS.bronzeAccent } : {}) }}>
    {featured && (
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 whitespace-nowrap" style={{ backgroundColor: COLORS.bronzeAccent }}>
        Most Popular
      </span>
    )}
    <div className="p-8 pb-6 border-b" style={{ borderColor: COLORS.border }}>
      <h3 className="text-[15px] font-bold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.bronzeOnLight }}>{title}</h3>
      <p className="text-4xl font-bold tracking-tight" style={{ color: COLORS.cedarGreen }}>{price}</p>
      <p className="text-[12px] font-light uppercase tracking-[0.15em] mt-1 mb-4 text-gray-500">{priceCaption}</p>
      <p className="text-[15px] font-bold" style={{ color: COLORS.cedarGreen }}>{tagline}</p>
      <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{lead}</p>
    </div>
    <div className="p-8 pt-6 flex flex-col flex-grow">
      <ul className="space-y-3 mb-6">
        {items.map((item, i) => <WebInclude key={i} text={item} />)}
      </ul>
      <p className="text-xs font-light italic leading-relaxed mb-6 mt-auto" style={{ color: COLORS.slateGray }}>{note}</p>
      <a
        href={webMailto(ctaSubject)}
        className="block text-center text-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:bg-black"
        style={{ backgroundColor: featured ? COLORS.bronzeAccent : COLORS.cedarGreen }}
      >
        {cta}
      </a>
    </div>
  </div>
);

const WebExtraItem = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4 text-left">
    <div className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5" style={{ backgroundColor: COLORS.stoneBg, color: COLORS.bronzeOnLight }} aria-hidden="true">
      {icon}
    </div>
    <div>
      <h4 className="text-[14px] font-bold mb-1.5 tracking-tight" style={{ color: COLORS.cedarGreen }}>{title}</h4>
      <p className="text-sm font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{children}</p>
    </div>
  </div>
);

const WebFaq = ({ q, a }) => (
  <div className="border-b pb-6" style={{ borderColor: COLORS.border }}>
    <h4 className="text-[15px] font-bold mb-2 tracking-tight" style={{ color: COLORS.cedarGreen }}>{q}</h4>
    <p className="text-sm font-light leading-relaxed" style={{ color: COLORS.slateGray }}>{a}</p>
  </div>
);

const WebServicesPage = () => {
  const plansRef = React.useRef(null);
  return (
    <div>
      <WebStyles />

      {/* HERO */}
      <section
        className="py-24 md:py-32 px-6 text-center"
        style={{ backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 0%, rgba(139, 115, 85, 0.09), transparent)` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="web-rise"><WebEyebrow>Cedar Web Services</WebEyebrow></div>
          <h1 className="web-rise text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tighter" style={{ color: COLORS.cedarGreen, animationDelay: '0.08s' }}>
            Enterprise Digital Infrastructure. <br />
            <span className="font-extralight italic" style={{ color: COLORS.slateGray }}>
              Enterprise Discipline. Fixed Pricing.
            </span>
          </h1>
          <p className="web-rise text-base md:text-xl mb-10 leading-relaxed font-light max-w-3xl mx-auto" style={{ color: COLORS.slateGray, animationDelay: '0.16s' }}>
            Cedar Infrastructure Group builds and operates websites for organizations of every size and sector
            across the United States. The same IT infrastructure consulting firm trusted by Fortune 500
            enterprises and U.S. defense programs brings that standard to your website: scoped, priced, and delivered without the agency runaround.
          </p>
          <div className="web-rise flex flex-col sm:flex-row justify-center gap-4" style={{ animationDelay: '0.24s' }}>
            <button
              onClick={() => plansRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center group hover:bg-black"
              style={{ backgroundColor: COLORS.cedarGreen }}
            >
              See Plans
              <ChevronDown className="ml-2 group-hover:translate-y-0.5 transition-transform" size={16} aria-hidden="true" />
            </button>
            <a
              href={webMailto('Web Services Inquiry')}
              className="border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all text-center hover:bg-white"
              style={{ borderColor: COLORS.cedarGreen, color: COLORS.cedarGreen }}
            >
              Get Started
            </a>
          </div>
          <p className="web-rise mt-5 text-xs font-light tracking-wide text-gray-500" style={{ animationDelay: '0.3s' }}>
            Builds from $3,500 · Care Plan $125/mo · No hourly billing on builds
          </p>
          <div className="web-rise mt-10 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8" style={{ animationDelay: '0.38s' }}>
            {['Fixed Pricing', 'Live In About Two Weeks', 'U.S. Based Delivery', 'Enterprise Security Standards'].map(chip => (
              <span key={chip} className="flex items-start sm:items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-left" style={{ color: COLORS.cedarGreen }}>
                <CheckCircle2 size={13} className="shrink-0 mt-0.5 sm:mt-0" style={{ color: COLORS.bronzeAccent }} aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-white py-16 md:py-20 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>
            No Proposals. No Discovery Calls. No Surprises.
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: COLORS.slateGray }}>
            Most web projects die in the quoting phase. Ours do not have one. Every plan below is fixed-price and
            fixed-scope: you know the cost, the deliverable, and the timeline before we write a line of code.
            Pick a plan, send us your content, and your site is live, typically within two weeks.
          </p>
          <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-5" style={{ color: COLORS.bronzeOnLight }}>Every Cedar site includes</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            <WebInclude text="Custom design. No templates, no page builders, no site that looks like your competitor's." />
            <WebInclude text="Mobile-first, responsive layout." />
            <WebInclude text="Fast load times and modern, enterprise-grade security practices." />
            <WebInclude text="Contact forms that route where you need them." />
            <WebInclude text="Search engine fundamentals done right from day one." />
          </ul>
        </div>
      </section>

      {/* PLANS */}
      <section ref={plansRef} className="py-16 md:py-24 px-6" style={{ backgroundColor: COLORS.neutralBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <WebEyebrow>Fixed-Price Plans</WebEyebrow>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Choose Your Build.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch pt-4">
            <WebPlanCard
              title="Landing Page"
              price="$3,500"
              priceCaption="One-time build fee"
              tagline="One page. Everything that matters. Live fast."
              lead="The right choice for community groups, events, single-service businesses, and anyone who needs a professional presence without the sprawl."
              items={[
                'Custom single-page design, built to your brand',
                'Contact form with email routing',
                'Events calendar or schedule section',
                'Photo gallery',
                'Social media and registration links',
                'One round of revisions',
                'Launch and DNS setup',
              ]}
              note="Timeline: 1 to 2 weeks from content delivery."
              cta="Start a Landing Page"
              ctaSubject="Landing Page Build ($3,500)"
            />
            <WebPlanCard
              featured
              title="Multi-Page Site"
              price="$6,500+"
              priceCaption="One-time build fee, $6,500 to $9,500"
              tagline="Up to six pages. Editable by you."
              lead="For businesses and organizations that need room to grow: services pages, team bios, news, and a content management system so your staff can make updates without calling a developer."
              items={[
                'Everything in Landing Page',
                'Up to 6 custom-designed pages',
                'Content management system (edit text, photos, and events yourself)',
                'Blog or news section',
                'Staff and team profiles',
                'Google Business Profile and map integration',
                'Two rounds of revisions',
              ]}
              note="Timeline: 3 to 5 weeks from content delivery. Final price set by page count and features, confirmed in writing before work begins."
              cta="Start a Multi-Page Site"
              ctaSubject="Multi-Page Site Build"
            />
            <WebPlanCard
              title="Custom & Web Applications"
              price="Scoped"
              priceCaption="Quoted per project, in writing"
              tagline="When off-the-shelf isn't the job."
              lead="Member portals, e-commerce, multi-location platforms, third-party integrations, and anything with logic behind it. Scoped and quoted as a formal project under Cedar's standard engagement process."
              items={[
                'E-commerce and payment integration',
                'Membership and registration systems',
                'Multi-site and multi-chapter platforms',
                'API and back-office integrations',
                'Migrations from legacy platforms',
              ]}
              note="Scope, price, and timeline are confirmed in writing before anything starts."
              cta="Request a Scope"
              ctaSubject="Custom Web Application Scope Request"
            />
          </div>
        </div>
      </section>

      {/* CARE PLAN */}
      <section className="py-16 md:py-28 px-6 text-white" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.3em] mb-5" style={{ color: COLORS.bronzeDark }}>Care Plan &middot; $125/mo</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-6">
              We Don't Just Build It.<br />We Run It.
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-10">
              A website is not a one-time purchase. It is infrastructure. Every Cedar site is backed by a Care Plan
              that keeps it fast, secure, and current.
            </p>
            <div className="space-y-7 border-l-2 pl-6 md:pl-8" style={{ borderColor: COLORS.bronzeAccent }}>
              <div>
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-1.5">One flat monthly number.</h3>
                <p className="text-[15px] font-light leading-relaxed text-gray-400">Hosting, domain renewal, security, and small updates in a single line item. No surprise invoices.</p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-1.5">Email us. It gets done.</h3>
                <p className="text-[15px] font-light leading-relaxed text-gray-400">Your two monthly content updates are handled by the same team that built the site, usually within days.</p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-1.5">Leave cleanly, any time after year one.</h3>
                <p className="text-[15px] font-light leading-relaxed text-gray-400">Cancel with 30 days' notice and take your domain and a full export of your site with you.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 md:p-10">
            <div className="flex items-end justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none">$125<span className="text-lg font-light text-gray-400">/mo</span></p>
                <p className="text-sm font-light text-gray-400 mt-2">12-month initial term, then month-to-month.</p>
              </div>
              <span className="hidden sm:inline-block shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 border" style={{ borderColor: 'rgba(163,138,106,0.5)', color: COLORS.bronzeDark }}>
                All Cedar Sites
              </span>
            </div>
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-5" style={{ color: COLORS.bronzeDark }}>What your plan covers</p>
            <ul className="space-y-4">
              {[
                'Managed hosting on modern, fast infrastructure',
                'Domain registration and renewal, so a lapsed domain never takes your site down',
                'SSL certificate and security updates',
                'Uptime monitoring',
                'Up to 2 content updates per month (event changes, photo swaps, text edits, just email us)',
                'Backups and restore capability',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3.5">
                  <CheckCircle2 size={17} className="shrink-0 mt-0.5" style={{ color: COLORS.bronzeDark }} aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 pt-6 border-t border-white/10 text-sm font-light leading-relaxed text-gray-300">
              Additional changes beyond the monthly allowance are billed at $150/hr, quoted before work begins.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S EXTRA, IN PLAIN ENGLISH */}
      <section className="bg-white py-16 md:py-24 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <WebEyebrow>No Surprises</WebEyebrow>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4" style={{ color: COLORS.cedarGreen }}>
              What's Extra, In Plain English.
            </h2>
            <p className="text-base font-light leading-relaxed max-w-3xl mx-auto" style={{ color: COLORS.slateGray }}>
              Your build fee covers the design, the build, and the launch. A few things are billed separately
              because their cost depends on choices you make. Here is exactly what those are, so nothing on
              your invoice is ever a surprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
            <WebExtraItem icon={<Globe size={18} />} title="Your domain name (your web address)">
              Registering a name like yourpractice.com is a small yearly fee paid to a registrar, most standard
              names cost less than $60 per year. If someone else already owns the exact name you want, it may not
              be available at any price, or the owner may ask a premium for it. We check availability before you
              commit and help you land a strong alternative if your first choice is taken. Once registered, your
              Care Plan handles renewals so it never lapses.
            </WebExtraItem>
            <WebExtraItem icon={<Mail size={18} />} title="Professional email at your domain">
              Email addresses like frontdesk@yourpractice.com are a separate service from the website, run on
              Microsoft 365 or Google Workspace, with a monthly fee per mailbox billed by that provider. It is
              worth it: patients and customers trust an email that matches your website far more than a Gmail or
              Yahoo address. We set it up and connect it to your domain as an add-on service, quoted up front.
            </WebExtraItem>
            <WebExtraItem icon={<FileText size={18} />} title="Your words, photos, and logo">
              You know your business; you supply the text, photos, and logo, and we make them shine. If you need
              professional copywriting, logo design, or photography, we can scope that separately or work with a
              provider you choose.
            </WebExtraItem>
            <WebExtraItem icon={<CreditCard size={18} />} title="Third-party services with their own fees">
              Online booking, payment processing, appointment reminders, and review platforms are services you
              subscribe to directly, each with its own pricing. We integrate them into your site; the
              subscriptions themselves stay in your name and your control.
            </WebExtraItem>
          </div>
        </div>
      </section>

      {/* DOMAIN POLICY */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: COLORS.stoneBg }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>
            Your Domain Is Yours. Full Stop.
          </h2>
          <p className="text-base font-light leading-relaxed mb-8" style={{ color: COLORS.slateGray }}>
            Cedar registers and manages your domain during your Care Plan so renewals never slip through the cracks.
            A lapsed domain is the most common way small organizations lose their web presence overnight.
            But it is your name, and it stays that way:
          </p>
          <ul className="space-y-3 mb-8">
            <WebInclude text="You are listed as the registrant of record." />
            <WebInclude text="If you ever leave, we initiate transfer to your registrar within 10 business days of your request, guaranteed in writing in our service agreement." />
            <WebInclude text="Your only cost is the registrar's standard transfer fee, if any." />
          </ul>
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: COLORS.bronzeOnLight }}>
            No hostage domains. No exit penalties. We keep clients with service, not lock-in.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <WebEyebrow>The Process</WebEyebrow>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Four Steps to Live.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HowStep n="01" title="Pick Your Plan" desc="Fixed price, fixed scope. You already know the number." />
            <HowStep n="02" title="Send Your Content" desc="Text, photos, logos, links. We provide a simple checklist of what we need." />
            <HowStep n="03" title="Review Your Build" desc="We deliver a live preview. You mark it up; we revise." />
            <HowStep n="04" title="Launch" desc="DNS, forms, and analytics configured. Your site is live and on a Care Plan from day one." />
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-16 md:py-20 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Who This Is For.</h2>
          <p className="text-base font-light leading-relaxed mb-6" style={{ color: COLORS.slateGray }}>
            Businesses of all sizes and sectors, churches and ministries, community organizations, nonprofits,
            medical and professional practices, trades and contractors. Anyone in the United States and its
            territories who needs a serious web presence without agency pricing or DIY headaches.
          </p>
          <p className="text-sm font-light leading-relaxed" style={{ color: COLORS.slateGray }}>
            If your technology needs extend beyond web development, enterprise networking, infrastructure staffing,
            and scoped IT delivery remain Cedar's core practice.{' '}
            <a href="/" className="font-bold hover:underline uppercase text-xs tracking-wider" style={{ color: COLORS.bronzeOnLight }}>Learn more</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <WebEyebrow>FAQ</WebEyebrow>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase" style={{ color: COLORS.cedarGreen }}>Questions, Answered.</h2>
          </div>
          <div className="space-y-6">
            <WebFaq q="Is the build price really everything I'll pay?" a="The build fee covers design, build, and launch in full. Ongoing, you'll have the $125/mo Care Plan, your domain's small yearly registration fee, and optional add-ons like professional email if you want them. Every one of those is listed above and quoted before you commit. There are no other charges." />
            <WebFaq q="Why is there no hourly rate on builds?" a="Because you shouldn't pay for our meetings. Fixed scope means the price is the price, and efficiency is our problem, not your bill." />
            <WebFaq q="Can you set up professional email addresses for my business?" a="Yes. Addresses at your own domain, like office@yourpractice.com, run on Microsoft 365 or Google Workspace with a per-mailbox monthly fee from that provider. We handle the setup and connection as an add-on, quoted up front." />
            <WebFaq q="What if the domain name I want is taken?" a="Domain names are first-come, first-served worldwide, so if someone owns your exact name we cannot force a sale. We check availability before you commit and help you choose a strong alternative, and we never start a build until you're happy with the name." />
            <WebFaq q="Can I edit the site myself?" a="Multi-Page Sites include a CMS for self-service edits. Landing Pages are maintained by us. That's what your 2 monthly Care Plan updates are for." />
            <WebFaq q="What if I need more than 6 pages?" a="That's a Custom engagement. We'll scope it in writing before anything starts." />
            <WebFaq q="Do you do e-commerce?" a="Yes, under Custom & Web Applications." />
            <WebFaq q="What happens if I cancel my Care Plan?" a="After the 12-month initial term, cancel with 30 days' notice. We hand over your domain and a full export of your site files. Domains not claimed within 90 days of termination may be released." />
            <WebFaq q="Do you work outside the United States?" a="No. We serve U.S. customers exclusively. Sites are built to U.S. accessibility (ADA) and data management standards; we do not offer GDPR compliance for international audiences." />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 md:py-24 px-6 text-white text-center" style={{ backgroundColor: COLORS.cedarGreen }}>
        <div className="max-w-3xl mx-auto">
          <WebEyebrow light>One Email Starts It</WebEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Ready When You Are.</h2>
          <p className="text-base font-light leading-relaxed text-gray-300 mb-8">
            Tell us which plan fits and what you're building.
            We'll reply with the content checklist and a start date.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={webMailto('Web Services Inquiry')}
              className="text-white border border-white/40 hover:bg-white hover:text-black px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${WEB_MAIL}`} className="text-sm font-light hover:underline" style={{ color: COLORS.bronzeDark }}>{WEB_MAIL}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
