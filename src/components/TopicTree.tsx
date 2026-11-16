import React, { useState, useMemo } from 'react';
import { SubtopicItem, RevisionStatus } from '../data/roadmapData';
import { TopicItem } from './TopicItem';
import { Filter, SlidersHorizontal, CheckSquare, Square } from 'lucide-react';

interface TopicTreeProps {
  subtopics: SubtopicItem[];
  checkedItems: Record<string, boolean>;
  itemStatuses: Record<string, RevisionStatus>;
  onToggleCheck: (id: string) => void;
  onStatusChange: (id: string, status: RevisionStatus) => void;
  dayNumber: number;
}

export const TopicTree: React.FC<TopicTreeProps> = ({
  subtopics,
  checkedItems,
  itemStatuses,
  onToggleCheck,
  onStatusChange,
  dayNumber
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | RevisionStatus>('all');

  const filteredSubtopics = useMemo(() => {
    if (statusFilter === 'all') return subtopics;
    return subtopics.filter(s => {
      const st = itemStatuses[s.id] || (checkedItems[s.id] ? 'revised' : 'not-revised');
      return st === statusFilter;
    });
  }, [subtopics, statusFilter, itemStatuses, checkedItems]);

  const filterOptions: { id: 'all' | RevisionStatus; label: string }[] = [
    { id: 'all', label: 'All Topics' },
    { id: 'not-revised', label: 'Not Revised' },
    { id: 'revised', label: 'Revised' },
    { id: 'needs-practice', label: 'Needs Practice' },
    { id: 'weak', label: 'Weak' },
    { id: 'mastered', label: 'Mastered' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Filter toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '10px 14px',
        backgroundColor: 'var(--color-offwhite)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-sm)'
      }}>
        {/* Status Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.76rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: 'var(--color-secondary)',
            marginRight: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Filter size={12} /> Filter:
          </span>
          {filterOptions.map(opt => {
            const isSelected = statusFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setStatusFilter(opt.id)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 700 : 500,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isSelected ? 'var(--color-charcoal)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-charcoal)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-charcoal)' : 'var(--color-border)',
                  transition: 'all 0.12s ease'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
          Showing <strong>{filteredSubtopics.length}</strong> of {subtopics.length} items
        </div>
      </div>

      {/* Subtopics List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filteredSubtopics.length === 0 ? (
          <div style={{
            padding: '32px 16px',
            textAlign: 'center',
            backgroundColor: 'var(--color-offwhite)',
            borderRadius: 'var(--radius-sm)',
            border: '1px dashed var(--color-border)',
            color: 'var(--color-secondary)',
            fontSize: '0.88rem'
          }}>
            No subtopics match the selected filter <strong>"{statusFilter}"</strong>.
          </div>
        ) : (
          filteredSubtopics.map(subtopic => (
            <TopicItem
              key={subtopic.id}
              subtopic={subtopic}
              isChecked={!!checkedItems[subtopic.id]}
              status={itemStatuses[subtopic.id] || (checkedItems[subtopic.id] ? 'revised' : 'not-revised')}
              onToggleCheck={onToggleCheck}
              onStatusChange={onStatusChange}
              dayNumber={dayNumber}
            />
          ))
        )}
      </div>
    </div>
  );
};
