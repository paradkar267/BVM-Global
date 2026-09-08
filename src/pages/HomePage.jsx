import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Box, Ship, Plane, Truck, Train, 
  Layers, ArrowUpRight, Compass, Target, 
  MapPin, Phone, Mail, CheckCircle2, ChevronRight, Check, Anchor,
  Globe, Search, Apple, Wheat, ShoppingBag, FileCheck, Award,
  Users2, Calendar, Play
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

      {/* 2. MULTIMODAL LOGISTICS SHOWCASE SECTION */}
      <section className="modes-showcase-section">
        <div className="container-wide">
          <div className="modes-section-header">
            <div>
              <div className="section-eyebrow">
                <Ship style={{ width: 15, height: 15 }} />
                <span>INTEGRATED MULTIMODAL NETWORK</span>
              </div>
              <h2 className="section-heading">
                Comprehensive Freight & <span className="highlight-gold">Logistics Modes</span>
              </h2>
            </div>
            <p className="modes-header-desc">
              Synchronized transport corridors linking inland manufacturing hubs directly to major maritime seaports, international airports, and global buyers.
            </p>
          </div>

          <div className="modes-cards-grid-4">
            {transportModes.map((mode) => (
              <div key={mode.id} className="mode-feature-card">
                <div className="mode-card-img-wrap">
                  <img src={mode.image} alt={mode.title} />
                  <div className="mode-card-badge">
                    {mode.id === 'sea' && <Ship style={{ width: 14, height: 14 }} />}
                    {mode.id === 'air' && <Plane style={{ width: 14, height: 14 }} />}
                    {mode.id === 'road' && <Truck style={{ width: 14, height: 14 }} />}
                    {mode.id === 'rail' && <Train style={{ width: 14, height: 14 }} />}
                    <span>{mode.name}</span>
                  </div>
                </div>
                <div className="mode-card-body">
                  <h3 className="mode-card-title">{mode.title}</h3>
                  <p className="mode-card-desc">{mode.desc}</p>
                  
                  <div className="mode-card-footer">
                    <span className="mode-card-capacity">{mode.capacity.split('/')[0]}</span>
                    <Link to="/services" className="mode-card-action-link" aria-label={`Explore ${mode.title}`}>
                      <span>Explore</span>
                      <ArrowRight style={{ width: 13, height: 13 }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION ("Your Partner Beyond Borders") */}
      {/* 3. ABOUT US SECTION ("Your Partner Beyond Borders") */}
      <section className="about-section-redesigned" id="about">
        <div className="container">
          
          <div className="about-redesign-header">
            <div className="about-header-left">
              <div className="about-eyebrow-line">
                <span className="line"></span>
                <span className="text">ABOUT PANKAJ OVERSEAS</span>
              </div>
              <h2 className="about-heading-redesign">
                <span className="dark">Your partner.</span><br/>
                <span className="gold">Beyond borders.</span>
              </h2>
            </div>
            
            <div className="about-header-right">
              <div className="vertical-line-divider"></div>
              <p className="about-desc-redesign">
                Connecting Indian producers with global markets through dependable sourcing, quality assurance and coordinated logistics.
              </p>
            </div>
          </div>

          <div className="about-redesign-main">
            <div className="about-gallery-grid-preview">
              <div className="about-gallery-thumb">
                <img src="/assets/g1.jpeg" alt="Port Logistics Dispatch" />
                <span className="gallery-thumb-tag">PORT DISPATCH</span>
              </div>
              <div className="about-gallery-thumb">
                <img src="/assets/g2.jpeg" alt="Nagpur Zero-Mile Hub" />
                <span className="gallery-thumb-tag">NAGPUR HUB</span>
              </div>
              <div className="about-gallery-thumb">
                <img src="/assets/g3.jpeg" alt="Agro Quality Inspection" />
                <span className="gallery-thumb-tag">APEDA QUALITY</span>
              </div>
              <div className="about-gallery-thumb">
                <img src="/assets/g4.jpeg" alt="Multimodal Freight Fleet" />
                <span className="gallery-thumb-tag">FREIGHT FLEET</span>
              </div>
            </div>

            <div className="about-features-wrapper">
              <div className="about-feature-item">
                <div className="feature-icon-outline"><Globe size={24} strokeWidth={1.5} /></div>
                <div className="feature-text">
                  <h4>Global connectivity</h4>
                  <p>Connecting Indian sourcing regions to international markets.</p>
                </div>
              </div>
              
              <div className="feature-divider-line"></div>
              
              <div className="about-feature-item">
                <div className="feature-icon-outline"><Ship size={24} strokeWidth={1.5} /></div>
                <div className="feature-text">
                  <h4>Multimodal logistics</h4>
                  <p>Coordinated movement by sea, air, road and rail.</p>
                </div>
              </div>
              
              <div className="feature-divider-line"></div>
              
              <div className="about-feature-item">
                <div className="feature-icon-outline"><FileCheck size={24} strokeWidth={1.5} /></div>
                <div className="feature-text">
                  <h4>End-to-end coordination</h4>
                  <p>Support with quality checks, packaging and export documentation.</p>
                </div>
              </div>

              <div className="about-actions-row">
                <Link to="/about" className="btn-explore-story">
                  <span>Explore our story</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="link-contact-desk">
                  <span>Contact trade desk</span>
                  <ArrowUpRight size={16} />
                </Link>
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

      {/* 6. WHY CHOOSE US PILLARS */}
      <section className="why-us-section" id="why-us">
        <div className="container">
          <div className="why-us-header">
            <div className="section-tag">
              <Award style={{ width: 14, height: 14 }} />
              <span>WHY PANKAJ OVERSEAS</span>
            </div>
            <h2 className="section-heading">
              Why Global Businesses Trust Us
            </h2>
            <p className="section-subtitle">
              Built on decades of trade integrity, direct farm-gate sourcing mastery, and synchronized multimodal logistics capabilities.
            </p>
          </div>

          <div className="why-us-grid">
            {whyChooseUsPillars.map((pillar) => (
              <div key={pillar.num} className="why-card-ref">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    {pillar.icon === 'shield-check' && <ShieldCheck size={22} />}
                    {pillar.icon === 'layers' && <Layers size={22} />}
                    {pillar.icon === 'globe' && <Globe size={22} />}
                    {pillar.icon === 'message-square' && <Compass size={22} />}
                    {pillar.icon === 'award' && <Award size={22} />}
                    {pillar.icon === 'users' && <Users2 size={22} />}
                  </div>
                  <div className="why-card-num-badge">
                    <span>{pillar.num}</span>
                  </div>
                </div>

                <div className="why-card-content">
                  <div className="why-metric-pill">
                    <span className="metric-dot"></span>
                    <span className="metric-text">{pillar.metric}</span>
                  </div>
                  <h3 className="why-card-title">{pillar.title}</h3>
                  <p className="why-card-desc">{pillar.desc}</p>
                </div>

                <div className="why-card-footer">
                  <div className="why-highlight-chip">
                    <Check size={13} className="chip-check" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
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
