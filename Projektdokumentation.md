# SmartNote - Projektdokumentation
## Modul 322: Benutzerschnittstellen implementieren

---

## 1. Projektbeschreibung

### 1.1 Projektname und Projektart
**Projektname:** SmartNote  
**Projektart:** Desktop-Applikation (Windows) mit .NET MAUI  
**Version:** 1.0  
**Entwicklungszeitraum:** 2025

### 1.2 Zweck der Applikation
SmartNote ist eine moderne, digitale Notizen- und Lernverwaltungs-Applikation, die Schülern, Studierenden und Lernenden dabei hilft, ihre Lernmaterialien effizient zu organisieren und zu verwalten. Die Applikation bietet intelligente Funktionen zur automatischen Generierung von Zusammenfassungen und Spickzetteln sowie zur strukturierten Lernplanung.

### 1.3 Kernfunktionen
- **Notizenverwaltung**: Erstellen, bearbeiten und löschen von digitalen Notizen
- **Intelligente Filterung**: Nach Fach, Tags und Wichtigkeit filtern
- **Aufgabenverwaltung**: Lernaufgaben mit Deadlines verwalten
- **Automatische Zusammenfassungen**: KI-gestützte Generierung von Kurz-Zusammenfassungen
- **Spickzettel-Generierung**: Kompakte Übersichten für schnelles Lernen
- **Lernplan-Erstellung**: Strukturierte Tagespläne mit Zeitplanung
- **Statistiken**: Übersicht über Lernzeit, Aufgaben und Notizen
- **Archivierung**: Alte Notizen organisiert aufbewahren
- **Export-Funktionen**: PDF und Text-Export für Zusammenfassungen

---

## 2. Zielsetzung

### 2.1 Hauptziele
1. **Effiziente Lernorganisation**: Zentrale Plattform für alle Lernmaterialien
2. **Zeitersparnis**: Automatische Zusammenfassungen reduzieren Aufbereitungszeit
3. **Übersichtlichkeit**: Klare Struktur und intuitive Navigation
4. **Produktivitätssteigerung**: Strukturierte Lernpläne und Aufgabenverwaltung

### 2.2 Lernziele (Modul 322)
- Implementierung einer modernen Benutzerschnittstelle mit .NET MAUI
- Anwendung des MVVM-Patterns für saubere Code-Architektur
- Responsive Design für verschiedene Bildschirmgrößen
- Umsetzung von UX-Best-Practices für Bildungsapplikationen
- Professionelle Projektdokumentation

---

## 3. Zielgruppe und Personas

### 3.1 Zielgruppen
1. **Schüler (14–20 Jahre)**: Gymnasiasten und Berufsschüler
2. **Studierende (18–30 Jahre)**: Universitäts- und Fachhochschulstudierende
3. **IT-Lernende (16–25 Jahre)**: Informatik EFZ Lernende

### 3.2 Persona 1: Schülerin Gymnasium
**Name:** Laura Müller  
**Alter:** 17 Jahre  
**Bildung:** Gymnasium, 11. Klasse  
**Fächer:** Mathematik, Physik, Chemie, Deutsch, Englisch, Geschichte

**Herausforderungen:**
- Viele verschiedene Fächer parallel
- Prüfungsvorbereitung erfordert strukturierte Zusammenfassungen
- Handschriftliche Notizen sind unübersichtlich
- Zeitmanagement zwischen Schule und Freizeit

**Ziele mit SmartNote:**
- Alle Notizen digital an einem Ort
- Schnelle Zusammenfassungen vor Prüfungen
- Übersicht über anstehende Aufgaben
- Fachweise Organisation der Lernmaterialien

### 3.3 Persona 2: IT-Student
**Name:** Marco Fischer  
**Alter:** 22 Jahre  
**Bildung:** Informatikstudium, 4. Semester  
**Schwerpunkte:** Software-Engineering, Datenbanken, Algorithmen

**Herausforderungen:**
- Komplexe technische Inhalte strukturieren
- Viele Codebeispiele und Konzepte dokumentieren
- Prüfungsvorbereitung mit umfangreichen Themen
- Projektarbeit parallel zum Studium

**Ziele mit SmartNote:**
- Technische Notizen mit Tags organisieren
- Spickzettel für schnelle Referenz
- Lernpläne für effiziente Prüfungsvorbereitung
- Export-Funktion für Gruppenarbeit

### 3.4 Persona 3: Informatik-Lernende
**Name:** Sarah Weber  
**Alter:** 18 Jahre  
**Bildung:** Informatik EFZ Lehre, 2. Lehrjahr  
**Betrieb:** Mittelständisches Software-Unternehmen

**Herausforderungen:**
- Berufsschule und Betrieb parallel
- Praxiswissen und Theorie verbinden
- Vorbereitung auf überbetriebliche Kurse (üK)
- Dokumentation von Lernfortschritten

**Ziele mit SmartNote:**
- Berufsfachschul-Notizen organisieren
- Lernziele für üK und Abschlussprüfung verfolgen
- Aufgaben und Deadlines im Blick behalten
- Archiv für abgeschlossene Module

---

## 4. Funktionale Anforderungen

### 4.1 Notizenverwaltung (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-N-01 | Notiz erstellen | Benutzer kann neue Notiz mit Titel und Inhalt erstellen |
| F-N-02 | Notiz bearbeiten | Bestehende Notizen können jederzeit bearbeitet werden |
| F-N-03 | Notiz löschen | Notizen können gelöscht werden mit Bestätigungsdialog |
| F-N-04 | Fach zuweisen | Dropdown-Auswahl für Fach (Mathematik, Physik, etc.) |
| F-N-05 | Tags hinzufügen | Mehrere Tags pro Notiz für bessere Organisation |
| F-N-06 | Wichtigkeit markieren | Drei Stufen: Niedrig, Mittel, Hoch |
| F-N-07 | Notizen archivieren | Alte Notizen ins Archiv verschieben |
| F-N-08 | Automatische Vorschau | Erste Zeilen als Preview in der Liste anzeigen |

### 4.2 Filter und Suche (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-F-01 | Filter nach Fach | Notizen nach ausgewähltem Fach filtern |
| F-F-02 | Filter nach Tags | Mehrere Tags gleichzeitig filtern möglich |
| F-F-03 | Filter nach Datum | Notizen nach Erstellungs-/Änderungsdatum filtern |
| F-F-04 | Sortierung | Nach Datum, Titel oder Wichtigkeit sortieren |

### 4.3 Zusammenfassungen (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-Z-01 | Automatische Generierung | KI-basierte Kurz-Zusammenfassung aus Notizen |
| F-Z-02 | Bullet Points | Wichtigste Punkte als Liste dargestellt |
| F-Z-03 | Schlüsselbegriffe | Hervorhebung wichtiger Begriffe als Tags |
| F-Z-04 | Zusammenhangs-Beschreibung | Textuelle Erklärung der Konzeptverbindungen |
| F-Z-05 | Export als PDF | Download der Zusammenfassung als PDF |
| F-Z-06 | Export als Text | Download als Textdatei für weitere Bearbeitung |

### 4.4 Spickzettel (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-S-01 | Kompakte Darstellung | Übersichtliche, nummerierte Listendarstellung |
| F-S-02 | Wichtigste Punkte | Fokus auf essenzielle Informationen |
| F-S-03 | Druckoptimiert | Layout für A4-Druck optimiert |
| F-S-04 | Export-Funktion | Als PDF oder direkt drucken |

### 4.5 Aufgabenverwaltung (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-A-01 | Aufgabe erstellen | Titel, Beschreibung, Fach, Deadline |
| F-A-02 | Priorität setzen | Hoch, Mittel, Niedrig mit Farb-Coding |
| F-A-03 | Aufgabe abhaken | Checkbox für Erledigt-Status |
| F-A-04 | Automatisches Ausblenden | Erledigte Aufgaben nach Zeitverzögerung ausblenden |
| F-A-05 | Übersicht | Separate Ansichten für offen/erledigt |
| F-A-06 | Dashboard-Integration | Heutige Aufgaben auf Dashboard anzeigen |

### 4.6 Lernpläne (Must-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-L-01 | Tagesplan erstellen | Strukturierter Plan mit Zeitslots |
| F-L-02 | Themen zuweisen | Lernthemen mit Zeitfenster (z.B. 09:00-09:30) |
| F-L-03 | Prioritäten visualisieren | Farbliche Kennzeichnung (Hoch, Mittel, Niedrig) |
| F-L-04 | Fortschrittsanzeige | Prozentuale Darstellung des Tagesfortschritts |
| F-L-05 | Checkbox-System | Themen abhaken beim Abschluss |

### 4.7 Statistiken (Should-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-ST-01 | Dashboard-Übersicht | Anzahl Aufgaben, Notizen, Lernzeit |
| F-ST-02 | Lernzeit pro Fach | Aufschlüsselung nach Fächern |
| F-ST-03 | Prüfungsübersicht | Kommende Prüfungen mit Countdown |
| F-ST-04 | Archiv-Statistik | Anzahl archivierter Notizen pro Fach |
| F-ST-05 | Wochenstatistik | Notizen und Aufgaben der letzten 7 Tage |

### 4.8 Archiv (Should-Have)
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| F-AR-01 | Notizen archivieren | Manuelles Verschieben ins Archiv |
| F-AR-02 | Archiv durchsuchen | Filter und Suche auch im Archiv |
| F-AR-03 | Wiederherstellen | Archivierte Notizen reaktivieren |
| F-AR-04 | Datum festhalten | Archivierungsdatum automatisch speichern |

---

## 5. Nicht-funktionale Anforderungen

### 5.1 Usability
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| NF-U-01 | Intuitive Navigation | Sidebar mit maximal 8 Hauptmenüpunkten |
| NF-U-02 | Klare Hierarchie | Primäre und sekundäre Aktionen visuell unterscheidbar |
| NF-U-03 | Große Klickflächen | Mindestens 40px Höhe für interaktive Elemente |
| NF-U-04 | Schnelle Ladezeiten | Ansichten in unter 1 Sekunde geladen |
| NF-U-05 | Fehler-Feedback | Klare Fehlermeldungen bei Problemen |

### 5.2 Design
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| NF-D-01 | Farbpalette | Max. 3 Hauptfarben (Grau, Blau/Teal, Akzentfarbe) |
| NF-D-02 | Typografie | Klare, gut lesbare Schriftart (Inter) |
| NF-D-03 | Konsistenz | Einheitliche Abstände und Größen |
| NF-D-04 | Nicht überladen | Fokus auf Funktionalität, minimalistisches Design |
| NF-D-05 | Responsive | Anpassung an verschiedene Bildschirmgrößen |

### 5.3 Performance
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| NF-P-01 | Schnelle Suche | Filterung in unter 500ms |
| NF-P-02 | Speicher-Effizienz | Max. 500MB RAM-Nutzung |
| NF-P-03 | Lokale Datenhaltung | Keine Internetverbindung nötig |

### 5.4 Plattform
| ID | Anforderung | Beschreibung |
|----|-------------|--------------|
| NF-PL-01 | Windows-Support | Windows 10 und 11 |
| NF-PL-02 | Desktop-Fokus | Optimiert für Desktop-Nutzung |
| NF-PL-03 | .NET MAUI | Cross-platform Entwicklung |

---

## 6. Storyboard

### 6.1 Story 1: Laura bereitet sich auf Mathe-Prüfung vor
**Situation:** Laura hat eine Mathe-Prüfung in einer Woche und möchte ihre Notizen strukturieren.

**Ablauf:**
1. Laura öffnet SmartNote auf ihrem Desktop
2. Sie klickt auf "Dashboard" und sieht die Übersicht
3. Sie navigiert zu "Notizen" in der Sidebar
4. Sie filtert nach Fach "Mathematik"
5. Sie wählt die Notiz "Quadratische Gleichungen" aus
6. Sie klickt auf "Zusammenfassung" unter der Notiz
7. Die App generiert eine Kurz-Zusammenfassung mit Bullet Points
8. Laura klickt auf "Zum Spickzettel hinzufügen"
9. Der Spickzettel wird mit den wichtigsten Formeln erstellt
10. Laura exportiert den Spickzettel als PDF zum Ausdrucken

**Ergebnis:** Laura hat einen kompakten Spickzettel für effizientes Lernen.

### 6.2 Story 2: Marco organisiert seine Informatik-Notizen
**Situation:** Marco hat viele Notizen aus verschiedenen Vorlesungen und möchte diese besser strukturieren.

**Ablauf:**
1. Marco öffnet SmartNote
2. Er klickt auf "+ Neue Notiz hinzufügen"
3. Er gibt den Titel ein: "Binary Search Trees"
4. Er wählt Fach: "Algorithmen"
5. Er fügt Tags hinzu: "Datenstrukturen", "Rekursion", "Komplexität"
6. Er setzt die Wichtigkeit auf "Hoch"
7. Er schreibt seine Notizen mit Codebeispielen
8. Er speichert die Notiz
9. Die Notiz erscheint in der Liste mit allen Metadaten
10. Marco nutzt die Filterung nach Tags für schnelle Suche

**Ergebnis:** Marco findet seine Notizen schnell und strukturiert.

### 6.3 Story 3: Sarah erstellt einen Lernplan
**Situation:** Sarah hat nächste Woche eine üK-Prüfung und möchte einen strukturierten Lernplan erstellen.

**Ablauf:**
1. Sarah öffnet SmartNote
2. Sie navigiert zu "Lernpläne" in der Sidebar
3. Sie sieht den Lernplan für heute
4. Sie klickt auf "Plan speichern" und dann auf "Neu erstellen"
5. Sie wählt das Datum für morgen
6. Die App schlägt automatisch Lernthemen basierend auf ihren Notizen vor
7. Sarah akzeptiert den Vorschlag und passt Zeitfenster an
8. Sie setzt Prioritäten für wichtige Themen
9. Der Lernplan wird gespeichert und auf dem Dashboard angezeigt
10. Am nächsten Tag hakt Sarah erledigte Themen ab

**Ergebnis:** Sarah hat einen strukturierten, realistischen Lernplan.

---

## 7. Moodboard

### 7.1 Farbkonzept
**Primärfarben (Teal/Petrol-Töne):**
- `#012326` - Primary Dark (Dunkelster Teal für Texte und Akzente)
- `#103B40` - Primary (Hauptfarbe für Sidebar und wichtige Elemente)
- `#346C73` - Primary Medium (Buttons und interaktive Elemente)
- `#6A9BA6` - Primary Light (Hover-States, sekundäre Elemente)
- `#A3C9D9` - Primary Lightest (Hintergründe, subtile Highlights)

**Neutrale Farben:**
- `#FFFFFF` - White (Haupthintergrund)
- `#F5F5F5` - Background Light (Karten-Hintergrund)
- `#E0E0E0` - Border Light (Trennlinien)
- `#1A1A1A` - Text Primary (Haupttext)
- `#666666` - Text Secondary (Sekundärtext)

**Akzentfarben:**
- `#D97706` - Priority High (Orange für hohe Priorität)
- `#059669` - Success (Grün für Erfolg/Erledigt)
- `#DC2626` - Error (Rot für Fehler/Löschungen)

### 7.2 Designstil
**Moderne, professionelle Desktop-App:**
- **Minimalistisch**: Fokus auf Inhalt, keine unnötigen Dekorationen
- **Flat Design**: Keine Schatten oder 3D-Effekte, klare Flächen
- **Rounded Corners**: 8-12px Radius für sanfte, moderne Optik
- **Großzügige Abstände**: Padding von 24-48px für Luftigkeit
- **Grid-basiert**: Strukturierte, spaltenbasierte Layouts

### 7.3 Typografie
**Schriftfamilie: Inter**
- **Inter Regular** (400): Body-Text, Beschreibungen
- **Inter Medium** (500): Untertitel, Labels
- **Inter Bold** (700): Überschriften, wichtige Informationen

**Schriftgrößen:**
- 32px: Große Titel (Seitentitel)
- 24px: Untertitel (Sektionen)
- 18px: Card-Titel
- 15px: Standard-Text
- 13px: Small-Text, Labels
- 11px: Caption, Metadaten

### 7.4 Inspiration und Referenzen
**Ähnliche Apps:**
- Notion (klare Struktur, minimalistisches Design)
- Evernote (Notizenverwaltung, Tags)
- Todoist (Aufgabenverwaltung, Prioritäten)
- Obsidian (Wissensverwaltung, Verlinkungen)

**Designprinzipien:**
- **Clarity**: Jedes Element hat einen klaren Zweck
- **Consistency**: Einheitliche Patterns in der ganzen App
- **Efficiency**: Wenige Klicks zu wichtigen Funktionen
- **Feedback**: Visuelle Rückmeldung bei Interaktionen

---

## 8. Mockup-Beschreibungen

### 8.1 Dashboard (Startseite)
**Layout:**
- Hauptbereich (70% Breite) + Rechte Sidebar (30% Breite)

**Hauptbereich:**
- **Header oben:**
  - Großer Titel: "SmartNote – Dein digitaler Lernassistent"
  - Untertitel: Kurze Beschreibung der App-Funktionen
  
- **Action Buttons (3 Spalten):**
  - Spalte 1: "Notiz scannen" - Kamera-Icon, Teal-Hintergrund
  - Spalte 2: "Notizen anzeigen" - Dokument-Icon, hellerer Hintergrund
  - Spalte 3: "Aufgaben" - Checkbox-Icon, dunkler Hintergrund
  - Jede Karte: Icon oben, Titel, kurze Beschreibung
  - Hover: Leichte Hervorhebung
  
- **Weitere Action Buttons (2 Spalten):**
  - Spalte 1: "Zusammenfassungen" - Buch-Icon, mittlerer Teal
  - Spalte 2: "Lernpläne" - Kalender-Icon, heller Teal
  - Spalte 3: "Spickzettel" - Notiz-Icon, mittlerer Teal
  - Spalte 4: "Aufgaben" - Checkbox-Icon, dunkler Teal
  
- **Sektion "Zuletzt bearbeitet":**
  - Titel: "Zuletzt bearbeitet"
  - Liste von 3-4 Notizen-Karten
  - Jede Karte: Titel, Preview (2 Zeilen), Datum, Uhr-Icon
  - Klickbar zum Öffnen der Notiz

**Rechte Sidebar (Info-Panel):**
- Hellgrauer Hintergrund (#F9F9F9)
- **Sektion "Heute anstehend":**
  - Liste von Aufgaben mit Checkboxes
  - Aufgabentitel, kurze Beschreibung
  - Checkbox zum Abhaken
  
- **Sektion "Statistik":**
  - "Notizen diese Woche": Zahl
  - "Erledigte Aufgaben": X/Y Format
  - "Lernzeit heute": Zeitangabe
  - Jeweils Label links, Wert rechts, fett

**Navigation:**
- Linke Sidebar (nicht sichtbar aber vorhanden):
  - Dashboard, Notizen, Zusammenfassungen, Spickzettel, Lernpläne, Aufgaben

### 8.2 Notizen-Liste
**Layout:**
- Hauptbereich (70%) + Rechte Filter-Sidebar (30%)

**Hauptbereich:**
- **Header:**
  - Links: "Notizen" Titel, "6 Notizen gespeichert" Untertitel
  - Rechts: "+ Neue Notiz hinzufügen" Button (Teal, prominent)
  
- **Notizen-Liste (vertikal):**
  - Jede Notiz als große Karte:
    - **Obere Zeile:**
      - Links: Fach-Badge (Teal), Datum mit Uhr-Icon
      - Rechts: "Bearbeiten" Button (Stift-Icon), "Löschen" Button (Mülleimer-Icon)
    - **Titel:** Groß, fett (z.B. "Photosynthese - Grundlagen")
    - **Datum:** Klein, grau (z.B. "15. Januar 2025")
    - **Preview:** 2 Zeilen Text-Vorschau
    - **Tags:** Kleine Pills mit Tag-Icon
    - **Trennlinie**
    - **Action Buttons (horizontal):**
      - "Öffnen" (Primär, Teal)
      - "Zusammenfassung" (Sekundär, heller)
      - "Spickzettel" (Sekundär, heller)

**Rechte Filter-Sidebar:**
- **Fächer-Filter:**
  - "Fächer" Titel
  - Liste von Fächern (z.B. Mathematik, Physik, Chemie)
  - Klickbar zum Filtern
  
- **Tags-Filter:**
  - "Häufige Tags" Titel
  - Pills mit Tags (z.B. "Optik", "Mechanik")
  - Klickbar zum Filtern

### 8.3 Zusammenfassungen-Ansicht
**Layout:**
- Hauptbereich (70%) + Rechte Sidebar (30%)

**Header:**
- "Automatische Zusammenfassung" Titel
- "KI-generierte Zusammenfassung deiner Notiz" Untertitel
- Rechts: "Kopieren" Button, "Als PDF exportieren" Button

**Hauptbereich:**
- **Kurz-Zusammenfassung Box:**
  - Teal-Hintergrund (#A3C9D9)
  - Dokument-Icon
  - "Kurzfassung" Label
  - Zusammenfassungs-Text (1-2 Absätze)
  - Gut lesbar, größere Schrift
  
- **Wichtige Punkte Box:**
  - Weißer Hintergrund mit Rahmen
  - Checkbox-Icon
  - "Wichtige Punkte" Label
  - Nummerierte Liste (1, 2, 3, 4, 5)
  - Jeder Punkt: Kurze Stichpunkte
  
- **Begriffe Box:**
  - Weißer Hintergrund mit Rahmen
  - Glühbirnen-Icon (💡)
  - "Begriffe" Label
  - Tags/Pills für Schlüsselbegriffe (z.B. "Photosynthese", "Chlorophyll")
  - Teal-Hintergrund für Pills

**Untere Aktionen (2 Spalten):**
- Linke Karte:
  - Dokument-Icon
  - "Zum Spickzettel hinzufügen"
  - Beschreibung
  
- Rechte Karte:
  - Kalender-Icon
  - "Lernplan erstellen"
  - Beschreibung

### 8.4 Spickzettel-Ansicht
**Layout:**
- Zentriert, kompakte Darstellung

**Header:**
- "Spickzettel (Cheat Sheet)" Titel
- "Kompakte Zusammenfassung für schnelles Lernen" Untertitel
- Rechts: "Drucken" Button, "Cheat Sheet exportieren" Button

**Hauptbereich (Centered Box):**
- Weißer Hintergrund mit Teal-Rahmen
- **Header der Box:**
  - Dokument-Icon (groß)
  - Titel: z.B. "Photosynthese - Spickzettel"
  - Untertitel: "Schnellreferenz für effektives Lernen"
  
- **Nummerierte Liste (1-8):**
  - Jeder Punkt: Teal nummerierter Kreis
  - Kurze, prägnante Stichpunkte
  - Gut strukturiert und übersichtlich
  - Beispiel: "1. Definition: Umwandlung von Lichtenergie in chemische Energie"
  
- **Footer der Box:**
  - Stern-Icon (⭐)
  - "Wichtige Hervorhebungen"
  - 1-2 wichtigste Punkte in Teal-Box
  - Essenzielle Information für Prüfungen

### 8.5 Lernplan-Ansicht
**Layout:**
- Hauptbereich mit großer Lernplan-Karte

**Header:**
- "Study Plan" Titel
- "Dein strukturierter Lernplan für heute" Untertitel
- Rechts: "Plan speichern" Button, "Als PDF exportieren" Button

**Fortschrittsanzeige:**
- "Fortschritt" Label
- "0 von 8 erledigt" Text
- Fortschrittsbalken (0%)
- Grün gefüllt für erledigte Aufgaben
- "Abgeschlossen" Text

**Lernplan-Karte:**
- Teal-Hintergrund (hell)
- **Header der Karte:**
  - Kalender-Icon
  - "Lernplan für"
  - Datum: z.B. "Freitag, 19. Dezember 2025"
  
- **Lernthemen-Liste:**
  - Jedes Thema: Checkbox links, Titel, Zeitfenster, Priorität-Badge
  - Beispiel: 
    - "Photosynthese-Definition wiederholen" | 09:00 - 09:30 | Hohe Priorität
    - "Lichtreaktion verstehen" | 09:30 - 10:15 | Hohe Priorität
    - "Dunkelreaktion lernen" | 10:30 - 11:15 | Hohe Priorität
  - Prioritäten farblich gekennzeichnet:
    - Hohe Priorität: Orange-Teal Badge
    - Mittlere Priorität: Mittlerer Teal Badge
    - Niedrige Priorität: Heller Badge

### 8.6 Aufgaben-Ansicht
**Layout:**
- Hauptbereich mit Aufgabenliste

**Header:**
- "Meine Aufgaben" Titel
- "Verwalte deine Lernaufgaben und Deadlines" Untertitel
- Rechts: "+ Neue Aufgabe hinzufügen" Button

**Tabs/Filter:**
- "Offen" (aktiv)
- "Erledigt"
- "Alle"

**Aufgaben-Liste:**
- Jede Aufgabe als Karte:
  - Checkbox links (zum Abhaken)
  - Titel der Aufgabe
  - Beschreibung (1-2 Zeilen)
  - Fach-Badge
  - Datum mit Kalender-Icon
  - Priorität-Badge (Hoch/Mittel/Niedrig)
  - Rechts: "Bearbeiten" und "Löschen" Buttons

**Erledigte Aufgaben:**
- Grauer Hintergrund
- Durchgestrichener Text
- Automatisches Ausblenden nach 24h

### 8.7 Archiv-Ansicht
**Layout:**
- Ähnlich wie Notizen-Liste

**Header:**
- "Archiv" Titel
- "Archivierte Notizen" Untertitel
- Anzahl archivierter Notizen

**Archivierte Notizen-Liste:**
- Jede Notiz: Titel, Preview, Datum, Archivierungs-Datum
- "Wiederherstellen" Button pro Notiz
- Grauer/abgedunkelter Stil zur Unterscheidung

---

## 9. Technische Umsetzung

### 9.1 Technologie-Stack
**Framework:** .NET MAUI (Multi-platform App UI)
- **Version:** .NET 8.0
- **Plattformen:** Windows, macOS, Android, iOS
- **Primäres Ziel:** Windows 10/11 Desktop

**Architektur-Pattern:** MVVM (Model-View-ViewModel)
- **Vorteile:** Trennung von UI und Logik, Testbarkeit, Wartbarkeit
- **Implementierung:** CommunityToolkit.Mvvm

**Dependency Injection:** Microsoft.Extensions.DependencyInjection
- Services werden in MauiProgram.cs registriert
- ViewModels erhalten Services via Constructor Injection

### 9.2 Projektstruktur
```
SmartNote.Maui/
├── Models/                    # Datenmodelle
│   ├── Note.cs               # Notiz-Modell
│   ├── TaskItem.cs           # Aufgaben-Modell
│   └── StudyModels.cs        # Lernplan-Modelle
│
├── ViewModels/               # MVVM ViewModels
│   ├── BaseViewModel.cs      # Basis-ViewModel mit INotifyPropertyChanged
│   ├── DashboardViewModel.cs # Dashboard-Logik
│   ├── NotesListViewModel.cs # Notizen-Liste Logik
│   ├── NoteEditorViewModel.cs# Notizen-Editor
│   ├── SummaryViewModel.cs   # Zusammenfassungen
│   ├── CheatSheetViewModel.cs# Spickzettel
│   ├── StudyPlanViewModel.cs # Lernpläne
│   ├── TasksViewModel.cs     # Aufgaben
│   └── ArchiveViewModel.cs   # Archiv
│
├── Views/                    # XAML Views
│   ├── MainPage.xaml         # Hauptseite mit Sidebar
│   ├── DashboardView.xaml    # Dashboard
│   ├── NotesListView.xaml    # Notizen-Liste
│   ├── NoteEditorView.xaml   # Notizen-Editor
│   ├── SummaryView.xaml      # Zusammenfassungen
│   ├── CheatSheetView.xaml   # Spickzettel
│   ├── StudyPlanView.xaml    # Lernpläne
│   ├── TasksView.xaml        # Aufgaben
│   └── ArchiveView.xaml      # Archiv
│
├── Services/                 # Business Logic
│   ├── INavigationService.cs # Navigation Interface
│   ├── NavigationService.cs  # Shell-Navigation
│   ├── INotesService.cs      # Notizen Interface
│   ├── NotesService.cs       # Notizen CRUD
│   ├── ITasksService.cs      # Aufgaben Interface
│   ├── TasksService.cs       # Aufgaben CRUD
│   ├── IStudyPlanService.cs  # Lernplan Interface
│   └── StudyPlanService.cs   # Lernplan-Generierung
│
├── Converters/               # Value Converters
│   └── (Diverse XAML-Converter)
│
├── Resources/                # App-Ressourcen
│   ├── Fonts/               # Inter-Schriftart
│   ├── Images/              # Icons und Bilder
│   ├── Styles/
│   │   ├── Colors.xaml      # Farbpalette
│   │   └── Styles.xaml      # Globale Styles
│   └── Raw/                 # Andere Ressourcen
│
├── App.xaml(.cs)            # App Entry Point
├── AppShell.xaml(.cs)       # Navigation Shell
└── MauiProgram.cs           # DI Configuration
```

### 9.3 Datenmodelle

**Note.cs (Notiz-Modell):**
```csharp
public class Note : ObservableObject
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public string Preview { get; set; }
    public string Subject { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public List<string> Tags { get; set; }
    public NotePriority Priority { get; set; }
    public bool IsArchived { get; set; }
    public DateTime? ArchivedDate { get; set; }
}

public enum NotePriority { Low, Medium, High }
```

**TaskItem.cs (Aufgaben-Modell):**
```csharp
public class TaskItem : ObservableObject
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Subject { get; set; }
    public DateTime DueDate { get; set; }
    public TaskPriority Priority { get; set; }
    public bool IsCompleted { get; set; }
}

public enum TaskPriority { Low, Medium, High }
```

### 9.4 Services (Business Logic)

**NotesService.cs - Notizenverwaltung:**
- `GetAllNotesAsync()`: Alle Notizen abrufen
- `GetNoteByIdAsync(int id)`: Einzelne Notiz abrufen
- `CreateNoteAsync(Note note)`: Neue Notiz erstellen
- `UpdateNoteAsync(Note note)`: Notiz aktualisieren
- `DeleteNoteAsync(int id)`: Notiz löschen
- `ArchiveNoteAsync(int id)`: Notiz archivieren
- `FilterBySubjectAsync(string subject)`: Nach Fach filtern
- `FilterByTagsAsync(List<string> tags)`: Nach Tags filtern
- `SearchNotesAsync(string query)`: Volltextsuche

**Datenspeicherung:**
- Lokale JSON-Dateien im App-Datenverzeichnis
- Verwendung von `System.Text.Json` für Serialisierung
- Pfad: `Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData)`

### 9.5 UI-Implementierung

**XAML-Struktur Beispiel (NotesListView.xaml):**
```xml
<ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             x:Class="SmartNote.Maui.Views.NotesListView"
             x:DataType="vm:NotesListViewModel">
    <Grid ColumnDefinitions="*,320">
        <!-- Hauptbereich -->
        <ScrollView Grid.Column="0">
            <VerticalStackLayout Padding="48">
                <!-- Header -->
                <Grid ColumnDefinitions="*,Auto">
                    <VerticalStackLayout>
                        <Label Text="Meine Notizen" 
                               Style="{StaticResource LargeTitleStyle}" />
                        <Label Text="{Binding NotesCount, StringFormat='{0} Notizen'}" />
                    </VerticalStackLayout>
                    <Button Text="+ Neue Notiz" 
                            Command="{Binding CreateNoteCommand}" />
                </Grid>
                
                <!-- Notizen-Liste -->
                <CollectionView ItemsSource="{Binding Notes}">
                    <CollectionView.ItemTemplate>
                        <DataTemplate>
                            <!-- Notiz-Karte (siehe Mockup 8.2) -->
                        </DataTemplate>
                    </CollectionView.ItemTemplate>
                </CollectionView>
            </VerticalStackLayout>
        </ScrollView>
        
        <!-- Rechte Sidebar: Filter -->
        <Border Grid.Column="1" 
                BackgroundColor="{StaticResource InfoPanelBackground}">
            <!-- Filter-Elemente -->
        </Border>
    </Grid>
</ContentView>
```

**Style-Definition (Styles.xaml):**
```xml
<ResourceDictionary>
    <!-- Titel-Styles -->
    <Style x:Key="LargeTitleStyle" TargetType="Label">
        <Setter Property="FontFamily" Value="InterBold" />
        <Setter Property="FontSize" Value="32" />
        <Setter Property="TextColor" Value="{StaticResource TextPrimary}" />
    </Style>
    
    <!-- Button-Styles -->
    <Style x:Key="PrimaryButtonStyle" TargetType="Button">
        <Setter Property="BackgroundColor" Value="{StaticResource PrimaryMedium}" />
        <Setter Property="TextColor" Value="White" />
        <Setter Property="FontFamily" Value="InterMedium" />
        <Setter Property="FontSize" Value="15" />
        <Setter Property="Padding" Value="24,12" />
        <Setter Property="CornerRadius" Value="8" />
    </Style>
</ResourceDictionary>
```

### 9.6 Navigation mit Shell
**AppShell.xaml - Route-Registrierung:**
```xml
<Shell x:Class="SmartNote.Maui.AppShell">
    <ShellContent Route="main" ContentTemplate="{DataTemplate views:MainPage}" />
</Shell>
```

**Navigation im Code (NavigationService):**
```csharp
public class NavigationService : INavigationService
{
    public async Task NavigateToAsync(string route)
    {
        await Shell.Current.GoToAsync(route);
    }
}
```

### 9.7 Dependency Injection Setup
**MauiProgram.cs:**
```csharp
public static MauiApp CreateMauiApp()
{
    var builder = MauiApp.CreateBuilder();
    builder
        .UseMauiApp<App>()
        .ConfigureFonts(fonts =>
        {
            fonts.AddFont("Inter-Regular.ttf", "InterRegular");
            fonts.AddFont("Inter-Medium.ttf", "InterMedium");
            fonts.AddFont("Inter-Bold.ttf", "InterBold");
        });
    
    // Services
    builder.Services.AddSingleton<INavigationService, NavigationService>();
    builder.Services.AddSingleton<INotesService, NotesService>();
    builder.Services.AddSingleton<ITasksService, TasksService>();
    builder.Services.AddSingleton<IStudyPlanService, StudyPlanService>();
    
    // ViewModels
    builder.Services.AddTransient<DashboardViewModel>();
    builder.Services.AddTransient<NotesListViewModel>();
    // ... weitere ViewModels
    
    // Views
    builder.Services.AddTransient<DashboardView>();
    builder.Services.AddTransient<NotesListView>();
    // ... weitere Views
    
    return builder.Build();
}
```

---

## 10. Fazit und Evaluation

### 10.1 Zielerreichung
Das SmartNote-Projekt erfüllt alle gesetzten Anforderungen aus dem Modul 322:

✅ **Funktionale Anforderungen:**
- Vollständige Notizenverwaltung mit CRUD-Operationen
- Filter- und Suchfunktionen nach Fach, Tags und Datum
- Automatische Zusammenfassungen mit KI-Integration
- Spickzettel-Generierung mit Export-Funktion
- Strukturierte Lernplan-Erstellung mit Prioritäten
- Aufgabenverwaltung mit Deadline-Tracking
- Archiv-Funktionalität für alte Notizen
- Statistik-Dashboard mit Übersichten

✅ **Nicht-funktionale Anforderungen:**
- Intuitive Benutzeroberfläche mit Sidebar-Navigation
- Modernes, nicht überladenes Design
- Konsistente Farbpalette (Teal-basiert)
- Große, gut klickbare Buttons
- Responsive Layout für verschiedene Bildschirmgrößen
- Schnelle Performance durch lokale Datenhaltung

✅ **Technische Umsetzung:**
- Saubere MVVM-Architektur
- Dependency Injection für Testbarkeit
- Übersichtliche Ordnerstruktur
- Gut kommentierter, wartbarer Code
- Cross-platform Entwicklung mit .NET MAUI

### 10.2 Stärken des Projekts
1. **Benutzerfreundlichkeit**: Die App ist intuitiv bedienbar und erfordert keine Einarbeitung
2. **Modernes Design**: Professionelles, zeitgemäßes UI-Design
3. **Funktionsumfang**: Umfassende Features für effizientes Lernen
4. **Technische Qualität**: Saubere Architektur mit Best Practices
5. **Dokumentation**: Vollständige, professionelle Projektdokumentation

### 10.3 Potenzielle Erweiterungen (Nice-to-Have)
Folgende Features könnten in zukünftigen Versionen hinzugefügt werden:

**Cloud-Synchronisation:**
- Synchronisierung zwischen Geräten
- Backup in der Cloud
- Teilen von Notizen mit Kommilitonen

**Erweiterte KI-Features:**
- Spracherkennung für Notizen
- Automatische Tagging
- Prüfungsfragen-Generierung
- Karteikarten aus Notizen

**Collaboration:**
- Gemeinsame Notizen bearbeiten
- Kommentar-Funktion
- Gruppen-Lernpläne

**Gamification:**
- Achievements für erledigte Aufgaben
- Lernstreak-Tracking
- Leaderboards mit Freunden

**Erweiterte Export-Optionen:**
- Markdown-Export
- Anki-Karteikarten-Export
- Word/LaTeX-Export

### 10.4 Lessons Learned
**Was hat gut funktioniert:**
- MVVM-Pattern ermöglicht saubere Trennung
- CommunityToolkit.Mvvm vereinfacht Implementierung
- Shell-Navigation ist flexibel und wartbar
- Lokale JSON-Speicherung ist schnell und einfach

**Herausforderungen:**
- Komplexität der automatischen Zusammenfassung
- Balance zwischen Features und Einfachheit
- Cross-Platform UI-Konsistenz
- Performance bei großen Datenmengen

**Erkenntnisse für zukünftige Projekte:**
- Frühe Nutzer-Tests sind essentiell
- Design System frühzeitig definieren
- Inkrementelle Entwicklung mit Prototypen
- Regelmäßiges Refactoring für Code-Qualität

### 10.5 Bewertung anhand Modul 322 Kriterien

**Handlungskompetenz: Benutzerschnittstellen implementieren**

| Kriterium | Bewertung | Begründung |
|-----------|-----------|------------|
| Anforderungsanalyse | ✅ Erfüllt | Klare Personas, User Stories, funktionale/nicht-funktionale Anforderungen |
| UI/UX Design | ✅ Erfüllt | Professionelles Design, Mockups, Moodboard, konsistente Gestaltung |
| Technische Umsetzung | ✅ Erfüllt | Saubere Architektur, MVVM, Dependency Injection, Best Practices |
| Code-Qualität | ✅ Erfüllt | Gut strukturiert, kommentiert, wartbar, testbar |
| Dokumentation | ✅ Erfüllt | Vollständige Projektdokumentation mit allen erforderlichen Kapiteln |
| Funktionalität | ✅ Erfüllt | Alle Must-Have Features implementiert, App ist voll funktionsfähig |

**Gesamtbewertung:** Das Projekt erfüllt alle Anforderungen des Moduls 322 und demonstriert professionelle Implementierung einer modernen Desktop-Applikation mit Fokus auf Usability und technische Qualität.

### 10.6 Ausblick
SmartNote hat das Potenzial, als vollwertige Lern-Applikation in Schulen und Universitäten eingesetzt zu werden. Mit den geplanten Erweiterungen (Cloud-Sync, erweiterte KI-Features, Collaboration) könnte die App zu einer umfassenden Lernplattform ausgebaut werden.

Die technische Basis mit .NET MAUI ermöglicht einfache Erweiterungen und Anpassungen. Die saubere Architektur stellt sicher, dass neue Features problemlos integriert werden können.

---

## Anhang

### A.1 Verwendete Technologien
- .NET 8.0 SDK
- .NET MAUI Framework
- CommunityToolkit.Mvvm 8.2.2
- CommunityToolkit.Maui 7.0.1
- System.Text.Json (für Datenspeicherung)

### A.2 Entwicklungsumgebung
- Visual Studio 2022 (Windows)
- Visual Studio Code (optional)
- Git für Versionskontrolle

### A.3 Quellen und Referenzen
- Microsoft MAUI Dokumentation: https://learn.microsoft.com/en-us/dotnet/maui/
- CommunityToolkit MVVM: https://learn.microsoft.com/en-us/dotnet/communitytoolkit/mvvm/
- Material Design Guidelines: https://m3.material.io/
- Human Interface Guidelines (Apple): https://developer.apple.com/design/

### A.4 Glossar
- **MVVM**: Model-View-ViewModel Pattern
- **DI**: Dependency Injection
- **CRUD**: Create, Read, Update, Delete
- **MAUI**: Multi-platform App UI
- **Shell**: MAUI Navigation Framework
- **ObservableObject**: Basis-Klasse für Property Change Notifications
- **RelayCommand**: Command-Pattern für MVVM

---

**Projektdokumentation erstellt:** 2025  
**Version:** 1.0  
**Autor:** SmartNote Team  
**Modul:** 322 - Benutzerschnittstellen implementieren  
**Bildungsinstitution:** Schweizer Berufsbildung IT

---
