import React from 'react';
import { ModulePlan, DayPlan } from '../data/roadmapData';
import { useRevision } from '../context/RevisionContext';
import { DayCard } from './DayCard';
import { ChevronDown, ChevronRight, CheckCircle2, Calendar } from 'lucide-react';

interface ModuleCardProps {
  module: ModulePlan;
  days: DayPlan[];
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, days }) => {
  const { state, toggleModuleExpand, getModuleStats } = useRevision();
  const isExpanded = !!state.expandedModules[module.id];
  const stats = getModuleStats(module.id);

  const isModuleComplete = stats.percent === 100;

  return (
    <div 
      className="card-3d" 
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isModuleComplete ? '#D5E6DA' : 'var(--color-border)',
        backgroundColor: '#FFFFFF',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Module Header / Accordion trigger */}
      <div
        onClick={() => toggleModuleExpand(module.id)}
        style={{
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          backgroundColor: isModuleComplete ? '#F8FBF9' : '#FFFFFF',
          userSelect: 'none',
          gap: '16px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '260px' }}>
          {/* Module Letter Badge */}
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: isModuleComplete ? 'var(--color-green)' : 'var(--color-charcoal)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.15rem',
            fontFamily: 'var(--font-mono)',
            flexShrink: 0,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {module.letter}
          </div>

          {/* Module Titles */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
              <span style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-secondary)'
              }}>
                MODULE {module.letter} • DAYS {module.startDay}–{module.endDay} ({module.dayCount} DAYS)
              </span>

              {isModuleComplete && (
                <span className="badge badge-mastered" style={{ padding: '1px 6px', fontSize: '0.68rem' }}>
                  <CheckCircle2 size={11} /> Mastered
                </span>
              )}
            </div>

            <h3 style={{
              fontSize: '1.18rem',
              fontWeight: 700,
              color: 'var(--color-charcoal)',
              lineHeight: 1.3
            }}>
              {module.name}
            </h3>
          </div>
        </div>

        {/* Right side: Progress Bar & Expand Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Progress preview */}
          <div style={{ width: '150px', textAlign: 'right' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.76rem',
              fontWeight: 600,
              color: 'var(--color-secondary)',
              marginBottom: '5px'
            }}>
              <span>{stats.completedDays}/{stats.dayCount} days</span>
              <span style={{ color: isModuleComplete ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
                {stats.percent}%
              </span>
            </div>
            <div className="progress-bar-container" style={{ height: '6px' }}>
              <div 
                className="progress-bar-fill" 
                style={{ 
                  width: `${stats.percent}%`,
                  backgroundColor: isModuleComplete ? 'var(--color-green)' : 'var(--color-charcoal)'
                }} 
              />
            </div>
          </div>

          {/* Expand / Collapse Icon */}
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-offwhite)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-charcoal)',
            transition: 'transform 0.15s ease'
          }}>
            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
        </div>
      </div>

      {/* Expanded Days Grid */}
      {isExpanded && (
        <div style={{
          padding: '16px 24px 24px 24px',
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-offwhite)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '14px'
          }}>
            {days.map(day => (
              <DayCard key={day.dayNumber} day={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
