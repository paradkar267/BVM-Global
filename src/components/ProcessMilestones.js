import { processMilestones } from '../data/services.js';

export function renderProcessMilestones() {
  const nodesHtml = processMilestones.map(m => `
    <div class="milestone-node">
      <div class="node-circle">${m.num}</div>
      <h4 class="node-title">${m.title}</h4>
      <p class="node-desc">${m.desc}</p>
    </div>
  `).join('');

  return `
    <section class="milestones-section">
      <div class="container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto;">
          <div class="section-tag gold">
            <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i>
            <span>HOW IT WORKS</span>
          </div>
          <h2 class="section-heading light">
            From Order to Destination
          </h2>
          <p class="section-subtitle light" style="margin-left: auto; margin-right: auto;">
            Our transparent 6-stage logistics framework provides complete oversight from initial specification to port arrival and customs handover.
          </p>
        </div>

        <div class="milestones-grid">
          ${nodesHtml}
        </div>
      </div>
    </section>
  `;
}
