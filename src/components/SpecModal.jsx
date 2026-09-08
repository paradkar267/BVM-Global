import React from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SpecModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-window custom-modal-redesign">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X style={{ width: 18, height: 18 }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <div className="modal-eyebrow-tag">
            <ShieldCheck style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />
            <span>{product.categoryName || 'EXPORT PRODUCT'}</span>
          </div>
          <span className="hs-code-pill">
            HS CODE: {product.hsCode}
          </span>
        </div>

        <h2 className="modal-title-heading">
          {product.name}
        </h2>
        <p className="modal-description-text">
          {product.description}
        </p>

        <div className="modal-capabilities-box">
          <h4 className="modal-box-header">
            EXPORT QUALITY & LABORATORY SPECIFICATIONS
          </h4>
          
          <div className="spec-grid-2x2">
            <div className="spec-item">
              <span className="spec-label">ORIGIN</span>
              <strong className="spec-val-white">{product.origin}</strong>
            </div>
            <div className="spec-item">
              <span className="spec-label">EXPORT GRADE</span>
              <strong className="spec-val-white">{product.grade}</strong>
            </div>
            <div className="spec-item">
              <span className="spec-label">MOISTURE THRESHOLD</span>
              <strong className="spec-val-cyan">{product.moisture}</strong>
            </div>
            <div className="spec-item">
              <span className="spec-label">PURITY / SORTEX</span>
              <strong className="spec-val-emerald">{product.purity}</strong>
            </div>
          </div>

          <div className="spec-packaging-row">
            <span className="spec-label">STANDARDIZED PACKAGING</span>
            <strong className="spec-val-white">{product.packaging}</strong>
          </div>
        </div>

        <button 
          className="btn btn-primary btn-pill-gold btn-lg modal-action-btn" 
          onClick={() => {
            onClose();
            onOpenQuote(product.name);
          }}
        >
          <span>Request FCL / LCL Quote for {product.name}</span>
          <ArrowRight style={{ width: 16, height: 16 }} />
        </button>
      </div>
    </div>
  );
}
