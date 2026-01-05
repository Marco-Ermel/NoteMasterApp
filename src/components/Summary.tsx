import { ArrowLeft, Download, Highlighter, BookOpen, Lightbulb } from 'lucide-react';

interface SummaryProps {
  note: any;
  onNavigate: (screen: string) => void;
}

export function Summary({ note, onNavigate }: SummaryProps) {
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
            <span 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                color: '#6A9BA6'
              }}
            >
              22. Nov 2025
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
            Zusammenfassung: Organische Chemie - Alkane
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
            KI-generierte Zusammenfassung deiner Notiz
          </p>
        </div>

        {/* Summary Content */}
        <div className="space-y-8 mb-8">
          {/* Kurzfassung */}
          <div 
            className="p-8 rounded-xl border-2"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6',
            }}
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '140%',
                color: '#012326'
              }}
            >
              📝 Kurzfassung
            </h2>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#012326'
              }}
            >
              Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich Einfachbindungen zwischen den Kohlenstoffatomen. 
              Sie folgen der Summenformel C<sub>n</sub>H<sub>2n+2</sub> und sind aufgrund ihrer unpolaren Struktur wasserunlöslich. 
              Ihre Reaktionsträgheit macht sie zu stabilen Verbindungen, weshalb sie auch als "gesättigt" bezeichnet werden. 
              Die wichtigsten Vertreter sind Methan, Ethan, Propan und Butan.
            </p>
          </div>

          {/* Wichtige Punkte */}
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
              ⭐ Wichtige Punkte
            </h2>
            <div className="grid gap-4">
              {[
                'Alkane enthalten nur C-C-Einfachbindungen und sind daher gesättigt',
                'Summenformel: CnH2n+2 für unverzweigte Alkane',
                'Unpolare Moleküle → lösen sich nicht in Wasser',
                'Siedepunkt steigt mit zunehmender Kettenlänge',
                'Hauptreaktion: Radikalische Substitution (z.B. Halogenierung)',
                'Methan (CH₄) ist das einfachste und häufigste Alkan'
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#A3C9D9',
                  }}
                >
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#6A9BA6',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#FFFFFF'
                    }}
                  >
                    {index + 1}
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
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Begriffe */}
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
              📚 Wichtige Begriffe
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { term: 'Gesättigt', definition: 'Nur Einfachbindungen zwischen C-Atomen' },
                { term: 'Kohlenwasserstoff', definition: 'Verbindung aus nur Kohlenstoff und Wasserstoff' },
                { term: 'Unpolar', definition: 'Keine elektrische Ladungsverteilung im Molekül' },
                { term: 'Radikalische Substitution', definition: 'Reaktionsmechanismus mit freien Radikalen' },
                { term: 'Homologe Reihe', definition: 'Serie von Verbindungen mit gleichem Grundaufbau' },
                { term: 'Siedepunkt', definition: 'Temperatur, bei der ein Stoff vom flüssigen in gasförmigen Zustand übergeht' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#A3C9D9',
                  }}
                >
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: '#012326'
                    }}
                  >
                    {item.term}
                  </h4>
                  <p 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '145%',
                      color: '#346C73'
                    }}
                  >
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => alert('PDF Export wird vorbereitet...\n\nIn einer vollständigen Version würde hier die Zusammenfassung als PDF heruntergeladen werden.')}
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
            Als PDF exportieren
          </button>

          <button
            onClick={() => onNavigate('cheatsheet')}
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
            <Highlighter size={20} />
            Zum Spickzettel hinzufügen
          </button>

          <button
            onClick={() => onNavigate('studyplan')}
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
            <BookOpen size={20} />
            Lernplan erstellen
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
          Zusammenfassungs-Info
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
              Umfang
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              85% komprimiert
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
              Lesezeit
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              3 Minuten
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
              Wichtige Begriffe
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#012326'
              }}
            >
              6 identifiziert
            </p>
          </div>
        </div>

        <div 
          className="p-5 rounded-xl mb-8"
          style={{ backgroundColor: '#346C73' }}
        >
          <div className="flex items-start gap-3 mb-3">
            <Lightbulb size={20} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 
                className="mb-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#FFFFFF'
                }}
              >
                KI-Tipp
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
                Diese Zusammenfassung deckt die Grundlagen ab. Für Prüfungen solltest du auch Isomerie und Nomenklatur lernen.
              </p>
            </div>
          </div>
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
          Ähnliche Notizen
        </h3>
        <div className="space-y-3">
          {['Alkene und Alkine', 'Isomerie bei Alkanen', 'Nomenklatur Kohlenwasserstoffe'].map((title) => (
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
