import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ship, Plane, Truck, Train, Anchor, ArrowRight, 
  ShieldCheck, MapPin, Gauge, Clock, Layers, Thermometer, 
  CheckCircle2, Box, Sparkles
} from 'lucide-react';
import { transportModes, containerSpecs } from '../data/services.js';
import useSEO from '../hooks/useSEO.js';

export default function LogisticsPage({ onOpenQuote }) {
  useSEO({
    title: 'Multimodal Freight Logistics | Sea, Air, Road & Rail Corridors',
    description: 'Explore Pankaj Overseas integrated multimodal logistics network. Ocean freight from JNPT/Mundra, air cargo cool-chain, and express inland rail freight corridors.',
    keywords: 'Multimodal Logistics India, Sea Freight Nagpur, JNPT Freight, Air Cargo Exports, Container Logistics India, Freight Forwarder Maharashtra',
    canonicalUrl: 'https://pankajoverseas.com/logistics'
  });

  const [activeMode, setActiveMode] = useState('sea');

  const selectedMode = transportModes.find(m => m.id === activeMode) || transportModes[0];

  const gatewayPorts = [
    {
      port: 'JNPT (Jawaharlal Nehru Port / Nhava Sheva)',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Premier Ocean Container Port',
      connectivity: 'Direct Rail Corridor from Nagpur ICD & National Highway 53',
      handles: 'FCL, LCL, Reefer, Basmati Rice, Spices, Agro-commodities',
      turnaround: 'Fast automated DP World & APM Terminals'
    },
    {
      port: 'Mundra Port (APSEZ)',
      location: 'Kutch, Gujarat',
      type: 'Deep-Draft Mega Commercial Port',
      connectivity: 'Dedicated Western Freight Corridor (WFC)',
      handles: 'Bulk Grains, Cumin Seeds, Cotton Bales, Liquid Oils',
      turnaround: 'Direct berths for 18,000+ TEU mega container vessels'
    },
    {
      port: 'Chennai & Ennore Port',
      location: 'Tamil Nadu, East Coast',
      type: 'East Coast Gateway Port',
      connectivity: 'Direct links to Southeast Asia, Far East & Australasia',
      handles: 'Turmeric, Spices, Chillies, Coffee, Rice',
      turnaround: 'Dedicated agricultural export terminals'
    },
    {
      port: 'Nagpur Multi-Modal Logistics Hub & ICD',
      location: 'Nagpur (Zero-Mile Center)',
      type: 'Dry Port & Rail Terminal (CONCOR)',
      connectivity: 'Direct CONCOR block rakes to JNPT / Mundra',
      handles: 'On-site customs clearance, container stuffing & sealing',
      turnaround: 'Zero port congestion on inland clearance'
    },
    {
      port: 'MIHAN & Mumbai Air Cargo Complexes',
      location: 'Nagpur / Mumbai (BOM)',
      type: 'International Air Cargo Terminals',
      connectivity: 'Scheduled freighter & passenger belly space',
      handles: 'Perishable Alphonso Mangoes, Pomegranates, Saffron, Lab Samples',
      turnaround: 'Dedicated cold storage & expedited quarantine inspection'
    }
  ];

  const coldChainProtocols = [
    { item: 'Alphonso & Kesar Mangoes', temp: '+12.5°C to +13.5°C', rh: '85% - 90%', transitMode: 'Air Cargo & Controlled Atmosphere (CA) Reefer' },
    { item: 'Fresh Bhagwa Pomegranates', temp: '+5.0°C to +7.0°C', rh: '90% - 95%', transitMode: '40ft Reefer Ocean Container (21 MT)' },
    { item: 'Thomson Seedless Table Grapes', temp: '0°C to +1.0°C', rh: '90% - 95%', transitMode: 'Fast Reefer Liner with SO2 generators' },
    { item: 'Cavendish Green Bananas', temp: '+13.5°C to +14.0°C', rh: '90% - 95%', transitMode: 'APEDA Sea Protocol Controlled Atmosphere' },
    { item: 'Whole Spices & Condiments', temp: 'Ambient (+20°C to +25°C)', rh: '< 65%', transitMode: '20ft/40ft Dry Container with Desiccant Bags' }
  ];

  return (
    <main className="page-logistics">
      {/* 1. PAGE HERO */}
      <section className="page-hero-section">
        <div className="container-wide">
          <div className="hero-badge-pill" style={{ margin: '0 auto 1.5rem auto' }}>
            <Anchor style={{ width: 14, height: 14 }} />
            <span>MULTIMODAL TRANSPORTATION</span>
          </div>
          <h1 className="page-hero-title">
            Sea, Air, Road & Rail <span className="highlight-gold">Logistics Infrastructure</span>
          </h1>
          <p className="page-hero-desc">
            A fully synchronized multimodal network engineered to transport agricultural cargo with precision, zero temperature breakage, and optimized freight economics.
          </p>
        </div>
      </section>

      {/* 2. MULTIMODAL HERO IMAGE & INTERACTIVE MODE SELECTOR */}
      <section className="section-padding bg-slate">
        <div className="container-wide">
          {/* Multimodal Banner Card */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', marginBottom: '3.5rem', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)' }}>
            <img 
              src="/assets/bg.png" 
              alt="Pankaj Overseas Multimodal Transport - Container Ship, Cargo Aircraft, Freight Train, and Semi-Truck" 
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9, 13, 20, 0.4) 0%, rgba(9, 13, 20, 0.95) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem' }}>
              <div style={{ maxWidth: 700 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  SYNCHRONIZED FLEET DEPLOYMENT
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                  Four Transport Modes. One Integrated Logistics Partner.
                </h2>
                <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  From farm-gate container pickup via heavy-duty road trailers and eco-friendly rail corridors to priority air cargo and high-tonnage ocean liners.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive 4-Mode Selector */}
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 3rem auto' }}>
            <div className="section-eyebrow">
              <Layers style={{ width: 15, height: 15 }} />
              <span>EXPLORE BY MODE</span>
            </div>
            <h2 className="section-heading">
              Select Transport <span className="highlight-gold">Dimension</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
              Click through our 4 transportation modes to view capacities, typical transit durations, and key ports.
            </p>
          </div>

          {/* Mode Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {transportModes.map((mode) => {
              const isSelected = activeMode === mode.id;
              let Icon = Ship;
              if (mode.id === 'air') Icon = Plane;
              if (mode.id === 'road') Icon = Truck;
              if (mode.id === 'rail') Icon = Train;

              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1.75rem',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    border: isSelected ? '2px solid var(--accent-gold)' : '1px solid #CBD5E1',
                    background: isSelected ? '#0F172A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#0F172A',
                    boxShadow: isSelected ? '0 10px 20px -5px rgba(15, 23, 42, 0.4)' : 'none'
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: isSelected ? 'var(--accent-gold)' : '#0F172A' }} />
                  <span>{mode.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Mode Detail Card */}
          <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, background: 'rgba(234, 162, 40, 0.1)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  MODE ID: {selectedMode.id.toUpperCase()} CORRIDOR
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                  {selectedMode.title}
                </h3>
                <p style={{ color: 'var(--accent-gold-hover)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {selectedMode.tagline}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Gauge style={{ width: 18, height: 18, color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong style={{ color: '#0F172A', fontSize: '0.875rem' }}>Payload & Capacity:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{selectedMode.capacity}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Clock style={{ width: 18, height: 18, color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong style={{ color: '#0F172A', fontSize: '0.875rem' }}>Transit Durations:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{selectedMode.transit}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Box style={{ width: 18, height: 18, color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong style={{ color: '#0F172A', fontSize: '0.875rem' }}>Optimal Commodities:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{selectedMode.bestFor}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin style={{ width: 18, height: 18, color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong style={{ color: '#0F172A', fontSize: '0.875rem' }}>Hub Terminals & Gateways:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>{selectedMode.ports}</div>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" onClick={() => onOpenQuote(`${selectedMode.title} Booking`)}>
                  <span>Book {selectedMode.title}</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>

              {/* Right Visual Stats */}
              <div style={{ background: '#0F172A', borderRadius: 'var(--radius-lg)', padding: '2rem', color: '#FFFFFF' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                  Operational Key Metrics
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>99.4%</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>On-Time Departure</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>Zero</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Port Demurrage Delays</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>100%</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>GPS Monitored</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981' }}>24/7</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Customs Filing</div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(234, 162, 40, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(234, 162, 40, 0.2)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: 600 }}>Pankaj Overseas Guarantee:</div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                    Every container is sealed with high-security ISO 17712 bolt seals with verified gross mass (VGM) certification.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. COLD CHAIN PERISHABLES SPECIFICATION */}
      <section className="section-padding" style={{ backgroundColor: '#090D14', color: '#FFFFFF' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 3.5rem auto' }}>
            <div className="section-eyebrow" style={{ color: 'var(--accent-gold)', borderColor: 'rgba(234, 162, 40, 0.3)' }}>
              <Thermometer style={{ width: 15, height: 15 }} />
              <span>COLD CHAIN PROTOCOLS</span>
            </div>
            <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
              Climate-Controlled <span className="highlight-gold">Perishable Transport</span>
            </h2>
            <p className="section-subtitle" style={{ color: '#94A3B8', margin: '0.5rem auto 0 auto' }}>
              Temperature and relative humidity regimes strictly monitored for fresh produce exports across oceans and airways.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: 'rgba(0,0,0,0.3)', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Export Commodity</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Target Temperature</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: 'var(--accent-gold-hover)' }}>Relative Humidity (RH)</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700 }}>Container / Transport Mode</th>
                </tr>
              </thead>
              <tbody>
                {coldChainProtocols.map((p, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 700, color: '#FFFFFF' }}>{p.item}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>{p.temp}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--accent-gold-hover)', fontFamily: 'var(--font-mono)' }}>{p.rh}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#94A3B8' }}>{p.transitMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-secondary-dark">
              <span>Contact Logistics Desk</span>
            </Link>
            <button className="btn btn-primary" onClick={() => onOpenQuote('Cold Chain Reefer Freight')}>
              <span>Book Reefer Shipment</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
