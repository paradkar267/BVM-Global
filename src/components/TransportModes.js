import { transportModes } from '../data/services.js';

export function renderTransportModes() {
  const modesHtml = transportModes.map(m => `
    <div class="mode-card mode-detail-trigger" data-mode-id="${m.id}">
      <img src="${m.image}" alt="${m.title}" />
      <div class="mode-card-overlay">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span class="mode-name-tag">${m.name}</span>
          <i data-lucide="${m.icon}" style="color: var(--accent-gold); width: 22px; height: 22px;"></i>
        </div>
        <p class="mode-subtitle">${m.tagline}</p>
        <div style="margin-top: 0.6rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-cyan);">
          Transit: ${m.transit}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="transport-banner-section" id="transport">
      <div class="container">
        <div class="transport-banner-header">
          <div class="section-tag gold">
            <i data-lucide="network" style="width: 14px; height: 14px;"></i>
            <span>TRANSPORTATION MODES</span>
          </div>
          <h2 class="section-heading light">
            One Network. Every Mode.
          </h2>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto;">
            Sea, Air, Road and Rail — seamlessly connected to ensure your cargo arrives on schedule, with optimal cost efficiency and zero damage.
          </p>
          <div style="margin-top: 1.5rem;">
            <a href="#network" class="btn btn-primary" data-nav="network">
              <span>Explore Our Network</span>
              <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
            </a>
          </div>
        </div>

        <div class="transport-modes-flex">
          ${modesHtml}
        </div>
      </div>
    </section>
  `;
}
