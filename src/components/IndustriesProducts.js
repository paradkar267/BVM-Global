import { productCategories } from '../data/products.js';

export function renderIndustriesProducts(selectedCategory = 'all') {
  const allItems = [];
  productCategories.forEach(cat => {
    cat.items.forEach(item => {
      allItems.push({ ...item, categoryId: cat.id, categoryName: cat.name });
    });
  });

  const filteredItems = selectedCategory === 'all' 
    ? allItems 
    : allItems.filter(i => i.categoryId === selectedCategory);

  const productCardsHtml = filteredItems.map(item => `
    <div class="product-item-card" data-product-id="${item.id}">
      <div class="product-header-banner">
        <span class="product-origin-tag">
          <i data-lucide="map-pin" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i>
          ${item.origin}
        </span>
        <span class="product-hs-code">HS: ${item.hsCode}</span>
      </div>

      <div class="product-body-content">
        <h3 class="product-name-title">${item.name}</h3>
        <p style="font-size: 0.8125rem; color: var(--text-dark-muted); line-height: 1.5; margin-bottom: 0.75rem;">
          ${item.description}
        </p>

        <div class="product-specs-table">
          <div>
            <span class="spec-cell-label">Grade / Purity</span>
            <div class="spec-cell-value">${item.grade}</div>
          </div>
          <div>
            <span class="spec-cell-label">Moisture Level</span>
            <div class="spec-cell-value">${item.moisture}</div>
          </div>
          <div style="grid-column: span 2;">
            <span class="spec-cell-label">Export Packaging</span>
            <div class="spec-cell-value" style="font-size: 0.75rem;">${item.packaging}</div>
          </div>
        </div>

        <div class="product-card-actions">
          <button class="btn btn-secondary-light btn-sm open-product-spec-modal" data-product-id="${item.id}" style="flex: 1;">
            <span>Specs & Lab Data</span>
            <i data-lucide="file-text" style="width: 13px; height: 13px;"></i>
          </button>
          <button class="btn btn-primary btn-sm trigger-product-quote" data-product-name="${item.name}">
            <span>Quote</span>
            <i data-lucide="arrow-right" style="width: 13px; height: 13px;"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="products-section" id="products">
      <div class="container">
        <!-- Section Header -->
        <div style="text-align: center; max-width: 760px; margin: 0 auto 2.5rem auto;">
          <div class="section-tag">
            <i data-lucide="package" style="width: 14px; height: 14px;"></i>
            <span>INDUSTRIES & COMMODITIES</span>
          </div>
          <h2 class="section-heading">
            Powering Diverse Industries
          </h2>
          <p class="section-subtitle" style="margin-left: auto; margin-right: auto;">
            Direct sourcing of export-grade Indian spices, premium Basmati grains, climate-controlled fresh produce, and agricultural commodities.
          </p>
        </div>

        <!-- Industry Horizontal Pills Banner (From reference image) -->
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-xl); padding: 1.25rem; margin-bottom: 3rem; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; text-align: center;">
            CORE EXPORT VERTICALS
          </div>
          <div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 1rem; text-align: center;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text-dark-heading);">
              <i data-lucide="flame" style="color: var(--accent-gold); width: 18px; height: 18px;"></i>
              <span>Spices & Seasonings</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text-dark-heading);">
              <i data-lucide="wheat" style="color: var(--accent-gold); width: 18px; height: 18px;"></i>
              <span>Basmati Rice & Pulses</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text-dark-heading);">
              <i data-lucide="apple" style="color: var(--accent-emerald); width: 18px; height: 18px;"></i>
              <span>Fresh Fruits & Vegetables</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text-dark-heading);">
              <i data-lucide="box" style="color: var(--accent-cyan); width: 18px; height: 18px;"></i>
              <span>Oilseeds & Fibers</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--text-dark-heading);">
              <i data-lucide="factory" style="color: #6366F1; width: 18px; height: 18px;"></i>
              <span>Industrial Agro Raw Materials</span>
            </div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="category-filter-bar">
          <button class="filter-btn ${selectedCategory === 'all' ? 'active' : ''}" data-category="all">
            All Products (${allItems.length})
          </button>
          <button class="filter-btn ${selectedCategory === 'spices' ? 'active' : ''}" data-category="spices">
            Spices & Herbs
          </button>
          <button class="filter-btn ${selectedCategory === 'cereals' ? 'active' : ''}" data-category="cereals">
            Cereals & Pulses
          </button>
          <button class="filter-btn ${selectedCategory === 'fruits-veg' ? 'active' : ''}" data-category="fruits-veg">
            Fresh Produce
          </button>
          <button class="filter-btn ${selectedCategory === 'commodities' ? 'active' : ''}" data-category="commodities">
            Agro-Commodities
          </button>
        </div>

        <!-- Products Grid -->
        <div class="products-items-grid">
          ${productCardsHtml}
        </div>
      </div>
    </section>
  `;
}
