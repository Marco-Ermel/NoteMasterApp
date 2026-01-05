import { ArrowLeft, Download, Edit, FileText } from 'lucide-react';

interface CheatSheetProps {
  note: any;
  onNavigate: (screen: string) => void;
}

export function CheatSheet({ note, onNavigate }: CheatSheetProps) {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-12">
        <button
          onClick={() => onNavigate('notes')}
          className="flex items-center gap-2 mb-8 transition-all"
          style={{
            color: '#346C73',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
          }}
        >
          <ArrowLeft size={20} />
          Zurück zu Notizen
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: '#6A9BA6',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#FFFFFF'
              }}
            >
              Chemie
            </span>
          </div>
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
            Spickzettel: Alkane
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
            Kompakte Übersicht für schnelles Lernen
          </p>
        </div>

        {/* Cheat Sheet Content */}
        <div 
          className="max-w-4xl p-10 rounded-2xl border-4"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#346C73',
          }}
        >
          {/* Title Section */}
          <div 
            className="text-center pb-6 mb-8 border-b-2"
            style={{ borderColor: '#A3C9D9' }}
          >
            <h2 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '140%',
                color: '#012326'
              }}
            >
              ALKANE - Spickzettel
            </h2>
            <p 
              className="mt-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                color: '#6A9BA6'
              }}
            >
              Gesättigte Kohlenwasserstoffe
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Definition */}
              <div>
                <div 
                  className="px-4 py-2 rounded-lg inline-block mb-3"
                  style={{ backgroundColor: '#6A9BA6' }}
                >
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    DEFINITION
                  </h3>
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '150%',
                    color: '#012326'
                  }}
                >
                  Gesättigte Kohlenwasserstoffe mit <strong>nur Einfachbindungen</strong> zwischen C-Atomen
                </p>
              </div>

              {/* Summenformel */}
              <div>
                <div 
                  className="px-4 py-2 rounded-lg inline-block mb-3"
                  style={{ backgroundColor: '#6A9BA6' }}
                >
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    SUMMENFORMEL
                  </h3>
                </div>
                <p 
                  className="text-center p-4 rounded-lg"
                  style={{ 
                    backgroundColor: '#A3C9D9',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#012326'
                  }}
                >
                  C<sub>n</sub>H<sub>2n+2</sub>
                </p>
              </div>

              {/* Eigenschaften */}
              <div>
                <div 
                  className="px-4 py-2 rounded-lg inline-block mb-3"
                  style={{ backgroundColor: '#6A9BA6' }}
                >
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    EIGENSCHAFTEN
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Nur C-C-Einfachbindungen',
                    'Unpolar → wasserunlöslich',
                    'Siedepunkt ↑ mit Kettenlänge',
                    'Reaktionsträge (gesättigt)'
                  ].map((prop, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '150%',
                        color: '#012326'
                      }}
                    >
                      <span style={{ color: '#6A9BA6' }}>•</span>
                      {prop}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Wichtige Alkane */}
              <div>
                <div 
                  className="px-4 py-2 rounded-lg inline-block mb-3"
                  style={{ backgroundColor: '#6A9BA6' }}
                >
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    WICHTIGE ALKANE
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Methan', formula: 'CH₄', note: 'einfachstes' },
                    { name: 'Ethan', formula: 'C₂H₆', note: '2 C-Atome' },
                    { name: 'Propan', formula: 'C₃H₈', note: '3 C-Atome' },
                    { name: 'Butan', formula: 'C₄H₁₀', note: '4 C-Atome' }
                  ].map((alkane, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: '#A3C9D9' }}
                    >
                      <div className="flex justify-between items-center">
                        <span 
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: '15px',
                            color: '#012326'
                          }}
                        >
                          {alkane.name}
                        </span>
                        <span 
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: '#346C73'
                          }}
                        >
                          {alkane.formula}
                        </span>
                      </div>
                      <p 
                        className="mt-1"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          color: '#103B40'
                        }}
                      >
                        {alkane.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reaktionen */}
              <div>
                <div 
                  className="px-4 py-2 rounded-lg inline-block mb-3"
                  style={{ backgroundColor: '#6A9BA6' }}
                >
                  <h3 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    REAKTIONEN
                  </h3>
                </div>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    color: '#012326'
                  }}
                >
                  <strong>Hauptreaktion:</strong><br />
                  Radikalische Substitution<br />
                  (z.B. Halogenierung)
                </p>
              </div>
            </div>
          </div>

          {/* Merksatz */}
          <div 
            className="p-5 rounded-xl text-center"
            style={{ backgroundColor: '#346C73' }}
          >
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#FFFFFF'
              }}
            >
              💡 MERKSATZ: "Alkane sind die Basis der organischen Chemie - stabil und gesättigt"
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => alert('Spickzettel Export wird vorbereitet...\n\nIn einer vollständigen Version würde hier der Spickzettel als PDF heruntergeladen werden.')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#346C73',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
          >
            <Download size={20} />
            Spickzettel exportieren
          </button>

          <button
            onClick={() => alert('Bearbeitungsmodus aktiviert.\n\nHier könntest du den Spickzettel anpassen.')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#346C73',
              color: '#346C73',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
          >
            <Edit size={20} />
            Bearbeiten
          </button>

          <button
            onClick={() => onNavigate('notes')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#346C73',
              color: '#346C73',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
          >
            <FileText size={20} />
            Zurück zur Notiz
          </button>
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
          Spickzettel-Info
        </h3>
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#6A9BA6'
              }}
            >
              Format
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              A4 (210 × 297 mm)
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#6A9BA6'
              }}
            >
              Komprimierung
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              95% reduziert
            </p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#6A9BA6'
              }}
            >
              Lesbarkeit
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              Sehr gut
            </p>
          </div>
        </div>

        <div 
          className="p-5 rounded-xl mb-8"
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
            Export-Optionen
          </h4>
          <button
            onClick={() => alert('Als PDF speichern...\n\nIn einer vollständigen Version würde der Spickzettel als PDF gespeichert werden.')}
            className="w-full px-4 py-3 rounded-lg mb-2 transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Als PDF speichern
          </button>
          <button
            onClick={() => alert('Als Bild exportieren...\n\nIn einer vollständigen Version würde der Spickzettel als Bild exportiert werden.')}
            className="w-full px-4 py-3 rounded-lg mb-2 transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Als Bild exportieren
          </button>
          <button
            onClick={() => alert('Drucken wird vorbereitet...\n\nIn einer vollständigen Version würde der Druckdialog geöffnet werden.')}
            className="w-full px-4 py-3 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Drucken
          </button>
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
          Weitere Spickzettel
        </h3>
        <div className="space-y-3">
          {['Alkene - Ungesättigte KW', 'Chemische Bindungen', 'Reaktionsmechanismen'].map((title) => (
            <button
              key={title}
              onClick={() => onNavigate('notes')}
              className="w-full p-4 rounded-lg text-left transition-all hover:shadow"
              style={{
                backgroundColor: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#012326'
              }}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
