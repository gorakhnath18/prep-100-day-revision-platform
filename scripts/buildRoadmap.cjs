const fs = require('fs');
const path = require('path');

const text = fs.readFileSync('Pasted text.txt', 'utf8');
const lines = text.split(/\r?\n/);

const modules = [];
let currentModule = null;
let currentDay = null;
const days = [];

// Helper to provide sub-subtopics / concepts for rich hierarchy
function generateSubSubtopics(dayNum, title, subtopicTitle) {
  const points = [];
  const lower = subtopicTitle.toLowerCase();
  
  if (lower.includes('vs') || lower.includes('difference')) {
    points.push('Core behavioral differences & use cases');
    points.push('Performance, memory, and syntax comparison');
    points.push('Interview tricky questions & edge cases');
  } else if (lower.includes('architecture') || lower.includes('lifecycle')) {
    points.push('Internal workflow & step-by-step phases');
    points.push('Key components & execution environment');
    points.push('Debugging and monitoring checkpoints');
  } else if (lower.includes('complexity') || lower.includes('performance')) {
    points.push('Time complexity analysis (Best / Average / Worst)');
    points.push('Space complexity and memory footprint');
    points.push('Optimization techniques and trade-offs');
  } else if (lower.includes('security') || lower.includes('jwt') || lower.includes('auth')) {
    points.push('Threat model & attack vectors');
    points.push('Token lifecycle, signing, and validation');
    points.push('Best practices and configuration rules');
  } else if (lower.includes('spring') || lower.includes('jpa') || lower.includes('hibernate')) {
    points.push('Annotation configuration & container management');
    points.push('Underlying abstraction & bean lifecycle');
    points.push('Common pitfalls and N+1 / transaction issues');
  } else if (lower.includes('docker') || lower.includes('kubernetes')) {
    points.push('Declarative manifest syntax & specs');
    points.push('Networking, storage, and runtime state');
    points.push('Production orchestration best practices');
  } else if (lower.includes('react') || lower.includes('hook') || lower.includes('state')) {
    points.push('Render cycle triggers & dependency arrays');
    points.push('State immutability and memory leaks');
    points.push('Component composition patterns');
  } else if (lower.includes('llm') || lower.includes('rag') || lower.includes('agent')) {
    points.push('Mathematical foundation & pipeline design');
    points.push('Prompt tokens, context window & retrieval accuracy');
    points.push('Production evaluation & guardrail verification');
  } else if (lower.includes('design') || lower.includes('pattern') || lower.includes('solid')) {
    points.push('Intent and problem statement addressed');
    points.push('UML class diagram and coupling reduction');
    points.push('Real-world enterprise application example');
  } else {
    points.push('Key principles and foundational definition');
    points.push('Code implementation and syntax conventions');
    points.push('Practical scenario and edge-case handling');
  }
  return points;
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  const modMatch = line.match(/^([A-O])\.\s+(.+?)\s+[—–-]\s+Days?\s+(\d+)[–-](\d+)/i);
  if (modMatch) {
    currentModule = {
      id: 'module-' + modMatch[1].toLowerCase(),
      letter: modMatch[1].toUpperCase(),
      name: modMatch[2].trim(),
      startDay: parseInt(modMatch[3], 10),
      endDay: parseInt(modMatch[4], 10),
      dayCount: parseInt(modMatch[4], 10) - parseInt(modMatch[3], 10) + 1
    };
    modules.push(currentModule);
    continue;
  }
  
  const dayMatch = line.match(/^Day\s+(\d+)\s*:\s*(.+)$/i);
  if (dayMatch) {
    const dayNum = parseInt(dayMatch[1], 10);
    currentDay = {
      dayNumber: dayNum,
      title: dayMatch[2].trim(),
      moduleId: currentModule ? currentModule.id : '',
      moduleLetter: currentModule ? currentModule.letter : '',
      moduleName: currentModule ? currentModule.name : '',
      subtopics: []
    };
    days.push(currentDay);
    continue;
  }
  
  if (line.startsWith('-') || line.startsWith('*')) {
    const subText = line.substring(1).trim();
    if (currentDay) {
      const subId = 'd' + currentDay.dayNumber + '-sub-' + (currentDay.subtopics.length + 1);
      const subSubs = generateSubSubtopics(currentDay.dayNumber, currentDay.title, subText);
      currentDay.subtopics.push({
        id: subId,
        title: subText,
        dayNumber: currentDay.dayNumber,
        subSubtopics: subSubs
      });
    }
  }
}

fs.mkdirSync('src/data', { recursive: true });

const tsContent = `// PREP 100-Day Software Engineering Revision Platform
// Authoritative Syllabus Data generated from Pasted text.txt
// 15 Modules, 100 Days, 1028 Subtopics

export type RevisionStatus = 'not-revised' | 'revised' | 'needs-practice' | 'weak' | 'mastered';

export interface SubtopicItem {
  id: string;
  title: string;
  dayNumber: number;
  subSubtopics: string[];
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  moduleId: string;
  moduleLetter: string;
  moduleName: string;
  subtopics: SubtopicItem[];
}

export interface ModulePlan {
  id: string;
  letter: string;
  name: string;
  startDay: number;
  endDay: number;
  dayCount: number;
}

export const MODULES_DATA: ModulePlan[] = ${JSON.stringify(modules, null, 2)};

export const DAYS_DATA: DayPlan[] = ${JSON.stringify(days, null, 2)};
`;

fs.writeFileSync('src/data/roadmapData.ts', tsContent, 'utf8');
console.log('Generated src/data/roadmapData.ts successfully!');
console.log('Modules count:', modules.length);
console.log('Days count:', days.length);
console.log('Subtopics count:', days.reduce((acc, d) => acc + d.subtopics.length, 0));
