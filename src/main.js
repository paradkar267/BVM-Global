import { createIcons, icons } from 'lucide';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderSpecModal } from './components/SpecModal.js';
import { renderQuickQuoteModal } from './components/QuickQuoteModal.js';

// Views
import { renderHomeView } from './views/HomeView.js';
import { renderAboutView } from './views/AboutView.js';
import { renderServicesView } from './views/ServicesView.js';
import { renderProductsView } from './views/ProductsView.js';
import { renderNetworkView } from './views/NetworkView.js';
import { renderContactView } from './views/ContactView.js';

// Data
import { productCategories } from './data/products.js';
import { logisticsServices, transportModes, containerSpecs } from './data/services.js';
import { globalTradeRoutes } from './data/routes.js';

let currentRoute = 'home';
let selectedProductCategory = 'all';

function getRouteFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  if (['home', 'about', 'services', 'transport', 'products', 'network', 'contact'].includes(hash)) {
    return hash;
  }
  return 'home';
}

function renderApp() {
  const app = document.getElementById('app');
  currentRoute = getRouteFromHash();

  let viewHtml = '';
  if (currentRoute === 'about') {
    viewHtml = renderAboutView();
  } else if (currentRoute === 'services' || currentRoute === 'transport') {
    viewHtml = renderServicesView();
  } else if (currentRoute === 'products') {
    viewHtml = renderProductsView();
  } else if (currentRoute === 'network') {
    viewHtml = renderNetworkView();
  } else if (currentRoute === 'contact') {
    viewHtml = renderContactView();
  } else {
    viewHtml = renderHomeView();
  }

  app.innerHTML = `
    ${renderHeader(currentRoute)}
    <div id="view-container">
      ${viewHtml}
    </div>
    ${renderFooter()}
    ${renderSpecModal()}
    ${renderQuickQuoteModal()}
    <div id="toast-container" class="toast-notification">
      <i data-lucide="check-circle" style="width: 20px; height: 20px;"></i>
      <span id="toast-message">Quotation Request Submitted Successfully!</span>
    </div>
  `;

  // Initialize Lucide Icons
  createIcons({ icons });

  // Attach Event Listeners
  attachEvents();
}

function showToast(message) {
  const toast = document.getElementById('toast-container');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

function attachEvents() {
  // 1. Navigation handling
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetRoute = link.getAttribute('data-nav');
      // If we are on home view and clicked a section anchor, scroll smoothly
      const isHome = currentRoute === 'home' || currentRoute === '';
      const sectionEl = document.getElementById(targetRoute);

      if (isHome && sectionEl) {
        e.preventDefault();
        window.history.pushState(null, '', `#${targetRoute}`);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
        link.classList.add('active');
        closeMobileDrawer();
        return;
      }

      // Otherwise switch routes
      window.location.hash = targetRoute;
      closeMobileDrawer();
    });
  });

  // 2. Mobile drawer
  const drawerToggle = document.getElementById('mobile-drawer-toggle');
  const drawerClose = document.getElementById('mobile-drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (drawerToggle && mobileDrawer) {
    drawerToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  }

  // 3. Header scroll effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // 4. Back to top button
  const backToTopBtn = document.getElementById('footer-back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Hero Multimodal Mode Selector
  const modeItems = document.querySelectorAll('.transport-mode-item');
  const heroModeTitle = document.getElementById('hero-mode-title');
  const heroModeTransit = document.getElementById('hero-mode-transit');
  const heroModeDesc = document.getElementById('hero-mode-desc');
  const heroModeBest = document.getElementById('hero-mode-best');

  modeItems.forEach(item => {
    item.addEventListener('click', () => {
      modeItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const modeKey = item.getAttribute('data-mode');
      const modeData = transportModes.find(m => m.id === modeKey);
      if (modeData && heroModeTitle) {
        heroModeTitle.textContent = modeData.title;
        heroModeTransit.textContent = `Transit: ${modeData.transit}`;
        heroModeDesc.textContent = `${modeData.tagline} operating through ${modeData.ports}.`;
        heroModeBest.innerHTML = `<strong style="color: var(--accent-cyan);">Best For:</strong> ${modeData.bestFor}`;
      }
    });
  });

  // 6. Category Filter Buttons in Products Section
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      selectedProductCategory = cat;

      // Filter product item cards
      const cards = document.querySelectorAll('.product-item-card');
      const allItems = [];
      productCategories.forEach(c => {
        c.items.forEach(it => allItems.push({ ...it, categoryId: c.id }));
      });

      cards.forEach(card => {
        const pId = card.getAttribute('data-product-id');
        const itemObj = allItems.find(i => i.id === pId);
        if (itemObj) {
          if (cat === 'all' || itemObj.categoryId === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // 7. Product Spec Modal Triggers
  document.querySelectorAll('.open-product-spec-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-product-id');
      let found = null;
      for (const c of productCategories) {
        const item = c.items.find(i => i.id === pId);
        if (item) {
          found = { ...item, categoryName: c.name };
          break;
        }
      }
      if (found) {
        openSpecModal(found);
      }
    });
  });

  // 8. Service / Transport Modal Triggers
  document.querySelectorAll('.open-service-modal, .mode-detail-trigger').forEach(el => {
    el.addEventListener('click', () => {
      const serviceId = el.getAttribute('data-service-id');
      const modeId = el.getAttribute('data-mode-id');
      
      if (serviceId) {
        const s = logisticsServices.find(x => x.id === serviceId);
        if (s) openServiceModal(s);
      } else if (modeId) {
        const m = transportModes.find(x => x.id === modeId);
        if (m) openModeModal(m);
      }
    });
  });

  // 9. Quick Quote Modal Triggers
  const openQuoteBtn = document.getElementById('open-quote-modal-btn');
  const heroQuoteBtn = document.getElementById('hero-quick-quote-btn');
  const mobileQuoteTrigger = document.getElementById('mobile-quote-trigger');
  const mapRouteBtn = document.getElementById('map-inquire-route-btn');
  const quoteModal = document.getElementById('quick-quote-modal');
  const quoteModalClose = document.getElementById('quick-quote-close');

  function openQuickQuote(prefillCommodity = '') {
    if (quoteModal) {
      const commInput = document.getElementById('modal-input-commodity');
      if (commInput && prefillCommodity) commInput.value = prefillCommodity;
      quoteModal.classList.add('open');
    }
  }

  function closeQuickQuote() {
    if (quoteModal) quoteModal.classList.remove('open');
  }

  if (openQuoteBtn) openQuoteBtn.addEventListener('click', () => openQuickQuote());
  if (heroQuoteBtn) heroQuoteBtn.addEventListener('click', () => openQuickQuote());
  if (mobileQuoteTrigger) mobileQuoteTrigger.addEventListener('click', () => {
    closeMobileDrawer();
    openQuickQuote();
  });
  if (mapRouteBtn) mapRouteBtn.addEventListener('click', () => openQuickQuote('Global Route Feasibility Booking'));
  if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuickQuote);

  document.querySelectorAll('.trigger-product-quote').forEach(b => {
    b.addEventListener('click', () => {
      const pName = b.getAttribute('data-product-name');
      openQuickQuote(pName);
    });
  });

  document.querySelectorAll('.quick-inquire-btn').forEach(b => {
    b.addEventListener('click', () => {
      const sTitle = b.getAttribute('data-service-title');
      openQuickQuote(sTitle);
    });
  });

  document.querySelectorAll('.trigger-rfq-import').forEach(b => {
    b.addEventListener('click', () => openQuickQuote('Inbound Import Logistics & Customs'));
  });

  document.querySelectorAll('.trigger-rfq-export').forEach(b => {
    b.addEventListener('click', () => openQuickQuote('Export Sourcing & Ocean Freight'));
  });

  // 10. Container Load Calculator Logic
  const calcComm = document.getElementById('calc-commodity-select');
  const calcCont = document.getElementById('calc-container-select');
  const payloadVal = document.getElementById('calc-payload-val');
  const unitsVal = document.getElementById('calc-units-val');

  function updateCalculator() {
    if (!calcComm || !calcCont || !payloadVal || !unitsVal) return;
    const comm = calcComm.value;
    const cont = calcCont.value;

    if (cont === '20ft') {
      if (comm === 'rice') {
        payloadVal.textContent = '25.0 - 26.0 Metric Tons';
        unitsVal.textContent = '~1,000 Bags (25kg)';
      } else if (comm === 'spices') {
        payloadVal.textContent = '14.0 - 18.0 Metric Tons';
        unitsVal.textContent = 'Depending on bulk density (Tellicherry/Turmeric)';
      } else if (comm === 'pulses') {
        payloadVal.textContent = '24.0 - 25.0 Metric Tons';
        unitsVal.textContent = '~500 Bags (50kg PP Sacks)';
      } else if (comm === 'mangoes') {
        payloadVal.textContent = '12.0 - 14.0 Metric Tons';
        unitsVal.textContent = '~3,500 Export Boxes (3.5kg)';
      } else if (comm === 'cotton') {
        payloadVal.textContent = '14.0 - 15.0 Metric Tons';
        unitsVal.textContent = '~85 Compressed Bales';
      }
    } else if (cont === '40hc') {
      if (comm === 'rice') {
        payloadVal.textContent = '26.5 - 27.5 Metric Tons';
        unitsVal.textContent = '~1,080 Palletized Bags';
      } else if (comm === 'spices') {
        payloadVal.textContent = '24.0 - 26.0 Metric Tons';
        unitsVal.textContent = 'High-Cube max volume (76.4 CBM)';
      } else if (comm === 'pulses') {
        payloadVal.textContent = '26.0 - 27.0 Metric Tons';
        unitsVal.textContent = '~540 Bags (50kg)';
      } else if (comm === 'mangoes') {
        payloadVal.textContent = '19.0 - 20.0 Metric Tons';
        unitsVal.textContent = '~5,500 Boxes (Reefer recommended)';
      } else if (comm === 'cotton') {
        payloadVal.textContent = '26.0 - 27.0 Metric Tons';
        unitsVal.textContent = '~160 Compressed Bales';
      }
    } else if (cont === '40rf') {
      if (comm === 'mangoes') {
        payloadVal.textContent = '20.0 Metric Tons (Climate Controlled)';
        unitsVal.textContent = '5,500 - 6,000 Boxes (+8°C to +12°C)';
      } else if (comm === 'rice' || comm === 'pulses') {
        payloadVal.textContent = '24.0 - 25.0 Metric Tons';
        unitsVal.textContent = 'Moisture & climate controlled reefer';
      } else {
        payloadVal.textContent = '18.0 - 22.0 Metric Tons';
        unitsVal.textContent = 'Precision temperature -30°C to +30°C';
      }
    }
  }

  if (calcComm && calcCont) {
    calcComm.addEventListener('change', updateCalculator);
    calcCont.addEventListener('change', updateCalculator);
  }

  // 11. Interactive Global Map Tabs
  const routeTabs = document.querySelectorAll('.route-tab-card');
  routeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      routeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // 12. Form Submissions
  const quoteForm = document.getElementById('quote-request-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.reset();
      showToast('Thank you! Your quotation request has been submitted to Pankaj Overseas Trade Desk.');
    });
  }

  const modalForm = document.getElementById('modal-quote-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.reset();
      closeQuickQuote();
      showToast('Thank you! Your quotation request has been received.');
    });
  }

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
}

function openSpecModal(product) {
  const backdrop = document.getElementById('spec-modal-backdrop');
  const content = document.getElementById('spec-modal-content');
  if (!backdrop || !content) return;

  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
      <span class="section-tag gold">${product.categoryName}</span>
      <span style="font-family: var(--font-mono); font-size: 0.75rem; background: rgba(255, 255, 255, 0.1); padding: 0.25rem 0.6rem; border-radius: var(--radius-sm);">
        HS Code: ${product.hsCode}
      </span>
    </div>

    <h2 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
      ${product.name}
    </h2>
    <p style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6; margin-bottom: 1.5rem;">
      ${product.description}
    </p>

    <div style="background: rgba(17, 34, 64, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem;">
        Export Quality & Laboratory Specifications
      </h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; font-size: 0.8125rem;">
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">ORIGIN</span>
          <strong style="color: #FFFFFF;">${product.origin}</strong>
        </div>
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">EXPORT GRADE</span>
          <strong style="color: #FFFFFF;">${product.grade}</strong>
        </div>
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">MOISTURE THRESHOLD</span>
          <strong style="color: var(--accent-cyan);">${product.moisture}</strong>
        </div>
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">PURITY / SORTEX</span>
          <strong style="color: var(--accent-emerald);">${product.purity}</strong>
        </div>
      </div>
      <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <span style="color: #94A3B8; display: block; font-size: 0.7rem;">STANDARDIZED PACKAGING</span>
        <strong style="color: #FFFFFF; font-size: 0.8125rem;">${product.packaging}</strong>
      </div>
    </div>

    <div style="display: flex; gap: 1rem;">
      <button class="btn btn-primary" id="spec-quote-trigger" style="flex: 1;">
        <span>Request FCL / LCL Quote</span>
        <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
      </button>
    </div>
  `;

  createIcons({ icons });
  backdrop.classList.add('open');

  const closeBtn = document.getElementById('spec-modal-close');
  if (closeBtn) {
    closeBtn.onclick = () => backdrop.classList.remove('open');
  }

  const specQuoteBtn = document.getElementById('spec-quote-trigger');
  if (specQuoteBtn) {
    specQuoteBtn.onclick = () => {
      backdrop.classList.remove('open');
      const quoteModal = document.getElementById('quick-quote-modal');
      const commInput = document.getElementById('modal-input-commodity');
      if (commInput) commInput.value = product.name;
      if (quoteModal) quoteModal.classList.add('open');
    };
  }
}

function openServiceModal(service) {
  const backdrop = document.getElementById('spec-modal-backdrop');
  const content = document.getElementById('spec-modal-content');
  if (!backdrop || !content) return;

  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
      <span class="section-tag gold">${service.badge} LOGISTICS</span>
    </div>

    <h2 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
      ${service.title}
    </h2>
    <p style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6; margin-bottom: 1.5rem;">
      ${service.description}
    </p>

    <div style="background: rgba(17, 34, 64, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem;">
        Service Capabilities & SLA
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem;">
        ${service.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; color: #E2E8F0;">
            <i data-lucide="check" style="width: 16px; height: 16px; color: var(--accent-gold); flex-shrink: 0; margin-top: 0.15rem;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <button class="btn btn-primary" id="service-quote-trigger" style="width: 100%;">
      <span>Book Space or Get Tariff</span>
      <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
    </button>
  `;

  createIcons({ icons });
  backdrop.classList.add('open');

  const closeBtn = document.getElementById('spec-modal-close');
  if (closeBtn) {
    closeBtn.onclick = () => backdrop.classList.remove('open');
  }

  const serviceQuoteBtn = document.getElementById('service-quote-trigger');
  if (serviceQuoteBtn) {
    serviceQuoteBtn.onclick = () => {
      backdrop.classList.remove('open');
      const quoteModal = document.getElementById('quick-quote-modal');
      const commInput = document.getElementById('modal-input-commodity');
      if (commInput) commInput.value = service.title;
      if (quoteModal) quoteModal.classList.add('open');
    };
  }
}

function openModeModal(mode) {
  const backdrop = document.getElementById('spec-modal-backdrop');
  const content = document.getElementById('spec-modal-content');
  if (!backdrop || !content) return;

  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
      <span class="section-tag gold">TRANSPORTATION MODE</span>
      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan);">Transit: ${mode.transit}</span>
    </div>

    <h2 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
      ${mode.title} (${mode.name})
    </h2>
    <p style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6; margin-bottom: 1.5rem;">
      ${mode.tagline}. High-reliability capacity connecting Indian production centers to global terminals.
    </p>

    <div style="background: rgba(17, 34, 64, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.8125rem;">
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">AVERAGE TRANSIT TIME</span>
          <strong style="color: var(--accent-gold);">${mode.transit}</strong>
        </div>
        <div>
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">CAPACITY BENCHMARK</span>
          <strong style="color: #FFFFFF;">${mode.capacity}</strong>
        </div>
        <div style="grid-column: span 2;">
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">GATEWAY PORTS / HUBS</span>
          <strong style="color: #FFFFFF;">${mode.ports}</strong>
        </div>
        <div style="grid-column: span 2;">
          <span style="color: #94A3B8; display: block; font-size: 0.7rem;">RECOMMENDED COMMODITIES</span>
          <strong style="color: var(--accent-emerald);">${mode.bestFor}</strong>
        </div>
      </div>
    </div>

    <button class="btn btn-primary" id="mode-quote-trigger" style="width: 100%;">
      <span>Inquire ${mode.name} Freight Feasibility</span>
      <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
    </button>
  `;

  createIcons({ icons });
  backdrop.classList.add('open');

  const closeBtn = document.getElementById('spec-modal-close');
  if (closeBtn) {
    closeBtn.onclick = () => backdrop.classList.remove('open');
  }

  const modeQuoteBtn = document.getElementById('mode-quote-trigger');
  if (modeQuoteBtn) {
    modeQuoteBtn.onclick = () => {
      backdrop.classList.remove('open');
      const quoteModal = document.getElementById('quick-quote-modal');
      const commInput = document.getElementById('modal-input-commodity');
      if (commInput) commInput.value = `${mode.name} Freight Transportation`;
      if (quoteModal) quoteModal.classList.add('open');
    };
  }
}

// Listen to hash changes for page routing
window.addEventListener('hashchange', renderApp);

// Initialize on load
renderApp();
