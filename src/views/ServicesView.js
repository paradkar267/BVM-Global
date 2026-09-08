import { renderServicesSection } from '../components/ServicesSection.js';
import { renderTransportModes } from '../components/TransportModes.js';
import { renderImportExportFlow } from '../components/ImportExportFlow.js';
import { renderProcessMilestones } from '../components/ProcessMilestones.js';
import { renderQuoteSection } from '../components/QuoteSection.js';

export function renderServicesView() {
  return `
    <div style="padding-top: calc(var(--header-height) + 2.5rem); background-color: var(--bg-dark-primary); color: #FFFFFF; padding-bottom: 4rem;">
      <div class="container">
        <div style="max-width: 840px; margin: 0 auto; text-align: center;">
          <div class="section-tag gold">
            <i data-lucide="layers" style="width: 14px; height: 14px;"></i>
            <span>MULTIMODAL LOGISTICS SUITE</span>
          </div>
          <h1 class="section-heading light" style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); margin-bottom: 1.25rem;">
            International Logistics & Freight Solutions
          </h1>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto; font-size: 1.15rem;">
            Integrated Sea, Air, Road and Rail transportation services designed for seamless cross-border commodity trade.
          </p>
        </div>
      </div>
    </div>

    ${renderServicesSection()}
    ${renderTransportModes()}
    ${renderImportExportFlow()}
    ${renderProcessMilestones()}
    ${renderQuoteSection()}
  `;
}
