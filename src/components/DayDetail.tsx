import React from 'react';
import { useRevision } from '../context/RevisionContext';
import { DAYS_DATA } from '../data/roadmapData';
import { TopicTree } from './TopicTree';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  RotateCcw, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';

export const DayDetail: React.FC = () => {
  const {
    selectedDayNumber,
    openDay,
    state,
    toggleItemCheck,
    setItemStatus,
    toggleDayComplete,
    resetDay,
    getDayStats,
    setActiveView
  } = useRevision();

  const currentDay = DAYS_DATA.find(d => d.dayNumber === selectedDayNumber) || DAYS_DATA[0];
  const dayStats = getDayStats(currentDay.dayNumber);

  const prevDay = selectedDayNumber > 1 ? DAYS_DATA.find(d => d.dayNumber === selectedDayNumber - 1) : null;
  const nextDay = selectedDayNumber < 100 ? DAYS_DATA.find(d => d.dayNumber === selectedDayNumber + 1) : null;

  return (
    <div style={{ padding: '36px 0 60px 0' }}>
      <div className="container">
        {/* Navigation Breadcrumb & Back */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <button
            onClick={() => setActiveView('roadmap')}
            className="btn btn-secondary btn-sm"
            style={{ gap: '6px' }}
          >
            <ChevronLeft size={16} /> Back to 100-Day Roadmap
          </button>

          {/* Module tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.82rem',
            color: 'var(--color-secondary)'
          }}>
            <span style={{ fontWeight: 600 }}>Module {currentDay.moduleLetter}:</span>
            <span style={{
              color: 'var(--color-charcoal)',
              fontWeight: 700,
              backgroundColor: 'var(--color-offwhite)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              {currentDay.moduleName}
            </span>
          </div>
        </div>

        {/* Hero Card for Day */}
        <div className="card-3d" style={{
          padding: '28px',
          marginBottom: '24px',
          backgroundColor: '#FFFFFF',
          borderLeft: dayStats.isComplete ? '4px solid var(--color-green)' : '4px solid var(--color-charcoal)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--color-charcoal)',
                  color: '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em'
                }}>
                  DAY {String(currentDay.dayNumber).padStart(2, '0')} OF 100
                </span>

                {dayStats.isComplete ? (
                  <span className="badge badge-mastered" style={{ gap: '5px' }}>
                    <CheckCircle2 size={13} /> Completed
                  </span>
                ) : dayStats.percent > 0 ? (
                  <span className="badge badge-practice">
                    In Progress ({dayStats.percent}%)
                  </span>
                ) : (
                  <span className="badge badge-notrevised">
                    Not Started
                  </span>
                )}
              </div>

              <h1 style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                color: 'var(--color-charcoal)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                {currentDay.title}
              </h1>
            </div>

            {/* Actions for this day */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => toggleDayComplete(currentDay.dayNumber)}
                className={`btn ${dayStats.isComplete ? 'btn-secondary' : 'btn-primary'}`}
                style={{ fontSize: '0.86rem' }}
                title="Toggle completion for all subtopics in this day"
              >
                <CheckCircle size={15} color={dayStats.isComplete ? 'var(--color-green)' : '#FFFFFF'} />
                <span>{dayStats.isComplete ? 'Mark Incomplete' : 'Mark Day Complete'}</span>
              </button>

              {dayStats.completed > 0 && (
                <button
                  onClick={() => resetDay(currentDay.dayNumber)}
                  className="btn btn-outline"
                  style={{ fontSize: '0.86rem', color: 'var(--color-status-weak)' }}
                  title="Reset all checkboxes and statuses for this day"
                >
                  <RotateCcw size={14} />
                  <span>Reset Day</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar & Subtopic Stats */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: 'var(--color-secondary)',
              marginBottom: '8px'
            }}>
              <span>
                Day Progress: <strong>{dayStats.completed}</strong> of {dayStats.total} subtopics revised
              </span>
              <span style={{ color: dayStats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
                {dayStats.percent}%
              </span>
            </div>
            <div className="progress-bar-container" style={{ height: '10px' }}>
              <div 
                className="progress-bar-fill" 
                style={{ 
                  width: `${dayStats.percent}%`,
                  backgroundColor: dayStats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Detailed Syllabus Subtopics Hierarchy */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.24rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                Detailed Learning Subtopics
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                Check off items independently or update revision status as you master each concept.
              </p>
            </div>
          </div>

          <TopicTree
            subtopics={currentDay.subtopics}
            checkedItems={state.checkedItems}
            itemStatuses={state.itemStatuses}
            onToggleCheck={(id) => toggleItemCheck(id, currentDay.dayNumber)}
            onStatusChange={(id, status) => setItemStatus(id, status, currentDay.dayNumber)}
            dayNumber={currentDay.dayNumber}
          />
        </div>

        {/* Previous & Next Navigation Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '24px',
          borderTop: '1px solid var(--color-border)',
          gap: '16px'
        }}>
          {prevDay ? (
            <button
              onClick={() => openDay(prevDay.dayNumber)}
              className="btn btn-secondary"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px 16px',
                textAlign: 'left'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: 'var(--color-secondary)' }}>
                <ChevronLeft size={13} /> PREVIOUS DAY
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                Day {prevDay.dayNumber}: {prevDay.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextDay ? (
            <button
              onClick={() => openDay(nextDay.dayNumber)}
              className="btn btn-primary"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: '10px 16px',
                textAlign: 'right'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#BBB' }}>
                NEXT DAY <ChevronRight size={13} />
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
                Day {nextDay.dayNumber}: {nextDay.title}
              </span>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
