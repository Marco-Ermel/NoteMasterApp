import { ImageWithFallback } from './figma/ImageWithFallback';

export function StoryScenes() {
  return (
    <div className="p-12 bg-white">
      <h1 
        className="mb-12 text-center"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '140%',
          color: '#012326'
        }}
      >
        SmartNote in Aktion
      </h1>

      {/* Scene 1: Lena am Desktop */}
      <div className="mb-16">
        <div 
          className="rounded-2xl overflow-hidden shadow-2xl mb-6"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654785400838-09cf5e4494e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdvcmtpbmclMjBsYXB0b3AlMjBkZXNrfGVufDF8fHx8MTc2MzgyMjgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Lena arbeitet am Computer"
            className="w-full h-auto"
          />
        </div>
        <div 
          className="text-center p-8 rounded-xl max-w-4xl mx-auto"
          style={{ backgroundColor: '#A3C9D9' }}
        >
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Schritt 1: Notizen erstellen
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '145%',
              color: '#103B40'
            }}
          >
            Lena sitzt konzentriert am PC und erstellt ihre digitalen Notizen in SmartNote. 
            Sie kann direkt am Computer tippen oder mit einem digitalen Stift handschriftlich schreiben.
          </p>
        </div>
      </div>

      {/* Scene 2: Tastatur Close-up */}
      <div className="mb-16">
        <div 
          className="rounded-2xl overflow-hidden shadow-2xl mb-6"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758874573150-05c1b6b56407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGtleWJvYXJkfGVufDF8fHx8MTc2MzgyMjgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hände tippen auf Tastatur"
            className="w-full h-auto"
          />
        </div>
        <div 
          className="text-center p-8 rounded-xl max-w-4xl mx-auto"
          style={{ backgroundColor: '#A3C9D9' }}
        >
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Schritt 2: Effizient tippen
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '145%',
              color: '#103B40'
            }}
          >
            Nahaufnahme: Lenas Hände bewegen sich fließend über die Tastatur, während sie ihre Lernnotizen 
            strukturiert erfasst. Der Editor bietet alle wichtigen Formatierungsoptionen.
          </p>
        </div>
      </div>

      {/* Scene 3: Editor mit Inhalten */}
      <div className="mb-16">
        <div 
          className="rounded-2xl border-4 shadow-2xl p-8 mb-6"
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderColor: '#346C73'
          }}
        >
          <div className="mb-6">
            <h3 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '140%',
                color: '#012326',
                marginBottom: '16px'
              }}
            >
              Organische Chemie - Alkane
            </h3>
            <div className="flex gap-2 mb-6">
              <span 
                className="px-3 py-1 rounded"
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
                className="px-3 py-1 rounded"
                style={{
                  backgroundColor: '#A3C9D9',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#012326'
                }}
              >
                Alkane
              </span>
              <span 
                className="px-3 py-1 rounded"
                style={{
                  backgroundColor: '#A3C9D9',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#012326'
                }}
              >
                Kohlenwasserstoffe
              </span>
            </div>
          </div>
          
          <div 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '160%',
              color: '#012326'
            }}
          >
            <p className="mb-4">
              <strong style={{ color: '#346C73' }}>Definition:</strong> Alkane sind gesättigte Kohlenwasserstoffe 
              mit der allgemeinen Summenformel C<sub>n</sub>H<sub>2n+2</sub>
            </p>
            
            <p className="mb-3"><strong style={{ color: '#346C73' }}>Eigenschaften:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nur Einfachbindungen zwischen C-Atomen</li>
              <li>Unpolar → wasserunlöslich</li>
              <li>Siedepunkt steigt mit Kettenlänge</li>
            </ul>

            <div 
              className="p-4 rounded-lg"
              style={{ 
                backgroundColor: '#6A9BA6',
                color: '#FFFFFF'
              }}
            >
              <strong>💡 Merksatz:</strong> "Alkane sind die Basis der organischen Chemie"
            </div>
          </div>
        </div>
        <div 
          className="text-center p-8 rounded-xl max-w-4xl mx-auto"
          style={{ backgroundColor: '#A3C9D9' }}
        >
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Schritt 3: Strukturierte Notizen
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '145%',
              color: '#103B40'
            }}
          >
            Der Editor zeigt Lenas fertig formatierte Notizen mit markierten Stichpunkten, 
            Tags und wichtigen Begriffen. Alles ist übersichtlich strukturiert.
          </p>
        </div>
      </div>

      {/* Scene 4: Zusammenfassung & Lernhilfen */}
      <div className="mb-16">
        <div 
          className="grid grid-cols-2 gap-8 mb-6"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Zusammenfassung */}
          <div 
            className="p-6 rounded-xl border-2 shadow-lg"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6'
            }}
          >
            <h4 
              className="mb-4"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                color: '#012326'
              }}
            >
              📝 Zusammenfassung
            </h4>
            <p 
              className="mb-4"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '150%',
                color: '#012326'
              }}
            >
              Alkane sind gesättigte Kohlenwasserstoffe mit nur Einfachbindungen. 
              Sie sind unpolar und reaktionsträge.
            </p>
            <div className="space-y-2">
              {['Nur C-C-Einfachbindungen', 'Summenformel: CnH2n+2', 'Wasserunlöslich'].map((point, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 p-2 rounded"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#6A9BA6', color: '#FFFFFF' }}
                  >
                    {i + 1}
                  </div>
                  <span 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '13px',
                      color: '#012326'
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spickzettel */}
          <div 
            className="p-6 rounded-xl border-2 shadow-lg"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#346C73'
            }}
          >
            <h4 
              className="mb-4 text-center"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                color: '#012326'
              }}
            >
              ALKANE - Spickzettel
            </h4>
            <div 
              className="p-3 rounded mb-3"
              style={{ backgroundColor: '#6A9BA6' }}
            >
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#FFFFFF'
                }}
              >
                SUMMENFORMEL
              </p>
            </div>
            <p 
              className="text-center p-3 rounded mb-3"
              style={{ 
                backgroundColor: '#A3C9D9',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#012326'
              }}
            >
              C<sub>n</sub>H<sub>2n+2</sub>
            </p>
            <div className="space-y-2">
              {['Methan: CH₄', 'Ethan: C₂H₆', 'Propan: C₃H₈'].map((item, i) => (
                <div 
                  key={i}
                  className="p-2 rounded"
                  style={{ 
                    backgroundColor: '#A3C9D9',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#012326'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div 
          className="text-center p-8 rounded-xl max-w-4xl mx-auto"
          style={{ backgroundColor: '#A3C9D9' }}
        >
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#012326'
            }}
          >
            Schritt 4: Automatische Lernhilfen
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '145%',
              color: '#103B40'
            }}
          >
            SmartNote erstellt automatisch Zusammenfassungen und Spickzettel aus Lenas Notizen. 
            Die KI extrahiert die wichtigsten Punkte und bereitet sie lernfreundlich auf.
          </p>
        </div>
      </div>

      {/* Scene 5: Lena zufrieden */}
      <div className="mb-16">
        <div 
          className="rounded-2xl overflow-hidden shadow-2xl mb-6"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1651495835942-ebe13feacaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM4MDIzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Lena zufrieden am Computer"
            className="w-full h-auto"
          />
        </div>
        <div 
          className="text-center p-8 rounded-xl max-w-4xl mx-auto"
          style={{ backgroundColor: '#346C73' }}
        >
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '26px',
              lineHeight: '140%',
              color: '#FFFFFF'
            }}
          >
            Schritt 5: Erfolgreich lernen
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '145%',
              color: '#A3C9D9'
            }}
          >
            Lena schaut zufrieden auf ihre perfekt strukturierten Lernmaterialien. 
            Mit SmartNote ist sie bestens auf ihre Prüfungen vorbereitet – alles digital, strukturiert und effizient.
          </p>
        </div>
      </div>

      {/* Feature Overview */}
      <div 
        className="p-12 rounded-2xl max-w-6xl mx-auto"
        style={{ backgroundColor: '#A3C9D9' }}
      >
        <h2 
          className="mb-8 text-center"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '140%',
            color: '#012326'
          }}
        >
          SmartNote Desktop Features
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: 'Notizen erstellen',
              desc: 'Tippen oder handschriftlich mit digitalem Stift am PC'
            },
            {
              title: 'Automatisch zusammenfassen',
              desc: 'KI erstellt kompakte Zusammenfassungen'
            },
            {
              title: 'Spickzettel generieren',
              desc: 'Wichtigste Punkte auf einen Blick'
            },
            {
              title: 'Lernpläne erstellen',
              desc: 'Strukturierte Tagesplanung für Prüfungen'
            },
            {
              title: 'Aufgaben verwalten',
              desc: 'Alle Lernaufgaben an einem Ort'
            },
            {
              title: 'Alles exportieren',
              desc: 'Als PDF exportieren und teilen'
            },
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#6A9BA6' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#FFFFFF'
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <h3 
                className="mb-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#012326'
                }}
              >
                {feature.title}
              </h3>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '145%',
                  color: '#346C73'
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
