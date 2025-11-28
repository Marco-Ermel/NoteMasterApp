using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Archive ViewModel - Displays and manages archived notes
/// Allows restore and permanent deletion
/// </summary>
public partial class ArchiveViewModel : BaseViewModel
{
    private readonly INotesService _notesService;
    
    [ObservableProperty]
    private ObservableCollection<Note> _archivedNotes = new();
    
    [ObservableProperty]
    private int _archivedCount;
    
    [ObservableProperty]
    private int _archivedThisMonth;
    
    [ObservableProperty]
    private string _storageUsed = "2,4 MB";
    
    [ObservableProperty]
    private ObservableCollection<ArchiveSubjectCount> _bySubject = new();
    
    [ObservableProperty]
    private string _searchQuery = string.Empty;
    
    public ArchiveViewModel(
        INavigationService navigationService,
        INotesService notesService) : base(navigationService)
    {
        _notesService = notesService;
        Title = "Archiv";
    }
    
    /// <summary>
    /// Load archived notes
    /// </summary>
    [RelayCommand]
    public async Task LoadDataAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            var archived = await _notesService.GetArchivedNotesAsync();
            ArchivedNotes = new ObservableCollection<Note>(archived);
            ArchivedCount = ArchivedNotes.Count;
            
            // Calculate this month's archives
            var thisMonth = DateTime.Now.Month;
            ArchivedThisMonth = ArchivedNotes.Count(n => 
                n.ArchivedDate.HasValue && n.ArchivedDate.Value.Month == thisMonth);
            
            // Group by subject
            var groups = ArchivedNotes
                .GroupBy(n => n.Subject)
                .Select(g => new ArchiveSubjectCount
                {
                    Subject = g.Key,
                    Count = g.Count()
                });
            BySubject = new ObservableCollection<ArchiveSubjectCount>(groups);
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Restore a note from archive
    /// </summary>
    [RelayCommand]
    private async Task RestoreNoteAsync(Note note)
    {
        await _notesService.RestoreNoteAsync(note.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Permanently delete a note
    /// </summary>
    [RelayCommand]
    private async Task DeleteNoteAsync(Note note)
    {
        // In a full implementation, this would show a confirmation dialog
        await _notesService.DeleteNoteAsync(note.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Search archived notes
    /// </summary>
    [RelayCommand]
    private async Task SearchAsync()
    {
        var archived = await _notesService.GetArchivedNotesAsync();
        
        if (!string.IsNullOrWhiteSpace(SearchQuery))
        {
            var query = SearchQuery.ToLower();
            archived = archived.Where(n => 
                n.Title.ToLower().Contains(query) ||
                n.Subject.ToLower().Contains(query) ||
                n.Preview.ToLower().Contains(query));
        }
        
        ArchivedNotes = new ObservableCollection<Note>(archived);
        ArchivedCount = ArchivedNotes.Count;
    }
    
    /// <summary>
    /// Handle search query changes
    /// </summary>
    partial void OnSearchQueryChanged(string value)
    {
        _ = SearchAsync();
    }
}

/// <summary>
/// Helper class for archive subject counts
/// </summary>
public class ArchiveSubjectCount
{
    public string Subject { get; set; } = string.Empty;
    public int Count { get; set; }
}
