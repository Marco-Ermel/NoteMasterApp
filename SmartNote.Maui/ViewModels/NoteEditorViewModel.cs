using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Note Editor ViewModel - Edit and create notes with rich text editing
/// Implements full CRUD operations with data binding
/// </summary>
public partial class NoteEditorViewModel : BaseViewModel, IQueryAttributable
{
    private readonly INotesService _notesService;
    
    [ObservableProperty]
    private Note _currentNote = new();
    
    [ObservableProperty]
    private string _noteTitle = "Neue Notiz";
    
    [ObservableProperty]
    private string _noteContent = string.Empty;
    
    [ObservableProperty]
    private string _selectedSubject = "Chemie";
    
    [ObservableProperty]
    private ObservableCollection<string> _noteTags = new();
    
    [ObservableProperty]
    private ObservableCollection<string> _availableSubjects = new()
    {
        "Chemie", "Mathematik", "Geschichte", "Biologie", "Physik"
    };
    
    [ObservableProperty]
    private string _newTagText = string.Empty;
    
    [ObservableProperty]
    private DateTime _noteDate = DateTime.Now;
    
    [ObservableProperty]
    private NotePriority _selectedPriority = NotePriority.High;
    
    [ObservableProperty]
    private bool _isNewNote = true;
    
    public NoteEditorViewModel(
        INavigationService navigationService,
        INotesService notesService) : base(navigationService)
    {
        _notesService = notesService;
        Title = "Notiz bearbeiten";
        
        // Initialize with default sample content
        InitializeDefaultContent();
    }
    
    private void InitializeDefaultContent()
    {
        NoteContent = @"Definition: Alkane sind gesättigte Kohlenwasserstoffe mit der allgemeinen Summenformel CnH2n+2

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

Merksatz: ""Alkane sind die Basis der organischen Chemie - stabil und gesättigt""";
        
        NoteTags = new ObservableCollection<string> { "Alkane", "Kohlenwasserstoffe", "gesättigt" };
    }
    
    /// <summary>
    /// Handle query parameters for note loading
    /// </summary>
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        if (query.TryGetValue("NoteId", out var noteIdObj) && noteIdObj is int noteId)
        {
            _ = LoadNoteAsync(noteId);
        }
    }
    
    /// <summary>
    /// Load a specific note for editing
    /// </summary>
    private async Task LoadNoteAsync(int noteId)
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            var note = await _notesService.GetNoteByIdAsync(noteId);
            if (note != null)
            {
                CurrentNote = note;
                NoteTitle = note.Title;
                NoteContent = note.Content;
                SelectedSubject = note.Subject;
                NoteTags = new ObservableCollection<string>(note.Tags);
                NoteDate = note.ModifiedDate;
                SelectedPriority = note.Priority;
                IsNewNote = false;
            }
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Save the current note
    /// </summary>
    [RelayCommand]
    private async Task SaveNoteAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            CurrentNote.Title = NoteTitle;
            CurrentNote.Content = NoteContent;
            CurrentNote.Subject = SelectedSubject;
            CurrentNote.Tags = NoteTags.ToList();
            CurrentNote.Priority = SelectedPriority;
            CurrentNote.ModifiedDate = DateTime.Now;
            CurrentNote.Preview = NoteContent.Length > 100 ? NoteContent[..100] + "..." : NoteContent;
            
            if (IsNewNote)
            {
                await _notesService.AddNoteAsync(CurrentNote);
            }
            else
            {
                await _notesService.UpdateNoteAsync(CurrentNote);
            }
            
            await NavigationService.NavigateToAsync("notes");
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Cancel editing and go back
    /// </summary>
    [RelayCommand]
    private async Task CancelAsync()
    {
        await NavigationService.NavigateToAsync("notes");
    }
    
    /// <summary>
    /// Add a new tag
    /// </summary>
    [RelayCommand]
    private void AddTag()
    {
        if (!string.IsNullOrWhiteSpace(NewTagText) && !NoteTags.Contains(NewTagText))
        {
            NoteTags.Add(NewTagText);
            NewTagText = string.Empty;
        }
    }
    
    /// <summary>
    /// Remove a tag
    /// </summary>
    [RelayCommand]
    private void RemoveTag(string tag)
    {
        NoteTags.Remove(tag);
    }
    
    /// <summary>
    /// Navigate to summary generation
    /// </summary>
    [RelayCommand]
    private async Task GenerateSummaryAsync()
    {
        if (CurrentNote.Id > 0)
        {
            var parameters = new Dictionary<string, object>
            {
                { "NoteId", CurrentNote.Id }
            };
            await NavigationService.NavigateToAsync("summary", parameters);
        }
    }
    
    /// <summary>
    /// Navigate to cheat sheet generation
    /// </summary>
    [RelayCommand]
    private async Task GenerateCheatSheetAsync()
    {
        if (CurrentNote.Id > 0)
        {
            var parameters = new Dictionary<string, object>
            {
                { "NoteId", CurrentNote.Id }
            };
            await NavigationService.NavigateToAsync("cheatsheet", parameters);
        }
    }
    
    /// <summary>
    /// Navigate to study plan
    /// </summary>
    [RelayCommand]
    private async Task CreateStudyPlanAsync()
    {
        await NavigationService.NavigateToAsync("studyplan");
    }
    
    // Text formatting commands (for toolbar buttons)
    [RelayCommand]
    private void ToggleBold()
    {
        // Rich text formatting would be implemented here
        // For now, this is a placeholder for the toolbar button
    }
    
    [RelayCommand]
    private void ToggleItalic()
    {
        // Rich text formatting would be implemented here
    }
    
    [RelayCommand]
    private void ToggleList()
    {
        // Rich text formatting would be implemented here
    }
    
    [RelayCommand]
    private void ToggleHighlight()
    {
        // Rich text formatting would be implemented here
    }
    
    [RelayCommand]
    private void InsertImage()
    {
        // Image insertion would be implemented here
    }
}
