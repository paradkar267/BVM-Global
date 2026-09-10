import React, { useState, useEffect } from 'react';
import { X, Send, ArrowRight } from 'lucide-react';

export default function QuickQuoteModal({ isOpen, initialCommodity, prefillProduct, onClose, onSuccess, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: '',
    destination: '',
    message: ''
  });

  const commodityPrefill = prefillProduct || initialCommodity || '';

  useEffect(() => {
    if (commodityPrefill) {
      setFormData(prev => ({ ...prev, commodity: commodityPrefill }));
    }
  }, [commodityPrefill]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format structured WhatsApp trade inquiry message
    const whatsappNumber = '919518946362';
    const messageText = `*NEW TRADE INQUIRY | PANKAJ OVERSEAS EXPORTS*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
🏢 *Company:* ${formData.company}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🌾 *Commodity / Service:* ${formData.commodity || 'General Agro Commodity / Freight'}
⚓ *Destination Port:* ${formData.destination}
📦 *Message / Volume:* ${formData.message || 'N/A'}
━━━━━━━━━━━━━━━━━━━━
_Sent via Pankaj Overseas Exports Online RFQ Desk_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    const msg = `Quotation request generated! Redirecting to WhatsApp Trade Desk...`;
    if (onShowToast) onShowToast(msg);
    if (onSuccess) onSuccess(msg);
    onClose();
  };

  return (
    <div className="modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-window custom-modal-redesign">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X style={{ width: 18, height: 18 }} />
        </button>

        <div style={{ marginBottom: '1.25rem' }}>
          <div className="modal-eyebrow-tag" style={{ marginBottom: '0.5rem' }}>
            <Send style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />
            <span>EXPRESS TRADE INQUIRY</span>
          </div>
          <h3 className="modal-title-heading">
            Request Instant Quote
          </h3>
          <p className="modal-description-text" style={{ marginBottom: 0 }}>
            Get competitive freight tariffs, FOB/CIF commodity quotes, and container allocation timelines.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="form-row-grid">
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Company Name" 
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required 
              />
            </div>
          </div>

          <div className="form-row-grid">
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="name@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / WhatsApp *</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+91 / +971..." 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
              />
            </div>
          </div>

          <div className="form-row-grid">
            <div className="form-group">
              <label className="form-label">Commodity / Service</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Basmati Rice 1121 / Sea Freight" 
                value={formData.commodity}
                onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Destination Port *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Jebel Ali, Dubai" 
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Message / Volume Details</label>
            <textarea 
              className="form-textarea" 
              placeholder="Provide quantity (e.g. 50 MT), preferred packaging, target timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-pill-gold btn-lg modal-action-btn" style={{ marginTop: '0.5rem' }}>
            <span>Submit RFQ to Trade Desk</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </form>
      </div>
    </div>
  );
}
