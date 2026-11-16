import React from 'react';
import { useRevision } from '../context/RevisionContext';
import { MODULES_DATA, DAYS_DATA } from '../data/roadmapData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Target, 
  Sparkles, 
  Code2, 
  Layers, 
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { 
    setActiveView, 
    selectedDayNumber, 
    openDay, 
    overallStats, 
    getModuleStats, 
    getDayStats 
  } = useRevision();

  const activeDay = DAYS_DATA.find(d => d.dayNumber === selectedDayNumber) || DAYS_DATA[0];
  const activeDayStats = getDayStats(activeDay.dayNumber);

  return (
    <div style={{ padding: '40px 0 70px 0' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="card-3d" style={{
          padding: '48px 40px',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: '#FFFFFF',
          marginBottom: '36px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ maxWidth: '780px' }}>
            {/* Tagline & Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              backgroundColor: 'var(--color-offwhite)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              marginBottom: '18px'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-green)'
              }} />
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--color-charcoal)',
                textTransform: 'uppercase'
              }}>
                Learn. Build. Master.
              </span>
            </div>

            {/* Main Hero Heading */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-charcoal)',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              Your 100-Day Developer Revision Journey.
            </h1>

            {/* Short Platform Description */}
            <p style={{
              fontSize: '1.08rem',
              color: 'var(--color-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px',
              maxWidth: '680px'
            }}>
              A disciplined, point-by-point software engineering revision platform. Systematically revise and master Java, Spring Boot, React, Low-Level Design, High-Level System Design, Python, AI/ML, and RAG Agentic workflows.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openDay(selectedDayNumber)}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.98rem' }}
              >
                <span>Start Revising</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => setActiveView('roadmap')}
                className="btn btn-secondary"
                style={{ padding: '12px 22px', fontSize: '0.98rem' }}
              >
                <BookOpen size={17} />
                <span>Explore 100-Day Roadmap</span>
              </button>

              <button
                onClick={() => setActiveView('dsa')}
                className="btn btn-outline"
                style={{ padding: '12px 20px', fontSize: '0.98rem' }}
              >
                <Code2 size={17} />
                <span>DSA Track</span>
              </button>
            </div>
          </div>
        </div>

        {/* Continue Learning Section */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px'
          }}>
            <h2 style={{ fontSize: '1.24rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              Continue Learning
            </h2>
            <span style={{ fontSize: '0.82rem', color: 'var(--color-secondary)' }}>
              Resume from your last active revision checkpoint
            </span>
          </div>

          <div 
            onClick={() => openDay(activeDay.dayNumber)}
            className="card-3d"
            style={{
              padding: '24px 28px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-charcoal)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flex: 1, minWidth: '280px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-charcoal)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                fontFamily: 'var(--font-mono)',
                flexShrink: 0
              }}>
                D{String(activeDay.dayNumber).padStart(2, '0')}
              </div>

              <div>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-secondary)',
                  letterSpacing: '0.04em',
                  marginBottom: '2px'
                }}>
                  CURRENT REVISION DAY • MODULE {activeDay.moduleLetter}: {activeDay.moduleName}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                  {activeDay.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', marginTop: '2px' }}>
                  {activeDayStats.completed} of {activeDayStats.total} subtopics completed
                </div>
              </div>
            </div>

            {/* Right progress & button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '130px', textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                  {activeDayStats.percent}% Complete
                </span>
                <div className="progress-bar-container" style={{ height: '6px', marginTop: '4px' }}>
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${activeDayStats.percent}%`,
                      backgroundColor: activeDayStats.isComplete ? 'var(--color-green)' : 'var(--color-charcoal)'
                    }} 
                  />
                </div>
              </div>

              <button className="btn btn-primary btn-sm" style={{ padding: '8px 16px' }}>
                <span>Resume Day</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Overall Progress Indicator & Metrics Grid */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.24rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '16px' }}>
            Revision Overview
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {/* Overall Completion */}
            <div className="card-elevated" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                  Overall Completion
                </span>
                <Target size={18} color="var(--color-green)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-charcoal)', lineHeight: 1.1 }}>
                {overallStats.overallPercent}%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', marginTop: '4px' }}>
                {overallStats.completedSubtopicsCount} of {overallStats.totalSubtopics} subtopics
              </div>
              <div className="progress-bar-container" style={{ height: '6px', marginTop: '12px' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${overallStats.overallPercent}%` }} 
                />
              </div>
            </div>

            {/* Completed Days */}
            <div className="card-elevated" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                  Completed Days
                </span>
                <CheckCircle2 size={18} color="var(--color-green)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-charcoal)', lineHeight: 1.1 }}>
                {overallStats.completedDaysCount}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', marginTop: '4px' }}>
                Out of 100 days finished
              </div>
              <div className="progress-bar-container" style={{ height: '6px', marginTop: '12px' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${(overallStats.completedDaysCount / 100) * 100}%` }} 
                />
              </div>
            </div>

            {/* Remaining Days */}
            <div className="card-elevated" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                  Remaining Days
                </span>
                <Clock size={18} color="var(--color-secondary)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-charcoal)', lineHeight: 1.1 }}>
                {overallStats.remainingDaysCount}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', marginTop: '4px' }}>
                Days to full curriculum completion
              </div>
              <div className="progress-bar-container" style={{ height: '6px', marginTop: '12px' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${(overallStats.remainingDaysCount / 100) * 100}%`, backgroundColor: '#888' }} 
                />
              </div>
            </div>

            {/* Total Topics */}
            <div className="card-elevated" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                  Total Curriculum Topics
                </span>
                <Layers size={18} color="var(--color-charcoal)" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-charcoal)', lineHeight: 1.1 }}>
                {overallStats.totalSubtopics}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', marginTop: '4px' }}>
                Across 15 core engineering modules
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
                <span className="badge badge-mastered" style={{ fontSize: '0.7rem' }}>
                  {overallStats.masteredCount} Mastered
                </span>
                <span className="badge badge-practice" style={{ fontSize: '0.7rem' }}>
                  {overallStats.needsPracticeCount} Practice
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 15 Modules Progress Overview */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.24rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                Module Progress Overview
              </h2>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-secondary)' }}>
                Track completion across all 15 technical modules
              </p>
            </div>

            <button
              onClick={() => setActiveView('roadmap')}
              className="btn btn-secondary btn-sm"
            >
              <span>View Roadmap</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '14px'
          }}>
            {MODULES_DATA.map(module => {
              const stats = getModuleStats(module.id);
              return (
                <div
                  key={module.id}
                  onClick={() => {
                    openDay(module.startDay);
                  }}
                  className="card-3d"
                  style={{
                    padding: '16px 18px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '4px',
                      backgroundColor: stats.percent === 100 ? 'var(--color-green)' : 'var(--color-offwhite)',
                      color: stats.percent === 100 ? '#FFFFFF' : 'var(--color-charcoal)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-mono)',
                      flexShrink: 0
                    }}>
                      {module.letter}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--color-secondary)',
                        marginBottom: '2px'
                      }}>
                        DAYS {module.startDay}–{module.endDay} ({module.dayCount} DAYS)
                      </div>
                      <h4 style={{
                        fontSize: '0.96rem',
                        fontWeight: 700,
                        color: 'var(--color-charcoal)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {module.name}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.74rem',
                      color: 'var(--color-secondary)',
                      marginBottom: '5px'
                    }}>
                      <span>{stats.completedDays} of {stats.dayCount} days completed</span>
                      <span style={{ fontWeight: 700, color: stats.percent === 100 ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
                        {stats.percent}%
                      </span>
                    </div>

                    <div className="progress-bar-container" style={{ height: '5px' }}>
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: `${stats.percent}%`,
                          backgroundColor: stats.percent === 100 ? 'var(--color-green)' : 'var(--color-charcoal)'
                        }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
