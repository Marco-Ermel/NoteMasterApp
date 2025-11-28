import { Plus, Edit, Trash2, Clock, Tag } from 'lucide-react';

interface NotesListProps {
  onNavigate: (screen: string) => void;
  onNoteSelect: (note: any) => void;
}

export function NotesList({ onNavigate, onNoteSelect }: NotesListProps) {
  const notes = [
    {
      id: 1,
      title: 'Organische Chemie - Alkane',
      date: '22. Nov 2025',
      preview: 'Definition, Eigenschaften und Reaktionen von gesättigten Kohlenwasserstoffen...',
      subject: 'Chemie',
      tags: ['Alkane', 'Kohlenwasserstoffe']
    },
    {
      id: 2,
      title: 'Geschichte - Weimarer Republik',
      date: '21. Nov 2025',
      preview: 'Entstehung nach dem 1. Weltkrieg, politische Strukturen, Krisenjahre...',
      subject: 'Geschichte',
      tags: ['Weimar', 'Deutschland', '1920er']
    },
    {
      id: 3,
      title: 'Mathematik - Integralrechnung',
      date: '20. Nov 2025',
      preview: 'Stammfunktionen, bestimmte und unbestimmte Integrale, Flächenberechnung...',
      subject: 'Mathematik',
      tags: ['Integral', 'Analysis']
    },
    {
      id: 4,
      title: 'Biologie - Zellbiologie',
      date: '19. Nov 2025',
      preview: 'Aufbau prokaryotischer und eukaryotischer Zellen, Organellen und ihre Funktionen...',
      subject: 'Biologie',
      tags: ['Zelle', 'Organellen']
    },
    {
      id: 5,
      title: 'Physik - Elektrodynamik',
      date: '18. Nov 2025',
      preview: 'Elektrische Felder, Spannung, Stromstärke und Widerstand...',
      subject: 'Physik',
      tags: ['Elektrizität', 'Felder']
    },
  ];

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
              Meine Notizen
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
              {notes.length} Notizen gespeichert
            </p>
          </div>
          
          <button
            onClick={() => onNavigate('editor')}
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
            Neue Notiz hinzufügen
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-6 rounded-xl border-2 transition-all hover:shadow-lg"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#A3C9D9',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
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
                    <div className="flex items-center gap-1" style={{ color: '#6A9BA6' }}>
                      <Clock size={14} />
                      <span 
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                        }}
                      >
                        {note.date}
                      </span>
                    </div>
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
                    className="mb-4"
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

                  <div className="flex items-center gap-2">
                    <Tag size={14} style={{ color: '#6A9BA6' }} />
                    <div className="flex gap-2">
                      {note.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 rounded"
                          style={{
                            backgroundColor: '#A3C9D9',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '13px',
                            color: '#012326'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => {
                      onNoteSelect(note);
                      onNavigate('editor');
                    }}
                    className="p-3 rounded-lg transition-all hover:shadow"
                    style={{
                      backgroundColor: '#A3C9D9',
                      color: '#012326'
                    }}
                    title="Bearbeiten"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="p-3 rounded-lg transition-all hover:shadow"
                    style={{
                      backgroundColor: '#A3C9D9',
                      color: '#012326'
                    }}
                    title="Löschen"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t" style={{ borderColor: '#A3C9D9' }}>
                <button
                  onClick={() => {
                    onNoteSelect(note);
                    onNavigate('editor');
                  }}
                  className="px-5 py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor: '#346C73',
                    color: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Öffnen
                </button>
                <button
                  onClick={() => {
                    onNoteSelect(note);
                    onNavigate('summary');
                  }}
                  className="px-5 py-2 rounded-lg border transition-all"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#346C73',
                    color: '#346C73',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Zusammenfassung
                </button>
                <button
                  onClick={() => {
                    onNoteSelect(note);
                    onNavigate('cheatsheet');
                  }}
                  className="px-5 py-2 rounded-lg border transition-all"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#346C73',
                    color: '#346C73',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Spickzettel
                </button>
              </div>
            </div>
          ))}
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
          Fächer
        </h3>
        <div className="space-y-3 mb-8">
          {['Chemie', 'Geschichte', 'Mathematik', 'Biologie', 'Physik'].map((subject) => (
            <button
              key={subject}
              className="w-full p-3 rounded-lg text-left transition-all hover:shadow"
              style={{
                backgroundColor: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                color: '#012326'
              }}
            >
              {subject}
            </button>
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
          Häufige Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Alkane', 'Weimar', 'Integral', 'Zelle', 'Elektrizität', 'Analysis', 'Organellen'].map((tag) => (
            <span 
              key={tag}
              className="px-3 py-2 rounded-lg cursor-pointer transition-all hover:shadow"
              style={{
                backgroundColor: '#6A9BA6',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '13px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}