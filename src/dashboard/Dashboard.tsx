import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="nexus-container">
      <header className="nexus-header">
        <div className="nexus-brand">
          <div className="nexus-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="nexus-title">NexusOS</h1>
            <p className="nexus-subtitle">Enterprise Incident Response Platform</p>
          </div>
        </div>
        <div className="nexus-badge">Phase 1 Foundation</div>
      </header>

      <main className="nexus-main">
        <div className="nexus-card">
          <div className="nexus-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <p className="nexus-empty-message">No incidents available.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
