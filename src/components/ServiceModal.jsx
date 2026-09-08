import React from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenQuote, onBookService }) {
  if (!service) return null;
  const handleAction = onOpenQuote || onBookService;

  return (
    <div className="modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-window custom-modal-redesign">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X style={{ width: 18, height: 18 }} />
        </button>

        {/* Eyebrow Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <div className="modal-eyebrow-tag">
            <ShieldCheck style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />
            <span>{service.badge} LOGISTICS</span>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="modal-title-heading">
          {service.title}
        </h2>
        <p className="modal-description-text">
          {service.description}
        </p>

        {/* Capabilities & SLA Box */}
        <div className="modal-capabilities-box">
          <h4 className="modal-box-header">
            SERVICE CAPABILITIES & SLA
          </h4>
          <ul className="modal-features-list">
            {service.features.map((f, i) => (
              <li key={i} className="modal-feature-item">
                <span className="check-gold-icon">
                  <Check style={{ width: 15, height: 15 }} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary Action Button */}
        <button 
          className="btn btn-primary btn-pill-gold btn-lg modal-action-btn" 
          onClick={() => {
            onClose();
            if (handleAction) handleAction(service.title);
          }}
        >
          <span>Book Space or Get Tariff for {service.title}</span>
          <ArrowRight style={{ width: 16, height: 16 }} />
        </button>
      </div>
    </div>
  );
}
