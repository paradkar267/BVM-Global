export function renderQuickQuoteModal() {
  return `
    <div class="modal-backdrop" id="quick-quote-modal">
      <div class="modal-window">
        <button class="modal-close-btn" id="quick-quote-close">
          <i data-lucide="x" style="width: 20px; height: 20px;"></i>
        </button>
        
        <div style="margin-bottom: 1.5rem;">
          <div class="section-tag gold" style="margin-bottom: 0.25rem;">
            <i data-lucide="send" style="width: 14px; height: 14px;"></i>
            <span>EXPRESS TRADE INQUIRY</span>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: #FFFFFF;">
            Request Instant Quote
          </h3>
          <p style="font-size: 0.8125rem; color: #94A3B8;">
            Get competitive freight tariffs, FOB/CIF commodity quotes, and container allocation timelines.
          </p>
        </div>

        <form id="modal-quote-form">
          <div class="form-row-grid">
            <div class="form-group">
              <label class="form-label">Your Name *</label>
              <input type="text" name="name" class="form-input" placeholder="Full Name" required />
            </div>
            <div class="form-group">
              <label class="form-label">Company Name *</label>
              <input type="text" name="company" class="form-input" placeholder="Company Name" required />
            </div>
          </div>

          <div class="form-row-grid">
            <div class="form-group">
              <label class="form-label">Email *</label>
              <input type="email" name="email" class="form-input" placeholder="name@company.com" required />
            </div>
            <div class="form-group">
              <label class="form-label">Phone / WhatsApp *</label>
              <input type="tel" name="phone" class="form-input" placeholder="+91 / +971..." required />
            </div>
          </div>

          <div class="form-row-grid">
            <div class="form-group">
              <label class="form-label">Commodity / Service</label>
              <input type="text" name="commodity" id="modal-input-commodity" class="form-input" placeholder="e.g. Basmati Rice 1121 / Sea Freight" />
            </div>
            <div class="form-group">
              <label class="form-label">Destination Port</label>
              <input type="text" name="destination" class="form-input" placeholder="e.g. Jebel Ali, Dubai" required />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 1.25rem;">
            <label class="form-label">Message / Volume Details</label>
            <textarea name="message" class="form-textarea" placeholder="Provide quantity (e.g. 50 MT), preferred packaging, delivery month..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            <span>Submit RFQ to Trade Desk</span>
            <i data-lucide="check" style="width: 18px; height: 18px;"></i>
          </button>
        </form>
      </div>
    </div>
  `;
}
