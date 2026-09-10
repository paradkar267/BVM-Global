import { renderQuoteSection } from '../components/QuoteSection.js';

export function renderContactView() {
  return `
    <div style="padding-top: calc(var(--header-height) + 2.5rem); background-color: var(--bg-dark-primary); color: #FFFFFF; padding-bottom: 4rem;">
      <div class="container">
        <div style="max-width: 840px; margin: 0 auto; text-align: center;">
          <div class="section-tag gold">
            <i data-lucide="phone-call" style="width: 14px; height: 14px;"></i>
            <span>START A CONVERSATION</span>
          </div>
          <h1 class="section-heading light" style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); margin-bottom: 1.25rem;">
            Let's Move Business Beyond Borders
          </h1>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto; font-size: 1.15rem;">
            Connect with our trade specialists in Nagpur or our coastal port liaison desks for immediate quotes and order booking.
          </p>
        </div>
      </div>
    </div>

    ${renderQuoteSection()}

    <!-- Direct Directory & Map Info -->
    <section style="padding: 5rem 0; background-color: #FFFFFF;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <!-- Card 1 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: var(--radius-xl); padding: 2rem;">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: rgba(234, 162, 40, 0.15); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <i data-lucide="map-pin" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-dark-heading); margin-bottom: 0.5rem;">
              Central Headquarters
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-dark-muted); line-height: 1.6; margin-bottom: 1rem;">
              123, Business Park, Central Avenue, Nagpur, Maharashtra, 440001, India.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-gold); font-weight: 700;">
              21.1458° N / 79.0882° E
            </div>
          </div>

          <!-- Card 2 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: var(--radius-xl); padding: 2rem;">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: rgba(14, 165, 233, 0.15); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <i data-lucide="phone" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-dark-heading); margin-bottom: 0.5rem;">
              Direct Phone & WhatsApp
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-dark-muted); line-height: 1.6; margin-bottom: 1rem;">
              International Trade Desk: <strong>+91 95189 46362</strong><br>
              Logistics Coordination: <strong>+91 95189 46362</strong>
            </p>
            <div style="font-size: 0.75rem; color: var(--text-dark-muted);">
              Available Mon - Sat, 09:00 - 19:00 IST
            </div>
          </div>

          <!-- Card 3 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: var(--radius-xl); padding: 2rem;">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <i data-lucide="mail" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text-dark-heading); margin-bottom: 0.5rem;">
              Email Inquiries
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-dark-muted); line-height: 1.6; margin-bottom: 1rem;">
              General Inquiries: <strong>PankajoverseasExports@gmail.com</strong><br>
              RFQ & Export Desk: <strong>PankajoverseasExports@gmail.com</strong>
            </p>
            <div style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 600;">
              Guaranteed 24-Hour Response
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
