import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

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

  // Dark hero background only exists on Home page when at the top
  const isDarkHero = location.pathname === '/' && !scrolled;

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${!isDarkHero ? 'light-mode' : ''}`} id="main-header">
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
                height: scrolled ? '72px' : '122px',
                width: 'auto',
                maxHeight: 'none',
                objectFit: 'contain',
                display: 'block',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: scrolled ? 'translateY(1px)' : 'translateY(14px)',
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

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" onClick={() => setDrawerOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/assets/pankaj_logo_white.png" 
              alt="Pankaj Overseas" 
              style={{
                height: '95px',
                width: 'auto',
                maxHeight: '95px',
                objectFit: 'contain',
                display: 'block',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Link>
          <button 
            onClick={() => setDrawerOpen(false)}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.5rem' }}
          >
            <X style={{ width: 28, height: 28 }} />
          </button>
        </div>

        <div className="mobile-nav-list">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span>{link.label}</span>
              <ChevronRight />
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              setDrawerOpen(false);
              onOpenQuote();
            }}
            style={{ width: '100%' }}
          >
            <span>Request a Quote</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8', textAlign: 'center' }}>
            HQ: Nagpur, Maharashtra, India | +91 98765 43210
          </div>
        </div>
      </div>
    </>
  );
}
