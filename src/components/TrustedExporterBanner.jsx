import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, CheckCircle2, Globe, Clock } from 'lucide-react';

export default function TrustedExporterBanner({ onOpenQuote }) {
  return (
    <section className="agro-spotlight-section" id="agro-spotlight">
      <div className="container-wide">
        <div className="agro-spotlight-card">
          
          {/* Left Column: Visual Imagery with Floating Metric Badges */}
          <div className="agro-spotlight-image-col">
            <div className="agro-image-frame">
              <img 
                src="/assets/2.png" 
                alt="Naturally Fresh Indian Agricultural Produce Export" 
                className="agro-main-photo"
              />
              <div className="agro-image-overlay"></div>

              {/* Floating Stat Badge 1: 97% On-time delivery */}
              <div className="agro-floating-badge badge-top-left">
                <div className="badge-icon-wrap emerald">
                  <Clock size={16} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-stat-value">97%</span>
                  <span className="badge-stat-label">On-time delivery</span>
                </div>
              </div>

              {/* Floating Stat Badge 2: 20+ Countries */}
              <div className="agro-floating-badge badge-bottom-right">
                <div className="badge-icon-wrap gold">
                  <Globe size={16} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-stat-value">20+</span>
                  <span className="badge-stat-label">Countries reached</span>
                </div>
              </div>

              {/* Verified Pill */}
              <div className="agro-verified-tag">
                <ShieldCheck size={14} className="verified-icon" />
                <span>APEDA & SPICES BOARD CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Value Proposition */}
          <div className="agro-spotlight-content-col">
            <div className="agro-eyebrow-row">
              <span className="agro-eyebrow-line"></span>
              <div className="agro-eyebrow-pill">
                <Leaf size={14} className="agro-pill-icon" />
                <span>TRUSTED GLOBAL EXPORTER</span>
              </div>
            </div>

            <h2 className="agro-spotlight-title">
              Naturally Fresh,<br />
              <span className="agro-title-gradient">Globally Delivered.</span>
            </h2>

            <p className="agro-spotlight-desc">
              Exporting premium Indian agricultural products worldwide while supporting local farmers and celebrating authentic flavors.
            </p>

            {/* Micro Highlights Chips */}
            <div className="agro-highlights-chips">
              <div className="agro-chip">
                <CheckCircle2 size={15} className="chip-icon" />
                <span>Direct Farm-Level Sourcing</span>
              </div>
              <div className="agro-chip">
                <CheckCircle2 size={15} className="chip-icon" />
                <span>Cold-Chain Telemetry</span>
              </div>
              <div className="agro-chip">
                <CheckCircle2 size={15} className="chip-icon" />
                <span>100% Export Ready</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="agro-action-buttons">
              <Link to="/services" className="btn-agro-primary">
                <Leaf size={16} className="btn-icon" />
                <span>Explore Products</span>
                <ArrowRight size={15} className="btn-arrow" />
              </Link>
              <Link to="/contact" className="btn-agro-outline">
                <span>Contact Us</span>
                <ArrowRight size={15} className="btn-arrow" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
