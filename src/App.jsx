import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import QuickQuoteModal from './components/QuickQuoteModal.jsx';
import ServiceModal from './components/ServiceModal.jsx';

export default function App() {
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState('');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenQuote = (prefill = '') => {
    setQuotePrefill(prefill);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuotePrefill('');
  };

  const handleOpenServiceModal = (service) => {
    setSelectedServiceForModal(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedServiceForModal(null);
  };

  return (
    <div className="app-layout">
      {/* Sticky Header with Navigation (Home, About Us, Services, Logistics, Contact Us) */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Page Routing - 5 Core Pages */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onOpenQuote={handleOpenQuote} 
              onOpenServiceModal={handleOpenServiceModal}
            />
          } 
        />
        <Route 
          path="/about" 
          element={<AboutPage onOpenQuote={handleOpenQuote} />} 
        />
        <Route 
          path="/services" 
          element={
            <ServicesPage 
              onOpenQuote={handleOpenQuote}
              onOpenServiceModal={handleOpenServiceModal}
            />
          } 
        />
        <Route 
          path="/contact" 
          element={<ContactPage onShowToast={showToast} />} 
        />
        {/* Fallback route */}
        <Route 
          path="*" 
          element={
            <HomePage 
              onOpenQuote={handleOpenQuote} 
              onOpenServiceModal={handleOpenServiceModal}
            />
          } 
        />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Quick RFQ Quote Modal */}
      <QuickQuoteModal 
        isOpen={quoteModalOpen} 
        onClose={handleCloseQuote}
        prefillProduct={quotePrefill}
        onShowToast={showToast}
      />

      {/* Service Capabilities Modal */}
      <ServiceModal 
        service={selectedServiceForModal}
        onClose={handleCloseServiceModal}
        onBookService={(serviceTitle) => {
          handleCloseServiceModal();
          handleOpenQuote(serviceTitle);
        }}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--primary-navy)',
            color: '#FFFFFF',
            border: '1px solid var(--accent-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.5rem',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            maxWidth: 420,
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent-gold)', flexShrink: 0 }}></div>
          <span style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
