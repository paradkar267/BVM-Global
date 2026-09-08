import { whyChooseUsPillars } from '../data/services.js';

export function renderWhyChooseUs() {
  const cardsHtml = whyChooseUsPillars.map(p => `
    <div class="why-card">
      <div class="why-icon-box">
        <i data-lucide="${p.icon}" style="width: 24px; height: 24px;"></i>
      </div>
      <h3 class="why-card-title">${p.title}</h3>
      <p class="why-card-desc">${p.desc}</p>
    </div>
  `).join('');

  return `
    <section class="why-us-section" id="why-us">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto;">
          <div class="section-tag">
            <i data-lucide="check-shield" style="width: 14px; height: 14px;"></i>
            <span>WHY CHOOSE US</span>
          </div>
          <h2 class="section-heading">
            Why Businesses Choose Pankaj Overseas
          </h2>
          <p class="section-subtitle" style="margin-left: auto; margin-right: auto;">
            Our reputation is built on consistency, transparent communication, uncompromising quality screening, and dependable international freight execution.
          </p>
        </div>

        <div class="why-us-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
