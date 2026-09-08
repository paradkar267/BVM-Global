import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Globe, Target, Award, Compass, MapPin, 
  CheckCircle2, ArrowRight, Anchor, Factory, Users, HeartHandshake,
  TrendingUp, Sparkles, Truck, Check, Camera, X, Maximize2, Ship
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

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
      tag: 'FOUNDATION',
      title: 'Founding & Domestic Trade', 
      desc: 'Started in Nagpur as a regional agricultural commodity trader and aggregator for Central India farms.' 
    },
    { 
      year: '2010', 
      tag: 'EXPORT DESK',
      title: 'Export Division Launch', 
      desc: 'Expanded into direct export operations, dispatching initial container shipments of Indian Spices and Basmati rice to GCC markets.' 
    },
    { 
      year: '2016', 
      tag: 'COLD-CHAIN FLEET',
      title: 'Multimodal Logistics Fleet', 
      desc: 'Integrated dedicated GPS-enabled container trailers and launched dedicated refrigerated cold-chain corridors to JNPT.' 
    },
    { 
      year: '2021', 
      tag: '45+ COUNTRIES',
      title: 'Global Footprint Expansion', 
      desc: 'Crossed 45+ destination countries across Europe, North America, Southeast Asia, and Africa with APEDA & Spices Board accolades.' 
    },
    { 
      year: '2026', 
      tag: 'SMART TELEMETRY',
      title: 'Next-Gen Smart Logistics', 
      desc: 'Operating advanced multimodal freight corridors, digital telemetry, automated container load planning, and sustainable trade corridors.' 
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/assets/g1.jpeg',
      title: 'Maritime Port Dispatch',
      badge: 'PORT OPERATIONS',
      desc: 'Direct sealed container rake dispatches connecting Nagpur ICD to JNPT & Mundra maritime seaports.'
    },
    {
      id: 2,
      image: '/assets/g2.jpeg',
      title: 'Central Logistics & Warehousing',
      badge: 'ZERO-MILE HUB',
      desc: 'Temperature-controlled storage and automated bulk inventory aggregation for international shipments.'
    },
    {
      id: 3,
      image: '/assets/g3.jpeg',
      title: 'Agro Quality & Grading Lab',
      badge: 'APEDA QUALITY',
      desc: 'Multi-tier physical, moisture, and purity testing prior to container stuffing and export dispatch.'
    },
    {
      id: 4,
      image: '/assets/g4.jpeg',
      title: 'Multimodal Freight Fleet',
      badge: 'FREIGHT CORRIDOR',
      desc: 'Synchronized sea, air, road & rail freight corridors servicing 45+ destination markets worldwide.'
    }
  ];

  const certifications = [
    { code: 'APEDA', name: 'Agricultural and Processed Food Products Export Development Authority', desc: 'Govt. of India Registered Exporter' },
    { code: 'SPICES BOARD', name: 'Spices Board of India (Ministry of Commerce & Industry)', desc: 'Certified Quality & Export License' },
    { code: 'FSSAI', name: 'Food Safety and Standards Authority of India', desc: 'Central License for Global Food Logistics' },
    { code: 'ISO 22000:2018', name: 'Food Safety Management Systems Standard', desc: 'Certified International Quality Operations' },
    { code: 'DGFT / IEC', name: 'Directorate General of Foreign Trade', desc: 'Importer-Exporter Code Registry' },
    { code: 'FIEO', name: 'Federation of Indian Export Organisations', desc: 'Recognized Premier Trading Enterprise' }
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

      {/* 2. COMPANY NARRATIVE & NAGPUR ZERO-MILE HUB */}
      <section className="section-padding bg-slate">
        <div className="container-wide">
          <div className="about-grid">
            {/* Left Narrative */}
            <div>
              <div className="section-eyebrow">
                <Target style={{ width: 15, height: 15 }} />
                <span>OUR STORY & HERITAGE</span>
              </div>
              <h2 className="section-heading" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Connecting Sourcing Excellence With <span className="highlight-gold">Global Trade Desks</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Established with a vision to showcase the richness of Indian agriculture to the world, <strong>Pankaj Overseas</strong> has evolved into a premier international export house and multimodal freight logistics facilitator.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                From the aromatic spice gardens of Kerala and the fertile Basmati belts of Northern India to the sun-drenched orchards of Maharashtra, we work hand-in-hand with verified growers, modern cleaning mills, and global liner operators.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--accent-gold)' }} />
                    Direct Farm Sourcing
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>No middlemen, pure origin traceability.</div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--accent-gold)' }} />
                    Zero-Damage Packing
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.25rem' }}>Vacuum, PP, Jute & CFB boxes.</div>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => onOpenQuote()}>
                <span>Partner With Us</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>

            {/* Right: Nagpur Zero-Mile Strategic Advantage Card */}
            <div className="nagpur-hub-card" style={{ background: 'linear-gradient(135deg, #081C15 0%, #0D281E 100%)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div className="section-eyebrow">
                  <MapPin style={{ width: 15, height: 15 }} />
                  <span>STRATEGIC LOGISTICS HUB</span>
                </div>
                <div className="nagpur-coords-badge" style={{ color: '#4ADE80', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(74, 222, 128, 0.3)' }}>21.1458° N, 79.0882° E</div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                The Zero-Mile Center: Nagpur Gateway Advantage
              </h3>

              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Nagpur sits at the absolute geographical center of India — the historic "Zero Mile Stone". This unique location gives Pankaj Overseas an unmatched logistical advantage:
              </p>

              <div className="hub-feature-item">
                <div className="hub-feature-bullet" style={{ backgroundColor: '#16A34A', boxShadow: '0 0 6px #16A34A' }}></div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>Equal Distance to All Indian Sourcing Zones</strong>
                  <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Direct transit corridors to Gujarat, Maharashtra, MP, Punjab, and Southern spice belts.</span>
                </div>
              </div>

              <div className="hub-feature-item">
                <div className="hub-feature-bullet" style={{ backgroundColor: '#16A34A', boxShadow: '0 0 6px #16A34A' }}></div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>CONCOR Multi-Modal Logistics Hub & ICD</strong>
                  <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Fast rail rake customs clearance and direct sealed container dispatch to JNPT & Mundra ports.</span>
                </div>
              </div>

              <div className="hub-feature-item">
                <div className="hub-feature-bullet" style={{ backgroundColor: '#16A34A', boxShadow: '0 0 6px #16A34A' }}></div>
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>MIHAN International Air Cargo Complex</strong>
                  <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Expedited air freight and cold-storage handling for urgent commercial cargo.</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Inland Container Depot (ICD) Operational</span>
                <span style={{ fontSize: '0.75rem', color: '#4ADE80', fontWeight: 600 }}>24/7 Dispatch Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION, VISION & ETHOS */}
      <section className="section-padding values-executive-section">
        <div className="container-wide">
          <div className="section-header-center">
            <div className="section-tag" style={{ margin: '0 auto 0.75rem auto' }}>
              <Compass style={{ width: 14, height: 14 }} />
              <span>STRATEGIC FOUNDATION</span>
            </div>
            <h2 className="section-heading">
              Our Vision, Mission & <span className="highlight-gold">Core Values</span>
            </h2>
            <p className="section-subtitle">
              Foundational principles steering daily international trade execution, supplier partnerships, and long-term buyer trust.
            </p>
          </div>

          {/* 3 Flagship Anchor Cards */}
          <div className="flagship-values-grid">
            <div className="flagship-value-card">
              <div className="value-card-top-accent"></div>
              <div className="value-card-header">
                <div className="value-icon-box">
                  <Target style={{ width: 22, height: 22 }} />
                </div>
                <span className="value-tag-badge">CORE MISSION</span>
              </div>
              <h3 className="value-card-title">Empowering Global Sourcing</h3>
              <p className="value-card-desc">
                To empower global businesses with dependable access to high-grade Indian agricultural goods through transparent pricing, rigorous quality control, and seamless multimodal transportation from farm to port.
              </p>
            </div>

            <div className="flagship-value-card featured">
              <div className="value-card-top-accent"></div>
              <div className="value-card-header">
                <div className="value-icon-box">
                  <Globe style={{ width: 22, height: 22 }} />
                </div>
                <span className="value-tag-badge featured">LONG-TERM VISION</span>
              </div>
              <h3 className="value-card-title">Global Trade Bridge</h3>
              <p className="value-card-desc">
                To be the most trusted and reliable trade and logistics bridge between India and international markets, recognized globally for zero-delay deliveries, sustainable sourcing, and technological transparency.
              </p>
            </div>

            <div className="flagship-value-card">
              <div className="value-card-top-accent"></div>
              <div className="value-card-header">
                <div className="value-icon-box">
                  <ShieldCheck style={{ width: 22, height: 22 }} />
                </div>
                <span className="value-tag-badge">OUR PROMISE</span>
              </div>
              <h3 className="value-card-title">Zero-Compromise Rigor</h3>
              <p className="value-card-desc">
                Zero compromise on contract specifications. Whether shipping a 20ft container of cumin seeds or 500 MT of Basmati rice, we honour exact purity, moisture, and packing commitments every single time.
              </p>
            </div>
          </div>

          {/* 4 Pillars Header & Grid */}
          <div className="operational-pillars-wrap">
            <div className="operational-pillars-header">
              <div className="section-tag-sub">OPERATIONAL EXCELLENCE</div>
              <h3 className="pillars-sub-title">How We Guarantee Delivery Integrity</h3>
            </div>

            <div className="operational-pillars-grid">
              {leadershipValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="operational-pillar-card">
                    <div className="pillar-card-top">
                      <div className="pillar-icon-wrap">
                        <IconComp style={{ width: 20, height: 20 }} />
                      </div>
                      <span className="pillar-index">0{idx + 1}</span>
                    </div>
                    <h4 className="pillar-title">{val.title}</h4>
                    <p className="pillar-desc">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPANY TIMELINE / MILESTONES (EXECUTIVE WHITE & MINT THEME) */}
      <section className="about-journey-section" id="journey">
        <div className="container-wide">
          <div className="journey-header">
            <div className="section-eyebrow">
              <TrendingUp style={{ width: 14, height: 14 }} />
              <span>OUR JOURNEY</span>
            </div>
            <h2 className="section-heading">
              Two Decades of Trade <span className="highlight-gold">Excellence</span>
            </h2>
            <p className="section-subtitle">
              Milestones that shaped Pankaj Overseas into a globally recognized agro-export and multimodal logistics powerhouse.
            </p>
          </div>

          <div className="timeline-executive-wrapper">
            <div className="timeline-track-bar"></div>
            <div className="timeline-executive-grid">
              {milestones.map((item, idx) => (
                <div key={idx} className="timeline-step-card">
                  <div className="timeline-node-pin">
                    <div className="timeline-node-inner"></div>
                  </div>
                  <div className="timeline-card-body">
                    <div className="timeline-year-row">
                      <span className="timeline-year-text">{item.year}</span>
                      <span className="timeline-tag-pill">{item.tag}</span>
                    </div>
                    <h4 className="timeline-step-title">{item.title}</h4>
                    <p className="timeline-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. OPERATIONAL & INFRASTRUCTURE GALLERY (g1, g2, g3, g4 Showcase) */}
      <section className="about-gallery-section" id="gallery">
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="section-eyebrow">
              <Camera style={{ width: 15, height: 15 }} />
              <span>OPERATIONAL & INFRASTRUCTURE GALLERY</span>
            </div>
            <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
              Infrastructure & Sourcing <span className="highlight-gold">Excellence</span>
            </h2>
            <p className="section-subtitle" style={{ color: '#94A3B8', margin: '0.5rem auto 0 auto' }}>
              A visual glimpse into our Nagpur zero-mile hub, port dispatch corridors, quality testing facilities, and global trade operations.
            </p>
          </div>

          <div className="gallery-cards-grid">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-card-item"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="gallery-image-box">
                  <img src={item.image} alt={item.title} />
                  <span className="gallery-card-badge">{item.badge}</span>
                </div>
                <div className="gallery-card-body">
                  <h3 className="gallery-card-title">
                    <span>{item.title}</span>
                    <Maximize2 style={{ width: 14, height: 14, color: '#4ADE80' }} />
                  </h3>
                  <p className="gallery-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedGalleryItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedGalleryItem(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedGalleryItem(null)}>
              <X size={20} />
            </button>
            <img src={selectedGalleryItem.image} alt={selectedGalleryItem.title} className="gallery-modal-img" />
            <div className="gallery-modal-footer">
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#4ADE80', fontWeight: 700 }}>
                  {selectedGalleryItem.badge}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800, marginTop: '0.2rem' }}>
                  {selectedGalleryItem.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.3rem' }}>
                  {selectedGalleryItem.desc}
                </p>
              </div>
              <button className="btn btn-primary btn-sm" onClick={() => { setSelectedGalleryItem(null); onOpenQuote(); }}>
                <span>Inquire About Operations</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. ACCREDITATIONS & CERTIFICATIONS */}
      <section className="section-padding bg-slate">
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 3.5rem auto' }}>
            <div className="section-eyebrow">
              <Award style={{ width: 15, height: 15 }} />
              <span>TRADE COMPLIANCE</span>
            </div>
            <h2 className="section-heading">
              Certified & Recognized by <span className="highlight-gold">Statutory Authorities</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
              Fully compliant with Indian statutory export regulations and international food safety frameworks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #E2EAE5', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '0.9rem' }}>
                  <Award style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#15803D', background: '#DCFCE7', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #BBF7D0' }}>
                      {cert.code}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>{cert.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748B' }}>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div style={{ marginTop: '3.5rem', background: 'linear-gradient(135deg, #081C15 0%, #0D281E 100%)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', border: '1px solid rgba(34, 197, 94, 0.25)' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Ready to source premium Indian agro-commodities?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                Get in touch with our international trade desk for custom contracts, lab specs, and CIF/FOB freight quotes.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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

