using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Tasks ViewModel - Task management with filtering
/// Displays active and completed tasks
/// </summary>
public partial class TasksViewModel : BaseViewModel
{
    private readonly ITasksService _tasksService;
    
    [ObservableProperty]
    private ObservableCollection<TaskItem> _activeTasks = new();
    
    [ObservableProperty]
    private ObservableCollection<TaskItem> _completedTasks = new();
    
    [ObservableProperty]
    private int _activeTasksCount;
    
    [ObservableProperty]
    private int _completedTasksCount;
    
    [ObservableProperty]
    private ObservableCollection<TaskSubjectCount> _tasksBySubject = new();
    
    [ObservableProperty]
    private int _dueTodayCount;
    
    [ObservableProperty]
    private int _dueThisWeekCount;
    
    [ObservableProperty]
    private string? _selectedSubjectFilter = "Alle Fächer";
    
    [ObservableProperty]
    private string? _selectedPriorityFilter = "Alle Prioritäten";
    
    [ObservableProperty]
    private string? _selectedSortOption = "Nach Fälligkeit";
    
    [ObservableProperty]
    private ObservableCollection<string> _subjectFilters = new()
    {
        "Alle Fächer", "Chemie", "Mathematik", "Geschichte", "Biologie", "Physik"
    };
    
    [ObservableProperty]
    private ObservableCollection<string> _priorityFilters = new()
    {
        "Alle Prioritäten", "Hoch", "Mittel", "Niedrig"
    };
    
    [ObservableProperty]
    private ObservableCollection<string> _sortOptions = new()
    {
        "Nach Fälligkeit", "Nach Priorität", "Nach Fach"
    };
    
    public TasksViewModel(
        INavigationService navigationService,
        ITasksService tasksService) : base(navigationService)
    {
        _tasksService = tasksService;
        Title = "Aufgaben";
    }
    
    /// <summary>
    /// Load tasks data
    /// </summary>
    [RelayCommand]
    public async Task LoadDataAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            // Load active tasks
            var active = await _tasksService.GetActiveTasksAsync();
            ActiveTasks = new ObservableCollection<TaskItem>(active);
            ActiveTasksCount = ActiveTasks.Count;
            
            // Load completed tasks
            var completed = await _tasksService.GetCompletedTasksAsync();
            CompletedTasks = new ObservableCollection<TaskItem>(completed);
            CompletedTasksCount = CompletedTasks.Count;
            
            // Load counts by subject
            var counts = await _tasksService.GetTaskCountBySubjectAsync();
            TasksBySubject = new ObservableCollection<TaskSubjectCount>(
                counts.Select(kvp => new TaskSubjectCount
                {
                    Subject = kvp.Key,
                    Count = kvp.Value
                })
            );
            
            // Load due date counts
            DueTodayCount = await _tasksService.GetDueTodayCountAsync();
            DueThisWeekCount = await _tasksService.GetDueThisWeekCountAsync();
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Toggle task completion
    /// </summary>
    [RelayCommand]
    private async Task ToggleTaskAsync(TaskItem task)
    {
        await _tasksService.ToggleTaskCompletionAsync(task.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Add a new task
    /// </summary>
    [RelayCommand]
    private async Task AddTaskAsync()
    {
        // In a full implementation, this would open a dialog or navigate to a form
        var newTask = new TaskItem
        {
            Title = "Neue Aufgabe",
            Description = "Beschreibung hinzufügen",
            Subject = "Chemie",
            DueDate = DateTime.Now.AddDays(1),
            Priority = TaskPriority.Medium
        };
        
        await _tasksService.AddTaskAsync(newTask);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Delete a task
    /// </summary>
    [RelayCommand]
    private async Task DeleteTaskAsync(TaskItem task)
    {
        await _tasksService.DeleteTaskAsync(task.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Apply filters
    /// </summary>
    [RelayCommand]
    private async Task ApplyFiltersAsync()
    {
        var active = await _tasksService.GetActiveTasksAsync();
        var filtered = active.AsEnumerable();
        
        // Apply subject filter
        if (!string.IsNullOrEmpty(SelectedSubjectFilter) && SelectedSubjectFilter != "Alle Fächer")
        {
            filtered = filtered.Where(t => t.Subject == SelectedSubjectFilter);
        }
        
        // Apply priority filter
        if (!string.IsNullOrEmpty(SelectedPriorityFilter) && SelectedPriorityFilter != "Alle Prioritäten")
        {
            var priority = SelectedPriorityFilter switch
            {
                "Hoch" => TaskPriority.High,
                "Mittel" => TaskPriority.Medium,
                "Niedrig" => TaskPriority.Low,
                _ => TaskPriority.Medium
            };
            filtered = filtered.Where(t => t.Priority == priority);
        }
        
        // Apply sort
        filtered = SelectedSortOption switch
        {
            "Nach Priorität" => filtered.OrderByDescending(t => t.Priority).ThenBy(t => t.DueDate),
            "Nach Fach" => filtered.OrderBy(t => t.Subject).ThenBy(t => t.DueDate),
            _ => filtered.OrderBy(t => t.DueDate)
        };
        
        ActiveTasks = new ObservableCollection<TaskItem>(filtered);
        ActiveTasksCount = ActiveTasks.Count;
    }
    
    /// <summary>
    /// Handle filter changes
    /// </summary>
    partial void OnSelectedSubjectFilterChanged(string? value)
    {
        _ = ApplyFiltersAsync();
    }
    
    partial void OnSelectedPriorityFilterChanged(string? value)
    {
        _ = ApplyFiltersAsync();
    }
    
    partial void OnSelectedSortOptionChanged(string? value)
    {
        _ = ApplyFiltersAsync();
    }
}

/// <summary>
/// Helper class for subject task count
/// </summary>
public class TaskSubjectCount
{
    public string Subject { get; set; } = string.Empty;
    public int Count { get; set; }
}
