using SmartNote.Maui.Models;

namespace SmartNote.Maui.Services;

/// <summary>
/// Study Plan Service Interface
/// Manages AI-generated study plans
/// </summary>
public interface IStudyPlanService
{
    Task<IEnumerable<StudyDay>> GetStudyPlanAsync();
    Task<Dictionary<string, (string Hours, int Sessions)>> GetSubjectBreakdownAsync();
    Task<int> GetTotalSessionsAsync();
    Task<int> GetCompletedSessionsAsync();
    Task<TimeSpan> GetTotalStudyTimeAsync();
    Task ToggleSessionCompletionAsync(int sessionId);
    Task<IEnumerable<(string Subject, DateTime Date)>> GetUpcomingExamsAsync();
}

/// <summary>
/// Study Plan Service Implementation
/// Provides mock data matching the original React app
/// </summary>
public class StudyPlanService : IStudyPlanService
{
    private readonly List<StudyDay> _studyDays;
    private int _sessionIdCounter = 1;
    
    public StudyPlanService()
    {
        // Initialize with mock data matching original React implementation
        _studyDays = new List<StudyDay>
        {
            new StudyDay
            {
                Date = new DateTime(2025, 11, 25),
                Sessions = new List<StudySession>
                {
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "14:00 - 15:30", Subject = "Chemie", Topic = "Alkane wiederholen", Duration = TimeSpan.FromMinutes(90) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "16:00 - 17:00", Subject = "Mathematik", Topic = "Integrale üben", Duration = TimeSpan.FromMinutes(60) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "19:00 - 20:00", Subject = "Geschichte", Topic = "Weimarer Republik lesen", Duration = TimeSpan.FromMinutes(60) }
                }
            },
            new StudyDay
            {
                Date = new DateTime(2025, 11, 26),
                Sessions = new List<StudySession>
                {
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "15:00 - 16:30", Subject = "Chemie", Topic = "Alkene und Alkine", Duration = TimeSpan.FromMinutes(90) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "17:00 - 18:00", Subject = "Biologie", Topic = "Zellorganellen", Duration = TimeSpan.FromMinutes(60) }
                }
            },
            new StudyDay
            {
                Date = new DateTime(2025, 11, 27),
                Sessions = new List<StudySession>
                {
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "14:00 - 15:00", Subject = "Physik", Topic = "Elektrodynamik Aufgaben", Duration = TimeSpan.FromMinutes(60) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "16:00 - 17:30", Subject = "Geschichte", Topic = "Essay schreiben", Duration = TimeSpan.FromMinutes(90) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "18:00 - 19:00", Subject = "Mathematik", Topic = "Flächenberechnung", Duration = TimeSpan.FromMinutes(60) }
                }
            },
            new StudyDay
            {
                Date = new DateTime(2025, 11, 28),
                Sessions = new List<StudySession>
                {
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "15:00 - 16:00", Subject = "Chemie", Topic = "Alle Spickzettel durchgehen", Duration = TimeSpan.FromMinutes(60) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "17:00 - 18:30", Subject = "Mathematik", Topic = "Übungsklausur", Duration = TimeSpan.FromMinutes(90) }
                }
            },
            new StudyDay
            {
                Date = new DateTime(2025, 11, 29),
                Sessions = new List<StudySession>
                {
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "14:00 - 16:00", Subject = "Chemie", Topic = "Prüfungsvorbereitung", Duration = TimeSpan.FromMinutes(120) },
                    new StudySession { Id = _sessionIdCounter++, TimeSlot = "16:30 - 17:30", Subject = "Geschichte", Topic = "Zusammenfassung erstellen", Duration = TimeSpan.FromMinutes(60) }
                }
            }
        };
    }
    
    public Task<IEnumerable<StudyDay>> GetStudyPlanAsync()
    {
        return Task.FromResult(_studyDays.AsEnumerable());
    }
    
    public Task<Dictionary<string, (string Hours, int Sessions)>> GetSubjectBreakdownAsync()
    {
        var allSessions = _studyDays.SelectMany(d => d.Sessions).ToList();
        
        var breakdown = allSessions
            .GroupBy(s => s.Subject)
            .ToDictionary(
                g => g.Key,
                g => (
                    Hours: FormatHours(g.Sum(s => s.Duration.TotalHours)),
                    Sessions: g.Count()
                )
            );
        
        return Task.FromResult(breakdown);
    }
    
    public Task<int> GetTotalSessionsAsync()
    {
        return Task.FromResult(_studyDays.SelectMany(d => d.Sessions).Count());
    }
    
    public Task<int> GetCompletedSessionsAsync()
    {
        return Task.FromResult(_studyDays.SelectMany(d => d.Sessions).Count(s => s.IsCompleted));
    }
    
    public Task<TimeSpan> GetTotalStudyTimeAsync()
    {
        var totalMinutes = _studyDays
            .SelectMany(d => d.Sessions)
            .Sum(s => s.Duration.TotalMinutes);
        return Task.FromResult(TimeSpan.FromMinutes(totalMinutes));
    }
    
    public Task ToggleSessionCompletionAsync(int sessionId)
    {
        var session = _studyDays
            .SelectMany(d => d.Sessions)
            .FirstOrDefault(s => s.Id == sessionId);
        
        if (session != null)
        {
            session.IsCompleted = !session.IsCompleted;
        }
        
        return Task.CompletedTask;
    }
    
    public Task<IEnumerable<(string Subject, DateTime Date)>> GetUpcomingExamsAsync()
    {
        // Mock exam dates matching original React implementation
        var exams = new List<(string Subject, DateTime Date)>
        {
            ("Chemie Klausur", new DateTime(2025, 11, 30)),
            ("Mathe Test", new DateTime(2025, 12, 2)),
            ("Geschichte Essay", new DateTime(2025, 12, 5))
        };
        
        return Task.FromResult(exams.AsEnumerable());
    }
    
    private static string FormatHours(double hours)
    {
        if (hours < 1)
        {
            return $"{(int)(hours * 60)}min";
        }
        
        var wholeHours = (int)hours;
        var minutes = (int)((hours - wholeHours) * 60);
        
        if (minutes > 0)
        {
            return $"{wholeHours},{(int)(minutes * 10 / 60)}h";
        }
        
        return $"{wholeHours}h";
    }
}
