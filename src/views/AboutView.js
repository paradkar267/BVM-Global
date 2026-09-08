import { renderStatsBar } from '../components/StatsBar.js';
import { renderWhyChooseUs } from '../components/WhyChooseUs.js';

export function renderAboutView() {
  return `
    <div style="padding-top: calc(var(--header-height) + 2.5rem); background-color: var(--bg-dark-primary); color: #FFFFFF; padding-bottom: 4rem;">
      <div class="container">
        <div style="max-width: 840px; margin: 0 auto; text-align: center;">
          <div class="section-tag gold">
            <i data-lucide="info" style="width: 14px; height: 14px;"></i>
            <span>THE COMPANY & PHILOSOPHY</span>
          </div>
          <h1 class="section-heading light" style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); margin-bottom: 1.25rem;">
            Built With Precision. Connected Through Trust.
          </h1>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto; font-size: 1.15rem;">
            From the strategic center of India (Nagpur 21.1458° N / 79.0882° E) to international trade gateways worldwide, Pankaj Overseas builds lasting global partnerships.
          </p>
        </div>
      </div>
    </div>

    ${renderStatsBar()}

    <section style="padding: 5rem 0; background-color: #FFFFFF;">
      <div class="container">
        <div class="about-split-grid">
          <div>
            <div class="section-tag">
              <i data-lucide="target" style="width: 14px; height: 14px;"></i>
              <span>OUR SOURCING ETHOS</span>
            </div>
            <h2 class="section-heading" style="margin-bottom: 1.25rem;">
              Direct Sourcing from India's Richest Agricultural Belts
            </h2>
            <p style="color: var(--text-dark-muted); line-height: 1.7; margin-bottom: 1.5rem;">
              Successful global trade is built on understanding, consistency, and meticulous attention to detail. We work directly with certified farming clusters, APMC mandis, and processing mills across Maharashtra, Punjab, Haryana, Gujarat, and Kerala.
            </p>
            <p style="color: var(--text-dark-muted); line-height: 1.7; margin-bottom: 1.5rem;">
              Every consignment undergoes rigorous laboratory inspection for moisture levels, aflatoxins, pesticide residues, and microbial counts, certified by accredited testing bodies (SGS, Eurofins, and Spices Board laboratories).
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
              <div style="background: #F8FAFC; padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
                <div style="font-weight: 700; color: var(--text-dark-heading); margin-bottom: 0.25rem;">Zero-Compromise Quality</div>
                <div style="font-size: 0.8125rem; color: var(--text-dark-muted);">Optical Sortex cleaning, strict moisture control, and international export grading.</div>
              </div>
              <div style="background: #F8FAFC; padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
                <div style="font-weight: 700; color: var(--text-dark-heading); margin-bottom: 0.25rem;">Certified Compliance</div>
                <div style="font-size: 0.8125rem; color: var(--text-dark-muted);">APEDA, Spices Board of India, FSSAI, GlobalG.A.P., and Phytosanitary certified.</div>
              </div>
            </div>
          </div>

          <div class="about-image-card">
            <img src="/assets/spices_category.jpg" alt="Pankaj Overseas Indian Spices Sourcing" />
          </div>
        </div>
      </div>
    </section>

    <!-- Nagpur Strategic Hub Section -->
    <section style="padding: 5rem 0; background-color: var(--bg-dark-secondary); color: #FFFFFF;">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto 3.5rem auto;">
          <div class="section-tag gold">
            <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i>
            <span>STRATEGIC ADVANTAGE</span>
          </div>
          <h2 class="section-heading light">
            Nagpur: The Zero-Mile Logistics Heart of India
          </h2>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto;">
            Located at 21.1458° N, 79.0882° E, Nagpur is India's geographical epicenter with unparalleled road, rail, and inland container depot (ICD) infrastructure.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <div style="background: rgba(10, 25, 47, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-xl); padding: 2rem;">
            <div style="font-size: 2rem; color: var(--accent-gold); margin-bottom: 1rem;"><i data-lucide="train"></i></div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: #FFFFFF;">Direct Rail Freight Corridor</h3>
            <p style="font-size: 0.875rem; color: #94A3B8; line-height: 1.6;">Direct container rail access to Jawaharlal Nehru Port Trust (JNPT Mumbai) and Mundra Port in under 24-36 hours.</p>
          </div>

          <div style="background: rgba(10, 25, 47, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-xl); padding: 2rem;">
            <div style="font-size: 2rem; color: var(--accent-cyan); margin-bottom: 1rem;"><i data-lucide="truck"></i></div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: #FFFFFF;">Multi-State Farm Access</h3>
            <p style="font-size: 0.875rem; color: #94A3B8; line-height: 1.6;">Immediate proximity to Maharashtra orange belts, Vidarbha pulses, MP wheat, and Gujarat spice mandis.</p>
          </div>

          <div style="background: rgba(10, 25, 47, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-xl); padding: 2rem;">
            <div style="font-size: 2rem; color: var(--accent-emerald); margin-bottom: 1rem;"><i data-lucide="plane"></i></div>
            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: #FFFFFF;">Air Cargo Hub (MIHAN)</h3>
            <p style="font-size: 0.875rem; color: #94A3B8; line-height: 1.6;">Multi-Modal International Cargo Hub and Airport at Nagpur with specialized cold-storage handling.</p>
          </div>
        </div>
      </div>
    </section>

    ${renderWhyChooseUs()}
  `;
}
