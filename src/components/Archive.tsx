import { RotateCcw, Trash2, Search } from 'lucide-react';
import React from 'react';

interface ArchiveProps {
  onNavigate: (screen: string) => void;
}

export function Archive({ onNavigate }: ArchiveProps) {
  const [archivedNotes, setArchivedNotes] = React.useState([
    {
      id: 1,
      title: 'Biologie - Fotosynthese',
      date: '15. Nov 2025',
      archivedDate: '20. Nov 2025',
      subject: 'Biologie',
      preview: 'Lichtabhängige und lichtunabhängige Reaktionen...'
    },
    {
      id: 2,
      title: 'Geschichte - Industrialisierung',
      date: '10. Nov 2025',
      archivedDate: '18. Nov 2025',
      subject: 'Geschichte',
      preview: 'Technische Innovationen und soziale Auswirkungen...'
    },
    {
      id: 3,
      title: 'Physik - Newtonsche Gesetze',
      date: '8. Nov 2025',
      archivedDate: '15. Nov 2025',
      subject: 'Physik',
      preview: 'Trägheitsgesetz, Aktionsprinzip, Wechselwirkungsprinzip...'
    },
    {
      id: 4,
      title: 'Mathematik - Quadratische Funktionen',
      date: '5. Nov 2025',
      archivedDate: '12. Nov 2025',
      subject: 'Mathematik',
      preview: 'Scheitelpunktform, Normalform, Nullstellen berechnen...'
    },
    {
      id: 5,
      title: 'Chemie - Periodensystem',
      date: '1. Nov 2025',
      archivedDate: '8. Nov 2025',
      subject: 'Chemie',
      preview: 'Aufbau, Gruppen, Perioden und Elementeigenschaften...'
    },
  ]);

  const handleRestore = (noteId: number) => {
    setArchivedNotes(archivedNotes.filter(note => note.id !== noteId));
    // In a real app, this would restore the note to the main list
    alert('Notiz wurde wiederhergestellt');
  };

  const handleDelete = (noteId: number) => {
    if (confirm('Möchten Sie diese Notiz wirklich endgültig löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      setArchivedNotes(archivedNotes.filter(note => note.id !== noteId));
      alert('Notiz wurde endgültig gelöscht');
    }
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-12">
        <div className="mb-8">
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
            Archiv
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
            {archivedNotes.length} archivierte Notizen
          </p>
        </div>

        {/* Search Bar */}
        <div 
          className="flex items-center gap-4 p-4 rounded-xl mb-8"
          style={{
            backgroundColor: '#A3C9D9',
          }}
        >
          <Search size={20} style={{ color: '#012326' }} />
          <input
            type="text"
            placeholder="Archiv durchsuchen..."
            className="flex-1 px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              color: '#012326'
            }}
          />
        </div>

        {/* Info Box */}
        <div 
          className="p-5 rounded-xl mb-8 border"
          style={{
            backgroundColor: '#A3C9D9',
            borderColor: '#6A9BA6',
          }}
        >
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '145%',
              color: '#012326'
            }}
          >
            💡 Archivierte Notizen werden nicht gelöscht und können jederzeit wiederhergestellt werden. 
            Sie erscheinen nicht mehr in deiner Hauptliste.
          </p>
        </div>

        {/* Archived Notes */}
        <div className="space-y-4">
          {archivedNotes.map((note) => (
            <div
              key={note.id}
              className="p-6 rounded-xl border-2 transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#A3C9D9',
              }}
            >
              <div className="flex items-start justify-between">
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
                      {note.subject}
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#6A9BA6'
                      }}
                    >
                      Archiviert: {note.archivedDate}
                    </span>
                  </div>
                  
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '22px',
                      lineHeight: '140%',
                      color: '#012326'
                    }}
                  >
                    {note.title}
                  </h3>
                  
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
                      color: '#6A9BA6'
                    }}
                  >
                    Erstellt: {note.date}
                  </p>
                </div>

                <div className="flex gap-2 ml-6">
                  <button
                    onClick={() => handleRestore(note.id)}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:shadow"
                    style={{
                      backgroundColor: '#346C73',
                      color: '#FFFFFF',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                    }}
                    title="Wiederherstellen"
                  >
                    <RotateCcw size={16} />
                    Wiederherstellen
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg border-2 transition-all hover:shadow"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#346C73',
                      color: '#346C73',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                    }}
                    title="Endgültig löschen"
                  >
                    <Trash2 size={16} />
                    Löschen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div 
          className="mt-8 p-6 rounded-xl border-2"
          style={{
            backgroundColor: '#A3C9D9',
            borderColor: '#346C73',
          }}
        >
          <div className="flex items-start gap-3">
            <Trash2 size={24} style={{ color: '#346C73', flexShrink: 0 }} />
            <div>
              <h3 
                className="mb-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#012326'
                }}
              >
                Achtung beim Löschen
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
                Das endgültige Löschen einer Notiz kann nicht rückgängig gemacht werden. 
                Stelle sicher, dass du die Notiz wirklich nicht mehr benötigst.
              </p>
            </div>
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
          Archiv-Statistik
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
              Gesamt archiviert
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                color: '#012326'
              }}
            >
              {archivedNotes.length}
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
              Diesen Monat
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                color: '#012326'
              }}
            >
              5
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
              Speicherplatz
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                color: '#012326'
              }}
            >
              2,4 MB
            </p>
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
          Nach Fach
        </h3>
        <div className="space-y-3 mb-8">
          {[
            { subject: 'Biologie', count: 1 },
            { subject: 'Geschichte', count: 1 },
            { subject: 'Physik', count: 1 },
            { subject: 'Mathematik', count: 1 },
            { subject: 'Chemie', count: 1 },
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
                  backgroundColor: '#6A9BA6',
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
            Tipp
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
            Archiviere alte Notizen regelmäßig, um deine Hauptliste übersichtlich zu halten. 
            Du kannst sie jederzeit wiederherstellen.
          </p>
        </div>
      </div>
    </div>
  );
}
