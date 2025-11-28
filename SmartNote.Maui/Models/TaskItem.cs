using CommunityToolkit.Mvvm.ComponentModel;

namespace SmartNote.Maui.Models;

/// <summary>
/// TaskItem Model - Represents a learning task
/// Separated from Note to maintain clear domain boundaries
/// </summary>
public partial class TaskItem : ObservableObject
{
    [ObservableProperty]
    private int _id;
    
    [ObservableProperty]
    private string _title = string.Empty;
    
    [ObservableProperty]
    private string _description = string.Empty;
    
    [ObservableProperty]
    private string _subject = string.Empty;
    
    [ObservableProperty]
    private DateTime _dueDate = DateTime.Now;
    
    [ObservableProperty]
    private TaskPriority _priority = TaskPriority.Medium;
    
    [ObservableProperty]
    private bool _isCompleted;
    
    /// <summary>
    /// Formatted due date for display
    /// </summary>
    public string FormattedDueDate => DueDate.ToString("dd. MMM yyyy");
    
    /// <summary>
    /// Priority display text in German
    /// </summary>
    public string PriorityText => Priority switch
    {
        TaskPriority.High => "Hoch",
        TaskPriority.Medium => "Mittel",
        TaskPriority.Low => "Niedrig",
        _ => "Mittel"
    };
    
    /// <summary>
    /// Color key for priority badge
    /// </summary>
    public string PriorityColorKey => Priority switch
    {
        TaskPriority.High => "PriorityHigh",
        TaskPriority.Medium => "PriorityMedium",
        TaskPriority.Low => "PriorityLow",
        _ => "PriorityMedium"
    };
}

/// <summary>
/// Task priority levels
/// </summary>
public enum TaskPriority
{
    Low,
    Medium,
    High
}
