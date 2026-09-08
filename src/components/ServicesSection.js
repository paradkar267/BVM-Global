import { logisticsServices } from '../data/services.js';

export function renderServicesSection() {
  const cardsHtml = logisticsServices.map(service => `
    <div class="service-card" data-service-id="${service.id}">
      <div class="service-card-image">
        <img src="${service.image}" alt="${service.title}" />
        <span class="service-card-badge" style="border-color: ${service.color}; color: ${service.color};">
          ${service.badge}
        </span>
      </div>
      <div class="service-card-body">
        <div class="service-card-icon" style="background-color: ${service.color}18; color: ${service.color};">
          <i data-lucide="${service.icon}" style="width: 24px; height: 24px;"></i>
        </div>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.subtitle}</p>
        <div class="service-card-footer">
          <span class="service-link open-service-modal" data-service-id="${service.id}" style="color: ${service.color};">
            <span>Explore Details</span>
            <i data-lucide="arrow-up-right" style="width: 14px; height: 14px;"></i>
          </span>
          <button class="btn btn-outline-gold btn-sm quick-inquire-btn" data-service-title="${service.title}">
            Inquire
          </button>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-header-row">
          <div>
            <div class="section-tag">
              <i data-lucide="layers" style="width: 14px; height: 14px;"></i>
              <span>OUR SERVICES</span>
            </div>
            <h2 class="section-heading">
              Comprehensive Logistics Solutions
            </h2>
            <p class="section-subtitle">
              Tailored international freight forwarding, specialized customs processing, and multimodal transportation networks across all trade routes.
            </p>
          </div>

          <a href="#contact" class="btn btn-primary" data-nav="contact">
            <span>Get Live Freight Quote</span>
            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
          </a>
        </div>

        <div class="services-cards-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
