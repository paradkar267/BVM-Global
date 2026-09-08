import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Ship, Plane, Truck, Train, FileCheck, 
  ArrowRight, ShieldCheck, CheckCircle2, Box, Anchor, 
  Thermometer, Clock, HelpCircle, Layers, Check, Sparkles,
  Search, Apple, Wheat, ShoppingBag, Users, Tag, FileText,
  MapPin, Handshake, Warehouse
} from 'lucide-react';
import { logisticsServices } from '../data/services.js';

export default function ServicesPage({ onOpenQuote, onOpenServiceModal }) {
  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'PROCUREMENT': return <ShoppingBag style={{ width: 15, height: 15 }} />;
      case 'FRESH EXPORTS': return <Apple style={{ width: 15, height: 15 }} />;
      case 'COMMODITIES': return <Wheat style={{ width: 15, height: 15 }} />;
      case 'BUYING DESK': return <Users style={{ width: 15, height: 15 }} />;
      case 'PACKAGING': return <Box style={{ width: 15, height: 15 }} />;
      case 'DOCUMENTATION': return <FileText style={{ width: 15, height: 15 }} />;
      case 'QUALITY ASSURANCE': return <ShieldCheck style={{ width: 15, height: 15 }} />;
      case 'MULTIMODAL LOGISTICS': return <Ship style={{ width: 15, height: 15 }} />;
      case 'INBOUND TRADE': return <Layers style={{ width: 15, height: 15 }} />;
      default: return <Box style={{ width: 15, height: 15 }} />;
    }
  };

  const getBulletIcon = (serviceId, bulletNum) => {
    if (serviceId === 'global-product-sourcing') {
      return bulletNum === 1 ? <Users style={{ width: 16, height: 16 }} /> : <Globe style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'fresh-produce-export') {
      return bulletNum === 1 ? <Thermometer style={{ width: 16, height: 16 }} /> : <Box style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'agri-commodity-trading') {
      return bulletNum === 1 ? <Wheat style={{ width: 16, height: 16 }} /> : <Layers style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'international-buying-sourcing') {
      return bulletNum === 1 ? <Handshake style={{ width: 16, height: 16 }} /> : <FileText style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'customized-packaging-pricing') {
      return bulletNum === 1 ? <Tag style={{ width: 16, height: 16 }} /> : <Box style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'export-documentation-compliance') {
      return bulletNum === 1 ? <FileText style={{ width: 16, height: 16 }} /> : <ShieldCheck style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'quality-inspection-selection') {
      return bulletNum === 1 ? <Search style={{ width: 16, height: 16 }} /> : <Box style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'logistics-freight-coordination') {
      return bulletNum === 1 ? <Truck style={{ width: 16, height: 16 }} /> : <MapPin style={{ width: 16, height: 16 }} />;
    }
    if (serviceId === 'import-trade-solutions') {
      return bulletNum === 1 ? <FileText style={{ width: 16, height: 16 }} /> : <Warehouse style={{ width: 16, height: 16 }} />;
    }
    return <CheckCircle2 style={{ width: 16, height: 16 }} />;
  };

  const comparisonData = [
    { feature: 'Primary Advantage', ocean: 'Lowest unit cost for heavy bulk', air: 'Fastest transit (24-72h)', road: 'Door-to-door flexibility', rail: 'Eco-friendly bulk rail corridor' },
    { feature: 'Typical Transit Time', ocean: '12 - 35 Days', air: '1 - 3 Days', road: '1 - 3 Days Inland', rail: '18 - 36 Hours to Port' },
    { feature: 'Volume Capacity', ocean: 'High (20ft, 40ft FCL & Bulk)', air: 'Up to 110 MT / Freighter', road: 'Up to 32 MT / Trailer', rail: '90 TEUs / Block Rake' },
    { feature: 'Ideal Commodities', ocean: 'Basmati Rice, Pulses, Grains', air: 'Fresh Fruits, Saffron, Samples', road: 'Farm-to-Port container drayage', rail: 'Heavy agro commodities' },
    { feature: 'Temperature Control', ocean: 'Reefer Containers (-30°C to +30°C)', air: 'Active Cool-Chain Containers', road: 'Refrigerated GPS Trucks', rail: 'Ventilated & Insulated Boxes' },
    { feature: 'Carbon Footprint', ocean: 'Very Low per Ton-Km', air: 'High', road: 'Moderate', rail: 'Lowest Inland Footprint' }
  ];

  return (
    <main className="page-services-redesigned">
      {/* 1. PAGE HERO MATCHING REFERENCE */}
      <section className="services-hero-exact">
        <div className="hero-bg-container">
          <img 
            src="/assets/banner.png" 
            alt="Pankaj Overseas Global Logistics Network" 
            className="services-hero-bg"
          />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="container-wide services-hero-content">
          <div className="services-hero-left">
            <div className="services-hero-eyebrow">
              <span className="line">—</span>
              <span>OUR SERVICES</span>
            </div>
            
            <h1 className="services-hero-title">
              From sourcing.<br />
              <span className="gold-text">To global delivery.</span>
            </h1>

            <p className="services-hero-sub">
              Integrated sourcing, export and logistics support for your business.
            </p>

            <div className="services-hero-pills">
              <div className="hero-pill-item">
                <Globe size={14} />
                <span>Sourcing & procurement</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <Ship size={14} />
                <span>Export coordination</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <Truck size={14} />
                <span>Multimodal logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID MATCHING REFERENCE 1 & 2 */}
      <section className="services-grid-section">
        <div className="container-wide">
          
          <div className="services-section-header">
            <div className="header-left">
              <div className="section-tag" style={{ marginBottom: '0.75rem' }}>
                <Layers style={{ width: 14, height: 14 }} />
                <span>INTEGRATED SOLUTIONS</span>
              </div>
              <h2 className="main-title">
                Built Around Your Cargo.<br />
                <span className="title-accent">Engineered for Global Scale.</span>
              </h2>
            </div>
            <div className="header-right">
              <div className="header-right-accent"></div>
              <p className="header-desc">
                From origin farm aggregation and APEDA quality certification to multimodal container freight and customs clearance across 45+ international ports.
              </p>
            </div>
          </div>

          <div className="services-3x3-grid">
            {logisticsServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card-ref"
                onClick={() => onOpenServiceModal(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenServiceModal(service);
                  }
                }}
              >
                
                {/* Image Container */}
                <div className="card-image-wrap">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-img"
                  />
                </div>

                {/* Card Body */}
                <div className="card-body-ref">
                  
                  {/* Category Badge Pill */}
                  <div className="category-pill-badge">
                    <span className="pill-icon">{getBadgeIcon(service.badge)}</span>
                    <span className="pill-text">{service.badge}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="card-title-ref">{service.title}</h3>
                  <p className="card-sub-ref">{service.subtitle}</p>

                  {/* 2 Bullet Points with Outline Gold Icons */}
                  <div className="card-bullets-ref">
                    <div className="bullet-item-ref">
                      <span className="bullet-icon-gold">{getBulletIcon(service.id, 1)}</span>
                      <span className="bullet-text">{service.bullet1}</span>
                    </div>
                    <div className="bullet-item-ref">
                      <span className="bullet-icon-gold">{getBulletIcon(service.id, 2)}</span>
                      <span className="bullet-text">{service.bullet2}</span>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="card-divider-ref"></div>

                  {/* Explore Link at Bottom */}
                  <div className="card-footer-ref">
                    <button 
                      className="explore-service-btn"
                      type="button"
                    >
                      <span>Explore service</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM "GET IN TOUCH / LET'S PLAN YOUR NEXT SHIPMENT" BANNER */}
      <section className="services-bottom-cta-banner">
        <div className="cta-banner-bg">
          <img src="/assets/bg.png" alt="Container Port Fleet" />
          <div className="cta-banner-overlay"></div>
        </div>

        <div className="container-wide cta-banner-container">
          <div className="cta-banner-content">
            
            <div className="cta-left">
              <div className="cta-eyebrow">
                <span className="dash">—</span>
                <span>GET IN TOUCH</span>
              </div>
              
              <h2 className="cta-headline">
                Let’s plan your next shipment.
              </h2>
              
              <p className="cta-sub">
                Tell us your product, destination and requirements.
              </p>

              <div className="cta-transport-modes">
                <div className="mode-pill">
                  <Ship size={14} />
                  <span>BY SEA</span>
                </div>
                <div className="mode-pill">
                  <Plane size={14} />
                  <span>BY AIR</span>
                </div>
                <div className="mode-pill">
                  <Truck size={14} />
                  <span>BY LAND</span>
                </div>
              </div>
            </div>

            <div className="cta-right">
              <button 
                className="btn btn-primary btn-pill-gold btn-lg"
                onClick={() => onOpenQuote()}
              >
                <span>Discuss your requirements</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
