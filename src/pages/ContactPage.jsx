import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  HelpCircle, MessageSquare, Globe, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, FileCheck, Ship
} from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'Global Product Sourcing',
    origin: 'Nagpur / JNPT Port, India',
    destination: '',
    commodity: 'Basmati Rice / Spices',
    incoterm: 'CIF - Cost, Insurance & Freight',
    volume: '',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Format structured WhatsApp trade inquiry message
    const whatsappNumber = '919876543210';
    const messageText = `*NEW CONTACT / RFQ INQUIRY | PANKAJ OVERSEAS*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
🏢 *Company:* ${formData.company}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🚢 *Service:* ${formData.serviceType}
🌾 *Commodity:* ${formData.commodity}
⚓ *Incoterm:* ${formData.incoterm}
📍 *Origin:* ${formData.origin}
🎯 *Destination:* ${formData.destination || 'To be discussed'}
📦 *Volume:* ${formData.volume || 'Standard Consignment'}
📝 *Notes:* ${formData.notes || 'N/A'}
━━━━━━━━━━━━━━━━━━━━
_Sent via Pankaj Overseas Contact Portal_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    if (onShowToast) {
      onShowToast(`RFQ inquiry submitted! Opening WhatsApp Trade Desk for ${formData.commodity || 'your cargo'}...`);
    }
  };

  const faqs = [
    {
      q: 'What is the typical Minimum Order Quantity (MOQ) for export shipments?',
      a: 'For agricultural commodities and spices, our standard MOQ is one 20ft Full Container Load (FCL), which typically holds 18 to 26 Metric Tons depending on product density. For premium spices like Green Cardamom or Saffron, or for air freight consignments, smaller LCL orders starting from 500kg are accommodated.'
    },
    {
      q: 'Which international payment terms do you accept?',
      a: 'We work with standard global trade banking instruments: 100% Irrevocable Confirmed Letter of Credit (LC at sight) through top-tier international banks, or Telegraphic Transfer (TT: 30% advance deposit with 70% balance against scanned copy of original Bill of Lading).'
    },
    {
      q: 'Can you dispatch pre-shipment commercial samples with lab test reports?',
      a: 'Yes, we regularly dispatch 200g - 500g authenticated representative samples via DHL/FedEx courier accompanied by in-house and NABL accredited third-party lab analysis reports (moisture, purity, essential oil content, pesticide residue).'
    },
    {
      q: 'How does your Nagpur Zero-Mile location benefit international buyers?',
      a: 'Nagpur is the exact geographical epicenter of India, allowing us equal and rapid inland transit to all agrarian sourcing belts (Kerala, Gujarat, Maharashtra, Punjab). Our direct rail siding at Nagpur ICD allows sealed container rail rakes directly to JNPT and Mundra ports with zero highway transit delays.'
    },
    {
      q: 'Do you provide private-label retail packaging for supermarket chains?',
      a: 'Yes, we provide full private labeling services including multi-color printed BOPP bags, vacuum nitrogen pouches, zipper pouches, and customized export cartons with multilingual barcode and nutritional formatting compliant with destination country laws.'
    }
  ];

  return (
    <main className="page-contact">
      {/* 1. PAGE HERO MATCHING SERVICES TEMPLATE */}
      <section className="services-hero-exact">
        <div className="hero-bg-container">
          <img 
            src="/assets/banner.png" 
            alt="Pankaj Overseas International Trade Desk" 
            className="services-hero-bg"
          />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="container-wide services-hero-content">
          <div className="services-hero-left">
            <div className="services-hero-eyebrow">
              <span className="line">—</span>
              <span>INTERNATIONAL TRADE DESK</span>
            </div>
            
            <h1 className="services-hero-title">
              Direct trade desk.<br />
              <span className="gold-text">Initiate your next consignment.</span>
            </h1>

            <p className="services-hero-sub">
              Connect with our Nagpur headquarters and export logistics desk for competitive freight tariffs, certified product sourcing, and rapid customs clearance.
            </p>

            <div className="services-hero-pills">
              <div className="hero-pill-item">
                <Phone size={14} />
                <span>Instant export quotation</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <MapPin size={14} />
                <span>Nagpur corporate HQ</span>
              </div>
              <div className="pill-divider">|</div>
              <div className="hero-pill-item">
                <FileCheck size={14} />
                <span>Zero-delay customs desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & OFFICE DESKS */}
      <section className="section-padding bg-slate">
        <div className="container-wide">
          <div className="contact-grid">
            {/* Left: Interactive RFQ Form */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-2xl)', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 style={{ width: 36, height: 36 }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                    Quotation Request Received!
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: 450, margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Reference ticket <strong>#PK-{Math.floor(10000 + Math.random() * 90000)}</strong> has been assigned. Our international trade team will review your specifications and reply within 4 hours.
                  </p>
                  <button className="btn btn-secondary-dark" onClick={() => setFormSubmitted(false)} style={{ color: '#0F172A', borderColor: '#CBD5E1' }}>
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
                      Request a Formal Trade Quotation
                    </h3>
                    <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                      Fill out the parameters below and our trade desk will generate a customized CIF/FOB freight proposal.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Rajesh Sharma"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Company / Enterprise *
                      </label>
                      <input 
                        type="text" 
                        required 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange}
                        placeholder="e.g. Global Foods Trading LLC"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Corporate Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="procurement@yourcompany.com"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834 / +971..."
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Logistics / Trade Service
                      </label>
                      <select 
                        name="serviceType" 
                        value={formData.serviceType} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem', background: '#FFFFFF' }}
                      >
                        <option>Global Product Sourcing</option>
                        <option>Fresh Produce Export</option>
                        <option>Agricultural Commodity Trading & Export</option>
                        <option>International Buying & Sourcing</option>
                        <option>Customized Packaging & Pricing</option>
                        <option>Export Documentation & Compliance</option>
                        <option>Quality Inspection & Product Selection</option>
                        <option>Logistics & Freight Coordination</option>
                        <option>Import & Trade Solutions</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Destination Country / Port *
                      </label>
                      <input 
                        type="text" 
                        required 
                        name="destination" 
                        value={formData.destination} 
                        onChange={handleChange}
                        placeholder="e.g. Jebel Ali, Rotterdam, Newark, Singapore..."
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Preferred Incoterm
                      </label>
                      <select 
                        name="incoterm" 
                        value={formData.incoterm} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem', background: '#FFFFFF' }}
                      >
                        <option>CIF - Cost, Insurance & Freight</option>
                        <option>FOB - Free On Board (Indian Port)</option>
                        <option>CFR - Cost & Freight</option>
                        <option>DDP - Delivered Duty Paid</option>
                        <option>EXW - Ex Works (Nagpur Packhouse)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Estimated Volume / Payload
                      </label>
                      <input 
                        type="text" 
                        name="volume" 
                        value={formData.volume} 
                        onChange={handleChange}
                        placeholder="e.g. 1 x 20ft FCL (25 MT) or 5 MT"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                      Cargo Notes, Specifications or Packaging Details
                    </label>
                    <textarea 
                      rows={3}
                      name="notes" 
                      value={formData.notes} 
                      onChange={handleChange}
                      placeholder="Specify required moisture levels, grain length, Sortex cleaning, private labeling preferences, or target delivery date..."
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #CBD5E1', fontSize: '0.875rem', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send style={{ width: 18, height: 18 }} />
                    <span>Submit Request for Quotation (RFQ)</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Desks & Office Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Central HQ Card */}
              <div style={{ background: 'linear-gradient(135deg, #081C15 0%, #0D281E 100%)', color: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid rgba(34,197,94,0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ADE80', fontSize: '0.8rem', fontWeight: 700 }}>
                    <MapPin style={{ width: 16, height: 16 }} />
                    <span>CENTRAL HEADQUARTERS</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#86EFAC' }}>
                    21.1458° N, 79.0882° E
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Nagpur Commercial Hub
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  123, Business Park, Central Avenue, Nagpur, Maharashtra, 440001, India
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone style={{ width: 16, height: 16, color: '#4ADE80' }} />
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 98765 43210</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail style={{ width: 16, height: 16, color: '#4ADE80' }} />
                    <span style={{ color: '#FFFFFF' }}>info@pankajoverseas.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock style={{ width: 16, height: 16, color: '#4ADE80' }} />
                    <span style={{ color: '#94A3B8' }}>Monday - Saturday: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary-dark btn-sm"
                    style={{ width: '100%', justifyContent: 'center', color: '#4ADE80', borderColor: 'rgba(74, 222, 128, 0.4)', background: 'rgba(34, 197, 94, 0.12)' }}
                  >
                    <MessageSquare style={{ width: 16, height: 16 }} />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Port Desks Card */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                  Port Operations & Liaison Desks
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block' }}>JNPT (Nhava Sheva) Desk:</strong>
                    <span style={{ color: '#64748B' }}>Customs Clearance & Container Terminal Gate-In Liaison, Navi Mumbai</span>
                  </div>

                  <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block' }}>Mundra Port Operations Desk:</strong>
                    <span style={{ color: '#64748B' }}>Bulk Agricultural Vessel Berth Coordination & Marine Surveyor Desk, Gujarat</span>
                  </div>

                  <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                    <strong style={{ color: '#0F172A', display: 'block' }}>MIHAN Air Cargo Desk:</strong>
                    <span style={{ color: '#64748B' }}>Perishable Air Freight & Phytosanitary Inspection Station, Nagpur Airport</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-wide" style={{ maxWidth: 850 }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 3.5rem auto' }}>
            <div className="section-eyebrow">
              <HelpCircle style={{ width: 15, height: 15 }} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-heading">
              International Trade & <span className="highlight-gold">Export FAQs</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
              Answers to common queries regarding ordering procedures, MOQs, quality inspections, and shipping timelines.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    background: isOpen ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#0F172A', paddingRight: '1rem' }}>
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp style={{ width: 20, height: 20, color: 'var(--accent-gold)', flexShrink: 0 }} />
                    ) : (
                      <ChevronDown style={{ width: 20, height: 20, color: '#64748B', flexShrink: 0 }} />
                    )}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.875rem', lineHeight: 1.65, borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
