import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, CheckCircle2, Globe, Clock } from 'lucide-react';

export default function TrustedExporterBanner({ onOpenQuote }) {
  return (
    <section className="agro-spotlight-section" id="agro-spotlight">
      <div className="container-wide">
        <div className="agro-spotlight-card">
          
          {/* Left Column: Editorial & Value Proposition */}
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

            {/* Action Button */}
            <div className="agro-action-buttons">
              <Link to="/contact" className="btn-agro-primary">
                <span>Contact Us</span>
                <ArrowRight size={15} className="btn-arrow" />
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Metrics & Trust Dashboard (No Image) */}
          <div className="agro-spotlight-metrics-col">
            
            {/* Top 2 Metric Cards */}
            <div className="agro-metrics-row">
              
              {/* Metric 1: On-Time Delivery */}
              <div className="agro-metric-box">
                <div className="agro-metric-header">
                  <div className="badge-icon-wrap emerald">
                    <Clock size={18} />
                  </div>
                  <span className="agro-metric-badge">VERIFIED</span>
                </div>
                <div className="agro-metric-val">97%</div>
                <div className="agro-metric-lbl">On-Time Delivery</div>
                <p className="agro-metric-sub">Precision cold-chain & container port dispatches.</p>
              </div>

              {/* Metric 2: Global Reach */}
              <div className="agro-metric-box">
                <div className="agro-metric-header">
                  <div className="badge-icon-wrap gold">
                    <Globe size={18} />
                  </div>
                  <span className="agro-metric-badge">GLOBAL</span>
                </div>
                <div className="agro-metric-val">20+</div>
                <div className="agro-metric-lbl">Countries Reached</div>
                <p className="agro-metric-sub">Active multimodal corridors across 4 continents.</p>
              </div>

            </div>

            {/* Bottom Full-Width Trust Banner */}
            <div className="agro-trust-banner">
              <div className="trust-banner-icon-box">
                <ShieldCheck size={24} className="trust-shield-icon" />
              </div>
              <div className="trust-banner-text">
                <div className="trust-banner-tag">APEDA & SPICES BOARD CERTIFIED</div>
                <div className="trust-banner-title">Zero-Middlemen Farm Gate Assurance</div>
                <p className="trust-banner-desc">
                  Direct grower contracts with strict phytosanitary & lab-grade compliance for global export.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
