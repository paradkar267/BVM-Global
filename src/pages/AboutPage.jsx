import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Globe, Target, Award, Compass, MapPin, 
  CheckCircle2, ArrowRight, Anchor, Factory, Users, HeartHandshake,
  TrendingUp, Sparkles, Truck, Check, Camera, X, Maximize2, Ship, Leaf
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('ALL');

  const leadershipValues = [
    {
      title: 'Zero-Tolerance Quality Rigor',
      description: 'Every batch of spices, rice, and agro-commodities undergoes multi-tier physical and lab testing before container stuffing.',
      icon: ShieldCheck
    },
    {
      title: 'Direct Farm-to-Port Integrity',
      description: 'We eliminate intermediaries, guaranteeing farmer prosperity, unadulterated freshness, and full traceability.',
      icon: HeartHandshake
    },
    {
      title: 'Predictable Multimodal Transit',
      description: 'Our integrated Sea, Air, Road and Rail logistics network guarantees delivery schedules across 50+ world ports.',
      icon: Compass
    },
    {
      title: 'Regulatory & Compliance Mastery',
      description: 'Seamless navigation of APEDA, FSSAI, US FDA, EU MRL, and GCC SFDA standards with zero clearance delays.',
      icon: Award
    }
  ];

  const milestones = [
    { 
      year: '2004', 
      phase: 'PHASE 01',
      tag: 'FOUNDATION',
      title: 'Founding & Domestic Trade', 
      desc: 'Started in Nagpur as a regional agricultural commodity trader and aggregator for Central India farms.',
      metric: 'Central India Origin Hub',
      icon: MapPin,
      featured: false
    },
    { 
      year: '2010', 
      phase: 'PHASE 02',
      tag: 'EXPORT DESK',
      title: 'Export Division Launch', 
      desc: 'Expanded into direct export operations, dispatching initial container shipments of Indian Spices and Basmati rice to GCC markets.',
      metric: 'GCC & Middle East Corridors',
      icon: Ship,
      featured: false
    },
    { 
      year: '2016', 
      phase: 'PHASE 03',
      tag: 'COLD-CHAIN FLEET',
      title: 'Multimodal Logistics Fleet', 
      desc: 'Integrated dedicated GPS-enabled container trailers and launched dedicated refrigerated cold-chain corridors to JNPT.',
      metric: 'GPS Reefer Fleet to JNPT',
      icon: Truck,
      featured: false
    },
    { 
      year: '2021', 
      phase: 'PHASE 04',
      tag: '45+ COUNTRIES',
      title: 'Global Footprint Expansion', 
      desc: 'Crossed 45+ destination countries across Europe, North America, Southeast Asia, and Africa with APEDA & Spices Board accolades.',
      metric: '45+ Destination Nations',
      icon: Globe,
      featured: false
    },
    { 
      year: '2026', 
      phase: 'PHASE 05',
      tag: 'SMART TELEMETRY',
      title: 'Next-Gen Smart Logistics', 
      desc: 'Operating advanced multimodal freight corridors, digital telemetry, automated container load planning, and sustainable trade corridors.',
      metric: 'Digital Telemetry & AI Corridors',
      icon: Sparkles,
      featured: true
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/assets/g2.jpeg',
      title: 'Gulfood 2026 Dubai Exhibition',
      badge: 'GLOBAL TRADE EXPO',
      category: 'TRADE_EXPOS',
      location: 'DUBAI WORLD TRADE CENTRE / DEC',
      desc: 'Representing India’s premier agro-commodity export desk and presenting export-grade spices to global FMCG buyers.',
      tags: ['50+ Nations Reached', 'APEDA Trade Mission', 'B2B Buyer Desks']
    },
    {
      id: 2,
      image: '/assets/g3.jpeg',
      title: 'Direct Farm Quality Inspection',
      badge: 'ORIGIN SOURCING',
      category: 'FARM_SOURCING',
      location: 'CENTRAL INDIA CHILLI CORRIDORS',
      desc: 'On-ground field inspections ensuring zero pesticide residue, optimum pod maturity, and strict sorting at farm gate.',
      tags: ['Zero Middlemen', 'Strict Lab Rigor', 'Farm Gate Quality']
    },
    {
      id: 3,
      image: '/assets/g1.jpeg',
      title: 'Turkiye AgTech & Trade Delegation',
      badge: 'BILATERAL TRADE',
      category: 'TRADE_EXPOS',
      location: 'AGRICULTURAL TECHNOLOGIES CLUSTER',
      desc: 'High-level bilateral trade discussions expanding Eurasian corridors for dehydrated onion, garlic, and whole spices.',
      tags: ['European Corridors', 'AgTech Standards', 'Contract Sourcing']
    },
    {
      id: 4,
      image: '/assets/g4.jpeg',
      title: 'Ethical & Traceable Sourcing',
      badge: 'ETHICAL SOURCING',
      category: 'FARM_SOURCING',
      location: 'REGIONAL GROWER BELTS, MAHARASHTRA',
      desc: 'Partnering with farmer groups for sustainable cultivation and ensuring full traceability from farm to global markets.',
      tags: []
    },
    {
      id: 5,
      image: '/assets/g5.jpeg',
      title: 'Product Showcase at Global Platforms',
      badge: 'PRODUCT SHOWCASE',
      category: 'TRADE_EXPOS',
      location: 'GULFOOD GLOBAL INNOVATION PAVILIONS',
      desc: 'Showcasing India’s finest spices, value-added products, and new innovations to international buyers.',
      tags: []
    }
  ];

  const certifications = [
    { 
      code: 'APEDA', 
      authority: 'MINISTRY OF COMMERCE & INDUSTRY',
      regNumber: 'APEDA / RCMC REG: EXP-2004',
      name: 'Agricultural & Processed Food Products Export Development Authority', 
      desc: 'Govt. of India registered agro export house with guaranteed origin traceability.',
      icon: ShieldCheck,
      color: 'emerald',
      status: 'Statutory Exporter Active'
    },
    { 
      code: 'SPICES BOARD', 
      authority: 'GOVT. OF INDIA STATUTORY BODY',
      regNumber: 'CRES / SPICES-CERT #0941',
      name: 'Spices Board of India (Ministry of Commerce)', 
      desc: 'Certified export quality compliance with batch testing for all whole and ground spices.',
      icon: Sparkles,
      color: 'gold',
      status: 'Quality Assayed License'
    },
    { 
      code: 'FSSAI', 
      authority: 'FOOD SAFETY REGULATOR',
      regNumber: 'CENTRAL LIC #100200440019',
      name: 'Food Safety and Standards Authority of India', 
      desc: 'Central Regulatory License for commercial export, hygienic handling & global logistics.',
      icon: CheckCircle2,
      color: 'green',
      status: 'Central License Verified'
    },
    { 
      code: 'ISO 22000:2018', 
      authority: 'GLOBAL FSMS STANDARD',
      regNumber: 'ISO / FSMS / HACCP ACCREDITED',
      name: 'Food Safety Management Systems Standard', 
      desc: 'Internationally certified food safety rigor from farm packaging to multimodal sea containers.',
      icon: Award,
      color: 'blue',
      status: 'International Quality Rigor'
    },
    { 
      code: 'DGFT / IEC', 
      authority: 'MINISTRY OF COMMERCE & INDUSTRY',
      regNumber: 'IEC 10-DIGIT ACTIVE REGISTRY',
      name: 'Directorate General of Foreign Trade', 
      desc: 'Valid Importer-Exporter Code Registry for frictionless customs clearance at Indian seaports.',
      icon: Anchor,
      color: 'teal',
      status: 'Customs Clearance Active'
    },
    { 
      code: 'FIEO', 
      authority: 'APEX EXPORT PROMOTION BODY',
      regNumber: 'PREMIER EXPORT HOUSE STATUS',
      name: 'Federation of Indian Export Organisations', 
      desc: 'Recognized Premier Trading Enterprise with direct trade desk facilitation across 45+ nations.',
      icon: Globe,
      color: 'indigo',
      status: 'Global Trade Network'
    }
  ];

  return (
    <main className="page-about">
      {/* 1. PAGE HERO MATCHING SERVICES TEMPLATE */}
      <section className="services-hero-exact">
        <div className="hero-bg-container">
          <img 
            src="/assets/banner.png" 
            alt="Pankaj Overseas Global Trade & Logistics Network" 
            className="services-hero-bg"
          />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="container-wide services-hero-content">
          <div className="services-hero-left">
            <div className="services-hero-eyebrow">
              <span className="line">—</span>
              <span>ABOUT PANKAJ OVERSEAS</span>
            </div>
            
            <h1 className="services-hero-title">
              Pioneering Indian agro.<br />
              <span className="gold-text">Connecting global markets.</span>
            </h1>

            <p className="services-hero-sub">
              Bridging Indian agrarian heartlands to international markets across 45+ countries through uncompromising quality standards and seamless multimodal logistics.
            </p>

            <div className="services-hero-pills">
              <div className="hero-pill-item">
                <ShieldCheck size={14} />
                <span>APEDA & Spices certified</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <MapPin size={14} />
                <span>Zero-Mile Nagpur Hub</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <Ship size={14} />
                <span>Multimodal global freight</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* 2. OUR STORY & HERITAGE (EXACT REFERENCE DESIGN) */}
      <section className="our-story-section" id="story">
        <div className="container-wide our-story-container">
          
          {/* Section Header */}
          <div className="story-header-block">
            <div className="story-eyebrow">
              <span className="story-eyebrow-dash">—</span>
              <span>OUR STORY & HERITAGE • EST. 2004</span>
            </div>

            <h2 className="story-main-title">
              <span>Connecting Sourcing Excellence</span>
              <span className="story-title-italic">With Global Trade Desks</span>
            </h2>
          </div>

          {/* 2-Column Split Grid */}
          <div className="story-split-grid">
            
            {/* Left: Farm Inspection Photo Card */}
            <div className="story-photo-wrapper">
              <div className="story-photo-card">
                <img 
                  src="/assets/main.png" 
                  alt="Field Inspection & Zero-Middlemen Sourcing" 
                  className="story-main-photo" 
                />
                <div className="story-photo-caption">
                  <h4 className="story-caption-title">Field Inspection & Zero-Middlemen Sourcing</h4>
                  <p className="story-caption-sub">Direct Grower Partnerships • Strict Quality Rigor • Global Dispatch</p>
                </div>
              </div>
            </div>

            {/* Right: Narrative, Features & Actions */}
            <div className="story-content-col">
              <p className="story-lead-text">
                Established with a vision to showcase the richness of Indian agriculture to the world, <strong>Pankaj Overseas</strong> has evolved into a premier international export house and multimodal freight logistics facilitator.
              </p>

              <p className="story-body-text">
                From the aromatic spice gardens of Kerala and the fertile Basmati belts of Northern India to the sun-drenched orchards of Maharashtra, we work hand-in-hand with verified growers, modern cleaning mills, and global liner operators to deliver unmatched quality.
              </p>

              <div className="story-divider-line"></div>

              {/* Feature 1: Direct Farm Sourcing */}
              <div className="story-feature-row">
                <div className="story-feat-icon-col">
                  <svg className="story-feat-svg" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    <path d="M16 16c-1.5-1-4-1-6 0-2 1-4 1-6 0" />
                    <path d="M22 20c-3-2-8-2-12 0-4 2-7 1-10 0" />
                  </svg>
                </div>
                <div className="story-feat-vert-divider"></div>
                <div className="story-feat-text-col">
                  <h3 className="story-feat-heading">Direct Farm Sourcing</h3>
                  <p className="story-feat-description">100% pure origin traceability with verified growers & zero middlemen.</p>
                </div>
              </div>

              <div className="story-divider-line"></div>

              {/* Feature 2: Zero-Damage Packing */}
              <div className="story-feature-row">
                <div className="story-feat-icon-col">
                  <svg className="story-feat-svg" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                    <path d="M16 11c0 2-2 3-4 3" />
                  </svg>
                </div>
                <div className="story-feat-vert-divider"></div>
                <div className="story-feat-text-col">
                  <h3 className="story-feat-heading">Zero-Damage Packing</h3>
                  <p className="story-feat-description">Multi-layer vacuum, food-grade PP, jute & export-grade CFB boxes.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="story-actions-row">
                <button className="story-btn-primary" onClick={() => onOpenQuote()}>
                  <span>Partner With Us</span>
                  <ArrowRight size={16} />
                </button>
                <a href="#journey" className="story-btn-secondary">
                  <span>Explore Our Journey</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. OPERATIONAL & INFRASTRUCTURE GALLERY (EXACT SOFT.PNG REFERENCE DESIGN) */}
      <section className="about-gallery-section" id="gallery">
        
        {/* Floating Decorative Typography */}
        <div className="gallery-floating-deco-left">
          <span>PEOPLE</span>
          <span>PRODUCE</span>
          <span>POSSIBILITIES</span>
        </div>

        <div className="gallery-floating-deco-right">
          <span>BRIDGING</span>
          <span>FARMS TO</span>
          <span>GLOBAL MARKETS</span>
          <div className="gallery-deco-vert-line"></div>
        </div>

        <div className="gallery-floating-deco-bot-right">
          <div className="gallery-bot-leaf-pin">
            <Leaf size={14} color="#FFFFFF" />
          </div>
          <span>SUSTAINABLE</span>
          <span>SOURCING</span>
          <span>STRONGER</span>
          <span>TOMORROWS</span>
        </div>

        <div className="container-wide gallery-inner-container">
          
          {/* Header */}
          <div className="gallery-header-wrap">
            <h2 className="gallery-main-heading">
              Infrastructure & Sourcing
              <div className="gallery-sub-title-row">
                <span className="gallery-deco-line"></span>
                <span className="gallery-deco-dot"></span>
                <span className="gallery-highlight-green">Excellence</span>
                <span className="gallery-deco-dot"></span>
                <span className="gallery-deco-line"></span>
              </div>
            </h2>
            
            <p className="gallery-sub-heading">
              A firsthand glimpse into our direct farm sourcing, field inspections, Nagpur zero-mile hub, and global trade delegations.
            </p>
          </div>

          {/* Gallery Cards Grid */}
          <div className="gallery-cards-grid">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-card-item"
                onClick={() => setSelectedGalleryItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedGalleryItem(item)}
              >
                <div className="gallery-image-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-image-overlay">
                    <span className="gallery-zoom-hint">
                      <Maximize2 size={13} />
                      <span>View Operations</span>
                    </span>
                  </div>
                </div>
                
                <div className="gallery-card-body">
                  <div className="gallery-card-location">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="gallery-card-title">
                    <span>{item.title}</span>
                    <ArrowRight className="gallery-title-arrow" size={16} />
                  </h3>
                  
                  <p className="gallery-card-desc">{item.desc}</p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="gallery-tags-row">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="gallery-meta-tag">
                          <Check size={11} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal / Lightbox for Preview */}
        {selectedGalleryItem && (
          <div className="gallery-modal-backdrop" onClick={() => setSelectedGalleryItem(null)}>
            <div className="gallery-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button 
                className="gallery-modal-close" 
                onClick={() => setSelectedGalleryItem(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="gallery-modal-image-wrap">
                <img src={selectedGalleryItem.image} alt={selectedGalleryItem.title} />
              </div>

              <div className="gallery-modal-content">
                <div className="gallery-modal-location">
                  <MapPin size={14} />
                  <span>{selectedGalleryItem.location}</span>
                </div>
                <h3 className="gallery-modal-title">{selectedGalleryItem.title}</h3>
                <p className="gallery-modal-desc">{selectedGalleryItem.desc}</p>
                
                {selectedGalleryItem.tags && selectedGalleryItem.tags.length > 0 && (
                  <div className="gallery-modal-tags">
                    {selectedGalleryItem.tags.map((tag, idx) => (
                      <span key={idx} className="gallery-modal-tag-pill">
                        <CheckCircle2 size={13} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="gallery-modal-action">
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedGalleryItem(null);
                      onOpenQuote();
                    }}
                  >
                    <span>Inquire About Sourcing</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 4. WHAT DRIVES US — EXACT BENTO SECTION */}
      <section className="what-drives-us-section" id="ethos">
        <div className="container-wide what-drives-us-container">

          {/* Section Header */}
          <div className="drives-exact-header">
            {/* Left Title & Eyebrow */}
            <div className="drives-header-left">
              <div className="drives-eyebrow-row">
                <span className="drives-eyebrow-line"></span>
                <span className="drives-eyebrow-text">WHAT DRIVES US</span>
                <span className="drives-eyebrow-line"></span>
              </div>
              <h2 className="drives-main-title">
                Purpose. People.
                <br />
                <span className="drives-title-accent">Possibility.</span>
              </h2>
            </div>

            {/* Middle Description */}
            <div className="drives-header-mid">
              <p className="drives-sub">
                Three pillars that have guided every container we load, every farm we visit, and every global partnership we build.
              </p>
            </div>

            {/* Right Tagline */}
            <div className="drives-header-right">
              <div className="drives-farm-tag">
                <span>FROM</span>
                <span>INDIAN FARMS</span>
                <span>TO A BRIGHTER</span>
                <span>TOMORROW</span>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="drives-exact-bento">

            {/* Card 01: Left Tall Card (Our Mission) */}
            <div className="drives-card-mission">
              <div className="drives-card-top-num">
                <span className="drives-num-text">01</span>
                <span className="drives-num-bar"></span>
              </div>
              
              <div className="drives-mission-art">
                <img 
                  src="/assets/02.png" 
                  alt="Our Mission - Indian Farms to Global Ports" 
                  className="drives-mission-image"
                />
              </div>

              <div className="drives-mission-content">
                <h3 className="drives-card-title">Our Mission</h3>
                <p className="drives-card-desc">
                  To make Indian agro-commodity sourcing transparent, traceable and dependable — eliminating intermediaries and delivering farm-gate freshness to every global buyer.
                </p>
                <div className="drives-card-divider"></div>
                <div className="drives-card-footer">
                  <CheckCircle2 size={16} className="drives-check-icon" />
                  <span>Zero middlemen. 100% traceability.</span>
                </div>
              </div>
            </div>

            {/* Right Stack: Card 02 & Card 03 */}
            <div className="drives-right-stack">

              {/* Card 02: Our Vision (Green Card) */}
              <div className="drives-card-vision">
                <div className="drives-card-badge-tag light-tag">
                  <span>PEOPLE</span>
                  <span>PRODUCE</span>
                  <span>PARTNERSHIPS</span>
                  <span>PROGRESS</span>
                </div>

                <div className="drives-card-top-num light">
                  <span className="drives-num-text light">02</span>
                  <span className="drives-num-bar light"></span>
                </div>

                <div className="drives-card-inner-body">
                  <h3 className="drives-card-title light">Our Vision</h3>
                  <p className="drives-card-desc light">
                    To be India's most trusted multimodal agro-export bridge — connecting verified growers to 50+ world ports with predictable schedules and zero compromise on quality.
                  </p>
                </div>

                <div className="drives-card-footer light">
                  <CheckCircle2 size={16} className="drives-check-icon light" />
                  <span>50+ countries. Seamless corridors.</span>
                </div>
              </div>

              {/* Card 03: Our Values (White/Light Card) */}
              <div className="drives-card-values">
                <div className="drives-card-badge-tag dark-tag">
                  <span>STRONGER</span>
                  <span>FARMERS</span>
                  <span>BRIGHTER</span>
                  <span>MARKETS</span>
                </div>

                <div className="drives-card-top-num">
                  <span className="drives-num-text">03</span>
                  <span className="drives-num-bar"></span>
                </div>

                <div className="drives-card-inner-body">
                  <h3 className="drives-card-title">Our Values</h3>
                  <p className="drives-card-desc">
                    Transparency in pricing, accountability at every handoff, and genuine care for farmer prosperity — these are not policies, they are the DNA of every deal we close.
                  </p>
                </div>

                <div className="drives-card-footer">
                  <CheckCircle2 size={16} className="drives-check-icon" />
                  <span>Integrity in every partnership.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Rooted in India Branding */}
          <div className="drives-bottom-branding">
            <span>ROOTED IN INDIA</span>
            <span>CONNECTED TO THE WORLD</span>
          </div>

        </div>
      </section>

      {/* 5. COMPANY TIMELINE / MILESTONES (EXECUTIVE GRAPHIC ROADMAP WITH BACKG.PNG) */}
      <section className="about-journey-section" id="journey">
        {/* Background Image is handled via CSS url('/assets/backg.png') */}
        
        {/* Decorative Floating Typography */}
        <div className="journey-deco-farms">
          <span>FARMS</span>
          <span>TO MARKETS</span>
          <span>A STRONGER</span>
          <span>TOMORROW</span>
          <div className="journey-deco-line"></div>
        </div>

        <div className="journey-deco-script">
          <span>Indian</span>
          <span>Origins</span>
          <span>Global</span>
          <span>Destinations</span>
        </div>

        <div className="journey-deco-spices">
          <span>ROOTED</span>
          <span>IN INDIA</span>
          <span>FUELLING</span>
          <span>GLOBAL TRADE</span>
        </div>

        <div className="journey-deco-bridging">
          <span>BRIDGING</span>
          <span>INDIA TO</span>
          <span>THE WORLD</span>
        </div>

        <div className="journey-deco-container">
          <span>CLEANER</span>
          <span>SMARTER</span>
          <span>FURTHER</span>
          <span>TOGETHER</span>
        </div>

        <div className="container-wide journey-inner-container">
          
          {/* Header */}
          <div className="journey-header">
            <div className="journey-eyebrow-badge">
              <TrendingUp className="journey-eyebrow-icon" />
              <span>OUR JOURNEY • TWO DECADES OF EVOLUTION</span>
            </div>
            <h2 className="journey-main-title">
              Two Decades of Trade{' '}
              <span className="journey-title-highlight">Excellence</span>
            </h2>
            <p className="journey-subtitle">
              From a regional central India aggregator in 2004 to a technology-enabled global export powerhouse spanning 45+ destination nations.
            </p>
          </div>

          {/* Staggered 5-Column Wave Roadmap */}
          <div className="journey-staggered-roadmap">

            {/* Wave SVG Line Behind Nodes */}
            <div className="journey-wave-track">
              <svg className="journey-wave-svg" viewBox="0 0 1000 60" preserveAspectRatio="none">
                <path 
                  d="M 0,38 C 100,52 140,22 250,22 C 360,22 400,52 500,52 C 600,52 640,22 750,22 C 860,22 900,52 1000,52" 
                  fill="none" 
                  stroke="#10B981" 
                  strokeWidth="2.5" 
                />
              </svg>
            </div>

            {/* 5 Milestone Columns */}
            <div className="journey-columns-row">

              {/* 1. 2004 - TOP */}
              <div className="journey-col journey-col--top">
                <div className="journey-milestone-card">
                  <div className="journey-card-header">
                    <div className="journey-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="journey-phase-badge">PHASE 01</div>
                  </div>
                  <div className="journey-year-tag-row">
                    <span className="journey-card-year">2004</span>
                    <span className="journey-card-tag">FOUNDATION</span>
                  </div>
                  <h3 className="journey-card-title">Founding & Domestic Trade</h3>
                  <p className="journey-card-desc">
                    Started in Nagpur as a regional agricultural commodity trader and aggregator for Central India farms.
                  </p>
                  <div className="journey-card-footer">
                    <div className="journey-footer-pill">
                      <CheckCircle2 size={13} className="journey-footer-check" />
                      <span>Central India Origin Hub</span>
                    </div>
                  </div>
                </div>

                <div className="journey-node-anchor">
                  <div className="journey-node-dot"></div>
                </div>
              </div>

              {/* 2. 2010 - BOTTOM */}
              <div className="journey-col journey-col--bottom">
                <div className="journey-node-anchor">
                  <span className="journey-node-label">2010</span>
                  <div className="journey-node-dot"></div>
                </div>

                <div className="journey-milestone-card">
                  <div className="journey-card-header">
                    <div className="journey-icon-box">
                      <Ship size={18} />
                    </div>
                    <div className="journey-phase-badge">PHASE 02</div>
                  </div>
                  <div className="journey-year-tag-row">
                    <span className="journey-card-year">2010</span>
                    <span className="journey-card-tag">EXPORT DESK</span>
                  </div>
                  <h3 className="journey-card-title">Export Division Launch</h3>
                  <p className="journey-card-desc">
                    Expanded into direct export operations, dispatching initial container shipments of Indian Spices and Basmati rice to GCC markets.
                  </p>
                  <div className="journey-card-footer">
                    <div className="journey-footer-pill">
                      <CheckCircle2 size={13} className="journey-footer-check" />
                      <span>GCC & Middle East Corridors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 2016 - TOP */}
              <div className="journey-col journey-col--top">
                <div className="journey-milestone-card">
                  <div className="journey-card-header">
                    <div className="journey-icon-box">
                      <Truck size={18} />
                    </div>
                    <div className="journey-phase-badge">PHASE 03</div>
                  </div>
                  <div className="journey-year-tag-row">
                    <span className="journey-card-year">2016</span>
                    <span className="journey-card-tag">COLD-CHAIN FLEET</span>
                  </div>
                  <h3 className="journey-card-title">Multimodal Logistics Fleet</h3>
                  <p className="journey-card-desc">
                    Integrated dedicated GPS-enabled container trailers and launched dedicated refrigerated cold-chain corridors to JNPT.
                  </p>
                  <div className="journey-card-footer">
                    <div className="journey-footer-pill">
                      <CheckCircle2 size={13} className="journey-footer-check" />
                      <span>GPS Reefer Fleet to JNPT</span>
                    </div>
                  </div>
                </div>

                <div className="journey-node-anchor">
                  <div className="journey-node-dot"></div>
                  <span className="journey-node-label bottom">2016</span>
                </div>
              </div>

              {/* 4. 2021 - BOTTOM */}
              <div className="journey-col journey-col--bottom">
                <div className="journey-node-anchor">
                  <span className="journey-node-label">2021</span>
                  <div className="journey-node-dot"></div>
                </div>

                <div className="journey-milestone-card">
                  <div className="journey-card-header">
                    <div className="journey-icon-box">
                      <Globe size={18} />
                    </div>
                    <div className="journey-phase-badge">PHASE 04</div>
                  </div>
                  <div className="journey-year-tag-row">
                    <span className="journey-card-year">2021</span>
                    <span className="journey-card-tag">45+ COUNTRIES</span>
                  </div>
                  <h3 className="journey-card-title">Global Footprint Expansion</h3>
                  <p className="journey-card-desc">
                    Crossed 45+ destination countries across Europe, North America, Southeast Asia, and Africa with APEDA & Spices Board accolades.
                  </p>
                  <div className="journey-card-footer">
                    <div className="journey-footer-pill">
                      <CheckCircle2 size={13} className="journey-footer-check" />
                      <span>45+ Destination Nations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. 2026 - TOP (HIGHLIGHTED DARK GREEN CARD) */}
              <div className="journey-col journey-col--top">
                <div className="journey-milestone-card journey-milestone-card--featured">
                  <div className="journey-card-header">
                    <div className="journey-icon-box featured">
                      <Sparkles size={18} />
                    </div>
                    <div className="journey-phase-badge featured">PHASE 05</div>
                  </div>
                  <div className="journey-year-tag-row">
                    <span className="journey-card-year featured">2026</span>
                    <span className="journey-card-tag featured">SMART TELEMETRY</span>
                  </div>
                  <h3 className="journey-card-title featured">Next-Gen Smart Logistics</h3>
                  <p className="journey-card-desc featured">
                    Operating advanced multimodal freight corridors, digital telemetry, automated container load planning, and sustainable trade corridors.
                  </p>
                  <div className="journey-card-footer">
                    <div className="journey-footer-pill featured">
                      <CheckCircle2 size={13} className="journey-footer-check featured" />
                      <span>Digital Telemetry & AI Corridors</span>
                    </div>
                  </div>
                </div>

                <div className="journey-node-anchor">
                  <div className="journey-node-dot featured">
                    <div className="journey-node-ping"></div>
                  </div>
                  <span className="journey-node-label bottom">2026</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 7. CERTIFICATIONS & COMPLIANCE (EXACT REFERENCE DESIGN WITH C1-C5) */}
      <section className="about-compliance-section" id="compliance">
        <div className="container-wide cert-compliance-container">
          
          <div className="cert-split-layout">
            
            {/* Left Column: Heading + c2.png Hero Visual */}
            <div className="cert-left-hero">
              <div className="cert-eyebrow">
                <span className="cert-eyebrow-dash">—</span>
                <span>TRUST & COMPLIANCE</span>
              </div>

              <h2 className="cert-main-title">
                <span>Certifications &</span>
                <span className="cert-title-italic"> Compliance</span>
              </h2>

              <p className="cert-hero-sub">
                Authorized by India's premier export councils, statutory ministry boards, and international trade frameworks.
              </p>

              <div className="cert-hero-image-wrap">
                <img 
                  src="/assets/c2.png" 
                  alt="Compliance Certificates & Regulatory Documents" 
                  className="cert-hero-img" 
                />
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Statutory Certifications (c1, c3, c4, c5) */}
            <div className="cert-right-grid-wrap">
              <div className="cert-2x2-grid">

                {/* 1. DGFT Registered */}
                <div className="cert-card-box cell-top-left">
                  <div className="cert-card-header">
                    <div className="cert-card-img-wrap">
                      <img src="/assets/c1.png" alt="DGFT Registered" className="cert-card-img" />
                    </div>
                    <span className="cert-badge-pill">CERTIFIED</span>
                  </div>
                  <h3 className="cert-card-name">DGFT Registered</h3>
                  <p className="cert-card-text">
                    Directorate General of Foreign Trade authorized exporter
                  </p>
                </div>

                {/* 2. MSME Certified */}
                <div className="cert-card-box cell-top-right">
                  <div className="cert-card-header">
                    <div className="cert-card-img-wrap">
                      <img src="/assets/c3.png" alt="MSME Certified" className="cert-card-img" />
                    </div>
                    <span className="cert-badge-pill">CERTIFIED</span>
                  </div>
                  <h3 className="cert-card-name">MSME Certified</h3>
                  <p className="cert-card-text">
                    Ministry of MSME recognized enterprise
                  </p>
                </div>

                {/* 3. APEDA Approved */}
                <div className="cert-card-box cell-bottom-left">
                  <div className="cert-card-header">
                    <div className="cert-card-img-wrap">
                      <img src="/assets/c4.png" alt="APEDA Approved" className="cert-card-img" />
                    </div>
                    <span className="cert-badge-pill">CERTIFIED</span>
                  </div>
                  <h3 className="cert-card-name">APEDA Approved</h3>
                  <p className="cert-card-text">
                    Agricultural & Processed Food Products Export authority
                  </p>
                </div>

                {/* 4. Global Standards */}
                <div className="cert-card-box cell-bottom-right">
                  <div className="cert-card-header">
                    <div className="cert-card-img-wrap">
                      <img src="/assets/c5.png" alt="Global Standards" className="cert-card-img" />
                    </div>
                    <span className="cert-badge-pill">CERTIFIED</span>
                  </div>
                  <h3 className="cert-card-name">Global Standards</h3>
                  <p className="cert-card-text">
                    Compliant with international food safety regulations
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom CTA Banner */}
          <div className="compliance-cta-banner">
            <div className="compliance-cta-content">
              <span className="compliance-cta-tag">DIRECT INTERNATIONAL TRADE DESK</span>
              <h3 className="compliance-cta-title">
                Ready to source certified Indian agro-commodities?
              </h3>
              <p className="compliance-cta-desc">
                Connect directly with our international export managers for custom crop contracts, phytosanitary specs, and CIF/FOB freight quotations.
              </p>
            </div>
            <div className="compliance-cta-actions">
              <Link to="/services" className="btn btn-secondary-dark">
                <span>Explore Services</span>
              </Link>
              <button className="btn btn-primary" onClick={() => onOpenQuote()}>
                <span>Request Quotation</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

