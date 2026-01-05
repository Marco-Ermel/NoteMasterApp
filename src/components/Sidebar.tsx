import { Home, FileText, CheckSquare, FileCheck, Layers, Calendar, Archive as ArchiveIcon } from 'lucide-react';

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'notes', label: 'Notizen', icon: FileText },
    { id: 'summary', label: 'Zusammenfassungen', icon: FileCheck },
    { id: 'cheatsheet', label: 'Spickzettel', icon: Layers },
    { id: 'studyplan', label: 'Lernpläne', icon: Calendar },
    { id: 'tasks', label: 'Aufgaben', icon: CheckSquare },
  ];

  return (
    <div 
      className="w-72 flex flex-col border-r"
      style={{ backgroundColor: '#103B40', borderColor: '#346C73' }}
    >
      <div className="p-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className="w-full"
        >
          <h1 
            className="flex items-center gap-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '140%',
              color: '#FFFFFF'
            }}
          >
            SmartNote
          </h1>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '140%',
              color: '#A3C9D9',
              marginTop: '4px'
            }}
          >
            Dein Lernassistent
          </p>
        </button>
      </div>

      <nav className="flex-1 p-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id || 
            (item.id === 'notes' && ['scan', 'scan-result', 'editor'].includes(activeScreen));
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-lg mb-2 transition-all"
              style={{
                backgroundColor: isActive ? '#346C73' : 'transparent',
                color: isActive ? '#FFFFFF' : '#A3C9D9',
                fontFamily: 'Inter, sans-serif',
                fontWeight: isActive ? 600 : 500,
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
          onClick={() => onNavigate('scan')}
          className="w-full px-6 py-4 rounded-lg transition-all hover:shadow-lg"
          style={{
            backgroundColor: '#6A9BA6',
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '140%',
          }}
        >
          + Neue Notiz hinzufügen
        </button>
      </div>
    </div>
  );
}