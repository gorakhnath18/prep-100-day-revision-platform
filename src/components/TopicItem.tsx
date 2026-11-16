import React, { useState } from 'react';
import { SubtopicItem, RevisionStatus } from '../data/roadmapData';
import { RevisionStatusSelector } from './RevisionStatusSelector';
import { Check, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';

interface TopicItemProps {
  subtopic: SubtopicItem;
  isChecked: boolean;
  status: RevisionStatus;
  onToggleCheck: (id: string) => void;
  onStatusChange: (id: string, status: RevisionStatus) => void;
  dayNumber: number;
}

export const TopicItem: React.FC<TopicItemProps> = ({
  subtopic,
  isChecked,
  status,
  onToggleCheck,
  onStatusChange,
  dayNumber
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedSubSubs, setCheckedSubSubs] = useState<Record<number, boolean>>({});

  const hasSubSubs = subtopic.subSubtopics && subtopic.subSubtopics.length > 0;

  const toggleSubSub = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckedSubSubs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const isMastered = status === 'mastered';
  const isCompleted = isChecked || isMastered;

  return (
    <div 
      style={{
        border: '1px solid',
        borderColor: isCompleted ? '#D0E0D5' : 'var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: isCompleted ? '#F7FAF8' : '#FFFFFF',
        transition: 'all 0.15s ease',
        overflow: 'hidden'
      }}
    >
      {/* Main Subtopic Row */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          gap: '12px',
          cursor: hasSubSubs ? 'pointer' : 'default'
        }}
        onClick={() => {
          if (hasSubSubs) setIsExpanded(!isExpanded);
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
          {/* Independent Checkbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCheck(subtopic.id);
            }}
            className={`custom-checkbox ${isCompleted ? (isMastered ? 'checked-mastered' : 'checked') : ''}`}
            aria-label={`Mark ${subtopic.title} as completed`}
          >
            {isCompleted && <Check size={13} strokeWidth={3} />}
          </button>

          {/* Subtopic Title */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              fontSize: '0.92rem',
              fontWeight: 500,
              color: isCompleted ? 'var(--color-green-dark)' : 'var(--color-charcoal)',
              textDecoration: isCompleted ? 'none' : 'none',
              lineHeight: 1.4
            }}>
              {subtopic.title}
            </span>
          </div>
        </div>

        {/* Right Controls: Status Selector & Expand Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
          <RevisionStatusSelector
            status={status || (isChecked ? 'revised' : 'not-revised')}
            onChange={(newStatus) => onStatusChange(subtopic.id, newStatus)}
            size="sm"
          />

          {hasSubSubs && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '26px',
                height: '26px',
                borderRadius: '4px',
                color: 'var(--color-secondary)',
                backgroundColor: isExpanded ? 'var(--color-offwhite)' : 'transparent'
              }}
              title={isExpanded ? 'Collapse sub-concepts' : 'Expand sub-concepts'}
              aria-label="Toggle Sub-concepts"
            >
              {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
            </button>
          )}
        </div>
      </div>

      {/* Expanded Sub-subtopics (Hierarchy Level 4) */}
      {isExpanded && hasSubSubs && (
        <div style={{
          padding: '10px 16px 14px 44px',
          borderTop: '1px solid',
          borderColor: isCompleted ? '#E0ECE4' : 'var(--color-border)',
          backgroundColor: isCompleted ? '#F0F6F2' : 'var(--color-offwhite)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--color-secondary)',
            marginBottom: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={12} color="var(--color-green)" />
            <span>Key Revision Breakdown</span>
          </div>

          {subtopic.subSubtopics.map((concept, cIdx) => {
            const isSubChecked = !!checkedSubSubs[cIdx];
            return (
              <div 
                key={cIdx}
                onClick={(e) => toggleSubSub(cIdx, e)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '9px',
                  cursor: 'pointer',
                  padding: '4px 0'
                }}
              >
                <div 
                  className={`custom-checkbox ${isSubChecked ? 'checked' : ''}`}
                  style={{ width: '16px', height: '16px', marginTop: '2px' }}
                >
                  {isSubChecked && <Check size={11} strokeWidth={3} />}
                </div>
                <span style={{
                  fontSize: '0.84rem',
                  color: isSubChecked ? 'var(--color-green-dark)' : 'var(--color-charcoal)',
                  lineHeight: 1.4
                }}>
                  {concept}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
