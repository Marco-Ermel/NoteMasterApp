using SmartNote.Maui.Models;

namespace SmartNote.Maui.Services;

/// <summary>
/// Notes Service Interface
/// Provides CRUD operations for notes with async/await patterns
/// </summary>
public interface INotesService
{
    /// <summary>
    /// Get all active (non-archived) notes
    /// </summary>
    Task<IEnumerable<Note>> GetNotesAsync();
    
    /// <summary>
    /// Get all archived notes
    /// </summary>
    Task<IEnumerable<Note>> GetArchivedNotesAsync();
    
    /// <summary>
    /// Get a specific note by ID
    /// </summary>
    Task<Note?> GetNoteByIdAsync(int id);
    
    /// <summary>
    /// Get recent notes (for dashboard)
    /// </summary>
    Task<IEnumerable<Note>> GetRecentNotesAsync(int count = 3);
    
    /// <summary>
    /// Add a new note
    /// </summary>
    Task<Note> AddNoteAsync(Note note);
    
    /// <summary>
    /// Update an existing note
    /// </summary>
    Task UpdateNoteAsync(Note note);
    
    /// <summary>
    /// Delete a note permanently
    /// </summary>
    Task DeleteNoteAsync(int id);
    
    /// <summary>
    /// Archive a note
    /// </summary>
    Task ArchiveNoteAsync(int id);
    
    /// <summary>
    /// Restore a note from archive
    /// </summary>
    Task RestoreNoteAsync(int id);
    
    /// <summary>
    /// Get all unique subjects
    /// </summary>
    Task<IEnumerable<string>> GetSubjectsAsync();
    
    /// <summary>
    /// Get all unique tags
    /// </summary>
    Task<IEnumerable<string>> GetTagsAsync();
    
    /// <summary>
    /// Generate AI summary for a note
    /// </summary>
    Task<Summary> GenerateSummaryAsync(int noteId);
    
    /// <summary>
    /// Generate cheat sheet for a note
    /// </summary>
    Task<CheatSheet> GenerateCheatSheetAsync(int noteId);
}

/// <summary>
/// Notes Service Implementation
/// Provides mock data matching the original React app
/// In production, this would connect to a database or API
/// </summary>
public class NotesService : INotesService
{
    private readonly List<Note> _notes;
    
    public NotesService()
    {
        // Initialize with mock data matching original React implementation
        _notes = new List<Note>
        {
            new Note
            {
                Id = 1,
                Title = "Organische Chemie - Alkane",
                Content = @"Definition: Alkane sind gesättigte Kohlenwasserstoffe mit der allgemeinen Summenformel CnH2n+2

Eigenschaften:
• Nur Einfachbindungen zwischen C-Atomen
• Unpolar → wasserunlöslich
• Siedepunkt steigt mit Kettenlänge
• Reaktionsträge (daher ""gesättigt"")

Wichtige Alkane:
• Methan (CH₄) - einfachstes Alkan
• Ethan (C₂H₆)
• Propan (C₃H₈)
• Butan (C₄H₁₀)

Reaktionen:
Hauptreaktion ist die radikalische Substitution (z.B. Halogenierung)

Merksatz: ""Alkane sind die Basis der organischen Chemie - stabil und gesättigt""",
                Preview = "Definition, Eigenschaften und Reaktionen von gesättigten Kohlenwasserstoffen...",
                Subject = "Chemie",
                Tags = new List<string> { "Alkane", "Kohlenwasserstoffe" },
                CreatedDate = new DateTime(2025, 11, 22),
                ModifiedDate = new DateTime(2025, 11, 22),
                Priority = NotePriority.High
            },
            new Note
            {
                Id = 2,
                Title = "Geschichte - Weimarer Republik",
                Content = "Entstehung nach dem 1. Weltkrieg, politische Strukturen, Krisenjahre...",
                Preview = "Entstehung nach dem 1. Weltkrieg, politische Strukturen, Krisenjahre...",
                Subject = "Geschichte",
                Tags = new List<string> { "Weimar", "Deutschland", "1920er" },
                CreatedDate = new DateTime(2025, 11, 21),
                ModifiedDate = new DateTime(2025, 11, 21),
                Priority = NotePriority.Medium
            },
            new Note
            {
                Id = 3,
                Title = "Mathematik - Integralrechnung",
                Content = "Stammfunktionen, bestimmte und unbestimmte Integrale, Flächenberechnung...",
                Preview = "Stammfunktionen, bestimmte und unbestimmte Integrale, Flächenberechnung...",
                Subject = "Mathematik",
                Tags = new List<string> { "Integral", "Analysis" },
                CreatedDate = new DateTime(2025, 11, 20),
                ModifiedDate = new DateTime(2025, 11, 20),
                Priority = NotePriority.High
            },
            new Note
            {
                Id = 4,
                Title = "Biologie - Zellbiologie",
                Content = "Aufbau prokaryotischer und eukaryotischer Zellen, Organellen und ihre Funktionen...",
                Preview = "Aufbau prokaryotischer und eukaryotischer Zellen, Organellen und ihre Funktionen...",
                Subject = "Biologie",
                Tags = new List<string> { "Zelle", "Organellen" },
                CreatedDate = new DateTime(2025, 11, 19),
                ModifiedDate = new DateTime(2025, 11, 19),
                Priority = NotePriority.Medium
            },
            new Note
            {
                Id = 5,
                Title = "Physik - Elektrodynamik",
                Content = "Elektrische Felder, Spannung, Stromstärke und Widerstand...",
                Preview = "Elektrische Felder, Spannung, Stromstärke und Widerstand...",
                Subject = "Physik",
                Tags = new List<string> { "Elektrizität", "Felder" },
                CreatedDate = new DateTime(2025, 11, 18),
                ModifiedDate = new DateTime(2025, 11, 18),
                Priority = NotePriority.Low
            },
            // Archived notes
            new Note
            {
                Id = 6,
                Title = "Biologie - Fotosynthese",
                Content = "Lichtabhängige und lichtunabhängige Reaktionen...",
                Preview = "Lichtabhängige und lichtunabhängige Reaktionen...",
                Subject = "Biologie",
                Tags = new List<string> { "Fotosynthese", "Pflanzen" },
                CreatedDate = new DateTime(2025, 11, 15),
                ModifiedDate = new DateTime(2025, 11, 15),
                IsArchived = true,
                ArchivedDate = new DateTime(2025, 11, 20)
            },
            new Note
            {
                Id = 7,
                Title = "Geschichte - Industrialisierung",
                Content = "Technische Innovationen und soziale Auswirkungen...",
                Preview = "Technische Innovationen und soziale Auswirkungen...",
                Subject = "Geschichte",
                Tags = new List<string> { "Industrie", "19. Jahrhundert" },
                CreatedDate = new DateTime(2025, 11, 10),
                ModifiedDate = new DateTime(2025, 11, 10),
                IsArchived = true,
                ArchivedDate = new DateTime(2025, 11, 18)
            },
            new Note
            {
                Id = 8,
                Title = "Physik - Newtonsche Gesetze",
                Content = "Trägheitsgesetz, Aktionsprinzip, Wechselwirkungsprinzip...",
                Preview = "Trägheitsgesetz, Aktionsprinzip, Wechselwirkungsprinzip...",
                Subject = "Physik",
                Tags = new List<string> { "Newton", "Mechanik" },
                CreatedDate = new DateTime(2025, 11, 8),
                ModifiedDate = new DateTime(2025, 11, 8),
                IsArchived = true,
                ArchivedDate = new DateTime(2025, 11, 15)
            },
            new Note
            {
                Id = 9,
                Title = "Mathematik - Quadratische Funktionen",
                Content = "Scheitelpunktform, Normalform, Nullstellen berechnen...",
                Preview = "Scheitelpunktform, Normalform, Nullstellen berechnen...",
                Subject = "Mathematik",
                Tags = new List<string> { "Funktionen", "Parabeln" },
                CreatedDate = new DateTime(2025, 11, 5),
                ModifiedDate = new DateTime(2025, 11, 5),
                IsArchived = true,
                ArchivedDate = new DateTime(2025, 11, 12)
            },
            new Note
            {
                Id = 10,
                Title = "Chemie - Periodensystem",
                Content = "Aufbau, Gruppen, Perioden und Elementeigenschaften...",
                Preview = "Aufbau, Gruppen, Perioden und Elementeigenschaften...",
                Subject = "Chemie",
                Tags = new List<string> { "Elemente", "PSE" },
                CreatedDate = new DateTime(2025, 11, 1),
                ModifiedDate = new DateTime(2025, 11, 1),
                IsArchived = true,
                ArchivedDate = new DateTime(2025, 11, 8)
            }
        };
    }
    
    public Task<IEnumerable<Note>> GetNotesAsync()
    {
        return Task.FromResult(_notes.Where(n => !n.IsArchived).AsEnumerable());
    }
    
    public Task<IEnumerable<Note>> GetArchivedNotesAsync()
    {
        return Task.FromResult(_notes.Where(n => n.IsArchived).AsEnumerable());
    }
    
    public Task<Note?> GetNoteByIdAsync(int id)
    {
        return Task.FromResult(_notes.FirstOrDefault(n => n.Id == id));
    }
    
    public Task<IEnumerable<Note>> GetRecentNotesAsync(int count = 3)
    {
        return Task.FromResult(_notes
            .Where(n => !n.IsArchived)
            .OrderByDescending(n => n.ModifiedDate)
            .Take(count)
            .AsEnumerable());
    }
    
    public Task<Note> AddNoteAsync(Note note)
    {
        note.Id = _notes.Max(n => n.Id) + 1;
        note.CreatedDate = DateTime.Now;
        note.ModifiedDate = DateTime.Now;
        _notes.Add(note);
        return Task.FromResult(note);
    }
    
    public Task UpdateNoteAsync(Note note)
    {
        var existing = _notes.FirstOrDefault(n => n.Id == note.Id);
        if (existing != null)
        {
            existing.Title = note.Title;
            existing.Content = note.Content;
            existing.Subject = note.Subject;
            existing.Tags = note.Tags;
            existing.Priority = note.Priority;
            existing.ModifiedDate = DateTime.Now;
        }
        return Task.CompletedTask;
    }
    
    public Task DeleteNoteAsync(int id)
    {
        var note = _notes.FirstOrDefault(n => n.Id == id);
        if (note != null)
        {
            _notes.Remove(note);
        }
        return Task.CompletedTask;
    }
    
    public Task ArchiveNoteAsync(int id)
    {
        var note = _notes.FirstOrDefault(n => n.Id == id);
        if (note != null)
        {
            note.IsArchived = true;
            note.ArchivedDate = DateTime.Now;
        }
        return Task.CompletedTask;
    }
    
    public Task RestoreNoteAsync(int id)
    {
        var note = _notes.FirstOrDefault(n => n.Id == id);
        if (note != null)
        {
            note.IsArchived = false;
            note.ArchivedDate = null;
        }
        return Task.CompletedTask;
    }
    
    public Task<IEnumerable<string>> GetSubjectsAsync()
    {
        return Task.FromResult(_notes
            .Where(n => !n.IsArchived)
            .Select(n => n.Subject)
            .Distinct()
            .AsEnumerable());
    }
    
    public Task<IEnumerable<string>> GetTagsAsync()
    {
        return Task.FromResult(_notes
            .Where(n => !n.IsArchived)
            .SelectMany(n => n.Tags)
            .Distinct()
            .AsEnumerable());
    }
    
    public Task<Summary> GenerateSummaryAsync(int noteId)
    {
        var note = _notes.FirstOrDefault(n => n.Id == noteId);
        if (note == null)
        {
            throw new ArgumentException($"Note with ID {noteId} not found");
        }
        
        // Mock AI-generated summary (matching original React implementation)
        var summary = new Summary
        {
            Id = noteId,
            NoteTitle = note.Title,
            Subject = note.Subject,
            CreatedDate = DateTime.Now,
            CompressionPercent = 85,
            ReadingTimeMinutes = 3,
            ShortSummary = @"Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich Einfachbindungen zwischen den Kohlenstoffatomen. Sie folgen der Summenformel CnH2n+2 und sind aufgrund ihrer unpolaren Struktur wasserunlöslich. Ihre Reaktionsträgheit macht sie zu stabilen Verbindungen, weshalb sie auch als ""gesättigt"" bezeichnet werden. Die wichtigsten Vertreter sind Methan, Ethan, Propan und Butan.",
            KeyPoints = new List<string>
            {
                "Alkane enthalten nur C-C-Einfachbindungen und sind daher gesättigt",
                "Summenformel: CnH2n+2 für unverzweigte Alkane",
                "Unpolare Moleküle → lösen sich nicht in Wasser",
                "Siedepunkt steigt mit zunehmender Kettenlänge",
                "Hauptreaktion: Radikalische Substitution (z.B. Halogenierung)",
                "Methan (CH₄) ist das einfachste und häufigste Alkan"
            },
            Terms = new List<TermDefinition>
            {
                new() { Term = "Gesättigt", Definition = "Nur Einfachbindungen zwischen C-Atomen" },
                new() { Term = "Kohlenwasserstoff", Definition = "Verbindung aus nur Kohlenstoff und Wasserstoff" },
                new() { Term = "Unpolar", Definition = "Keine elektrische Ladungsverteilung im Molekül" },
                new() { Term = "Radikalische Substitution", Definition = "Reaktionsmechanismus mit freien Radikalen" },
                new() { Term = "Homologe Reihe", Definition = "Serie von Verbindungen mit gleichem Grundaufbau" },
                new() { Term = "Siedepunkt", Definition = "Temperatur, bei der ein Stoff vom flüssigen in gasförmigen Zustand übergeht" }
            }
        };
        
        return Task.FromResult(summary);
    }
    
    public Task<CheatSheet> GenerateCheatSheetAsync(int noteId)
    {
        var note = _notes.FirstOrDefault(n => n.Id == noteId);
        if (note == null)
        {
            throw new ArgumentException($"Note with ID {noteId} not found");
        }
        
        // Mock cheat sheet generation (matching original React implementation)
        var cheatSheet = new CheatSheet
        {
            Id = noteId,
            Title = "ALKANE - Spickzettel",
            Subject = note.Subject,
            Subtitle = "Gesättigte Kohlenwasserstoffe",
            MemoryTip = "💡 MERKSATZ: \"Alkane sind die Basis der organischen Chemie - stabil und gesättigt\"",
            Sections = new List<CheatSheetSection>
            {
                new()
                {
                    Title = "DEFINITION",
                    Content = "Gesättigte Kohlenwasserstoffe mit nur Einfachbindungen zwischen C-Atomen"
                },
                new()
                {
                    Title = "SUMMENFORMEL",
                    Content = "CₙH₂ₙ₊₂"
                },
                new()
                {
                    Title = "EIGENSCHAFTEN",
                    BulletPoints = new List<string>
                    {
                        "Nur C-C-Einfachbindungen",
                        "Unpolar → wasserunlöslich",
                        "Siedepunkt ↑ mit Kettenlänge",
                        "Reaktionsträge (gesättigt)"
                    }
                },
                new()
                {
                    Title = "WICHTIGE ALKANE",
                    Items = new List<KeyValuePair<string, string>>
                    {
                        new("Methan", "CH₄ - einfachstes"),
                        new("Ethan", "C₂H₆ - 2 C-Atome"),
                        new("Propan", "C₃H₈ - 3 C-Atome"),
                        new("Butan", "C₄H₁₀ - 4 C-Atome")
                    }
                },
                new()
                {
                    Title = "REAKTIONEN",
                    Content = "Hauptreaktion: Radikalische Substitution (z.B. Halogenierung)"
                }
            }
        };
        
        return Task.FromResult(cheatSheet);
    }
}
