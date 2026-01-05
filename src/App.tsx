import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ScanNote } from './components/ScanNote';
import { ScanResult } from './components/ScanResult';
import { NotesList } from './components/NotesList';
import { NoteEditor } from './components/NoteEditor';
import { Summary } from './components/Summary';
import { CheatSheet } from './components/CheatSheet';
import { StudyPlan } from './components/StudyPlan';
import { Tasks } from './components/Tasks';
import { Archive } from './components/Archive';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [scanData, setScanData] = useState<any>(null);

  const handleNavigate = (screen: string, data?: any) => {
    if (data) {
      if (screen === 'scan-result') {
        setScanData(data);
      } else if (screen === 'summary' || screen === 'cheatsheet' || screen === 'studyplan') {
        setSelectedNote(data);
      }
    }
    setActiveScreen(screen);
  };

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'scan':
        return <ScanNote onNavigate={handleNavigate} />;
      case 'scan-result':
        return <ScanResult data={scanData} onNavigate={handleNavigate} />;
      case 'notes':
        return <NotesList onNavigate={handleNavigate} onNoteSelect={setSelectedNote} />;
      case 'editor':
        return <NoteEditor note={selectedNote} onNavigate={handleNavigate} />;
      case 'summary':
        return <Summary note={selectedNote} onNavigate={handleNavigate} />;
      case 'cheatsheet':
        return <CheatSheet note={selectedNote} onNavigate={handleNavigate} />;
      case 'studyplan':
        return <StudyPlan onNavigate={handleNavigate} />;
      case 'tasks':
        return <Tasks onNavigate={handleNavigate} />;
      case 'archive':
        return <Archive onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  // Don't show sidebar on dashboard
  const showSidebar = activeScreen !== 'dashboard';

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {showSidebar && <Sidebar activeScreen={activeScreen} onNavigate={handleNavigate} />}
      <div className="flex-1 overflow-auto">
        {renderMainContent()}
      </div>
    </div>
  );
}
