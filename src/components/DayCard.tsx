import React from 'react';
import { DayPlan } from '../data/roadmapData';
import { useRevision } from '../context/RevisionContext';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

interface DayCardProps {
  day: DayPlan;
}

export const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const { openDay, getDayStats } = useRevision();
  const stats = getDayStats(day.dayNumber);

  return (
    <div
      onClick={() => openDay(day.dayNumber)}
      className="card-3d"
      style={{
        padding: '16px 18px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '12px',
        backgroundColor: stats.isComplete ? '#FAFDFB' : '#FFFFFF',
        borderLeft: stats.isComplete ? '3px solid var(--color-green)' : '3px solid transparent',
        transition: 'all 0.18s ease'
      }}
    >
      <div>
        {/* Top header: Day Number & Status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          <span style={{
            fontSize: '0.76rem',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            color: stats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)',
            backgroundColor: stats.isComplete ? 'var(--color-green-light)' : 'var(--color-offwhite)',
            padding: '2px 8px',
            borderRadius: '4px',
            letterSpacing: '0.04em'
          }}>
            DAY {String(day.dayNumber).padStart(2, '0')}
          </span>

          {stats.isComplete ? (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: 'var(--color-green)'
            }}>
              <CheckCircle2 size={13} /> Completed
            </span>
          ) : stats.completed > 0 ? (
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 600,
              color: 'var(--color-status-practice)'
            }}>
              {stats.completed}/{stats.total} done
            </span>
          ) : (
            <span style={{
              fontSize: '0.74rem',
              color: '#888888'
            }}>
              {stats.total} topics
            </span>
          )}
        </div>

        {/* Major Topic Title */}
        <h4 style={{
          fontSize: '0.96rem',
          fontWeight: 700,
          color: 'var(--color-charcoal)',
          lineHeight: 1.35,
          marginBottom: '6px'
        }}>
          {day.title}
        </h4>
      </div>

      {/* Progress Track & Subtopics count */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.74rem',
          color: 'var(--color-secondary)',
          marginBottom: '6px'
        }}>
          <span>{stats.completed} of {stats.total} subtopics</span>
          <span style={{ fontWeight: 600, color: stats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
            {stats.percent}%
          </span>
        </div>

        <div className="progress-bar-container" style={{ height: '5px' }}>
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${stats.percent}%`,
              backgroundColor: stats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)'
            }} 
          />
        </div>
      </div>
    </div>
  );
};
