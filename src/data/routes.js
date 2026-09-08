export const globalTradeRoutes = [
  {
    id: 'middle-east',
    region: 'Middle East & GCC (MEA)',
    code: 'MEA',
    status: 'High Frequency Weekly Liners',
    seaTransit: '3 - 7 Days (JNPT to Jebel Ali / Dammam)',
    airTransit: '4 - 8 Hours (BOM/DEL Direct Flights)',
    hubPorts: ['Jebel Ali (Dubai, UAE)', 'Dammam & Jeddah (Saudi Arabia)', 'Hamad Port (Qatar)', 'Sohar (Oman)', 'Shuwaikh (Kuwait)'],
    topCommodities: ['Basmati Rice 1121', 'Fresh Alphonso Mangoes', 'Green Cardamom', 'Pomegranates', 'Red Onions', 'Cumin Seeds'],
    compliance: 'ESMA, SFDA, Halal Certification, Phytosanitary'
  },
  {
    id: 'europe',
    region: 'Europe & United Kingdom',
    code: 'EU / UK',
    status: 'Direct Liner & Transshipment Services',
    seaTransit: '18 - 26 Days (Direct Sea Corridor)',
    airTransit: '9 - 14 Hours Air Cargo',
    hubPorts: ['Rotterdam (Netherlands)', 'Hamburg (Germany)', 'Antwerp (Belgium)', 'Felixstowe / London Gateway (UK)', 'Genoa (Italy)'],
    topCommodities: ['Organic Tellicherry Black Pepper', 'High-Curcumin Turmeric', 'Table Grapes', 'Hulled Sesame Seeds', 'Basmati Rice'],
    compliance: 'EU MRL (Pesticide Residue), BRC, HACCP, Non-GMO, GlobalG.A.P.'
  },
  {
    id: 'north-america',
    region: 'North America (USA & Canada)',
    code: 'NA',
    status: 'Direct & Fast-Feeder Multi-Port Services',
    seaTransit: '24 - 34 Days (East / West Coast Ports)',
    airTransit: '18 - 24 Hours Priority Air Cargo',
    hubPorts: ['New York / New Jersey', 'Savannah (Georgia)', 'Houston (Texas)', 'Los Angeles / Long Beach', 'Vancouver & Montreal (Canada)'],
    topCommodities: ['Specialty Spices', 'Organic Pulses & Lentils', 'Processed Agro-Products', 'Basmati Rice', 'Cotton Yarns & Fibers'],
    compliance: 'US FDA Prior Notice, USDA Organic, FSVP, Phytosanitary'
  },
  {
    id: 'southeast-asia',
    region: 'Southeast Asia (ASEAN / SEA)',
    code: 'SEA',
    status: 'High-Volume Direct Feeders',
    seaTransit: '6 - 12 Days (Chennai / JNPT to Singapore)',
    airTransit: '5 - 9 Hours Air Freight',
    hubPorts: ['Port of Singapore', 'Port Klang & Tanjung Pelepas (Malaysia)', 'Ho Chi Minh (Vietnam)', 'Tanjung Priok (Jakarta, Indonesia)', 'Bangkok / Laem Chabang (Thailand)'],
    topCommodities: ['Non-Basmati Rice', 'Red Chillies (Guntur Sannam)', 'Raw Cotton Bales', 'Shelled Peanuts', 'Coriander Seeds'],
    compliance: 'ASEAN Trade Protocols, Form AI (AIFTA Preferential Tariff), Plant Quarantine'
  },
  {
    id: 'africa',
    region: 'East & West Africa',
    code: 'AFR',
    status: 'Regular Container & Break-Bulk Corridors',
    seaTransit: '12 - 22 Days (Direct Ocean Passage)',
    airTransit: '8 - 14 Hours',
    hubPorts: ['Mombasa (Kenya)', 'Dar es Salaam (Tanzania)', 'Durban (South Africa)', 'Lagos / Apapa (Nigeria)', 'Tema (Ghana)'],
    topCommodities: ['Parboiled Non-Basmati Rice', 'Chickpeas & Lentils', 'Refined Agro Commodities', 'Jute Bags & Commercial Staples'],
    compliance: 'COC (Certificate of Conformity), SGS Pre-Shipment Inspection, Bill of Lading'
  }
];

export const worldClocks = [
  { city: 'Nagpur / HQ', timeZone: 'Asia/Kolkata', label: 'INDIA (HQ)' },
  { city: 'Dubai', timeZone: 'Asia/Dubai', label: 'MIDDLE EAST' },
  { city: 'London', timeZone: 'Europe/London', label: 'EUROPE / UK' },
  { city: 'New York', timeZone: 'America/New_York', label: 'USA (EST)' },
  { city: 'Singapore', timeZone: 'Asia/Singapore', label: 'ASIA-PACIFIC' }
];
