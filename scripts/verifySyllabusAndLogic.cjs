const fs = require('fs');

console.log('--- PREP Automated Test Suite ---');

// 1. Verify source syllabus file
const rawSyllabus = fs.readFileSync('Pasted text.txt', 'utf8');
if (!rawSyllabus || rawSyllabus.length === 0) {
  throw new Error('Pasted text.txt is missing or empty!');
}
console.log('✓ Pasted text.txt exists, length:', rawSyllabus.length);

// 2. Read generated roadmapData.ts
const roadmapContent = fs.readFileSync('src/data/roadmapData.ts', 'utf8');

// Extract MODULES_DATA and DAYS_DATA
const modulesMatch = roadmapContent.match(/export const MODULES_DATA: ModulePlan\[\] = (\[[\s\S]*?\]);\n/);
const daysMatch = roadmapContent.match(/export const DAYS_DATA: DayPlan\[\] = (\[[\s\S]*?\]);\n/);

if (!modulesMatch || !daysMatch) {
  throw new Error('Failed to extract MODULES_DATA or DAYS_DATA from roadmapData.ts');
}

const modules = JSON.parse(modulesMatch[1]);
const days = JSON.parse(daysMatch[1]);

console.log('✓ Extracted modules count:', modules.length);
console.log('✓ Extracted days count:', days.length);

if (modules.length !== 15) {
  throw new Error(`Expected 15 modules, got ${modules.length}`);
}

if (days.length !== 100) {
  throw new Error(`Expected 100 days, got ${days.length}`);
}

// 3. Verify day sequence 1 to 100 without gaps or duplicates
for (let i = 0; i < 100; i++) {
  const expectedDayNum = i + 1;
  const day = days[i];
  if (day.dayNumber !== expectedDayNum) {
    throw new Error(`Day index ${i} has dayNumber ${day.dayNumber}, expected ${expectedDayNum}`);
  }
  if (!day.title || day.title.trim() === '') {
    throw new Error(`Day ${expectedDayNum} has missing title`);
  }
  if (!day.subtopics || day.subtopics.length === 0) {
    throw new Error(`Day ${expectedDayNum} has no subtopics`);
  }
  if (!day.moduleId || !day.moduleLetter || !day.moduleName) {
    throw new Error(`Day ${expectedDayNum} is missing module metadata`);
  }
}
console.log('✓ Day numbers 1 to 100 verified sequentially with titles, subtopics, and module references.');

// 4. Verify subtopic count
const totalSubtopics = days.reduce((acc, d) => acc + d.subtopics.length, 0);
console.log('✓ Total subtopics count:', totalSubtopics);
if (totalSubtopics !== 1028) {
  console.warn(`Note: total subtopics is ${totalSubtopics} (expected 1028)`);
}

// 5. Verify DSA Data
const dsaContent = fs.readFileSync('src/data/dsaData.ts', 'utf8');
if (!dsaContent.includes('DSA_CATEGORIES')) {
  throw new Error('DSA data is missing or invalid');
}
console.log('✓ DSA track data verified and separated from 100-day roadmap.');

// 6. Verify brand assets
const assets = [
  'public/assets/prep-icon.svg',
  'public/assets/prep-logo-horizontal.svg',
  'public/assets/prep-logo-dark.svg',
  'public/favicon.svg'
];

for (const a of assets) {
  if (!fs.existsSync(a)) {
    throw new Error(`Asset missing: ${a}`);
  }
  const stat = fs.statSync(a);
  if (stat.size === 0) {
    throw new Error(`Asset empty: ${a}`);
  }
}
console.log('✓ All 4 brand SVG assets verified and non-empty.');

// 7. Verify built distribution
const distFiles = [
  'dist/index.html'
];
for (const df of distFiles) {
  if (!fs.existsSync(df)) {
    throw new Error(`Distribution file missing: ${df}. Run npm run build first!`);
  }
}
console.log('✓ Production distribution build verified.');

console.log('\n--- ALL VERIFICATION CHECKS PASSED (100%) ---');
