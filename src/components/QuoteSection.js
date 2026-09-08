import { containerSpecs } from '../data/services.js';

export function renderQuoteSection() {
  return `
    <section class="quote-section" id="contact">
      <div class="quote-bg-mesh"></div>
      
      <div class="container-wide">
        <div class="quote-split-grid">
          <!-- Left Column: Copy & Live Container Calculator -->
          <div class="quote-info-col">
            <div class="section-tag gold">
              <i data-lucide="send" style="width: 14px; height: 14px;"></i>
              <span>GET A QUOTE</span>
            </div>
            
            <h2 class="section-heading light">
              Ready to Move Your Cargo?
            </h2>
            
            <p class="section-subtitle light" style="margin-top: 1rem;">
              Tell us where you're shipping from, where you're shipping to, and what you're moving. Our international logistics desk will formulate the most cost-effective multimodal freight plan for your shipment.
            </p>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="tel:+919876543210" class="btn btn-secondary-dark">
                <i data-lucide="phone" style="width: 16px; height: 16px; color: var(--accent-gold);"></i>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@pankajoverseas.com" class="btn btn-secondary-dark">
                <i data-lucide="mail" style="width: 16px; height: 16px; color: var(--accent-cyan);"></i>
                <span>info@pankajoverseas.com</span>
              </a>
            </div>

            <!-- Interactive Container Load Estimator Tool -->
            <div class="calc-card">
              <div class="calc-title">
                <i data-lucide="calculator" style="width: 18px; height: 18px;"></i>
                <span>FCL Container Capacity Estimator</span>
              </div>
              <p style="font-size: 0.78125rem; color: #94A3B8; margin-bottom: 0.75rem;">
                Select commodity & container type to compute estimated payload capacities:
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                <div>
                  <label style="font-size: 0.7rem; color: #CBD5E1; display: block; margin-bottom: 0.2rem;">Commodity</label>
                  <select id="calc-commodity-select" class="form-select" style="width: 100%; font-size: 0.8rem; padding: 0.5rem;">
                    <option value="rice">Basmati Rice (25kg Bags)</option>
                    <option value="spices">Whole Spices / Black Pepper</option>
                    <option value="pulses">Chickpeas / Lentils (50kg Bags)</option>
                    <option value="mangoes">Fresh Alphonso Mangoes</option>
                    <option value="cotton">Raw Cotton Bales</option>
                  </select>
                </div>
                <div>
                  <label style="font-size: 0.7rem; color: #CBD5E1; display: block; margin-bottom: 0.2rem;">Container Type</label>
                  <select id="calc-container-select" class="form-select" style="width: 100%; font-size: 0.8rem; padding: 0.5rem;">
                    <option value="20ft">20ft Standard Dry (20 FCL)</option>
                    <option value="40hc">40ft High Cube (40 HC)</option>
                    <option value="40rf">40ft Reefer Container</option>
                  </select>
                </div>
              </div>

              <div class="calc-result-box" id="calc-result-display">
                <div>
                  <div style="font-size: 0.7rem; color: #94A3B8; text-transform: uppercase;">Estimated FCL Payload</div>
                  <div style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--accent-gold);" id="calc-payload-val">
                    25.0 - 26.0 Metric Tons
                  </div>
                </div>
                <div style="text-align: right;">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); display: block;" id="calc-units-val">
                    ~1,000 Bags (25kg)
                  </span>
                  <span style="font-size: 0.68rem; color: #94A3B8;">Max Volume: 33.2 CBM</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Quote Request Form -->
          <div class="quote-form-col">
            <div class="quote-form-card">
              <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
                Request Trade & Freight Quotation
              </h3>
              <p style="font-size: 0.8125rem; color: #94A3B8; margin-bottom: 1.5rem;">
                Complete this form to receive a detailed FOB, CIF, or CFR quotation within 24 hours.
              </p>

              <form id="quote-request-form">
                <div class="form-row-grid">
                  <div class="form-group">
                    <label class="form-label">Full Name *</label>
                    <input type="text" name="name" class="form-input" placeholder="e.g. John Doe" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Company Name *</label>
                    <input type="text" name="company" class="form-input" placeholder="e.g. Global Foods Trading Ltd." required />
                  </div>
                </div>

                <div class="form-row-grid">
                  <div class="form-group">
                    <label class="form-label">Business Email *</label>
                    <input type="email" name="email" class="form-input" placeholder="name@company.com" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Phone / WhatsApp *</label>
                    <input type="tel" name="phone" class="form-input" placeholder="+971 50 123 4567" required />
                  </div>
                </div>

                <div class="form-row-grid">
                  <div class="form-group">
                    <label class="form-label">Origin (City / Port)</label>
                    <input type="text" name="origin" class="form-input" value="Nagpur / JNPT (India)" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Destination Port / Country *</label>
                    <input type="text" name="destination" class="form-input" placeholder="e.g. Jebel Ali / Rotterdam / New York" required />
                  </div>
                </div>

                <div class="form-row-grid">
                  <div class="form-group">
                    <label class="form-label">Commodity / Cargo Type *</label>
                    <select name="cargoType" class="form-select" required>
                      <option value="Spices & Herbs">Spices (Cardamom, Pepper, Turmeric, Cumin, Chilli)</option>
                      <option value="Basmati Rice & Pulses">Basmati Rice (1121, Traditional, Pulses)</option>
                      <option value="Fresh Produce">Fresh Fruits & Vegetables (Mangoes, Onions, Grapes)</option>
                      <option value="Agro Commodities">Commodities (Sesame Seeds, Peanuts, Cotton)</option>
                      <option value="General Commercial Freight">General Commercial / Industrial Cargo</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Estimated Volume / Quantity</label>
                    <input type="text" name="volume" class="form-input" placeholder="e.g. 2 x 20ft FCL or 50 Metric Tons" />
                  </div>
                </div>

                <div class="form-group" style="margin-bottom: 1.5rem;">
                  <label class="form-label">Special Requirements / Target Incoterm</label>
                  <textarea name="message" class="form-textarea" placeholder="Specify required Incoterms (FOB / CIF / CFR), packaging preferences, moisture or grade requirements..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  <span>Request a Quote</span>
                  <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
