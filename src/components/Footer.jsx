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
            © {new Date().getFullYear()} <strong>Pankaj Overseas</strong>. All rights reserved.
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

