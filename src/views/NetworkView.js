import { renderGlobalNetwork } from '../components/GlobalNetwork.js';
import { renderQuoteSection } from '../components/QuoteSection.js';
import { globalTradeRoutes } from '../data/routes.js';

export function renderNetworkView() {
  const routesCards = globalTradeRoutes.map(r => `
    <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-xl); padding: 2rem; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--text-dark-heading);">${r.region}</h3>
        <span class="route-code-badge" style="background: rgba(234, 162, 40, 0.15); color: var(--accent-gold); font-weight: 700;">${r.code}</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; background: #F8FAFC; padding: 1rem; border-radius: var(--radius-md);">
        <div>
          <span style="font-size: 0.72rem; color: #64748B; text-transform: uppercase;">Sea Ocean Transit</span>
          <div style="font-weight: 700; color: var(--accent-blue);">${r.seaTransit}</div>
        </div>
        <div>
          <span style="font-size: 0.72rem; color: #64748B; text-transform: uppercase;">Air Freight Transit</span>
          <div style="font-weight: 700; color: var(--accent-gold);">${r.airTransit}</div>
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-muted); text-transform: uppercase; display: block; margin-bottom: 0.35rem;">Destination Ports & Hubs:</span>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${r.hubPorts.map(p => `<span style="font-size: 0.75rem; background: #F1F5F9; color: var(--text-dark-heading); padding: 0.2rem 0.6rem; border-radius: var(--radius-sm);">${p}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-muted); text-transform: uppercase; display: block; margin-bottom: 0.35rem;">Major Export Commodities:</span>
        <div style="font-size: 0.8125rem; color: var(--text-dark-body); font-weight: 500;">
          ${r.topCommodities.join(' • ')}
        </div>
      </div>

      <div style="border-top: 1px solid #F1F5F9; padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.72rem; color: #64748B;">Compliance: <strong>${r.compliance}</strong></span>
        <button class="btn btn-outline-gold btn-sm quick-inquire-btn" data-service-title="Trade Corridor: ${r.region}">
          Book Space
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div style="padding-top: calc(var(--header-height) + 2.5rem); background-color: var(--bg-dark-primary); color: #FFFFFF; padding-bottom: 4rem;">
      <div class="container">
        <div style="max-width: 840px; margin: 0 auto; text-align: center;">
          <div class="section-tag gold">
            <i data-lucide="globe" style="width: 14px; height: 14px;"></i>
            <span>GLOBAL TRADE LANES</span>
          </div>
          <h1 class="section-heading light" style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); margin-bottom: 1.25rem;">
            International Corridors & Port Connectivity
          </h1>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto; font-size: 1.15rem;">
            Operating scheduled maritime and air freight dispatches from Indian gateway ports to over 45+ countries.
          </p>
        </div>
      </div>
    </div>

    ${renderGlobalNetwork()}

    <section style="padding: 5rem 0; background-color: var(--bg-light-primary);">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto 3rem auto;">
          <div class="section-tag">
            <i data-lucide="anchor" style="width: 14px; height: 14px;"></i>
            <span>PORT DESTINATIONS</span>
          </div>
          <h2 class="section-heading">
            Regional Trade Specifications
          </h2>
          <p class="section-subtitle" style="margin-left: auto; margin-right: auto;">
            In-depth transit data, customs compliance protocols, and major container handling capacities by geography.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
          ${routesCards}
        </div>
      </div>
    </section>

    ${renderQuoteSection()}
  `;
}
