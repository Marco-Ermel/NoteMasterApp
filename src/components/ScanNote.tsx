import { Camera, Smartphone } from 'lucide-react';

interface ScanNoteProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function ScanNote({ onNavigate }: ScanNoteProps) {
  const handleStartScan = () => {
    // Simulate scanning - in real app this would activate camera
    setTimeout(() => {
      // Navigate to scan result with mock data
      onNavigate('scan-result', {
        title: 'Photosynthese - Grundlagen',
        recognizedText: `Photosynthese - Grundlagen

Die Photosynthese ist der Prozess, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln.

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
- Grundlage der Nahrungskette`
      });
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Header */}
      <div 
        className="p-6 border-b"
        style={{ 
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E5E5'
        }}
      >
        <h1 
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '140%',
            color: '#012326'
          }}
        >
          Notiz scannen
        </h1>
        <p 
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '145%',
            color: '#6A9BA6'
          }}
        >
          Halte deine handschriftliche Notiz im sichtbaren Bereich
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-12">
        <div className="w-full max-w-3xl">
          {/* Scanner Preview Area */}
          <div 
            className="rounded-2xl p-8 mb-8"
            style={{ 
              backgroundColor: '#E8F0F2',
              border: '2px solid #A3C9D9'
            }}
          >
            <div 
              className="flex items-center justify-center rounded-xl"
              style={{ 
                backgroundColor: '#FFFFFF',
                minHeight: '500px',
                border: '4px solid #6A9BA6',
                position: 'relative'
              }}
            >
              {/* Phone/Document Icon */}
              <div className="text-center">
                <div 
                  className="inline-flex items-center justify-center mb-6 rounded-xl"
                  style={{ 
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#F5F5F5',
                    border: '2px solid #A3C9D9'
                  }}
                >
                  <Smartphone size={60} style={{ color: '#6A9BA6' }} />
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#6A9BA6'
                  }}
                >
                  Kamera-Vorschau wird hier angezeigt
                </p>
              </div>
            </div>
          </div>

          {/* Scan Button */}
          <div className="text-center">
            <button
              onClick={handleStartScan}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:shadow-lg"
              style={{
                backgroundColor: '#6A9BA6',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
              }}
            >
              <Camera size={24} />
              Scan starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
