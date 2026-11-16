import React, { useState } from 'react';
import { useRevision, AppView } from '../context/RevisionContext';
import { Search, Download, Upload, RotateCcw, BookOpen, Layers, Code2, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { 
    activeView, 
    setActiveView, 
    selectedDayNumber, 
    openDay, 
    overallStats, 
    exportData, 
    importData, 
    resetAllData 
  } = useRevision();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          const success = importData(text);
          if (success) {
            alert('Progress successfully imported!');
          } else {
            alert('Failed to import file. Please ensure it is a valid PREP backup JSON.');
          }
        }
      };
      reader.readAsText(file);
    }
    e.target.value = '';
  };

  const navItems: { view: AppView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: <Layers size={17} /> },
    { view: 'roadmap', label: '100-Day Roadmap', icon: <BookOpen size={17} /> },
    { view: 'day-detail', label: `Day ${selectedDayNumber}`, icon: <CheckCircle2 size={17} />, badge: 'Active' },
    { view: 'dsa', label: 'DSA Track', icon: <Code2 size={17} /> },
  ];

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
          gap: '16px'
        }}>
          {/* Logo & Brand */}
          <div 
            onClick={() => { setActiveView('dashboard'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <img 
              src="/assets/prep-icon.svg" 
              alt="PREP Logo" 
              style={{ width: '38px', height: '38px', borderRadius: '8px' }} 
            />
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: '1.28rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: 'var(--color-charcoal)'
                }}>
                  PREP
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#888888',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  100-Day
                </span>
              </div>
              <div style={{
                fontSize: '0.74rem',
                color: 'var(--color-secondary)',
                fontWeight: 600,
                letterSpacing: '0.08em'
              }}>
                Learn. Build. Master.
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }} className="desktop-nav">
            {navItems.map(item => {
              const isActive = activeView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    if (item.view === 'day-detail') {
                      openDay(selectedDayNumber);
                    } else {
                      setActiveView(item.view);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    color: isActive ? 'var(--color-white)' : 'var(--color-charcoal)',
                    backgroundColor: isActive ? 'var(--color-charcoal)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-charcoal)' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'var(--color-offwhite)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span style={{
                      fontSize: '0.68rem',
                      padding: '1px 6px',
                      backgroundColor: 'var(--color-offwhite)',
                      color: 'var(--color-secondary)',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-border)'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="btn btn-secondary"
              style={{
                padding: '7px 12px',
                fontSize: '0.84rem',
                gap: '8px',
                color: 'var(--color-secondary)',
                backgroundColor: 'var(--color-offwhite)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)'
              }}
              title="Search topics and days (Ctrl+K)"
            >
              <Search size={15} />
              <span className="search-text-hide">Search syllabus...</span>
              <kbd style={{
                fontSize: '0.68rem',
                padding: '2px 5px',
                background: '#FFFFFF',
                border: '1px solid #D5D5D2',
                borderRadius: '4px',
                color: '#666666',
                fontFamily: 'var(--font-mono)'
              }}>⌘K</kbd>
            </button>

            {/* Overall Progress Pill */}
            <div 
              onClick={() => setActiveView('roadmap')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                backgroundColor: 'var(--color-offwhite)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                userSelect: 'none'
              }}
              title="Overall roadmap progress"
            >
              <div style={{
                width: '32px',
                height: '6px',
                backgroundColor: '#E0E0DC',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${overallStats.overallPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--color-green)'
                }} />
              </div>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: overallStats.overallPercent > 0 ? 'var(--color-green)' : 'var(--color-charcoal)'
              }}>
                {overallStats.overallPercent}%
              </span>
            </div>

            {/* Data Management Options (Desktop) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-actions">
              <button
                onClick={exportData}
                className="btn btn-outline btn-sm"
                title="Export progress JSON backup"
              >
                <Download size={14} />
              </button>

              <label 
                className="btn btn-outline btn-sm" 
                title="Import progress JSON backup"
                style={{ cursor: 'pointer', margin: 0 }}
              >
                <Upload size={14} />
                <input 
                  type="file" 
                  accept=".json,application/json" 
                  onChange={handleFileUpload} 
                  style={{ display: 'none' }} 
                />
              </label>

              <button
                onClick={() => setResetConfirmOpen(true)}
                className="btn btn-outline btn-sm"
                title="Reset all progress"
                style={{ color: 'var(--color-status-weak)' }}
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-outline btn-sm mobile-menu-btn"
              style={{ padding: '8px' }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            padding: '16px 20px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-dropdown)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map(item => (
                <button
                  key={item.view}
                  onClick={() => {
                    if (item.view === 'day-detail') {
                      openDay(selectedDayNumber);
                    } else {
                      setActiveView(item.view);
                    }
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    backgroundColor: activeView === item.view ? 'var(--color-charcoal)' : 'var(--color-offwhite)',
                    color: activeView === item.view ? '#FFFFFF' : 'var(--color-charcoal)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: activeView === item.view ? '#444' : '#E5E5E5'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--color-border)'
              }}>
                <button
                  onClick={exportData}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <Download size={14} /> Export Backup
                </button>

                <label 
                  className="btn btn-secondary btn-sm" 
                  style={{ flex: 1, cursor: 'pointer', margin: 0 }}
                >
                  <Upload size={14} /> Import Backup
                  <input 
                    type="file" 
                    accept=".json,application/json" 
                    onChange={handleFileUpload} 
                    style={{ display: 'none' }} 
                  />
                </label>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResetConfirmOpen(true);
                }}
                className="btn btn-outline btn-sm"
                style={{ color: 'var(--color-status-weak)', marginTop: '4px' }}
              >
                <RotateCcw size={14} /> Reset All Progress
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            maxWidth: '440px',
            width: '100%',
            padding: '24px',
            boxShadow: 'var(--shadow-dropdown)',
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
              Reset All Progress?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
              This will reset all 100 days, checkboxes, revision statuses, and DSA progress to not revised. You can export a backup beforehand if needed.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button 
                onClick={() => setResetConfirmOpen(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetAllData();
                  setResetConfirmOpen(false);
                }}
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--color-status-weak)' }}
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for media query hides */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-actions, .search-text-hide {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
