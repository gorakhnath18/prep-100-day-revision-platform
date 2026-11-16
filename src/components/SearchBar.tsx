import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRevision } from '../context/RevisionContext';
import { DAYS_DATA, DayPlan, SubtopicItem } from '../data/roadmapData';
import { Search, X, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'day' | 'subtopic';
  dayNumber: number;
  dayTitle: string;
  moduleName: string;
  moduleLetter: string;
  subtopicTitle?: string;
  subtopicId?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const { openDay } = useRevision();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keydown listener for Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search results calculation
  const results = useMemo<SearchResult[]>(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const matches: SearchResult[] = [];
    const maxResults = 30;

    // Check if user typed day number e.g. "45" or "day 45"
    const dayNumberMatch = trimmed.match(/^(?:day\s*)?(\d{1,3})$/);
    if (dayNumberMatch) {
      const num = parseInt(dayNumberMatch[1], 10);
      const foundDay = DAYS_DATA.find(d => d.dayNumber === num);
      if (foundDay) {
        matches.push({
          type: 'day',
          dayNumber: foundDay.dayNumber,
          dayTitle: foundDay.title,
          moduleName: foundDay.moduleName,
          moduleLetter: foundDay.moduleLetter
        });
      }
    }

    for (const day of DAYS_DATA) {
      if (matches.length >= maxResults) break;

      const dayTitleMatch = day.title.toLowerCase().includes(trimmed);
      const moduleMatch = day.moduleName.toLowerCase().includes(trimmed);

      if (dayTitleMatch || moduleMatch) {
        // Avoid duplicate if already added
        if (!matches.some(m => m.type === 'day' && m.dayNumber === day.dayNumber)) {
          matches.push({
            type: 'day',
            dayNumber: day.dayNumber,
            dayTitle: day.title,
            moduleName: day.moduleName,
            moduleLetter: day.moduleLetter
          });
        }
      }

      // Check subtopics
      for (const sub of day.subtopics) {
        if (matches.length >= maxResults) break;
        if (sub.title.toLowerCase().includes(trimmed)) {
          matches.push({
            type: 'subtopic',
            dayNumber: day.dayNumber,
            dayTitle: day.title,
            moduleName: day.moduleName,
            moduleLetter: day.moduleLetter,
            subtopicTitle: sub.title,
            subtopicId: sub.id
          });
        }
      }
    }

    return matches;
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    openDay(result.dayNumber);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(2px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 16px 20px 16px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-dropdown)',
        border: '1px solid var(--color-border)',
        width: '100%',
        maxWidth: '640px',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'fadeIn 0.15s ease'
      }}>
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid var(--color-border)',
          gap: '12px'
        }}>
          <Search size={20} color="var(--color-secondary)" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search days (e.g. 'Day 45'), topics, or subtopics..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              color: 'var(--color-charcoal)',
              backgroundColor: 'transparent'
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ color: '#888888', padding: '4px' }}
            >
              <X size={16} />
            </button>
          )}
          <button 
            onClick={onClose}
            style={{
              fontSize: '0.76rem',
              padding: '3px 8px',
              backgroundColor: 'var(--color-offwhite)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              color: 'var(--color-secondary)',
              fontWeight: 600
            }}
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div style={{
          overflowY: 'auto',
          padding: '8px 0',
          maxHeight: '440px'
        }}>
          {query.trim() === '' ? (
            <div style={{
              padding: '36px 20px',
              textAlign: 'center',
              color: 'var(--color-secondary)',
              fontSize: '0.9rem'
            }}>
              <p style={{ fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '4px' }}>
                Search across all 100 days and 1,028 subtopics
              </p>
              <p style={{ fontSize: '0.82rem' }}>
                Try searching for "Docker", "JVM", "Spring Boot", "React Hooks", "LLD", or "RAG"
              </p>
            </div>
          ) : results.length === 0 ? (
            <div style={{
              padding: '36px 20px',
              textAlign: 'center',
              color: 'var(--color-secondary)',
              fontSize: '0.9rem'
            }}>
              No topics found matching "{query}"
            </div>
          ) : (
            results.map((res, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${res.dayNumber}-${res.subtopicId || 'day'}-${idx}`}
                  onClick={() => handleSelect(res)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    padding: '10px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    backgroundColor: isSelected ? 'var(--color-offwhite)' : 'transparent',
                    borderLeft: isSelected ? '3px solid var(--color-charcoal)' : '3px solid transparent',
                    transition: 'background-color 0.1s ease'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--color-charcoal)',
                        backgroundColor: '#EBEBE8',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        Day {String(res.dayNumber).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontSize: '0.78rem',
                        color: 'var(--color-secondary)',
                        fontWeight: 500
                      }}>
                        {res.moduleLetter}. {res.moduleName}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '0.92rem',
                      fontWeight: res.type === 'day' ? 700 : 500,
                      color: 'var(--color-charcoal)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {res.type === 'subtopic' ? (
                        <span>
                          <strong style={{ fontWeight: 600 }}>{res.subtopicTitle}</strong>
                          <span style={{ color: '#888888', fontSize: '0.82rem', marginLeft: '8px' }}>
                            (in {res.dayTitle})
                          </span>
                        </span>
                      ) : (
                        <span>{res.dayTitle}</span>
                      )}
                    </div>
                  </div>

                  <ArrowRight size={15} color={isSelected ? 'var(--color-charcoal)' : '#BBB'} style={{ flexShrink: 0, marginLeft: '12px' }} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div style={{
          padding: '10px 20px',
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-offwhite)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.74rem',
          color: 'var(--color-secondary)'
        }}>
          <div style={{ display: 'flex', gap: '14px' }}>
            <span><kbd>↑↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>esc</kbd> Close</span>
          </div>
          <span>{results.length} result{results.length === 1 ? '' : 's'}</span>
        </div>
      </div>
    </div>
  );
};
