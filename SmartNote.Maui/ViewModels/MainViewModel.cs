using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Main ViewModel - Manages overall app state and sidebar navigation
/// Coordinates between different views
/// </summary>
public partial class MainViewModel : BaseViewModel
{
    private readonly INotesService _notesService;
    private readonly ITasksService _tasksService;
    
    [ObservableProperty]
    private string _activeScreen = "dashboard";
    
    [ObservableProperty]
    private ObservableCollection<Models.MenuItem> _menuItems = new();
    
    [ObservableProperty]
    private Note? _selectedNote;
    
    public MainViewModel(
        INavigationService navigationService,
        INotesService notesService,
        ITasksService tasksService) : base(navigationService)
    {
        _notesService = notesService;
        _tasksService = tasksService;
        Title = "SmartNote";
        
        InitializeMenuItems();
        
        // Subscribe to navigation changes
        NavigationService.NavigationChanged += OnNavigationChanged;
    }
    
    private void InitializeMenuItems()
    {
        MenuItems = new ObservableCollection<Models.MenuItem>
        {
            new Models.MenuItem { Id = "dashboard", Label = "Dashboard", Icon = "home.png", IsActive = true },
            new Models.MenuItem { Id = "notes", Label = "Notizen", Icon = "file_text.png", IsActive = false },
            new Models.MenuItem { Id = "tasks", Label = "Aufgaben", Icon = "check_square.png", IsActive = false },
            new Models.MenuItem { Id = "summary", Label = "Zusammenfassungen", Icon = "file_check.png", IsActive = false },
            new Models.MenuItem { Id = "cheatsheet", Label = "Spickzettel", Icon = "book_open.png", IsActive = false },
            new Models.MenuItem { Id = "studyplan", Label = "Lernpläne", Icon = "book_open.png", IsActive = false },
            new Models.MenuItem { Id = "archive", Label = "Archiv", Icon = "archive.png", IsActive = false },
            new Models.MenuItem { Id = "story", Label = "Story-Szenen", Icon = "presentation.png", IsActive = false }
        };
    }
    
    private void OnNavigationChanged(object? sender, string route)
    {
        ActiveScreen = route;
        UpdateActiveMenuItem(route);
    }
    
    private void UpdateActiveMenuItem(string route)
    {
        foreach (var item in MenuItems)
        {
            // Handle sub-routes (editor, scan-result) as part of notes
            item.IsActive = item.Id == route || 
                           (item.Id == "notes" && (route == "editor" || route == "scan-result"));
        }
    }
    
    /// <summary>
    /// Navigate to a menu item and update active state
    /// </summary>
    [RelayCommand]
    private async Task SelectMenuItemAsync(Models.MenuItem item)
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            ActiveScreen = item.Id;
            UpdateActiveMenuItem(item.Id);
            await NavigationService.NavigateToAsync(item.Id);
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Create a new note and navigate to editor
    /// </summary>
    [RelayCommand]
    private async Task CreateNewNoteAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            SelectedNote = new Note
            {
                Title = "Neue Notiz",
                Subject = "Chemie",
                Tags = new List<string>()
            };
            await NavigationService.NavigateToAsync("editor");
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Select a note for viewing/editing
    /// </summary>
    public void SelectNote(Note note)
    {
        SelectedNote = note;
    }
}
