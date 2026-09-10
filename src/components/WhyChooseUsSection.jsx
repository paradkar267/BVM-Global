import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUsSection() {
  return (
    <section className="bvm-advantage-section" id="why-us">
      {/* Background Graphic with why.png (contains corner botanical leaf & wheat artwork) */}
      <div className="bvm-advantage-bg" aria-hidden="true">
        <img 
          src="/assets/why.png" 
          alt="" 
          className="bvm-advantage-bg-img" 
        />
      </div>

      <div className="container-wide bvm-advantage-container">
        
        {/* =========================================================================
            1. TOP HEADER ROW (Full width across both columns matching reference)
            ========================================================================= */}
        <div className="bvm-adv-top-header">
          {/* Top Left Title Block */}
          <div className="bvm-adv-title-block">
            <div className="bvm-adv-eyebrow">
              <span className="bvm-adv-eyebrow-dash">—</span>
              <span>OUR ADVANTAGE</span>
            </div>
            <h2 className="bvm-adv-heading">
              <span className="bvm-heading-main">Why choose</span>
              <span className="bvm-heading-brand">Pankaj Overseas</span>
            </h2>
          </div>

          {/* Top Vertical Divider Line */}
          <div className="bvm-adv-header-divider" aria-hidden="true"></div>

          {/* Top Right Subtitle + Tagline + Script Block */}
          <div className="bvm-adv-header-right">
            <p className="bvm-adv-subtitle">
              A dependable route from Indian farms to global buyers.
            </p>

            <div className="bvm-adv-meta-row">
              <div className="bvm-adv-tagline-pill">
                <span>Source. Prepare. Deliver.</span>
              </div>

              <div className="bvm-adv-calligraphy-wrap">
                <span className="bvm-adv-calligraphy-text">
                  Good Produce, <em>Brighter Tomorrows.</em>
                </span>
                <div className="bvm-calligraphy-underline" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MAIN 2-COLUMN SPLIT (Left Statement Card + Right 5 Features Stack)
            ========================================================================= */}
        <div className="bvm-advantage-grid-2col">
          
          {/* LEFT: Green Statement Card ("Good Produce, Brighter Tomorrows.") */}
          <div className="bvm-statement-card">
            <div className="bvm-statement-card-inner">
              <h3 className="bvm-statement-heading">
                <span className="bvm-statement-line">Good</span>
                <span className="bvm-statement-line">Produce,</span>
                <span className="bvm-statement-line">Brighter</span>
                <span className="bvm-statement-line">Tomorrows.</span>
              </h3>

              <div className="bvm-statement-divider" aria-hidden="true"></div>

              <div className="bvm-statement-meta">
                <span className="bvm-statement-origin">FROM INDIA</span>
                <span className="bvm-statement-tagline">TO A HEALTHIER WORLD</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 5 Features Clean Stacked List */}
          <div className="bvm-features-stack">
            
            {/* 01. Premium Quality (Highlighted Mint Card) */}
            <div className="bvm-feature-item bvm-feature-item--highlighted">
              <div className="bvm-feature-left">
                <div className="bvm-feature-icon-badge bvm-icon-white">
                  <img 
                    src="/assets/wheat-line-art.png" 
                    alt="Wheat line art" 
                    className="bvm-feature-wheat-img"
                  />
                </div>
                <div className="bvm-feature-text">
                  <div className="bvm-feat-num">01 <span className="bvm-feat-dash"></span></div>
                  <h3 className="bvm-feat-title">Premium Quality</h3>
                  <p className="bvm-feat-desc">
                    Handpicked produce meeting the highest export standards.
                  </p>
                </div>
              </div>

              <div className="bvm-feature-right-tag">
                <span>QUALITY</span>
                <span>ROOTED</span>
                <span>GLOBALLY</span>
              </div>
            </div>

            <div className="bvm-feat-divider" aria-hidden="true"></div>

            {/* 02. Farmer Direct */}
            <div className="bvm-feature-item">
              <div className="bvm-feature-left">
                <div className="bvm-feature-icon-badge">
                  <svg width="28" height="28" viewBox="0 0 96 96" fill="none" stroke="#0D7A47" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 66c12-10 27-11 41-2l13 7c4 2 5 7 2 10-3 3-7 3-11 1L42 75"/>
                    <path d="M15 66l14-14c7-7 17-7 24-1l7 6c3 3 3 7 0 10-3 3-7 3-10 1l-8-6"/>
                    <path d="M60 42c-2-12 5-22 17-26 2 12-4 23-17 26Z"/>
                    <path d="M59 41c-6-7-14-8-21-5 4 8 11 11 21 5Z"/>
                    <path d="M58 43c5-7 12-12 20-15"/>
                  </svg>
                </div>
                <div className="bvm-feature-text">
                  <div className="bvm-feat-num">02 <span className="bvm-feat-dash"></span></div>
                  <h3 className="bvm-feat-title">Farmer Direct</h3>
                  <p className="bvm-feat-desc">
                    Sourced directly from local farming communities across India.
                  </p>
                </div>
              </div>
            </div>

            <div className="bvm-feat-divider" aria-hidden="true"></div>

            {/* 03. Fresh & Natural */}
            <div className="bvm-feature-item">
              <div className="bvm-feature-left">
                <div className="bvm-feature-icon-badge">
                  <svg width="28" height="28" viewBox="0 0 96 96" fill="none" stroke="#0D7A47" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M24 62c9-27 26-37 50-37-2 26-15 45-44 50"/>
                    <path d="M25 74c10-19 24-31 43-44"/>
                    <path d="M23 60c-2-11-8-17-18-19 0 13 6 23 18 26"/>
                  </svg>
                </div>
                <div className="bvm-feature-text">
                  <div className="bvm-feat-num">03 <span className="bvm-feat-dash"></span></div>
                  <h3 className="bvm-feat-title">Fresh &amp; Natural</h3>
                  <p className="bvm-feat-desc">
                    No additives, no compromise — pure farm-to-port produce.
                  </p>
                </div>
              </div>
            </div>

            <div className="bvm-feat-divider" aria-hidden="true"></div>

            {/* 04. Global Delivery */}
            <div className="bvm-feature-item">
              <div className="bvm-feature-left">
                <div className="bvm-feature-icon-badge">
                  <svg width="28" height="28" viewBox="0 0 96 96" fill="none" stroke="#0D7A47" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 64h80l-6 10H16Z"/>
                    <path d="M15 64V46h26v18M41 64V34h24v30M65 64V26h16v38"/>
                    <path d="M25 46V35h11v11M49 34V22h11v12M70 26V15h8v11"/>
                    <path d="M4 78c6 0 6 4 12 4s6-4 12-4 6 4 12 4 6-4 12-4 6 4 12 4 6-4 12-4 6 4 12 4 6-4 12-4"/>
                  </svg>
                </div>
                <div className="bvm-feature-text">
                  <div className="bvm-feat-num">04 <span className="bvm-feat-dash"></span></div>
                  <h3 className="bvm-feat-title">Global Delivery</h3>
                  <p className="bvm-feat-desc">
                    Reliable logistics to 30+ countries worldwide.
                  </p>
                </div>
              </div>

              <div className="bvm-feature-right-tag">
                <span>BRIDGING FARMS</span>
                <span>TO MARKETS</span>
              </div>
            </div>

            <div className="bvm-feat-divider" aria-hidden="true"></div>

            {/* 05. Trusted Standards */}
            <div className="bvm-feature-item">
              <div className="bvm-feature-left">
                <div className="bvm-feature-icon-badge">
                  <svg width="28" height="28" viewBox="0 0 96 96" fill="none" stroke="#0D7A47" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 12h38l14 14v58H22Z"/>
                    <path d="M60 12v14h14M32 40h28M32 52h28M32 64h16"/>
                    <circle cx="66" cy="70" r="13" fill="#E8F7EC" stroke="#0D7A47" strokeWidth="3.5"/>
                    <path d="m60 70 4 4 9-10"/>
                  </svg>
                </div>
                <div className="bvm-feature-text">
                  <div className="bvm-feat-num">05 <span className="bvm-feat-dash"></span></div>
                  <h3 className="bvm-feat-title">Trusted Standards</h3>
                  <p className="bvm-feat-desc">
                    Full compliance with FSSAI, APEDA, and international norms.
                  </p>
                </div>
              </div>

              <div className="bvm-feature-right-tag">
                <span>CERTIFIED FOR A</span>
                <span>BRIGHTER TOMORROW</span>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            3. BOTTOM FOOTER BAR (Full-width spanning underneath both columns)
            ========================================================================= */}
        <div className="bvm-bottom-footer-bar">
          <span className="bvm-footer-tagline">
            Built for every shipment that matters.
          </span>
          <div className="bvm-footer-line" aria-hidden="true"></div>
          <Link to="/about" className="bvm-footer-learn-more">
            <span>Learn more</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
