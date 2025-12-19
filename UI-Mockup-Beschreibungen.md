# SmartNote - UI & Mockup Beschreibungen
## Detaillierte Bildschirmspezifikationen

---

## Einführung

Dieses Dokument enthält präzise Beschreibungen aller UI-Screens der SmartNote-App. Jede Beschreibung ist so detailliert, dass daraus Screenshots oder Mockups gezeichnet werden könnten. Die Beschreibungen folgen dem Format: Layout, Elemente, Interaktionen.

---

## 1. Dashboard (Startseite)

### 1.1 Gesamtlayout
**Viewport:** 1440px Breite × 900px Höhe (Beispiel Desktop)  
**Struktur:** Zwei-Spalten-Layout
- **Linke Sidebar:** 220px Breite, dunkler Teal-Hintergrund (#103B40)
- **Hauptbereich:** ~900px Breite, weißer Hintergrund
- **Rechte Info-Sidebar:** 320px Breite, hellgrauer Hintergrund (#F9F9F9)

### 1.2 Linke Navigation Sidebar
**Position:** Fest links, volle Höhe

**Header (oben):**
- **Logo/App-Name:** "SmartNote" in Weiß, 24px, Inter Bold
- **Untertitel:** "Dein Lernassistent" in hellgrau, 13px
- **Padding:** 32px oben, 24px seitlich

**Navigationsmenü (vertikal):**
Jeder Menüpunkt: Icon (18px) + Label (15px), 48px Höhe
- 🏠 Dashboard (aktiv - hellerer Hintergrund)
- 📝 Notizen
- 📖 Zusammenfassungen
- 📄 Spickzettel
- 📅 Lernpläne
- ✅ Aufgaben
- 📊 Statistik
- 📦 Archiv

**Visuelles Feedback:**
- Aktiver Punkt: Hellerer Teal-Hintergrund (#346C73), weißer Text
- Hover: Subtile Aufhellung
- Nicht-aktiv: Transparenter Hintergrund, heller Text (#A3C9D9)

### 1.3 Hauptbereich (Dashboard Content)
**Padding:** 48px rundherum

**Section 1: Header**
- **Position:** Oben, zentriert
- **Icon:** Großes Dokument-Icon (64px), Teal-Kreis-Hintergrund
- **Haupttitel:** "SmartNote"  
  Font: Inter Bold, 36px, Farbe: #1A1A1A
- **Untertitel:** "Dein digitaler Lernassistent für intelligente Notizen"  
  Font: Inter Regular, 16px, Farbe: #666666
- **Spacing:** 16px zwischen Icon und Titel, 8px zwischen Titel und Untertitel

**Section 2: Action Cards Grid (2 Zeilen)**
**Spacing:** 32px vertikal zur Section davor

**Zeile 1: 3 Spalten (je ~280px Breite, 24px Abstand)**

**Karte 1: "Notiz scannen"**
- **Größe:** 280px × 180px
- **Hintergrund:** Gradient von #6A9BA6 zu #A3C9D9
- **Border:** 2px, Teal (#346C73), Radius: 12px
- **Icon:** Kamera-Symbol (32px), weiß, zentriert oben
- **Text:** "Notiz scannen" (18px, Bold, weiß)
- **Subtext:** "Scanne handschriftliche Notizen" (13px, Regular, weiß/90% Opacity)
- **Hover:** Leichte Schatten-Elevation

**Karte 2: "Notizen anzeigen"**
- **Größe:** 280px × 180px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 2px, mittlerer Teal (#6A9BA6), Radius: 12px
- **Icon:** Dokument-Symbol (32px), Teal (#346C73)
- **Text:** "Notizen anzeigen" (18px, Bold, #1A1A1A)
- **Subtext:** "Alle deine gespeicherten Notizen" (13px, Regular, #666666)

**Karte 3: "Aufgaben"**
- **Größe:** 280px × 180px
- **Hintergrund:** Dunkler Teal (#103B40)
- **Border:** Keine
- **Radius:** 12px
- **Icon:** Checkbox-Symbol (32px), weiß
- **Text:** "Aufgaben ansehen" (18px, Bold, weiß)
- **Subtext:** "Verwalte deine Lernaufgaben" (13px, Regular, weiß/90%)

**Zeile 2: 2 Spalten (je ~420px Breite, 24px Abstand)**

**Karte 4: "Zusammenfassungen"**
- **Größe:** 420px × 160px
- **Hintergrund:** #A3C9D9 (hellster Teal)
- **Border:** 1px, #6A9BA6, Radius: 12px
- **Icon:** Buch-Symbol (28px), Teal (#346C73)
- **Layout:** Icon links, Text rechts
- **Text:** "Zusammenfassungen" (20px, Bold)
- **Subtext:** "Erstelle automatisch Zusammenfassungen" (14px)

**Karte 5: "Lernpläne"**
- **Größe:** 420px × 160px
- **Hintergrund:** Gradient #6A9BA6 zu #A3C9D9
- **Border:** 1px, #346C73, Radius: 12px
- **Icon:** Kalender-Symbol (28px), weiß
- **Text:** "Lernpläne" (20px, Bold, weiß)
- **Subtext:** "Generiere einen strukturierten Tagesplan" (14px, weiß/90%)

**Zeile 3: 2 Spalten**

**Karte 6: "Spickzettel"**
- **Größe:** 420px × 160px
- **Hintergrund:** #346C73 (mittlerer Teal)
- **Icon:** Notiz-Symbol mit Linien (28px), weiß
- **Text:** "Spickzettel" (20px, Bold, weiß)
- **Subtext:** "Erstelle einen kompakten Cheat Sheet" (14px, weiß/90%)

**Karte 7: "Aufgaben" (alternativer Stil)**
- **Größe:** 420px × 160px
- **Hintergrund:** Dunkler (#103B40)
- **Icon:** Checkbox-checked Symbol (28px), weiß
- **Text:** "Aufgaben" (20px, Bold, weiß)
- **Subtext:** "Verwalte Lernaufgaben und Deadlines" (14px, weiß/90%)

**Section 3: "Zuletzt bearbeitet"**
**Position:** 48px unter Action Cards

**Titel:** "Zuletzt bearbeitet"
- Font: Inter Bold, 22px, #1A1A1A
- Margin-bottom: 24px

**Notizen-Liste (3-4 Karten):**

**Notiz-Karte (Beispiel):**
- **Größe:** Volle Breite × ~120px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 1px, #E0E0E0, Radius: 12px
- **Padding:** 24px
- **Margin:** 16px nach unten

**Content (Grid: Zwei Spalten - Haupt | Meta):**

**Linke Spalte (Haupt-Content):**
- **Titel:** "Photosynthese - Grundlagen" (18px, Bold, #1A1A1A)
- **Preview:** "Die Photosynthese ist der Prozess, bei dem Pflanzen Lichtene..." (14px, Regular, #666666, max 2 Zeilen)
- **Datum:** "📅 15. Januar 2025" (13px, Regular, #999999)

**Rechte Spalte (Meta):**
- **Uhr-Icon:** 16px, grau, rechts oben

**Hover-Effekt:**
- Leichte Schatten-Elevation
- Border-Color: #6A9BA6
- Cursor: Pointer

### 1.4 Rechte Info-Sidebar
**Position:** Fest rechts, volle Höhe
**Breite:** 320px
**Hintergrund:** #F9F9F9
**Padding:** 32px

**Section 1: "Heute anstehend"**
**Titel:**
- "Heute anstehend" (18px, Bold, #1A1A1A)
- Margin-bottom: 16px

**Aufgaben-Liste (3-4 Items):**

**Aufgaben-Card:**
- **Größe:** Volle Breite × ~90px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** Keine
- **Radius:** 8px
- **Padding:** 16px
- **Margin:** 12px nach unten

**Content:**
- **Checkbox:** Links, 20px, Teal wenn gecheckt
- **Titel:** "Photosynthese-Definition wiederholen" (15px, Medium, #1A1A1A)
- **Beschreibung:** "Grundlagen und Formeln durchgehen" (13px, Regular, #666666)
- **Abstand:** 8px zwischen Titel und Beschreibung

**Section 2: "Statistik"**
**Position:** 32px unter "Heute anstehend"

**Titel:**
- "Statistik" (18px, Bold, #1A1A1A)
- Margin-bottom: 12px

**Stat-Zeilen (3-4 Zeilen):**

**Zeile (Grid: Label | Wert):**
- **Label:** "Notizen diese Woche" (14px, Regular, #666666), links
- **Wert:** "12" (15px, Bold, #1A1A1A), rechts
- **Höhe:** 40px
- **Spacing:** 8px zwischen Zeilen

**Beispiel-Zeilen:**
1. "Notizen diese Woche" → "12"
2. "Erledigte Aufgaben" → "8/12"
3. "Lernzeit heute" → "2h 15min"

**Visuelle Trennung:**
- Dünne Linie (1px, #E0E0E0) zwischen Zeilen

---

## 2. Notizen-Liste Ansicht

### 2.1 Gesamtlayout
**Struktur:** Linke Sidebar (220px) | Hauptbereich (~900px) | Rechte Filter-Sidebar (320px)

### 2.2 Hauptbereich
**Padding:** 48px

**Header (Grid: Titel | Button):**

**Linke Seite:**
- **Haupttitel:** "Notizen" (32px, Bold, #1A1A1A)
- **Subtitle:** "6 Notizen gespeichert" (15px, Regular, #666666)
- **Spacing:** 8px zwischen Titel und Subtitle

**Rechte Seite:**
- **Button:** "+ Neue Notiz hinzufügen"
  - Größe: ~220px × 44px
  - Hintergrund: #346C73 (Teal)
  - Text: Weiß, 15px, Medium
  - Icon: Plus (+), 16px, links vom Text
  - Radius: 8px
  - Hover: Dunkler (#103B40)

**Notizen-Liste (vertikal):**
**Spacing:** 32px nach Header, 24px zwischen Karten

**Notiz-Karte (Beispiel: "Photosynthese - Grundlagen"):**
- **Größe:** Volle Breite × ~280px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 2px, #E0E0E0, Radius: 12px
- **Padding:** 24px

**Karten-Content (von oben nach unten):**

**1. Top-Bar (Grid: Meta | Aktionen):**

**Links (Meta-Daten):**
- **Fach-Badge:**
  - "Biologie" (oder entsprechendes Fach)
  - Hintergrund: #6A9BA6 (Teal Light)
  - Text: Weiß, 13px, Medium
  - Padding: 12px (horizontal), 4px (vertikal)
  - Radius: 4px
  
- **Datum (daneben):**
  - Icon: Uhr (14px), grau
  - Text: "15. Januar 2025" (13px, Regular, #999999)
  - Spacing: 4px zwischen Icon und Text

**Rechts (Aktionen):**
- **Button 1: "Bearbeiten"**
  - Icon: Stift (✏️), 16px
  - Größe: 40px × 40px
  - Hintergrund: Transparent → #F5F5F5 bei Hover
  - Radius: 8px
  
- **Button 2: "Löschen"**
  - Icon: Mülleimer (🗑️), 16px
  - Größe: 40px × 40px
  - Hintergrund: Transparent → #FEE2E2 bei Hover
  - Radius: 8px

**2. Titel:**
- **Text:** "Photosynthese - Grundlagen" (20px, Bold, #1A1A1A)
- **Margin:** 16px oben, 12px unten

**3. Preview:**
- **Text:** "Die Photosynthese ist der Prozess, bei dem Pflanzen Lichtene..." (15px, Regular, #666666)
- **Max-Lines:** 2 Zeilen
- **Truncation:** "..." am Ende
- **Margin:** 12px unten

**4. Tags-Zeile:**
- **Icon:** Tag-Symbol (14px), #999999
- **Tags (horizontal):**
  - Beispiele: "Biologie", "Pflanzen", "Chemie"
  - Hintergrund: #F0F9FF (sehr hell Teal)
  - Text: #346C73 (Teal), 13px, Regular
  - Padding: 8px (horizontal), 4px (vertikal)
  - Radius: 4px
  - Spacing: 8px zwischen Tags

**5. Trennlinie:**
- **Position:** 16px unter Tags
- **Style:** 1px, solid, #E0E0E0
- **Margin:** 16px oben und unten

**6. Action Buttons (horizontal):**
**Spacing:** 12px zwischen Buttons

- **Button 1: "Öffnen"**
  - Hintergrund: #346C73 (Primär Teal)
  - Text: Weiß, 15px, Medium
  - Padding: 20px (horizontal), 8px (vertikal)
  - Höhe: 40px
  - Radius: 8px
  
- **Button 2: "Zusammenfassung"**
  - Hintergrund: Transparent
  - Border: 1px, #346C73
  - Text: #346C73, 15px, Medium
  - Padding: 20px, 8px
  - Höhe: 40px
  - Radius: 8px
  
- **Button 3: "Spickzettel"**
  - Hintergrund: Transparent
  - Border: 1px, #346C73
  - Text: #346C73, 15px, Medium
  - Padding: 20px, 8px
  - Höhe: 40px
  - Radius: 8px

### 2.3 Rechte Filter-Sidebar
**Hintergrund:** #F9F9F9
**Padding:** 32px

**Section 1: "Fächer"**
**Titel:** "Fächer" (18px, Bold, #1A1A1A)
**Margin-bottom:** 12px

**Fächer-Liste (vertikal):**

**Fach-Item (z.B. "Mathematik"):**
- **Größe:** Volle Breite × 44px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** Keine
- **Radius:** 8px
- **Padding:** 12px
- **Margin:** 8px nach unten
- **Text:** 15px, Medium, #1A1A1A
- **Hover:** Hintergrund #E0E0E0
- **Aktiv:** Hintergrund #A3C9D9 (Teal Light), Text #103B40

**Fächer-Beispiele:**
- Mathematik
- Physik
- Chemie
- Biologie
- Informatik
- Deutsch

**Section 2: "Häufige Tags"**
**Position:** 32px unter "Fächer"

**Titel:** "Häufige Tags" (18px, Bold, #1A1A1A)
**Margin-bottom:** 16px

**Tags (FlexWrap Layout):**

**Tag-Pill:**
- **Hintergrund:** #6A9BA6 (Teal Light)
- **Text:** Weiß, 13px, Medium
- **Padding:** 12px (horizontal), 8px (vertikal)
- **Radius:** 8px
- **Margin:** 8px rechts, 8px unten
- **Hover:** Hintergrund #346C73 (dunkler)
- **Cursor:** Pointer

**Beispiel-Tags:**
- Optik
- Mechanik
- Formeln
- Konzepte
- Prüfung

---

## 3. Zusammenfassungen-Ansicht

### 3.1 Gesamtlayout
**Struktur:** Linke Sidebar (220px) | Hauptbereich (breiter, zentriert) | (Optional rechte Sidebar)

### 3.2 Header
**Position:** Oben, volle Breite des Hauptbereichs
**Padding:** 48px seitlich

**Grid: Titel | Aktionen**

**Links:**
- **Titel:** "Automatische Zusammenfassung" (32px, Bold, #1A1A1A)
- **Subtitle:** "KI-generierte Zusammenfassung deiner Notiz" (15px, Regular, #666666)

**Rechts:**
- **Button 1: "Kopieren"**
  - Icon: Kopieren-Symbol
  - Hintergrund: Transparent
  - Border: 1px, #346C73
  - Text: #346C73, 15px
  - Größe: ~140px × 40px
  
- **Button 2: "Als PDF exportieren"**
  - Icon: Download-Symbol
  - Hintergrund: #346C73
  - Text: Weiß, 15px
  - Größe: ~200px × 40px

### 3.3 Hauptbereich
**Padding:** 48px
**Max-Width:** 900px (zentriert)

**Section 1: Kurzfassung-Box**
- **Größe:** Volle Breite × Auto
- **Hintergrund:** Gradient #A3C9D9 zu #6A9BA6 (Teal)
- **Border:** Keine
- **Radius:** 12px
- **Padding:** 32px
- **Margin:** 32px unten

**Content:**
- **Icon:** Dokument-Symbol (40px), Teal (#346C73), zentriert oben
- **Label:** "Kurzfassung" (18px, Bold, #103B40)
- **Text:** Zusammenfassungs-Absatz (16px, Regular, #1A1A1A, Line-height: 1.6)
  - Beispiel: "Die Photosynthese ist der fundamentale Prozess, durch den Pflanzen Lichtenergie in chemische Energie umwandeln..."
- **Max-Lines:** Keine Begrenzung für Zusammenfassung

**Section 2: Wichtige Punkte-Box**
- **Größe:** Volle Breite × Auto
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 32px
- **Margin:** 24px unten

**Content:**
- **Header:**
  - Icon: Checkbox (✓), 24px, #346C73
  - Label: "Wichtige Punkte" (20px, Bold, #1A1A1A)
  - Spacing: 8px zwischen Icon und Label

- **Liste (nummeriert, 1-5):**
  
  **Listen-Item:**
  - **Nummer:** Teal-Kreis (#346C73), 28px Durchmesser, weiße Zahl (15px, Bold)
  - **Text:** 15px, Regular, #1A1A1A, Links vom Kreis
  - **Spacing:** 16px zwischen Items
  - **Padding-left:** 40px (für Text-Einzug)
  
  **Beispiel-Punkte:**
  1. "Photosynthese wandelt Lichtenergie in chemische Energie um"
  2. "Benötigt Chlorophyll, Licht, Wasser und Kohlendioxid"
  3. "Besteht aus Lichtreaktion (Thylakoid) und Dunkelreaktion (Stroma)"
  4. "Produziert Sauerstoff und Glucose"
  5. "Bildet die Grundlage der Nahrungskette"

**Section 3: Begriffe-Box**
- **Größe:** Volle Breite × Auto
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 32px
- **Margin:** 24px unten

**Content:**
- **Header:**
  - Icon: Glühbirne (💡), 24px
  - Label: "Begriffe" (20px, Bold, #1A1A1A)

- **Tags (FlexWrap):**
  
  **Begriff-Tag:**
  - **Hintergrund:** #346C73 (Teal)
  - **Text:** Weiß, 14px, Medium
  - **Padding:** 14px (horizontal), 8px (vertikal)
  - **Radius:** 8px
  - **Margin:** 8px rechts, 8px unten
  
  **Beispiel-Begriffe:**
  - Photosynthese
  - Chlorophyll
  - Lichtenergie
  - Kohlendioxid
  - Lichtreaktion
  - Dunkelreaktion

### 3.4 Untere Aktionen (2 Spalten)
**Position:** 32px unter Begriffe-Box
**Grid:** 2 Spalten (50% / 50%), 24px Abstand

**Karte 1: "Zum Spickzettel hinzufügen"**
- **Größe:** ~420px × 120px
- **Hintergrund:** #F5F5F5
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 24px

**Content:**
- Icon: Dokument mit Plus (24px), #346C73
- Titel: "Zum Spickzettel hinzufügen" (16px, Bold, #1A1A1A)
- Beschreibung: "Erstelle einen kompakten Cheat Sheet für schnelles Lernen" (13px, Regular, #666666)
- Hover: Border-Color #346C73

**Karte 2: "Lernplan erstellen"**
- **Größe:** ~420px × 120px
- **Hintergrund:** #F5F5F5
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 24px

**Content:**
- Icon: Kalender (24px), #346C73
- Titel: "Lernplan erstellen" (16px, Bold, #1A1A1A)
- Beschreibung: "Generiere einen strukturierten Tagesplan zum Lernen" (13px, Regular, #666666)
- Hover: Border-Color #346C73

---

## 4. Spickzettel-Ansicht

### 4.1 Gesamtlayout
**Struktur:** Linke Sidebar (220px) | Hauptbereich (zentriert, max 900px)

### 4.2 Header
**Padding:** 48px

**Grid: Titel | Aktionen**

**Links:**
- **Titel:** "Spickzettel (Cheat Sheet)" (32px, Bold, #1A1A1A)
- **Subtitle:** "Kompakte Zusammenfassung für schnelles Lernen" (15px, Regular, #666666)

**Rechts:**
- **Button 1: "Drucken"**
  - Icon: Drucker-Symbol
  - Hintergrund: Transparent
  - Border: 1px, #346C73
  - Text: #346C73, 15px
  - Größe: ~140px × 40px
  
- **Button 2: "Cheat Sheet exportieren"**
  - Icon: Download-Symbol
  - Hintergrund: #346C73
  - Text: Weiß, 15px
  - Größe: ~240px × 40px

### 4.3 Hauptbereich (Spickzettel-Karte)
**Position:** Zentriert, max-width 800px
**Margin:** 32px nach Header

**Spickzettel-Container:**
- **Größe:** 800px × Auto
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 2px, #346C73 (Teal)
- **Radius:** 12px
- **Padding:** 48px
- **Box-Shadow:** 0 4px 12px rgba(0,0,0,0.1)

**Header der Karte:**
- **Icon:** Dokument-Symbol (48px), Teal-Kreis-Hintergrund (#A3C9D9), zentriert
- **Titel:** "Photosynthese - Spickzettel" (28px, Bold, #1A1A1A)
- **Subtitle:** "Schnellreferenz für effektives Lernen" (15px, Regular, #666666)
- **Trennlinie:** 2px, #E0E0E0, 24px Margin oben/unten

**Nummerierte Liste (1-8):**

**Listen-Item (Beispiel):**

**Nummer-Kreis:**
- **Größe:** 36px Durchmesser
- **Hintergrund:** #346C73 (Teal)
- **Text:** Weiß, 16px, Bold
- **Position:** Float left

**Text:**
- **Position:** 50px links eingerückt (Platz für Kreis)
- **Font:** 15px, Regular, #1A1A1A
- **Line-height:** 1.6
- **Margin-bottom:** 20px

**Beispiel-Punkte:**
1. "**Definition:** Umwandlung von Lichtenergie in chemische Energie"
2. "**Standort:** Chloroplasten in Pflanzenzellen"
3. "**Hauptphasen:** Lichtreaktion & Dunkelreaktion"
4. "**Lichtreaktion:** Im Thylakoid, Wasserspaltung, ATP-Produktion"
5. "**Dunkelreaktion:** Im Stroma, CO₂-Fixierung, Glucose-Synthese"
6. "**Formel:** 6 CO₂ + 6 H₂O + Licht → C₆H₁₂O₆ + 6 O₂"
7. "**Chlorophyll:** Grüner Farbstoff, absorbiert Lichtenergie"
8. "**Bedeutung:** Sauerstoffproduktion, Nahrungsgrundlage"

**Footer der Karte:**
- **Trennlinie:** 2px, #E0E0E0, 24px Margin oben
- **Section-Label:**
  - Icon: Stern (⭐), 20px
  - Titel: "Wichtige Hervorhebungen" (18px, Bold, #1A1A1A)
  
- **Highlight-Box:**
  - **Hintergrund:** #A3C9D9 (hellster Teal)
  - **Border:** Keine
  - **Radius:** 8px
  - **Padding:** 20px
  - **Margin:** 16px oben
  - **Text:** "Chlorophyll ist essentiell" (15px, Bold, #103B40)

---

## 5. Lernplan-Ansicht

### 5.1 Gesamtlayout
**Struktur:** Linke Sidebar (220px) | Hauptbereich (breiter)

### 5.2 Header
**Padding:** 48px

**Grid: Titel | Aktionen**

**Links:**
- **Titel:** "Study Plan" (32px, Bold, #1A1A1A)
- **Subtitle:** "Dein strukturierter Lernplan für heute" (15px, Regular, #666666)

**Rechts:**
- **Button 1: "Plan speichern"**
  - Icon: Speichern-Symbol
  - Hintergrund: Transparent
  - Border: 1px, #346C73
  - Text: #346C73, 15px
  - Größe: ~160px × 40px
  
- **Button 2: "Als PDF exportieren"**
  - Icon: Download-Symbol
  - Hintergrund: #346C73
  - Text: Weiß, 15px
  - Größe: ~200px × 40px

### 5.3 Fortschrittsanzeige
**Position:** 32px unter Header
**Padding:** 0 48px

**Container:**
- **Größe:** Volle Breite × 80px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 24px

**Content (Grid: Label | Progress):**

**Links:**
- **Label:** "Fortschritt" (16px, Medium, #666666)
- **Value:** "0 von 8 erledigt" (20px, Bold, #1A1A1A)

**Rechts:**
- **Prozentsatz:** "0%" (28px, Bold, #346C73)
- **Status-Text:** "Abgeschlossen" (14px, Regular, #666666) - wenn 100%

**Fortschrittsbalken:**
- **Position:** Unter dem Grid, volle Breite
- **Höhe:** 12px
- **Hintergrund:** #E0E0E0
- **Radius:** 6px
- **Fill:** #059669 (Grün), animiert
- **Fill-Radius:** 6px

### 5.4 Hauptbereich (Lernplan-Karte)
**Position:** 32px unter Fortschrittsanzeige
**Padding:** 0 48px

**Lernplan-Container:**
- **Größe:** Volle Breite × Auto
- **Hintergrund:** Gradient #A3C9D9 zu #6A9BA6 (Teal, von hell nach dunkel)
- **Border:** Keine
- **Radius:** 12px
- **Padding:** 32px

**Header der Karte:**
- **Icon:** Kalender-Symbol (32px), #103B40
- **Label:** "Lernplan für" (16px, Medium, #103B40)
- **Datum:** "Freitag, 19. Dezember 2025" (22px, Bold, #103B40)
- **Spacing:** 16px zwischen Icon und Text

**Lernthemen-Liste:**
**Margin:** 24px nach Header

**Themen-Item (Beispiel):**

**Container:**
- **Größe:** Volle Breite × ~80px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** Keine
- **Radius:** 8px
- **Padding:** 20px
- **Margin:** 12px nach unten
- **Box-Shadow:** 0 2px 4px rgba(0,0,0,0.05)

**Content (Grid: Checkbox | Info | Priorität):**

**Checkbox (links):**
- **Größe:** 24px
- **Border:** 2px, #346C73
- **Checked:** Hintergrund #346C73, weißes Häkchen
- **Unchecked:** Weiß

**Info (Mitte):**
- **Titel:** "Photosynthese-Definition wiederholen" (16px, Medium, #1A1A1A)
- **Zeitfenster:**
  - Icon: Uhr (14px), #666666
  - Text: "09:00 - 09:30" (14px, Regular, #666666)
  - Spacing: 4px zwischen Icon und Text

**Priorität (rechts):**
- **Badge:**
  - Hintergrund variiert:
    - Hohe Priorität: #D97706 (Orange)
    - Mittlere Priorität: #346C73 (Teal)
    - Niedrige Priorität: #A3C9D9 (Heller Teal)
  - Text: "Hohe Priorität" / "Mittlere Priorität" / "Niedrige Priorität"
  - Text-Color: Weiß
  - Font: 13px, Medium
  - Padding: 10px (horizontal), 6px (vertikal)
  - Radius: 6px

**Beispiel-Themen:**
1. ☐ Photosynthese-Definition wiederholen | 09:00-09:30 | Hohe Priorität
2. ☐ Lichtreaktion verstehen | 09:30-10:15 | Hohe Priorität
3. ☐ Dunkelreaktion lernen | 10:30-11:15 | Hohe Priorität
4. ☐ Reaktionsgleichung auswendig lernen | 11:15-11:45 | Mittlere Priorität
5. ☐ Pause & Wiederholung | 12:00-12:30 | Niedrige Priorität
6. ☐ Zusammenhänge visualisieren | 13:00-13:45 | Mittlere Priorität
7. ☐ Karteikarten erstellen | 14:00-14:30 | Mittlere Priorität
8. ☐ Selbsttest durchführen | 14:30-15:00 | Hohe Priorität

**Interaktion:**
- **Hover:** Leichte Schatten-Elevation
- **Checkbox-Click:** Thema wird als erledigt markiert, Fortschritt updated

---

## 6. Aufgaben-Ansicht

### 6.1 Gesamtlayout
**Struktur:** Linke Sidebar (220px) | Hauptbereich (breiter)

### 6.2 Header
**Padding:** 48px

**Grid: Titel | Button**

**Links:**
- **Titel:** "Meine Aufgaben" (32px, Bold, #1A1A1A)
- **Subtitle:** "Verwalte deine Lernaufgaben und Deadlines" (15px, Regular, #666666)

**Rechts:**
- **Button:** "+ Neue Aufgabe hinzufügen"
  - Icon: Plus (+), 16px
  - Hintergrund: #346C73
  - Text: Weiß, 15px, Medium
  - Größe: ~240px × 44px
  - Radius: 8px

### 6.3 Tabs/Filter
**Position:** 32px unter Header
**Padding:** 0 48px

**Tab-Container:**
- **Hintergrund:** Transparent
- **Border-bottom:** 2px, #E0E0E0

**Tabs (horizontal):**

**Tab:**
- **Größe:** ~120px × 48px
- **Hintergrund:** Transparent
- **Text:** 15px, Medium
- **Aktiv:**
  - Text-Color: #346C73
  - Border-bottom: 3px, #346C73
- **Inaktiv:**
  - Text-Color: #666666
  - Hover: Text-Color #1A1A1A

**Beispiel-Tabs:**
- Offen (aktiv)
- Erledigt
- Alle

### 6.4 Aufgaben-Liste
**Position:** 24px unter Tabs
**Padding:** 0 48px

**Aufgaben-Karte (Beispiel):**

**Container:**
- **Größe:** Volle Breite × ~120px
- **Hintergrund:** Weiß (#FFFFFF)
- **Border:** 1px, #E0E0E0
- **Radius:** 12px
- **Padding:** 24px
- **Margin:** 16px nach unten

**Content (Grid: Checkbox | Info | Meta | Aktionen):**

**Checkbox (links):**
- **Größe:** 24px
- **Border:** 2px, #346C73
- **Position:** Vertikal zentriert

**Info (Mitte-Links):**
- **Titel:** "Mathe-Hausaufgaben fertigstellen" (18px, Medium, #1A1A1A)
- **Beschreibung:** "Seite 42-45, Aufgaben 1-10 lösen" (14px, Regular, #666666)
- **Spacing:** 8px zwischen Titel und Beschreibung

**Meta (Mitte-Rechts):**
- **Fach-Badge:**
  - Text: "Mathematik"
  - Hintergrund: #6A9BA6
  - Text-Color: Weiß
  - Font: 13px, Medium
  - Padding: 10px, 6px
  - Radius: 6px

- **Datum (darunter):**
  - Icon: Kalender (14px), #666666
  - Text: "20. Dez 2025" (14px, Regular, #666666)
  - Spacing: 4px zwischen Icon und Text

- **Priorität-Badge (darunter):**
  - Gleicher Stil wie Lernplan-Prioritäten
  - Beispiel: "Hohe Priorität" (Orange), "Mittlere Priorität" (Teal)

**Aktionen (rechts):**
- **Button 1: "Bearbeiten"**
  - Icon: Stift
  - Größe: 36px × 36px
  - Hintergrund: Transparent → #F5F5F5 bei Hover
  
- **Button 2: "Löschen"**
  - Icon: Mülleimer
  - Größe: 36px × 36px
  - Hintergrund: Transparent → #FEE2E2 bei Hover

**Erledigte Aufgaben (wenn Tab "Erledigt"):**
- **Hintergrund:** #F5F5F5 (Grau)
- **Titel:** Durchgestrichen
- **Text-Color:** #999999 (heller)
- **Checkbox:** Gecheckt, grau

---

## 7. Archiv-Ansicht

### 7.1 Gesamtlayout
**Struktur:** Ähnlich wie Notizen-Liste

**Unterschiede:**
- Titel: "Archiv"
- Subtitle: "Archivierte Notizen"
- Karten haben leicht reduzierten Opacity (0.85)
- Zusätzliches Datum: "Archiviert am: XX.XX.XXXX"

### 7.2 Archivierte Notiz-Karte

**Container:**
- **Opacity:** 0.85
- **Hintergrund:** #FAFAFA (sehr helles Grau)
- **Border:** 1px, #D0D0D0 (grauer)

**Zusätzlicher Button:**
- **"Wiederherstellen"**
  - Icon: Zurück-Pfeil
  - Hintergrund: #059669 (Grün)
  - Text: Weiß, 15px
  - Größe: ~160px × 40px

**Archivierungs-Datum:**
- **Position:** Unter dem Original-Datum
- **Icon:** Archiv-Symbol (14px), #999999
- **Text:** "Archiviert am: 10. Dez 2024" (13px, Italic, #999999)

---

## 8. Responsive Verhalten

### 8.1 Desktop (≥1440px)
- Volle Drei-Spalten-Layout
- Sidebar 220px
- Hauptbereich flexibel
- Info-Panel 320px

### 8.2 Tablet (768px - 1440px)
- Sidebar kollabiert zu Icons
- Hauptbereich nimmt mehr Platz
- Info-Panel optional ausblendbar

### 8.3 Mobile (< 768px)
- Hamburger-Menü für Navigation
- Vollbreiter Hauptbereich
- Info-Panel als Modal/Overlay
- Gestapelte Action-Buttons

---

## Fazit

Diese detaillierten Mockup-Beschreibungen bieten eine vollständige Spezifikation aller UI-Screens der SmartNote-App. Jeder Bildschirm ist so präzise beschrieben, dass ein Designer oder Entwickler die Ansicht exakt nachbauen kann. Die Beschreibungen enthalten:

- **Genaue Maße** (Breiten, Höhen, Abstände)
- **Farbwerte** (Hex-Codes)
- **Typografie** (Schriftgrößen, -gewichte, -familien)
- **Interaktionen** (Hover-States, Klick-Verhalten)
- **Icons und visuelle Elemente**
- **Layout-Strukturen** (Grid, Flex, Spacing)

Diese Dokumentation kann direkt in Word übernommen und für schulische Projektabgaben verwendet werden.
