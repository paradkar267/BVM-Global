export function renderAboutSection() {
  return `
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-split-grid">
          <!-- Left Column: Image with Strategic Floating Badge -->
          <div class="about-image-card">
            <img 
              src="/assets/hero_transport_logistics.jpg" 
              alt="Pankaj Overseas Port Logistics Operations and Global Supply Chain" 
            />
            <div class="about-floating-badge">
              <div class="coords">21.1458° N / 79.0882° E</div>
              <div class="hub-name">Nagpur Inland Hub & Gateway Ports</div>
              <div style="font-size: 0.72rem; color: #94A3B8; margin-top: 0.2rem;">Direct Rail & Highway Connectivity</div>
            </div>
          </div>

          <!-- Right Column: Story & Features -->
          <div class="about-content-col">
            <div class="section-tag">
              <i data-lucide="compass" style="width: 14px; height: 14px;"></i>
              <span>ABOUT PANKAJ OVERSEAS</span>
            </div>
            
            <h2 class="section-heading">
              Your Partner Beyond Borders
            </h2>
            
            <p class="section-subtitle" style="margin-top: 1rem;">
              Pankaj Overseas provides dependable import and export solutions designed to simplify international trade. From farm-gate procurement and precision quality testing to multimodal cargo movement and customs clearance, we help businesses move goods efficiently across borders.
            </p>

            <div class="about-features-list">
              <!-- Feature 1 -->
              <div class="about-feature-box">
                <div class="feature-num-badge">01</div>
                <div class="feature-info">
                  <h4>Global Connectivity</h4>
                  <p>Direct export corridors linking premier Indian agricultural producing belts to Middle East, Europe, North America, Southeast Asia, and Africa.</p>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="about-feature-box">
                <div class="feature-num-badge">02</div>
                <div class="feature-info">
                  <h4>Reliable Cargo Movement</h4>
                  <p>Multimodal transportation across Sea, Air, Road and Rail with continuous cold-chain integrity, climate control, and real-time tracking.</p>
                </div>
              </div>

              <!-- Feature 3 -->
              <div class="about-feature-box">
                <div class="feature-num-badge">03</div>
                <div class="feature-info">
                  <h4>End-to-End Coordination</h4>
                  <p>Complete handling of quality lab certifications, APEDA / Spices Board compliance, packaging standardization, and customs documentation.</p>
                </div>
              </div>
            </div>

            <div style="margin-top: 2rem; display: flex; align-items: center; gap: 1rem;">
              <a href="#products" class="btn btn-primary" data-nav="products">
                <span>View Export Catalog</span>
                <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
              </a>
              <a href="#contact" class="btn btn-secondary-light" data-nav="contact">
                <span>Contact Sourcing Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
