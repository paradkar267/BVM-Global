import { globalTradeRoutes } from '../data/routes.js';

export function renderGlobalNetwork() {
  const routesHtml = globalTradeRoutes.map((r, idx) => `
    <div class="route-tab-card ${idx === 0 ? 'active' : ''}" data-route-id="${r.id}">
      <div class="route-card-top">
        <span class="route-region-name">${r.region}</span>
        <span class="route-code-badge">${r.code}</span>
      </div>
      <div style="font-size: 0.75rem; color: var(--accent-gold); margin-bottom: 0.4rem;">
        <i data-lucide="anchor" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i>
        ${r.status}
      </div>
      <div class="route-details-grid">
        <div>
          <span style="font-size: 0.68rem; color: #64748B; display: block;">SEA TRANSIT</span>
          <span class="route-detail-val">${r.seaTransit}</span>
        </div>
        <div>
          <span style="font-size: 0.68rem; color: #64748B; display: block;">AIR TRANSIT</span>
          <span class="route-detail-val">${r.airTransit}</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="network-section" id="network">
      <div class="container-wide">
        <div style="max-width: 760px;">
          <div class="section-tag gold">
            <i data-lucide="globe" style="width: 14px; height: 14px;"></i>
            <span>GLOBAL NETWORK</span>
          </div>
          <h2 class="section-heading light">
            From India to the World
          </h2>
          <p class="section-subtitle light">
            Connecting Indian businesses and premium agricultural harvests with strategic trade hubs across all 5 continents.
          </p>
        </div>

        <div class="network-content-grid">
          <!-- Interactive SVG World Map -->
          <div class="map-svg-container">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <div style="font-size: 0.8125rem; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; gap: 0.5rem;">
                <span class="live-dot"></span>
                <span>Active Trade Corridors (Nagpur Hub: 21.1458° N / 79.0882° E)</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-gold);">50+ CONNECTED LANES</span>
            </div>

            <svg viewBox="0 0 1000 500" style="width: 100%; height: auto; display: block; border-radius: 8px; background: #07151C;">
              <!-- Grid Lines -->
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                </pattern>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#EAA228" stop-opacity="0.8"/>
                  <stop offset="50%" stop-color="#0EA5E9" stop-opacity="0.9"/>
                  <stop offset="100%" stop-color="#10B981" stop-opacity="0.8"/>
                </linearGradient>
              </defs>
              <rect width="1000" height="500" fill="url(#gridPattern)"/>

              <!-- Simplified World Landmass Outlines -->
              <!-- North America -->
              <path d="M 150 100 Q 220 80, 300 120 T 320 220 T 220 280 T 150 200 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>
              <!-- South America -->
              <path d="M 280 290 Q 340 330, 330 430 T 260 450 T 250 330 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>
              <!-- Europe & UK -->
              <path d="M 480 100 Q 560 90, 580 160 T 500 200 T 460 140 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>
              <!-- Africa -->
              <path d="M 480 210 Q 580 220, 570 360 T 510 420 T 470 270 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>
              <!-- Asia & India -->
              <path d="M 600 100 Q 750 80, 850 180 T 800 320 T 670 280 (India) T 610 200 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>
              <!-- Australia -->
              <path d="M 780 340 Q 860 330, 880 410 T 800 440 Z" fill="#112240" stroke="#1E3A8A" stroke-width="1.2" opacity="0.6"/>

              <!-- Trade Route Arcs originating from India (x: 675, y: 240) -->
              <!-- 1. India -> Middle East (x: 585, y: 220) -->
              <path d="M 675 240 Q 630 215, 585 220" fill="none" stroke="url(#routeGrad)" stroke-width="2.5" stroke-dasharray="6,4">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite"/>
              </path>
              <!-- 2. India -> Europe (x: 510, y: 140) -->
              <path d="M 675 240 Q 580 150, 510 140" fill="none" stroke="url(#routeGrad)" stroke-width="2.5" stroke-dasharray="6,4">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite"/>
              </path>
              <!-- 3. India -> North America (x: 240, y: 170) -->
              <path d="M 675 240 Q 420 50, 240 170" fill="none" stroke="url(#routeGrad)" stroke-width="2.5" stroke-dasharray="6,4">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="6s" repeatCount="indefinite"/>
              </path>
              <!-- 4. India -> Southeast Asia (x: 770, y: 280) -->
              <path d="M 675 240 Q 725 270, 770 280" fill="none" stroke="url(#routeGrad)" stroke-width="2.5" stroke-dasharray="6,4">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3.5s" repeatCount="indefinite"/>
              </path>
              <!-- 5. India -> East/South Africa (x: 550, y: 340) -->
              <path d="M 675 240 Q 610 300, 550 340" fill="none" stroke="url(#routeGrad)" stroke-width="2.5" stroke-dasharray="6,4">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4.5s" repeatCount="indefinite"/>
              </path>

              <!-- Main India Hub Pin (Nagpur / JNPT Mumbai) -->
              <g transform="translate(675, 240)">
                <circle r="12" fill="#EAA228" opacity="0.3">
                  <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle r="6" fill="#EAA228"/>
                <text x="12" y="4" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700">INDIA (NAGPUR HQ)</text>
              </g>

              <!-- Destination Hub Pins -->
              <!-- Middle East -->
              <g transform="translate(585, 220)">
                <circle r="4.5" fill="#0EA5E9"/>
                <text x="-10" y="-10" fill="#E2E8F0" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600">DUBAI (MEA)</text>
              </g>
              <!-- Europe -->
              <g transform="translate(510, 140)">
                <circle r="4.5" fill="#0EA5E9"/>
                <text x="-40" y="-8" fill="#E2E8F0" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600">ROTTERDAM (EU)</text>
              </g>
              <!-- North America -->
              <g transform="translate(240, 170)">
                <circle r="4.5" fill="#0EA5E9"/>
                <text x="-45" y="-8" fill="#E2E8F0" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600">NEW YORK (USA)</text>
              </g>
              <!-- Southeast Asia -->
              <g transform="translate(770, 280)">
                <circle r="4.5" fill="#0EA5E9"/>
                <text x="10" y="4" fill="#E2E8F0" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600">SINGAPORE (SEA)</text>
              </g>
              <!-- Africa -->
              <g transform="translate(550, 340)">
                <circle r="4.5" fill="#0EA5E9"/>
                <text x="-50" y="14" fill="#E2E8F0" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600">MOMBASA (AFR)</text>
              </g>
            </svg>

            <!-- Bottom Map Callout -->
            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div style="font-size: 0.78125rem; color: #94A3B8;">
                <i data-lucide="info" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; color: var(--accent-gold);"></i>
                Click any region on the right to view active ports and transit schedules.
              </div>
              <button class="btn btn-outline-gold btn-sm" id="map-inquire-route-btn">
                <span>Inquire Route Feasibility</span>
              </button>
            </div>
          </div>

          <!-- Right Column: Route Tabs List -->
          <div class="routes-tabs-list">
            ${routesHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
