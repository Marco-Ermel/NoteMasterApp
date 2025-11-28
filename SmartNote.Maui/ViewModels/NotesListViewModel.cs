using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Notes List ViewModel - Displays all notes with filtering and sorting
/// </summary>
public partial class NotesListViewModel : BaseViewModel
{
    private readonly INotesService _notesService;
    
    [ObservableProperty]
    private ObservableCollection<Note> _notes = new();
    
    [ObservableProperty]
    private ObservableCollection<string> _subjects = new();
    
    [ObservableProperty]
    private ObservableCollection<string> _tags = new();
    
    [ObservableProperty]
    private string? _selectedSubject;
    
    [ObservableProperty]
    private string? _selectedTag;
    
    [ObservableProperty]
    private int _notesCount;
    
    public NotesListViewModel(
        INavigationService navigationService,
        INotesService notesService) : base(navigationService)
    {
        _notesService = notesService;
        Title = "Meine Notizen";
    }
    
    /// <summary>
    /// Load notes data
    /// </summary>
    [RelayCommand]
    public async Task LoadDataAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            var notes = await _notesService.GetNotesAsync();
            Notes = new ObservableCollection<Note>(notes);
            NotesCount = Notes.Count;
            
            var subjects = await _notesService.GetSubjectsAsync();
            Subjects = new ObservableCollection<string>(subjects);
            
            var tags = await _notesService.GetTagsAsync();
            Tags = new ObservableCollection<string>(tags);
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Create a new note
    /// </summary>
    [RelayCommand]
    private async Task CreateNoteAsync()
    {
        await NavigationService.NavigateToAsync("editor");
    }
    
    /// <summary>
    /// Open a note for editing
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
    /// Edit a specific note
    /// </summary>
    [RelayCommand]
    private async Task EditNoteAsync(Note note)
    {
        await OpenNoteAsync(note);
    }
    
    /// <summary>
    /// Delete a note
    /// </summary>
    [RelayCommand]
    private async Task DeleteNoteAsync(Note note)
    {
        await _notesService.DeleteNoteAsync(note.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// View summary for a note
    /// </summary>
    [RelayCommand]
    private async Task ViewSummaryAsync(Note note)
    {
        var parameters = new Dictionary<string, object>
        {
            { "NoteId", note.Id }
        };
        await NavigationService.NavigateToAsync("summary", parameters);
    }
    
    /// <summary>
    /// View cheat sheet for a note
    /// </summary>
    [RelayCommand]
    private async Task ViewCheatSheetAsync(Note note)
    {
        var parameters = new Dictionary<string, object>
        {
            { "NoteId", note.Id }
        };
        await NavigationService.NavigateToAsync("cheatsheet", parameters);
    }
    
    /// <summary>
    /// Filter notes by subject
    /// </summary>
    [RelayCommand]
    private async Task FilterBySubjectAsync(string subject)
    {
        SelectedSubject = subject;
        await ApplyFiltersAsync();
    }
    
    /// <summary>
    /// Filter notes by tag
    /// </summary>
    [RelayCommand]
    private async Task FilterByTagAsync(string tag)
    {
        SelectedTag = tag;
        await ApplyFiltersAsync();
    }
    
    private async Task ApplyFiltersAsync()
    {
        var allNotes = await _notesService.GetNotesAsync();
        var filtered = allNotes.AsEnumerable();
        
        if (!string.IsNullOrEmpty(SelectedSubject))
        {
            filtered = filtered.Where(n => n.Subject == SelectedSubject);
        }
        
        if (!string.IsNullOrEmpty(SelectedTag))
        {
            filtered = filtered.Where(n => n.Tags.Contains(SelectedTag));
        }
        
        Notes = new ObservableCollection<Note>(filtered);
        NotesCount = Notes.Count;
    }
}
