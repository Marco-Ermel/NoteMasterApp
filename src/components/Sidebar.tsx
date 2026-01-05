import { Home, ScanLine, FileText, CheckSquare, FileCheck, BookOpen, Archive, Star, Presentation } from 'lucide-react';

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'notes', label: 'Notizen', icon: FileText },
    { id: 'tasks', label: 'Aufgaben', icon: CheckSquare },
    { id: 'summary', label: 'Zusammenfassungen', icon: FileCheck, requiresNote: true },
    { id: 'cheatsheet', label: 'Spickzettel', icon: BookOpen, requiresNote: true },
    { id: 'studyplan', label: 'Lernpläne', icon: BookOpen },
    { id: 'archive', label: 'Archiv', icon: Archive },
    { id: 'story', label: 'Story-Szenen', icon: Presentation },
  ];
  
  const handleNavigation = (itemId: string, requiresNote?: boolean) => {
    // For items that require a note, navigate to notes first to select one
    if (requiresNote && !['summary', 'cheatsheet'].includes(activeScreen)) {
      onNavigate('notes');
    } else {
      onNavigate(itemId);
    }
  };

  return (
    <div 
      className="w-72 flex flex-col border-r"
      style={{ backgroundColor: '#103B40' }}
    >
      <div className="p-8 border-b" style={{ borderColor: '#346C73' }}>
        <h1 
          className="flex items-center gap-3"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '140%',
            color: '#FFFFFF'
          }}
        >
          <ScanLine size={32} />
          SmartNote
        </h1>
      </div>

      <nav className="flex-1 p-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id || 
            (item.id === 'notes' && ['scan', 'scan-result', 'editor'].includes(activeScreen));
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.requiresNote)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-lg mb-2 transition-all"
              style={{
                backgroundColor: isActive ? '#346C73' : 'transparent',
                color: isActive ? '#FFFFFF' : '#A3C9D9',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '140%',
              }}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t" style={{ borderColor: '#346C73' }}>
        <button
          onClick={() => onNavigate('editor')}
          className="w-full px-6 py-4 rounded-lg transition-all"
          style={{
            backgroundColor: '#6A9BA6',
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '140%',
          }}
        >
          + Neue Notiz erstellen
        </button>
      </div>
    </div>
  );
}