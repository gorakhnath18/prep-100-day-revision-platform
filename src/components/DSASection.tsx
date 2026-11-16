import React, { useState } from 'react';
import { useRevision } from '../context/RevisionContext';
import { DSA_CATEGORIES, DsaTopic } from '../data/dsaData';
import { RevisionStatusSelector } from './RevisionStatusSelector';
import { RevisionStatus } from '../data/roadmapData';
import { 
  Code2, 
  Check, 
  CheckCircle2, 
  Sparkles, 
  Filter, 
  Search, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';

export const DSASection: React.FC = () => {
  const { 
    state, 
    toggleDsaCheck, 
    setDsaStatus, 
    dsaStats 
  } = useRevision();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategoryCollapse = (catId: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const filteredCategories = DSA_CATEGORIES.map(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }

    const filteredTopics = cat.topics.filter(topic => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.description.toLowerCase().includes(q) ||
        topic.patterns.some(p => p.toLowerCase().includes(q))
      );
    });

    if (filteredTopics.length === 0) return null;
    return { ...cat, topics: filteredTopics };
  }).filter(Boolean) as typeof DSA_CATEGORIES;

  return (
    <div style={{ padding: '36px 0 60px 0' }}>
      <div className="container">
        {/* Header Banner */}
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
              <Code2 size={14} color="var(--color-green)" />
              <span>Parallel Interview Revision Track</span>
            </div>

            <h1 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--color-charcoal)',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>
              Data Structures & Algorithms Track
            </h1>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-secondary)',
              maxWidth: '680px',
              lineHeight: 1.5
            }}>
              Revise algorithmic patterns and problem archetypes in parallel with your 100-day backend, system design, and AI roadmap.
            </p>
          </div>

          {/* DSA Overall Progress Card */}
          <div className="card-3d" style={{
            padding: '16px 20px',
            minWidth: '220px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--color-secondary)',
              marginBottom: '6px',
              textTransform: 'uppercase'
            }}>
              <span>DSA Progress</span>
              <span style={{ color: dsaStats.percent > 0 ? 'var(--color-green)' : 'var(--color-charcoal)' }}>
                {dsaStats.percent}%
              </span>
            </div>

            <div style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--color-charcoal)',
              marginBottom: '8px'
            }}>
              {dsaStats.completedCount} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#777' }}>/ {dsaStats.totalTopics} solved</span>
            </div>

            <div className="progress-bar-container" style={{ height: '7px' }}>
              <div 
                className="progress-bar-fill" 
                style={{ 
                  width: `${dsaStats.percent}%`,
                  backgroundColor: 'var(--color-green)'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="card-elevated" style={{
          padding: '14px 18px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          backgroundColor: 'var(--color-offwhite)'
        }}>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                fontSize: '0.8rem',
                fontWeight: activeCategory === 'all' ? 700 : 500,
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: activeCategory === 'all' ? 'var(--color-charcoal)' : '#FFFFFF',
                color: activeCategory === 'all' ? '#FFFFFF' : 'var(--color-charcoal)',
                border: '1px solid',
                borderColor: activeCategory === 'all' ? 'var(--color-charcoal)' : 'var(--color-border)',
                cursor: 'pointer'
              }}
            >
              All Categories
            </button>
            {DSA_CATEGORIES.map(cat => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: isSelected ? 700 : 500,
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isSelected ? 'var(--color-charcoal)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--color-charcoal)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--color-charcoal)' : 'var(--color-border)',
                    cursor: 'pointer'
                  }}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div style={{ position: 'relative', width: '220px' }}>
            <Search size={14} color="#888" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="text"
              placeholder="Filter DSA topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 10px 6px 30px',
                fontSize: '0.82rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: '#FFFFFF',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Categories and Topics List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredCategories.map(cat => {
            const isCollapsed = !!collapsedCategories[cat.id];
            const catCompleted = cat.topics.filter(t => !!state.dsaChecked[t.id]).length;
            const catPercent = Math.round((catCompleted / cat.topics.length) * 100);

            return (
              <div 
                key={cat.id}
                className="card-3d"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)'
                }}
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategoryCollapse(cat.id)}
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    borderBottom: isCollapsed ? 'none' : '1px solid var(--color-border)',
                    userSelect: 'none'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                        {cat.title}
                      </h3>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-secondary)' }}>
                        ({catCompleted}/{cat.topics.length})
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', marginTop: '2px' }}>
                      {cat.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '100px', textAlign: 'right' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                        {catPercent}%
                      </span>
                      <div className="progress-bar-container" style={{ height: '5px', marginTop: '3px' }}>
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${catPercent}%`, backgroundColor: 'var(--color-green)' }} 
                        />
                      </div>
                    </div>

                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--color-offwhite)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </div>

                {/* Topics in Category */}
                {!isCollapsed && (
                  <div style={{
                    padding: '14px 18px',
                    backgroundColor: 'var(--color-offwhite)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {cat.topics.map(topic => {
                      const isChecked = !!state.dsaChecked[topic.id];
                      const status = state.dsaStatuses[topic.id] || (isChecked ? 'revised' : 'not-revised');
                      const isMastered = status === 'mastered';
                      const isComplete = isChecked || isMastered;

                      return (
                        <div
                          key={topic.id}
                          style={{
                            padding: '12px 16px',
                            backgroundColor: isComplete ? '#FAFDFB' : '#FFFFFF',
                            border: '1px solid',
                            borderColor: isComplete ? '#D2E3D7' : 'var(--color-border)',
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '14px',
                            flexWrap: 'wrap'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1, minWidth: '240px' }}>
                            <button
                              type="button"
                              onClick={() => toggleDsaCheck(topic.id)}
                              className={`custom-checkbox ${isComplete ? (isMastered ? 'checked-mastered' : 'checked') : ''}`}
                              style={{ marginTop: '2px' }}
                              aria-label={`Mark ${topic.title} complete`}
                            >
                              {isComplete && <Check size={13} strokeWidth={3} />}
                            </button>

                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                                <span style={{
                                  fontSize: '0.94rem',
                                  fontWeight: 700,
                                  color: isComplete ? 'var(--color-green-dark)' : 'var(--color-charcoal)'
                                }}>
                                  {topic.title}
                                </span>

                                <span style={{
                                  fontSize: '0.68rem',
                                  fontWeight: 700,
                                  padding: '1px 6px',
                                  borderRadius: '3px',
                                  backgroundColor: topic.difficulty === 'Easy' ? '#EFF6F1' : topic.difficulty === 'Medium' ? '#FAF4EA' : '#FBF0F0',
                                  color: topic.difficulty === 'Easy' ? 'var(--color-green)' : topic.difficulty === 'Medium' ? 'var(--color-status-practice)' : 'var(--color-status-weak)'
                                }}>
                                  {topic.difficulty}
                                </span>
                              </div>

                              <p style={{ fontSize: '0.82rem', color: 'var(--color-secondary)', lineHeight: 1.4, marginBottom: '6px' }}>
                                {topic.description}
                              </p>

                              {/* Patterns */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                {topic.patterns.map((pat, pIdx) => (
                                  <span key={pIdx} style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 500,
                                    backgroundColor: 'var(--color-offwhite)',
                                    color: '#555555',
                                    border: '1px solid var(--color-border)',
                                    padding: '1px 6px',
                                    borderRadius: '3px'
                                  }}>
                                    {pat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Status selector */}
                          <div style={{ flexShrink: 0 }}>
                            <RevisionStatusSelector
                              status={status}
                              onChange={(newStatus) => setDsaStatus(topic.id, newStatus)}
                              size="sm"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
