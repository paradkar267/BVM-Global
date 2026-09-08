export function renderStatsBar() {
  return `
    <section class="stats-bar-section">
      <div class="container">
        <div class="stats-grid">
          <!-- Stat 1 -->
          <div class="stat-item">
            <div class="stat-icon-wrapper">
              <i data-lucide="globe-2" style="width: 26px; height: 26px;"></i>
            </div>
            <div>
              <div class="stat-number">25+</div>
              <div class="stat-label">Countries Served</div>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="stat-item">
            <div class="stat-icon-wrapper">
              <i data-lucide="git-branch" style="width: 26px; height: 26px;"></i>
            </div>
            <div>
              <div class="stat-number">50+</div>
              <div class="stat-label">Trade Routes Connected</div>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="stat-item">
            <div class="stat-icon-wrapper">
              <i data-lucide="users-2" style="width: 26px; height: 26px;"></i>
            </div>
            <div>
              <div class="stat-number">100+</div>
              <div class="stat-label">Clients Served</div>
            </div>
          </div>

          <!-- Stat 4 -->
          <div class="stat-item">
            <div class="stat-icon-wrapper">
              <i data-lucide="calendar" style="width: 26px; height: 26px;"></i>
            </div>
            <div>
              <div class="stat-number">20+</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
