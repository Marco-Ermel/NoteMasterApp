import { Plus, CheckSquare, Clock, Star } from 'lucide-react';
import { FileText } from 'lucide-react';

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const recentNotes = [
    { id: 1, title: 'Organische Chemie - Kapitel 3', date: '22. Nov 2025', preview: 'Alkane, Alkene und Alkine - Strukturformeln und Reaktionen...' },
    { id: 2, title: 'Geschichte - Weimarer Republik', date: '21. Nov 2025', preview: 'Entstehung, Krisenjahre und kulturelle Blüte der 1920er Jahre...' },
    { id: 3, title: 'Mathematik - Integralrechnung', date: '20. Nov 2025', preview: 'Stammfunktionen, bestimmte und unbestimmte Integrale...' },
  ];

  const recommendedSummaries = [
    { id: 1, title: 'Organische Chemie Zusammenfassung', subject: 'Chemie', progress: 85 },
    { id: 2, title: 'Weimarer Republik Spickzettel', subject: 'Geschichte', progress: 100 },
  ];

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-12">
        <div className="mb-12">
          <h1 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            SmartNote – Dein digitaler Lernassistent
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
            Digitalisiere deine handschriftlichen Notizen und erstelle automatisch Zusammenfassungen, Spickzettel und Lernpläne
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => onNavigate('editor')}
            className="p-8 rounded-xl border-2 transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6',
            }}
          >
            <Plus size={32} style={{ color: '#012326', marginBottom: '16px' }} />
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#012326',
                marginBottom: '8px'
              }}
            >
              Neue Notiz erstellen
            </h3>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                color: '#103B40'
              }}
            >
              Erstelle eine neue digitale Notiz am PC
            </p>
          </button>

          <button
            onClick={() => onNavigate('notes')}
            className="p-8 rounded-xl border-2 transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#346C73',
            }}
          >
            <FileText size={32} style={{ color: '#346C73', marginBottom: '16px' }} />
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#012326',
                marginBottom: '8px'
              }}
            >
              Notizen anzeigen
            </h3>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                color: '#103B40'
              }}
            >
              Alle deine gespeicherten Notizen
            </p>
          </button>

          <button
            onClick={() => onNavigate('tasks')}
            className="p-8 rounded-xl border-2 transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#346C73',
            }}
          >
            <CheckSquare size={32} style={{ color: '#346C73', marginBottom: '16px' }} />
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#012326',
                marginBottom: '8px'
              }}
            >
              Aufgaben ansehen
            </h3>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                color: '#103B40'
              }}
            >
              Verwalte deine Lernaufgaben
            </p>
          </button>
        </div>

        {/* Recent Notes */}
        <div className="mb-10">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Zuletzt bearbeitet
          </h2>
          <div className="space-y-4">
            {recentNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => onNavigate('editor')}
                className="w-full p-6 rounded-xl border transition-all hover:shadow-md text-left"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#A3C9D9',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '140%',
                      color: '#012326'
                    }}
                  >
                    {note.title}
                  </h3>
                  <Clock size={16} style={{ color: '#6A9BA6' }} />
                </div>
                <p 
                  className="mb-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                    color: '#346C73'
                  }}
                >
                  {note.preview}
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '140%',
                    color: '#6A9BA6'
                  }}
                >
                  {note.date}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Summaries */}
        <div>
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Empfohlene Zusammenfassungen
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {recommendedSummaries.map((summary) => (
              <button
                key={summary.id}
                onClick={() => onNavigate('summary')}
                className="p-6 rounded-xl border transition-all hover:shadow-md text-left"
                style={{
                  backgroundColor: '#A3C9D9',
                  borderColor: '#6A9BA6',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
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
                    {summary.subject}
                  </span>
                </div>
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '140%',
                    color: '#012326'
                  }}
                >
                  {summary.title}
                </h3>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#FFFFFF' }}>
                  <div 
                    className="h-full rounded-full" 
                    style={{ 
                      width: `${summary.progress}%`,
                      backgroundColor: '#346C73'
                    }}
                  />
                </div>
              </button>
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
          Heute anstehend
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                Chemie Kapitel 4 lernen
              </span>
            </div>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                color: '#346C73'
              }}
            >
              Fällig: Heute, 18:00
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                Geschichte Essay überarbeiten
              </span>
            </div>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                color: '#346C73'
              }}
            >
              Fällig: Morgen
            </p>
          </div>
        </div>

        <div className="mt-10">
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
            Statistik
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#103B40'
                }}
              >
                Notizen diese Woche
              </span>
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                12
              </span>
            </div>
            <div className="flex justify-between">
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#103B40'
                }}
              >
                Erledigte Aufgaben
              </span>
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                8/15
              </span>
            </div>
            <div className="flex justify-between">
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#103B40'
                }}
              >
                Lernzeit heute
              </span>
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#012326'
                }}
              >
                2h 45min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}