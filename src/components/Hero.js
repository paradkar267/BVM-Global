import { transportModes } from '../data/services.js';

export function renderHero() {
  return `
    <section class="hero-section" id="home">
      <!-- Background Multimodal Transport Graphic with Overlays -->
      <div class="hero-bg-container">
        <img 
          src="/assets/hero_transport_logistics.jpg" 
          alt="Pankaj Overseas Multimodal Transport - Container Cargo Ship, Freight Aircraft, Cargo Train, and Semi-Truck" 
          class="hero-bg-image"
          id="hero-bg-img"
        />
        <div class="hero-gradient-overlay"></div>
        <div class="hero-radial-glow"></div>
      </div>

      <!-- Main Hero Content -->
      <div class="container-wide" style="position: relative; z-index: 2; width: 100%;">
        <div class="hero-content-wrapper">
          <!-- Left Column: Copy & CTAs -->
          <div class="hero-text-col">
            <div class="hero-badge-pill">
              <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
              <span>INTERNATIONAL IMPORT & EXPORT</span>
            </div>
            
            <h1 class="hero-title">
              Connecting Businesses to the <span class="highlight-gold">World.</span>
            </h1>
            
            <p class="hero-description">
              Reliable Import & Export Solutions Across <strong>Sea, Air, Road & Rail</strong> — Moving Your Cargo From Origin to Destination With Confidence. Sourced from premier Indian regions with guaranteed quality and international compliance.
            </p>
            
            <div class="hero-cta-group">
              <a href="#services" class="btn btn-primary btn-lg" data-nav="services">
                <span>Explore Our Services</span>
                <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
              </a>
              
              <button class="btn btn-secondary-dark btn-lg" id="hero-quick-quote-btn">
                <span>Get a Quote</span>
              </button>
            </div>

            <!-- Mini stats row -->
            <div style="display: flex; gap: 2rem; margin-top: 2.5rem; flex-wrap: wrap;">
              <div>
                <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: #FFFFFF;">45+</div>
                <div style="font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Global Ports</div>
              </div>
              <div>
                <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">100%</div>
                <div style="font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Quality Assured</div>
              </div>
              <div>
                <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--accent-cyan);">24/7</div>
                <div style="font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Shipment Tracking</div>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Multimodal Freight Modes Card -->
          <div class="hero-transport-col">
            <div class="hero-transport-card">
              <div class="transport-card-header">
                <div class="transport-card-title">
                  <i data-lucide="box" style="color: var(--accent-gold);"></i>
                  <span>Multimodal Freight Network</span>
                </div>
                <span style="font-size: 0.72rem; color: var(--accent-cyan); font-family: var(--font-mono); font-weight: 700;">
                  4 MODES ACTIVE
                </span>
              </div>

              <!-- 4 Transport Vehicles Selector -->
              <div class="transport-modes-grid">
                <div class="transport-mode-item active" data-mode="sea">
                  <div class="mode-icon-title">
                    <i data-lucide="ship" style="width: 18px; height: 18px; color: var(--accent-cyan);"></i>
                    <span>SEA FREIGHT</span>
                  </div>
                  <div class="mode-desc">FCL/LCL Ocean Liners & Reefer Cargo Containers</div>
                </div>

                <div class="transport-mode-item" data-mode="air">
                  <div class="mode-icon-title">
                    <i data-lucide="plane" style="width: 18px; height: 18px; color: var(--accent-gold);"></i>
                    <span>AIR CARGO</span>
                  </div>
                  <div class="mode-desc">Priority flights for spices, fruits & urgent freight</div>
                </div>

                <div class="transport-mode-item" data-mode="road">
                  <div class="mode-icon-title">
                    <i data-lucide="truck" style="width: 18px; height: 18px; color: var(--accent-emerald);"></i>
                    <span>ROAD FLEET</span>
                  </div>
                  <div class="mode-desc">GPS-enabled container trailers & reefer trucks</div>
                </div>

                <div class="transport-mode-item" data-mode="rail">
                  <div class="mode-icon-title">
                    <i data-lucide="train" style="width: 18px; height: 18px; color: #818CF8;"></i>
                    <span>RAIL CORRIDOR</span>
                  </div>
                  <div class="mode-desc">Direct Dedicated Freight Corridors (DFC) to ports</div>
                </div>
              </div>

              <!-- Dynamic Mode Details Box -->
              <div id="hero-mode-preview" style="margin-top: 1rem; padding: 1rem; background: rgba(10, 25, 47, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <span style="font-size: 0.78125rem; font-weight: 700; color: #FFFFFF;" id="hero-mode-title">Sea Freight Solutions</span>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-gold);" id="hero-mode-transit">Transit: 12 - 35 Days</span>
                </div>
                <p style="font-size: 0.75rem; color: #CBD5E1; margin-bottom: 0.5rem; line-height: 1.4;" id="hero-mode-desc">
                  Cost-efficient containerized movement from JNPT, Mundra, and Chennai to global ports.
                </p>
                <div style="font-size: 0.7rem; color: #94A3B8;" id="hero-mode-best">
                  <strong style="color: var(--accent-cyan);">Top Commodities:</strong> Basmati Rice, Grains, Pulses, Bulk Spices
                </div>
              </div>

              <!-- Live Telemetry Status Ticker -->
              <div class="transport-live-ticker">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="live-dot"></span>
                  <span>Port Hub: <strong>Nagpur Multi-Modal Logistics Hub</strong></span>
                </div>
                <span style="font-family: var(--font-mono); color: var(--accent-gold);">21.1458° N</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
