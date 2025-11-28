using CommunityToolkit.Mvvm.ComponentModel;

namespace SmartNote.Maui.Models;

/// <summary>
/// Note Model - Represents a single note in the system
/// Uses ObservableObject for automatic property change notifications
/// </summary>
public partial class Note : ObservableObject
{
    [ObservableProperty]
    private int _id;
    
    [ObservableProperty]
    private string _title = string.Empty;
    
    [ObservableProperty]
    private string _content = string.Empty;
    
    [ObservableProperty]
    private string _preview = string.Empty;
    
    [ObservableProperty]
    private string _subject = string.Empty;
    
    [ObservableProperty]
    private DateTime _createdDate = DateTime.Now;
    
    [ObservableProperty]
    private DateTime _modifiedDate = DateTime.Now;
    
    [ObservableProperty]
    private List<string> _tags = new();
    
    [ObservableProperty]
    private NotePriority _priority = NotePriority.Medium;
    
    [ObservableProperty]
    private bool _isArchived;
    
    [ObservableProperty]
    private DateTime? _archivedDate;
    
    /// <summary>
    /// Formatted date string for display
    /// </summary>
    public string FormattedDate => ModifiedDate.ToString("dd. MMM yyyy");
    
    /// <summary>
    /// Formatted archived date string
    /// </summary>
    public string FormattedArchivedDate => ArchivedDate?.ToString("dd. MMM yyyy") ?? string.Empty;
}

/// <summary>
/// Note priority levels
/// </summary>
public enum NotePriority
{
    Low,
    Medium,
    High
}
