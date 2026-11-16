import React, { useState, useRef, useEffect } from 'react';
import { RevisionStatus } from '../data/roadmapData';
import { Check, ChevronDown } from 'lucide-react';

interface RevisionStatusSelectorProps {
  status: RevisionStatus;
  onChange: (newStatus: RevisionStatus) => void;
  size?: 'sm' | 'md';
}

const STATUS_CONFIG: Record<RevisionStatus, { label: string; badgeClass: string; color: string; bg: string }> = {
  'not-revised': {
    label: 'Not Revised',
    badgeClass: 'badge-notrevised',
    color: 'var(--color-status-notrevised)',
    bg: 'var(--color-status-notrevised-bg)'
  },
  'revised': {
    label: 'Revised',
    badgeClass: 'badge-revised',
    color: 'var(--color-status-revised)',
    bg: 'var(--color-status-revised-bg)'
  },
  'needs-practice': {
    label: 'Needs Practice',
    badgeClass: 'badge-practice',
    color: 'var(--color-status-practice)',
    bg: 'var(--color-status-practice-bg)'
  },
  'weak': {
    label: 'Weak Topic',
    badgeClass: 'badge-weak',
    color: 'var(--color-status-weak)',
    bg: 'var(--color-status-weak-bg)'
  },
  'mastered': {
    label: 'Mastered',
    badgeClass: 'badge-mastered',
    color: 'var(--color-status-mastered)',
    bg: 'var(--color-status-mastered-bg)'
  }
};

const ALL_STATUSES: RevisionStatus[] = ['not-revised', 'revised', 'needs-practice', 'weak', 'mastered'];

export const RevisionStatusSelector: React.FC<RevisionStatusSelectorProps> = ({
  status,
  onChange,
  size = 'md'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentConfig = STATUS_CONFIG[status] || STATUS_CONFIG['not-revised'];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`badge ${currentConfig.badgeClass}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          padding: size === 'sm' ? '2px 8px' : '4px 10px',
          fontSize: size === 'sm' ? '0.72rem' : '0.78rem',
          cursor: 'pointer',
          border: '1px solid',
          borderColor: currentConfig.color + '40',
          transition: 'all 0.15s ease',
          userSelect: 'none'
        }}
        title="Click to change revision status"
      >
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: currentConfig.color
        }} />
        <span>{currentConfig.label}</span>
        <ChevronDown size={11} style={{ opacity: 0.7 }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '6px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-dropdown)',
          border: '1px solid var(--color-border)',
          zIndex: 50,
          minWidth: '150px',
          overflow: 'hidden',
          padding: '4px'
        }}>
          {ALL_STATUSES.map((st) => {
            const conf = STATUS_CONFIG[st];
            const isSelected = st === status;
            return (
              <button
                key={st}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(st);
                  setIsOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? conf.color : 'var(--color-charcoal)',
                  backgroundColor: isSelected ? conf.bg : 'transparent',
                  textAlign: 'left',
                  transition: 'background-color 0.1s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--color-offwhite)';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: conf.color
                  }} />
                  <span>{conf.label}</span>
                </div>
                {isSelected && <Check size={13} color={conf.color} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
