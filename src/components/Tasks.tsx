import { Plus, Filter, Calendar, AlertCircle } from 'lucide-react';

interface TasksProps {
  onNavigate: (screen: string) => void;
}

export function Tasks({ onNavigate }: TasksProps) {
  const tasks = [
    {
      id: 1,
      title: 'Chemie Kapitel 4 lernen',
      subject: 'Chemie',
      dueDate: '22. Nov 2025',
      priority: 'Hoch',
      completed: false,
      description: 'Alkene und Alkine durcharbeiten'
    },
    {
      id: 2,
      title: 'Geschichte Essay überarbeiten',
      subject: 'Geschichte',
      dueDate: '23. Nov 2025',
      priority: 'Hoch',
      completed: false,
      description: 'Feedback vom Lehrer einarbeiten'
    },
    {
      id: 3,
      title: 'Mathematik Übungsaufgaben',
      subject: 'Mathematik',
      dueDate: '24. Nov 2025',
      priority: 'Mittel',
      completed: false,
      description: 'Seite 156-160 bearbeiten'
    },
    {
      id: 4,
      title: 'Biologie Präsentation vorbereiten',
      subject: 'Biologie',
      dueDate: '25. Nov 2025',
      priority: 'Mittel',
      completed: false,
      description: 'Folien zu Zellorganellen erstellen'
    },
    {
      id: 5,
      title: 'Physik Hausaufgaben',
      subject: 'Physik',
      dueDate: '26. Nov 2025',
      priority: 'Niedrig',
      completed: false,
      description: 'Aufgaben 1-5 lösen'
    },
    {
      id: 6,
      title: 'Chemie Notizen digitalisieren',
      subject: 'Chemie',
      dueDate: '20. Nov 2025',
      priority: 'Niedrig',
      completed: true,
      description: 'Alle handschriftlichen Notizen scannen'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Hoch': return '#346C73';
      case 'Mittel': return '#6A9BA6';
      case 'Niedrig': return '#A3C9D9';
      default: return '#A3C9D9';
    }
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 
              className="mb-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '140%',
                color: '#012326'
              }}
            >
              Aufgaben
            </h1>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '145%',
                color: '#346C73'
              }}
            >
              {activeTasks.length} offene Aufgaben, {completedTasks.length} erledigt
            </p>
          </div>
          
          <button
            className="flex items-center gap-2 px-6 py-4 rounded-xl transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#346C73',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
          >
            <Plus size={20} />
            Neue Aufgabe hinzufügen
          </button>
        </div>

        {/* Filter Bar */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl mb-8"
          style={{
            backgroundColor: '#A3C9D9',
          }}
        >
          <Filter size={20} style={{ color: '#012326' }} />
          <select
            className="px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            <option>Alle Fächer</option>
            <option>Chemie</option>
            <option>Mathematik</option>
            <option>Geschichte</option>
            <option>Biologie</option>
            <option>Physik</option>
          </select>
          <select
            className="px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            <option>Alle Prioritäten</option>
            <option>Hoch</option>
            <option>Mittel</option>
            <option>Niedrig</option>
          </select>
          <select
            className="px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            <option>Nach Fälligkeit</option>
            <option>Nach Priorität</option>
            <option>Nach Fach</option>
          </select>
        </div>

        {/* Active Tasks */}
        <div className="mb-10">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Offene Aufgaben
          </h2>
          <div className="space-y-4">
            {activeTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-5 p-6 rounded-xl border-2 transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#A3C9D9',
                }}
              >
                <input 
                  type="checkbox" 
                  className="w-6 h-6 mt-1 cursor-pointer"
                  style={{ accentColor: '#346C73' }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="px-3 py-1 rounded"
                      style={{
                        backgroundColor: '#6A9BA6',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '13px',
                        color: '#FFFFFF'
                      }}
                    >
                      {task.subject}
                    </span>
                    <div 
                      className="px-3 py-1 rounded flex items-center gap-2"
                      style={{
                        backgroundColor: getPriorityColor(task.priority),
                      }}
                    >
                      {task.priority === 'Hoch' && <AlertCircle size={14} style={{ color: '#FFFFFF' }} />}
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: '13px',
                          color: '#FFFFFF'
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#6A9BA6' }}>
                      <Calendar size={14} />
                      <span 
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                        }}
                      >
                        {task.dueDate}
                      </span>
                    </div>
                  </div>
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '140%',
                      color: '#012326'
                    }}
                  >
                    {task.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                      color: '#346C73'
                    }}
                  >
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Tasks */}
        <div>
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Erledigte Aufgaben
          </h2>
          <div className="space-y-4">
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-5 p-6 rounded-xl border opacity-60"
                style={{
                  backgroundColor: '#A3C9D9',
                  borderColor: '#6A9BA6',
                }}
              >
                <input 
                  type="checkbox" 
                  checked
                  className="w-6 h-6 mt-1 cursor-pointer"
                  style={{ accentColor: '#346C73' }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="px-3 py-1 rounded"
                      style={{
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '13px',
                        color: '#012326'
                      }}
                    >
                      {task.subject}
                    </span>
                    <div className="flex items-center gap-2" style={{ color: '#103B40' }}>
                      <Calendar size={14} />
                      <span 
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                        }}
                      >
                        {task.dueDate}
                      </span>
                    </div>
                  </div>
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '140%',
                      color: '#012326',
                      textDecoration: 'line-through'
                    }}
                  >
                    {task.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                      color: '#103B40'
                    }}
                  >
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Info Panel */}
      <div className="w-80 p-8 border-l" style={{ backgroundColor: '#A3C9D9', borderColor: '#6A9BA6' }}>
        <h3 
          className="mb-6"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '140%',
            color: '#012326'
          }}
        >
          Aufgaben nach Fach
        </h3>
        <div className="space-y-3 mb-8">
          {[
            { subject: 'Chemie', count: 2 },
            { subject: 'Mathematik', count: 1 },
            { subject: 'Geschichte', count: 1 },
            { subject: 'Biologie', count: 1 },
            { subject: 'Physik', count: 1 },
          ].map((item) => (
            <div 
              key={item.subject}
              className="flex justify-between items-center p-4 rounded-lg"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                {item.subject}
              </span>
              <span 
                className="px-3 py-1 rounded-full"
                style={{
                  backgroundColor: '#346C73',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#FFFFFF'
                }}
              >
                {item.count}
              </span>
            </div>
          ))}
        </div>

        <h3 
          className="mb-4"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '140%',
            color: '#012326'
          }}
        >
          Diese Woche fällig
        </h3>
        <div className="space-y-3 mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                color: '#012326'
              }}
            >
              Heute
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#346C73'
              }}
            >
              1 Aufgabe
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                color: '#012326'
              }}
            >
              Diese Woche
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#346C73'
              }}
            >
              4 Aufgaben
            </p>
          </div>
        </div>

        <div 
          className="p-5 rounded-xl"
          style={{ backgroundColor: '#346C73' }}
        >
          <h4 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: '#FFFFFF'
            }}
          >
            Produktivitäts-Tipp
          </h4>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '145%',
              color: '#FFFFFF'
            }}
          >
            Beginne mit den wichtigsten Aufgaben am Morgen, wenn deine Konzentration am höchsten ist.
          </p>
        </div>
      </div>
    </div>
  );
}
