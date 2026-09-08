import { worldClocks } from '../data/routes.js';

export function renderHeader(currentRoute = 'home') {
  return `
    <header class="site-header" id="main-header">
      <div class="container-wide header-container">
        <!-- Brand Logo -->
        <a href="#home" class="header-brand" data-nav="home">
          <div class="brand-icon-wrapper">
            <i data-lucide="globe" style="width: 22px; height: 22px;"></i>
          </div>
          <div class="brand-text">
            <span class="brand-title">PANKAJ <span>OVERSEAS</span></span>
            <span class="brand-tagline">Global Import & Export Solutions</span>
          </div>
        </a>

        <!-- Navigation Links -->
        <nav class="nav-links-desktop">
          <a href="#home" class="nav-link ${currentRoute === 'home' ? 'active' : ''}" data-nav="home">Home</a>
          <a href="#about" class="nav-link ${currentRoute === 'about' ? 'active' : ''}" data-nav="about">About Us</a>
          <a href="#services" class="nav-link ${currentRoute === 'services' ? 'active' : ''}" data-nav="services">Services</a>
          <a href="#transport" class="nav-link ${currentRoute === 'transport' ? 'active' : ''}" data-nav="transport">Logistics</a>
          <a href="#products" class="nav-link ${currentRoute === 'products' ? 'active' : ''}" data-nav="products">Products & Agro</a>
          <a href="#network" class="nav-link ${currentRoute === 'network' ? 'active' : ''}" data-nav="network">Global Network</a>
          <a href="#contact" class="nav-link ${currentRoute === 'contact' ? 'active' : ''}" data-nav="contact">Contact Us</a>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <button class="btn btn-primary btn-sm header-cta-desktop" id="open-quote-modal-btn">
            <span>Get a Quote</span>
            <i data-lucide="arrow-right" style="width: 15px; height: 15px;"></i>
          </button>
          
          <button class="mobile-menu-btn" id="mobile-drawer-toggle" aria-label="Toggle navigation menu">
            <i data-lucide="menu" style="width: 22px; height: 22px;"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="brand-text">
          <span class="brand-title">PANKAJ <span>OVERSEAS</span></span>
          <span class="brand-tagline">21.1458° N / 79.0882° E</span>
        </div>
        <button id="mobile-drawer-close" style="background: none; border: none; color: #FFFFFF; cursor: pointer; padding: 0.5rem;">
          <i data-lucide="x" style="width: 28px; height: 28px;"></i>
        </button>
      </div>

      <div class="mobile-nav-list">
        <a href="#home" class="mobile-nav-link" data-nav="home"><span>Home</span> <i data-lucide="chevron-right"></i></a>
        <a href="#about" class="mobile-nav-link" data-nav="about"><span>About Us</span> <i data-lucide="chevron-right"></i></a>
        <a href="#services" class="mobile-nav-link" data-nav="services"><span>Services</span> <i data-lucide="chevron-right"></i></a>
        <a href="#transport" class="mobile-nav-link" data-nav="transport"><span>Logistics & Transport</span> <i data-lucide="chevron-right"></i></a>
        <a href="#products" class="mobile-nav-link" data-nav="products"><span>Products & Agro</span> <i data-lucide="chevron-right"></i></a>
        <a href="#network" class="mobile-nav-link" data-nav="network"><span>Global Network</span> <i data-lucide="chevron-right"></i></a>
        <a href="#contact" class="mobile-nav-link" data-nav="contact"><span>Contact Us</span> <i data-lucide="chevron-right"></i></a>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <button class="btn btn-primary" id="mobile-quote-trigger" style="width: 100%;">
          <span>Request a Quote</span>
          <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
        </button>
        <div style="font-size: 0.75rem; color: #94A3B8; text-align: center;">
          HQ: Nagpur, Maharashtra, India | +91 98765 43210
        </div>
      </div>
    </div>
  `;
}
