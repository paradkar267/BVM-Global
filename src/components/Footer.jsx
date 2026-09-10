import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ArrowUp, ShieldCheck, Award
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container-wide footer-main-body">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info & Certifications */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <img 
                src="/assets/pankaj_logo_white.png" 
                alt="Pankaj Overseas Exports" 
                className="footer-logo-img"
              />
            </div>

            <p className="footer-brand-desc">
              Premier international trade & multimodal logistics enterprise based in Nagpur, India. APEDA & Spices Board certified agro-produce and global freight solutions.
            </p>

            <div className="footer-certifications-wrap">
              <div className="cert-badge-item">
                <ShieldCheck style={{ width: 13, height: 13, color: '#4ADE80' }} />
                <span>APEDA CERTIFIED</span>
              </div>
              <div className="cert-badge-item">
                <Award style={{ width: 13, height: 13, color: '#4ADE80' }} />
                <span>SPICES BOARD INDIA</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="footer-social-links" aria-label="Social Media Links">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 0 0-1.63 1.62c0 .89.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.89-.74-1.62-1.63-1.62Z"/>
                </svg>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Facebook"
                title="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn footer-social-wa" 
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.23-.17-.48-.29"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <span>Quick Links</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact & Inquiry</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Trade Desks */}
          <div className="footer-services-col">
            <h4 className="footer-col-title">
              <span>Trade & Freight</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services">Basmati & Spices Export</Link>
              </li>
              <li>
                <Link to="/services">Fresh Produce & Cold Chain</Link>
              </li>
              <li>
                <Link to="/services">Multimodal Freight Corridors</Link>
              </li>
              <li>
                <Link to="/services">Customs & Export Clearance</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">
              <span>Nagpur HQ & Desk</span>
            </h4>

            <div className="footer-contact-list">
              <div className="footer-contact-line">
                <Phone style={{ width: 14, height: 14, color: '#4ADE80', flexShrink: 0 }} />
                <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
              </div>

              <div className="footer-contact-line">
                <Mail style={{ width: 14, height: 14, color: '#34D399', flexShrink: 0 }} />
                <a href="mailto:info@pankajoverseas.com" className="contact-link">info@pankajoverseas.com</a>
              </div>

              <div className="footer-contact-line">
                <MapPin style={{ width: 14, height: 14, color: '#22C55E', flexShrink: 0 }} />
                <span>123, Business Park, Nagpur, MS 440001, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} <strong>Pankaj Overseas Exports</strong>. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link to="/about">Company Profile</Link>
            <span className="legal-dot">•</span>
            <Link to="/services">Export Offerings</Link>
            <span className="legal-dot">•</span>
            <Link to="/contact">RFQ Desk</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="footer-back-to-top-btn" 
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp style={{ width: 13, height: 13 }} />
          </button>
        </div>
      </div>
    </footer>
  );
}

