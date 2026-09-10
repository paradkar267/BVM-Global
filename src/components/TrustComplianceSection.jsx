import React from 'react';

export default function TrustComplianceSection() {
  const complianceData = [
    {
      id: 'dgft',
      iconEmoji: '🏛️',
      badge: 'CERTIFIED',
      title: 'DGFT Registered',
      description: 'Directorate General of Foreign Trade authorized exporter'
    },
    {
      id: 'msme',
      iconEmoji: '🏅',
      badge: 'CERTIFIED',
      title: 'MSME Certified',
      description: 'Ministry of MSME recognized enterprise'
    },
    {
      id: 'apeda',
      iconEmoji: '✈️',
      badge: 'CERTIFIED',
      title: 'APEDA Approved',
      description: 'Agricultural & Processed Food Products Export authority'
    },
    {
      id: 'global',
      iconEmoji: '🌍',
      badge: 'CERTIFIED',
      title: 'Global Standards',
      description: 'Compliant with international food safety regulations'
    }
  ];

  return (
    <section className="trust-compliance-section" id="certifications">
      {/* Background ambient lighting effects */}
      <div className="trust-compliance-ambient"></div>

      <div className="container-wide trust-compliance-container">
        {/* Section Header */}
        <div className="trust-compliance-header">
          <div className="trust-eyebrow">
            <span>TRUST & COMPLIANCE</span>
          </div>

          <h2 className="trust-title">
            Certifications & Compliance
          </h2>

          <div className="trust-title-underline"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="trust-compliance-grid">
          {complianceData.map((item) => (
            <div key={item.id} className="trust-compliance-card">
              {/* 3D Visual Icon */}
              <div className="trust-card-icon" aria-hidden="true">
                <span>{item.iconEmoji}</span>
              </div>

              {/* Certified Pill Badge */}
              <div className="trust-card-badge">
                <span>{item.badge}</span>
              </div>

              {/* Card Title */}
              <h3 className="trust-card-title">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="trust-card-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
