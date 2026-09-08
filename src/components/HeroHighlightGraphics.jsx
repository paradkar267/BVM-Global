import React from 'react';

/**
 * High-Precision, Executive Corporate Stroke Vector Icons
 * Authentic, clean, human-designed line art (Zero AI-generated 3D cartoon aesthetic)
 */

export function ApedaGraphic({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Outer Shield Outline */}
      <path
        d="M16 3L26 7.5V14.5C26 21 21.5 26.5 16 28.5C10.5 26.5 6 21 6 14.5V7.5L16 3Z"
        stroke="#F59E0B"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Precision Grid Accent Line */}
      <path
        d="M16 6.5L23 9.6V14.5C23 19.2 19.6 23.4 16 25"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeDasharray="2 2"
        strokeOpacity="0.5"
      />
      {/* Verification Star */}
      <path
        d="M16 9.5L17.2 12.2H20L17.7 13.8L18.6 16.5L16 14.8L13.4 16.5L14.3 13.8L12 12.2H14.8L16 9.5Z"
        fill="#F59E0B"
      />
      {/* Quality Checkmark */}
      <path
        d="M11.5 19L14.5 22L20.5 16"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MultimodalGraphic({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Cargo Ship Hull */}
      <path
        d="M4 18L7 24H25L28 18H4Z"
        stroke="#38BDF8"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Container Blocks (Line Stroke) */}
      <rect x="7.5" y="13.5" width="5" height="4.5" rx="0.5" stroke="#38BDF8" strokeWidth="1.25" />
      <rect x="13.5" y="13.5" width="5" height="4.5" rx="0.5" stroke="#38BDF8" strokeWidth="1.25" />
      <rect x="19.5" y="13.5" width="5" height="4.5" rx="0.5" stroke="#38BDF8" strokeWidth="1.25" />
      {/* Flight Airway Arc */}
      <path
        d="M5 10C11 6.5 21 6.5 27 10"
        stroke="#38BDF8"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />
      {/* Aircraft Silhouette Stroke */}
      <path
        d="M23 6.5L27 9.5L24 10.5L23 6.5Z"
        fill="#38BDF8"
      />
      {/* Water Wave Lines */}
      <path
        d="M3 27C6 26 9 27.5 12 27C15 26.5 18 27.5 21 27C24 26.5 27 27.5 29 27"
        stroke="#38BDF8"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InlandHubGraphic({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Location Pin */}
      <path
        d="M16 3C12.134 3 9 6.134 9 10C9 15.25 16 22 16 22C16 22 23 15.25 23 10C23 6.134 19.866 3 16 3Z"
        stroke="#FB923C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Target Dot */}
      <circle cx="16" cy="10" r="2.5" fill="#FB923C" />
      
      {/* Rail Tracks Perspective */}
      <path d="M12 23L6 29.5" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 23L26 29.5" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Railway Ties */}
      <line x1="11" y1="25" x2="21" y2="25" stroke="#FB923C" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="9" y1="27.5" x2="23" y2="27.5" stroke="#FB923C" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function GlobalDeskGraphic({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Main Globe Outer Circle */}
      <circle cx="16" cy="16" r="11" stroke="#10B981" strokeWidth="1.75" />
      
      {/* Latitude Lines */}
      <path d="M5 16H27" stroke="#10B981" strokeWidth="1.25" strokeLinecap="round" />
      <ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.7" />
      
      {/* Longitude Ellipse */}
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#10B981" strokeWidth="1.25" />
      
      {/* Active Live Radar Center Node */}
      <circle cx="16" cy="16" r="2.5" fill="#10B981" />
      <circle cx="16" cy="16" r="5" stroke="#10B981" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

