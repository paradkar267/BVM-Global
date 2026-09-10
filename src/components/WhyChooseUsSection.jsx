import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUsSection() {
  return (
    <section className="bvm-advantage-section" id="why-us">
      <div className="container-wide bvm-advantage-layout">
        
        {/* =========================================================================
            LEFT COLUMN: Intro + Brand Mission + Farm Photo Card
            ========================================================================= */}
        <div className="bvm-intro-col">
          {/* Eyebrow */}
          <div className="bvm-adv-eyebrow">
            <span>OUR ADVANTAGE</span>
          </div>

          {/* Main Title */}
          <h2 className="bvm-adv-heading">
            Why choose<br />
            <span className="bvm-brand-highlight">BVM Global</span>
          </h2>

          {/* Subtitle */}
          <p className="bvm-adv-subtitle">
            A dependable route from Indian farms to global buyers.
          </p>

          {/* Accent Line Tagline */}
          <div className="bvm-adv-tagline">
            <span className="bvm-tagline-bar" aria-hidden="true"></span>
            <span className="bvm-tagline-text">Source. Prepare. Deliver.</span>
          </div>

          {/* Calligraphic Serif Statement */}
          <div className="bvm-adv-calligraphy">
            <span>Good</span>
            <span>Produce</span>
            <span>Brighter</span>
            <span>Tomorrows</span>
          </div>

          {/* Bottom Farm Photo Card */}
          <div className="bvm-farm-photo-card">
            <img 
              src="/assets/farm-field-background.png" 
              alt="Indian agriculture tea and farm fields" 
              className="bvm-farm-photo"
              loading="lazy"
            />
            <div className="bvm-farm-overlay"></div>
            <div className="bvm-farm-caption">
              <span className="bvm-caption-line-1">FROM INDIA</span>
              <div className="bvm-caption-line-2">
                <span>TO A HEALTHIER WORLD</span>
                <span className="bvm-caption-dash"></span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: Bento Grid (Card 01, Stack 02+03, Cards 04+05, Footer Bar)
            ========================================================================= */}
        <div className="bvm-bento-col">
          
          {/* CARD 01: Premium Quality (Wide Mint Banner) */}
          <div className="bvm-bento-card bvm-card-01">
            <div className="bvm-card-01-content">
              <div className="bvm-card-num">01 <span className="bvm-num-dash"></span></div>
              <h3 className="bvm-card-01-title">Premium Quality</h3>
              <p className="bvm-card-01-desc">
                Handpicked produce meeting the highest export standards.
              </p>
            </div>

            {/* Wheat Botanical Illustration & Quality Tag */}
            <div className="bvm-card-01-visual">
              <div className="bvm-quality-badge-text">
                <span>QUALITY</span>
                <span>ROOTED</span>
                <span>GLOBALLY</span>
              </div>
              <img 
                src="/assets/wheat-line-art.png" 
                alt="Botanical wheat stalk illustration" 
                className="bvm-wheat-img"
              />
            </div>
          </div>

          {/* ROW 2: White Container with Card 02 & Card 03 Stacked */}
          <div className="bvm-bento-card bvm-card-stack-0203">
            {/* ITEM 02: Farmer Direct */}
            <div className="bvm-stack-row">
              <div className="bvm-badge-icon">
                <img 
                  src="/assets/farmer-direct-icon.svg" 
                  alt="Farmer direct icon" 
                  className="bvm-svg-icon"
                />
              </div>
              <div className="bvm-stack-text">
                <div className="bvm-card-num-green">02 <span className="bvm-num-dash"></span></div>
                <h4 className="bvm-stack-title">Farmer Direct</h4>
                <p className="bvm-stack-desc">
                  Sourced directly from local farming communities across India.
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="bvm-stack-divider"></div>

            {/* ITEM 03: Fresh & Natural */}
            <div className="bvm-stack-row">
              <div className="bvm-badge-icon">
                <img 
                  src="/assets/fresh-natural-icon.svg" 
                  alt="Fresh & natural leaf icon" 
                  className="bvm-svg-icon"
                />
              </div>
              <div className="bvm-stack-text">
                <div className="bvm-card-num-green">03 <span className="bvm-num-dash"></span></div>
                <h4 className="bvm-stack-title">Fresh &amp; Natural</h4>
                <p className="bvm-stack-desc">
                  No additives, no compromise — pure farm-to-port produce.
                </p>
              </div>
            </div>
          </div>

          {/* ROW 3: Side-by-Side Cards (04 & 05) */}
          <div className="bvm-cards-row-split">
            {/* CARD 04: Global Delivery (Deep Green Card) */}
            <div className="bvm-bento-card bvm-card-04">
              <div className="bvm-card-04-top">
                <div className="bvm-card-num-light">04 <span className="bvm-num-dash-light"></span></div>
              </div>

              <div className="bvm-card-04-body">
                <div className="bvm-ship-icon-box">
                  <img 
                    src="/assets/global-delivery-icon.svg" 
                    alt="Global delivery cargo ship icon" 
                    className="bvm-ship-icon"
                  />
                </div>
                <div className="bvm-card-04-text">
                  <h4 className="bvm-card-04-title">Global Delivery</h4>
                  <p className="bvm-card-04-desc">
                    Reliable logistics to 30+ countries worldwide.
                  </p>
                </div>
              </div>

              {/* Bottom Tag & Globe Watermark */}
              <div className="bvm-card-04-footer">
                <div className="bvm-card-tag-light">
                  <span>BRIDGING FARMS TO MARKETS</span>
                  <span className="bvm-footer-dash-light"></span>
                </div>
              </div>

              {/* Globe Lines Watermark in bottom-right */}
              <svg 
                className="bvm-globe-watermark" 
                viewBox="0 0 160 160" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="160" cy="160" r="120" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <ellipse cx="160" cy="160" rx="90" ry="120" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <ellipse cx="160" cy="160" rx="50" ry="120" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <path d="M40 160C40 160 70 80 160 80" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
                <path d="M70 160C70 160 100 120 160 120" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
              </svg>
            </div>

            {/* CARD 05: Trusted Standards (White Card) */}
            <div className="bvm-bento-card bvm-card-05">
              <div className="bvm-card-05-top">
                <div className="bvm-card-num-green">05 <span className="bvm-num-dash"></span></div>
              </div>

              <div className="bvm-card-05-body">
                <div className="bvm-cert-icon-box">
                  <img 
                    src="/assets/trusted-standards-icon.svg" 
                    alt="Trusted standards certificate icon" 
                    className="bvm-cert-icon"
                  />
                </div>
                <div className="bvm-card-05-text">
                  <h4 className="bvm-card-05-title">Trusted Standards</h4>
                  <p className="bvm-card-05-desc">
                    Full compliance with FSSAI, APEDA, and international norms.
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="bvm-card-05-footer">
                <div className="bvm-card-tag-muted">
                  <span>CERTIFIED FOR A BRIGHTER TOMORROW</span>
                  <span className="bvm-footer-dash-muted"></span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER BAR (Serif tagline, Line, Learn More Link, Leaf Decoration) */}
          <div className="bvm-bento-footer-bar">
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

            {/* Botanical Leaf Corner Graphic */}
            <img 
              src="/assets/leaf-corner-decoration.png" 
              alt="" 
              className="bvm-footer-leaf-art"
              aria-hidden="true"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
