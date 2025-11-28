using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Dashboard ViewModel - Home screen with quick actions and recent items
/// Displays summary stats and quick navigation options
/// </summary>
public partial class DashboardViewModel : BaseViewModel
{
    private readonly INotesService _notesService;
    private readonly ITasksService _tasksService;
    
    [ObservableProperty]
    private ObservableCollection<Note> _recentNotes = new();
    
    [ObservableProperty]
    private ObservableCollection<TaskItem> _todaysTasks = new();
    
    [ObservableProperty]
    private int _notesThisWeek;
    
    [ObservableProperty]
    private int _completedTasks;
    
    [ObservableProperty]
    private int _totalTasks;
    
    [ObservableProperty]
    private string _studyTimeToday = "2h 45min";
    
    public DashboardViewModel(
        INavigationService navigationService,
        INotesService notesService,
        ITasksService tasksService) : base(navigationService)
    {
        _notesService = notesService;
        _tasksService = tasksService;
        Title = "Dashboard";
    }
    
    /// <summary>
    /// Load dashboard data asynchronously
    /// Called when view appears
    /// </summary>
    [RelayCommand]
    public async Task LoadDataAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            // Load recent notes
            var recentNotes = await _notesService.GetRecentNotesAsync(3);
            RecentNotes = new ObservableCollection<Note>(recentNotes);
            
            // Load today's tasks
            var activeTasks = await _tasksService.GetActiveTasksAsync();
            TodaysTasks = new ObservableCollection<TaskItem>(activeTasks.Take(2));
            
            // Load stats
            var allNotes = await _notesService.GetNotesAsync();
            NotesThisWeek = allNotes.Count(n => n.ModifiedDate >= DateTime.Now.AddDays(-7));
            
            var allActive = await _tasksService.GetActiveTasksAsync();
            var allCompleted = await _tasksService.GetCompletedTasksAsync();
            TotalTasks = allActive.Count() + allCompleted.Count();
            CompletedTasks = allCompleted.Count();
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Navigate to create a new note
    /// </summary>
    [RelayCommand]
    private async Task CreateNoteAsync()
    {
        await NavigationService.NavigateToAsync("editor");
    }
    
    /// <summary>
    /// Navigate to notes list
    /// </summary>
    [RelayCommand]
    private async Task ViewNotesAsync()
    {
        await NavigationService.NavigateToAsync("notes");
    }
    
    /// <summary>
    /// Navigate to tasks
    /// </summary>
    [RelayCommand]
    private async Task ViewTasksAsync()
    {
        await NavigationService.NavigateToAsync("tasks");
    }
    
    /// <summary>
    /// Open a specific note
    /// </summary>
    [RelayCommand]
    private async Task OpenNoteAsync(Note note)
    {
        var parameters = new Dictionary<string, object>
        {
            { "NoteId", note.Id }
        };
        await NavigationService.NavigateToAsync("editor", parameters);
    }
    
    /// <summary>
    /// Navigate to summary view
    /// </summary>
    [RelayCommand]
    private async Task ViewSummaryAsync()
    {
        await NavigationService.NavigateToAsync("summary");
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
}
