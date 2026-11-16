import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { DAYS_DATA, MODULES_DATA, DayPlan, ModulePlan, RevisionStatus } from '../data/roadmapData';
import { DSA_CATEGORIES, DsaTopic } from '../data/dsaData';

const STORAGE_KEY = 'prep_revision_v1';

export type AppView = 'dashboard' | 'roadmap' | 'day-detail' | 'dsa';

interface RevisionState {
  checkedItems: Record<string, boolean>;
  itemStatuses: Record<string, RevisionStatus>;
  completedDays: Record<number, boolean>;
  lastOpenedDay: number;
  dsaChecked: Record<string, boolean>;
  dsaStatuses: Record<string, RevisionStatus>;
  expandedModules: Record<string, boolean>;
}

interface RevisionContextType {
  state: RevisionState;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  selectedDayNumber: number;
  setSelectedDayNumber: (day: number) => void;
  
  // Actions
  toggleItemCheck: (id: string, dayNumber?: number) => void;
  setItemStatus: (id: string, status: RevisionStatus, dayNumber?: number) => void;
  toggleDayComplete: (dayNumber: number) => void;
  resetDay: (dayNumber: number) => void;
  toggleDsaCheck: (id: string) => void;
  setDsaStatus: (id: string, status: RevisionStatus) => void;
  toggleModuleExpand: (moduleId: string) => void;
  expandAllModules: (expand: boolean) => void;
  openDay: (dayNumber: number) => void;
  exportData: () => void;
  importData: (jsonStr: string) => boolean;
  resetAllData: () => void;

  // Computed metrics
  overallStats: {
    totalDays: 100;
    completedDaysCount: number;
    remainingDaysCount: number;
    totalSubtopics: number;
    completedSubtopicsCount: number;
    overallPercent: number;
    masteredCount: number;
    revisedCount: number;
    needsPracticeCount: number;
    weakCount: number;
    notRevisedCount: number;
  };
  dsaStats: {
    totalTopics: number;
    completedCount: number;
    percent: number;
  };
  getDayStats: (dayNumber: number) => {
    total: number;
    completed: number;
    percent: number;
    isComplete: boolean;
  };
  getModuleStats: (moduleId: string) => {
    dayCount: number;
    completedDays: number;
    totalSubtopics: number;
    completedSubtopics: number;
    percent: number;
  };
}

const defaultState: RevisionState = {
  checkedItems: {},
  itemStatuses: {},
  completedDays: {},
  lastOpenedDay: 1,
  dsaChecked: {},
  dsaStatuses: {},
  expandedModules: {
    'module-a': true
  }
};

const RevisionContext = createContext<RevisionContextType | undefined>(undefined);

export const RevisionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<RevisionState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...defaultState,
          ...parsed,
          checkedItems: parsed.checkedItems || {},
          itemStatuses: parsed.itemStatuses || {},
          completedDays: parsed.completedDays || {},
          lastOpenedDay: typeof parsed.lastOpenedDay === 'number' && parsed.lastOpenedDay >= 1 && parsed.lastOpenedDay <= 100 ? parsed.lastOpenedDay : 1,
          dsaChecked: parsed.dsaChecked || {},
          dsaStatuses: parsed.dsaStatuses || {},
          expandedModules: parsed.expandedModules || { 'module-a': true }
        };
      }
    } catch (err) {
      console.error('Failed to parse stored PREP state from localStorage:', err);
    }
    return defaultState;
  });

  const [activeView, setActiveView] = useState<AppView>('dashboard');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(state.lastOpenedDay || 1);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Failed to save PREP state to localStorage:', err);
    }
  }, [state]);

  const toggleItemCheck = (id: string, _dayNumber?: number) => {
    setState(prev => {
      const isCurrentlyChecked = !!prev.checkedItems[id];
      const newChecked = !isCurrentlyChecked;
      
      const updatedChecked = { ...prev.checkedItems, [id]: newChecked };
      const currentStatus = prev.itemStatuses[id] || 'not-revised';
      
      let newStatus: RevisionStatus = currentStatus;
      if (newChecked) {
        // If checking and status was not revised, upgrade to revised
        if (currentStatus === 'not-revised') {
          newStatus = 'revised';
        }
      } else {
        // If unchecking, set to not-revised unless user specifically wants weak/needs-practice
        if (currentStatus === 'revised' || currentStatus === 'mastered') {
          newStatus = 'not-revised';
        }
      }

      return {
        ...prev,
        checkedItems: updatedChecked,
        itemStatuses: { ...prev.itemStatuses, [id]: newStatus }
      };
    });
  };

  const setItemStatus = (id: string, status: RevisionStatus, _dayNumber?: number) => {
    setState(prev => {
      const shouldBeChecked = status === 'revised' || status === 'mastered';
      const shouldBeUnchecked = status === 'not-revised';
      
      const newChecked = shouldBeChecked ? true : shouldBeUnchecked ? false : !!prev.checkedItems[id];

      return {
        ...prev,
        itemStatuses: { ...prev.itemStatuses, [id]: status },
        checkedItems: { ...prev.checkedItems, [id]: newChecked }
      };
    });
  };

  const toggleDayComplete = (dayNumber: number) => {
    const day = DAYS_DATA.find(d => d.dayNumber === dayNumber);
    if (!day) return;

    setState(prev => {
      const allSubChecked = day.subtopics.length > 0 && day.subtopics.every(s => prev.checkedItems[s.id]);
      const targetCheck = !allSubChecked;

      const newCheckedItems = { ...prev.checkedItems };
      const newItemStatuses = { ...prev.itemStatuses };

      day.subtopics.forEach(s => {
        newCheckedItems[s.id] = targetCheck;
        if (targetCheck) {
          if (!newItemStatuses[s.id] || newItemStatuses[s.id] === 'not-revised') {
            newItemStatuses[s.id] = 'revised';
          }
        } else {
          newItemStatuses[s.id] = 'not-revised';
        }
      });

      return {
        ...prev,
        checkedItems: newCheckedItems,
        itemStatuses: newItemStatuses,
        completedDays: {
          ...prev.completedDays,
          [dayNumber]: targetCheck
        }
      };
    });
  };

  const resetDay = (dayNumber: number) => {
    const day = DAYS_DATA.find(d => d.dayNumber === dayNumber);
    if (!day) return;

    setState(prev => {
      const newChecked = { ...prev.checkedItems };
      const newStatuses = { ...prev.itemStatuses };
      const newCompletedDays = { ...prev.completedDays };

      day.subtopics.forEach(s => {
        delete newChecked[s.id];
        delete newStatuses[s.id];
      });
      delete newCompletedDays[dayNumber];

      return {
        ...prev,
        checkedItems: newChecked,
        itemStatuses: newStatuses,
        completedDays: newCompletedDays
      };
    });
  };

  const toggleDsaCheck = (id: string) => {
    setState(prev => {
      const isChecked = !!prev.dsaChecked[id];
      const nextChecked = !isChecked;
      const currentStatus = prev.dsaStatuses[id] || 'not-revised';
      let nextStatus = currentStatus;

      if (nextChecked && currentStatus === 'not-revised') {
        nextStatus = 'revised';
      } else if (!nextChecked && (currentStatus === 'revised' || currentStatus === 'mastered')) {
        nextStatus = 'not-revised';
      }

      return {
        ...prev,
        dsaChecked: { ...prev.dsaChecked, [id]: nextChecked },
        dsaStatuses: { ...prev.dsaStatuses, [id]: nextStatus }
      };
    });
  };

  const setDsaStatus = (id: string, status: RevisionStatus) => {
    setState(prev => {
      const isChecked = status === 'revised' || status === 'mastered' ? true : status === 'not-revised' ? false : !!prev.dsaChecked[id];
      return {
        ...prev,
        dsaStatuses: { ...prev.dsaStatuses, [id]: status },
        dsaChecked: { ...prev.dsaChecked, [id]: isChecked }
      };
    });
  };

  const toggleModuleExpand = (moduleId: string) => {
    setState(prev => ({
      ...prev,
      expandedModules: {
        ...prev.expandedModules,
        [moduleId]: !prev.expandedModules[moduleId]
      }
    }));
  };

  const expandAllModules = (expand: boolean) => {
    setState(prev => {
      const expanded: Record<string, boolean> = {};
      MODULES_DATA.forEach(m => {
        expanded[m.id] = expand;
      });
      return { ...prev, expandedModules: expanded };
    });
  };

  const openDay = (dayNumber: number) => {
    const validDay = Math.max(1, Math.min(100, dayNumber));
    setSelectedDayNumber(validDay);
    setState(prev => ({ ...prev, lastOpenedDay: validDay }));
    setActiveView('day-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `prep-100-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        setState({
          checkedItems: parsed.checkedItems || {},
          itemStatuses: parsed.itemStatuses || {},
          completedDays: parsed.completedDays || {},
          lastOpenedDay: typeof parsed.lastOpenedDay === 'number' ? parsed.lastOpenedDay : 1,
          dsaChecked: parsed.dsaChecked || {},
          dsaStatuses: parsed.dsaStatuses || {},
          expandedModules: parsed.expandedModules || { 'module-a': true }
        });
        return true;
      }
    } catch (e) {
      console.error('Import error:', e);
    }
    return false;
  };

  const resetAllData = () => {
    setState(defaultState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  // Helper stats for day
  const getDayStats = (dayNumber: number) => {
    const day = DAYS_DATA.find(d => d.dayNumber === dayNumber);
    if (!day || day.subtopics.length === 0) {
      return { total: 0, completed: 0, percent: 0, isComplete: false };
    }
    const total = day.subtopics.length;
    const completed = day.subtopics.filter(s => !!state.checkedItems[s.id]).length;
    const percent = Math.round((completed / total) * 100);
    const isComplete = percent === 100 || !!state.completedDays[dayNumber];
    return { total, completed, percent, isComplete };
  };

  // Helper stats for module
  const getModuleStats = (moduleId: string) => {
    const moduleDays = DAYS_DATA.filter(d => d.moduleId === moduleId);
    const dayCount = moduleDays.length;
    let completedDays = 0;
    let totalSubtopics = 0;
    let completedSubtopics = 0;

    moduleDays.forEach(d => {
      const dayStats = getDayStats(d.dayNumber);
      if (dayStats.isComplete) completedDays++;
      totalSubtopics += dayStats.total;
      completedSubtopics += dayStats.completed;
    });

    const percent = totalSubtopics > 0 ? Math.round((completedSubtopics / totalSubtopics) * 100) : 0;
    return { dayCount, completedDays, totalSubtopics, completedSubtopics, percent };
  };

  // Overall Stats
  const overallStats = useMemo(() => {
    let completedSubtopicsCount = 0;
    let masteredCount = 0;
    let revisedCount = 0;
    let needsPracticeCount = 0;
    let weakCount = 0;
    let totalSubtopics = 0;
    let completedDaysCount = 0;

    DAYS_DATA.forEach(d => {
      const dStats = getDayStats(d.dayNumber);
      if (dStats.isComplete) completedDaysCount++;
      totalSubtopics += d.subtopics.length;

      d.subtopics.forEach(s => {
        if (state.checkedItems[s.id]) {
          completedSubtopicsCount++;
        }
        const st = state.itemStatuses[s.id];
        if (st === 'mastered') masteredCount++;
        else if (st === 'revised') revisedCount++;
        else if (st === 'needs-practice') needsPracticeCount++;
        else if (st === 'weak') weakCount++;
      });
    });

    const notRevisedCount = Math.max(0, totalSubtopics - (masteredCount + revisedCount + needsPracticeCount + weakCount));
    const overallPercent = totalSubtopics > 0 ? Math.round((completedSubtopicsCount / totalSubtopics) * 100) : 0;

    return {
      totalDays: 100 as const,
      completedDaysCount,
      remainingDaysCount: Math.max(0, 100 - completedDaysCount),
      totalSubtopics,
      completedSubtopicsCount,
      overallPercent,
      masteredCount,
      revisedCount,
      needsPracticeCount,
      weakCount,
      notRevisedCount
    };
  }, [state]);

  // DSA Stats
  const dsaStats = useMemo(() => {
    let total = 0;
    let completed = 0;

    DSA_CATEGORIES.forEach(cat => {
      cat.topics.forEach(t => {
        total++;
        if (state.dsaChecked[t.id]) completed++;
      });
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { totalTopics: total, completedCount: completed, percent };
  }, [state.dsaChecked]);

  return (
    <RevisionContext.Provider
      value={{
        state,
        activeView,
        setActiveView,
        selectedDayNumber,
        setSelectedDayNumber,
        toggleItemCheck,
        setItemStatus,
        toggleDayComplete,
        resetDay,
        toggleDsaCheck,
        setDsaStatus,
        toggleModuleExpand,
        expandAllModules,
        openDay,
        exportData,
        importData,
        resetAllData,
        overallStats,
        dsaStats,
        getDayStats,
        getModuleStats
      }}
    >
      {children}
    </RevisionContext.Provider>
  );
};

export const useRevision = (): RevisionContextType => {
  const context = useContext(RevisionContext);
  if (!context) {
    throw new Error('useRevision must be used within a RevisionProvider');
  }
  return context;
};
