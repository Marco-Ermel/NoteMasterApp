import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { NotesList } from './components/NotesList';
import { NoteEditor } from './components/NoteEditor';
import { Summary } from './components/Summary';
import { CheatSheet } from './components/CheatSheet';
import { StudyPlan } from './components/StudyPlan';
import { Tasks } from './components/Tasks';
import { Archive } from './components/Archive';
import { StoryScenes } from './components/StoryScenes';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [selectedNote, setSelectedNote] = useState<any>(null);

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveScreen} />;
      case 'notes':
        return <NotesList onNavigate={setActiveScreen} onNoteSelect={setSelectedNote} />;
      case 'editor':
        return <NoteEditor note={selectedNote} onNavigate={setActiveScreen} />;
      case 'summary':
        return <Summary note={selectedNote} onNavigate={setActiveScreen} />;
      case 'cheatsheet':
        return <CheatSheet note={selectedNote} onNavigate={setActiveScreen} />;
      case 'studyplan':
        return <StudyPlan onNavigate={setActiveScreen} />;
      case 'tasks':
        return <Tasks onNavigate={setActiveScreen} />;
      case 'archive':
        return <Archive onNavigate={setActiveScreen} />;
      case 'story':
        return <StoryScenes />;
      default:
        return <Dashboard onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar activeScreen={activeScreen} onNavigate={setActiveScreen} />
      <div className="flex-1 overflow-auto">
        {renderMainContent()}
      </div>
    </div>
  );
}
