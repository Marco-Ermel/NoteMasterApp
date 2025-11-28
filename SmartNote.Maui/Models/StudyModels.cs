using CommunityToolkit.Mvvm.ComponentModel;

namespace SmartNote.Maui.Models;

/// <summary>
/// StudyDay Model - Represents a day in the study plan
/// </summary>
public partial class StudyDay : ObservableObject
{
    [ObservableProperty]
    private DateTime _date;
    
    [ObservableProperty]
    private List<StudySession> _sessions = new();
    
    /// <summary>
    /// Formatted day name for display (e.g., "Montag, 25. Nov")
    /// </summary>
    public string FormattedDayName => Date.ToString("dddd, dd. MMM");
}

/// <summary>
/// StudySession Model - Represents a single study session within a day
/// </summary>
public partial class StudySession : ObservableObject
{
    [ObservableProperty]
    private int _id;
    
    [ObservableProperty]
    private string _timeSlot = string.Empty;
    
    [ObservableProperty]
    private string _subject = string.Empty;
    
    [ObservableProperty]
    private string _topic = string.Empty;
    
    [ObservableProperty]
    private bool _isCompleted;
    
    [ObservableProperty]
    private TimeSpan _duration;
}

/// <summary>
/// Summary Model - Represents an AI-generated summary
/// </summary>
public partial class Summary : ObservableObject
{
    [ObservableProperty]
    private int _id;
    
    [ObservableProperty]
    private string _noteTitle = string.Empty;
    
    [ObservableProperty]
    private string _subject = string.Empty;
    
    [ObservableProperty]
    private DateTime _createdDate;
    
    [ObservableProperty]
    private string _shortSummary = string.Empty;
    
    [ObservableProperty]
    private List<string> _keyPoints = new();
    
    [ObservableProperty]
    private List<TermDefinition> _terms = new();
    
    [ObservableProperty]
    private int _compressionPercent;
    
    [ObservableProperty]
    private int _readingTimeMinutes;
}

/// <summary>
/// TermDefinition - Key term with its definition
/// </summary>
public class TermDefinition
{
    public string Term { get; set; } = string.Empty;
    public string Definition { get; set; } = string.Empty;
}

/// <summary>
/// CheatSheet Model - Compact learning reference
/// </summary>
public partial class CheatSheet : ObservableObject
{
    [ObservableProperty]
    private int _id;
    
    [ObservableProperty]
    private string _title = string.Empty;
    
    [ObservableProperty]
    private string _subject = string.Empty;
    
    [ObservableProperty]
    private string _subtitle = string.Empty;
    
    [ObservableProperty]
    private List<CheatSheetSection> _sections = new();
    
    [ObservableProperty]
    private string _memoryTip = string.Empty;
}

/// <summary>
/// CheatSheetSection - Section within a cheat sheet
/// </summary>
public class CheatSheetSection
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public List<string> BulletPoints { get; set; } = new();
    public List<KeyValuePair<string, string>> Items { get; set; } = new();
}

/// <summary>
/// MenuItem Model - Navigation menu item
/// </summary>
public class MenuItem
{
    public string Id { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public bool IsActive { get; set; }
}
