import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface BrowserWindowProps {
  url: string;
  loadingProgress?: number; // 0 to 1
  children: React.ReactNode;
}

export const BrowserWindow: React.FC<BrowserWindowProps> = ({
  url,
  loadingProgress = 1,
  children,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 1720,
        height: 980,
        backgroundColor: '#0a0a0c',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow:
          '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Browser Chrome Header */}
      <div
        style={{
          height: 52,
          backgroundColor: '#121316',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          justifyContent: 'space-between',
          zIndex: 40,
        }}
      >
        {/* macOS Traffic Light Buttons */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: 80 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>

        {/* Tab & URL Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: 720,
            height: 34,
            backgroundColor: '#1c1d22',
            borderRadius: 10,
            border: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            gap: 10,
            color: '#a1a1aa',
            fontSize: 13,
          }}
        >
          {/* SSL Lock Icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          {/* URL text */}
          <span style={{ color: '#f4f4f5', fontWeight: 500, letterSpacing: '0.2px' }}>
            {url}
          </span>
        </div>

        {/* Action icons */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: '#71717a' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </div>
      </div>

      {/* Top Browser Loading Bar */}
      {loadingProgress < 1 && (
        <div
          style={{
            position: 'absolute',
            top: 52,
            left: 0,
            height: 3,
            width: `${loadingProgress * 100}%`,
            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
            boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
            zIndex: 50,
          }}
        />
      )}

      {/* Viewport content */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};
