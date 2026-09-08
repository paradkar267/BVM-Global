import React, { useState } from 'react';
import { Calculator, Box, Check } from 'lucide-react';

export default function ContainerCalculator({ onGetQuote }) {
  const [commodity, setCommodity] = useState('rice');
  const [containerType, setContainerType] = useState('20ft');

  const getCalculation = () => {
    if (containerType === '20ft') {
      if (commodity === 'rice') return { payload: '25.0 - 26.0 Metric Tons', units: '~1,000 Bags (25kg)', volume: '33.2 CBM' };
      if (commodity === 'spices') return { payload: '14.0 - 18.0 Metric Tons', units: 'High-density Tellicherry / Turmeric', volume: '33.2 CBM' };
      if (commodity === 'pulses') return { payload: '24.0 - 25.0 Metric Tons', units: '~500 Bags (50kg PP Sacks)', volume: '33.2 CBM' };
      if (commodity === 'mangoes') return { payload: '12.0 - 14.0 Metric Tons', units: '~3,500 Export Boxes (3.5kg)', volume: 'Ventilated / Reefer' };
      if (commodity === 'cotton') return { payload: '14.0 - 15.0 Metric Tons', units: '~85 Compressed Bales', volume: '33.2 CBM' };
    } else if (containerType === '40hc') {
      if (commodity === 'rice') return { payload: '26.5 - 27.5 Metric Tons', units: '~1,080 Palletized Bags', volume: '76.4 CBM' };
      if (commodity === 'spices') return { payload: '24.0 - 26.0 Metric Tons', units: 'High-Cube max volume', volume: '76.4 CBM' };
      if (commodity === 'pulses') return { payload: '26.0 - 27.0 Metric Tons', units: '~540 Bags (50kg)', volume: '76.4 CBM' };
      if (commodity === 'mangoes') return { payload: '19.0 - 20.0 Metric Tons', units: '~5,500 Boxes (Reefer recommended)', volume: '76.4 CBM' };
      if (commodity === 'cotton') return { payload: '26.0 - 27.0 Metric Tons', units: '~160 Compressed Bales', volume: '76.4 CBM' };
    } else if (containerType === '40rf') {
      if (commodity === 'mangoes') return { payload: '20.0 Metric Tons (Climate Controlled)', units: '5,500 - 6,000 Boxes (+8°C to +12°C)', volume: '67.0 CBM Reefer' };
      if (commodity === 'rice' || commodity === 'pulses') return { payload: '24.0 - 25.0 Metric Tons', units: 'Moisture & climate protected', volume: '67.0 CBM Reefer' };
      return { payload: '18.0 - 22.0 Metric Tons', units: 'Precision temperature -30°C to +30°C', volume: '67.0 CBM Reefer' };
    }
    return { payload: '25.0 MT', units: 'Standard FCL Payload', volume: '33.2 CBM' };
  };

  const result = getCalculation();

  return (
    <div className="calc-card">
      <div className="calc-title">
        <Calculator style={{ width: 18, height: 18 }} />
        <span>FCL Container Capacity Estimator</span>
      </div>
      <p style={{ fontSize: '0.78125rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
        Select commodity & container type to compute estimated payload capacities:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div>
          <label style={{ fontSize: '0.7rem', color: '#CBD5E1', display: 'block', marginBottom: '0.2rem' }}>Commodity</label>
          <select 
            value={commodity} 
            onChange={(e) => setCommodity(e.target.value)} 
            className="form-select" 
            style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem' }}
          >
            <option value="rice">Basmati Rice (25kg Bags)</option>
            <option value="spices">Whole Spices / Black Pepper</option>
            <option value="pulses">Chickpeas / Lentils (50kg Bags)</option>
            <option value="mangoes">Fresh Alphonso Mangoes</option>
            <option value="cotton">Raw Cotton Bales</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.7rem', color: '#CBD5E1', display: 'block', marginBottom: '0.2rem' }}>Container Type</label>
          <select 
            value={containerType} 
            onChange={(e) => setContainerType(e.target.value)} 
            className="form-select" 
            style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem' }}
          >
            <option value="20ft">20ft Standard Dry (20 FCL)</option>
            <option value="40hc">40ft High Cube (40 HC)</option>
            <option value="40rf">40ft Reefer Container</option>
          </select>
        </div>
      </div>

      <div className="calc-result-box">
        <div>
          <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Estimated FCL Payload</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
            {result.payload}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'block' }}>
            {result.units}
          </span>
          <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Max Volume: {result.volume}</span>
        </div>
      </div>

      {onGetQuote && (
        <button 
          className="btn btn-outline-gold btn-sm" 
          onClick={() => onGetQuote(`${commodity.toUpperCase()} in ${containerType.toUpperCase()}`)}
          style={{ width: '100%', marginTop: '0.75rem' }}
        >
          <span>Apply to Quotation Form</span>
        </button>
      )}
    </div>
  );
}
