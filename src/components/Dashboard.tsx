import { Camera, FileText, BookOpen, Calendar, Layers, CheckSquare } from 'lucide-react';

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#103B40' }}
    >
      <div className="w-full max-w-6xl p-12">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-16">
          <div 
            className="flex items-center justify-center mb-8 rounded-2xl"
            style={{ 
              width: '96px',
              height: '96px',
              backgroundColor: '#346C73'
            }}
          >
            <FileText size={48} style={{ color: '#FFFFFF' }} />
          </div>
          <h1 
            className="mb-4 text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '140%',
              color: '#FFFFFF'
            }}
          >
            SmartNote
          </h1>
          <p 
            className="text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '145%',
              color: '#A3C9D9'
            }}
          >
            Dein digitaler Lernassistent für intelligente Notizen
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Notiz scannen - Large Card (Left, Row 1) */}
          <button
            onClick={() => onNavigate('scan')}
            className="p-10 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#6A9BA6',
              minHeight: '200px'
            }}
          >
            <div 
              className="flex items-center justify-center mb-6 rounded-xl"
              style={{ 
                width: '72px',
                height: '72px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <Camera size={36} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Notiz scannen
            </h3>
          </button>

          {/* Notizen anzeigen - Small Card (Right, Row 1) */}
          <button
            onClick={() => onNavigate('notes')}
            className="p-8 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#103B40',
              border: '2px solid #346C73'
            }}
          >
            <div 
              className="flex items-center justify-center mb-4 rounded-xl"
              style={{ 
                width: '56px',
                height: '56px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <FileText size={28} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Notizen anzeigen
            </h3>
          </button>

          {/* Zusammenfassungen - Card (Left, Row 2) */}
          <button
            onClick={() => onNavigate('summary')}
            className="p-8 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#6A9BA6'
            }}
          >
            <div 
              className="flex items-center justify-center mb-4 rounded-xl"
              style={{ 
                width: '56px',
                height: '56px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <BookOpen size={28} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Zusammenfassungen
            </h3>
          </button>

          {/* Lernpläne - Card (Right, Row 2) */}
          <button
            onClick={() => onNavigate('studyplan')}
            className="p-8 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#A3C9D9'
            }}
          >
            <div 
              className="flex items-center justify-center mb-4 rounded-xl"
              style={{ 
                width: '56px',
                height: '56px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <Calendar size={28} style={{ color: '#103B40' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#103B40',
                textAlign: 'center'
              }}
            >
              Lernpläne
            </h3>
          </button>

          {/* Spickzettel - Card (Left, Row 3) */}
          <button
            onClick={() => onNavigate('cheatsheet')}
            className="p-8 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#A3C9D9'
            }}
          >
            <div 
              className="flex items-center justify-center mb-4 rounded-xl"
              style={{ 
                width: '56px',
                height: '56px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <Layers size={28} style={{ color: '#103B40' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#103B40',
                textAlign: 'center'
              }}
            >
              Spickzettel
            </h3>
          </button>

          {/* Aufgaben - Card (Right, Row 3) */}
          <button
            onClick={() => onNavigate('tasks')}
            className="p-8 rounded-2xl transition-all hover:shadow-2xl flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#103B40',
              border: '2px solid #346C73'
            }}
          >
            <div 
              className="flex items-center justify-center mb-4 rounded-xl"
              style={{ 
                width: '56px',
                height: '56px',
                backgroundColor: '#FFFFFF33'
              }}
            >
              <CheckSquare size={28} style={{ color: '#FFFFFF' }} />
            </div>
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Aufgaben
            </h3>
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '140%',
              color: '#6A9BA6'
            }}
          >
            Scanne handschriftliche Notizen • Erstelle Zusammenfassungen • Generiere Lernpläne
          </p>
        </div>
      </div>
    </div>
  );
}