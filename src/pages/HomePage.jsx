import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Box, Ship, Plane, Truck, Train, 
  Layers, ArrowUpRight, Compass, Target, 
  MapPin, Phone, Mail, CheckCircle2, ChevronRight, Check, Anchor,
  Globe, Search, Apple, Wheat, ShoppingBag, FileCheck, Award,
  Users2, Calendar, Play, User, Users, Leaf
} from 'lucide-react';
import { transportModes, logisticsServices, whyChooseUsPillars } from '../data/services.js';
import { ApedaGraphic, MultimodalGraphic, InlandHubGraphic, GlobalDeskGraphic } from '../components/HeroHighlightGraphics.jsx';

export default function HomePage({ onOpenQuote, onOpenServiceModal }) {
  const dynamicWords = [
    'Global Trade.',
    'World Markets.',
    'Supply Chains.',
    'Global Freight.'
  ];
  const [wordIndex, setWordIndex] = React.useState(0);
  const [fadeState, setFadeState] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        setFadeState(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'search': return <Search style={{ width: 24, height: 24 }} />;
      case 'apple': return <Apple style={{ width: 24, height: 24 }} />;
      case 'wheat': return <Wheat style={{ width: 24, height: 24 }} />;
      case 'shopping-bag': return <ShoppingBag style={{ width: 24, height: 24 }} />;
      case 'box': return <Box style={{ width: 24, height: 24 }} />;
      case 'file-check': return <FileCheck style={{ width: 24, height: 24 }} />;
      case 'shield-check': return <ShieldCheck style={{ width: 24, height: 24 }} />;
      case 'ship': return <Ship style={{ width: 24, height: 24 }} />;
      case 'layers': return <Layers style={{ width: 24, height: 24 }} />;
      default: return <Globe style={{ width: 24, height: 24 }} />;
    }
  };

  return (
    <main className="home-main-exact">
      {/* 1. HERO SECTION WITH EXACT TEMPLATE LAYOUT */}
      <section className="hero-section hero-template-exact" id="home">
        <div className="hero-bg-container">
          <img 
            src="/assets/bg.png" 
            alt="Pankaj Overseas Multimodal Global Logistics Network" 
            className="hero-bg-image-exact"
          />
          <div className="hero-gradient-overlay-exact"></div>
        </div>

        <div className="container-wide hero-content-container">
          <div className="hero-content-wrapper-exact">
            {/* Top Eyebrow */}
            <div className="hero-eyebrow-exact">
              <span className="eyebrow-dash">—</span>
              <span>INTERNATIONAL TRADE & FREIGHT FORWARDING</span>
            </div>

            {/* Main Headline (Guaranteed 2 Lines) */}
            <h1 className="hero-title-exact">
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Connecting Continents.</span><br />
              <span className="highlight-gold" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                Empowering{' '}
                <span 
                  style={{
                    display: 'inline-block',
                    opacity: fadeState ? 1 : 0,
                    transform: fadeState ? 'translateY(0)' : 'translateY(-6px)',
                    transition: 'all 0.28s ease-in-out',
                    color: '#4ADE80'
                  }}
                >
                  {dynamicWords[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-description-exact">
              End-to-end multimodal logistics across Sea, Air, Road & Rail — paired with APEDA-certified Indian agri-commodity sourcing delivered with absolute precision.
            </p>

            {/* Action Button */}
            <div className="hero-cta-group-exact">
              <Link to="/services" className="btn btn-primary btn-pill-gold">
                <span>Explore Our Services</span>
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Logistics Highlights Strip */}
        <div className="hero-bottom-highlights-wrapper">
          <div className="container-wide">
            <div className="hero-bottom-highlights-grid">
              <div className="hero-highlight-item">
                <ShieldCheck size={26} className="highlight-icon gold" />
                <div className="highlight-text-group">
                  <div className="highlight-title">APEDA & Spices Board</div>
                  <div className="highlight-sub">100% Certified Export Quality</div>
                </div>
              </div>

              <div className="hero-highlight-item">
                <Ship size={26} className="highlight-icon cyan" />
                <div className="highlight-text-group">
                  <div className="highlight-title">Multimodal Freight</div>
                  <div className="highlight-sub">Sea • Air • Road • Rail Corridors</div>
                </div>
              </div>

              <div className="hero-highlight-item">
                <MapPin size={26} className="highlight-icon amber" />
                <div className="highlight-text-group">
                  <div className="highlight-title">Nagpur Inland Hub</div>
                  <div className="highlight-sub">Direct Rail to JNPT & Mundra</div>
                </div>
              </div>

              <div className="hero-highlight-item">
                <Globe size={26} className="highlight-icon emerald" />
                <div className="highlight-text-group">
                  <div className="highlight-title">Global Trade Desk</div>
                  <div className="highlight-sub">Rapid Quote & Export Clearance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTIMODAL LOGISTICS SHOWCASE SECTION (EXACT REFERENCE DESIGN) */}
      <section className="modes-exact-section" id="modes">
        <div className="container-wide modes-exact-container">
          
          {/* Header */}
          <div className="modes-exact-header">
            <div className="modes-exact-eyebrow-row">
              <span className="modes-eyebrow-line"></span>
              <div className="modes-exact-eyebrow-pill">
                <Box size={14} className="modes-pill-icon" />
                <span>INTEGRATED MULTIMODAL NETWORK</span>
              </div>
              <span className="modes-eyebrow-line"></span>
            </div>

            <h2 className="modes-exact-main-heading">
              <span>Comprehensive Freight &</span>
              <span className="modes-heading-italic-green">Logistics Modes</span>
            </h2>

            <p className="modes-exact-sub-heading">
              Synchronized transport corridors linking inland manufacturing hubs directly to major maritime seaports, international airports, and global buyers.
            </p>
          </div>

          {/* Connected Multimodal Columns */}
          <div className="modes-exact-grid-wrap">
            
            {/* Background Connecting Dotted Wave Line */}
            <div className="modes-connecting-line-svg">
              <svg viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path 
                  d="M0 25 C150 15, 300 35, 450 22 C600 10, 750 32, 900 20 C1050 10, 1150 28, 1200 22" 
                  stroke="#10B981" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                  strokeOpacity="0.45"
                />
              </svg>
            </div>

            <div className="modes-exact-grid">
              {transportModes.map((mode, index) => (
                <div key={mode.id} className="mode-exact-column">
                  
                  {/* Top Watermark */}
                  <div className="mode-col-watermark">{mode.watermark}</div>

                  {/* Artwork Illustration */}
                  <div className="mode-col-art-box">
                    <img src={mode.image} alt={mode.title} className="mode-col-art-img" />
                  </div>

                  {/* Node Dot on Connected Line */}
                  <div className="mode-col-node-wrap">
                    <div className="mode-col-node-dot"></div>
                  </div>

                  {/* Text Content */}
                  <div className="mode-col-content">
                    <h3 className="mode-col-title">{mode.title}</h3>
                    <p className="mode-col-desc">{mode.desc}</p>
                    
                    <div className="mode-col-footer">
                      <span className="mode-col-stat">{mode.capacity}</span>
                      <Link to="/services" className="mode-col-explore-link" aria-label={`Explore ${mode.title}`}>
                        <span>Explore</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 3. ABOUT PANKAJ OVERSEAS SECTION (EXACT REFERENCE DESIGN WITH PBG.PNG) */}
      <section className="exact-about-section" id="about">
        
        {/* Top-Right Decorative World Flight Badge */}
        <div className="exact-about-world-deco">
          <div className="world-deco-text">
            <span>FROM</span>
            <span>INDIA</span>
            <span>TO</span>
            <span>THE WORLD</span>
          </div>
          <div className="world-deco-dash"></div>
          <div className="world-deco-plane">
            <Plane size={18} />
          </div>
        </div>

        <div className="exact-about-container">
          <div className="exact-about-grid">

            {/* Left: Gulfood 2026 Image Card in Framed Box */}
            <div className="exact-about-left">
              <div className="exact-about-frame-outer">
                <div className="exact-frame-corner-dot top-left"></div>
                <div className="exact-frame-corner-dot bottom-left"></div>
                
                <div className="exact-about-img-card">
                  <img 
                    src="/assets/g2.jpeg" 
                    alt="Pankaj Overseas at Gulfood 2026" 
                    className="exact-about-photo"
                  />

                  {/* Badge: APEDA Certified Pill */}
                  <div className="exact-badge-apeda-pill">
                    <span className="apeda-leaf-icon">
                      <Leaf size={14} />
                    </span>
                    <div className="apeda-pill-text">
                      <span className="apeda-pill-title">APEDA</span>
                      <span className="apeda-pill-sub">CERTIFIED</span>
                    </div>
                  </div>

                  {/* Bottom Docked Dark Green Banner */}
                  <div className="exact-about-bottom-banner">
                    <div>
                      <h3 className="exact-banner-title">Built on relationships.</h3>
                      <p className="exact-banner-sub">Connecting growers with global opportunity.</p>
                      <div className="exact-banner-line"></div>
                    </div>

                    {/* Decorative Leaf Vector */}
                    <svg className="exact-banner-leaves" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 50C20 50 30 30 50 20C50 20 52 38 35 48C28 52 20 50 20 50Z" fill="#16A34A" fillOpacity="0.4" stroke="#4ADE80" strokeWidth="1.2" />
                      <path d="M25 45L40 28" stroke="#86EFAC" strokeWidth="1" strokeLinecap="round" />
                      <path d="M10 52C10 52 18 36 34 30C34 30 36 44 24 52C18 55 10 52 10 52Z" fill="#15803D" fillOpacity="0.5" stroke="#22C55E" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Vertical Decorative Label */}
              <div className="exact-about-vert-tag">
                <span>INDIA</span>
                <span>TO A</span>
                <span>BRIGHTER</span>
                <span>WORLD</span>
                <div className="vert-tag-line"></div>
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="exact-about-right">
              
              <div className="exact-about-eyebrow">
                <span>—</span>
                <span>ABOUT PANKAJ OVERSEAS</span>
              </div>

              <div className="exact-about-headline">
                <span className="exact-about-headline-partner">Your partner.</span>
                <span className="exact-about-headline-borders">Beyond borders.</span>
              </div>

              <p className="exact-about-lead">
                Since 2004, we've connected India's finest agro-commodity producers with buyers around the world.
              </p>

              {/* 3 Features Row Connected with Dotted Green Line */}
              <div className="exact-about-features-pipeline-wrap">
                <div className="features-pipeline-line">
                  <span className="pipeline-dot dot-1"></span>
                  <span className="pipeline-dot dot-2"></span>
                </div>

                <div className="exact-about-features-row">
                  
                  {/* 1. Direct farm sourcing */}
                  <div className="exact-about-feature-col">
                    <div className="exact-about-icon-circle">
                      <Leaf size={20} strokeWidth={2} />
                    </div>
                    <h4 className="exact-about-feature-title">Direct farm sourcing</h4>
                    <p className="exact-about-feature-desc">
                      Traceable origins.<br />
                      Trusted growers.
                    </p>
                  </div>

                  {/* 2. Multimodal freight */}
                  <div className="exact-about-feature-col">
                    <div className="exact-about-icon-circle">
                      <Ship size={20} strokeWidth={2} />
                    </div>
                    <h4 className="exact-about-feature-title">Multimodal freight</h4>
                    <p className="exact-about-feature-desc">
                      Seamless sea, air, road<br />
                      and rail connections.
                    </p>
                  </div>

                  {/* 3. Certified quality */}
                  <div className="exact-about-feature-col">
                    <div className="exact-about-icon-circle">
                      <ShieldCheck size={20} strokeWidth={2} />
                    </div>
                    <h4 className="exact-about-feature-title">Certified quality</h4>
                    <p className="exact-about-feature-desc">
                      APEDA-certified.<br />
                      Export-ready.
                    </p>
                  </div>

                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="exact-about-buttons-row">
                <Link to="/about" className="exact-btn-pill-dark">
                  <span>Our full story</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="exact-btn-pill-outline">
                  <span>Contact trade desk</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Full-Width Deep Forest Green Stats Bar */}
        <div className="exact-about-stats-bar-outer">
          <div className="exact-about-container">
            <div className="exact-about-stats-bar">
              
              <div className="exact-about-stat-col">
                <div className="exact-stat-number">20+</div>
                <div className="exact-stat-label">YEARS IN TRADE</div>
              </div>

              <div className="exact-about-stat-col">
                <div className="exact-stat-number">45+</div>
                <div className="exact-stat-label">COUNTRIES REACHED</div>
              </div>

              <div className="exact-about-stat-col">
                <div className="exact-stat-icon-wrap">
                  <ShieldCheck className="exact-stat-icon" size={28} />
                </div>
                <div className="exact-stat-label">APEDA CERTIFIED</div>
              </div>

              <div className="exact-about-stat-col">
                <div className="exact-stat-icon-wrap">
                  <MapPin className="exact-stat-icon" size={28} />
                </div>
                <div className="exact-stat-label">ZERO-MILE HUB</div>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* 4. OUR SERVICES SECTION (4 FEATURED SERVICES) */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-tag">
                <Layers style={{ width: 14, height: 14 }} />
                <span>OUR SERVICES</span>
              </div>
              <h2 className="section-heading">
                Core Trade & Sourcing Services
              </h2>
              <p className="section-subtitle">
                APEDA-certified agricultural commodity sourcing, spices export, grain trading, and integrated multimodal export logistics.
              </p>
            </div>

            <Link to="/services" className="btn btn-primary">
              <span>View All Services</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>

          <div className="services-cards-grid">
            {logisticsServices.slice(0, 4).map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => onOpenServiceModal(service)}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenServiceModal(service);
                  }
                }}
              >
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <span className="service-card-badge" style={{ borderColor: service.color, color: service.color }}>
                    {service.badge}
                  </span>
                </div>
                <div className="service-card-body">
                  <div className="service-card-icon" style={{ backgroundColor: `${service.color}18`, color: service.color }}>
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.subtitle}</p>
                  <div className="service-card-footer">
                    <span 
                      className="service-link" 
                      style={{ color: service.color }}
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight style={{ width: 14, height: 14 }} />
                    </span>
                    <button 
                      className="btn btn-outline-gold btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote(service.title);
                      }}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE PANKAJ APPROACH (EXACT REFERENCE WITH LBG.PNG) */}
      <section className="pankaj-approach-section" id="approach">
        {/* Left Curved Dark Green Organic Backdrop Shape */}
        <div className="approach-curved-bg"></div>

        <div className="container-wide approach-container">
          <div className="approach-grid-wrap">
            
            {/* Left Column */}
            <div className="approach-left">
              <div className="approach-eyebrow">
                <span className="approach-eyebrow-dash">—</span>
                <span>THE PANKAJ APPROACH</span>
              </div>
              
              <h2 className="approach-title">
                <span className="title-white">Across borders.</span>
                <span className="title-mint">With clarity.</span>
              </h2>
              
              <p className="approach-desc">
                International trade involves many moving parts. We bring your requirements, transport and communication together —so you know what comes next.
              </p>
            </div>

            {/* Right Column (Connected 2x3 Grid with Pipeline Connectors) */}
            <div className="approach-right-wrapper">
              
              {/* Process Cards Grid with Connected Nodes */}
              <div className="approach-cards-grid">
                
                {/* 01. Your requirements first (White) */}
                <div className="approach-card-item card-white card-01">
                  <div className="pipeline-node node-left-start"></div>
                  <div className="pipeline-bridge-line bridge-right">
                    <span className="pipeline-bridge-dot"></span>
                  </div>
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-outline">
                      <ShieldCheck className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">01</span>
                    <h3 className="approach-item-title">Your requirements first</h3>
                    <p className="approach-item-desc">Every shipment starts with understanding your cargo, priorities and destination.</p>
                  </div>
                </div>

                {/* 02. Transport that fits (Green) */}
                <div className="approach-card-item card-green card-02">
                  <div className="pipeline-loop-down-right"></div>
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-solid">
                      <Layers className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">02</span>
                    <h3 className="approach-item-title">Transport that fits</h3>
                    <p className="approach-item-desc">Sea, air, road or rail—coordinated around your shipment’s needs.</p>
                  </div>
                </div>

                {/* 03. Connecting markets (Green) */}
                <div className="approach-card-item card-green card-03">
                  <div className="pipeline-loop-down-left"></div>
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-solid">
                      <Globe className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">03</span>
                    <h3 className="approach-item-title">Connecting markets</h3>
                    <p className="approach-item-desc">Bringing sourcing and destination markets closer to your business.</p>
                  </div>
                </div>

                {/* 04. Clear next steps (White) */}
                <div className="approach-card-item card-white card-04">
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-outline">
                      <FileCheck className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">04</span>
                    <h3 className="approach-item-title">Clear next steps</h3>
                    <p className="approach-item-desc">Understand what is needed, what is underway and what comes next.</p>
                  </div>
                </div>

                {/* 05. Practical trade guidance (White) */}
                <div className="approach-card-item card-white card-05">
                  <div className="pipeline-bridge-line bridge-right">
                    <span className="pipeline-bridge-dot"></span>
                  </div>
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-outline">
                      <User className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">05</span>
                    <h3 className="approach-item-title">Practical trade guidance</h3>
                    <p className="approach-item-desc">Make informed decisions with straightforward explanations and coordinated support.</p>
                  </div>
                </div>

                {/* 06. One point of contact (Green) */}
                <div className="approach-card-item card-green card-06">
                  <div className="pipeline-terminal-connector">
                    <div className="pipeline-terminal-circle">
                      <ArrowRight size={13} color="#FFFFFF" strokeWidth={2.6} />
                    </div>
                  </div>
                  <div className="approach-card-icon-col">
                    <div className="approach-icon-circle green-solid">
                      <Users className="approach-icon" />
                    </div>
                  </div>
                  <div className="approach-card-content">
                    <span className="approach-num">06</span>
                    <h3 className="approach-item-title">One point of contact</h3>
                    <p className="approach-item-desc">Keep conversations connected, from your first enquiry through shipment.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. QUICK INQUIRY / GET A QUOTE CTA SECTION (EXECUTIVE BANNER) */}
      <section className="home-cta-banner-section" id="quote">
        <div className="home-cta-banner-bg">
          <img src="/assets/bg.png" alt="Global Multimodal Freight Fleet" />
          <div className="home-cta-banner-overlay"></div>
        </div>

        <div className="container-wide home-cta-banner-container">
          <div className="home-cta-banner-card">
            <div className="home-cta-left">
              <div className="home-cta-eyebrow">
                <Phone size={13} className="eyebrow-phone-icon" />
                <span>INTERNATIONAL TRADE & FREIGHT DESK</span>
              </div>
              <h2 className="home-cta-title">
                Ready to Initiate Your Next <span className="highlight-gold">Global Consignment?</span>
              </h2>
              <p className="home-cta-desc">
                Connect with our Nagpur central hub and port dispatch desks for competitive multimodal freight tariffs, certified Indian agri-commodity sourcing, and zero-delay customs clearance.
              </p>
              
              <div className="home-cta-modes-strip">
                <div className="mode-pill-item">
                  <Ship size={14} />
                  <span>SEA FREIGHT</span>
                </div>
                <div className="mode-pill-item">
                  <Plane size={14} />
                  <span>AIR CARGO</span>
                </div>
                <div className="mode-pill-item">
                  <Truck size={14} />
                  <span>ROAD LOGISTICS</span>
                </div>
                <div className="mode-pill-item">
                  <Train size={14} />
                  <span>RAIL RAKES</span>
                </div>
              </div>
            </div>

            <div className="home-cta-right">
              <div className="home-cta-action-stack">
                <Link to="/contact" className="btn btn-primary btn-pill-gold btn-lg cta-primary-btn">
                  <span>Contact Our Trade Specialists</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  className="btn btn-secondary-light btn-lg cta-secondary-btn"
                  onClick={() => onOpenQuote()}
                >
                  <FileCheck size={16} />
                  <span>Request Instant Quotation</span>
                </button>
                <div className="cta-trust-note">
                  <CheckCircle2 size={13} className="note-check" />
                  <span>Guaranteed response within 2 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
