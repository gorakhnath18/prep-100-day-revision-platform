import React from 'react';
import { useRevision } from '../context/RevisionContext';
import { Layers, ShieldCheck, BookOpen, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveView, overallStats } = useRevision();

  return (
    <footer style={{
      backgroundColor: 'var(--color-offwhite)',
      borderTop: '1px solid var(--color-border)',
      padding: '48px 0 36px 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '36px'
        }}>
          {/* Brand & Mission */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img 
                src="/assets/prep-icon.svg" 
                alt="PREP Logo" 
                style={{ width: '32px', height: '32px', borderRadius: '6px' }} 
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--color-charcoal)' }}>
                PREP
              </span>
            </div>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--color-secondary)',
              lineHeight: 1.6,
              marginBottom: '16px'
            }}>
              A personal, disciplined 100-day software engineering revision platform. Structured for comprehensive mastery across backend architecture, cloud, frontend, and AI systems.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              color: 'var(--color-green-dark)',
              backgroundColor: 'var(--color-green-light)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600
            }}>
              <ShieldCheck size={14} color="var(--color-green)" />
              <span>100% Local-First • Auto-Saved in Browser</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <h5 style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-charcoal)',
                marginBottom: '12px'
              }}>
                Navigation
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--color-secondary)' }}>
                <li>
                  <button onClick={() => setActiveView('dashboard')} style={{ color: 'inherit' }}>
                    Dashboard Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveView('roadmap')} style={{ color: 'inherit' }}>
                    100-Day Roadmap
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveView('dsa')} style={{ color: 'inherit' }}>
                    Parallel DSA Track
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h5 style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-charcoal)',
                marginBottom: '12px'
              }}>
                Curriculum Scope
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--color-secondary)' }}>
                <li>15 Engineering Modules</li>
                <li>100 Daily Roadmaps</li>
                <li>1,028 Detailed Subtopics</li>
                <li>47 Algorithmic DSA Topics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--color-secondary)'
        }}>
          <div>
            © {new Date().getFullYear()} PREP. Learn. Build. Master.
          </div>
          <div>
            Built with modern React, TypeScript & Vite.
          </div>
        </div>
      </div>
    </footer>
  );
};
