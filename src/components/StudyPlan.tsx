import { ArrowLeft, Download, Save, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface StudyPlanProps {
  onNavigate: (screen: string) => void;
}

export function StudyPlan({ onNavigate }: StudyPlanProps) {
  const studyDays = [
    {
      day: 'Montag, 25. Nov',
      tasks: [
        { time: '14:00 - 15:30', subject: 'Chemie', topic: 'Alkane wiederholen', completed: false },
        { time: '16:00 - 17:00', subject: 'Mathematik', topic: 'Integrale üben', completed: false },
        { time: '19:00 - 20:00', subject: 'Geschichte', topic: 'Weimarer Republik lesen', completed: false },
      ]
    },
    {
      day: 'Dienstag, 26. Nov',
      tasks: [
        { time: '15:00 - 16:30', subject: 'Chemie', topic: 'Alkene und Alkine', completed: false },
        { time: '17:00 - 18:00', subject: 'Biologie', topic: 'Zellorganellen', completed: false },
      ]
    },
    {
      day: 'Mittwoch, 27. Nov',
      tasks: [
        { time: '14:00 - 15:00', subject: 'Physik', topic: 'Elektrodynamik Aufgaben', completed: false },
        { time: '16:00 - 17:30', subject: 'Geschichte', topic: 'Essay schreiben', completed: false },
        { time: '18:00 - 19:00', subject: 'Mathematik', topic: 'Flächenberechnung', completed: false },
      ]
    },
    {
      day: 'Donnerstag, 28. Nov',
      tasks: [
        { time: '15:00 - 16:00', subject: 'Chemie', topic: 'Alle Spickzettel durchgehen', completed: false },
        { time: '17:00 - 18:30', subject: 'Mathematik', topic: 'Übungsklausur', completed: false },
      ]
    },
    {
      day: 'Freitag, 29. Nov',
      tasks: [
        { time: '14:00 - 16:00', subject: 'Chemie', topic: 'Prüfungsvorbereitung', completed: false },
        { time: '16:30 - 17:30', subject: 'Geschichte', topic: 'Zusammenfassung erstellen', completed: false },
      ]
    },
  ];

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-12">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 mb-8 transition-all"
          style={{
            color: '#346C73',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '15px',
          }}
        >
          <ArrowLeft size={20} />
          Zurück zum Dashboard
        </button>

        <div className="mb-8">
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
            Lernplan: Prüfungsvorbereitung
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
            KI-generierter Lernplan für deine kommenden Prüfungen
          </p>
        </div>

        {/* Study Plan Overview */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div 
            className="p-6 rounded-xl border-2"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6',
            }}
          >
            <Calendar size={32} style={{ color: '#012326', marginBottom: '12px' }} />
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#103B40'
              }}
            >
              Zeitraum
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: '#012326'
              }}
            >
              5 Tage
            </p>
          </div>
          <div 
            className="p-6 rounded-xl border-2"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6',
            }}
          >
            <Clock size={32} style={{ color: '#012326', marginBottom: '12px' }} />
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#103B40'
              }}
            >
              Gesamt-Lernzeit
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: '#012326'
              }}
            >
              18,5 Stunden
            </p>
          </div>
          <div 
            className="p-6 rounded-xl border-2"
            style={{
              backgroundColor: '#A3C9D9',
              borderColor: '#6A9BA6',
            }}
          >
            <CheckCircle2 size={32} style={{ color: '#012326', marginBottom: '12px' }} />
            <p 
              className="mb-1"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                color: '#103B40'
              }}
            >
              Aufgaben
            </p>
            <p 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: '#012326'
              }}
            >
              0/13 erledigt
            </p>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="space-y-8">
          {studyDays.map((dayPlan, dayIndex) => (
            <div key={dayIndex}>
              <h2 
                className="mb-4"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '140%',
                  color: '#012326'
                }}
              >
                {dayPlan.day}
              </h2>
              <div className="space-y-3">
                {dayPlan.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="flex items-center gap-6 p-5 rounded-xl border-2 transition-all hover:shadow"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#A3C9D9',
                    }}
                  >
                    <input 
                      type="checkbox" 
                      className="w-6 h-6 cursor-pointer"
                      style={{ accentColor: '#346C73' }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2" style={{ color: '#6A9BA6' }}>
                          <Clock size={16} />
                          <span 
                            style={{ 
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: 500,
                              fontSize: '14px',
                            }}
                          >
                            {task.time}
                          </span>
                        </div>
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
                          {task.subject}
                        </span>
                      </div>
                      <p 
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 700,
                          fontSize: '17px',
                          color: '#012326'
                        }}
                      >
                        {task.topic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-10">
          <button
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
            Plan speichern
          </button>

          <button
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
            <Download size={20} />
            Als PDF exportieren
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
          Fächer-Übersicht
        </h3>
        <div className="space-y-3 mb-8">
          {[
            { subject: 'Chemie', hours: '6h', sessions: 4 },
            { subject: 'Mathematik', hours: '5h', sessions: 3 },
            { subject: 'Geschichte', hours: '4,5h', sessions: 3 },
            { subject: 'Biologie', hours: '1,5h', sessions: 1 },
            { subject: 'Physik', hours: '1,5h', sessions: 1 },
          ].map((item) => (
            <div 
              key={item.subject}
              className="p-4 rounded-lg"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex justify-between items-center mb-2">
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#012326'
                  }}
                >
                  {item.subject}
                </span>
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#346C73'
                  }}
                >
                  {item.hours}
                </span>
              </div>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6A9BA6'
                }}
              >
                {item.sessions} Lernsessions
              </p>
            </div>
          ))}
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
            KI-Empfehlungen
          </h4>
          <ul className="space-y-2">
            {[
              'Beginne früh mit Chemie',
              'Mache regelmäßig Pausen',
              'Wiederhole täglich das Gelernte',
              'Nutze Spickzettel zur Wiederholung'
            ].map((tip, index) => (
              <li 
                key={index}
                className="flex items-start gap-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '145%',
                  color: '#FFFFFF'
                }}
              >
                <span>•</span>
                {tip}
              </li>
            ))}
          </ul>
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
          Prüfungstermine
        </h3>
        <div className="space-y-3">
          {[
            { subject: 'Chemie Klausur', date: '30. Nov 2025' },
            { subject: 'Mathe Test', date: '2. Dez 2025' },
            { subject: 'Geschichte Essay', date: '5. Dez 2025' },
          ].map((exam) => (
            <div 
              key={exam.subject}
              className="p-4 rounded-lg"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <p 
                className="mb-1"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#012326'
                }}
              >
                {exam.subject}
              </p>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6A9BA6'
                }}
              >
                {exam.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
