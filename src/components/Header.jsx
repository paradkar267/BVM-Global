import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronRight, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  // Dark hero background exists on all pages when at the top
  const isDarkHero = !scrolled;

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="container-wide header-container">
          {/* Brand Logo Only (No text) */}
          <Link 
            to="/" 
            className="header-brand" 
            aria-label="Pankaj Overseas Home" 
            style={{ 
              position: 'relative', 
              overflow: 'visible', 
              zIndex: 20, 
              display: 'flex', 
              alignItems: 'center' 
            }}
          >
            <img 
              src="/assets/pankaj_logo_white.png" 
              alt="Pankaj Overseas" 
              style={{
                height: scrolled ? '88px' : '150px',
                width: 'auto',
                maxHeight: 'none',
                objectFit: 'contain',
                display: 'block',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: scrolled ? 'translateY(1px)' : 'translateY(16px)',
                filter: isDarkHero
                  ? 'brightness(0) invert(1) drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.75))'
                  : 'brightness(0) drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.20))'
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button 
              className="btn btn-primary btn-sm header-cta-desktop" 
              onClick={() => onOpenQuote()}
            >
              <span>Get a Quote</span>
              <ArrowRight style={{ width: 15, height: 15 }} />
            </button>
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setDrawerOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu style={{ width: 22, height: 22 }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop (Clicking outside closes drawer) */}
      <div 
        className={`mobile-drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Off-Canvas Half-Width Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <Link to="/" onClick={() => setDrawerOpen(false)} className="mobile-drawer-logo">
            <img 
              src="/assets/pankaj_logo_white.png" 
              alt="Pankaj Overseas" 
              style={{ height: '76px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <button 
            className="mobile-drawer-close-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation List */}
        <nav className="mobile-nav-list">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span>{link.label}</span>
              <ChevronRight size={18} className="mobile-nav-chevron" />
            </Link>
          ))}
        </nav>

        {/* Drawer Footer Info & CTA */}
        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-badge">
            <ShieldCheck size={14} />
            <span>APEDA & Spices Certified Export House</span>
          </div>

          <div className="mobile-drawer-contact-info">
            <a href="tel:+919876543210" className="mobile-drawer-contact-item">
              <Phone size={13} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:exports@pankajoverseas.com" className="mobile-drawer-contact-item">
              <Mail size={13} />
              <span>exports@pankajoverseas.com</span>
            </a>
          </div>

          <button 
            className="btn btn-primary btn-pill-gold mobile-drawer-cta" 
            onClick={() => {
              setDrawerOpen(false);
              onOpenQuote();
            }}
          >
            <span>Request a Quote</span>
            <ArrowRight size={15} />
          </button>

          <div className="mobile-drawer-hq">
            HQ: Nagpur Zero-Mile Hub, Maharashtra, India
          </div>
        </div>

      </div>
    </>
  );
}
