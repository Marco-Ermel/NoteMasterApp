import { ArrowLeft, Save, X, Bold, Italic, List, Highlighter, Image as ImageIcon, Calendar, Tag } from 'lucide-react';
import React from 'react';

interface NoteEditorProps {
  note: any;
  onNavigate: (screen: string) => void;
}

export function NoteEditor({ note, onNavigate }: NoteEditorProps) {
  const [tags, setTags] = React.useState(['Alkane', 'Kohlenwasserstoffe', 'gesättigt']);
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleToolbarAction = (action: string) => {
    alert(`${action}-Formatierung würde hier angewendet.\n\nIn einer vollständigen Version würde der ausgewählte Text formatiert werden.`);
  };

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
          <input
            type="text"
            defaultValue={note?.title || 'Neue Notiz'}
            className="w-full px-0 py-2 border-0 border-b-2 outline-none"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#A3C9D9',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '140%',
              color: '#012326'
            }}
            placeholder="Notiz Titel"
          />
        </div>

        {/* Toolbar */}
        <div 
          className="flex items-center gap-2 p-3 rounded-xl mb-6 border"
          style={{
            backgroundColor: '#A3C9D9',
            borderColor: '#6A9BA6'
          }}
        >
          <button
            onClick={() => handleToolbarAction('Fett')}
            className="p-2 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326'
            }}
            title="Fett"
          >
            <Bold size={18} />
          </button>
          <button
            onClick={() => handleToolbarAction('Kursiv')}
            className="p-2 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326'
            }}
            title="Kursiv"
          >
            <Italic size={18} />
          </button>
          <div className="w-px h-6" style={{ backgroundColor: '#6A9BA6' }} />
          <button
            onClick={() => handleToolbarAction('Liste')}
            className="p-2 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326'
            }}
            title="Liste"
          >
            <List size={18} />
          </button>
          <button
            onClick={() => handleToolbarAction('Markieren')}
            className="p-2 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326'
            }}
            title="Markieren"
          >
            <Highlighter size={18} />
          </button>
          <div className="w-px h-6" style={{ backgroundColor: '#6A9BA6' }} />
          <button
            onClick={() => alert('Bild einfügen...\n\nIn einer vollständigen Version würde hier ein Datei-Dialog geöffnet werden.')}
            className="p-2 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326'
            }}
            title="Bild einfügen"
          >
            <ImageIcon size={18} />
          </button>
        </div>

        {/* Editor Area */}
        <div 
          className="min-h-96 p-8 rounded-xl border-2"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#A3C9D9',
          }}
        >
          <textarea
            className="w-full min-h-96 outline-none resize-none"
            style={{
              backgroundColor: 'transparent',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '160%',
              color: '#012326'
            }}
            defaultValue={`Definition: Alkane sind gesättigte Kohlenwasserstoffe mit der allgemeinen Summenformel CnH2n+2

Eigenschaften:
• Nur Einfachbindungen zwischen C-Atomen
• Unpolar → wasserunlöslich
• Siedepunkt steigt mit Kettenlänge
• Reaktionsträge (daher "gesättigt")

Wichtige Alkane:
• Methan (CH₄) - einfachstes Alkan
• Ethan (C₂H₆)
• Propan (C₃H₈)
• Butan (C₄H₁₀)

Reaktionen:
Hauptreaktion ist die radikalische Substitution (z.B. Halogenierung)

Merksatz: "Alkane sind die Basis der organischen Chemie - stabil und gesättigt"`}
            placeholder="Beginne hier mit deiner Notiz..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              alert('Notiz gespeichert!\n\nDeine Notiz wurde erfolgreich gespeichert.');
              onNavigate('notes');
            }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl transition-all hover:shadow-lg"
            style={{
              backgroundColor: '#346C73',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
            }}
          >
            <Save size={20} />
            Speichern
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
            <X size={20} />
            Abbrechen
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
          Metadaten
        </h3>

        {/* Date */}
        <div className="mb-6">
          <label 
            className="flex items-center gap-2 mb-2"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            <Calendar size={16} />
            Datum
          </label>
          <input
            type="date"
            defaultValue="2025-11-22"
            className="w-full px-4 py-3 rounded-lg border outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              color: '#012326'
            }}
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label 
            className="flex items-center gap-2 mb-2"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            Kategorie / Fach
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              color: '#012326'
            }}
          >
            <option>Chemie</option>
            <option>Mathematik</option>
            <option>Geschichte</option>
            <option>Biologie</option>
            <option>Physik</option>
          </select>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label 
            className="flex items-center gap-2 mb-2"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            <Tag size={16} />
            Tags
          </label>
          <input
            type="text"
            placeholder="Tags hinzufügen..."
            className="w-full px-4 py-3 rounded-lg border outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              color: '#012326'
            }}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-2 rounded-lg flex items-center gap-2"
                style={{
                  backgroundColor: '#6A9BA6',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '13px',
                }}
              >
                {tag}
                <button 
                  onClick={() => removeTag(tag)}
                  className="hover:opacity-70"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Priority */}
        <div className="mb-8">
          <label 
            className="flex items-center gap-2 mb-2"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#012326'
            }}
          >
            Priorität
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#6A9BA6',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              color: '#012326'
            }}
          >
            <option>Hoch</option>
            <option>Mittel</option>
            <option>Niedrig</option>
          </select>
        </div>

        {/* Quick Actions */}
        <div 
          className="p-5 rounded-xl"
          style={{ backgroundColor: '#346C73' }}
        >
          <h4 
            className="mb-4"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: '#FFFFFF'
            }}
          >
            Schnellaktionen
          </h4>
          <button
            onClick={() => onNavigate('summary')}
            className="w-full px-4 py-3 rounded-lg mb-2 transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Zusammenfassung erstellen
          </button>
          <button
            onClick={() => onNavigate('cheatsheet')}
            className="w-full px-4 py-3 rounded-lg mb-2 transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Spickzettel generieren
          </button>
          <button
            onClick={() => onNavigate('studyplan')}
            className="w-full px-4 py-3 rounded-lg transition-all hover:shadow"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#012326',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Lernplan erstellen
          </button>
        </div>
      </div>
    </div>
  );
}
