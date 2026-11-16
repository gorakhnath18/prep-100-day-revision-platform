import React, { useState } from 'react';
import { RevisionProvider, useRevision } from './context/RevisionContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Roadmap } from './components/Roadmap';
import { DayDetail } from './components/DayDetail';
import { DSASection } from './components/DSASection';
import { SearchBar } from './components/SearchBar';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeView } = useRevision();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main style={{ flex: 1 }}>
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'roadmap' && <Roadmap onOpenSearch={() => setSearchOpen(true)} />}
        {activeView === 'day-detail' && <DayDetail />}
        {activeView === 'dsa' && <DSASection />}
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RevisionProvider>
      <AppContent />
    </RevisionProvider>
  );
};

export default App;
