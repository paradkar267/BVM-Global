export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container-wide">
        <div class="footer-top-grid">
          <!-- Column 1: Brand Info -->
          <div>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <div class="brand-icon-wrapper" style="width: 38px; height: 38px;">
                <i data-lucide="globe" style="width: 20px; height: 20px;"></i>
              </div>
              <div class="brand-text">
                <span class="brand-title" style="font-size: 1.1rem;">PANKAJ <span>OVERSEAS</span></span>
                <span class="brand-tagline">Global Import & Export Solutions</span>
              </div>
            </div>
            <p style="color: #94A3B8; font-size: 0.8125rem; line-height: 1.6; max-width: 320px; margin-bottom: 1.5rem;">
              Dependable multimodal import and export solutions across Sea, Air, Road and Rail. Exporting high-grade Indian spices, Basmati rice, fresh fruits, and agro-commodities worldwide.
            </p>
            <div style="display: flex; gap: 0.75rem;">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-gold); background: rgba(234, 162, 40, 0.1); padding: 0.25rem 0.6rem; border-radius: var(--radius-sm); border: 1px solid rgba(234, 162, 40, 0.2);">
                APEDA & SPICES BOARD CERTIFIED
              </span>
            </div>
          </div>

          <!-- Column 2: Company Links -->
          <div>
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links-list">
              <li><a href="#about" data-nav="about">About Us</a></li>
              <li><a href="#services" data-nav="services">Our Services</a></li>
              <li><a href="#transport" data-nav="transport">Multimodal Logistics</a></li>
              <li><a href="#products" data-nav="products">Products & Agro</a></li>
              <li><a href="#network" data-nav="network">Global Network</a></li>
              <li><a href="#why-us" data-nav="home">Why Choose Us</a></li>
            </ul>
          </div>

          <!-- Column 3: Logistics Services -->
          <div>
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links-list">
              <li><a href="#services" data-nav="services">Sea Freight (FCL / LCL)</a></li>
              <li><a href="#services" data-nav="services">Air Freight Cargo</a></li>
              <li><a href="#services" data-nav="services">Inland Road Transport</a></li>
              <li><a href="#services" data-nav="services">Rail Freight Corridors</a></li>
              <li><a href="#services" data-nav="services">Customs & Compliance</a></li>
              <li><a href="#import-export" data-nav="services">Import & Export Advisory</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Coordinates -->
          <div>
            <h4 class="footer-col-title">Contact & HQ</h4>
            <div class="footer-contact-item">
              <i data-lucide="phone" style="width: 18px; height: 18px;"></i>
              <div>
                <span style="display: block; font-weight: 600; color: #FFFFFF;">+91 95189 46362</span>
                <span style="font-size: 0.75rem; color: #94A3B8;">Mon - Sat, 9:00 AM - 7:00 PM IST</span>
              </div>
            </div>

            <div class="footer-contact-item">
              <i data-lucide="mail" style="width: 18px; height: 18px;"></i>
              <div>
                <span style="display: block; font-weight: 600; color: #FFFFFF;">PankajoverseasExports@gmail.com</span>
                <span style="font-size: 0.75rem; color: #94A3B8;">Trade Desk: PankajoverseasExports@gmail.com</span>
              </div>
            </div>

            <div class="footer-contact-item">
              <i data-lucide="map-pin" style="width: 18px; height: 18px;"></i>
              <div>
                <span style="display: block; font-weight: 600; color: #FFFFFF;">123, Business Park, Nagpur</span>
                <span style="font-size: 0.75rem; color: #94A3B8;">Maharashtra, 440001, India</span>
                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-gold); display: block; margin-top: 0.2rem;">
                  Coords: 21.1458° N / 79.0882° E
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>
            © 2026 Pankaj Overseas Exports. All rights reserved. Connecting Indian Sourcing to Global Markets.
          </div>

          <div class="footer-credit">
            Website Designed & Developed by <a href="https://bizleap.in" target="_blank" rel="noopener noreferrer" class="bizleap-backlink" title="Bizleap - Digital Marketing & Web Development Agency">Bizleap</a>
          </div>

          <div style="display: flex; gap: 1.5rem;">
            <a href="#" style="color: #94A3B8; text-decoration: none;">Privacy Policy</a>
            <a href="#" style="color: #94A3B8; text-decoration: none;">Terms of International Trade</a>
            <a href="#" style="color: #94A3B8; text-decoration: none;">Incoterms 2020 Guide</a>
          </div>

          <button id="footer-back-to-top-btn" class="btn btn-secondary-dark btn-sm" style="padding: 0.4rem 0.85rem;">
            <i data-lucide="arrow-up" style="width: 14px; height: 14px; color: var(--accent-gold);"></i>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  `;
}
