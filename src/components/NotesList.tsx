import { Plus, Edit, Trash2, Calendar } from 'lucide-react';
import React from 'react';

interface NotesListProps {
  onNavigate: (screen: string) => void;
  onNoteSelect: (note: any) => void;
}

export function NotesList({ onNavigate, onNoteSelect }: NotesListProps) {
  const notes = [
    {
      id: 1,
      title: 'Photosynthese - Grundlagen',
      date: '15. Januar 2025',
      preview: 'Die Photosynthese ist der Prozess, bei dem Pflanzen Lichtene...',
      subject: 'Biologie'
    },
    {
      id: 2,
      title: 'Quadratische Gleichungen',
      date: '14. Januar 2025',
      preview: 'Eine quadratische Gleichung hat die allgemeine Form: ax² + bx...',
      subject: 'Mathematik'
    },
    {
      id: 3,
      title: 'Französische Revolution',
      date: '13. Januar 2025',
      preview: 'Französische Revolution (1789-1799) - Ursachen: Finanzkrise...',
      subject: 'Geschichte'
    },
    {
      id: 4,
      title: 'Zellbiologie: Mitose & Meiose',
      date: '12. Januar 2025',
      preview: 'Zellbiologie: Mitose & Meiose - Mitose (Zellteilung): Propha...',
      subject: 'Biologie'
    },
    {
      id: 5,
      title: 'Newtonsche Gesetze',
      date: '11. Januar 2025',
      preview: 'Newtonsche Gesetze der Mechanik - 1. Trägheitsgesetz: Ein Kö...',
      subject: 'Physik'
    },
    {
      id: 6,
      title: 'Proteinbiosynthese',
      date: '10. Januar 2025',
      preview: 'Proteinbiosynthese - Transkription (im Zellkern): DNA wird g...',
      subject: 'Biologie'
    },
  ];

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Header */}
      <div className="p-8 border-b" style={{ borderColor: '#E5E5E5' }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 
              className="mb-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '140%',
                color: '#012326'
              }}
            >
              Notizen
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
              {notes.length} Notizen gespeichert
            </p>
          </div>
          
          <button
            onClick={() => onNavigate('scan')}
            className="flex items-center gap-2 px-6 py-4 rounded-xl transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#6A9BA6',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            <Plus size={20} />
            Neue Notiz hinzufügen
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="p-8">
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-6 rounded-xl border transition-all hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E5E5',
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={16} style={{ color: '#6A9BA6' }} />
                    <span 
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#6A9BA6'
                      }}
                    >
                      {note.date}
                    </span>
                  </div>
                  
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '140%',
                      color: '#012326'
                    }}
                  >
                    {note.title}
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
                    {note.preview}
                  </p>
                </div>

                <div className="flex gap-2 ml-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNoteSelect(note);
                      onNavigate('editor');
                    }}
                    className="p-3 rounded-lg transition-all hover:shadow"
                    style={{
                      backgroundColor: '#F5F5F5',
                      color: '#346C73'
                    }}
                    title="Bearbeiten"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Möchten Sie die Notiz "${note.title}" wirklich löschen?`)) {
                        alert('Notiz wurde gelöscht.');
                      }
                    }}
                    className="p-3 rounded-lg transition-all hover:shadow"
                    style={{
                      backgroundColor: '#F5F5F5',
                      color: '#346C73'
                    }}
                    title="Löschen"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}