import { renderHero } from '../components/Hero.js';
import { renderStatsBar } from '../components/StatsBar.js';
import { renderAboutSection } from '../components/AboutSection.js';
import { renderServicesSection } from '../components/ServicesSection.js';
import { renderTransportModes } from '../components/TransportModes.js';
import { renderImportExportFlow } from '../components/ImportExportFlow.js';
import { renderProcessMilestones } from '../components/ProcessMilestones.js';
import { renderGlobalNetwork } from '../components/GlobalNetwork.js';
import { renderWhyChooseUs } from '../components/WhyChooseUs.js';
import { renderIndustriesProducts } from '../components/IndustriesProducts.js';
import { renderQuoteSection } from '../components/QuoteSection.js';

export function renderHomeView() {
  return `
    <main>
      ${renderHero()}
      ${renderStatsBar()}
      ${renderAboutSection()}
      ${renderServicesSection()}
      ${renderTransportModes()}
      ${renderImportExportFlow()}
      ${renderProcessMilestones()}
      ${renderGlobalNetwork()}
      ${renderWhyChooseUs()}
      ${renderIndustriesProducts('all')}
      ${renderQuoteSection()}
    </main>
  `;
}
