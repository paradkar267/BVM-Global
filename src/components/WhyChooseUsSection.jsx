import React from 'react';

export default function WhyChooseUsSection() {
  const advantageItems = [
    {
      id: 'quality',
      iconEmoji: '🌾',
      title: 'Premium Quality',
      description: 'Handpicked produce meeting the highest export standards.'
    },
    {
      id: 'farmer',
      iconEmoji: '🤝',
      title: 'Farmer Direct',
      description: 'Sourced directly from local farming communities across India.'
    },
    {
      id: 'fresh',
      iconEmoji: '🍃',
      title: 'Fresh & Natural',
      description: 'No additives, no compromise — pure farm-to-port produce.'
    },
    {
      id: 'delivery',
      iconEmoji: '🚢',
      title: 'Global Delivery',
      description: 'Reliable logistics to 30+ countries worldwide.'
    },
    {
      id: 'standards',
      iconEmoji: '📋',
      title: 'Trusted Standards',
      description: 'Full compliance with FSSAI, APEDA, and international norms.'
    }
  ];

  return (
    <section className="bvm-advantage-section" id="why-us">
      <div className="container-wide bvm-advantage-container">
        {/* Section Header */}
        <div className="bvm-advantage-header">
          <div className="bvm-advantage-eyebrow">
            <span>OUR ADVANTAGE</span>
          </div>

          <h2 className="bvm-advantage-title">
            Why Choose BVM Global
          </h2>

          <div className="bvm-advantage-accent-bar"></div>
        </div>

        {/* Advantage Cards Grid (2-column on mobile as per reference) */}
        <div className="bvm-advantage-grid">
          {advantageItems.map((item) => (
            <div key={item.id} className="bvm-advantage-card">
              {/* Soft Light Green Squircle Icon Box */}
              <div className="bvm-card-icon-squircle" aria-hidden="true">
                <span className="bvm-card-emoji">{item.iconEmoji}</span>
              </div>

              {/* Card Title */}
              <h3 className="bvm-card-title">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="bvm-card-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
