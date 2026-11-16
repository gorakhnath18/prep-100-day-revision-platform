import React, { useState, useMemo } from 'react';
import { useRevision } from '../context/RevisionContext';
import { MODULES_DATA, DAYS_DATA } from '../data/roadmapData';
import { ModuleCard } from './ModuleCard';
import { Layers, ChevronDown, ChevronUp, CheckCircle, Search } from 'lucide-react';

interface RoadmapProps {
  onOpenSearch: () => void;
}

export const Roadmap: React.FC<RoadmapProps> = ({ onOpenSearch }) => {
  const { expandAllModules, overallStats } = useRevision();
  const [filterModule, setFilterModule] = useState<string>('all');

  const filteredModules = useMemo(() => {
    if (filterModule === 'all') return MODULES_DATA;
    return MODULES_DATA.filter(m => m.id === filterModule);
  }, [filterModule]);

  return (
    <div style={{ padding: '36px 0 60px 0' }}>
      <div className="container">
        {/* Roadmap Page Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-secondary)',
              marginBottom: '6px'
            }}>
              <Layers size={14} color="var(--color-green)" />
              <span>Comprehensive 15-Module Curriculum</span>
            </div>

            <h1 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--color-charcoal)',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>
              100-Day Developer Revision Roadmap
            </h1>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-secondary)',
              maxWidth: '680px',
              lineHeight: 1.5
            }}>
              Follow the day-by-day technical curriculum from Core Java, Concurrency, and Spring Boot to React, System Design, AI/ML, and RAG Agents.
            </p>
          </div>

          {/* Quick Actions: Expand/Collapse All & Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => expandAllModules(true)}
              className="btn btn-secondary btn-sm"
              title="Expand all 15 modules"
            >
              <ChevronDown size={14} /> Expand All
            </button>

            <button
              onClick={() => expandAllModules(false)}
              className="btn btn-secondary btn-sm"
              title="Collapse all 15 modules"
            >
              <ChevronUp size={14} /> Collapse All
            </button>

            <button
              onClick={onOpenSearch}
              className="btn btn-primary btn-sm"
            >
              <Search size={14} /> Search Topics
            </button>
          </div>
        </div>

        {/* Overall Progress Ribbon */}
        <div className="card-elevated" style={{
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          backgroundColor: 'var(--color-offwhite)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Progress
              </span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-charcoal)' }}>
                {overallStats.completedDaysCount} <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#777' }}>/ 100 Days</span>
              </div>
            </div>

            <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--color-border)' }} />

            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Subtopics
              </span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-charcoal)' }}>
                {overallStats.completedSubtopicsCount} <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#777' }}>/ {overallStats.totalSubtopics}</span>
              </div>
            </div>

            <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--color-border)' }} />

            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Status
              </span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: overallStats.overallPercent > 0 ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
                {overallStats.overallPercent}% Complete
              </div>
            </div>
          </div>

          {/* Module Selector Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
              Jump to Module:
            </span>
            <select
              value={filterModule}
              onChange={(e) => setFilterModule(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FFFFFF',
                fontSize: '0.84rem',
                color: 'var(--color-charcoal)',
                fontWeight: 600,
                outline: 'none'
              }}
            >
              <option value="all">All 15 Modules (100 Days)</option>
              {MODULES_DATA.map(m => (
                <option key={m.id} value={m.id}>
                  {m.letter}. {m.name} (Days {m.startDay}–{m.endDay})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Modules List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredModules.map(module => {
            const moduleDays = DAYS_DATA.filter(d => d.moduleId === module.id);
            return (
              <ModuleCard
                key={module.id}
                module={module}
                days={moduleDays}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
