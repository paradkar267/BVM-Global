import { importSteps, exportSteps } from '../data/services.js';

export function renderImportExportFlow() {
  const importHtml = importSteps.map(s => `
    <div class="flow-step-item">
      <span class="step-num">${s.step}</span>
      <div class="step-content">
        <h5>${s.title}</h5>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  const exportHtml = exportSteps.map(s => `
    <div class="flow-step-item">
      <span class="step-num" style="color: var(--accent-emerald);">${s.step}</span>
      <div class="step-content">
        <h5>${s.title}</h5>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="import-export-section" id="import-export">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto;">
          <div class="section-tag">
            <i data-lucide="arrow-left-right" style="width: 14px; height: 14px;"></i>
            <span>IMPORT & EXPORT</span>
          </div>
          <h2 class="section-heading">
            Simplifying Global Trade
          </h2>
          <p class="section-subtitle" style="margin-left: auto; margin-right: auto;">
            Whether you are importing essential raw commodities into India or exporting agricultural produce to international markets, we manage every step with precision and professionalism.
          </p>
        </div>

        <div class="import-export-grid">
          <!-- IMPORT CARD -->
          <div class="flow-card import-theme">
            <div class="flow-card-header">
              <div class="flow-title-wrapper">
                <div class="flow-icon-circle">
                  <i data-lucide="arrow-down-left" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                  <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--accent-blue);">
                    IMPORT SOLUTIONS
                  </h3>
                  <p style="font-size: 0.78125rem; color: var(--text-dark-muted);">Inbound Cargo & Customs Facilitation</p>
                </div>
              </div>
              <span class="service-card-badge" style="position: static; background: rgba(2, 132, 199, 0.1); color: var(--accent-blue); border-color: rgba(2, 132, 199, 0.3);">
                6 STAGES
              </span>
            </div>

            <div class="flow-steps-list">
              ${importHtml}
            </div>

            <div style="margin-top: 1.5rem; text-align: center;">
              <button class="btn btn-secondary-light btn-sm trigger-rfq-import" style="width: 100%;">
                <span>Start Import Consultation</span>
                <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
              </button>
            </div>
          </div>

          <!-- EXPORT CARD -->
          <div class="flow-card export-theme">
            <div class="flow-card-header">
              <div class="flow-title-wrapper">
                <div class="flow-icon-circle">
                  <i data-lucide="arrow-up-right" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                  <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--accent-emerald);">
                    EXPORT SOLUTIONS
                  </h3>
                  <p style="font-size: 0.78125rem; color: var(--text-dark-muted);">From Indian Farms & Mills to World Ports</p>
                </div>
              </div>
              <span class="service-card-badge" style="position: static; background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald); border-color: rgba(16, 185, 129, 0.3);">
                6 STAGES
              </span>
            </div>

            <div class="flow-steps-list">
              ${exportHtml}
            </div>

            <div style="margin-top: 1.5rem; text-align: center;">
              <button class="btn btn-primary btn-sm trigger-rfq-export" style="width: 100%;">
                <span>Start Export Order</span>
                <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
