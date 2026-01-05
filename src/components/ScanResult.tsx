import { Save, Sparkles, Layers, Calendar, Image as ImageIcon } from 'lucide-react';

interface ScanData {
  title: string;
  recognizedText: string;
}

interface RecognizedSection {
  type: string;
  label: string;
}

interface ScanResultProps {
  data?: ScanData;
  onNavigate: (screen: string, data?: any) => void;
}

export function ScanResult({ data, onNavigate }: ScanResultProps) {
  const noteTitle = data?.title || 'Photosynthese - Grundlagen';
  const recognizedText = data?.recognizedText || '';
  
  // Mock sections for demonstration - in production this would parse the recognized text
  const sections: RecognizedSection[] = [
    {
      type: 'Überschrift',
      label: 'Photosynthese - Grundlagen'
    },
    {
      type: 'Absatz',
      label: 'Definition und Prozess'
    },
    {
      type: 'Liste',
      label: '4 wichtige Komponenten'
    },
    {
      type: 'Formel',
      label: 'Reaktionsgleichung'
    },
    {
      type: 'Liste',
      label: '2 Hauptphasen'
    },
    {
      type: 'Absatz',
      label: 'Bedeutung'
    }
  ];

  const handleSaveNote = () => {
    alert('Notiz wurde erfolgreich gespeichert!');
    onNavigate('notes');
  };

  const handleCreateSummary = () => {
    onNavigate('summary', { title: noteTitle, content: recognizedText });
  };

  const handleCreateCheatSheet = () => {
    onNavigate('cheatsheet', { title: noteTitle, content: recognizedText });
  };

  const handleCreateStudyPlan = () => {
    onNavigate('studyplan', { title: noteTitle });
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel - Image Preview */}
      <div 
        className="w-80 p-6 border-r flex flex-col"
        style={{ 
          backgroundColor: '#F5F5F5',
          borderColor: '#E5E5E5'
        }}
      >
        <h3 
          className="mb-4 flex items-center gap-2"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            color: '#346C73'
          }}
        >
          <ImageIcon size={20} />
          Bild der Notiz
        </h3>
        
        <div 
          className="flex-1 rounded-xl flex items-center justify-center"
          style={{ 
            backgroundColor: '#FFFFFF',
            border: '2px solid #A3C9D9',
            minHeight: '300px'
          }}
        >
          <div className="text-center p-6">
            <div 
              className="inline-flex items-center justify-center mb-4 rounded-lg"
              style={{ 
                width: '80px',
                height: '80px',
                backgroundColor: '#F5F5F5'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '48px',
                  color: '#A3C9D9'
                }}
              >
                T
              </span>
            </div>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#6A9BA6'
              }}
            >
              Gescannte Notiz
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: '#A3C9D9'
              }}
            >
              Handschrift erkannt
            </p>
          </div>
        </div>

        {/* Recognized Sections */}
        <div className="mt-6">
          <h4 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#346C73',
              marginBottom: '12px'
            }}
          >
            Erkannte Abschnitte
          </h4>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className="p-3 rounded-lg"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E5E5'
                }}
              >
                <div 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: '#6A9BA6',
                    marginBottom: '4px'
                  }}
                >
                  {section.type}
                </div>
                <div 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#012326'
                  }}
                >
                  {section.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div 
          className="p-6 border-b"
          style={{ 
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E5E5'
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1">
              <div 
                className="mb-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#6A9BA6'
                }}
              >
                Texterkennung abgeschlossen
              </div>
              <h1 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '140%',
                  color: '#012326'
                }}
              >
                Titel der Notiz
              </h1>
            </div>
          </div>

          {/* Title Input */}
          <input
            type="text"
            defaultValue={noteTitle}
            className="w-full px-4 py-3 rounded-lg border outline-none mb-4"
            style={{
              backgroundColor: '#F5F5F5',
              borderColor: '#A3C9D9',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#012326'
            }}
            placeholder="z.B. Photosynthese Grundlagen"
          />

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSaveNote}
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:shadow"
              style={{
                backgroundColor: '#103B40',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              <Save size={18} />
              Notiz speichern
            </button>
            <button
              onClick={handleCreateSummary}
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:shadow"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #6A9BA6',
                color: '#103B40',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              <Sparkles size={18} />
              Zusammenfassung erstellen
            </button>
            <button
              onClick={handleCreateCheatSheet}
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:shadow"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #6A9BA6',
                color: '#103B40',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              <Layers size={18} />
              Spickzettel erstellen
            </button>
            <button
              onClick={handleCreateStudyPlan}
              className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:shadow"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #6A9BA6',
                color: '#103B40',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              <Calendar size={18} />
              Lernplan generieren
            </button>
          </div>
        </div>

        {/* Recognized Text Content */}
        <div className="flex-1 overflow-auto p-8" style={{ backgroundColor: '#F5F5F5' }}>
          <div 
            className="p-6 rounded-xl"
            style={{ 
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E5E5'
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#012326'
                }}
              >
                📝
              </span>
              <h3 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '140%',
                  color: '#012326'
                }}
              >
                Erkannter Text
              </h3>
              <span 
                className="ml-auto px-3 py-1 rounded"
                style={{ 
                  backgroundColor: '#E8F0F2',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: '#346C73'
                }}
              >
                507 Zeichen
              </span>
            </div>
            
            <div 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '165%',
                color: '#012326',
                whiteSpace: 'pre-wrap'
              }}
            >
              {recognizedText || `Photosynthese - Grundlagen

Die Photosynthese ist der Prozess, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln. Dabei werden Kohlendioxid und Wasser mit Hilfe von Chlorophyll und Lichtenergie zu Glucose und Sauerstoff verarbeitet.

Wichtige Komponenten:
• Chlorophyll (grüner Farbstoff)
• Lichtenergie (von der Sonne)
• Wasser (H₂O)
• Kohlendioxid (CO₂)

Reaktionsgleichung:
6 CO₂ + 6 H₂O + Lichtenergie → C₆H₁₂O₆ + 6 O₂

Zwei Hauptphasen:
1. Lichtreaktion (im Thylakoid)
2. Dunkelreaktion (im Stroma)

Bedeutung:
- Sauerstoffproduktion für Lebewesen
- Energiegewinnung durch Glucose
- Grundlage der Nahrungskette`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
