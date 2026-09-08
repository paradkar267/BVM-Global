export function renderSpecModal() {
  return `
    <div class="modal-backdrop" id="spec-modal-backdrop">
      <div class="modal-window" id="spec-modal-window">
        <button class="modal-close-btn" id="spec-modal-close">
          <i data-lucide="x" style="width: 20px; height: 20px;"></i>
        </button>
        <div id="spec-modal-content">
          <!-- Dynamic Content Populated via JavaScript -->
        </div>
      </div>
    </div>
  `;
}
