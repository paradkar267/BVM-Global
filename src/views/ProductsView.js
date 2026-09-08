import { renderIndustriesProducts } from '../components/IndustriesProducts.js';
import { renderQuoteSection } from '../components/QuoteSection.js';

export function renderProductsView() {
  return `
    <div style="padding-top: calc(var(--header-height) + 2.5rem); background-color: var(--bg-dark-primary); color: #FFFFFF; padding-bottom: 4rem;">
      <div class="container">
        <div style="max-width: 840px; margin: 0 auto; text-align: center;">
          <div class="section-tag gold">
            <i data-lucide="package" style="width: 14px; height: 14px;"></i>
            <span>EXPORT-GRADE CATALOG</span>
          </div>
          <h1 class="section-heading light" style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); margin-bottom: 1.25rem;">
            Indian Spices, Grains, Produce & Agro-Commodities
          </h1>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto; font-size: 1.15rem;">
            Explore full specifications, optical Sortex purity metrics, moisture thresholds, and export packaging options.
          </p>
        </div>
      </div>
    </div>

    ${renderIndustriesProducts('all')}
    ${renderQuoteSection()}
  `;
}
